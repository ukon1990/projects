import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectListComponent} from './project-list.component';
import {ProjectService} from '../../services/project.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DebugElement} from '@angular/core';
import {Project} from '../../models/project.model';
import {MatButtonModule, MatCardModule, MatListModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;
  let debugElement: DebugElement;
  let nativeHtml: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectListComponent],
      imports: [
        HttpClientTestingModule, MatListModule, MatCardModule, MatButtonModule,
        RouterTestingModule],
      providers: [ProjectService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('html', () => {
    let projectItems;
    let noProjectsMessage;

    beforeEach(() => {
      debugElement = fixture.debugElement;
      nativeHtml = debugElement.nativeElement;
    });

    it('Should display a message, if no projects are available', () => {
      projectItems = nativeHtml.querySelector('mat-list');
      noProjectsMessage = nativeHtml.querySelector('#no-projects');

      expect(projectItems).toBeFalsy();
      expect(noProjectsMessage).toBeTruthy();
    });

    it('A list of projects should be displayed, if the list is not empty', () => {
      component.list.push(new Project(''));

      fixture.detectChanges();

      projectItems = nativeHtml.querySelector('mat-list');
      noProjectsMessage = nativeHtml.querySelector('#no-projects');

      expect(projectItems).toBeTruthy();
      expect(noProjectsMessage).toBeFalsy();
    });
  });
});
