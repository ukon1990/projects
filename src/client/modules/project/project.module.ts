import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectComponent } from './components/project/project.component';



@NgModule({
  declarations: [ProjectListComponent, ProjectComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { }
