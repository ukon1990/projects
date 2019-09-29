import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../project/models/project.model';
import {ProjectService} from '../../../project/services/project.service';
import {TimeSheetService} from '../../services/time-sheet.service';

@Component({
  selector: 'p-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss']
})
export class TimeSheetComponent implements OnInit {
  project: Project;

  /* istanbul ignore next */
  constructor(private route: ActivatedRoute, private projectService: ProjectService, private service: TimeSheetService) {
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
