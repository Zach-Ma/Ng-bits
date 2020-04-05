import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebAPIComponent } from './web-api.component';


const routes: Routes = [
  { path: '', component: WebAPIComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAPIRoutingModule { }
