import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-grid',
    templateUrl: 'grid.page.html',
    styleUrls: ['grid.page.scss'],
})

export class GridPage {

    constructor( private router: Router) {}
}