//require('@google-cloud/debug-agent').start({ allowExpressions: true });

import {Account} from './domain/account';
import {IssueController} from './controller/issue.controller';
import {CodeQualityController} from './controller/code-quality.controller';

/**
 * 
 */
export const issueController = IssueController.onRequest;

/**
 * 
 */
export const codeQualityController = CodeQualityController.onRequest;