import * as Functions from 'firebase-functions';

/**
 * 
 */
export class CodeQualityController
{
    /**
     * 
     */
    public static onRequest = Functions.https.onRequest( (request, response) => 
    {
        console.log(request.body);
        
        const measurement:any = request.body;
        //measurement.taskId
        //measurement.project.key;

        response.send("OK");
    });
    
}