import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewModRoutingModule } from './new-mod-routing.module';
import { NewModComponent } from './new-mod.component';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NavComponent } from './nav/nav.component';
import { PipeComponent } from './pipe/pipe.component';
import { CurrencyConverterPipe } from './currency-converter.pipe';

import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { ɵInternalFormsSharedModule } from "@angular/forms";


@NgModule({
  declarations: [
    NewModComponent,

    ParentComponent,
    ChildComponent,
    NavComponent,
    PipeComponent,
    CurrencyConverterPipe,
    ServiceDemoComponent
  ],
  imports: [
    CommonModule,
    NewModRoutingModule,
    ɵInternalFormsSharedModule
]
})
export class NewModModule { }
