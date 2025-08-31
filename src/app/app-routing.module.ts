import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { EventComponent } from './components/event/event.component';
import { StyleComponent } from './components/style/style.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { LoopComponent } from './components/loop/loop.component';

const routes: Routes = [
  { path: '', redirectTo: 'nav', pathMatch: 'full' },
{path : "nav" , component : NavComponent},
{path : "home" , component : HomeComponent},
{path : "todo" , component : TodoComponent},
{path : "event" , component : EventComponent},
{path : "style" , component : StyleComponent},
{path : "if" , component : IfElseComponent},
{path : "loop" , component : LoopComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
