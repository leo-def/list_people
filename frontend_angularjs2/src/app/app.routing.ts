import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo :'people', pathMatch: 'full' },
  { path: 'people', loadChildren: './people/people.module#PeopleModule'}
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
