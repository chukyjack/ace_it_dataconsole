import { ElementRef, OnDestroy, ChangeDetectorRef, EventEmitter, NgZone, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { PopupService } from '@progress/kendo-angular-popup';
import { IntlService } from '@progress/kendo-angular-intl';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { PickerService } from '../common/picker.service';
import { CalendarComponent } from '../calendar/calendar.component';
import { TimeSelectorComponent } from '../timepicker/timeselector.component';
import { DateInputComponent } from '../dateinput/dateinput.component';
import { PreventableEvent } from '../preventable-event';
import { PopupSettings } from '../popup-settings.model';
import { DateInputFormatPlaceholder } from '../dateinput/models/format-placeholder.model';
import { DateInputIncrementalSteps } from '../dateinput/models/incremental-steps.model';
import { DateTimePickerActiveTab } from './models/active-tab.type';
import { CellTemplateDirective } from '../calendar/templates/cell-template.directive';
import { MonthCellTemplateDirective } from '../calendar/templates/month-cell-template.directive';
import { YearCellTemplateDirective } from '../calendar/templates/year-cell-template.directive';
import { DecadeCellTemplateDirective } from '../calendar/templates/decade-cell-template.directive';
import { CenturyCellTemplateDirective } from '../calendar/templates/century-cell-template.directive';
import { WeekNumberCellTemplateDirective } from '../calendar/templates/weeknumber-cell-template.directive';
import { HeaderTitleTemplateDirective } from '../calendar/templates/header-title-template.directive';
/**
 * Represents the [Kendo UI DateTimePicker component for Angular]({% slug overview_datetimepicker %}).
 */
export declare class DateTimePickerComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor, Validator {
    private popupService;
    private intl;
    private cdr;
    private pickerService;
    private ngZone;
    private host;
    private touchEnabled;
    localization: LocalizationService;
    /**
     * @hidden
     */
    hostClasses: boolean;
    /**
     * @hidden
     */
    wrapper: ElementRef<HTMLSpanElement>;
    /**
     * @hidden
     */
    readonly input: DateInputComponent;
    /**
     * @hidden
     */
    readonly calendar: CalendarComponent;
    /**
     * @hidden
     */
    readonly timeSelector: TimeSelectorComponent;
    /**
     * Specifies the value of the DateTimePicker component.
     *
     * > The `value` has to be a valid [JavaScript `Date`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) instance.
     */
    value: Date;
    /**
     * Specifies the date format for displaying the input value
     * ([see example]({% slug formats_datetimepicker %})).
     */
    format: string;
    /**
     * Specifies the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the DateTimePicker.
     */
    tabindex: number;
    /**
     * Configures the popup settings of the DateTimePicker
     * ([see example]({% slug datetimepicker_popup_options %}#toc-customizing-the-popup)).
     *
     * The available options are:
     * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
     * - `appendTo: 'root' | 'component' | ViewContainerRef`&mdash;Controls the popup container. By default, the popup will be appended to the root component.
     * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
     */
    popupSettings: PopupSettings;
    /**
     * @hidden
     */
    focusableId: string;
    /**
     * Sets the title of the input element of the DateTimePicker.
     */
    title: string;
    /**
     * Sets or gets the `disabled` property of the DateTimePicker and determines whether the component is active
     * ([see example]({% slug disabled_datetimepicker %})).
     */
    disabled: boolean;
    /**
     * Sets the read-only state of the DateTimePicker
     * ([see example]({% slug readonly_datetimepicker %})).
     */
    readonly: boolean;
    /**
     * Determines whether to display the **Cancel** button in the popup
     * ([see example]({% slug datetimepicker_popup_options %}#toc-toggling-the-cancel-button)).
     */
    cancelButton: boolean;
    /**
     * Defines the descriptions of the format sections in the input field
     * ([see example]({% slug placeholders_datetimepicker %}#toc-format-sections-description)).
     */
    formatPlaceholder: DateInputFormatPlaceholder;
    /**
     * Specifies the hint which is displayed by the DateTimePicker when its value is `null`
     * ([see example]({% slug placeholders_datetimepicker %}#toc-text-hints)).
     */
    placeholder: string;
    /**
     * Configures the incremental steps of the DateInput and the popup component of the TimePicker
     * ([see example]({% slug incrementalsteps_datetimepicker %})).
     */
    steps: DateInputIncrementalSteps;
    /**
     * Specifies the focused date of the popup Calendar
     * ([see example]({% slug datetimepicker_calendar_options %}#toc-focused-dates)).
     */
    focusedDate: Date;
    /**
     * Determines whether to display a week number column in the `month` view of the popup Calendar
     * ([see example]({% slug datetimepicker_calendar_options %}#toc-week-number-column)).
     */
    weekNumber: boolean;
    /**
     * Specifies the smallest valid date.
     * The Calendar will not display dates before this value.
     * If the `min` value of the Calendar is selected, the TimePicker will not display
     * time entries before the specified time portion of this value
     * ([see example]({% slug dateranges_datetimepicker %})).
     */
    min: Date;
    /**
     * Specifies the biggest valid date.
     * The Calendar will not display dates after this value.
     * If the `max` value of the Calendar is selected, the TimePicker will not display
     * time entries after the specified time portion of this value
     * ([see example]({% slug dateranges_datetimepicker %})).
     */
    max: Date;
    /**
     * When the DateTimePicker is validating a form, determines whether the built-in min or max validators are enforced
     * ([see example]({% slug dateranges_datetimepicker %}#toc-forms-range-validation)).
     */
    rangeValidation: boolean;
    /**
     * Fires each time the user selects a new value.
     * For more information, refer to the section on
     * [methods and events]({% slug overview_datetimepicker %}#toc-methods-and-events).
     */
    valueChange: EventEmitter<Date>;
    /**
     * Fires each time the popup is about to open.
     * This event is preventable. If you cancel the event by setting `event.preventDefault()`, the popup will remain closed.
     * For more information, refer to the section on
     * [methods and events]({% slug overview_datetimepicker %}#toc-methods-and-events).
     */
    open: EventEmitter<PreventableEvent>;
    /**
     * Fires each time the popup is about to close.
     * This event is preventable. If you cancel the event by setting `event.preventDefault()`, the popup will remain open.
     * For more information, refer to the section on
     * [methods and events]({% slug overview_datetimepicker %}#toc-methods-and-events).
     */
    close: EventEmitter<PreventableEvent>;
    /**
     * Fires each time the user focuses the component.
     * For more information, refer to the section on
     * [mwthods and events]({% slug overview_datetimepicker %}#toc-methods-and-events).
     */
    onFocus: EventEmitter<any>;
    /**
     * Fires each time the user blurs the component.
     * For more information, refer to the section on
     * [methods and events]({% slug overview_datetimepicker %}#toc-methods-and-events).
     */
    onBlur: EventEmitter<any>;
    /**
     * Indicates whether the component is currently open.
     */
    readonly isOpen: boolean;
    /**
     * Indicates whether the component or its popup content is focused.
     */
    isActive: boolean;
    /**
     * Sets the active tab on opening the popup
     * ([see example]({% slug datetimepicker_popup_options %}#toc-setting-the-default-tab)).
     */
    defaultTab: DateTimePickerActiveTab;
    /**
     * @hidden
     */
    readonly tabSwitchTransition: string;
    /**
     * @hidden
     *
     * Indicates whether the Calendar will be disabled.
     * The inactive tab component gets disabled and becomes inaccessible on tab click.
     */
    readonly disableCalendar: boolean;
    /**
     * @hidden
     *
     * Indicates whether the TimeSelector will be disabled.
     * The inactive tab component gets disabled and becomes inaccessible on tab click.
     */
    readonly disableTimeSelector: boolean;
    /**
     * @hidden
     *
     * Controls whether the Calendar or the TimeSelector will be displayed.
     */
    activeTab: DateTimePickerActiveTab;
    /**
     * @hidden
     *
     * Specifies the stripped time-related format that is used in the TimeSelector.
     * Updates each time the `format` property value changes.
     */
    timeSelectorFormat: string;
    /**
     * @hidden
     */
    timeSelectorMin: Date;
    /**
     * @hidden
     */
    timeSelectorMax: Date;
    /**
     * @hidden
     */
    calendarValue: Date;
    /**
     * @hidden
     */
    calendarMin: Date;
    /**
     * @hidden
     */
    calendarMax: Date;
    /**
     * @hidden
     */
    cellTemplate: CellTemplateDirective;
    /**
     * @hidden
     */
    monthCellTemplate: MonthCellTemplateDirective;
    /**
     * @hidden
     */
    yearCellTemplate: YearCellTemplateDirective;
    /**
     * @hidden
     */
    decadeCellTemplate: DecadeCellTemplateDirective;
    /**
     * @hidden
     */
    centuryCellTemplate: CenturyCellTemplateDirective;
    /**
     * @hidden
     */
    weekNumberTemplate: WeekNumberCellTemplateDirective;
    /**
     * @hidden
     */
    headerTitleTemplate: HeaderTitleTemplateDirective;
    private readonly activeTabComponent;
    private readonly appendTo;
    private container;
    private popupTemplate;
    private popupRef;
    private _popupSettings;
    private _value;
    private _format;
    private _tabindex;
    private _defaultTab;
    private _min;
    private _max;
    private notifyNgControlTouched;
    private notifyNgControlValueChange;
    private validateMin;
    private validateMax;
    private subscriptions;
    constructor(popupService: PopupService, intl: IntlService, cdr: ChangeDetectorRef, pickerService: PickerService, ngZone: NgZone, host: ElementRef<HTMLElement>, touchEnabled: boolean, localization: LocalizationService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * If the popup is closed, focuses the DateTimePicker input.
     * If the popup is open, the focus is moved to its content.
     */
    focus(): void;
    /**
     * Blurs the DateTimePicker.
     */
    blur(): void;
    /**
     * Toggles the visibility of the popup. If you use the `toggle` method to show or hide the popup,
     * the `open` and `close` events do not fire.
     * For more information, refer to the section on
     * [methods and events]({% slug overview_datetimepicker %}#toc-methods-and-events).
     *
     * @param show - The state of the popup.
     */
    toggle(show?: boolean): void;
    /**
     * @hidden
     */
    writeValue(value: Date): void;
    /**
     * @hidden
     */
    registerOnChange(fn: any): void;
    /**
     * @hidden
     */
    registerOnTouched(fn: any): void;
    /**
     * @hidden
     */
    setDisabledState(disabled: boolean): void;
    /**
     * @hidden
     */
    validate(control: AbstractControl): ValidationErrors;
    /**
     * @hidden
     *
     * Used by the TextBoxContainer to determine if the floating label will render in the input.
     */
    isEmpty(): boolean;
    /**
     * @hidden
     */
    handleIconClick(event: MouseEvent): void;
    /**
     * @hidden
     */
    handleFocus(): void;
    /**
     * @hidden
     */
    handleBlur(event?: FocusEvent): void;
    /**
     * @hidden
     */
    changeActiveTab(tab: DateTimePickerActiveTab): void;
    /**
     * @hidden
     */
    handleTabChangeTransitionEnd(dateTimeSelector: HTMLElement, event: TransitionEvent): void;
    /**
     * @hidden
     */
    handleAccept(): void;
    /**
     * @hidden
     */
    handleCancel(): void;
    /**
     * @hidden
     */
    handleInputValueChange(value: Date): void;
    /**
     * @hidden
     */
    handleCalendarValueChange(): void;
    /**
     * @hidden
     */
    handleKeyDown(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    handleTabOut(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    handleBackTabOut(event: KeyboardEvent): void;
    /**
     * @hidden
     *
     * Prevents the diversion of the focus from the currently active element in the component.
     */
    preventMouseDown(event: MouseEvent): void;
    private verifyValue;
    private verifyMinMaxRange;
    /**
     * Extracts the time slots and the literals that are not proceded by date parts
     * and concatenates the resulting parts into a string.
     * If the provided format value does not contain any time parts,
     * returns the designated format of the default popup component of the TimePicker.
     */
    private getTimeSelectorFormat;
    /**
     * The filter expression that filters out all format parts
     * except for `hour`, `minute`, `second`, `dayperiod`, and specific literals.
     * Literals will be left only if they are not preceded by date parts.
     */
    private timeFormatPartFilter;
    private togglePopup;
    private switchFocus;
    private openPopup;
    private closePopup;
    private handleValueChange;
    /**
     * Indicates whether the focus target is part of this component,
     * that is, whether the focus target is inside the component wrapper or in the popup.
     */
    private focusTargetInComponent;
    private setTimeSelectorMinMax;
    private setCalendarValue;
    /**
     * If a popup is available, runs a popup change detection.
     */
    private detectPopupChanges;
    /**
     * Depending on the predicate `runInZone` value that is passed,
     * runs the provided function either in the Angular or in the current zone.
     */
    private run;
}
