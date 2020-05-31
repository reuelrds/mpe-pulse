import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { CapabilityComponent } from './capability/capability.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { SampleComponent } from './sample/sample.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  { path: 'home', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'capability', component: CapabilityComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'quote', component: QuoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
