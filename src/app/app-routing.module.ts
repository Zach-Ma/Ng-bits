import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { RxjsModule } from './demos/rxjs/rxjs.module';
import { WebAPIModule } from './demos/web-api/web-api.module';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demos/rxjs', loadChildren: () => import('./demos/rxjs/rxjs.module').then(m => RxjsModule) },
  { path: 'demos/web-api', loadChildren: () => import('./demos/web-api/web-api.module').then(m => WebAPIModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
