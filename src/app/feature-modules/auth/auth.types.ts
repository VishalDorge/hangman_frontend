
export interface IUser {
    username: string;
    email: string;
    password: string;
}

interface Response {
    data: any;
    error: any;
}

export interface UserResponse extends Response {
    data: {role: string, accessToken: string, refreshToken: string},
    error: any
}

export interface ICredentials {
    email: string;
    password: string;
}

export type localStorageDataType = {[key: string] : string};