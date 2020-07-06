"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var kendo_date_math_1 = require("@progress/kendo-date-math");
var kendo_angular_popup_1 = require("@progress/kendo-angular-popup");
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
var picker_service_1 = require("../common/picker.service");
var utils_1 = require("../common/utils");
var util_1 = require("../util");
var preventable_event_1 = require("../preventable-event");
var min_validator_1 = require("../validators/min.validator");
var max_validator_1 = require("../validators/max.validator");
var time_part_default_1 = require("../timepicker/models/time-part.default");
var defaults_1 = require("../defaults");
var touch_enabled_1 = require("../touch-enabled");
var cell_template_directive_1 = require("../calendar/templates/cell-template.directive");
var month_cell_template_directive_1 = require("../calendar/templates/month-cell-template.directive");
var year_cell_template_directive_1 = require("../calendar/templates/year-cell-template.directive");
var decade_cell_template_directive_1 = require("../calendar/templates/decade-cell-template.directive");
var century_cell_template_directive_1 = require("../calendar/templates/century-cell-template.directive");
var weeknumber_cell_template_directive_1 = require("../calendar/templates/weeknumber-cell-template.directive");
var header_title_template_directive_1 = require("../calendar/templates/header-title-template.directive");
var timeFormatRegExp = new RegExp(time_part_default_1.TIME_PART.hour + "|" + time_part_default_1.TIME_PART.minute + "|" + time_part_default_1.TIME_PART.second + "|" + time_part_default_1.TIME_PART.dayperiod + "|literal");
var VALUE_DOC_LINK = 'https://www.telerik.com/kendo-angular-ui/components/dateinputs/datetimepicker/integration-with-json/';
var MIN_MAX_DOC_LINK = 'https://www.telerik.com/kendo-angular-ui/components/dateinputs/datetimepicker/date-time-limits/';
var DEFAULT_ACTIVE_TAB = 'date';
var DEFAULT_DATEINPUT_FORMAT = 'g';
var DEFAULT_TIMESELECTOR_FORMAT = 't';
/**
 * Represents the [Kendo UI DateTimePicker component for Angular]({% slug overview_datetimepicker %}).
 */
