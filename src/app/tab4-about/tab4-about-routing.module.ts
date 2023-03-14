import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4AboutPage } from './tab4-about.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4AboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4AboutPageRoutingModule {}
