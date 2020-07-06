/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Inject, Input, Optional, Self } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';
import { IgxInputGroupBase } from '../../input-group/input-group.common';
/** @type {?} */
var nativeValidationAttributes = ['required', 'pattern', 'minlength', 'maxlength', 'min', 'max', 'step'];
/** @enum {number} */
var IgxInputState = {
    INITIAL: 0,
    VALID: 1,
    INVALID: 2,
};
export { IgxInputState };
IgxInputState[IgxInputState.INITIAL] = 'INITIAL';
IgxInputState[IgxInputState.VALID] = 'VALID';
IgxInputState[IgxInputState.INVALID] = 'INVALID';
var IgxInputDirective = /** @class */ (function () {
    function IgxInputDirective(inputGroup, ngModel, formControl, element, cdr) {
        this.inputGroup = inputGroup;
        this.ngModel = ngModel;
        this.formControl = formControl;
        this.element = element;
        this.cdr = cdr;
        this._valid = IgxInputState.INITIAL;
        /**
         * Sets/gets whether the `"igx-input-group__input"` class is added to the host element.
         * Default value is `false`.
         * ```typescript
         * this.igxInput.isInput = true;
         * ```
         * ```typescript
         * let isCLassAdded = this.igxInput.isInput;
         * ```
         * \@memberof IgxInputDirective
         */
        this.isInput = false;
        /**
         * Sets/gets whether the `"class.igx-input-group__textarea"` class is added to the host element.
         * Default value is `false`.
         * ```typescript
         * this.igxInput.isTextArea = true;
         * ```
         * ```typescript
         * let isCLassAdded = this.igxInput.isTextArea;
         * ```
         * \@memberof IgxInputDirective
         */
        this.isTextArea = false;
    }
    Object.defineProperty(IgxInputDirective.prototype, "ngControl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.ngModel ? this.ngModel : this.formControl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxInputDirective.prototype, "value", {
        /**
         * Gets the `value` propery.
         * ```typescript
         * @ViewChild('igxInput', {read: IgxInputDirective})
         *  public igxInput: IgxInputDirective;
         * let inputValue = this.igxInput.value;
         * ```
         * @memberof IgxInputDirective
         */
        get: /**
         * Gets the `value` propery.
         * ```typescript
         * \@ViewChild('igxInput', {read: IgxInputDirective})
         *  public igxInput: IgxInputDirective;
         * let inputValue = this.igxInput.value;
         * ```
         * \@memberof IgxInputDirective
         * @return {?}
         */
        function () {
            return this.nativeElement.value;
        },
        /**
         * Sets the `value` property.
         * ```html
         * <input-group>
         *  <input igxInput #igxInput [value]="'IgxInput Value'">
         * </input-group>
         * ```
         * @memberof IgxInputDirective
         */
        set: /**
         * Sets the `value` property.
         * ```html
         * <input-group>
         *  <input igxInput #igxInput [value]="'IgxInput Value'">
         * </input-group>
         * ```
         * \@memberof IgxInputDirective
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nativeElement.value = value;
            this.checkValidity();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxInputDirective.prototype, "disabled", {
        /**
         * Gets the `disabled` property
         * ```typescript
         * @ViewChild('igxInput', {read: IgxInputDirective})
         *  public igxInput: IgxInputDirective;
         * let isDisabled = this.igxInput.disabled;
         * ```
         * @memberof IgxInputDirective
         */
        get: /**
         * Gets the `disabled` property
         * ```typescript
         * \@ViewChild('igxInput', {read: IgxInputDirective})
         *  public igxInput: IgxInputDirective;
         * let isDisabled = this.igxInput.disabled;
         * ```
         * \@memberof IgxInputDirective
         * @return {?}
         */
        function () {
            return this.nativeElement.hasAttribute('disabled');
        },
        /**
         * Sets the `disabled` property.
         * ```html
         * <input-group>
         *  <input igxInput #igxInput [disabled]="true">
         * </input-group>
         * ```
         * @memberof IgxInputDirective
         */
        set: /**
         * Sets the `disabled` property.
         * ```html
         * <input-group>
         *  <input igxInput #igxInput [disabled]="true">
         * </input-group>
         * ```
         * \@memberof IgxInputDirective
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nativeElement.disabled = value;
            this.inputGroup.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxInputDirective.prototype, "required", {
        /**
         * Gets whether the igxInput is required.
         * ```typescript
         * let isRequired = this.igxInput.required;
         * ```
         * @memberof IgxInputDirective
         */
        get: /**
         * Gets whether the igxInput is required.
         * ```typescript
         * let isRequired = this.igxInput.required;
         * ```
         * \@memberof IgxInputDirective
         * @return {?}
         */
        function () {
            return this.nativeElement.hasAttribute('required');
        },
        /**
         * Sets the `required` property.
         * ```html
         * <input-group>
         *  <input igxInput #igxInput [required]="true">
         * </input-group>
         * ```
         * @memberof IgxInputDirective
         */
        set: /**
         * Sets the `required` property.
         * ```html
         * <input-group>
         *  <input igxInput #igxInput [required]="true">
         * </input-group>
         * ```
         * \@memberof IgxInputDirective
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'boolean') {
                this.nativeElement.required = this.inputGroup.isRequired = value;
                if (value && !this.nativeElement.checkValidity()) {
                    this._valid = IgxInputState.INVALID;
                }
                else {
                    this._valid = IgxInputState.INITIAL;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxInputDirective.prototype.onFocus = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputGroup.isFocused = true;
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxInputDirective.prototype.onBlur = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputGroup.isFocused = false;
        this._valid = IgxInputState.INITIAL;
        if (this.ngControl) {
            if (!this.ngControl.valid) {
                this._valid = IgxInputState.INVALID;
            }
        }
        else if (this._hasValidators() && !this.nativeElement.checkValidity()) {
            this._valid = IgxInputState.INVALID;
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxInputDirective.prototype.onInput = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.checkValidity();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxInputDirective.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.inputGroup.hasPlaceholder = this.nativeElement.hasAttribute('placeholder');
        this.inputGroup.disabled = this.inputGroup.disabled || this.nativeElement.hasAttribute('disabled');
        this.inputGroup.isRequired = this.nativeElement.hasAttribute('required');
        // Make sure we do not invalidate the input on init
        if (!this.ngControl) {
            this._valid = IgxInputState.INITIAL;
        }
        // Also check the control's validators for required
        if (!this.inputGroup.isRequired && this.ngControl && this.ngControl.control.validator) {
            /** @type {?} */
            var validation = this.ngControl.control.validator((/** @type {?} */ ({})));
            this.inputGroup.isRequired = validation && validation.required;
        }
        /** @type {?} */
        var elTag = this.nativeElement.tagName.toLowerCase();
        if (elTag === 'textarea') {
            this.isTextArea = true;
        }
        else {
            this.isInput = true;
        }
        if (this.ngControl) {
            this._statusChanges$ = this.ngControl.statusChanges.subscribe(this.onStatusChanged.bind(this));
        }
        this.cdr.detectChanges();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxInputDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this._statusChanges$) {
            this._statusChanges$.unsubscribe();
        }
    };
    /**
     * Sets a focus on the igxInput.
     * ```typescript
     * this.igxInput.focus();
     * ```
     * @memberof IgxInputDirective
     */
    /**
     * Sets a focus on the igxInput.
     * ```typescript
     * this.igxInput.focus();
     * ```
     * \@memberof IgxInputDirective
     * @return {?}
     */
    IgxInputDirective.prototype.focus = /**
     * Sets a focus on the igxInput.
     * ```typescript
     * this.igxInput.focus();
     * ```
     * \@memberof IgxInputDirective
     * @return {?}
     */
    function () {
        this.nativeElement.focus();
    };
    Object.defineProperty(IgxInputDirective.prototype, "nativeElement", {
        /**
         * Gets the `nativeElement` of the igxInput.
         * ```typescript
         * let igxInputNativeElement = this.igxInput.nativeElement;
         * ```
         * @memberof IgxInputDirective
         */
        get: /**
         * Gets the `nativeElement` of the igxInput.
         * ```typescript
         * let igxInputNativeElement = this.igxInput.nativeElement;
         * ```
         * \@memberof IgxInputDirective
         * @return {?}
         */
        function () {
            return this.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxInputDirective.prototype.onStatusChanged = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        if (this.ngControl.control.validator || this.ngControl.control.asyncValidator) {
            if (this.ngControl.control.touched || this.ngControl.control.dirty) {
                if (this.inputGroup.isFocused) {
                    // the user is still typing in the control
                    this._valid = this.ngControl.valid ? IgxInputState.VALID : IgxInputState.INVALID;
                }
                else {
                    // the user had touched the control previosly but now the value is changing due to changes in the form
                    this._valid = this.ngControl.valid ? IgxInputState.INITIAL : IgxInputState.INVALID;
                }
            }
            else if (this._valid !== IgxInputState.INITIAL) {
                this._valid = this.ngControl.valid ? IgxInputState.INITIAL : IgxInputState.INVALID;
            }
            else if (this._valid === IgxInputState.INITIAL && this.ngControl.value !== undefined && this.ngControl.invalid) {
                this._valid = IgxInputState.INVALID;
            }
        }
    };
    Object.defineProperty(IgxInputDirective.prototype, "hasPlaceholder", {
        /**
         * Gets whether the igxInput has a placeholder.
         * ```typescript
         * let hasPlaceholder = this.igxInput.hasPlaceholder;
         * ```
         * @memberof IgxInputDirective
         */
        get: /**
         * Gets whether the igxInput has a placeholder.
         * ```typescript
         * let hasPlaceholder = this.igxInput.hasPlaceholder;
         * ```
         * \@memberof IgxInputDirective
         * @return {?}
         */
        function () {
            return this.nativeElement.hasAttribute('placeholder');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxInputDirective.prototype, "placeholder", {
        /**
         * Gets the placeholder element of the igxInput.
         * ```typescript
         * let igxInputPlaceholder = this.igxInput.placeholder;
         * ```
         * @memberof IgxInputDirective
         */
        get: /**
         * Gets the placeholder element of the igxInput.
         * ```typescript
         * let igxInputPlaceholder = this.igxInput.placeholder;
         * ```
         * \@memberof IgxInputDirective
         * @return {?}
         */
        function () {
            return this.nativeElement.placeholder;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    IgxInputDirective.prototype._hasValidators = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var nativeValidationAttributes_1 = tslib_1.__values(nativeValidationAttributes), nativeValidationAttributes_1_1 = nativeValidationAttributes_1.next(); !nativeValidationAttributes_1_1.done; nativeValidationAttributes_1_1 = nativeValidationAttributes_1.next()) {
                var nativeValidationAttribute = nativeValidationAttributes_1_1.value;
                if (this.nativeElement.hasAttribute(nativeValidationAttribute)) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (nativeValidationAttributes_1_1 && !nativeValidationAttributes_1_1.done && (_a = nativeValidationAttributes_1.return)) _a.call(nativeValidationAttributes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return !!this.ngControl && (!!this.ngControl.control.validator || !!this.ngControl.control.asyncValidator);
    };
    Object.defineProperty(IgxInputDirective.prototype, "focused", {
        /**
         * Gets whether the igxInput is focused.
         * ```typescript
         * let isFocused = this.igxInput.focused;
         * ```
         * @memberof IgxInputDirective
         */
        get: /**
         * Gets whether the igxInput is focused.
         * ```typescript
         * let isFocused = this.igxInput.focused;
         * ```
         * \@memberof IgxInputDirective
         * @return {?}
         */
        function () {
            return this.inputGroup.isFocused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxInputDirective.prototype, "valid", {
        /**
         * Gets the state of the igxInput.
         * ```typescript
         * let igxInputState = this.igxInput.valid;
         * ```
         * @memberof IgxInputDirective
         */
        get: /**
         * Gets the state of the igxInput.
         * ```typescript
         * let igxInputState = this.igxInput.valid;
         * ```
         * \@memberof IgxInputDirective
         * @return {?}
         */
        function () {
            return this._valid;
        },
        /**
         * Sets the state of the igxInput.
         * ```typescript
         * this.igxInput.valid = IgxInputState.INVALID;
         * ```
         * @memberof IgxInputDirective
         */
        set: /**
         * Sets the state of the igxInput.
         * ```typescript
         * this.igxInput.valid = IgxInputState.INVALID;
         * ```
         * \@memberof IgxInputDirective
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._valid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxInputDirective.prototype, "isValid", {
        /**
         * Gets whether the igxInput is valid.
         * ```typescript
         * let valid = this.igxInput.isValid;
         * ```
         * @memberof IgxInputDirective
         */
        get: /**
         * Gets whether the igxInput is valid.
         * ```typescript
         * let valid = this.igxInput.isValid;
         * ```
         * \@memberof IgxInputDirective
         * @return {?}
         */
        function () {
            return this.valid !== IgxInputState.INVALID;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    IgxInputDirective.prototype.checkValidity = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.ngControl && this._hasValidators()) {
            this._valid = this.nativeElement.checkValidity() ? IgxInputState.VALID : IgxInputState.INVALID;
        }
    };
    IgxInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxInput]',
                    exportAs: 'igxInput'
                },] }
    ];
    /** @nocollapse */
    IgxInputDirective.ctorParameters = function () { return [
        { type: IgxInputGroupBase },
        { type: NgModel, decorators: [{ type: Optional }, { type: Self }, { type: Inject, args: [NgModel,] }] },
        { type: FormControlName, decorators: [{ type: Optional }, { type: Self }, { type: Inject, args: [FormControlName,] }] },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    IgxInputDirective.propDecorators = {
        value: [{ type: Input, args: ['value',] }],
        disabled: [{ type: Input }],
        required: [{ type: Input }],
        isInput: [{ type: HostBinding, args: ['class.igx-input-group__input',] }],
        isTextArea: [{ type: HostBinding, args: ['class.igx-input-group__textarea',] }],
        onFocus: [{ type: HostListener, args: ['focus', ['$event'],] }],
        onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }],
        onInput: [{ type: HostListener, args: ['input',] }]
    };
    return IgxInputDirective;
}());
export { IgxInputDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxInputDirective.prototype._valid;
    /**
     * @type {?}
     * @private
     */
    IgxInputDirective.prototype._statusChanges$;
    /**
     * Sets/gets whether the `"igx-input-group__input"` class is added to the host element.
     * Default value is `false`.
     * ```typescript
     * this.igxInput.isInput = true;
     * ```
     * ```typescript
     * let isCLassAdded = this.igxInput.isInput;
     * ```
     * \@memberof IgxInputDirective
     * @type {?}
     */
    IgxInputDirective.prototype.isInput;
    /**
     * Sets/gets whether the `"class.igx-input-group__textarea"` class is added to the host element.
     * Default value is `false`.
     * ```typescript
     * this.igxInput.isTextArea = true;
     * ```
     * ```typescript
     * let isCLassAdded = this.igxInput.isTextArea;
     * ```
     * \@memberof IgxInputDirective
     * @type {?}
     */
    IgxInputDirective.prototype.isTextArea;
    /** @type {?} */
    IgxInputDirective.prototype.inputGroup;
    /**
     * @type {?}
     * @protected
     */
    IgxInputDirective.prototype.ngModel;
    /**
     * @type {?}
     * @protected
     */
    IgxInputDirective.prototype.formControl;
    /**
     * @type {?}
     * @protected
     */
    IgxInputDirective.prototype.element;
    /**
     * @type {?}
     * @protected
     */
    IgxInputDirective.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2lucHV0L2lucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFSCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLElBQUksRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQW1CLGVBQWUsRUFBYSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7SUFFbkUsMEJBQTBCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7OztJQUd0RyxVQUFPO0lBQ1AsUUFBSztJQUNMLFVBQU87Ozs7OztBQUdYO0lBUUksMkJBQ1csVUFBNkIsRUFDVyxPQUFnQixFQUNSLFdBQTRCLEVBQ3pFLE9BQW1CLEVBQ25CLEdBQXNCO1FBSnpCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQ1csWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNSLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUN6RSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBUjVCLFdBQU0sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7UUErR2hDLFlBQU8sR0FBRyxLQUFLLENBQUM7Ozs7Ozs7Ozs7OztRQWFoQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBcEhjLENBQUM7SUFFekMsc0JBQVksd0NBQVM7Ozs7O1FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMs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S0FBSzswQkFtQ0wsV0FBVyxTQUFDLDhCQUE4Qjs2QkFhMUMsV0FBVyxTQUFDLGlDQUFpQzswQkFLN0MsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFPaEMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFlL0IsWUFBWSxTQUFDLE9BQU87O0lBa0t6Qix3QkFBQztDQUFBLEFBN1RELElBNlRDO1NBelRZLGlCQUFpQjs7Ozs7O0lBQzFCLG1DQUF1Qzs7Ozs7SUFDdkMsNENBQXNDOzs7Ozs7Ozs7Ozs7O0lBNkd0QyxvQ0FDdUI7Ozs7Ozs7Ozs7Ozs7SUFZdkIsdUNBQzBCOztJQXhIdEIsdUNBQW9DOzs7OztJQUNwQyxvQ0FBK0Q7Ozs7O0lBQy9ELHdDQUFtRjs7Ozs7SUFDbkYsb0NBQTZCOzs7OztJQUM3QixnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIEluamVjdCxcbiAgICBJbnB1dCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT3B0aW9uYWwsXG4gICAgU2VsZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2xOYW1lLCBOZ0NvbnRyb2wsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElneElucHV0R3JvdXBCYXNlIH0gZnJvbSAnLi4vLi4vaW5wdXQtZ3JvdXAvaW5wdXQtZ3JvdXAuY29tbW9uJztcblxuY29uc3QgbmF0aXZlVmFsaWRhdGlvbkF0dHJpYnV0ZXMgPSBbJ3JlcXVpcmVkJywgJ3BhdHRlcm4nLCAnbWlubGVuZ3RoJywgJ21heGxlbmd0aCcsICdtaW4nLCAnbWF4JywgJ3N0ZXAnXTtcblxuZXhwb3J0IGVudW0gSWd4SW5wdXRTdGF0ZSB7XG4gICAgSU5JVElBTCxcbiAgICBWQUxJRCxcbiAgICBJTlZBTElEXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneElucHV0XScsXG4gICAgZXhwb3J0QXM6ICdpZ3hJbnB1dCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4SW5wdXREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX3ZhbGlkID0gSWd4SW5wdXRTdGF0ZS5JTklUSUFMO1xuICAgIHByaXZhdGUgX3N0YXR1c0NoYW5nZXMkOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlucHV0R3JvdXA6IElneElucHV0R3JvdXBCYXNlLFxuICAgICAgICBAT3B0aW9uYWwoKSBAU2VsZigpIEBJbmplY3QoTmdNb2RlbCkgcHJvdGVjdGVkIG5nTW9kZWw6IE5nTW9kZWwsXG4gICAgICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgQEluamVjdChGb3JtQ29udHJvbE5hbWUpIHByb3RlY3RlZCBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2xOYW1lLFxuICAgICAgICBwcm90ZWN0ZWQgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICAgcHJpdmF0ZSBnZXQgbmdDb250cm9sKCk6IE5nQ29udHJvbCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5nTW9kZWwgPyB0aGlzLm5nTW9kZWwgOiB0aGlzLmZvcm1Db250cm9sO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBgdmFsdWVgIHByb3BlcnR5LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aW5wdXQtZ3JvdXA+XG4gICAgICogIDxpbnB1dCBpZ3hJbnB1dCAjaWd4SW5wdXQgW3ZhbHVlXT1cIidJZ3hJbnB1dCBWYWx1ZSdcIj5cbiAgICAgKiA8L2lucHV0LWdyb3VwPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hJbnB1dERpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgndmFsdWUnKVxuICAgIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoZWNrVmFsaWRpdHkoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYHZhbHVlYCBwcm9wZXJ5LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKCdpZ3hJbnB1dCcsIHtyZWFkOiBJZ3hJbnB1dERpcmVjdGl2ZX0pXG4gICAgICogIHB1YmxpYyBpZ3hJbnB1dDogSWd4SW5wdXREaXJlY3RpdmU7XG4gICAgICogbGV0IGlucHV0VmFsdWUgPSB0aGlzLmlneElucHV0LnZhbHVlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hJbnB1dERpcmVjdGl2ZVxuICAgICAqL1xuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYGRpc2FibGVkYCBwcm9wZXJ0eS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlucHV0LWdyb3VwPlxuICAgICAqICA8aW5wdXQgaWd4SW5wdXQgI2lneElucHV0IFtkaXNhYmxlZF09XCJ0cnVlXCI+XG4gICAgICogPC9pbnB1dC1ncm91cD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4SW5wdXREaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaW5wdXRHcm91cC5kaXNhYmxlZCA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgZGlzYWJsZWRgIHByb3BlcnR5XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoJ2lneElucHV0Jywge3JlYWQ6IElneElucHV0RGlyZWN0aXZlfSlcbiAgICAgKiAgcHVibGljIGlneElucHV0OiBJZ3hJbnB1dERpcmVjdGl2ZTtcbiAgICAgKiBsZXQgaXNEaXNhYmxlZCA9IHRoaXMuaWd4SW5wdXQuZGlzYWJsZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneElucHV0RGlyZWN0aXZlXG4gICAgICovXG4gICAgcHVibGljIGdldCBkaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYHJlcXVpcmVkYCBwcm9wZXJ0eS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlucHV0LWdyb3VwPlxuICAgICAqICA8aW5wdXQgaWd4SW5wdXQgI2lneElucHV0IFtyZXF1aXJlZF09XCJ0cnVlXCI+XG4gICAgICogPC9pbnB1dC1ncm91cD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4SW5wdXREaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQucmVxdWlyZWQgPSB0aGlzLmlucHV0R3JvdXAuaXNSZXF1aXJlZCA9IHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgIXRoaXMubmF0aXZlRWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWxpZCA9IElneElucHV0U3RhdGUuSU5WQUxJRDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsaWQgPSBJZ3hJbnB1dFN0YXRlLklOSVRJQUw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIGlneElucHV0IGlzIHJlcXVpcmVkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNSZXF1aXJlZCA9IHRoaXMuaWd4SW5wdXQucmVxdWlyZWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneElucHV0RGlyZWN0aXZlXG4gICAgICovXG4gICAgcHVibGljIGdldCByZXF1aXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHdoZXRoZXIgdGhlIGBcImlneC1pbnB1dC1ncm91cF9faW5wdXRcImAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIGhvc3QgZWxlbWVudC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuaWd4SW5wdXQuaXNJbnB1dCA9IHRydWU7XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc0NMYXNzQWRkZWQgPSB0aGlzLmlneElucHV0LmlzSW5wdXQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneElucHV0RGlyZWN0aXZlXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtaW5wdXQtZ3JvdXBfX2lucHV0JylcbiAgICBwdWJsaWMgaXNJbnB1dCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSBgXCJjbGFzcy5pZ3gtaW5wdXQtZ3JvdXBfX3RleHRhcmVhXCJgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLmlneElucHV0LmlzVGV4dEFyZWEgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNDTGFzc0FkZGVkID0gdGhpcy5pZ3hJbnB1dC5pc1RleHRBcmVhO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hJbnB1dERpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWlucHV0LWdyb3VwX190ZXh0YXJlYScpXG4gICAgcHVibGljIGlzVGV4dEFyZWEgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dEdyb3VwLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dEdyb3VwLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl92YWxpZCA9IElneElucHV0U3RhdGUuSU5JVElBTDtcbiAgICAgICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubmdDb250cm9sLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsaWQgPSBJZ3hJbnB1dFN0YXRlLklOVkFMSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5faGFzVmFsaWRhdG9ycygpICYmICF0aGlzLm5hdGl2ZUVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLl92YWxpZCA9IElneElucHV0U3RhdGUuSU5WQUxJRDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdpbnB1dCcpXG4gICAgcHVibGljIG9uSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tWYWxpZGl0eSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRHcm91cC5oYXNQbGFjZWhvbGRlciA9IHRoaXMubmF0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIHRoaXMuaW5wdXRHcm91cC5kaXNhYmxlZCA9IHRoaXMuaW5wdXRHcm91cC5kaXNhYmxlZCB8fCB0aGlzLm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICB0aGlzLmlucHV0R3JvdXAuaXNSZXF1aXJlZCA9IHRoaXMubmF0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvIG5vdCBpbnZhbGlkYXRlIHRoZSBpbnB1dCBvbiBpbml0XG4gICAgICAgIGlmICghdGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkID0gSWd4SW5wdXRTdGF0ZS5JTklUSUFMO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFsc28gY2hlY2sgdGhlIGNvbnRyb2wncyB2YWxpZGF0b3JzIGZvciByZXF1aXJlZFxuICAgICAgICBpZiAoIXRoaXMuaW5wdXRHcm91cC5pc1JlcXVpcmVkICYmIHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWxpZGF0b3Ioe30gYXMgQWJzdHJhY3RDb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRHcm91cC5pc1JlcXVpcmVkID0gdmFsaWRhdGlvbiAmJiB2YWxpZGF0aW9uLnJlcXVpcmVkO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBlbFRhZyA9IHRoaXMubmF0aXZlRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChlbFRhZyA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICAgICAgdGhpcy5pc1RleHRBcmVhID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNJbnB1dCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMkID0gdGhpcy5uZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUodGhpcy5vblN0YXR1c0NoYW5nZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5fc3RhdHVzQ2hhbmdlcyQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMkLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhIGZvY3VzIG9uIHRoZSBpZ3hJbnB1dC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5pZ3hJbnB1dC5mb2N1cygpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hJbnB1dERpcmVjdGl2ZVxuICAgICAqL1xuICAgIHB1YmxpYyBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGBuYXRpdmVFbGVtZW50YCBvZiB0aGUgaWd4SW5wdXQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpZ3hJbnB1dE5hdGl2ZUVsZW1lbnQgPSB0aGlzLmlneElucHV0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneElucHV0RGlyZWN0aXZlXG4gICAgICovXG4gICAgcHVibGljIGdldCBuYXRpdmVFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblN0YXR1c0NoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbGlkYXRvciB8fCB0aGlzLm5nQ29udHJvbC5jb250cm9sLmFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbC50b3VjaGVkIHx8IHRoaXMubmdDb250cm9sLmNvbnRyb2wuZGlydHkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dEdyb3VwLmlzRm9jdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdXNlciBpcyBzdGlsbCB0eXBpbmcgaW4gdGhlIGNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsaWQgPSB0aGlzLm5nQ29udHJvbC52YWxpZCA/IElneElucHV0U3RhdGUuVkFMSUQgOiBJZ3hJbnB1dFN0YXRlLklOVkFMSUQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHVzZXIgaGFkIHRvdWNoZWQgdGhlIGNvbnRyb2wgcHJldmlvc2x5IGJ1dCBub3cgdGhlIHZhbHVlIGlzIGNoYW5naW5nIGR1ZSB0byBjaGFuZ2VzIGluIHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkID0gdGhpcy5uZ0NvbnRyb2wudmFsaWQgPyBJZ3hJbnB1dFN0YXRlLklOSVRJQUwgOiBJZ3hJbnB1dFN0YXRlLklOVkFMSUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl92YWxpZCAhPT0gSWd4SW5wdXRTdGF0ZS5JTklUSUFMKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsaWQgPSB0aGlzLm5nQ29udHJvbC52YWxpZCA/IElneElucHV0U3RhdGUuSU5JVElBTCA6IElneElucHV0U3RhdGUuSU5WQUxJRDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fdmFsaWQgPT09IElneElucHV0U3RhdGUuSU5JVElBTCAmJiB0aGlzLm5nQ29udHJvbC52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMubmdDb250cm9sLmludmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWxpZCA9IElneElucHV0U3RhdGUuSU5WQUxJRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIGlneElucHV0IGhhcyBhIHBsYWNlaG9sZGVyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaGFzUGxhY2Vob2xkZXIgPSB0aGlzLmlneElucHV0Lmhhc1BsYWNlaG9sZGVyO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hJbnB1dERpcmVjdGl2ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaGFzUGxhY2Vob2xkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwbGFjZWhvbGRlciBlbGVtZW50IG9mIHRoZSBpZ3hJbnB1dC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlneElucHV0UGxhY2Vob2xkZXIgPSB0aGlzLmlneElucHV0LnBsYWNlaG9sZGVyO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hJbnB1dERpcmVjdGl2ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFzVmFsaWRhdG9ycygpOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChjb25zdCBuYXRpdmVWYWxpZGF0aW9uQXR0cmlidXRlIG9mIG5hdGl2ZVZhbGlkYXRpb25BdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uYXRpdmVFbGVtZW50Lmhhc0F0dHJpYnV0ZShuYXRpdmVWYWxpZGF0aW9uQXR0cmlidXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhdGhpcy5uZ0NvbnRyb2wgJiYgKCEhdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWxpZGF0b3IgfHwgISF0aGlzLm5nQ29udHJvbC5jb250cm9sLmFzeW5jVmFsaWRhdG9yKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBpZ3hJbnB1dCBpcyBmb2N1c2VkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgaXNGb2N1c2VkID0gdGhpcy5pZ3hJbnB1dC5mb2N1c2VkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hJbnB1dERpcmVjdGl2ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZm9jdXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRHcm91cC5pc0ZvY3VzZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHN0YXRlIG9mIHRoZSBpZ3hJbnB1dC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlneElucHV0U3RhdGUgPSB0aGlzLmlneElucHV0LnZhbGlkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hJbnB1dERpcmVjdGl2ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdmFsaWQoKTogSWd4SW5wdXRTdGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIGlneElucHV0IGlzIHZhbGlkLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdmFsaWQgPSB0aGlzLmlneElucHV0LmlzVmFsaWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneElucHV0RGlyZWN0aXZlXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZCAhPT0gSWd4SW5wdXRTdGF0ZS5JTlZBTElEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHN0YXRlIG9mIHRoZSBpZ3hJbnB1dC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5pZ3hJbnB1dC52YWxpZCA9IElneElucHV0U3RhdGUuSU5WQUxJRDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4SW5wdXREaXJlY3RpdmVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHZhbGlkKHZhbHVlOiBJZ3hJbnB1dFN0YXRlKSB7XG4gICAgICAgIHRoaXMuX3ZhbGlkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja1ZhbGlkaXR5KCkge1xuICAgICAgICBpZiAoIXRoaXMubmdDb250cm9sICYmIHRoaXMuX2hhc1ZhbGlkYXRvcnMoKSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsaWQgPSB0aGlzLm5hdGl2ZUVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpID8gSWd4SW5wdXRTdGF0ZS5WQUxJRCA6IElneElucHV0U3RhdGUuSU5WQUxJRDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==