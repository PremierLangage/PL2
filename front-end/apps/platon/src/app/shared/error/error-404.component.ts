import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error-404',
    template: `
        <nz-result
            nzTitle="404"
            nzStatus="404"
            nzSubTitle="
            Le contenu de cette page ne peut pas être affiché.
            Il est possible qu'il soit temporairement indisponible ou supprimé.
            ">
        </nz-result>
    `
})

export class Error404Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}
