import { AbstractControl} from '@angular/forms';
import {map} from 'rxjs/operators';
import {CategoriesService} from '../services/categories.service';

export class MyValidators {

    static isPriceValue(control: AbstractControl) {
        const value = control.value;
        if (value > 1000) {
            return {price_invalid: true};
        }
        return null;
    }

    static validPassword(control: AbstractControl) {
      const value = control.value;
      if (!containsNumber(value)) {
        return {invalid_password: true};
      }
      return null;
    }

    static matchingPasswordValidators(control: AbstractControl) {
      if (control.get('password')?.value !== control.get('confirm')?.value) {
        return { notMatchPassword: true };
      }
      return null;
    }

    static validateCategory(service: CategoriesService) {
      return (control: AbstractControl) => {
        const value = control.value;
        return service.checkCategory(value)
          .pipe(
            map( (response: any) => {
              console.log('validate category');
              console.log(value);
              console.log(response);
              const isAvailable = response.isAvailable;
              if (!isAvailable) {
                return {not_available: true};
              }
              return null;
            })
          );
      };
    }


}

function containsNumber(value: string) {
  return value.split('').find(x => isNumber(x));
}

function isNumber(value: string) {
  return !isNaN(parseInt(value, 10));
}
