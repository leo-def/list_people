import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ListComponent } from './list.component';
import { Person } from '../../shared/_models/person.model';

describe('ListComponent', () => {
  let comp:    ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    comp = fixture.componentInstance;
    de = fixture.debugElement.componentInstance;
    el = fixture.debugElement.nativeElement;
  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  });

  it('should display all items', () => {
    comp.all = personList;
    fixture.detectChanges();
    let persons = fixture.debugElement.queryAll(By.css(".person"));
    expect(personList.length).toBe(persons.length);
  });

});

const personList: Person[] = [
  {
    id: 1,
    name: 'Josh',
    disclosableInfo: 'person info 1'
  },
  {
    id: 2,
    name: 'Mike',
    disclosableInfo: 'more info about mike'
  },
];
