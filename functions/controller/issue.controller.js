"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Functions = require("firebase-functions");
var account_1 = require("../domain/account");
var point_1 = require("../domain/point");
var PointType = require("../domain/point-type");
/**
 *
 */
var IssueController = (function () {
    function IssueController() {
    }
    /**
     *
     * @param issue
     */
    IssueController.prototype.activityDoneHandler = function (issue) {
        var point = new point_1.Point(PointType.BUG);
        point.source = issue;
        point.insert();
        console.log(point);
        //1 verifica se nao faturado esse issue
        //salva um novo point (account é so pra moedas? FUCK!)
        //2 encontrar a subAccount com o email
        //3 atualizar o saldo do time e do membro.
        console.log("issue.author", issue.author);
        account_1.Account.listAll().then(function (accountsSnapshot) {
            accountsSnapshot.forEach(function (accountSnapshot) {
                var account = accountSnapshot.val();
                account.subAccounts.forEach(function (subAccount) {
                    console.log(subAccount.name);
                    if (subAccount.name == issue.author.mail) {
                        console.log("ACHOU!", subAccount);
                    }
                });
                return false;
            });
        });
    };
    IssueController.prototype.createDefaultAccounts = function () {
        var kamikaze = new account_1.Account("Kamikaze Champions");
        kamikaze.subAccounts.push(new account_1.Account("newton.muchael@eits.com.br"));
        kamikaze.subAccounts.push(new account_1.Account("bruno.cesar@eits.com.br"));
        kamikaze.subAccounts.push(new account_1.Account("eduardo.ayres@eits.com.br"));
        kamikaze.insert();
        var hardcoders = new account_1.Account("HardCoders");
        hardcoders.subAccounts.push(new account_1.Account("gabriel.silva@eits.com.br"));
        hardcoders.subAccounts.push(new account_1.Account("lucas.aquila@eits.com.br"));
        hardcoders.subAccounts.push(new account_1.Account("victor.carvalho@eits.com.br"));
        hardcoders.insert();
        var extreme = new account_1.Account("eXtreme Ninjas");
        extreme.subAccounts.push(new account_1.Account("marcieli.langer@eits.com.br"));
        extreme.subAccounts.push(new account_1.Account("thiago.chaves@eits.com.br"));
        extreme.subAccounts.push(new account_1.Account("douglas.gatti@eits.com.br"));
        extreme.insert();
        var upcode = new account_1.Account("Upcode");
        upcode.subAccounts.push(new account_1.Account("emanuel.fonseca@eits.com.br"));
        upcode.subAccounts.push(new account_1.Account("lucas.boz@eits.com.br"));
        upcode.subAccounts.push(new account_1.Account("gabriel.putrick@eits.com.br"));
        upcode.insert();
        var setfocus = new account_1.Account("setFocus");
        setfocus.subAccounts.push(new account_1.Account("kelly.cristina@eits.com.br"));
        setfocus.subAccounts.push(new account_1.Account("douglas.zilli@eits.com.br"));
        setfocus.subAccounts.push(new account_1.Account("eduardo.antonio@eits.com.br"));
        setfocus.insert();
        var doit = new account_1.Account("doit");
        doit.subAccounts.push(new account_1.Account("lucas.aguiar@eits.com.br"));
        doit.subAccounts.push(new account_1.Account("juan.fernandes@eits.com.br"));
        doit.subAccounts.push(new account_1.Account("julian.sotuyo@eits.com.br"));
        doit.insert();
    };
    return IssueController;
}());
/**
 *
 */
IssueController.onRequest = Functions.https.onRequest(function (request, response) {
    var payload = request.body.payload;
    if (payload == null) {
        response.status(400).send('The body must not be empty');
        return;
    }
    if (payload.action != "updated") {
        response.status(400).send('This services only accept issues updated');
        return;
    }
    var issueController = new IssueController();
    var issue = payload.issue;
    //ACTIVITY DONE
    if (issue.tracker.name == "ACTIVITY" && issue.status.name == "Done") {
        issueController.activityDoneHandler(issue);
    }
    response.send("OK");
});
exports.IssueController = IssueController;
