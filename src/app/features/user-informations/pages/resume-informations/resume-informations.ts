import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { CurriculumFormStore } from '../../../../core/services/curriculum-form-store/curriculum-form-store';

@Component({
  selector: 'app-resume-informations',
  imports: [TitleCasePipe],
  templateUrl: './resume-informations.html',
})
export class ResumeInformations {
  private readonly _router = inject(Router);
  private readonly _curriculumFormStore = inject(CurriculumFormStore);

  personalData = this._curriculumFormStore.personalGroupForm.value;
  professionalData = this._curriculumFormStore.professionalArrayForm.value;

  newCurriculum() {
    this._curriculumFormStore.curriculumFormGroup.reset();
    this._curriculumFormStore.resetProfessionalArrayForm();

    this._router.navigate(['/']);
  }
}
