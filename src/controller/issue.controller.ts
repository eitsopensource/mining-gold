import * as Functions from 'firebase-functions';
import * as Admin from 'firebase-admin';

import {Account} from '../domain/account';
import {Point} from '../domain/point';
import * as PointType from '../domain/point-type';

/**
 * 
 */
export class IssueController
{
    /**
     * 
     */
    public static onRequest = Functions.https.onRequest( (request, response) => 
    {
        const payload:any = request.body.payload;

        if ( payload == null ) 
        {
            response.status(400).send('The body must not be empty');
            return;
        }

        if ( payload.action != "updated" )
        {
            response.status(400).send('This services only accept issues updated');
            return;
        }

        const issueController:IssueController = new IssueController();
        const issue = payload.issue;

        //ACTIVITY DONE
        if ( issue.tracker.name == "ACTIVITY" && issue.status.name == "Done" )
        {
            issueController.activityDoneHandler( issue );
        }

        response.send("OK");

    });

    /**
     * 
     * @param issue 
     */
    private activityDoneHandler( issue:any )
    {
        const point:Point = new Point(PointType.BUG);
        point.source = issue;
        point.insert();
        
        console.log( point );
        //1 verifica se nao faturado esse issue
        //salva um novo point (account é so pra moedas? FUCK!)
        //2 encontrar a subAccount com o email
        //3 atualizar o saldo do time e do membro.

        console.log("issue.author", issue.author);

        Account.listAll().then( accountsSnapshot => 
        {
            accountsSnapshot.forEach( accountSnapshot => 
            {
                const account:Account = accountSnapshot.val();
             
                account.subAccounts.forEach( subAccount => 
                {
                    console.log(subAccount.name);
                    if ( subAccount.name == issue.author.mail )
                    {
                        console.log("ACHOU!", subAccount);
                    }
                });

                return false;
            });
        });
    }

    private createDefaultAccounts()
    {
        const kamikaze = new Account("Kamikaze Champions");
        kamikaze.subAccounts.push( new Account("newton.muchael@eits.com.br") );
        kamikaze.subAccounts.push( new Account("bruno.cesar@eits.com.br") );
        kamikaze.subAccounts.push( new Account("eduardo.ayres@eits.com.br") );
        kamikaze.insert();

        const hardcoders = new Account("HardCoders");
        hardcoders.subAccounts.push( new Account("gabriel.silva@eits.com.br") );
        hardcoders.subAccounts.push( new Account("lucas.aquila@eits.com.br") );
        hardcoders.subAccounts.push( new Account("victor.carvalho@eits.com.br") );
        hardcoders.insert();

        const extreme = new Account("eXtreme Ninjas");
        extreme.subAccounts.push( new Account("marcieli.langer@eits.com.br") );
        extreme.subAccounts.push( new Account("thiago.chaves@eits.com.br") );
        extreme.subAccounts.push( new Account("douglas.gatti@eits.com.br") );
        extreme.insert();

        const upcode = new Account("Upcode");
        upcode.subAccounts.push( new Account("emanuel.fonseca@eits.com.br") );
        upcode.subAccounts.push( new Account("lucas.boz@eits.com.br") );
        upcode.subAccounts.push( new Account("gabriel.putrick@eits.com.br") );
        upcode.insert();

        const setfocus = new Account("setFocus");
        setfocus.subAccounts.push( new Account("kelly.cristina@eits.com.br") );
        setfocus.subAccounts.push( new Account("douglas.zilli@eits.com.br") );
        setfocus.subAccounts.push( new Account("eduardo.antonio@eits.com.br") );
        setfocus.insert();

        const doit = new Account("doit");
        doit.subAccounts.push( new Account("lucas.aguiar@eits.com.br") );
        doit.subAccounts.push( new Account("juan.fernandes@eits.com.br") );
        doit.subAccounts.push( new Account("julian.sotuyo@eits.com.br") );
        doit.insert();
    
    }
}