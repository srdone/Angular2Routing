import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ChildrenStore } from './children.store';
import { Child } from './child.interface';

@Component({
    template: `
        <h3>Lazy Loaded Module</h3>
        <ul>
            <li *ngFor="let child of children | async">
                <a [routerLink]="['child', child.id]">{{child.name}}</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class LazyLoadedComponent implements OnInit {
    children: Observable<Array<Child>>;

    constructor(private childrenStore: ChildrenStore) {}

    ngOnInit() {
        this.children = this.childrenStore.children;
    }    

}