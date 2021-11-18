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
import {SummaryPipe} from "./summary.pipe";
import { IconComponent } from './icon/icon.component';
import { TemplatebarComponent } from './templatebar/templatebar.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikemeterComponent } from './likemeter/likemeter.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    IconComponent,
    TemplatebarComponent,
    TitleCasePipe,
    PanelComponent,
    LikemeterComponent
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
