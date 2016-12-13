import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EagerlyLoadedComponent } from './eagerly-loaded.component';

const routes: Routes = [
    {path: '', component: EagerlyLoadedComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [
        EagerlyLoadedComponent
    ],
    providers: [],
    exports: [
        EagerlyLoadedComponent
    ]
})
export class EagerlyLoadedModule {}