import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileService, IdeService } from '@cisstech/nge-ide/core';
import { PlFileSystem } from './pl-file-system';


@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {

    constructor(
        private readonly ide: IdeService,
        private readonly http: HttpClient,
        private readonly fileService: FileService,
    ) { }

    ngOnInit() {
        this.ide.onAfterStart(() => {
            this.fileService.registerProvider(new PlFileSystem(this.http));
            this.fileService.registerFolders({
                name: 'home',
                uri: monaco.Uri.parse('file:///Yggdrasil')
            }, {
                name: 'lib',
                uri: monaco.Uri.parse('file:///lib')
            });
        });
    }

}
