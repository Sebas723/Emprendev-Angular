import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


//Validacion para la fecha de nacimiento
export function minAgeValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) return null;

        const today = new Date();
        const birthDate = new Date(control.value);

        // Validar si la fecha esta en el futuro
        if (birthDate > today) {
        return { futureDate: true };
        }

        // Calcular edad
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        }

        if (age < minAge) {
        return { minAge: { requiredAge: minAge, actualAge: age } };
        }

        return null;
    };
}