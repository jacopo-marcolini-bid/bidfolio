import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectBtnComponent } from './project-btn/project-btn.component';
import { ProjectMultibtnComponent } from './project-multibtn/project-multibtn.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectBtnComponent,
    ProjectMultibtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
