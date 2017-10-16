import { TestBed, async, ComponentFixture} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { AppComponent } from './app.component';
import { RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {

  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ RouterTestingModule ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();
    comp = fixture.componentInstance;
    de = fixture.debugElement.componentInstance;
    el = fixture.debugElement.nativeElement;
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));
/*
  it(`should have as title 'app'`, async(() => {
    expect(comp.title).toEqual('app');
  }));
  */
/*
  it('should render title in a h1 tag', async(() => {
    expect(el.querySelector('h1').textContent).toContain('Welcome to app!!');
  }));*/
});
