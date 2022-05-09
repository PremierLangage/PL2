export class Counter {
    // tslint:disable-next-line: variable-name
    private _next = 0;
    get next(): number {
        return this._next++;
    }
}
