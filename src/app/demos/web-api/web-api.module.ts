import { NgModule } from '@angular/core';
import { WebAPIComponent } from './web-api.component';
import { WebAPIRoutingModule } from './web-api-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [WebAPIComponent],
  imports: [
    SharedModule,
    WebAPIRoutingModule
  ]
})
export class WebAPIModule { }
