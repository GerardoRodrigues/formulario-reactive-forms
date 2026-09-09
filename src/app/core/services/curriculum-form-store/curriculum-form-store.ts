import { inject, Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CurriculumFormStore {
  private readonly _formBuilder = inject(FormBuilder);

  private readonly curriculumForm: FormGroup = this._formBuilder.group({
    personal: this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      address: ['', [Validators.required, Validators.pattern(/^[^,]+,\s*[^,]+,\s*[^,]+$/)]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      maritalStatus: ['solteiro', [Validators.required]],
    }),
    professional: this._formBuilder.array(
      [
        this._formBuilder.group({
          position: ['', [Validators.required]],
          company: ['', [Validators.required]],
          description: ['', [Validators.required]],
        }),
      ],
      [Validators.required],
    ),
  });

  get curriculumFormGroup() {
    return this.curriculumForm;
  }

  get personalGroupForm() {
    return this.curriculumForm.get('personal') as FormGroup;
  }

  get professionalArrayForm() {
    return this.curriculumForm.get('professional') as FormArray;
  }
}
