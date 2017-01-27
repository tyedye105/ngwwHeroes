import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'heroes',
    component: HeroListComponent
  },
  {
    path: 'heroes/:id',
    component: HeroDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
