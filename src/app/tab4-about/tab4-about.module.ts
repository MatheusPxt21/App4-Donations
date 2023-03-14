import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4AboutPageRoutingModule } from './tab4-about-routing.module';

import { Tab4AboutPage } from './tab4-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4AboutPageRoutingModule
  ],
  declarations: [Tab4AboutPage]
})
export class Tab4AboutPageModule {}
