import {Flavor} from '../../shared/helpers';

export type IAuthorizationFieldsEmail = Flavor<string, 'IAuthorizationFields-email'>;

export type IAuthorizationFieldsPassword = Flavor<string, 'IAuthorizationFields-password'>;

export enum AuthorizationFieldsKeys {
    email = 'email',
    password = 'password',
    replacePassword = 'replacePassword',
    code = 'code',
}

export const authorizationPlaceholder: Record<AuthorizationFieldsKeys, string> = {
    [AuthorizationFieldsKeys.email]: 'Почта',
    [AuthorizationFieldsKeys.password]: 'Пароль',
    [AuthorizationFieldsKeys.replacePassword]: 'Повторно введите пароль',
    [AuthorizationFieldsKeys.code]: 'Введите код',
}

export const authorizationTitle: Record<AuthorizationFieldsKeys, string> = {
    [AuthorizationFieldsKeys.email]: 'Почта',
    [AuthorizationFieldsKeys.password]: 'Пароль',
    [AuthorizationFieldsKeys.replacePassword]: 'Повторите пароль',
    [AuthorizationFieldsKeys.code]: 'Код',
}

export interface IAuthorizationFields {
    readonly [AuthorizationFieldsKeys.email]: IAuthorizationFieldsEmail;
    readonly [AuthorizationFieldsKeys.password]: IAuthorizationFieldsPassword;
    readonly [AuthorizationFieldsKeys.replacePassword]: IAuthorizationFieldsPassword;
}

export class AuthorizationFields implements IAuthorizationFields {
    public readonly email: IAuthorizationFields['email'] = '';

    public readonly password: IAuthorizationFields['password'] = '';

    public readonly replacePassword: IAuthorizationFields['replacePassword'] = '';

    public constructor(params: IAuthorizationFields) {
        return this.update(params);
    }

    public update(params: Partial<IAuthorizationFields>): this {
        Object.assign(this, params);
        return this;
    }

}