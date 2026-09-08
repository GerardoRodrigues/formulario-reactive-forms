import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CurriculumFormStore } from '../../../../core/services/curriculum-form-store/curriculum-form-store';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { StatesAndCitiesApi } from '../../../../core/services/states-and-cities-api/states-and-cities-api';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { InputValidationDirective } from '../../../../shared/directives/input-validation-directive';

@Component({
  selector: 'app-step-personal',
  imports: [ReactiveFormsModule, InputValidationDirective],
  templateUrl: './step-personal.html',
})
export class StepPersonal {
  readonly _curriculumFormStore = inject(CurriculumFormStore);
  private readonly _router = inject(Router);
  private readonly _statesAndCitiesApi = inject(StatesAndCitiesApi);

  get stateControl() {
    return this._curriculumFormStore.personalGroupForm.get('state') as FormControl;
  }

  get cityControl() {
    return this._curriculumFormStore.personalGroupForm.get('city') as FormControl;
  }

  selectedState = toSignal<string>(
    this.stateControl.valueChanges.pipe(
      tap(() => this.cityControl.setValue('', { emitEvent: false })),
    ),
    {
      initialValue: this.stateControl.value || '',
    },
  );

  statesResourse = rxResource({
    params: () => true,
    stream: () => this._statesAndCitiesApi.getStates(),
  });

  statesList = computed(() => {
    const ERROR_ON_RESPONSE = !!this.statesResourse.error();

    if (ERROR_ON_RESPONSE) return [];

    return this.statesResourse.value();
  });

  citiesResourse = rxResource({
    params: () => {
      const state = this.selectedState();
      if (!state) return undefined;

      return state;
    },
    stream: ({ params }) => this._statesAndCitiesApi.getCities(params),
  });

  citiesList = computed(() => {
    const ERROR_ON_RESPONSE = !!this.citiesResourse.error();

    if (ERROR_ON_RESPONSE) return [];

    return this.citiesResourse.value();
  });

  goToProfessional() {
    console.log(this._curriculumFormStore.personalGroupForm.value);
    this._router.navigate(['/professional']);
  }
}
