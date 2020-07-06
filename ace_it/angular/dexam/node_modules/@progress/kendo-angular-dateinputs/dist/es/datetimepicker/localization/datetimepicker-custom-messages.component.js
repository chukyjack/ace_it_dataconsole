import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { Messages } from './messages';
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
        { type: Component, args: [{
                    providers: [
                        {
                            provide: Messages,
                            useExisting: forwardRef(function () { return DateTimePickerCustomMessagesComponent; })
                        }
                    ],
                    selector: 'kendo-datetimepicker-messages',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    DateTimePickerCustomMessagesComponent.ctorParameters = function () { return [
        { type: LocalizationService }
    ]; };
    return DateTimePickerCustomMessagesComponent;
}(Messages));
export { DateTimePickerCustomMessagesComponent };
