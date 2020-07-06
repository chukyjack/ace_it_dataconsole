/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, NgModule, Input, QueryList, Output, EventEmitter, ContentChildren, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IgxRadioComponent, RadioLabelPosition } from '../../radio/radio.component';
import { IgxRippleModule } from '../ripple/ripple.directive';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
/** @type {?} */
var noop = function () { };
var ɵ0 = noop;
/** @type {?} */
var nextId = 0;
/**
 * **Ignite UI for Angular Radio Group** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/radio_button.html)
 *
 * The Ignite UI Radio Group allows the user to select a single option from an available set of options that are listed side by side.
 *
 * Example:
 * ```html
 * <igx-radio-group name="radioGroup">
 *   <igx-radio *ngFor="let item of ['Foo', 'Bar', 'Baz']" value="{{item}}">
 *      {{item}}
 *   </igx-radio>
 * </igx-radio-group>
 * ```
 */
var IgxRadioGroupDirective = /** @class */ (function () {
    function IgxRadioGroupDirective() {
        /**
         * An event that is emitted after the radio group `value` is changed.
         * Provides references to the selected `IgxRadioComponent` and the `value` property as event arguments.
         * \@memberof IgxRadioGroupDirective
         */
        this.change = new EventEmitter();
        /**
         * @hidden
         */
        this.cssClass = 'igx-radio-group';
        /**
         * @hidden
         */
        this._onChangeCallback = noop;
        /**
         * @hidden
         */
        this._name = "igx-radio-group-" + nextId++;
        /**
         * @hidden
         */
        this._value = null;
        /**
         * @hidden
         */
        this._selected = null;
        /**
         * @hidden
         */
        this._isInitialized = false;
        /**
         * @hidden
         */
        this._labelPosition = 'after';
        /**
         * @hidden
         */
        this._disabled = false;
        /**
         * @hidden
         */
        this._required = false;
        /**
         * @hidden
         */
        this.destroy$ = new Subject();
    }
    Object.defineProperty(IgxRadioGroupDirective.prototype, "value", {
        /**
         * Sets/gets the `value` attribute.
         * ```html
         * <igx-radio-group [value] = "'radioButtonValue'"></igx-radio-group>
         * ```
         * ```typescript
         * let value =  this.radioGroup.value;
         * ```
         * @memberof IgxRadioGroupDirective
         */
        get: /**
         * Sets/gets the `value` attribute.
         * ```html
         * <igx-radio-group [value] = "'radioButtonValue'"></igx-radio-group>
         * ```
         * ```typescript
         * let value =  this.radioGroup.value;
         * ```
         * \@memberof IgxRadioGroupDirective
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._value !== newValue) {
                this._value = newValue;
                this._selectRadioButton();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxRadioGroupDirective.prototype, "name", {
        /**
         * Sets/gets the `name` attribute of the radio group component. All child radio buttons inherits this name.
         * ```html
         * <igx-radio-group name = "Radio1"></igx-radio-group>
         *  ```
         * ```typescript
         * let name =  this.radioGroup.name;
         * ```
         * @memberof IgxRadioGroupDirective
         */
        get: /**
         * Sets/gets the `name` attribute of the radio group component. All child radio buttons inherits this name.
         * ```html
         * <igx-radio-group name = "Radio1"></igx-radio-group>
         *  ```
         * ```typescript
         * let name =  this.radioGroup.name;
         * ```
         * \@memberof IgxRadioGroupDirective
         * @return {?}
         */
        function () { return this._name; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._name !== newValue) {
                this._name = newValue;
                this._setRadioButtonNames();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxRadioGroupDirective.prototype, "required", {
        /**
         * Sets/gets whether the radio group is required.
         * If not set, `required` will have value `false`.
         * ```html
         * <igx-radio-group [required] = "true"></igx-radio-group>
         * ```
         * ```typescript
         * let isRequired =  this.radioGroup.required;
         * ```
         * @memberof IgxRadioGroupDirective
         */
        get: /**
         * Sets/gets whether the radio group is required.
         * If not set, `required` will have value `false`.
         * ```html
         * <igx-radio-group [required] = "true"></igx-radio-group>
         * ```
         * ```typescript
         * let isRequired =  this.radioGroup.required;
         * ```
         * \@memberof IgxRadioGroupDirective
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._required !== newValue) {
                this._required = newValue;
                this._setRadioButtonsRequired();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxRadioGroupDirective.prototype, "disabled", {
        /**
         * An @Input property that allows you to disable the radio group. By default it's false.
         * ```html
         * <igx-radio-group [disabled]="true"></igx-radio-group>
         * ```
         * @memberof IgxRadioGroupDirective
         */
        get: /**
         * An \@Input property that allows you to disable the radio group. By default it's false.
         * ```html
         * <igx-radio-group [disabled]="true"></igx-radio-group>
         * ```
         * \@memberof IgxRadioGroupDirective
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._disabled !== newValue) {
                this._disabled = newValue;
                this._disableRadioButtons();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxRadioGroupDirective.prototype, "labelPosition", {
        /**
         * Sets/gets the position of the `label` in the child radio buttons.
         * If not set, `labelPosition` will have value `"after"`.
         * ```html
         * <igx-radio-group labelPosition = "before"></igx-radio-group>
         * ```
         * ```typescript
         * let labelPosition =  this.radioGroup.labelPosition;
         * ```
         * @memberof IgxRadioGroupDirective
         */
        get: /**
         * Sets/gets the position of the `label` in the child radio buttons.
         * If not set, `labelPosition` will have value `"after"`.
         * ```html
         * <igx-radio-group labelPosition = "before"></igx-radio-group>
         * ```
         * ```typescript
         * let labelPosition =  this.radioGroup.labelPosition;
         * ```
         * \@memberof IgxRadioGroupDirective
         * @return {?}
         */
        function () { return this._labelPosition; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._labelPosition !== newValue) {
                this._labelPosition = newValue === RadioLabelPosition.BEFORE ? RadioLabelPosition.BEFORE : RadioLabelPosition.AFTER;
                this._setRadioButtonLabelPosition();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxRadioGroupDirective.prototype, "selected", {
        /**
         * Sets/gets the selected child radio button.
         * ```typescript
         * let selectedButton = this.radioGroup.selected;
         * this.radioGroup.selected = selectedButton;
         * ```
         * @memberof IgxRadioGroupDirective
         */
        get: /**
         * Sets/gets the selected child radio button.
         * ```typescript
         * let selectedButton = this.radioGroup.selected;
         * this.radioGroup.selected = selectedButton;
         * ```
         * \@memberof IgxRadioGroupDirective
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            if (this._selected !== selected) {
                this._selected = selected;
                this.value = selected ? selected.value : null;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxRadioGroupDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // The initial value can possibly be set by NgModel and it is possible that
        // the OnInit of the NgModel occurs after the OnInit of this class.
        this._isInitialized = true;
        setTimeout(function () { _this._initRadioButtons(); });
    };
    /**
     * Checks whether the provided value is consistent to the current radio button.
     * If it is, the checked attribute will have value `true` and selected property will contain the selected `IgxRadioComponent`.
     * ```typescript
     * this.radioGroup.writeValue('radioButtonValue');
     * ```
     */
    /**
     * Checks whether the provided value is consistent to the current radio button.
     * If it is, the checked attribute will have value `true` and selected property will contain the selected `IgxRadioComponent`.
     * ```typescript
     * this.radioGroup.writeValue('radioButtonValue');
     * ```
     * @param {?} value
     * @return {?}
     */
    IgxRadioGroupDirective.prototype.writeValue = /**
     * Checks whether the provided value is consistent to the current radio button.
     * If it is, the checked attribute will have value `true` and selected property will contain the selected `IgxRadioComponent`.
     * ```typescript
     * this.radioGroup.writeValue('radioButtonValue');
     * ```
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxRadioGroupDirective.prototype.registerOnChange = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChangeCallback = fn; };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxRadioGroupDirective.prototype.registerOnTouched = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (this.radioButtons) {
            this.radioButtons.forEach(function (button) {
                button.registerOnTouched(fn);
            });
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxRadioGroupDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxRadioGroupDirective.prototype._initRadioButtons = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.radioButtons) {
            this.radioButtons.forEach(function (button) {
                button.name = _this._name;
                button.labelPosition = _this._labelPosition;
                button.disabled = _this._disabled;
                button.required = _this._required;
                if (_this._value && button.value === _this._value) {
                    button.checked = true;
                    _this._selected = button;
                }
                button.change.pipe(takeUntil(_this.destroy$)).subscribe(function (ev) { return _this._selectedRadioButtonChanged(ev); });
            });
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} args
     * @return {?}
     */
    IgxRadioGroupDirective.prototype._selectedRadioButtonChanged = /**
     * @hidden
     * @private
     * @param {?} args
     * @return {?}
     */
    function (args) {
        if (this._selected !== args.radio) {
            if (this._selected) {
                this._selected.checked = false;
            }
            this._selected = args.radio;
        }
        this._value = args.value;
        if (this._isInitialized) {
            this.change.emit(args);
            this._onChangeCallback(this.value);
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxRadioGroupDirective.prototype._setRadioButtonNames = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.radioButtons) {
            this.radioButtons.forEach(function (button) {
                button.name = _this._name;
            });
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxRadioGroupDirective.prototype._selectRadioButton = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.radioButtons) {
            this.radioButtons.forEach(function (button) {
                if (!_this._value) {
                    // no value - uncheck all radio buttons
                    if (button.checked) {
                        button.checked = false;
                    }
                }
                else {
                    if (_this._value === button.value) {
                        // selected button
                        if (_this._selected !== button) {
                            _this._selected = button;
                        }
                        if (!button.checked) {
                            button.select();
                        }
                    }
                    else {
                        // non-selected button
                        if (button.checked) {
                            button.checked = false;
                        }
                    }
                }
            });
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxRadioGroupDirective.prototype._setRadioButtonLabelPosition = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.radioButtons) {
            this.radioButtons.forEach(function (button) {
                button.labelPosition = _this._labelPosition;
            });
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxRadioGroupDirective.prototype._disableRadioButtons = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.radioButtons) {
            this.radioButtons.forEach(function (button) {
                button.disabled = _this._disabled;
            });
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxRadioGroupDirective.prototype._setRadioButtonsRequired = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.radioButtons) {
            this.radioButtons.forEach(function (button) {
                button.required = _this._required;
            });
        }
    };
    IgxRadioGroupDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'igx-radio-group, [igxRadioGroup]',
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: IgxRadioGroupDirective, multi: true }]
                },] }
    ];
    IgxRadioGroupDirective.propDecorators = {
        radioButtons: [{ type: ContentChildren, args: [IgxRadioComponent,] }],
        value: [{ type: Input }],
        name: [{ type: Input }],
        required: [{ type: Input }],
        disabled: [{ type: Input }],
        labelPosition: [{ type: Input }],
        selected: [{ type: Input }],
        change: [{ type: Output }],
        cssClass: [{ type: HostBinding, args: ['class.igx-radio-group',] }]
    };
    return IgxRadioGroupDirective;
}());
export { IgxRadioGroupDirective };
if (false) {
    /**
     * Returns reference to the child radio buttons.
     * ```typescript
     * let radioButtons =  this.radioGroup.radioButtons;
     * ```
     * \@memberof IgxRadioGroupDirective
     * @type {?}
     */
    IgxRadioGroupDirective.prototype.radioButtons;
    /**
     * An event that is emitted after the radio group `value` is changed.
     * Provides references to the selected `IgxRadioComponent` and the `value` property as event arguments.
     * \@memberof IgxRadioGroupDirective
     * @type {?}
     */
    IgxRadioGroupDirective.prototype.change;
    /**
     * @hidden
     * @type {?}
     */
    IgxRadioGroupDirective.prototype.cssClass;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxRadioGroupDirective.prototype._onChangeCallback;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxRadioGroupDirective.prototype._name;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxRadioGroupDirective.prototype._value;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxRadioGroupDirective.prototype._selected;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxRadioGroupDirective.prototype._isInitialized;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxRadioGroupDirective.prototype._labelPosition;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxRadioGroupDirective.prototype._disabled;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxRadioGroupDirective.prototype._required;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxRadioGroupDirective.prototype.destroy$;
}
/**
 * @hidden
 */
