"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var kendo_angular_popup_1 = require("@progress/kendo-angular-popup");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
var dateinput_module_1 = require("../dateinput/dateinput.module");
var calendar_module_1 = require("../calendar/calendar.module");
var timepicker_module_1 = require("../timepicker/timepicker.module");
var templates_module_1 = require("../calendar/templates.module");
var touch_enabled_1 = require("../touch-enabled");
var support_1 = require("../support");
var datetimepicker_component_1 = require("./datetimepicker.component");
var datetimepicker_custom_messages_component_1 = require("./localization/datetimepicker-custom-messages.component");
var localized_messages_directive_1 = require("./localization/localized-messages.directive");
var COMPONENT_DIRECTIVES = [
    datetimepicker_component_1.DateTimePickerComponent,
    datetimepicker_custom_messages_component_1.DateTimePickerCustomMessagesComponent,
    localized_messages_directive_1.LocalizedMessagesDirective
];
var ɵ0 = support_1.touchEnabled;
exports.ɵ0 = ɵ0;
/**
 * Represents the [NgModule]({{ site.data.urls.angular['ngmoduleapi'] }})
 * definition for the DateTimePicker component.
 */
var DateTimePickerModule = /** @class */ (function () {
    function DateTimePickerModule() {
    }
    DateTimePickerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: COMPONENT_DIRECTIVES.slice(),
                    exports: COMPONENT_DIRECTIVES.concat([
                        templates_module_1.TemplatesModule
                    ]),
                    imports: [
                        common_1.CommonModule,
                        kendo_angular_intl_1.IntlModule,
                        dateinput_module_1.DateInputModule,
                        calendar_module_1.CalendarModule,
                        timepicker_module_1.TimePickerModule,
                        kendo_angular_popup_1.PopupModule,
                        kendo_angular_common_1.EventsModule,
                        templates_module_1.TemplatesModule
                    ],
                    providers: [
                        { provide: touch_enabled_1.TOUCH_ENABLED, useValue: ɵ0 }
                    ]
                },] },
    ];
    return DateTimePickerModule;
}());
exports.DateTimePickerModule = DateTimePickerModule;
