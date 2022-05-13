import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error-500',
    template: `
        <nz-result
            nzTitle="500"
            nzStatus="500"
            nzSubTitle="Désolé, il y a une erreur sur le serveur.">
        </nz-result>
    `
})

export class Error500Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}
