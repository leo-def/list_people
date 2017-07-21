import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../core/_services/people.service';
import { Person } from '../shared/_models/person.model';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

	_all : Person[] = new  Array<Person>();
	  
	ngOnInit() {
		this.all();
	}
	all(){
		this.peopleService
		  .all()
		  .then(response => {
			this._all = response;
		  });
	  }
}
