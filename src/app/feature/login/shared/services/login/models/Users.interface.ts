import { ILogin } from './Login.interface';
export interface IUsers {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface IResponse extends IPaginator{
    data:        IUsers[];
}

export interface IPaginator{
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
}
