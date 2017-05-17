"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Functions = require("firebase-functions");
var Admin = require("firebase-admin");
Admin.initializeApp(Functions.config().firebase);
/**
 *
 */
var Entity = (function () {
    /**
     *
     */
    function Entity() {
        this.entityName = this.constructor.name;
    }
    /**
     *
     */
    Entity.prototype.insert = function () {
        return Entity.database
            .ref(this.entityName)
            .push(this);
    };
    /**
     *
     */
    Entity.prototype.update = function () {
        return Entity.database
            .ref()
            .child(this.entityName)
            .child(this.key)
            .set(this);
    };
    /**
     *
     */
    Entity.prototype.remove = function () {
        return Entity.database
            .ref()
            .child(this.entityName)
            .child(this.key)
            .remove();
    };
    /**
     *
     */
    Entity.listAll = function () {
        return Entity.database
            .ref(this.name)
            .orderByKey()
            .once("value");
    };
    /**
     *
     */
    Entity.reference = function () {
        return Entity.database
            .ref(this.name);
    };
    return Entity;
}());
/**
 *
 */
Entity.database = Admin.database();
exports.Entity = Entity;
