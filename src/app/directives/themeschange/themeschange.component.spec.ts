import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeschangeComponent } from './themeschange.component';

describe('ThemeschangeComponent', () => {
  let component: ThemeschangeComponent;
  let fixture: ComponentFixture<ThemeschangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeschangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeschangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
