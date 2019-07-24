import {Component} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/project.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'p-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  project: Project;

  constructor(private service: ProjectService, private route: ActivatedRoute) {
    this.route.params.subscribe(params =>
      this.service.getById(params.id)
        .then(project => this.project = project)
    ).unsubscribe();
  }

}
