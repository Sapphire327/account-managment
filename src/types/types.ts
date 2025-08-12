export enum AccountType{
    LOCAL,
    LDAP
}
interface Label{
    text:string
}
export interface IAccount{
    id:number,
    label:Label[],
    type:AccountType
    login:string
    password:string|null
}
