import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AuthorizationComponent} from './authorization.component';
import {provideRouter, withViewTransitions} from '@angular/router';
import {authorizationRoute} from './authorization.route';
import {ButtonModule, ErrorMsgModule, FieldModule} from '../../shared/components';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from "../../shared/services/auth.service";
import {UserService} from "../../shared/services/user.service";
import {UserWrapperService} from "../../shared/wrappers/user-wrapper.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [AuthorizationComponent],
    exports: [AuthorizationComponent],
    imports: [CommonModule, FieldModule, ReactiveFormsModule, ButtonModule, ErrorMsgModule, HttpClientModule],
    providers: [
        provideRouter(authorizationRoute, withViewTransitions()),
        AuthService,
        UserService,
        UserWrapperService,
        HttpClient,

    ],
})
export class AuthorizationModule {
}
