import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesComponent} from "./courses.component";
import { CourseComponent } from './course/course.component';
import {CoursesService} from "./courses.service";
import { AuthorComponent } from './author/author.component';
import {AuthorService} from "./author.service";
import { TestfolderComponent } from './testfolder/testfolder.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    TestfolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
