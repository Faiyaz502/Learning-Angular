import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { EventComponent } from './components/event/event.component';
import { StyleComponent } from './components/style/style.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { LoopComponent } from './components/loop/loop.component';
import { DynamicStyleComponent } from './components/dynamic-style/dynamic-style.component';
import { ErrorComponent } from './components/error/error.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReceiveDataComponent } from './components/receive-data/receive-data.component';
import { UserComponent } from './components/user/user.component';
import { FormComponent } from './components/form/form.component';

import { NewModComponent } from './new-mod/new-mod.component';

const routes: Routes = [
  { path: '', redirectTo: 'nav', pathMatch: 'full' },
{path : "nav" , component : NavComponent},
{path : "home" , component : HomeComponent},
{path : "todo" , component : TodoComponent},
{path : "event" , component : EventComponent},
{path : "style" , component : StyleComponent},
{path : "if" , component : IfElseComponent},
{path : "loop" , component : LoopComponent},
{path : "dstyle" , component : DynamicStyleComponent},
{path : "profile" , component : ProfileComponent},
{path : "user/:id/:name" , component : UserComponent},
{path : "form" , component : FormComponent},

{path : "rec" , component : ReceiveDataComponent,data:{name : 'Fahim Faiyaz'}},
{ path: 'new-mod', component:NewModComponent,loadChildren: () => import('./new-mod/new-mod.module').then(m => m.NewModModule) },
{path : "**" , component : ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
