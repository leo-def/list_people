import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RouterTestingModule} from '@angular/router/testing';
import { PeopleComponent } from './people.component';
import { ListComponent } from './list/list.component';
import { PeopleService } from '../core/_services/people.service';
import { Person } from '../shared/_models/person.model';

describe('PeopleComponent', () => {
  let comp:    PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleComponent, ListComponent ],
      imports: [ RouterTestingModule ],
      providers: [{provide: PeopleService, useValue: peopleServiceStub }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    fixture.autoDetectChanges();
    comp = fixture.componentInstance;
    de = fixture.debugElement.componentInstance;
    el = fixture.debugElement.nativeElement;
  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  });

  it('should get items from service', () => {
    comp.ngOnInit();
    comp.allChange.toPromise()
      .then((all) =>{
        expect(all).toBe(personList);
      })
  });

});

const peopleServiceStub = 
{
  all(): Promise<Person[]>{
    return Promise.resolve(personList);
  }
}

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