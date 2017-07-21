import { NgModule, Optional, SkipSelf,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { PeopleService } from './_services/people.service'
@NgModule({
  imports: [
    CommonModule,
	HttpModule
  ],
   exports: [
    HttpModule
  ],
  declarations: [],
  providers: [
    PeopleService,
  ]
})
export class CoreModule { 

	constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
		  throw new Error(
			'CoreModule is already loaded. Import it in the AppModule only');
		}
	  }

	  static forRoot(): ModuleWithProviders {
	  return {
		ngModule: CoreModule,
		providers: [
		   PeopleService //useValue: {}
		]
	  };
	}
}
