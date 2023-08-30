import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMailComponent } from './navbar-mail.component';

describe('NavbarMailComponent', () => {
  let component: NavbarMailComponent;
  let fixture: ComponentFixture<NavbarMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarMailComponent]
    });
    fixture = TestBed.createComponent(NavbarMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
