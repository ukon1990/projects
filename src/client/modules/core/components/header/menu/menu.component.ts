import { Component, OnInit } from '@angular/core';
import {menuItems} from '../../../data/menu.data';

@Component({
  selector: 'p-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems = menuItems;

  constructor() { }

  ngOnInit() {
  }

}
