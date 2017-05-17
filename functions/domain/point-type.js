"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
var PointType = (function () {
    /**
     *
     */
    function PointType(value, name) {
        this.value = value;
        this.name = name;
    }
    return PointType;
}());
exports.PointType = PointType;
/**
*
*/
exports.SPRINT_FINISHED = {
    value: 0,
    name: "SPRINT_FINISHED",
    calculatePoints: function (pf) {
        return 50 * pf;
    }
};
/**
*
*/
exports.BUG = {
    value: 1,
    name: "BUG",
    calculatePoints: function () {
        return -150;
    }
};
/**
*
*/
exports.ACTIVITY_DONE = {
    value: 2,
    name: "ACTIVITY_DONE",
    calculatePoints: function () {
        return 100;
    }
};
/**
*
*/
exports.CI_BROKE = {
    value: 3,
    name: "CI_BROKE",
    calculatePoints: function () {
        return -25;
    }
};
/**
*
*/
exports.QUALITY_CONTROL = {
    value: 4,
    name: "QUALITY_CONTROL",
    calculatePoints: function () {
        return 50;
    }
};
/**
* Falta sem justificativa
*/
exports.LACK = {
    value: 5,
    name: "LACK",
    calculatePoints: function () {
        return -5;
    }
};
/**
*
*/
exports.MISSING_HOURS = {
    value: 6,
    name: "MISSING_HOURS",
    calculatePoints: function (hours) {
        return -5 * hours;
    }
};
/**
*
*/
exports.COURSE_DONE = {
    value: 7,
    name: "COURSE_DONE",
    calculatePoints: function (hours) {
        return 25 * hours;
    }
};
/**
*
*/
exports.COURSE_TEACH = {
    value: 8,
    name: "COURSE_TEACH",
    calculatePoints: function (hours) {
        return 50 * hours;
    }
};
/**
*
*/
exports.POST_BLOG = {
    value: 9,
    name: "POST_BLOG",
    calculatePoints: function () {
        return 300;
    }
};
/**
*
*/
exports.PAPER = {
    value: 10,
    name: "PAPER",
    calculatePoints: function () {
        return 1000;
    }
};
