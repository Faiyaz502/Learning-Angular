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
import { DynamicStyleComponent } from './components/dynamic-style/dynamic-style.component';
import { ErrorComponent } from './components/error/error.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReceiveDataComponent } from './components/receive-data/receive-data.component';
import { UserComponent } from './components/user/user.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainNavComponent } from './components/main-nav/main-nav.component';




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
    LoopComponent,
    DynamicStyleComponent,
    ErrorComponent,
    ProfileComponent,
    ReceiveDataComponent,
    UserComponent,
    FormComponent,
    MainNavComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
     HttpClientModule ,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
