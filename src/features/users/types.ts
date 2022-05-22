import { Action } from 'redux';

const GET_USERS = 'GET_USERS';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Street {
    number: number;
    name: string;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Timezone {
    offset: string;
    description: string;
}

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
}

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface Dob {
    date: Date;
    age: number;
}

export interface Registered {
    date: Date;
    age: number;
}

export interface Id {
    name: string;
    value: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface UserItem {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}

export type UsersState = {
    data: UserItem[];
    isLoading: boolean;
    error: string;
}

export type UsersAPIResponse = {
    results: UserItem[];
}

interface GetUsersAction extends Action {
    type: typeof GET_USERS;
}

interface GetUsersSuccessAction extends Action {
    type: typeof GET_USERS_SUCCESS;
    payload: {
        data: UserItem[];
    };
}

interface GetUsersErrorAction extends Action {
    type: typeof GET_USERS_FAILURE;
    payload: {
        error: string;
    };
}

export {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
};

export type UsersActionTypes =
    | GetUsersAction
    | GetUsersSuccessAction
    | GetUsersErrorAction
