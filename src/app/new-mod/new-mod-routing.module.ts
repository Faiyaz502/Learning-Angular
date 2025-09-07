import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewModComponent } from './new-mod.component';
import { ParentComponent } from './parent/parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';

const routes: Routes = [

  { path: 'home2', component: ParentComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'service', component: ServiceDemoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewModRoutingModule { }
