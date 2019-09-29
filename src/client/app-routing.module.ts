import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './modules/user/components/user/user.component';
import {ProjectListComponent} from './modules/project/components/project-list/project-list.component';
import {ProjectComponent} from './modules/project/components/project/project.component';
import {TimeSheetComponent} from './modules/timesheet/components/timesheet/time-sheet.component';
import {TimesheetEntryComponent} from './modules/timesheet/components/timesheet-entry/timesheet-entry.component';
import {CreateProjectComponent} from './modules/project/components/create/create-project.component';


const routes: Routes = [
  {
    path: 'projects', children: [
      {path: 'create', component: CreateProjectComponent},
      {path: ':id', component: ProjectComponent},
      {path: '', component: ProjectListComponent},
    ]
  },
  {
    path: 'timesheet', children: [
      {path: 'entry/:id', component: TimesheetEntryComponent},
      {path: ':id', component: TimeSheetComponent}
    ]
  },
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
