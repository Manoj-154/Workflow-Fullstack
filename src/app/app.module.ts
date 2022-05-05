import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { DesignComponent } from './design/design.component';
// import { AnalysisComponent } from './analysis/analysis.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { TestDriveComponent } from './test-drive/test-drive.component';
import { LaunchComponent } from './launch/launch.component';
import { StatusComponent } from './status/status.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { CreateDesignComponent } from './create-design/create-design.component';
import { FlipComponent } from './flip/flip.component';
import { ViewDesignComponent } from './view-design/view-design.component';
import { DesignDetailsComponent } from './design-details/design-details.component';

// import { ViewAnalysisComponent } from './view-analysis/view-analysis.component';
import { CreateManufacturingComponent } from './create-manufacturing/create-manufacturing.component';
import { ViewManufacturingComponent } from './view-manufacturing/view-manufacturing.component';
import { ManufacturingDetailsComponent } from './manufacturing-details/manufacturing-details.component';
import { CreateTestingComponent } from './create-testing/create-testing.component';
import { TestingDetailsComponent } from './testing-details/testing-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpRegistrationComponent,
    ManagerloginComponent,
    WorkSectionComponent,
    DesignComponent,
    // AnalysisComponent,
    ManufactureComponent,
    TestDriveComponent,
    LaunchComponent,
    StatusComponent,
    DispatchComponent,
    CreateDesignComponent,
        FlipComponent,
         ViewDesignComponent,
         DesignDetailsComponent,
        //  ViewAnalysisComponent,
         CreateManufacturingComponent,
         ViewManufacturingComponent,
         ManufacturingDetailsComponent,
         CreateTestingComponent,
         TestingDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
