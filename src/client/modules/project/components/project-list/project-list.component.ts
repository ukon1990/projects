import {Component, OnInit} from '@angular/core';
import {Project} from '../../models/project.model';
import {ProjectService} from '../../services/project.service';
import {SubscriptionManager} from '@ukon1990/subscription-manager/dist/subscription-manager';

@Component({
  selector: 'p-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  list: Project[] = [];
  sm = new SubscriptionManager();

  constructor(private service: ProjectService) {
    this.sm.add(this.service.projects,
      projects =>
        this.list = projects);
  }

  async ngOnInit() {
    /* istanbul ignore next */
    if (!this.list.length) {
      await this.service.getAll();
    }
  }

}
