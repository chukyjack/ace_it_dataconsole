"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
var messages_1 = require("./messages");
/**
 * Custom component messages override default component messages ([see example]({% slug globalization_dateinputs %}#toc-custom-messages)).
 */
var DateTimePickerCustomMessagesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DateTimePickerCustomMessagesComponent, _super);
    function DateTimePickerCustomMessagesComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    Object.defineProperty(DateTimePickerCustomMessagesComponent.prototype, "override", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    DateTimePickerCustomMessagesComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: messages_1.Messages,
                            useExisting: core_1.forwardRef(function () { return DateTimePickerCustomMessagesComponent; })
                        }
                    ],
                    selector: 'kendo-datetimepicker-messages',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    DateTimePickerCustomMessagesComponent.ctorParameters = function () { return [
        { type: kendo_angular_l10n_1.LocalizationService }
    ]; };
    return DateTimePickerCustomMessagesComponent;
}(messages_1.Messages));
exports.DateTimePickerCustomMessagesComponent = DateTimePickerCustomMessagesComponent;
