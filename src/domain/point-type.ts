/**
 *  
 */
export abstract class PointType
{
    public value:number;
    public name:string;

    /**
     * 
     */
    constructor( value:number, name:string ) 
    {
        this.value = value;
        this.name = name;
    }

    /**
     * 
     * @param factor 
     */
    public abstract calculatePoints( factor:number ):number;
}

/**
* 
*/
export const SPRINT_FINISHED:PointType = {
    value: 0,
    name: "SPRINT_FINISHED",
    calculatePoints: function( pf:number ) {
        return 50 * pf;
    }
}

/**
* 
*/
export const BUG:PointType = {
    value: 1,
    name: "BUG",
    calculatePoints: function() {
        return -150;
    }
}

/**
* 
*/
export const ACTIVITY_DONE:PointType = {
    value: 2,
    name: "ACTIVITY_DONE",
    calculatePoints: function() {
        return 100;
    }
}

/**
* 
*/
export const CI_BROKE:PointType = {
    value: 3,
    name: "CI_BROKE",
    calculatePoints: function() {
        return -25;
    }
}

/**
* 
*/
export const QUALITY_CONTROL:PointType = {
    value: 4,
    name: "QUALITY_CONTROL",
    calculatePoints: function() {
        return 50;
    }
}

/**
* Falta sem justificativa
*/
export const LACK:PointType = {
    value: 5,
    name: "LACK",
    calculatePoints: function() {
        return -5;
    }
}

/**
*
*/
export const MISSING_HOURS:PointType = {
    value: 6,
    name: "MISSING_HOURS",
    calculatePoints: function( hours ) {
        return -5 * hours;
    }
}

/**
* 
*/
export const COURSE_DONE:PointType = {
    value: 7,
    name: "COURSE_DONE",
    calculatePoints: function( hours ) {
        return 25 * hours;
    }
}

/**
* 
*/
export const COURSE_TEACH:PointType = {
    value: 8,
    name: "COURSE_TEACH",
    calculatePoints: function( hours ) {
        return 50 * hours;
    }
}

/**
* 
*/
export const POST_BLOG:PointType = {
    value: 9,
    name: "POST_BLOG",
    calculatePoints: function() {
        return 300;
    }
}

/**
* 
*/
export const PAPER:PointType = {
    value: 10,
    name: "PAPER",
    calculatePoints: function() {
        return 1000;
    }
}