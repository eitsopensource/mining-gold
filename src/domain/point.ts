import {Entity} from './entity';
import {PointType} from './point-type';

/**
 * 
 */
export class Point extends Entity
{
    /**
     * 
     */
    public type:PointType;
    /**
     * 
     */
    public source:any;

    /**
     * 
     */
    constructor( type:PointType ) 
    {
        super();
        this.type = type;
    }
}