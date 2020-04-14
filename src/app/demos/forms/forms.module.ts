import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormAlphaComponent } from './form-alpha/form-alpha.component';

@NgModule({
  declarations: [FormsComponent, FormAlphaComponent],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
