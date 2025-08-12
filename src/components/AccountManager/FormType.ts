import {AccountType} from "../../types/types.ts";

export interface IAccountForm{
    label:string
    type:AccountType
    login:string
    password:string|null
}