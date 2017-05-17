"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Functions = require("firebase-functions");
/**
 *
 */
var CodeQualityController = (function () {
    function CodeQualityController() {
    }
    return CodeQualityController;
}());
/**
 *
 */
CodeQualityController.onRequest = Functions.https.onRequest(function (request, response) {
    console.log(request.body);
    var payload = request.body.payload;
    response.send("OK");
});
exports.CodeQualityController = CodeQualityController;
