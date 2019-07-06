import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {MatButtonModule, MatGridListModule, MatMenuModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {MenuDropdownComponent} from './menu-dropdown/menu-dropdown.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent, MenuItemComponent, MenuDropdownComponent ],
      imports: [
        MatMenuModule,
        MatButtonModule,
        MatGridListModule,
        RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
