import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddContainerComponent } from './container/add-container/add-container.component';
import { AddPipelineComponent } from './pipeline/add-pipeline/add-pipeline.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AddExecutionComponent } from './execution/add-execution/add-execution.component';
import { ListContainerComponent } from './container/list-container/list-container.component';
import { ListPipelineComponent } from './pipeline/list-pipeline/list-pipeline.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomePageComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: "addContainer",
    component: AddContainerComponent,
    canActivate: [AuthGuardGuard]

  },
  {
    path: "addPipeline",
    component: AddPipelineComponent,
    canActivate: [AuthGuardGuard]

  }
  ,
  {
    path: "addExecution",
    component: AddExecutionComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: "listContainer",
    component: ListContainerComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: "listPipelines",
    component: ListPipelineComponent,
    canActivate: [AuthGuardGuard]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
