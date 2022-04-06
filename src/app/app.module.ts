import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { DesignComponent } from './design/design.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { AssemblingComponent } from './assembling/assembling.component';
import { TestDriveComponent } from './test-drive/test-drive.component';
import { LaunchComponent } from './launch/launch.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpRegistrationComponent,
    ManagerloginComponent,
    WorkSectionComponent,
    DesignComponent,
    AnalysisComponent,
    ManufactureComponent,
    AssemblingComponent,
    TestDriveComponent,
    LaunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
