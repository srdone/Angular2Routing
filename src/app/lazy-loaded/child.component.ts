import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    template: `
        <h3>Child {{childId}}</h3>
        <h4>Last Child Viewed: Child {{lastChildId}}</h4>
        <button (click)="goToPreviousChild()">Previous Child</button>
        <button (click)="goToNextChild()">Next Child</button>
    `
})
export class ChildComponent implements OnInit {
    childId: number;
    lastChildId: number;

    constructor (private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.params
            .subscribe((params: Params) => {
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