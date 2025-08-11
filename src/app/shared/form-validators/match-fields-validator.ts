import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Funcion para validar si dos campos coinciden
export function matchFieldsValidator(field1: string, field2: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const value1 = formGroup.get(field1)?.value;
    const value2 = formGroup.get(field2)?.value;

    if (value1 !== value2) {
      formGroup.get(field2)?.setErrors({ fieldsNotMatch: true });
      return { fieldsNotMatch: true };
    } else {
      // Si coincide, limpiar el error
      if (formGroup.get(field2)?.hasError('fieldsNotMatch')) {
        formGroup.get(field2)?.setErrors(null);
      }
    }

    return null;
  };
}