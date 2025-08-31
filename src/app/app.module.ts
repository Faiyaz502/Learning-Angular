import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { EventComponent } from './components/event/event.component';
import { StyleComponent } from './components/style/style.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { LoopComponent } from './components/loop/loop.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TodoComponent,
    EventComponent,
    StyleComponent,
    LandingPageComponent,
    IfElseComponent,
    LoopComponent ,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
