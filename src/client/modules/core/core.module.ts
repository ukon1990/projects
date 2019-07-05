import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { MenuItemComponent } from './components/header/menu/menu-item/menu-item.component';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { MenuDropdownComponent } from './components/header/menu/menu-dropdown/menu-dropdown.component';



@NgModule({
  declarations: [
  FooterComponent,
  HeaderComponent,
  MenuComponent,
  MenuItemComponent,
  MenuDropdownComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
