//require('@google-cloud/debug-agent').start({ allowExpressions: true });
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var issue_controller_1 = require("./controller/issue.controller");
var code_quality_controller_1 = require("./controller/code-quality.controller");
/**
 *
 */
exports.issueController = issue_controller_1.IssueController.onRequest;
/**
 *
 */
exports.codeQualityController = code_quality_controller_1.CodeQualityController.onRequest;
