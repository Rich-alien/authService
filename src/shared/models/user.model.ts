import {Flavor} from '../helpers';

export type IUserModelId = Flavor<string, 'IUserModel-id'>;
export type IUserModelName = Flavor<string, 'IUserModel-name'>;
export type IUserModelImage = Flavor<string, 'IUserModel-image'>;

/*{
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Mikkel",
                "last": "Møller"
            },
            "location": {
                "street": {
                    "number": 5169,
                    "name": "Højager"
                },
                "city": "Overby Lyng",
                "state": "Nordjylland",
                "country": "Denmark",
                "postcode": 63965,
                "coordinates": {
                    "latitude": "-46.4920",
                    "longitude": "-56.0512"
                },
                "timezone": {
                    "offset": "-3:30",
                    "description": "Newfoundland"
                }
            },
            "email": "mikkel.moller@example.com",
            "login": {
                "uuid": "99585989-5925-4373-8758-417bc0673cda",
                "username": "greenlion367",
                "password": "huskers",
                "salt": "vJitpCmc",
                "md5": "486af7e192eb005b4340b5f59c54b8ae",
                "sha1": "7fb84faf5d262382a23a84bfdf8cb9896a76c29d",
                "sha256": "5d3d6ba6b33dc3e718e38f5249c902ac4fda2e9b33db28ab7d519a9b0cecbcc2"
            },
            "dob": {
                "date": "1949-06-18T02:36:23.949Z",
                "age": 74
            },
            "registered": {
                "date": "2011-09-09T01:01:10.914Z",
                "age": 12
            },
            "phone": "70341786",
            "cell": "53717825",
            "id": {
                "name": "CPR",
                "value": "170649-7565"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/68.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/68.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg"
            },
            "nat": "DK"
        }
    ],
    "info": {
        "seed": "3373e723c383d9fa",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
}*/

export interface IData {
    readonly info: any;
    readonly results: IUserModel[];
}

export interface IUserModel {
    readonly name: {
        title: string,
        first: string,
        last: string,
    };
    readonly picture: {
        large: string,
        medium: string,
        thumbnail: string
    },
}

/*
export class UserModel implements IUserModel {
    public readonly id: IUserModel['id'] = '';

    public readonly name: IUserModel['name'] = '';

    public readonly image: IUserModel['image'] = '';

    public constructor(params: IUserModel) {
        return this.update(params);
    }

    public update(params: Partial<IUserModel>): this {
        Object.assign(this, params);
        return this;
    }
}*/
