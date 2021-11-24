import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListadeanimaisComponent } from './listadeanimais/listadeanimais.component';


@NgModule({
  declarations: [
    ListadeanimaisComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ]
})
export class AnimaisModule { }
