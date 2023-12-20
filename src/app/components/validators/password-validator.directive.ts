import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    if (password && password.length < 8) {
      return {
        minLength: { requiredLength: 8, actualLength: password.length },
      };
    } else if (
      !/[A-Z]/g.test(password) ||
      !/[a-z]/g.test(password) ||
      !/\d/g.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/g.test(password)
    ) {
      return { complexityRequirements: true };
    }

    return null;
  };
}
