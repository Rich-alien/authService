import {Injectable} from '@angular/core';
import {UserWrapperService} from '../wrappers/user-wrapper.service';
import {map, Observable} from 'rxjs';
import {IData, IUserModel} from '../models/user.model';

@Injectable()
export class UserService {
    public constructor(private readonly userWrapperService: UserWrapperService) {
    }

    public getUserInfo(): Observable<IUserModel[]> {
        return this.userWrapperService.getUser().pipe(
            map((user: IData) => user.results), //new UserModel(user)
        )
    }
}