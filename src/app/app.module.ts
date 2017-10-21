import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { StucturalComponent } from './stuctural/stuctural.component';
import { AttributeComponent } from './attribute/attribute.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ContentComponent } from './content/content.component';
import { HttpModule } from '@angular/http';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import {appRouter} from './app.routing';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { OverlinkComponent } from './overlink/overlink.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StucturalComponent,
    AttributeComponent,
    InputComponent,
    OutputComponent,
    ViewchildComponent,
    ContentComponent,
    FormComponent,
    NotFoundComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    OverlinkComponent,
    ProjectComponent,
    LoginComponent,
    EmployeeEditComponent,
    EmployeeCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