var DateTimePickerComponent = /** @class */ (function () {
    function DateTimePickerComponent(popupService, intl, cdr, pickerService, ngZone, host, touchEnabled, localization) {
        this.popupService = popupService;
        this.intl = intl;
        this.cdr = cdr;
        this.pickerService = pickerService;
        this.ngZone = ngZone;
        this.host = host;
        this.touchEnabled = touchEnabled;
        this.localization = localization;
        /**
         * @hidden
         */
        this.hostClasses = true;
        /**
         * @hidden
         */
        this.focusableId = "k-" + kendo_angular_common_1.guid();
        /**
         * Sets the title of the input element of the DateTimePicker.
         */
        this.title = '';
        /**
         * Sets or gets the `disabled` property of the DateTimePicker and determines whether the component is active
         * ([see example]({% slug disabled_datetimepicker %})).
         */
        this.disabled = false;
        /**
         * Sets the read-only state of the DateTimePicker
         * ([see example]({% slug readonly_datetimepicker %})).
         */
        this.readonly = false;
        /**
         * Determines whether to display the **Cancel** button in the popup
         * ([see example]({% slug datetimepicker_popup_options %}#toc-toggling-the-cancel-button)).
         */
        this.cancelButton = true;
        /**
         * Determines whether to display a week number column in the `month` view of the popup Calendar
         * ([see example]({% slug datetimepicker_calendar_options %}#toc-week-number-column)).
         */
        this.weekNumber = false;
        /**
         * When the DateTimePicker is validating a form, determines whether the built-in min or max validators are enforced
         * ([see example]({% slug dateranges_datetimepicker %}#toc-forms-range-validation)).
         */
        this.rangeValidation = true;
        /**
         * Fires each time the user selects a new value.
         * For more information, refer to the section on
         * [methods and events]({% slug overview_datetimepicker %}#toc-methods-and-events).
         */
        this.valueChange = new core_1.EventEmitter();
        /**
         * Fires each time the popup is about to open.
         * This event is preventable. If you cancel the event by setting `event.preventDefault()`, the popup will remain closed.
         * For more information, refer to the section on
         * [methods and events]({% slug overview_datetimepicker %}#toc-methods-and-events).
         */
        this.open = new core_1.EventEmitter();
        /**
         * Fires each time the popup is about to close.
         * This event is preventable. If you cancel the event by setting `event.preventDefault()`, the popup will remain open.
         * For more information, refer to the section on
         * [methods and events]({% slug overview_datetimepicker %}#toc-methods-and-events).
         */
        this.close = new core_1.EventEmitter();
        /**
         * Fires each time the user focuses the component.
         * For more information, refer to the section on
         * [mwthods and events]({% slug overview_datetimepicker %}#toc-methods-and-events).
         */
        this.onFocus = new core_1.EventEmitter();
        /**
         * Fires each time the user blurs the component.
         * For more information, refer to the section on
         * [methods and events]({% slug overview_datetimepicker %}#toc-methods-and-events).
         */
        this.onBlur = new core_1.EventEmitter();
        /**
         * Indicates whether the component or its popup content is focused.
         */
        this.isActive = false;
        /**
         * @hidden
         *
         * Controls whether the Calendar or the TimeSelector will be displayed.
         */
        this.activeTab = DEFAULT_ACTIVE_TAB;
        /**
         * @hidden
         *
         * Specifies the stripped time-related format that is used in the TimeSelector.
         * Updates each time the `format` property value changes.
         */
        this.timeSelectorFormat = DEFAULT_TIMESELECTOR_FORMAT;
        /**
         * @hidden
         */
        this.timeSelectorMin = kendo_date_math_1.cloneDate(defaults_1.MIN_TIME);
        /**
         * @hidden
         */
        this.timeSelectorMax = kendo_date_math_1.cloneDate(defaults_1.MAX_TIME);
        /**
         * @hidden
         */
        this.calendarValue = null;
        /**
         * @hidden
         */
        this.calendarMin = kendo_date_math_1.cloneDate(defaults_1.MIN_DATE);
        /**
         * @hidden
         */
        this.calendarMax = util_1.lastMillisecondOfDate(defaults_1.MAX_DATE);
        this._popupSettings = { animate: true };
        this._value = null;
        this._format = DEFAULT_DATEINPUT_FORMAT;
        this._tabindex = 0;
        this._defaultTab = DEFAULT_ACTIVE_TAB;
        this._min = util_1.mergeDateAndTime(defaults_1.MIN_DATE, defaults_1.MIN_TIME);
        this._max = util_1.mergeDateAndTime(defaults_1.MAX_DATE, defaults_1.MAX_TIME);
        this.notifyNgControlTouched = util_1.noop;
        this.notifyNgControlValueChange = util_1.noop;
        this.validateMin = util_1.noop;
        this.validateMax = util_1.noop;
        this.subscriptions = [];
    }
    Object.defineProperty(DateTimePickerComponent.prototype, "input", {
        /**
         * @hidden
         */
        get: function () {
            return this.pickerService.input;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "calendar", {
        /**
         * @hidden
         */
        get: function () {
            return this.pickerService.calendar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "timeSelector", {
        /**
         * @hidden
         */
        get: function () {
            return this.pickerService.timeSelector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        /**
         * Specifies the value of the DateTimePicker component.
         *
         * > The `value` has to be a valid [JavaScript `Date`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) instance.
         */
        set: function (value) {
            this.verifyValue(value);
            this._value = kendo_date_math_1.cloneDate(value);
            this.setCalendarValue(value);
            this.cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "format", {
        get: function () {
            return this._format;
        },
        /**
         * Specifies the date format for displaying the input value
         * ([see example]({% slug formats_datetimepicker %})).
         */
        set: function (value) {
            this._format = value;
            this.timeSelectorFormat = this.getTimeSelectorFormat(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "tabindex", {
        get: function () {
            return this.disabled ? -1 : this._tabindex;
        },
        /**
         * Specifies the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the DateTimePicker.
         */
        set: function (value) {
            var tabindex = Number(value);
            var defaultValue = 0;
            this._tabindex = !isNaN(tabindex) ? tabindex : defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "popupSettings", {
        get: function () {
            return this._popupSettings;
        },
        /**
         * Configures the popup settings of the DateTimePicker
         * ([see example]({% slug datetimepicker_popup_options %}#toc-customizing-the-popup)).
         *
         * The available options are:
         * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
         * - `appendTo: 'root' | 'component' | ViewContainerRef`&mdash;Controls the popup container. By default, the popup will be appended to the root component.
         * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
         */
        set: function (settings) {
            this._popupSettings = Object.assign({}, { animate: true }, settings);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "min", {
        get: function () {
            return this._min;
        },
        /**
         * Specifies the smallest valid date.
         * The Calendar will not display dates before this value.
         * If the `min` value of the Calendar is selected, the TimePicker will not display
         * time entries before the specified time portion of this value
         * ([see example]({% slug dateranges_datetimepicker %})).
         */
        set: function (value) {
            if (!utils_1.isPresent(value)) {
                return;
            }
            this._min = kendo_date_math_1.cloneDate(value);
            this.calendarMin = kendo_date_math_1.getDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "max", {
        get: function () {
            return this._max;
        },
        /**
         * Specifies the biggest valid date.
         * The Calendar will not display dates after this value.
         * If the `max` value of the Calendar is selected, the TimePicker will not display
         * time entries after the specified time portion of this value
         * ([see example]({% slug dateranges_datetimepicker %})).
         */
        set: function (value) {
            if (!utils_1.isPresent(value)) {
                return;
            }
            this._max = kendo_date_math_1.cloneDate(value);
            this.calendarMax = util_1.lastMillisecondOfDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "isOpen", {
        /**
         * Indicates whether the component is currently open.
         */
        get: function () {
            return utils_1.isPresent(this.popupRef);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "defaultTab", {
        get: function () {
            return this._defaultTab;
        },
        /**
         * Sets the active tab on opening the popup
         * ([see example]({% slug datetimepicker_popup_options %}#toc-setting-the-default-tab)).
         */
        set: function (tab) {
            this._defaultTab = tab || DEFAULT_ACTIVE_TAB;
            this.activeTab = this.defaultTab;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "tabSwitchTransition", {
        /**
         * @hidden
         */
        get: function () {
            /*
             When the popup is opening, disables the set transition in the themes. When `defaultTab` is set to `time`,
             the popup opens with an active **Time** tab and the animation of the initial transition is undesired.
             Setting the inline transition style to `none` overrides the set animation in the themes.
             Setting the inline transition style to `null` does not apply any inline styles or override the themes CSS.
            */
            return this.isOpen ? null : 'none';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "disableCalendar", {
        /**
         * @hidden
         *
         * Indicates whether the Calendar will be disabled.
         * The inactive tab component gets disabled and becomes inaccessible on tab click.
         */
        get: function () {
            return this.activeTab !== 'date' && !this.calendar.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "disableTimeSelector", {
        /**
         * @hidden
         *
         * Indicates whether the TimeSelector will be disabled.
         * The inactive tab component gets disabled and becomes inaccessible on tab click.
         */
        get: function () {
            return this.activeTab !== 'time' && !this.timeSelector.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "activeTabComponent", {
        get: function () {
            if (!this.isOpen) {
                return;
            }
            if (!(utils_1.isPresent(this.calendar) || utils_1.isPresent(this.timeSelector))) {
                this.cdr.detectChanges();
            }
            return this.activeTab === 'date' ? this.calendar : this.timeSelector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "appendTo", {
        get: function () {
            var appendTo = this.popupSettings.appendTo;
            if (!utils_1.isPresent(appendTo) || appendTo === 'root') {
                return undefined;
            }
            return appendTo === 'component' ? this.container : appendTo;
        },
        enumerable: true,
        configurable: true
    });
    DateTimePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(
        // running the popup change detector here as focusing either of the popup components disables the other one
        // handled asynchronously as IE focus/blur methods are async
        this.pickerService.onFocus.pipe(operators_1.tap(this.detectPopupChanges.bind(this))).subscribe(this.handleFocus.bind(this)), this.pickerService.onBlur.subscribe(this.handleBlur.bind(this)), this.pickerService.sameDateSelected.subscribe(this.handleCalendarValueChange.bind(this)), this.localization.changes.subscribe(function () { return _this.cdr.markForCheck(); }));
    };
    DateTimePickerComponent.prototype.ngOnChanges = function (changes) {
        if (utils_1.isPresent(changes.min) || utils_1.isPresent(changes.max)) {
            this.verifyMinMaxRange();
        }
        if (utils_1.isPresent(changes.min) || utils_1.isPresent(changes.max) || utils_1.isPresent(changes.rangeValidation)) {
            this.validateMin = this.rangeValidation ? min_validator_1.minValidator(this.min) : util_1.noop;
            this.validateMax = this.rangeValidation ? max_validator_1.maxValidator(this.max) : util_1.noop;
        }
    };
    DateTimePickerComponent.prototype.ngOnDestroy = function () {
        if (this.isOpen) {
            this.closePopup();
        }
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    /**
     * If the popup is closed, focuses the DateTimePicker input.
     * If the popup is open, the focus is moved to its content.
     */
    DateTimePickerComponent.prototype.focus = function () {
        if (this.disabled) {
            return;
        }
        if (this.isOpen) {
            this.activeTabComponent.focus();
        }
        else {
            this.input.focus();
        }
    };
    /**
     * Blurs the DateTimePicker.
     */
    DateTimePickerComponent.prototype.blur = function () {
        if (this.isOpen && this.activeTabComponent.isActive) {
            this.activeTabComponent.blur();
        }
        else {
            this.input.blur();
        }
    };
    /**
     * Toggles the visibility of the popup. If you use the `toggle` method to show or hide the popup,
     * the `open` and `close` events do not fire.
     * For more information, refer to the section on
     * [methods and events]({% slug overview_datetimepicker %}#toc-methods-and-events).
     *
     * @param show - The state of the popup.
     */
    DateTimePickerComponent.prototype.toggle = function (show) {
        if (this.disabled || this.readonly) {
            return;
        }
        var shouldOpen = utils_1.isPresent(show) ? show : !this.isOpen;
        if (this.isOpen) {
            this.closePopup();
            // changes the tab and the calendar/clock icon to the designated default
            if (this.activeTab !== this.defaultTab) {
                this.activeTab = this.defaultTab;
                this.cdr.detectChanges();
            }
        }
        if (shouldOpen) {
            this.openPopup();
        }
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.registerOnChange = function (fn) {
        this.notifyNgControlValueChange = fn;
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.registerOnTouched = function (fn) {
        this.notifyNgControlTouched = fn;
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.validate = function (control) {
        return this.validateMin(control) || this.validateMax(control);
    };
    /**
     * @hidden
     *
     * Used by the TextBoxContainer to determine if the floating label will render in the input.
     */
    DateTimePickerComponent.prototype.isEmpty = function () {
        return !utils_1.isPresent(this.value) && this.input.isEmpty();
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.handleIconClick = function (event) {
        var _this = this;
        if (this.disabled || this.readonly) {
            return;
        }
        // prevents the event default to evade focusing the DateInput input when placed inside a label (FF/IE/Edge)
        event.preventDefault();
        var runInZone = !this.isOpen || kendo_angular_common_1.hasObservers(this.close);
        this.run(runInZone, function () {
            // handle focus first to maintain correct event order `focus` => `open`
            _this.handleFocus();
            _this.togglePopup(!_this.isOpen);
        });
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.handleFocus = function () {
        var _this = this;
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.cdr.detectChanges();
        if (kendo_angular_common_1.hasObservers(this.onFocus)) {
            this.ngZone.run(function () { return _this.onFocus.emit(); });
        }
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.handleBlur = function (event) {
        var _this = this;
        if (!this.isActive || this.focusTargetInComponent(event)) {
            return;
        }
        this.isActive = false;
        this.cdr.detectChanges();
        var isNgControlUntouched = this.host.nativeElement.classList.contains('ng-untouched');
        var runInZone = isNgControlUntouched || kendo_angular_common_1.hasObservers(this.onBlur) || (this.isOpen && kendo_angular_common_1.hasObservers(this.close));
        this.run(runInZone, function () {
            _this.onBlur.emit();
            _this.notifyNgControlTouched();
            _this.togglePopup(false);
        });
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.changeActiveTab = function (tab) {
        if (!this.isOpen || this.activeTab === tab) {
            return;
        }
        // persists the Tcurrent value of the TimeSelector when switching between tabs
        if (!kendo_date_math_1.isEqual(this.timeSelector.value, this.timeSelector.current)) {
            this.timeSelector.handleAccept();
        }
        this.activeTab = tab;
        this.cdr.detectChanges();
        this.detectPopupChanges();
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.handleTabChangeTransitionEnd = function (dateTimeSelector, event) {
        // handle only the .k-datetime-selector element transition, ignore any child element transitions
        if (event.target !== dateTimeSelector) {
            return;
        }
        this.activeTabComponent.focus();
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.handleAccept = function () {
        var _this = this;
        if (!this.isOpen) {
            return;
        }
        var candidate = util_1.mergeDateAndTime(this.calendar.value, this.timeSelector.current);
        var valueChangePresent = !kendo_date_math_1.isEqual(this.value, candidate);
        var runInZone = valueChangePresent || kendo_angular_common_1.hasObservers(this.close);
        this.run(runInZone, function () {
            _this.handleValueChange(candidate);
            _this.togglePopup(false);
        });
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.handleCancel = function () {
        var _this = this;
        if (!this.isOpen) {
            return;
        }
        var runInZone = kendo_angular_common_1.hasObservers(this.close);
        this.run(runInZone, function () { return _this.togglePopup(false); });
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.handleInputValueChange = function (value) {
        this.handleValueChange(value);
        if (this.isOpen) {
            this.togglePopup(false);
        }
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.handleCalendarValueChange = function () {
        this.setTimeSelectorMinMax(this.calendar.value);
        this.changeActiveTab('time');
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.handleKeyDown = function (event) {
        var _this = this;
        if (this.disabled || this.readonly) {
            return;
        }
        var _a = event, keyCode = _a.keyCode, altKey = _a.altKey;
        switch (keyCode) {
            case altKey && kendo_angular_common_1.Keys.ArrowUp:
            case kendo_angular_common_1.Keys.Escape:
                this.handleCancel();
                break;
            case !this.isOpen && altKey && kendo_angular_common_1.Keys.ArrowDown:
                this.ngZone.run(function () { return _this.togglePopup(true); });
                break;
            case altKey && kendo_angular_common_1.Keys.ArrowRight:
                this.changeActiveTab('time');
                break;
            case altKey && kendo_angular_common_1.Keys.ArrowLeft:
                this.changeActiveTab('date');
                break;
            case this.isOpen && this.timeSelector.isActive && utils_1.isPresent(this.calendarValue) && kendo_angular_common_1.Keys.Enter:
                this.handleAccept();
                break;
            default: return;
        }
        event.preventDefault();
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.handleTabOut = function (event) {
        var _a = event, keyCode = _a.keyCode, shiftKey = _a.shiftKey, target = _a.target;
        // if no focusable next sibling elements exist in the controls sections, the user is tabbing-out of the popup
        var focusableSiblingAvailable = utils_1.isPresent(target.nextElementSibling) && !target.nextElementSibling.disabled;
        if (keyCode === kendo_angular_common_1.Keys.Tab && !shiftKey && !focusableSiblingAvailable) {
            this.input.focus();
            this.handleCancel();
        }
    };
    /**
     * @hidden
     */
    DateTimePickerComponent.prototype.handleBackTabOut = function (event) {
        var _a = event, keyCode = _a.keyCode, shiftKey = _a.shiftKey;
        if (keyCode === kendo_angular_common_1.Keys.Tab && shiftKey) {
            this.input.focus();
        }
    };
    /**
     * @hidden
     *
     * Prevents the diversion of the focus from the currently active element in the component.
     */
    DateTimePickerComponent.prototype.preventMouseDown = function (event) {
        event.preventDefault();
    };
    DateTimePickerComponent.prototype.verifyValue = function (value) {
        if (!core_1.isDevMode()) {
            return;
        }
        if (utils_1.isPresent(value) && !(value instanceof Date)) {
            throw new Error("The 'value' should be a valid JavaScript Date instance. Check " + VALUE_DOC_LINK + " for possible resolution.");
        }
    };
    DateTimePickerComponent.prototype.verifyMinMaxRange = function () {
        if (!core_1.isDevMode()) {
            return;
        }
        if (!util_1.isValidRange(this.min, this.max)) {
            throw new Error("The max value should be bigger than the min. See " + MIN_MAX_DOC_LINK + ".");
        }
    };
    /**
     * Extracts the time slots and the literals that are not proceded by date parts
     * and concatenates the resulting parts into a string.
     * If the provided format value does not contain any time parts,
     * returns the designated format of the default popup component of the TimePicker.
     */
    DateTimePickerComponent.prototype.getTimeSelectorFormat = function (format) {
        var timeSelectorFormat = this.intl
            .splitDateFormat(format)
            .filter(this.timeFormatPartFilter)
            .reduce(function (format, part) { return format += part.pattern; }, '');
        return timeSelectorFormat || DEFAULT_TIMESELECTOR_FORMAT;
    };
    /**
     * The filter expression that filters out all format parts
     * except for `hour`, `minute`, `second`, `dayperiod`, and specific literals.
     * Literals will be left only if they are not preceded by date parts.
     */
    DateTimePickerComponent.prototype.timeFormatPartFilter = function (part, index, parts) {
        var previousPart = index >= 1 && parts[index - 1];
        if (previousPart && part.type === 'literal') {
            return timeFormatRegExp.test(previousPart.type);
        }
        return timeFormatRegExp.test(part.type);
    };
    DateTimePickerComponent.prototype.togglePopup = function (open) {
        if (open === this.isOpen) {
            return;
        }
        var event = new preventable_event_1.PreventableEvent();
        open ? this.open.emit(event) : this.close.emit(event);
        if (event.isDefaultPrevented()) {
            return;
        }
        this.toggle(open);
        this.switchFocus();
    };
    DateTimePickerComponent.prototype.switchFocus = function () {
        if (!this.isActive) {
            return;
        }
        if (this.isOpen) {
            this.activeTabComponent.focus();
        }
        else if (!this.touchEnabled) {
            this.input.focus();
        }
        else {
            this.handleBlur();
        }
    };
    DateTimePickerComponent.prototype.openPopup = function () {
        var _this = this;
        this.setCalendarValue(this.value);
        this.setTimeSelectorMinMax(this.value);
        var direction = this.localization.rtl ? 'right' : 'left';
        this.popupRef = this.popupService.open({
            anchor: this.wrapper,
            content: this.popupTemplate,
            positionMode: 'absolute',
            animate: this.popupSettings.animate,
            appendTo: this.appendTo,
            popupClass: "k-datetime-container " + (this.popupSettings.popupClass || ''),
            anchorAlign: { vertical: 'bottom', horizontal: direction },
            popupAlign: { vertical: 'top', horizontal: direction }
        });
        this.popupRef.popupAnchorViewportLeave.subscribe(function () { return _this.handleCancel(); });
    };
    DateTimePickerComponent.prototype.closePopup = function () {
        if (!this.isOpen) {
            return;
        }
        this.popupRef.close();
        this.popupRef = null;
    };
    DateTimePickerComponent.prototype.handleValueChange = function (value) {
        if (kendo_date_math_1.isEqual(this.value, value)) {
            return;
        }
        this.value = kendo_date_math_1.cloneDate(value);
        this.valueChange.emit(kendo_date_math_1.cloneDate(value));
        this.notifyNgControlValueChange(kendo_date_math_1.cloneDate(value));
    };
    /**
     * Indicates whether the focus target is part of this component,
     * that is, whether the focus target is inside the component wrapper or in the popup.
     */
    DateTimePickerComponent.prototype.focusTargetInComponent = function (event) {
        if (!utils_1.isPresent(event)) {
            return false;
        }
        var relatedTarget = event.relatedTarget || document.activeElement;
        var focusInPopup = utils_1.isPresent(this.popupRef) && this.popupRef.popupElement.contains(relatedTarget);
        var focusInWrapper = this.wrapper.nativeElement.contains(relatedTarget);
        return focusInPopup || focusInWrapper;
    };
    DateTimePickerComponent.prototype.setTimeSelectorMinMax = function (selectedDate) {
        var minDateSelected = utils_1.isPresent(selectedDate) && kendo_date_math_1.isEqual(kendo_date_math_1.getDate(selectedDate), kendo_date_math_1.getDate(this.min));
        this.timeSelectorMin = kendo_date_math_1.cloneDate(minDateSelected ? this.min : defaults_1.MIN_TIME);
        var maxDateSelected = utils_1.isPresent(selectedDate) && kendo_date_math_1.isEqual(kendo_date_math_1.getDate(selectedDate), kendo_date_math_1.getDate(this.max));
        this.timeSelectorMax = kendo_date_math_1.cloneDate(maxDateSelected ? this.max : defaults_1.MAX_TIME);
    };
    DateTimePickerComponent.prototype.setCalendarValue = function (value) {
        var isInCalendarRange = utils_1.isPresent(value) && util_1.isInRange(value, this.calendarMin, this.calendarMax);
        this.calendarValue = isInCalendarRange ? kendo_date_math_1.getDate(value) : null;
    };
    /**
     * If a popup is available, runs a popup change detection.
     */
    DateTimePickerComponent.prototype.detectPopupChanges = function () {
        if (!this.isOpen) {
            return;
        }
        this.popupRef.popup.changeDetectorRef.detectChanges();
    };
    /**
     * Depending on the predicate `runInZone` value that is passed,
     * runs the provided function either in the Angular or in the current zone.
     */
    DateTimePickerComponent.prototype.run = function (runInZone, fn) {
        if (runInZone) {
            this.ngZone.run(function () { return fn(); });
        }
        else {
            fn();
        }
    };
    DateTimePickerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'kendo-datetimepicker',
                    exportAs: 'kendo-datetimepicker',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [
                        picker_service_1.PickerService,
                        kendo_angular_l10n_1.LocalizationService,
                        { provide: kendo_angular_l10n_1.L10N_PREFIX, useValue: 'kendo.datetimepicker' },
                        { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return DateTimePickerComponent; }), multi: true },
                        { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return DateTimePickerComponent; }), multi: true },
                        { provide: kendo_angular_common_1.KendoInput, useExisting: core_1.forwardRef(function () { return DateTimePickerComponent; }) }
                    ],
                    template: "\n        <ng-container\n            kendoDateTimePickerLocalizedMessages\n\n            i18n-dateTab=\"kendo.datetimepicker.dateTab|The Date tab text in the datetimepicker popup header\"\n            dateTab=\"Date\"\n\n            i18n-dateTabLabel=\"kendo.datetimepicker.dateTabLabel|The label for the Date tab in the datetimepicker popup header\"\n            dateTabLabel=\"Date tab\"\n\n            i18n-timeTab=\"kendo.datetimepicker.timeTab|The Time tab text in the datetimepicker popup header\"\n            timeTab=\"Time\"\n\n            i18n-timeTabLabel=\"kendo.datetimepicker.timeTabLabel|The label for the Time tab in the datetimepicker popup header\"\n            timeTabLabel=\"Time tab\"\n\n            i18n-toggle=\"kendo.datetimepicker.toggle|The label for the toggle button in the datetimepicker component\"\n            toggle=\"Toggle popup\"\n\n            i18n-accept=\"kendo.datetimepicker.accept|The Accept button text in the datetimepicker component\"\n            accept=\"Set\"\n\n            i18n-acceptLabel=\"kendo.datetimepicker.acceptLabel|The label for the Accept button in the datetimepicker component\"\n            acceptLabel=\"Set\"\n\n            i18n-cancel=\"kendo.datetimepicker.cancel|The Cancel button text in the datetimepicker component\"\n            cancel=\"Cancel\"\n\n            i18n-cancelLabel=\"kendo.datetimepicker.cancelLabel|The label for the Cancel button in the datetimepicker component\"\n            cancelLabel=\"Cancel\"\n\n            i18n-now=\"kendo.datetimepicker.now|The Now button text in the timepicker component\"\n            now=\"NOW\"\n\n            i18n-nowLabel=\"kendo.datetimepicker.nowLabel|The label for the Now button in the timepicker component\"\n            nowLabel=\"Select now\"\n\n            i18n-today=\"kendo.datetimepicker.today|The label for the today button in the calendar header\"\n            today=\"TODAY\"\n        >\n        </ng-container>\n\n        <span\n            #wrapper\n            class=\"k-picker-wrap\"\n            [class.k-state-default]=\"!disabled\"\n            [class.k-state-disabled]=\"disabled\"\n            [class.k-state-focused]=\"isActive\"\n        >\n            <kendo-dateinput\n                [value]=\"value\"\n                [format]=\"format\"\n                [min]=\"min\"\n                [max]=\"max\"\n                [formatPlaceholder]=\"formatPlaceholder\"\n                [placeholder]=\"placeholder\"\n                [disabled]=\"disabled\"\n                [readonly]=\"readonly\"\n                [steps]=\"steps\"\n                [tabindex]=\"tabindex\"\n                [title]=\"title\"\n                [focusableId]=\"focusableId\"\n                [hasPopup]=\"true\"\n                [isPopupOpen]=\"isOpen\"\n                (valueChange)=\"handleInputValueChange($event)\"\n                [kendoEventsOutsideAngular]=\"{\n                    keydown: handleKeyDown\n                }\"\n                [scope]=\"this\"\n            >\n            </kendo-dateinput>\n            <span class=\"k-select\"\n                [attr.title]=\"localization.get('toggle')\"\n                [attr.aria-label]=\"localization.get('toggle')\"\n                [kendoEventsOutsideAngular]=\"{\n                    mousedown: preventMouseDown,\n                    click: handleIconClick\n                }\"\n                [scope]=\"this\"\n            >\n                <span class=\"k-link k-link-date\">\n                    <span\n                        class=\"k-icon\"\n                        [class.k-i-calendar]=\"activeTab === 'date'\"\n                        [class.k-i-clock]=\"activeTab === 'time'\"\n                    >\n                    </span>\n                </span>\n            </span>\n        </span>\n\n        <ng-container #container></ng-container>\n\n        <ng-template #popupTemplate>\n            <div\n                class=\"k-datetime-wrap k-{{activeTab}}-tab\"\n                [kendoEventsOutsideAngular]=\"{\n                    mousedown: preventMouseDown,\n                    keydown: handleKeyDown\n                }\"\n                [scope]=\"this\"\n            >\n                <div class=\"k-datetime-buttongroup\"\n                    [kendoEventsOutsideAngular]=\"{\n                        focusin: handleFocus,\n                        focusout: handleBlur\n                    }\"\n                    [scope]=\"this\"\n                >\n                    <div class=\"k-button-group k-button-group-stretched\">\n                        <button\n                            type=\"button\"\n                            class=\"k-button k-date-tab\"\n                            [class.k-state-active]=\"activeTab === 'date'\"\n                            [attr.title]=\"localization.get('dateTabLabel')\"\n                            [attr.aria-label]=\"localization.get('dateTabLabel')\"\n                            [kendoEventsOutsideAngular]=\"{\n                                click: changeActiveTab.bind(this, 'date'),\n                                keydown: handleBackTabOut\n                            }\"\n                            [scope]=\"this\"\n                        >\n                            {{localization.get('dateTab')}}\n                        </button>\n                        <button\n                            type=\"button\"\n                            class=\"k-button k-time-tab\"\n                            [class.k-state-active]=\"activeTab === 'time'\"\n                            [attr.title]=\"localization.get('timeTabLabel')\"\n                            [attr.aria-label]=\"localization.get('timeTabLabel')\"\n                            [kendoEventsOutsideAngular]=\"{\n                                click: changeActiveTab.bind(this, 'time')\n                            }\"\n                        >\n                            {{localization.get('timeTab')}}\n                        </button>\n                    </div>\n                </div>\n                <div\n                    #dateTimeSelector\n                    class=\"k-datetime-selector\"\n                    [style.transition]=\"tabSwitchTransition\"\n                    [kendoEventsOutsideAngular]=\"{\n                        transitionend: handleTabChangeTransitionEnd.bind(this, dateTimeSelector)\n                    }\"\n                >\n                    <div class=\"k-datetime-calendar-wrap\">\n                        <kendo-calendar\n                            [(value)]=\"calendarValue\"\n                            [min]=\"calendarMin\"\n                            [max]=\"calendarMax\"\n                            [focusedDate]=\"focusedDate\"\n                            [weekNumber]=\"weekNumber\"\n                            [navigation]=\"false\"\n                            [cellTemplate]=\"cellTemplate\"\n                            [monthCellTemplate]=\"monthCellTemplate\"\n                            [yearCellTemplate]=\"yearCellTemplate\"\n                            [decadeCellTemplate]=\"decadeCellTemplate\"\n                            [centuryCellTemplate]=\"centuryCellTemplate\"\n                            [weekNumberTemplate]=\"weekNumberTemplate\"\n                            [headerTitleTemplate]=\"headerTitleTemplate\"\n                            [disabled]=\"disableCalendar\"\n                            (valueChange)=\"handleCalendarValueChange()\"\n                        >\n                            <kendo-calendar-messages\n                                [today]=\"localization.get('today')\"\n                            >\n                            </kendo-calendar-messages>\n                        </kendo-calendar>\n                    </div>\n                    <div class=\"k-datetime-time-wrap\">\n                        <kendo-timeselector\n                            [value]=\"value\"\n                            [format]=\"timeSelectorFormat\"\n                            [min]=\"timeSelectorMin\"\n                            [max]=\"timeSelectorMax\"\n                            [setButton]=\"false\"\n                            [cancelButton]=\"false\"\n                            [steps]=\"steps\"\n                            [disabled]=\"disableTimeSelector\"\n                        >\n                            <kendo-timeselector-messages\n                                [now]=\"localization.get('now')\"\n                                [nowLabel]=\"localization.get('nowLabel')\"\n                            >\n                            </kendo-timeselector-messages>\n                        </kendo-timeselector>\n                    </div>\n                </div>\n                <div\n                    class=\"k-datetime-footer k-action-buttons\"\n                    [kendoEventsOutsideAngular]=\"{\n                        keydown: handleTabOut,\n                        focusin: handleFocus,\n                        focusout: handleBlur\n                    }\"\n                    [scope]=\"this\"\n                >\n                    <button\n                        *ngIf=\"cancelButton\"\n                        type=\"button\"\n                        class=\"k-button k-time-cancel\"\n                        [attr.title]=\"localization.get('cancelLabel')\"\n                        [attr.aria-label]=\"localization.get('cancelLabel')\"\n                        [kendoEventsOutsideAngular]=\"{\n                            click: handleCancel\n                        }\"\n                        [scope]=\"this\"\n                    >\n                        {{localization.get('cancel')}}\n                    </button>\n                    <button\n                        type=\"button\"\n                        class=\"k-time-accept k-button k-primary\"\n                        [attr.title]=\"localization.get('acceptLabel')\"\n                        [attr.aria-label]=\"localization.get('acceptLabel')\"\n                        [disabled]=\"!calendarValue\"\n                        [kendoEventsOutsideAngular]=\"{\n                            click: handleAccept\n                        }\"\n                        [scope]=\"this\"\n                    >\n                        {{localization.get('accept')}}\n                    </button>\n                </div>\n            </div>\n        </ng-template>\n    "
                },] },
    ];
    /** @nocollapse */
    DateTimePickerComponent.ctorParameters = function () { return [
        { type: kendo_angular_popup_1.PopupService },
        { type: kendo_angular_intl_1.IntlService },
        { type: core_1.ChangeDetectorRef },
        { type: picker_service_1.PickerService },
        { type: core_1.NgZone },
        { type: core_1.ElementRef },
        { type: Boolean, decorators: [{ type: core_1.Inject, args: [touch_enabled_1.TOUCH_ENABLED,] }] },
        { type: kendo_angular_l10n_1.LocalizationService }
    ]; };
    DateTimePickerComponent.propDecorators = {
        hostClasses: [{ type: core_1.HostBinding, args: ['class.k-widget',] }, { type: core_1.HostBinding, args: ['class.k-datetimepicker',] }],
        wrapper: [{ type: core_1.ViewChild, args: ['wrapper',] }],
        value: [{ type: core_1.Input }],
        format: [{ type: core_1.Input }],
        tabindex: [{ type: core_1.Input }],
        popupSettings: [{ type: core_1.Input }],
        focusableId: [{ type: core_1.Input }],
        title: [{ type: core_1.Input }],
        disabled: [{ type: core_1.Input }],
        readonly: [{ type: core_1.Input }],
        cancelButton: [{ type: core_1.Input }],
        formatPlaceholder: [{ type: core_1.Input }],
        placeholder: [{ type: core_1.Input }],
        steps: [{ type: core_1.Input }],
        focusedDate: [{ type: core_1.Input }],
        weekNumber: [{ type: core_1.Input }],
        min: [{ type: core_1.Input }],
        max: [{ type: core_1.Input }],
        rangeValidation: [{ type: core_1.Input }],
        valueChange: [{ type: core_1.Output }],
        open: [{ type: core_1.Output }],
        close: [{ type: core_1.Output }],
        onFocus: [{ type: core_1.Output, args: ['focus',] }],
        onBlur: [{ type: core_1.Output, args: ['blur',] }],
        defaultTab: [{ type: core_1.Input }],
        cellTemplate: [{ type: core_1.ContentChild, args: [cell_template_directive_1.CellTemplateDirective,] }],
        monthCellTemplate: [{ type: core_1.ContentChild, args: [month_cell_template_directive_1.MonthCellTemplateDirective,] }],
        yearCellTemplate: [{ type: core_1.ContentChild, args: [year_cell_template_directive_1.YearCellTemplateDirective,] }],
        decadeCellTemplate: [{ type: core_1.ContentChild, args: [decade_cell_template_directive_1.DecadeCellTemplateDirective,] }],
        centuryCellTemplate: [{ type: core_1.ContentChild, args: [century_cell_template_directive_1.CenturyCellTemplateDirective,] }],
        weekNumberTemplate: [{ type: core_1.ContentChild, args: [weeknumber_cell_template_directive_1.WeekNumberCellTemplateDirective,] }],
        headerTitleTemplate: [{ type: core_1.ContentChild, args: [header_title_template_directive_1.HeaderTitleTemplateDirective,] }],
        container: [{ type: core_1.ViewChild, args: ['container', { read: core_1.ViewContainerRef },] }],
        popupTemplate: [{ type: core_1.ViewChild, args: ['popupTemplate', { read: core_1.TemplateRef },] }]
    };
    return DateTimePickerComponent;
}());
exports.DateTimePickerComponent = DateTimePickerComponent;
