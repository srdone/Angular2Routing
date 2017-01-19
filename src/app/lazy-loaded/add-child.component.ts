import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidV4 } from 'uuid';

import { ChildrenStore } from './children.store';

import { Child } from './child.interface';

@Component({
    selector: 'add-child',
    template: `
        <h4>Add Child</h4>
        <form novalidate (ngSubmit)="onSubmit(newChildForm)" [formGroup]="newChildForm">
            <label>
                <span>Name</span>
                <input type="text" placeholder="Enter child name" formControlName="name">
            </label>
            <label>
                <span>Father</span>
                <input type="text" placeholder="Enter father's name" formControlName="father">
            </label>
            <label>
                <span>Mother</span>
                <input type="text" placeholder="Enter mother's name" formControlName="mother">
            </label>
            <button type="submit" [disabled]="newChildForm.invalid">Add Child</button>
            <button (click)="clear()">Clear</button>
        </form>
    `
})
export class AddChildComponent implements OnInit {
    newChildForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private childrenStore: ChildrenStore
    ) {}

    ngOnInit() {
        this._resetForm();
    }

    onSubmit(form: FormGroup) {
        if (form.valid) {
            let child: Child = form.value;
            child.id = uuidV4();
            this.childrenStore.addChild(child);
        }
    }

    clear() {
        this._resetForm();
    }

    _resetForm() {
        this.newChildForm = this.formBuilder.group({
            name: ['', Validators.required],
            father: ['', Validators.required],
            mother: ['', Validators.required]
        });
    }

}