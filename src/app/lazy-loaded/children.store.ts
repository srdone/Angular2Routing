import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Child } from './child.interface';

@Injectable()
export class ChildrenStore {
    private _children: BehaviorSubject<Array<Child>> = new BehaviorSubject([
        {
            id: 1,
            name: 'Bamm Bamm Rubble',
            father: 'Barney Rubble',
            mother: 'Betty Rubble'
        },
        {
            id: 2,
            name: 'Pebbles Flintstone',
            father: 'Fred Flintstone',
            mother: 'Wilma Flintstone'
        }
    ]);

    children: Observable<Array<Child>> = this._children.asObservable();

    addChild(newChild: Child) {
        let currentChildren = this._children.getValue();
        let newChildren = [...currentChildren, newChild];

        this._children.next(newChildren);
    }

    removeChild(childID: number) {
        let currentChildren = this._children.getValue();
        let newChildren = currentChildren.filter(child => child.id !== childID);

        this._children.next(newChildren);
    }

    updateChild(editedChild: Child) {
        let currentChildren = this._children.getValue();
        let childIndex = currentChildren.findIndex(child => child.id === editedChild.id);
        let newChildren = [
            ...currentChildren.slice(0, childIndex - 1),
            editedChild,
            ...currentChildren.slice(childIndex + 1, currentChildren.length - 1)
        ];

        this._children.next(newChildren);
    }

}