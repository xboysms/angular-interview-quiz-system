export class User {
    provider!: string;
    id!: string;
    email!: string;
    name!: string;
    photoUrl!: string;
    firstName!: string;
    lastName!: string;
    authToken!: string;
    idToken!: string;
    authorizationCode!: string;
    response: any;
    // constructor(id: string) {
    //     this.id = id;
    // }
}

export class ActionModel {
    action!: Actions;
    data: any;
}

export enum Actions {
    openAvatar = "openAvatar",
    avatarResult = "avatarResult"
}

export const MY_FORMATS = {
    parse: {
        dateInput: 'DD-MM-YYYY',
    },
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY'
    },
};