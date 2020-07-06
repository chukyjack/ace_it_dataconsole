"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var date_pipe_1 = require("./date.pipe");
var number_pipe_1 = require("./number.pipe");
var pipes = [
    date_pipe_1.DatePipe,
    number_pipe_1.NumberPipe
];
/**
 * Represents the [NgModule]({{ site.data.urls.angular['ngmoduleapi'] }}docs/ts/latest/guide/ngmodule.html)
 * definition for the Intl services.
 */
var IntlModule = /** @class */ (function () {
    function IntlModule() {
    }
    IntlModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [pipes],
                    exports: [pipes]
                },] },
    ];
    return IntlModule;
}());
exports.IntlModule = IntlModule;
