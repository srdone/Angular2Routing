import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LazyLoadedComponent } from './lazy-loaded.component';
import { ChildComponent } from './child.component';
import { AddChildComponent } from './add-child.component';

import { ChildrenStore } from './children.store';

const routes: Routes = [
    {
        path: '',
        component: LazyLoadedComponent,
        children: [
            {path: '', redirectTo: 'child/1'},
            {path: 'child/:childId', component: ChildComponent}
        ]
    }
];

@NgModule({
    declarations: [
        LazyLoadedComponent,
        ChildComponent,
        AddChildComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        LazyLoadedComponent
    ],
    providers: [
        ChildrenStore
    ]
})
export class LazyLoadedModule {}