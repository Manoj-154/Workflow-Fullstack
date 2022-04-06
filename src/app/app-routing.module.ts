import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { AssemblingComponent } from './assembling/assembling.component';
import { DesignComponent } from './design/design.component';
import {EmpRegistrationComponent} from './emp-registration/emp-registration.component';
import { LoginComponent } from './login/login.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { LaunchComponent } from './launch/launch.component';
import { TestDriveComponent } from './test-drive/test-drive.component';
import { WorkSectionComponent } from './work-section/work-section.component';



const routes: Routes = [
  {path:"emp-registration",component:EmpRegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"work-section",component:WorkSectionComponent},
  {path:"design",component:DesignComponent},
  {path:"analysis",component:AnalysisComponent},
  {path:"manufacture",component:ManufactureComponent},
  {path:"assembling",component:AssemblingComponent},
  {path:"test-drive",component:TestDriveComponent},
  {path:"launch",component:LaunchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
