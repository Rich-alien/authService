export enum ErrorMsg {
    required = 'required',
    email = 'email',
    password = 'password',
    confirmPassword = 'confirmPassword',
    minLength = 'minLength',
    maxLength = 'maxLength',
}

export const ErrorMsgList: Record<ErrorMsg, string> = {
    [ErrorMsg.confirmPassword]: 'Пароли не совпадают',
    [ErrorMsg.required]: 'Поле обязательное для ввода',
    [ErrorMsg.email]: 'Некорректная почта',
    [ErrorMsg.password]: 'Пароль должен содержать цифры и буквы',
    [ErrorMsg.minLength]: 'Минимальная длина 2 символа',
    [ErrorMsg.maxLength]: 'Максимальная длина 30 символов',
}