import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuComponentComponent } from './nav-menu-component.component';

describe('NavMenuComponentComponent', () => {
  let component: NavMenuComponentComponent;
  let fixture: ComponentFixture<NavMenuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
