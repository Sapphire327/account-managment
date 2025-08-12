import {defineStore} from 'pinia'
import {AccountType, type IAccount} from "../types/types.ts";

interface AccountState {
    accounts:IAccount[]
    lastId:number
}
export const useAccountsStore = defineStore('accounts', {
    state: ():AccountState => ({
        accounts:[],
        lastId:1
    }),
    actions:{
        addEmptyAccount (){
            this.accounts.push({
                id:this.lastId,
                label: [],
                login: '',
                password:'',
                type: AccountType.LOCAL,
            })
            this.lastId++;
        },
        updateAccount (account:IAccount){
            const index = this.accounts.findIndex((acc) => acc.id === account.id);
            if(account.type===AccountType.LDAP){account.password=null}
            if (index !== -1) {
                Object.assign(this.accounts[index], account);
            }
        },
        removeAccount(id:number){
            const index = this.accounts.findIndex(acc => acc.id === id);
            if (index !== -1) {
                this.accounts.splice(index, 1);
            }
        }
    },

})