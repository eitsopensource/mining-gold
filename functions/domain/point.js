"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = require("./entity");
/**
 *
 */
var Point = (function (_super) {
    __extends(Point, _super);
    /**
     *
     */
    function Point(type) {
        var _this = _super.call(this) || this;
        _this.type = type;
        return _this;
    }
    return Point;
}(entity_1.Entity));
exports.Point = Point;
