import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CurriculumFormStore } from '../../../../core/services/curriculum-form-store/curriculum-form-store';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-personal',
  imports: [ReactiveFormsModule],
  templateUrl: './step-personal.html',
})
export class StepPersonal {
  private readonly _router = inject(Router);
  readonly _curriculumFormStore = inject(CurriculumFormStore);

  goToProfessional() {
    console.log(this._curriculumFormStore.personalGroupForm.value);
    this._router.navigate(['/professional']);
  }
}
