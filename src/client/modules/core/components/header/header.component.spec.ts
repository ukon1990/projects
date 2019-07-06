import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {MatButtonModule, MatGridListModule, MatMenuModule} from '@angular/material';
import {MenuComponent} from './menu/menu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MenuItemComponent} from './menu/menu-item/menu-item.component';
import {MenuDropdownComponent} from './menu/menu-dropdown/menu-dropdown.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, MenuComponent, MenuItemComponent, MenuDropdownComponent ],
      imports: [
        MatMenuModule,
        MatButtonModule,
        MatGridListModule,
        RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
