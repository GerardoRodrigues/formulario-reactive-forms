import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurriculumFormStore } from '../../../../core/services/curriculum-form-store/curriculum-form-store';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputValidationDirective } from '../../../../shared/directives/input-validation-directive';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-step-professional',
  imports: [RouterLink, ReactiveFormsModule, InputValidationDirective],
  templateUrl: './step-professional.html',
})
export class StepProfessional {
  readonly _curriculumFormStore = inject(CurriculumFormStore);
  private readonly _formBuilder = inject(FormBuilder);

  professionalArrayControls = toSignal(
    this._curriculumFormStore.professionalArrayForm.valueChanges.pipe(
      map(() => this._curriculumFormStore.professionalArrayForm.controls),
    ),
    {
      initialValue: this._curriculumFormStore.professionalArrayForm.controls,
    },
  );

  addExperience() {
    this._curriculumFormStore.professionalArrayForm.push(
      this._formBuilder.group({
        position: ['', [Validators.required]],
        company: ['', [Validators.required]],
        description: ['', [Validators.required]],
      }),
    );
  }

  removeExperience(index: number) {
    this._curriculumFormStore.professionalArrayForm.removeAt(index);
  }

  submit() {
    alert('🚀 Currículo enviado para a órbita!');
    console.log(this._curriculumFormStore.professionalArrayForm.value);
  }
}
