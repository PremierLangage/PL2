import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error-403',
    template: `
        <nz-result
            nzTitle="403"
            nzStatus="403"
            nzSubTitle="Désolé, vous n’êtes pas autorisé à accéder à cette page.">
        </nz-result>
    `
})

export class Error403Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}