var IgxRadioModule = /** @class */ (function () {
    function IgxRadioModule() {
    }
    IgxRadioModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxRadioGroupDirective, IgxRadioComponent],
                    exports: [IgxRadioGroupDirective, IgxRadioComponent],
                    imports: [IgxRippleModule]
                },] }
    ];
    return IgxRadioModule;
}());
export { IgxRadioModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3JhZGlvL3JhZGlvLWdyb3VwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUVaLGVBQWUsRUFFZixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBeUIsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBRXpCLElBQUksR0FBRyxjQUFRLENBQUM7OztJQUNsQixNQUFNLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCZDtJQUFBOzs7Ozs7UUFtSWEsV0FBTSxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQzs7OztRQU0xRixhQUFRLEdBQUcsaUJBQWlCLENBQUM7Ozs7UUFLNUIsc0JBQWlCLEdBQXFCLElBQUksQ0FBQzs7OztRQUkzQyxVQUFLLEdBQUcscUJBQW1CLE1BQU0sRUFBSSxDQUFDOzs7O1FBSXRDLFdBQU0sR0FBUSxJQUFJLENBQUM7Ozs7UUFJbkIsY0FBUyxHQUE2QixJQUFJLENBQUM7Ozs7UUFJM0MsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7UUFJdkIsbUJBQWMsR0FBZ0MsT0FBTyxDQUFDOzs7O1FBSXRELGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7UUFJbEIsY0FBUyxH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RCx1Q0FBOEM7Ozs7OztJQUk5Qyx3Q0FBMkI7Ozs7OztJQUkzQiwyQ0FBbUQ7Ozs7OztJQUluRCxnREFBK0I7Ozs7OztJQUkvQixnREFBOEQ7Ozs7OztJQUk5RCwyQ0FBMEI7Ozs7OztJQUkxQiwyQ0FBMEI7Ozs7OztJQUkxQiwwQ0FBMEM7Ozs7O0FBcUs5QztJQUFBO0lBSzhCLENBQUM7O2dCQUw5QixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsaUJBQWlCLENBQUM7b0JBQ3pELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixDQUFDO29CQUNwRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzdCOztJQUM2QixxQkFBQztDQUFBLEFBTC9CLElBSytCO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSxcbiAgICBOZ01vZHVsZSxcbiAgICBJbnB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBPbkRlc3Ryb3ksXG4gICAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJZ3hSYWRpb0NvbXBvbmVudCwgUmFkaW9MYWJlbFBvc2l0aW9uLCBJQ2hhbmdlUmFkaW9FdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9yYWRpby9yYWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4UmlwcGxlTW9kdWxlIH0gZnJvbSAnLi4vcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xubGV0IG5leHRJZCA9IDA7XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgUmFkaW8gR3JvdXAqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvcmFkaW9fYnV0dG9uLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBSYWRpbyBHcm91cCBhbGxvd3MgdGhlIHVzZXIgdG8gc2VsZWN0IGEgc2luZ2xlIG9wdGlvbiBmcm9tIGFuIGF2YWlsYWJsZSBzZXQgb2Ygb3B0aW9ucyB0aGF0IGFyZSBsaXN0ZWQgc2lkZSBieSBzaWRlLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LXJhZGlvLWdyb3VwIG5hbWU9XCJyYWRpb0dyb3VwXCI+XG4gKiAgIDxpZ3gtcmFkaW8gKm5nRm9yPVwibGV0IGl0ZW0gb2YgWydGb28nLCAnQmFyJywgJ0JheiddXCIgdmFsdWU9XCJ7e2l0ZW19fVwiPlxuICogICAgICB7e2l0ZW19fVxuICogICA8L2lneC1yYWRpbz5cbiAqIDwvaWd4LXJhZGlvLWdyb3VwPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnaWd4LXJhZGlvLWdyb3VwLCBbaWd4UmFkaW9Hcm91cF0nLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBJZ3hSYWRpb0dyb3VwRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZSB9XVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hSYWRpb0dyb3VwRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyByZWZlcmVuY2UgdG8gdGhlIGNoaWxkIHJhZGlvIGJ1dHRvbnMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCByYWRpb0J1dHRvbnMgPSAgdGhpcy5yYWRpb0dyb3VwLnJhZGlvQnV0dG9ucztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Hcm91cERpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oSWd4UmFkaW9Db21wb25lbnQpIHB1YmxpYyByYWRpb0J1dHRvbnM6IFF1ZXJ5TGlzdDxJZ3hSYWRpb0NvbXBvbmVudD47XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvLWdyb3VwIFt2YWx1ZV0gPSBcIidyYWRpb0J1dHRvblZhbHVlJ1wiPjwvaWd4LXJhZGlvLWdyb3VwPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdmFsdWUgPSAgdGhpcy5yYWRpb0dyb3VwLnZhbHVlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0dyb3VwRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG4gICAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdFJhZGlvQnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBuYW1lYCBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvIGdyb3VwIGNvbXBvbmVudC4gQWxsIGNoaWxkIHJhZGlvIGJ1dHRvbnMgaW5oZXJpdHMgdGhpcyBuYW1lLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvLWdyb3VwIG5hbWUgPSBcIlJhZGlvMVwiPjwvaWd4LXJhZGlvLWdyb3VwPlxuICAgICAqICBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IG5hbWUgPSAgdGhpcy5yYWRpb0dyb3VwLm5hbWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvR3JvdXBEaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG4gICAgc2V0IG5hbWUobmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fbmFtZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3NldFJhZGlvQnV0dG9uTmFtZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSByYWRpbyBncm91cCBpcyByZXF1aXJlZC5cbiAgICAgKiBJZiBub3Qgc2V0LCBgcmVxdWlyZWRgIHdpbGwgaGF2ZSB2YWx1ZSBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvLWdyb3VwIFtyZXF1aXJlZF0gPSBcInRydWVcIj48L2lneC1yYWRpby1ncm91cD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzUmVxdWlyZWQgPSAgdGhpcy5yYWRpb0dyb3VwLnJlcXVpcmVkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0dyb3VwRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuICAgIHNldCByZXF1aXJlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fcmVxdWlyZWQgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlZCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fc2V0UmFkaW9CdXR0b25zUmVxdWlyZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGFsbG93cyB5b3UgdG8gZGlzYWJsZSB0aGUgcmFkaW8gZ3JvdXAuIEJ5IGRlZmF1bHQgaXQncyBmYWxzZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1yYWRpby1ncm91cCBbZGlzYWJsZWRdPVwidHJ1ZVwiPjwvaWd4LXJhZGlvLWdyb3VwPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0dyb3VwRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICAgIHNldCBkaXNhYmxlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fZGlzYWJsZWQgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZVJhZGlvQnV0dG9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgYGxhYmVsYCBpbiB0aGUgY2hpbGQgcmFkaW8gYnV0dG9ucy5cbiAgICAgKiBJZiBub3Qgc2V0LCBgbGFiZWxQb3NpdGlvbmAgd2lsbCBoYXZlIHZhbHVlIGBcImFmdGVyXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvLWdyb3VwIGxhYmVsUG9zaXRpb24gPSBcImJlZm9yZVwiPjwvaWd4LXJhZGlvLWdyb3VwPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGFiZWxQb3NpdGlvbiA9ICB0aGlzLnJhZGlvR3JvdXAubGFiZWxQb3NpdGlvbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Hcm91cERpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGxhYmVsUG9zaXRpb24oKTogUmFkaW9MYWJlbFBvc2l0aW9uIHwgc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2xhYmVsUG9zaXRpb247IH1cbiAgICBzZXQgbGFiZWxQb3NpdGlvbihuZXdWYWx1ZTogUmFkaW9MYWJlbFBvc2l0aW9uIHwgc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9sYWJlbFBvc2l0aW9uICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbGFiZWxQb3NpdGlvbiA9IG5ld1ZhbHVlID09PSBSYWRpb0xhYmVsUG9zaXRpb24uQkVGT1JFID8gUmFkaW9MYWJlbFBvc2l0aW9uLkJFRk9SRSA6IFJhZGlvTGFiZWxQb3NpdGlvbi5BRlRFUjtcbiAgICAgICAgICAgIHRoaXMuX3NldFJhZGlvQnV0dG9uTGFiZWxQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBzZWxlY3RlZCBjaGlsZCByYWRpbyBidXR0b24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBzZWxlY3RlZEJ1dHRvbiA9IHRoaXMucmFkaW9Hcm91cC5zZWxlY3RlZDtcbiAgICAgKiB0aGlzLnJhZGlvR3JvdXAuc2VsZWN0ZWQgPSBzZWxlY3RlZEJ1dHRvbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Hcm91cERpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHNlbGVjdGVkKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7IH1cbiAgICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IElneFJhZGlvQ29tcG9uZW50IHwgbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQgIT09IHNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkID8gc2VsZWN0ZWQudmFsdWUgOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIGFmdGVyIHRoZSByYWRpbyBncm91cCBgdmFsdWVgIGlzIGNoYW5nZWQuXG4gICAgICogUHJvdmlkZXMgcmVmZXJlbmNlcyB0byB0aGUgc2VsZWN0ZWQgYElneFJhZGlvQ29tcG9uZW50YCBhbmQgdGhlIGB2YWx1ZWAgcHJvcGVydHkgYXMgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0dyb3VwRGlyZWN0aXZlXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8SUNoYW5nZVJhZGlvRXZlbnRBcmdzPiA9IG5ldyBFdmVudEVtaXR0ZXI8SUNoYW5nZVJhZGlvRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtcmFkaW8tZ3JvdXAnKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtcmFkaW8tZ3JvdXAnO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbmFtZSA9IGBpZ3gtcmFkaW8tZ3JvdXAtJHtuZXh0SWQrK31gO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NlbGVjdGVkOiBJZ3hSYWRpb0NvbXBvbmVudCB8IG51bGwgPSBudWxsO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9sYWJlbFBvc2l0aW9uOiBSYWRpb0xhYmVsUG9zaXRpb24gfCBzdHJpbmcgPSAnYWZ0ZXInO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgLy8gVGhlIGluaXRpYWwgdmFsdWUgY2FuIHBvc3NpYmx5IGJlIHNldCBieSBOZ01vZGVsIGFuZCBpdCBpcyBwb3NzaWJsZSB0aGF0XG4gICAgICAgIC8vIHRoZSBPbkluaXQgb2YgdGhlIE5nTW9kZWwgb2NjdXJzIGFmdGVyIHRoZSBPbkluaXQgb2YgdGhpcyBjbGFzcy5cbiAgICAgICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuX2luaXRSYWRpb0J1dHRvbnMoKTsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIGNvbnNpc3RlbnQgdG8gdGhlIGN1cnJlbnQgcmFkaW8gYnV0dG9uLlxuICAgICAqIElmIGl0IGlzLCB0aGUgY2hlY2tlZCBhdHRyaWJ1dGUgd2lsbCBoYXZlIHZhbHVlIGB0cnVlYCBhbmQgc2VsZWN0ZWQgcHJvcGVydHkgd2lsbCBjb250YWluIHRoZSBzZWxlY3RlZCBgSWd4UmFkaW9Db21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnJhZGlvR3JvdXAud3JpdGVWYWx1ZSgncmFkaW9CdXR0b25WYWx1ZScpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKSB7IHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBmbjsgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZGlvQnV0dG9ucykge1xuICAgICAgICAgICAgdGhpcy5yYWRpb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlZ2lzdGVyT25Ub3VjaGVkKGZuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0UmFkaW9CdXR0b25zKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpb0J1dHRvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5uYW1lID0gdGhpcy5fbmFtZTtcbiAgICAgICAgICAgICAgICBidXR0b24ubGFiZWxQb3NpdGlvbiA9IHRoaXMuX2xhYmVsUG9zaXRpb247XG4gICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdGhpcy5fZGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlcXVpcmVkID0gdGhpcy5fcmVxdWlyZWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdmFsdWUgJiYgYnV0dG9uLnZhbHVlID09PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gYnV0dG9uO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZXYpID0+IHRoaXMuX3NlbGVjdGVkUmFkaW9CdXR0b25DaGFuZ2VkKGV2KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NlbGVjdGVkUmFkaW9CdXR0b25DaGFuZ2VkKGFyZ3M6IElDaGFuZ2VSYWRpb0V2ZW50QXJncykge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQgIT09IGFyZ3MucmFkaW8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gYXJncy5yYWRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gYXJncy52YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChhcmdzKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9zZXRSYWRpb0J1dHRvbk5hbWVzKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpb0J1dHRvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5uYW1lID0gdGhpcy5fbmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2VsZWN0UmFkaW9CdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZGlvQnV0dG9ucykge1xuICAgICAgICAgICAgdGhpcy5yYWRpb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBubyB2YWx1ZSAtIHVuY2hlY2sgYWxsIHJhZGlvIGJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlID09PSBidXR0b24udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkICE9PSBidXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IGJ1dHRvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFidXR0b24uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vbi1zZWxlY3RlZCBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidXR0b24uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NldFJhZGlvQnV0dG9uTGFiZWxQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucmFkaW9CdXR0b25zKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGlvQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24ubGFiZWxQb3NpdGlvbiA9IHRoaXMuX2xhYmVsUG9zaXRpb247XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2Rpc2FibGVSYWRpb0J1dHRvbnMoKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZGlvQnV0dG9ucykge1xuICAgICAgICAgICAgdGhpcy5yYWRpb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdGhpcy5fZGlzYWJsZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NldFJhZGlvQnV0dG9uc1JlcXVpcmVkKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpb0J1dHRvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5yZXF1aXJlZCA9IHRoaXMuX3JlcXVpcmVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneFJhZGlvR3JvdXBEaXJlY3RpdmUsIElneFJhZGlvQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSWd4UmFkaW9Hcm91cERpcmVjdGl2ZSwgSWd4UmFkaW9Db21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtJZ3hSaXBwbGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneFJhZGlvTW9kdWxlIHsgfVxuIl19