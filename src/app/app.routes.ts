import { Routes } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { Photo1Component } from './photos/components/photo1/photo1.component';
import { Photo2Component } from './photos/components/photo2/photo2.component';

export const AppRoutes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'photo1/:photoid', component: Photo1Component },
  { path: 'photo2', component: Photo2Component }
];
