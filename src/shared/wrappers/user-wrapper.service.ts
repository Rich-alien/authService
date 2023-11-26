import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IData, IUserModel} from '../models/user.model';

@Injectable()
export class UserWrapperService {
    constructor(private readonly httpClient: HttpClient) {
    }
    /*TODO: change type*/
    public getUser(): Observable<IData>{
        return this.httpClient.get<IData>('https://randomuser.me/api/');
    }
}