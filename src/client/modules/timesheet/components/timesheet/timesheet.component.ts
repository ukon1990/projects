import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../project/models/project.model';
import {ProjectService} from '../../../project/services/project.service';
import {TimesheetService} from '../../timesheet.service';

@Component({
  selector: 'p-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
  project: Project;

  /* istanbul ignore next */
  constructor(private route: ActivatedRoute, private projectService: ProjectService, private service: TimesheetService) {
    this.route.params
      .subscribe(async p => {
        Promise.all([
          this.projectService.getById(p.id),
          this.service.getForProject(p.id)
        ])
          .then(result => {
            this.project = result[0];
            this.project.timeEntries = result[1];
          })
          .catch(console.error);
      })
      .unsubscribe();
  }

  ngOnInit() {
  }

}
