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
const noop = () => { };
const ɵ0 = noop;
/** @type {?} */
let nextId = 0;
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
export class IgxRadioGroupDirective {
    constructor() {
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
        this._name = `igx-radio-group-${nextId++}`;
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
    /**
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
    get value() { return this._value; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        if (this._value !== newValue) {
            this._value = newValue;
            this._selectRadioButton();
        }
    }
    /**
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
    get name() { return this._name; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set name(newValue) {
        if (this._name !== newValue) {
            this._name = newValue;
            this._setRadioButtonNames();
        }
    }
    /**
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
    get required() { return this._required; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set required(newValue) {
        if (this._required !== newValue) {
            this._required = newValue;
            this._setRadioButtonsRequired();
        }
    }
    /**
     * An \@Input property that allows you to disable the radio group. By default it's false.
     * ```html
     * <igx-radio-group [disabled]="true"></igx-radio-group>
     * ```
     * \@memberof IgxRadioGroupDirective
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set disabled(newValue) {
        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this._disableRadioButtons();
        }
    }
    /**
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
    get labelPosition() { return this._labelPosition; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set labelPosition(newValue) {
        if (this._labelPosition !== newValue) {
            this._labelPosition = newValue === RadioLabelPosition.BEFORE ? RadioLabelPosition.BEFORE : RadioLabelPosition.AFTER;
            this._setRadioButtonLabelPosition();
        }
    }
    /**
     * Sets/gets the selected child radio button.
     * ```typescript
     * let selectedButton = this.radioGroup.selected;
     * this.radioGroup.selected = selectedButton;
     * ```
     * \@memberof IgxRadioGroupDirective
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        if (this._selected !== selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // The initial value can possibly be set by NgModel and it is possible that
        // the OnInit of the NgModel occurs after the OnInit of this class.
        this._isInitialized = true;
        setTimeout(() => { this._initRadioButtons(); });
    }
    /**
     * Checks whether the provided value is consistent to the current radio button.
     * If it is, the checked attribute will have value `true` and selected property will contain the selected `IgxRadioComponent`.
     * ```typescript
     * this.radioGroup.writeValue('radioButtonValue');
     * ```
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this._onChangeCallback = fn; }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        if (this.radioButtons) {
            this.radioButtons.forEach((button) => {
                button.registerOnTouched(fn);
            });
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    _initRadioButtons() {
        if (this.radioButtons) {
            this.radioButtons.forEach((button) => {
                button.name = this._name;
                button.labelPosition = this._labelPosition;
                button.disabled = this._disabled;
                button.required = this._required;
                if (this._value && button.value === this._value) {
                    button.checked = true;
                    this._selected = button;
                }
                button.change.pipe(takeUntil(this.destroy$)).subscribe((ev) => this._selectedRadioButtonChanged(ev));
            });
        }
    }
    /**
     * @hidden
     * @private
     * @param {?} args
     * @return {?}
     */
    _selectedRadioButtonChanged(args) {
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
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    _setRadioButtonNames() {
        if (this.radioButtons) {
            this.radioButtons.forEach((button) => {
                button.name = this._name;
            });
        }
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    _selectRadioButton() {
        if (this.radioButtons) {
            this.radioButtons.forEach((button) => {
                if (!this._value) {
                    // no value - uncheck all radio buttons
                    if (button.checked) {
                        button.checked = false;
                    }
                }
                else {
                    if (this._value === button.value) {
                        // selected button
                        if (this._selected !== button) {
                            this._selected = button;
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
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    _setRadioButtonLabelPosition() {
        if (this.radioButtons) {
            this.radioButtons.forEach((button) => {
                button.labelPosition = this._labelPosition;
            });
        }
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    _disableRadioButtons() {
        if (this.radioButtons) {
            this.radioButtons.forEach((button) => {
                button.disabled = this._disabled;
            });
        }
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    _setRadioButtonsRequired() {
        if (this.radioButtons) {
            this.radioButtons.forEach((button) => {
                button.required = this._required;
            });
        }
    }
}
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
export class IgxRadioModule {
}
IgxRadioModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxRadioGroupDirective, IgxRadioComponent],
                exports: [IgxRadioGroupDirective, IgxRadioComponent],
                imports: [IgxRippleModule]
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3JhZGlvL3JhZGlvLWdyb3VwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUVaLGVBQWUsRUFFZixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBeUIsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O01BRXpCLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDOzs7SUFDbEIsTUFBTSxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQmQsTUFBTSxPQUFPLHNCQUFzQjtJQUpuQzs7Ozs7O1FBbUlhLFdBQU0sR0FBd0MsSUFBSSxZQUFZLEVBQXlCLENBQUM7Ozs7UUFNMUYsYUFBUSxHQUFHLGlCQUFpQixDQUFDOzs7O1FBSzVCLHNCQUFpQixHQUFxQixJQUFJLENBQUM7Ozs7UUFJM0MsVUFBSyxHQUFHLG1CQUFtQixNQUFNLEVBQUUsRUFBRSxDQUFDOzs7O1FBSXRDLFdBQU0sR0FBUSxJQUFJLENBQUM7Ozs7UUFJbkIsY0FBUyxHQUE2QixJQUFJLENBQUM7Ozs7UUFJM0MsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7UUFJdkIsbUJBQWMsR0FBZ0MsT0FBTyxDQUFDOzs7O1FBSXRELGNB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TyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQzs7O1lBN1VKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ2hHOzs7MkJBU0ksZUFBZSxTQUFDLGlCQUFpQjtvQkFZakMsS0FBSzttQkFtQkwsS0FBSzt1QkFvQkwsS0FBSzt1QkFnQkwsS0FBSzs0QkFvQkwsS0FBSzt1QkFpQkwsS0FBSztxQkFjTCxNQUFNO3VCQU1OLFdBQVcsU0FBQyx1QkFBdUI7Ozs7Ozs7Ozs7O0lBNUhwQyw4Q0FBc0Y7Ozs7Ozs7SUFzSHRGLHdDQUNpRzs7Ozs7SUFLakcsMENBQ29DOzs7Ozs7SUFLcEMsbURBQW1EOzs7Ozs7SUFJbkQsdUNBQThDOzs7Ozs7SUFJOUMsd0NBQTJCOzs7Ozs7SUFJM0IsMkNBQW1EOzs7Ozs7SUFJbkQsZ0RBQStCOzs7Ozs7SUFJL0IsZ0RBQThEOzs7Ozs7SUFJOUQsMkNBQTBCOzs7Ozs7SUFJMUIsMkNBQTBCOzs7Ozs7SUFJMUIsMENBQTBDOzs7OztBQTBLOUMsTUFBTSxPQUFPLGNBQWM7OztZQUwxQixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ3pELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixDQUFDO2dCQUNwRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSxcbiAgICBOZ01vZHVsZSxcbiAgICBJbnB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBPbkRlc3Ryb3ksXG4gICAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJZ3hSYWRpb0NvbXBvbmVudCwgUmFkaW9MYWJlbFBvc2l0aW9uLCBJQ2hhbmdlUmFkaW9FdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9yYWRpby9yYWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4UmlwcGxlTW9kdWxlIH0gZnJvbSAnLi4vcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xubGV0IG5leHRJZCA9IDA7XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgUmFkaW8gR3JvdXAqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvcmFkaW9fYnV0dG9uLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBSYWRpbyBHcm91cCBhbGxvd3MgdGhlIHVzZXIgdG8gc2VsZWN0IGEgc2luZ2xlIG9wdGlvbiBmcm9tIGFuIGF2YWlsYWJsZSBzZXQgb2Ygb3B0aW9ucyB0aGF0IGFyZSBsaXN0ZWQgc2lkZSBieSBzaWRlLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LXJhZGlvLWdyb3VwIG5hbWU9XCJyYWRpb0dyb3VwXCI+XG4gKiAgIDxpZ3gtcmFkaW8gKm5nRm9yPVwibGV0IGl0ZW0gb2YgWydGb28nLCAnQmFyJywgJ0JheiddXCIgdmFsdWU9XCJ7e2l0ZW19fVwiPlxuICogICAgICB7e2l0ZW19fVxuICogICA8L2lneC1yYWRpbz5cbiAqIDwvaWd4LXJhZGlvLWdyb3VwPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnaWd4LXJhZGlvLWdyb3VwLCBbaWd4UmFkaW9Hcm91cF0nLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBJZ3hSYWRpb0dyb3VwRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZSB9XVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hSYWRpb0dyb3VwRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyByZWZlcmVuY2UgdG8gdGhlIGNoaWxkIHJhZGlvIGJ1dHRvbnMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCByYWRpb0J1dHRvbnMgPSAgdGhpcy5yYWRpb0dyb3VwLnJhZGlvQnV0dG9ucztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Hcm91cERpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oSWd4UmFkaW9Db21wb25lbnQpIHB1YmxpYyByYWRpb0J1dHRvbnM6IFF1ZXJ5TGlzdDxJZ3hSYWRpb0NvbXBvbmVudD47XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGB2YWx1ZWAgYXR0cmlidXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvLWdyb3VwIFt2YWx1ZV0gPSBcIidyYWRpb0J1dHRvblZhbHVlJ1wiPjwvaWd4LXJhZGlvLWdyb3VwPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdmFsdWUgPSAgdGhpcy5yYWRpb0dyb3VwLnZhbHVlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0dyb3VwRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG4gICAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdFJhZGlvQnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBuYW1lYCBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvIGdyb3VwIGNvbXBvbmVudC4gQWxsIGNoaWxkIHJhZGlvIGJ1dHRvbnMgaW5oZXJpdHMgdGhpcyBuYW1lLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvLWdyb3VwIG5hbWUgPSBcIlJhZGlvMVwiPjwvaWd4LXJhZGlvLWdyb3VwPlxuICAgICAqICBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IG5hbWUgPSAgdGhpcy5yYWRpb0dyb3VwLm5hbWU7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFJhZGlvR3JvdXBEaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG4gICAgc2V0IG5hbWUobmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fbmFtZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3NldFJhZGlvQnV0dG9uTmFtZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB3aGV0aGVyIHRoZSByYWRpbyBncm91cCBpcyByZXF1aXJlZC5cbiAgICAgKiBJZiBub3Qgc2V0LCBgcmVxdWlyZWRgIHdpbGwgaGF2ZSB2YWx1ZSBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvLWdyb3VwIFtyZXF1aXJlZF0gPSBcInRydWVcIj48L2lneC1yYWRpby1ncm91cD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGlzUmVxdWlyZWQgPSAgdGhpcy5yYWRpb0dyb3VwLnJlcXVpcmVkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0dyb3VwRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuICAgIHNldCByZXF1aXJlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fcmVxdWlyZWQgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlZCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fc2V0UmFkaW9CdXR0b25zUmVxdWlyZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGFsbG93cyB5b3UgdG8gZGlzYWJsZSB0aGUgcmFkaW8gZ3JvdXAuIEJ5IGRlZmF1bHQgaXQncyBmYWxzZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1yYWRpby1ncm91cCBbZGlzYWJsZWRdPVwidHJ1ZVwiPjwvaWd4LXJhZGlvLWdyb3VwPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0dyb3VwRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICAgIHNldCBkaXNhYmxlZChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fZGlzYWJsZWQgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZVJhZGlvQnV0dG9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgYGxhYmVsYCBpbiB0aGUgY2hpbGQgcmFkaW8gYnV0dG9ucy5cbiAgICAgKiBJZiBub3Qgc2V0LCBgbGFiZWxQb3NpdGlvbmAgd2lsbCBoYXZlIHZhbHVlIGBcImFmdGVyXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXJhZGlvLWdyb3VwIGxhYmVsUG9zaXRpb24gPSBcImJlZm9yZVwiPjwvaWd4LXJhZGlvLWdyb3VwPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbGFiZWxQb3NpdGlvbiA9ICB0aGlzLnJhZGlvR3JvdXAubGFiZWxQb3NpdGlvbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Hcm91cERpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGxhYmVsUG9zaXRpb24oKTogUmFkaW9MYWJlbFBvc2l0aW9uIHwgc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2xhYmVsUG9zaXRpb247IH1cbiAgICBzZXQgbGFiZWxQb3NpdGlvbihuZXdWYWx1ZTogUmFkaW9MYWJlbFBvc2l0aW9uIHwgc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9sYWJlbFBvc2l0aW9uICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbGFiZWxQb3NpdGlvbiA9IG5ld1ZhbHVlID09PSBSYWRpb0xhYmVsUG9zaXRpb24uQkVGT1JFID8gUmFkaW9MYWJlbFBvc2l0aW9uLkJFRk9SRSA6IFJhZGlvTGFiZWxQb3NpdGlvbi5BRlRFUjtcbiAgICAgICAgICAgIHRoaXMuX3NldFJhZGlvQnV0dG9uTGFiZWxQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBzZWxlY3RlZCBjaGlsZCByYWRpbyBidXR0b24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBzZWxlY3RlZEJ1dHRvbiA9IHRoaXMucmFkaW9Hcm91cC5zZWxlY3RlZDtcbiAgICAgKiB0aGlzLnJhZGlvR3JvdXAuc2VsZWN0ZWQgPSBzZWxlY3RlZEJ1dHRvbjtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4UmFkaW9Hcm91cERpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHNlbGVjdGVkKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7IH1cbiAgICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IElneFJhZGlvQ29tcG9uZW50IHwgbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQgIT09IHNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkID8gc2VsZWN0ZWQudmFsdWUgOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIGFmdGVyIHRoZSByYWRpbyBncm91cCBgdmFsdWVgIGlzIGNoYW5nZWQuXG4gICAgICogUHJvdmlkZXMgcmVmZXJlbmNlcyB0byB0aGUgc2VsZWN0ZWQgYElneFJhZGlvQ29tcG9uZW50YCBhbmQgdGhlIGB2YWx1ZWAgcHJvcGVydHkgYXMgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqIEBtZW1iZXJvZiBJZ3hSYWRpb0dyb3VwRGlyZWN0aXZlXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8SUNoYW5nZVJhZGlvRXZlbnRBcmdzPiA9IG5ldyBFdmVudEVtaXR0ZXI8SUNoYW5nZVJhZGlvRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtcmFkaW8tZ3JvdXAnKVxuICAgIHB1YmxpYyBjc3NDbGFzcyA9ICdpZ3gtcmFkaW8tZ3JvdXAnO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbmFtZSA9IGBpZ3gtcmFkaW8tZ3JvdXAtJHtuZXh0SWQrK31gO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NlbGVjdGVkOiBJZ3hSYWRpb0NvbXBvbmVudCB8IG51bGwgPSBudWxsO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9sYWJlbFBvc2l0aW9uOiBSYWRpb0xhYmVsUG9zaXRpb24gfCBzdHJpbmcgPSAnYWZ0ZXInO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgLy8gVGhlIGluaXRpYWwgdmFsdWUgY2FuIHBvc3NpYmx5IGJlIHNldCBieSBOZ01vZGVsIGFuZCBpdCBpcyBwb3NzaWJsZSB0aGF0XG4gICAgICAgIC8vIHRoZSBPbkluaXQgb2YgdGhlIE5nTW9kZWwgb2NjdXJzIGFmdGVyIHRoZSBPbkluaXQgb2YgdGhpcyBjbGFzcy5cbiAgICAgICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuX2luaXRSYWRpb0J1dHRvbnMoKTsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIGNvbnNpc3RlbnQgdG8gdGhlIGN1cnJlbnQgcmFkaW8gYnV0dG9uLlxuICAgICAqIElmIGl0IGlzLCB0aGUgY2hlY2tlZCBhdHRyaWJ1dGUgd2lsbCBoYXZlIHZhbHVlIGB0cnVlYCBhbmQgc2VsZWN0ZWQgcHJvcGVydHkgd2lsbCBjb250YWluIHRoZSBzZWxlY3RlZCBgSWd4UmFkaW9Db21wb25lbnRgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnJhZGlvR3JvdXAud3JpdGVWYWx1ZSgncmFkaW9CdXR0b25WYWx1ZScpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKSB7IHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBmbjsgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZGlvQnV0dG9ucykge1xuICAgICAgICAgICAgdGhpcy5yYWRpb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlZ2lzdGVyT25Ub3VjaGVkKGZuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0UmFkaW9CdXR0b25zKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpb0J1dHRvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5uYW1lID0gdGhpcy5fbmFtZTtcbiAgICAgICAgICAgICAgICBidXR0b24ubGFiZWxQb3NpdGlvbiA9IHRoaXMuX2xhYmVsUG9zaXRpb247XG4gICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdGhpcy5fZGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlcXVpcmVkID0gdGhpcy5fcmVxdWlyZWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdmFsdWUgJiYgYnV0dG9uLnZhbHVlID09PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gYnV0dG9uO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZXYpID0+IHRoaXMuX3NlbGVjdGVkUmFkaW9CdXR0b25DaGFuZ2VkKGV2KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NlbGVjdGVkUmFkaW9CdXR0b25DaGFuZ2VkKGFyZ3M6IElDaGFuZ2VSYWRpb0V2ZW50QXJncykge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQgIT09IGFyZ3MucmFkaW8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gYXJncy5yYWRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gYXJncy52YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChhcmdzKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9zZXRSYWRpb0J1dHRvbk5hbWVzKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpb0J1dHRvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5uYW1lID0gdGhpcy5fbmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2VsZWN0UmFkaW9CdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZGlvQnV0dG9ucykge1xuICAgICAgICAgICAgdGhpcy5yYWRpb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBubyB2YWx1ZSAtIHVuY2hlY2sgYWxsIHJhZGlvIGJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlID09PSBidXR0b24udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkICE9PSBidXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IGJ1dHRvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFidXR0b24uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vbi1zZWxlY3RlZCBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidXR0b24uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NldFJhZGlvQnV0dG9uTGFiZWxQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucmFkaW9CdXR0b25zKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGlvQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24ubGFiZWxQb3NpdGlvbiA9IHRoaXMuX2xhYmVsUG9zaXRpb247XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2Rpc2FibGVSYWRpb0J1dHRvbnMoKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZGlvQnV0dG9ucykge1xuICAgICAgICAgICAgdGhpcy5yYWRpb0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdGhpcy5fZGlzYWJsZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NldFJhZGlvQnV0dG9uc1JlcXVpcmVkKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpb0J1dHRvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaW9CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5yZXF1aXJlZCA9IHRoaXMuX3JlcXVpcmVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneFJhZGlvR3JvdXBEaXJlY3RpdmUsIElneFJhZGlvQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSWd4UmFkaW9Hcm91cERpcmVjdGl2ZSwgSWd4UmFkaW9Db21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtJZ3hSaXBwbGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneFJhZGlvTW9kdWxlIHsgfVxuIl19