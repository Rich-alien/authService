import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {AuthorizationFields} from "../../pages/authorization/authorization.model";

@Injectable()
export class AuthService {
    public readonly authData: BehaviorSubject<AuthorizationFields> = new BehaviorSubject(new AuthorizationFields({
        email: '',
        password: '',
        replacePassword: ''
    }));

    public getAuthData(): Observable<AuthorizationFields | null> {
        return this.authData.asObservable();
    }

    public setAuthData(result: AuthorizationFields): void {
        return this.authData.next(result);
    }
}