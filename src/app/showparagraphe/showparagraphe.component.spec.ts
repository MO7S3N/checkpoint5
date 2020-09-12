import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowparagrapheComponent } from './showparagraphe.component';

describe('ShowparagrapheComponent', () => {
  let component: ShowparagrapheComponent;
  let fixture: ComponentFixture<ShowparagrapheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowparagrapheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowparagrapheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
