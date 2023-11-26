import type {OnDestroy, OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthorizationForm} from './authorization.form';
import {
    AuthorizationFields,
    AuthorizationFieldsKeys,
    authorizationPlaceholder,
    authorizationTitle
} from './authorization.model';
import {ButtonType} from '../../shared/components/button/button.type';
import {FieldType} from '../../shared/components/field/field.type';
import {ErrorMsg} from "../../shared/components/error-msg/error-msg";
import {AuthService} from "../../shared/services/auth.service";
import {BehaviorSubject, catchError, map, Observable, of, Subject, takeUntil, tap} from "rxjs";
import type {IName, IPicture, IUserModel} from "../../shared/models/user.model";
import {UserService} from "../../shared/services/user.service";

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationComponent extends AuthorizationForm implements OnInit, OnDestroy {

    public override form: FormGroup = AuthorizationForm.newForm()

    public formCode: FormGroup = new FormGroup({
        [AuthorizationFieldsKeys.code]: new FormControl('', [Validators.required])
    });

    public placeholders: typeof authorizationPlaceholder = authorizationPlaceholder;

    public typesInput: typeof FieldType = FieldType;

    public titles: typeof authorizationTitle = authorizationTitle;

    public errorMsg: typeof ErrorMsg = ErrorMsg;

    public userAuth$: Observable<AuthorizationFields | null> = new Observable<AuthorizationFields | null>();

    public user$: BehaviorSubject<IUserModel[]> = new BehaviorSubject<IUserModel[]>([]);

    public readonly buttonType: ButtonType = ButtonType.purple;

    public readonly showAuthFields$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    private readonly fin$: Subject<void> = new Subject<void>();

    public showCode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    public constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.userAuth$ = this.authService.getAuthData();
    }

    public ngOnDestroy(): void {
        this.fin$.next();
    }

    public send(): void {
        if (!this.form.valid) {
            return this.form.markAllAsTouched();
        }
        this.authService.setAuthData(new AuthorizationFields(this.form.value))
        /* БУдь тут ожидние от сервиса то: pipe(map(showAuthFields$(false)))*/
        this.showAuthFields$.next(false);
    }

    public sendCode(): void {
        if (!this.formCode.valid) {
            return this.formCode.markAllAsTouched();
        }
        this.userService.getUserInfo().pipe(
            map((data: IUserModel[]) => this.user$.next(data)),
            tap((data)=>this.showCode$.next(false)),
            takeUntil(this.fin$),
            catchError((err: any)=>{
                console.error(err);
                this.showAuthFields$.next(true);
                return of([]);
            })
        ).subscribe()
    }

    public getImg(user: IUserModel): IPicture['medium'] {
        return user.picture.medium;
    }

    public getTitle(user: IUserModel): IName['title'] {
        return user.name.title;
    }
}
