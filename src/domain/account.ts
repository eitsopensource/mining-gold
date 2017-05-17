import {Entity} from './entity';

/**
 * 
 */
export class Account extends Entity
{
    /**
     * 
     */
    public name:string;
    /**
     * 
     */
    public subAccounts:Array<Account>;
    /**
     * 
     */
    public balance:number;

    /**
     * 
     */
    constructor( name:string ) 
    {
        super();
        this.balance = 0;
        this.name = name;
        this.subAccounts = new Array<Account>();
    }
}