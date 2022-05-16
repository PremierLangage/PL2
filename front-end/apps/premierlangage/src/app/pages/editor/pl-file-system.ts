import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FileSystemProvider, FileSystemProviderCapabilities, IFile, Paths, SearchForm, SearchResult } from '@cisstech/nge-ide/core';

interface IRemoteFile {
    type: 'file' | 'folder';
    path: string;
    parent: string;
    read: boolean;
    write: boolean;
    children?: IRemoteFile[];
    repo?: {
        url: string;
        branch: string;
    },
}

class FileImpl implements IFile {
    readonly uri: monaco.Uri;
    readonly version: number;
    readonly readOnly: boolean;
    readonly isFolder: boolean;
    readonly downloadUrl: string;

    constructor(
        entry: IRemoteFile,
    ) {
        let path = Paths.normalize(entry.path);
        this.uri = monaco.Uri.parse(`file:///${path}`);
        this.version = 0;
        this.readOnly = !entry.write;
        this.isFolder = entry.type === 'folder';
        this.downloadUrl = `/filebrowser/files/${path}?download`;
    }
}

export class PlFileSystem extends FileSystemProvider {
    readonly scheme = 'file';

    readonly capabilities = FileSystemProviderCapabilities.FileRead |
        FileSystemProviderCapabilities.FileWrite |
        FileSystemProviderCapabilities.FileMove |
        FileSystemProviderCapabilities.FileDelete |
        FileSystemProviderCapabilities.FileSearch |
        FileSystemProviderCapabilities.FileUpload;

    constructor(
        private readonly http: HttpClient,
    ) {
        super();
    }

    async readDirectory(uri: monaco.Uri): Promise<IFile[]> {
        const response = await this.http.get<IRemoteFile>('/filebrowser/files' + uri.path).toPromise();
        const files: IFile[] = [];
        const transform = (entry: IRemoteFile) => {
            files.push(new FileImpl(entry));
            entry.children?.forEach(transform);
        };
        if (response) {
            transform(response);
        }
        return files;
    }

    async read(uri: monaco.Uri): Promise<string> {
        const response = await this.http.get<{
            content: string
        }>('/filebrowser/files' + uri.path).toPromise();
        return response!.content;
    }

    async write(uri: monaco.Uri, content: string, update?: boolean) {
        if (update) {
            await this.http.put('/filebrowser/files' + uri.path, { content }).toPromise();
        } else {
            const relpath = uri.path.replace(/^\/[^/]+\//, '');
            await this.http.post('/filebrowser/files' + uri.path, {
                files: {
                    // remove leading slash
                    [relpath]: { type: 'file', content }
                }
            }).toPromise();
        }
    }

    async createDirectory(uri: monaco.Uri) {
        const relpath = uri.path.replace(/^\/[^/]+\//, '');
        await this.http.post('/filebrowser/files' + uri.path, {
            files: {
                // remove leading slash
                [relpath]: { type: 'folder' }
            }
        }).toPromise();
    }

    async delete(uri: monaco.Uri) {
        await this.http.delete('/filebrowser/files' + uri.path).toPromise();
    }

    async rename(uri: monaco.Uri, name: string) {
        const relpath = uri.path.replace(/^\/[^/]+\//, '');
        await this.http.patch('/filebrowser/files' + uri.path, {
            action: 'rename',
            newpath: Paths.join([Paths.dirname(relpath), name])
        }).toPromise();
    }

    async move(source: monaco.Uri, destination: monaco.Uri, options?: { copy: boolean }) {
        const newpath = destination.path.replace(/^\/[^/]+\//, '');
        await this.http.patch('/filebrowser/files' + source.path, {
            action: 'move',
            newpath,
            copy: !!options?.copy
        }).toPromise();
    }

    async upload(file: File, destination: monaco.Uri): Promise<void> {
        const formData = new FormData();
        formData.append('file', file, file.name);
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'null');
        headers.set('Accept', 'multipart/form-data');
        await this.http.post('/filebrowser/files' + destination.path, formData, {
            headers: headers
        }).toPromise();
    }

    async search(
        uri: monaco.Uri,
        form: SearchForm
    ): Promise<SearchResult<monaco.Uri>[]> {
        let params = new HttpParams();
        params = params.append('search', form.query);
        params = params.append('match_case', form.matchCase ? 'true' : 'false');
        params = params.append('use_regex', form.useRegex ? 'true' : 'false');
        params = params.append('wholeWord', form.matchWord ? 'true' : 'false');

        type Match = {
            match: string,
            line: number,
            path: string
        };

        const response = await this.http.get<Match[]>('/filebrowser/files' + uri.path, {
            params
        }).toPromise();

        const results: SearchResult<monaco.Uri>[] = [];
        response?.forEach(({ match, line, path }) => {
            const entry = monaco.Uri.parse(`file:///${path}`);
            const existing = results.find(r => r.entry.toString() === entry.toString());

            if (existing) {
                existing.matches.push({ match, lineno: line });
            } else {
                results.push({
                    entry: entry,
                    matches: [{ match, lineno: line }]
                });
            }

        });
        return results;
    }
}

