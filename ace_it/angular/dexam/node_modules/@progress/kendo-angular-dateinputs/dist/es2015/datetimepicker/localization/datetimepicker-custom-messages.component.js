import { Component, forwardRef } from '@angular/core';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { Messages } from './messages';
/**
 * Custom component messages override default component messages ([see example]({% slug globalization_dateinputs %}#toc-custom-messages)).
 */
export class DateTimePickerCustomMessagesComponent extends Messages {
    constructor(service) {
        super();
        this.service = service;
    }
    get override() {
        return true;
    }
}
DateTimePickerCustomMessagesComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: Messages,
                        useExisting: forwardRef(() => DateTimePickerCustomMessagesComponent)
                    }
                ],
                selector: 'kendo-datetimepicker-messages',
                template: ``
            },] },
];
/** @nocollapse */
DateTimePickerCustomMessagesComponent.ctorParameters = () => [
    { type: LocalizationService }
];
