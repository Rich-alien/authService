import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthorizationFieldsKeys} from './authorization.model';
import type {IAuthorizationFields} from './authorization.model';
import {PasswordConfirmHelper} from '../../shared/helpers/passwordConfirm.helper';
import {FormFieldHelper} from "../../shared/helpers";

export class AuthorizationForm {
    public form: FormGroup = new FormGroup({});

    public readonly formFields: typeof AuthorizationFieldsKeys = AuthorizationFieldsKeys;

    public static newForm(): FormGroup {
        return new FormGroup({
                [AuthorizationFieldsKeys.email]: new FormControl('',
                    [Validators.minLength(2),
                        Validators.maxLength(30),
                        Validators.required, Validators.email,]), // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
                [AuthorizationFieldsKeys.password]: new FormControl('',
                    [Validators.required,
                        Validators.minLength(2),
                        Validators.maxLength(30),
                        Validators.pattern('[A-Za-z0-9]*')]
                ),
                [AuthorizationFieldsKeys.replacePassword]: new FormControl('',
                    [Validators.required,
                        Validators.minLength(2),
                        Validators.maxLength(30),
                        Validators.pattern('[A-Za-z0-9]*'),
                    ]),
            }, [PasswordConfirmHelper.matchPassword]);
    }

    public getControlEmail(): FormControl {
        return FormFieldHelper.getFormField<
            FormGroup,
            FormControl,
            AuthorizationFieldsKeys.email,
            IAuthorizationFields
        >(this.form, this.formFields.email);
    }

    public getControlPassword(): FormControl {
        return FormFieldHelper.getFormField<
            FormGroup,
            FormControl,
            AuthorizationFieldsKeys.password,
            IAuthorizationFields
        >(this.form, this.formFields.password);
    }

    public getControlReplacePassword(): FormControl {
        return FormFieldHelper.getFormField<
            FormGroup,
            FormControl,
            AuthorizationFieldsKeys.replacePassword,
            IAuthorizationFields
        >(this.form, this.formFields.replacePassword);
    }


    public getEmail(): IAuthorizationFields['email'] {
        return this.getControlEmail().value as IAuthorizationFields['email'];
    }

    public getPassword(): IAuthorizationFields['password'] {
        return this.getControlPassword().value as IAuthorizationFields['password'];
    }

    public getReplacePassword(): IAuthorizationFields['replacePassword'] {
        return this.getControlReplacePassword().value as IAuthorizationFields['replacePassword'];
    }
}