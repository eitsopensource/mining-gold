import * as Functions from 'firebase-functions';
import * as Admin from 'firebase-admin';
Admin.initializeApp(Functions.config().firebase);

/**
 * 
 */
export abstract class Entity
{
    /**
     * 
     */
    protected static database:admin.database.Database = Admin.database();

    /**
     * 
     */
    public key:string;
    /**
     * 
     */
    protected entityName:string;

    /**
     * 
     */
    constructor() 
    {
        this.entityName = this.constructor.name;
    }

    /**
     * 
     */
    public insert():Promise<void>
    {
        return Entity.database
                    .ref(this.entityName)
                    .push(this);
    }
    
    /**
     * 
     */
    public update():Promise<void> 
    {
        return Entity.database
                    .ref()
                    .child(this.entityName)
                    .child(this.key)
                    .set(this);
    }
    
    /**
     * 
     */
    public remove():Promise<void> 
    {
        return Entity.database
                    .ref()
                    .child(this.entityName)
                    .child(this.key)
                    .remove();
    }

    /**
     * 
     */
    public static listAll():Promise<admin.database.DataSnapshot>
    {
        return Entity.database
                    .ref(this.name)
                    .orderByKey()
                    .once("value");
    }

    /**
     * 
     */
    public static reference():admin.database.Reference
    {
        return Entity.database
                    .ref(this.name);
    }
}