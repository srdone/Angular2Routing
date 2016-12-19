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
            .subscribe((params: Params) => {
                this.childrenStore.children.subscribe(children => this.currentChild = children.find(child => +params['childId'] === child.id))
                this.childId = +params['childId'];
                this.lastChildId = +params['lastChildId'];
            });
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