
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { CapabilityComponent } from './capability/capability.component';


const routes: Routes = [
  { path: 'home', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'capability', component: CapabilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
