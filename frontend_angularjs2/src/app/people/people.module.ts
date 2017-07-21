import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routing } from './people.routing';
import { PeopleComponent } from './people.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [PeopleComponent, ListComponent]
})
export class PeopleModule { }
