import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AnalysisComponent } from './analysis/analysis.component';
import { DesignComponent } from './design/design.component';
import {EmpRegistrationComponent} from './emp-registration/emp-registration.component';
import { LoginComponent } from './login/login.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { LaunchComponent } from './launch/launch.component';
import { TestDriveComponent } from './test-drive/test-drive.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { StatusComponent } from './status/status.component';
// import { FlipComponent } from './flip/flip.component';
import { DesignDetailsComponent } from './design-details/design-details.component';
import { ViewDesignComponent } from './view-design/view-design.component';
import { ViewManufacturingComponent } from './view-manufacturing/view-manufacturing.component';
import { ViewTestingComponent } from './view-testing/view-testing.component';



const routes: Routes = [
  {path:"emp-registration",component:EmpRegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"work-section",component:WorkSectionComponent},
  {path:"design",component:DesignComponent},
  // {path:"analysis",component:AnalysisComponent},
  {path:"manufacture",component:ManufactureComponent},
  {path:"test-drive",component:TestDriveComponent},
  {path:"launch",component:LaunchComponent},
  {path:"dispatch",component:DispatchComponent},
  {path:"status",component:StatusComponent},
  // {path:"flip",component:FlipComponent},
  {path:"design-details",component:DesignDetailsComponent},
  {path:"view-design",component:ViewDesignComponent},
  {path:"view-manufacturing",component:ViewManufacturingComponent},
  {path:"view-testing",component:ViewTestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
