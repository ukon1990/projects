import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project.model';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'p-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  list: Project[] = [];

  constructor(private service: ProjectService) { }

  async ngOnInit() {
    this.list = await this.service.getAll();
  }

}
