import {AbstractControl, ValidationErrors} from '@angular/forms';
import {
    AuthorizationFieldsKeys,
    IAuthorizationFieldsPassword
} from '../../pages/authorization/authorization.model';

export class PasswordConfirmHelper {
    // Custom validator to check that two fields match.
    static matchPassword(abstractControl: AbstractControl): ValidationErrors | null {
        const password: AbstractControl<IAuthorizationFieldsPassword> = abstractControl.get([AuthorizationFieldsKeys.password]) as AbstractControl<IAuthorizationFieldsPassword>;

        const replacePassword: AbstractControl<IAuthorizationFieldsPassword> = abstractControl.get([AuthorizationFieldsKeys.replacePassword]) as AbstractControl<IAuthorizationFieldsPassword>;
        if (password?.value === replacePassword?.value) {
            return null;
        }

        return {matchPassword: true};
    }
}