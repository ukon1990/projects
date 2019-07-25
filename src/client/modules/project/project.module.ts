import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectListComponent} from './components/project-list/project-list.component';
import {ProjectComponent} from './components/project/project.component';
import {ProjectService} from './services/project.service';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule} from '@angular/material';
import {CreateProjectComponent} from './components/create/create-project.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {TimesheetModule} from '../timesheet/timesheet.module';


@NgModule({
  declarations: [ProjectListComponent, ProjectComponent, CreateProjectComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    TimesheetModule
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectModule {
}
