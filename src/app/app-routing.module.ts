import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full'   },
  { path: '**', redirectTo: '/movies', pathMatch: 'full'   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}
