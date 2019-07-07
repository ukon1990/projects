import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectComponent } from './create-project.component';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {ProjectService} from '../../services/project.service';
import {RouterTestingModule} from '@angular/router/testing';
import {DebugElement} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('CreateProjectComponent', () => {
  let component: CreateProjectComponent;
  let fixture: ComponentFixture<CreateProjectComponent>;
  let debugElement: DebugElement;
  let nativeHtml: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectComponent ],
      imports: [
        MatCardModule, MatButtonModule, HttpClientTestingModule,
        ReactiveFormsModule, RouterTestingModule, MatInputModule, BrowserAnimationsModule
      ],
      providers: [
        ProjectService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('html', () => {
    let createBtn;

    beforeEach(() => {
      debugElement = fixture.debugElement;
      nativeHtml = debugElement.nativeElement;
    });

    it('The create button is disabled with invalid fields', () => {
      createBtn = nativeHtml.querySelector('button[type="submit"]');
      expect(createBtn.disabled).toBeTruthy();
    });

    it('A list of projects should be displayed, if the list is not empty', () => {
      component.form.controls.name.setValue('A name');
      fixture.detectChanges();
      createBtn = nativeHtml.querySelector('button[type="submit"]');
      expect(createBtn.disabled).toBeFalsy();
    });
  });
});
