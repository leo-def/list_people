import { Component, OnInit, Input, Output, Optional, EventEmitter } from '@angular/core';
import { Person } from '../../shared/_models/person.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  @Output()
  all : Person[] = new  Array<Person>();

  constructor() { }

  ngOnInit() {}

}
