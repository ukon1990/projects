import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './modules/user/components/user/user.component';
import {ProjectListComponent} from './modules/project/components/project-list/project-list.component';
import {ProjectComponent} from './modules/project/components/project/project.component';
import {TimesheetComponent} from './modules/timesheet/components/timesheet/timesheet.component';
import {TimesheetEntryComponent} from './modules/timesheet/components/timesheet-entry/timesheet-entry.component';


const routes: Routes = [
  {
    path: 'projects', component: ProjectListComponent, children: [
      {path: ':id', component: ProjectComponent}
    ]
  },
  {
    path: 'timesheet', component: TimesheetComponent, children: [
      {path: ':id', component: TimesheetEntryComponent}
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
