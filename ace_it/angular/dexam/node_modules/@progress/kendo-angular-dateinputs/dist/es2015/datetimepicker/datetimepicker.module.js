import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupModule } from '@progress/kendo-angular-popup';
import { EventsModule } from '@progress/kendo-angular-common';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputModule } from '../dateinput/dateinput.module';
import { CalendarModule } from '../calendar/calendar.module';
import { TimePickerModule } from '../timepicker/timepicker.module';
import { TemplatesModule } from '../calendar/templates.module';
import { TOUCH_ENABLED } from '../touch-enabled';
import { touchEnabled } from '../support';
import { DateTimePickerComponent } from './datetimepicker.component';
import { DateTimePickerCustomMessagesComponent } from './localization/datetimepicker-custom-messages.component';
import { LocalizedMessagesDirective } from './localization/localized-messages.directive';
const COMPONENT_DIRECTIVES = [
    DateTimePickerComponent,
    DateTimePickerCustomMessagesComponent,
    LocalizedMessagesDirective
];
const ɵ0 = touchEnabled;
/**
 * Represents the [NgModule]({{ site.data.urls.angular['ngmoduleapi'] }})
 * definition for the DateTimePicker component.
 */
export class DateTimePickerModule {
}
DateTimePickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...COMPONENT_DIRECTIVES
                ],
                exports: [
                    ...COMPONENT_DIRECTIVES,
                    TemplatesModule
                ],
                imports: [
                    CommonModule,
                    IntlModule,
                    DateInputModule,
                    CalendarModule,
                    TimePickerModule,
                    PopupModule,
                    EventsModule,
                    TemplatesModule
                ],
                providers: [
                    { provide: TOUCH_ENABLED, useValue: ɵ0 }
                ]
            },] },
];
export { ɵ0 };
