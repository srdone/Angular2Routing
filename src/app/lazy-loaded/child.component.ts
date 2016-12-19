import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ChildrenStore } from './children.store';
import { Child } from './child.interface';

@Component({
    template: `
        <h3>Child {{childId}}: {{currentChild.name}}</h3>
        <h4>Father: {{currentChild.father}}</h4>
        <h4>Mother: {{currentChild.mother}}</h4>
        <hr/>
        <h4>Last Child Viewed: Child {{lastChildId}}</h4>
        <button (click)="goToPreviousChild()">Previous Child</button>
        <button (click)="goToNextChild()">Next Child</button>
    `
})
export class ChildComponent implements OnInit {
    currentChild: Child;
    childId: number;
    lastChildId: number;

    constructor (private router: Router, private activatedRoute: ActivatedRoute, private childrenStore: ChildrenStore) {}

    ngOnInit() {
        this.activatedRoute.params
            .switchMap((params: Params) => {
                // this is bad practice: we should not have side-effects in our RxJS operators
                // need to figure out how to pass a different structure up - probably create a new observable
                this.childId = +params['childId'];
                this.lastChildId = +params['lastChildId'];
                return this.childrenStore.getChild(+params['childId'])
            })
            .subscribe((child: Child) => this.currentChild = child);
    }

    goToPreviousChild() {
        let previousChildId = this.childId - 1;
        this.router.navigate(['/lazy-loaded/child', previousChildId, {lastChildId: this.childId}]);
    }

    goToNextChild() {
        let nextChildId = this.childId + 1;
        this.router.navigate(['/lazy-loaded/child', nextChildId, {lastChildId: this.childId}]);
    }

}