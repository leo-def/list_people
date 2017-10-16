import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../core/_services/people.service';
import { Person } from '../shared/_models/person.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

	_all : Person[] = new  Array<Person>();

	public allChange: EventEmitter<Person[]> = new EventEmitter<Person[]>();

	ngOnInit() {
		this.peopleService
			.all()
			.then(response => {
			this.all = response;
			});
	}

	get all(): Person[]{
			return this._all;
	}
	set all(_all: Person[]){
		this.allChange.emit(_all);
		this._all =_all;
	}
		
}
