import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ChildrenStore } from './children.store';
import { Child } from './child.interface';

@Component({
    template: `
        <div *ngIf="child">
            <h3>Child {{child.id}}: {{child.name}}</h3>
            <h4>Father: {{child.father}}</h4>
            <h4>Mother: {{child.mother}}</h4>
        </div>
    `
})
export class ChildComponent implements OnInit {
    child: Child;
    lastChildId: number;

    constructor (private router: Router, private activatedRoute: ActivatedRoute, private childrenStore: ChildrenStore) {}

    ngOnInit() {
        this.activatedRoute.params
            .switchMap((params: Params) => {
                return this.childrenStore.getChild(params['childId'])
            })
            .subscribe((child: Child) => this.child = child);
    }

}