import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Project} from '../../models/project.model';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Location} from '@angular/common';

@Component({
  selector: 'p-create',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  form: FormGroup;

  constructor(private service: ProjectService, private formBuilder: FormBuilder, private router: Router, public location: Location) {
    this.form = this.formBuilder.group({
      parentId: new FormControl(),
      name: new FormControl('', [Validators.required, Validators.maxLength(64)]),
      description: new FormControl('')
    });
  }

  create(): void {
    this.service.create(this.form.value as Project)
      .then((project: Project) =>
        this.router.navigateByUrl(`/project/${project.id}`))
      .catch(this.handleError);
  }

  handleError(error: HttpErrorResponse): void {
    console.error(error);
  }
}
