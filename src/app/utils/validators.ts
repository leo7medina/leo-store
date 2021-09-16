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
      if (this.containsNumber(value)) {
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

    static containsNumber(value: string) {
      return value.split('').find(x => this.isNumber(x));
    }

    static isNumber(value: string) {
      return !isNaN(parseInt(value, 10));
    }
}
