import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PeopleComponent } from './people.component';

const routes: Routes = [
	{ path: '', component: PeopleComponent },
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
