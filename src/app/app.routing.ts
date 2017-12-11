import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpoilerComponent } from './spoiler/spoiler.component';
import { FanartComponent } from './fanart/fanart.component';
import { WritingComponent } from './writing/writing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'spoiler',
    component: SpoilerComponent
  },
  {
    path: 'fanart',
    component: FanartComponent
  },
  {
    path: 'writing',
    component: WritingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
