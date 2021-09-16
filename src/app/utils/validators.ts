import { AbstractControl} from '@angular/forms';

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
      const listValue = value.split('');
      if (!listValue.find(x => !isNaN(parseInt(x, 10)))) {
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

    /*function containsNumber(value: string) {
      return value.split('').find(x => !isNaN(parseInt(value, 10)));
    }*/

    /*function isNumber(value: string) {
      return !isNaN(parseInt(value, 10));
    }*/
}
