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
import { StatusComponent } from './status/status.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { CreateDesignComponent } from './create-design/create-design.component';
import { CreateAllComponent } from './create-all/create-all.component';


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
    LaunchComponent,
    StatusComponent,
    DispatchComponent,
    CreateDesignComponent,
    CreateAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
