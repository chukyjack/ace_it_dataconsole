/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Self, Optional, Inject, HostBinding, Output, EventEmitter, NgModule, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { AbsoluteScrollStrategy, AutoPositionStrategy } from '../../services/index';
import { IgxDropDownModule, IgxDropDownComponent, IgxDropDownItemNavigationDirective } from '../../drop-down/index';
import { IgxInputGroupComponent } from '../../input-group/index';
/**
 * Interface that encapsulates onItemSelection event arguments - new value and cancel selection.
 * @export
 * @record
 */
export function AutocompleteItemSelectionEventArgs() { }
if (false) {
    /**
     * New value selected from the drop down
     * @type {?}
     */
    AutocompleteItemSelectionEventArgs.prototype.value;
}
/**
 * @record
 */
export function AutocompleteOverlaySettings() { }
if (false) {
    /**
     * Position strategy to use with this settings
     * @type {?|undefined}
     */
    AutocompleteOverlaySettings.prototype.positionStrategy;
    /**
     * Scroll strategy to use with this settings
     * @type {?|undefined}
     */
    AutocompleteOverlaySettings.prototype.scrollStrategy;
    /**
     * Set the outlet container to attach the overlay to
     * @type {?|undefined}
     */
    AutocompleteOverlaySettings.prototype.outlet;
}
/**
 * **Ignite UI for Angular Autocomplete** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/autocomplete.html)
 *
 * The igxAutocomplete directive provides a way to enhance a text input
 * by showing a drop down of suggested options, provided by the developer.
 *
 * Example:
 * ```html
 * <input type="text" [igxAutocomplete]="townsPanel" />
 * <igx-drop-down #townsPanel>
 *     <igx-drop-down-item *ngFor="let town of towns | startsWith:townSelected" [value]="town">
 *         {{town}}
 *     </igx-drop-down-item>
 * </igx-drop-down>
 * ```
 */
var IgxAutocompleteDirective = /** @class */ (function (_super) {
    tslib_1.__extends(IgxAutocompleteDirective, _super);
    function IgxAutocompleteDirective(ngModel, formControl, group, elementRef, cdr) {
        var _this = _super.call(this, null) || this;
        _this.ngModel = ngModel;
        _this.formControl = formControl;
        _this.group = group;
        _this.elementRef = elementRef;
        _this.cdr = cdr;
        _this.defaultSettings = {
            modal: false,
            scrollStrategy: new AbsoluteScrollStrategy(),
            positionStrategy: new AutoPositionStrategy({ target: _this.parentElement }),
            excludePositionTarget: true
        };
        _this.dropDownOpened$ = new Subject();
        /**
         * Enables/disables autocomplete component
         *
         * ```typescript
         * // get
         * let disabled = this.autocomplete.disabled;
         * ```
         * ```html
         * <!--set-->
         * <input type="text" [igxAutocomplete]="townsPanel" [igxAutocompleteDisabled]="disabled"/>
         * ```
         * ```typescript
         * // set
         * public disabled = true;
         * ```
         */
        _this.disabled = false;
        /**
         * Emitted after item from the drop down is selected
         *
         * ```html
         * <input igxInput [igxAutocomplete]="townsPanel" (onItemSelected)='itemSelected($event)' />
         * ```
         */
        _this.onItemSelected = new EventEmitter();
        /**
         * @hidden \@internal
         */
        _this.autofill = 'off';
        /**
         * @hidden \@internal
         */
        _this.role = 'combobox';
        _this.select = function (value) {
            if (!value.newSelection) {
                return;
            }
            value.cancel = true; // Disable selection in the drop down, because in autocomplete we do not save selection.
            // Disable selection in the drop down, because in autocomplete we do not save selection.
            /** @type {?} */
            var newValue = value.newSelection.value;
            /** @type {?} */
            var args = { value: newValue, cancel: false };
            _this.onItemSelected.emit(args);
            if (args.cancel) {
                return;
            }
            _this.close();
            _this.nativeElement.focus();
            // Update model after the input is re-focused, in order to have proper valid styling.
            // Otherwise when item is selected using mouse (and input is blurred), then valid style will be removed.
            _this.model ? _this.model.control.setValue(newValue) : _this.nativeElement.value = newValue;
        };
        _this.highlightFirstItem = function () {
            if (_this.target.focusedItem) {
                _this.target.focusedItem.focused = false;
                _this.target.focusedItem = null;
            }
            _this.target.navigateFirst();
            _this.cdr.detectChanges();
        };
        return _this;
    }
    Object.defineProperty(IgxAutocompleteDirective.prototype, "model", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.ngModel || this.formControl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxAutocompleteDirective.prototype, "nativeElement", {
        /** @hidden @internal */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxAutocompleteDirective.prototype, "parentElement", {
        /** @hidden @internal */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.group ? this.group.element.nativeElement : this.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxAutocompleteDirective.prototype, "settings", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var settings = Object.assign({}, this.defaultSettings, this.autocompleteSettings);
            if (!settings.positionStrategy.settings.target) {
                /** @type {?} */
                var positionStrategyClone = settings.positionStrategy.clone();
                positionStrategyClone.settings.target = this.parentElement;
                settings.positionStrategy = positionStrategyClone;
            }
            return settings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxAutocompleteDirective.prototype, "ariaExpanded", {
        /** @hidden  @internal */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return !this.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxAutocompleteDirective.prototype, "hasPopUp", {
        /** @hidden  @internal */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return 'listbox';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxAutocompleteDirective.prototype, "ariaOwns", {
        /** @hidden  @internal */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.target.listId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxAutocompleteDirective.prototype, "ariaActiveDescendant", {
        /** @hidden  @internal */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return !this.target.collapsed && this.target.focusedItem ? this.target.focusedItem.id : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxAutocompleteDirective.prototype, "ariaAutocomplete", {
        /** @hidden  @internal */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return 'list';
        },
        enumerable: true,
        configurable: true
    });
    /** @hidden  @internal */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxAutocompleteDirective.prototype.onInput = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.open();
    };
    /** @hidden  @internal */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxAutocompleteDirective.prototype.onArrowDown = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.open();
    };
    /** @hidden  @internal */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxAutocompleteDirective.prototype.onTab = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.close();
    };
    /** @hidden  @internal */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxAutocompleteDirective.prototype.handleKeyDown = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.collapsed) {
            switch (event.key.toLowerCase()) {
                case 'space':
                case 'spacebar':
                case ' ':
                case 'home':
                case 'end':
                    return;
                default:
                    _super.prototype.handleKeyDown.call(this, event);
            }
        }
    };
    /** @hidden  @internal */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxAutocompleteDirective.prototype.onArrowDownKeyDown = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        _super.prototype.onArrowDownKeyDown.call(this);
    };
    /** @hidden  @internal */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxAutocompleteDirective.prototype.onArrowUpKeyDown = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        _super.prototype.onArrowUpKeyDown.call(this);
    };
    /** @hidden  @internal */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxAutocompleteDirective.prototype.onEndKeyDown = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        _super.prototype.onEndKeyDown.call(this);
    };
    /** @hidden  @internal */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxAutocompleteDirective.prototype.onHomeKeyDown = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        _super.prototype.onHomeKeyDown.call(this);
    };
    /**
     * Closes autocomplete drop down
     */
    /**
     * Closes autocomplete drop down
     * @return {?}
     */
    IgxAutocompleteDirective.prototype.close = /**
     * Closes autocomplete drop down
     * @return {?}
     */
    function () {
        if (this.collapsed) {
            return;
        }
        this.target.close();
        this.dropDownOpened$.next();
    };
    /**
     * Opens autocomplete drop down
     */
    /**
     * Opens autocomplete drop down
     * @return {?}
     */
    IgxAutocompleteDirective.prototype.open = /**
     * Opens autocomplete drop down
     * @return {?}
     */
    function () {
        if (this.disabled || !this.collapsed) {
            return;
        }
        this.target.width = this.parentElement.clientWidth + 'px';
        this.target.open(this.settings);
        this.target.onSelection.pipe(takeUntil(this.dropDownOpened$)).subscribe(this.select);
        this.target.onOpened.pipe(first()).subscribe(this.highlightFirstItem);
        this.target.children.changes.pipe(takeUntil(this.dropDownOpened$)).subscribe(this.highlightFirstItem);
    };
    Object.defineProperty(IgxAutocompleteDirective.prototype, "collapsed", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.target ? this.target.collapsed : true;
        },
        enumerable: true,
        configurable: true
    });
    /** @hidden */
    /**
     * @hidden
     * @return {?}
     */
    IgxAutocompleteDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.dropDownOpened$.complete();
    };
    IgxAutocompleteDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxAutocomplete]'
                },] }
    ];
    /** @nocollapse */
    IgxAutocompleteDirective.ctorParameters = function () { return [
        { type: NgModel, decorators: [{ type: Self }, { type: Optional }, { type: Inject, args: [NgModel,] }] },
        { type: FormControlName, decorators: [{ type: Self }, { type: Optional }, { type: Inject, args: [FormControlName,] }] },
        { type: IgxInputGroupComponent, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    IgxAutocompleteDirective.propDecorators = {
        target: [{ type: Input, args: ['igxAutocomplete',] }],
        disabled: [{ type: Input, args: ['igxAutocompleteDisabled',] }],
        autocompleteSettings: [{ type: Input, args: ['igxAutocompleteSettings',] }],
        onItemSelected: [{ type: Output }],
        autofill: [{ type: HostBinding, args: ['attr.autocomplete',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        ariaExpanded: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
        hasPopUp: [{ type: HostBinding, args: ['attr.aria-haspopup',] }],
        ariaOwns: [{ type: HostBinding, args: ['attr.aria-owns',] }],
        ariaActiveDescendant: [{ type: HostBinding, args: ['attr.aria-activedescendant',] }],
        ariaAutocomplete: [{ type: HostBinding, args: ['attr.aria-autocomplete',] }],
        onInput: [{ type: HostListener, args: ['input', ['$event'],] }],
        onArrowDown: [{ type: HostListener, args: ['keydown.ArrowDown', ['$event'],] }, { type: HostListener, args: ['keydown.Alt.ArrowDown', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowUp', ['$event'],] }, { type: HostListener, args: ['keydown.Alt.ArrowUp', ['$event'],] }],
        onTab: [{ type: HostListener, args: ['keydown.Tab', ['$event'],] }, { type: HostListener, args: ['keydown.Shift.Tab', ["$event"],] }]
    };
    return IgxAutocompleteDirective;
}(IgxDropDownItemNavigationDirective));
export { IgxAutocompleteDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxAutocompleteDirective.prototype.defaultSettings;
    /**
     * @type {?}
     * @protected
     */
    IgxAutocompleteDirective.prototype.id;
    /**
     * @type {?}
     * @protected
     */
    IgxAutocompleteDirective.prototype.dropDownOpened$;
    /**
     * Sets the target of the autocomplete directive
     *
     * ```html
     * <!-- Set -->
     * <input [igxAutocomplete]="dropdown" />
     * ...
     * <igx-drop-down #dropdown>
     * ...
     * </igx-drop-down>
     * ```
     * @type {?}
     */
    IgxAutocompleteDirective.prototype.target;
    /**
     * Enables/disables autocomplete component
     *
     * ```typescript
     * // get
     * let disabled = this.autocomplete.disabled;
     * ```
     * ```html
     * <!--set-->
     * <input type="text" [igxAutocomplete]="townsPanel" [igxAutocompleteDisabled]="disabled"/>
     * ```
     * ```typescript
     * // set
     * public disabled = true;
     * ```
     * @type {?}
     */
    IgxAutocompleteDirective.prototype.disabled;
    /**
     * Provide overlay settings for the autocomplete drop down
     *
     * ```typescript
     * // get
     * let settings = this.autocomplete.autocompleteSettings;
     * ```
     * ```html
     * <!--set-->
     * <input type="text" [igxAutocomplete]="townsPanel" [igxAutocompleteSettings]="settings"/>
     * ```
     * ```typescript
     * // set
     * this.settings = {
     *  positionStrategy: new ConnectedPositioningStrategy({
     *      closeAnimation: null,
     *      openAnimation: null
     *  })
     * };
     * ```
     * @type {?}
     */
    IgxAutocompleteDirective.prototype.autocompleteSettings;
    /**
     * Emitted after item from the drop down is selected
     *
     * ```html
     * <input igxInput [igxAutocomplete]="townsPanel" (onItemSelected)='itemSelected($event)' />
     * ```
     * @type {?}
     */
    IgxAutocompleteDirective.prototype.onItemSelected;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxAutocompleteDirective.prototype.autofill;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxAutocompleteDirective.prototype.role;
    /**
     * @type {?}
     * @private
     */
    IgxAutocompleteDirective.prototype.select;
    /**
     * @type {?}
     * @private
     */
    IgxAutocompleteDirective.prototype.highlightFirstItem;
    /**
     * @type {?}
     * @protected
     */
    IgxAutocompleteDirective.prototype.ngModel;
    /**
     * @type {?}
     * @protected
     */
    IgxAutocompleteDirective.prototype.formControl;
    /**
     * @type {?}
     * @protected
     */
    IgxAutocompleteDirective.prototype.group;
    /**
     * @type {?}
     * @protected
     */
    IgxAutocompleteDirective.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    IgxAutocompleteDirective.prototype.cdr;
}
/**
 * @hidden
 */
var IgxAutocompleteModule = /** @class */ (function () {
    function IgxAutocompleteModule() {
    }
    IgxAutocompleteModule.decorators = [
        { type: NgModule, args: [{
                    imports: [IgxDropDownModule, CommonModule],
                    declarations: [IgxAutocompleteDirective],
                    exports: [IgxAutocompleteDirective]
                },] }
    ];
    return IgxAutocompleteModule;
}());
export { IgxAutocompleteModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUMzRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFtQixzQkFBc0IsRUFBc0Msb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6SSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQXVCLGtDQUFrQyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekksT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQU9qRSx3REFLQzs7Ozs7O0lBREcsbURBQWM7Ozs7O0FBR2xCLGlEQU9DOzs7Ozs7SUFMRyx1REFBcUM7Ozs7O0lBRXJDLHFEQUFpQzs7Ozs7SUFFakMsNkNBQWdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JwRDtJQUc4QyxvREFBa0M7SUFFNUUsa0NBQTJELE9BQWdCLEVBQ1IsV0FBNEIsRUFDN0QsS0FBNkIsRUFDekMsVUFBc0IsRUFDdEIsR0FB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LG1EQUtFOzs7OztJQUVGLHNDQUFxQjs7Ozs7SUFDckIsbURBQW1EOzs7Ozs7Ozs7Ozs7OztJQXFDbkQsMENBQ29DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQnBDLDRDQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1QnhCLHdEQUNrRDs7Ozs7Ozs7O0lBU2xELGtEQUN3RTs7Ozs7SUFHeEUsNENBQ3dCOzs7OztJQUd4Qix3Q0FDeUI7Ozs7O0lBd0h6QiwwQ0FpQkM7Ozs7O0lBRUQsc0RBT0M7Ozs7O0lBclFXLDJDQUErRDs7Ozs7SUFDL0QsK0NBQW1GOzs7OztJQUNuRix5Q0FBbUQ7Ozs7O0lBQ25ELDhDQUFnQzs7Ozs7SUFDaEMsdUNBQWdDOzs7OztBQTBRaEQ7SUFBQTtJQUtxQyxDQUFDOztnQkFMckMsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQztvQkFDMUMsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUN0Qzs7SUFDb0MsNEJBQUM7Q0FBQSxBQUx0QyxJQUtzQztTQUF6QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSwgSW5wdXQsIFNlbGYsIE9wdGlvbmFsLCBJbmplY3QsIEhvc3RCaW5kaW5nLCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcbiAgICBOZ01vZHVsZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZGVsLCBGb3JtQ29udHJvbE5hbWUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhbmNlbGFibGVFdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IE92ZXJsYXlTZXR0aW5ncywgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSwgSVNjcm9sbFN0cmF0ZWd5LCBJUG9zaXRpb25TdHJhdGVneSwgQXV0b1Bvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBJZ3hEcm9wRG93bk1vZHVsZSwgSWd4RHJvcERvd25Db21wb25lbnQsIElTZWxlY3Rpb25FdmVudEFyZ3MsIElneERyb3BEb3duSXRlbU5hdmlnYXRpb25EaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kcm9wLWRvd24vaW5kZXgnO1xuaW1wb3J0IHsgSWd4SW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2lucHV0LWdyb3VwL2luZGV4JztcbmltcG9ydCB7IElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuLi90b2dnbGUvdG9nZ2xlLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogSW50ZXJmYWNlIHRoYXQgZW5jYXBzdWxhdGVzIG9uSXRlbVNlbGVjdGlvbiBldmVudCBhcmd1bWVudHMgLSBuZXcgdmFsdWUgYW5kIGNhbmNlbCBzZWxlY3Rpb24uXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlSXRlbVNlbGVjdGlvbkV2ZW50QXJncyBleHRlbmRzIENhbmNlbGFibGVFdmVudEFyZ3Mge1xuICAgIC8qKlxuICAgICAqIE5ldyB2YWx1ZSBzZWxlY3RlZCBmcm9tIHRoZSBkcm9wIGRvd25cbiAgICAgKi9cbiAgICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9jb21wbGV0ZU92ZXJsYXlTZXR0aW5ncyB7XG4gICAgLyoqIFBvc2l0aW9uIHN0cmF0ZWd5IHRvIHVzZSB3aXRoIHRoaXMgc2V0dGluZ3MgKi9cbiAgICBwb3NpdGlvblN0cmF0ZWd5PzogSVBvc2l0aW9uU3RyYXRlZ3k7XG4gICAgLyoqIFNjcm9sbCBzdHJhdGVneSB0byB1c2Ugd2l0aCB0aGlzIHNldHRpbmdzICovXG4gICAgc2Nyb2xsU3RyYXRlZ3k/OiBJU2Nyb2xsU3RyYXRlZ3k7XG4gICAgLyoqIFNldCB0aGUgb3V0bGV0IGNvbnRhaW5lciB0byBhdHRhY2ggdGhlIG92ZXJsYXkgdG8gKi9cbiAgICBvdXRsZXQ/OiBJZ3hPdmVybGF5T3V0bGV0RGlyZWN0aXZlIHwgRWxlbWVudFJlZjtcbn1cblxuLyoqXG4gKiAqKklnbml0ZSBVSSBmb3IgQW5ndWxhciBBdXRvY29tcGxldGUqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLmh0bWwpXG4gKlxuICogVGhlIGlneEF1dG9jb21wbGV0ZSBkaXJlY3RpdmUgcHJvdmlkZXMgYSB3YXkgdG8gZW5oYW5jZSBhIHRleHQgaW5wdXRcbiAqIGJ5IHNob3dpbmcgYSBkcm9wIGRvd24gb2Ygc3VnZ2VzdGVkIG9wdGlvbnMsIHByb3ZpZGVkIGJ5IHRoZSBkZXZlbG9wZXIuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYGh0bWxcbiAqIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtpZ3hBdXRvY29tcGxldGVdPVwidG93bnNQYW5lbFwiIC8+XG4gKiA8aWd4LWRyb3AtZG93biAjdG93bnNQYW5lbD5cbiAqICAgICA8aWd4LWRyb3AtZG93bi1pdGVtICpuZ0Zvcj1cImxldCB0b3duIG9mIHRvd25zIHwgc3RhcnRzV2l0aDp0b3duU2VsZWN0ZWRcIiBbdmFsdWVdPVwidG93blwiPlxuICogICAgICAgICB7e3Rvd259fVxuICogICAgIDwvaWd4LWRyb3AtZG93bi1pdGVtPlxuICogPC9pZ3gtZHJvcC1kb3duPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneEF1dG9jb21wbGV0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIElneEF1dG9jb21wbGV0ZURpcmVjdGl2ZSBleHRlbmRzIElneERyb3BEb3duSXRlbU5hdmlnYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gICAgY29uc3RydWN0b3IoQFNlbGYoKSBAT3B0aW9uYWwoKSBASW5qZWN0KE5nTW9kZWwpIHByb3RlY3RlZCBuZ01vZGVsOiBOZ01vZGVsLFxuICAgICAgICAgICAgICAgIEBTZWxmKCkgQE9wdGlvbmFsKCkgQEluamVjdChGb3JtQ29udHJvbE5hbWUpIHByb3RlY3RlZCBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2xOYW1lLFxuICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBncm91cDogSWd4SW5wdXRHcm91cENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihudWxsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlZmF1bHRTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzID0ge1xuICAgICAgICBtb2RhbDogZmFsc2UsXG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiBuZXcgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSgpLFxuICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiBuZXcgQXV0b1Bvc2l0aW9uU3RyYXRlZ3koeyB0YXJnZXQ6IHRoaXMucGFyZW50RWxlbWVudCB9KSxcbiAgICAgICAgZXhjbHVkZVBvc2l0aW9uVGFyZ2V0OiB0cnVlXG4gICAgfTtcblxuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBkcm9wRG93bk9wZW5lZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHByb3RlY3RlZCBnZXQgbW9kZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5nTW9kZWwgfHwgdGhpcy5mb3JtQ29udHJvbDtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBnZXQgbmF0aXZlRWxlbWVudCgpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIGdldCBwYXJlbnRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAgPyB0aGlzLmdyb3VwLmVsZW1lbnQubmF0aXZlRWxlbWVudCA6IHRoaXMubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBzZXR0aW5ncygpOiBPdmVybGF5U2V0dGluZ3Mge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFNldHRpbmdzLCB0aGlzLmF1dG9jb21wbGV0ZVNldHRpbmdzKTtcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5LnNldHRpbmdzLnRhcmdldCkge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25TdHJhdGVneUNsb25lOiBJUG9zaXRpb25TdHJhdGVneSA9IHNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuY2xvbmUoKTtcbiAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3lDbG9uZS5zZXR0aW5ncy50YXJnZXQgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBzZXR0aW5ncy5wb3NpdGlvblN0cmF0ZWd5ID0gcG9zaXRpb25TdHJhdGVneUNsb25lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0YXJnZXQgb2YgdGhlIGF1dG9jb21wbGV0ZSBkaXJlY3RpdmVcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tIFNldCAtLT5cbiAgICAgKiA8aW5wdXQgW2lneEF1dG9jb21wbGV0ZV09XCJkcm9wZG93blwiIC8+XG4gICAgICogLi4uXG4gICAgICogPGlneC1kcm9wLWRvd24gI2Ryb3Bkb3duPlxuICAgICAqIC4uLlxuICAgICAqIDwvaWd4LWRyb3AtZG93bj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneEF1dG9jb21wbGV0ZScpXG4gICAgcHVibGljIHRhcmdldDogSWd4RHJvcERvd25Db21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzL2Rpc2FibGVzIGF1dG9jb21wbGV0ZSBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgZGlzYWJsZWQgPSB0aGlzLmF1dG9jb21wbGV0ZS5kaXNhYmxlZDtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtpZ3hBdXRvY29tcGxldGVdPVwidG93bnNQYW5lbFwiIFtpZ3hBdXRvY29tcGxldGVEaXNhYmxlZF09XCJkaXNhYmxlZFwiLz5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gc2V0XG4gICAgICogcHVibGljIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneEF1dG9jb21wbGV0ZURpc2FibGVkJylcbiAgICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGUgb3ZlcmxheSBzZXR0aW5ncyBmb3IgdGhlIGF1dG9jb21wbGV0ZSBkcm9wIGRvd25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgc2V0dGluZ3MgPSB0aGlzLmF1dG9jb21wbGV0ZS5hdXRvY29tcGxldGVTZXR0aW5ncztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLXNldC0tPlxuICAgICAqIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtpZ3hBdXRvY29tcGxldGVdPVwidG93bnNQYW5lbFwiIFtpZ3hBdXRvY29tcGxldGVTZXR0aW5nc109XCJzZXR0aW5nc1wiLz5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gc2V0XG4gICAgICogdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgKiAgcG9zaXRpb25TdHJhdGVneTogbmV3IENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3koe1xuICAgICAqICAgICAgY2xvc2VBbmltYXRpb246IG51bGwsXG4gICAgICogICAgICBvcGVuQW5pbWF0aW9uOiBudWxsXG4gICAgICogIH0pXG4gICAgICogfTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneEF1dG9jb21wbGV0ZVNldHRpbmdzJylcbiAgICBhdXRvY29tcGxldGVTZXR0aW5nczogQXV0b2NvbXBsZXRlT3ZlcmxheVNldHRpbmdzO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCBhZnRlciBpdGVtIGZyb20gdGhlIGRyb3AgZG93biBpcyBzZWxlY3RlZFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpbnB1dCBpZ3hJbnB1dCBbaWd4QXV0b2NvbXBsZXRlXT1cInRvd25zUGFuZWxcIiAob25JdGVtU2VsZWN0ZWQpPSdpdGVtU2VsZWN0ZWQoJGV2ZW50KScgLz5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBvbkl0ZW1TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QXV0b2NvbXBsZXRlSXRlbVNlbGVjdGlvbkV2ZW50QXJncz4oKTtcblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hdXRvY29tcGxldGUnKVxuICAgIHB1YmxpYyBhdXRvZmlsbCA9ICdvZmYnO1xuXG4gICAgLyoqIEBoaWRkZW4gIEBpbnRlcm5hbCAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBwdWJsaWMgcm9sZSA9ICdjb21ib2JveCc7XG5cbiAgICAvKiogQGhpZGRlbiAgQGludGVybmFsICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKVxuICAgIHB1YmxpYyBnZXQgYXJpYUV4cGFuZGVkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuY29sbGFwc2VkO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICBAaW50ZXJuYWwgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oYXNwb3B1cCcpXG4gICAgcHVibGljIGdldCBoYXNQb3BVcCgpIHtcbiAgICAgICAgcmV0dXJuICdsaXN0Ym94JztcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAgQGludGVybmFsICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtb3ducycpXG4gICAgcHVibGljIGdldCBhcmlhT3ducygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0Lmxpc3RJZDtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAgQGludGVybmFsICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtYWN0aXZlZGVzY2VuZGFudCcpXG4gICAgcHVibGljIGdldCBhcmlhQWN0aXZlRGVzY2VuZGFudCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnRhcmdldC5jb2xsYXBzZWQgJiYgdGhpcy50YXJnZXQuZm9jdXNlZEl0ZW0gPyB0aGlzLnRhcmdldC5mb2N1c2VkSXRlbS5pZCA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gIEBpbnRlcm5hbCAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWF1dG9jb21wbGV0ZScpXG4gICAgcHVibGljIGdldCBhcmlhQXV0b2NvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gJ2xpc3QnO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICBAaW50ZXJuYWwgKi9cbiAgICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gICAgb25JbnB1dCgpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gIEBpbnRlcm5hbCAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uQXJyb3dEb3duJywgWyckZXZlbnQnXSlcbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFsdC5BcnJvd0Rvd24nLCBbJyRldmVudCddKVxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uQXJyb3dVcCcsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BbHQuQXJyb3dVcCcsIFsnJGV2ZW50J10pXG4gICAgb25BcnJvd0Rvd24oZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICBAaW50ZXJuYWwgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLlRhYicsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5TaGlmdC5UYWInLCBbYCRldmVudGBdKVxuICAgIG9uVGFiKCkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gIEBpbnRlcm5hbCAqL1xuICAgIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NwYWNlJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzcGFjZWJhcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmhhbmRsZUtleURvd24oZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gIEBpbnRlcm5hbCAqL1xuICAgIG9uQXJyb3dEb3duS2V5RG93bigpIHtcbiAgICAgICAgc3VwZXIub25BcnJvd0Rvd25LZXlEb3duKCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gIEBpbnRlcm5hbCAqL1xuICAgIG9uQXJyb3dVcEtleURvd24oKSB7XG4gICAgICAgIHN1cGVyLm9uQXJyb3dVcEtleURvd24oKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAgQGludGVybmFsICovXG4gICAgb25FbmRLZXlEb3duKCkge1xuICAgICAgICBzdXBlci5vbkVuZEtleURvd24oKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAgQGludGVybmFsICovXG4gICAgb25Ib21lS2V5RG93bigpIHtcbiAgICAgICAgc3VwZXIub25Ib21lS2V5RG93bigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBhdXRvY29tcGxldGUgZHJvcCBkb3duXG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhcmdldC5jbG9zZSgpO1xuICAgICAgICB0aGlzLmRyb3BEb3duT3BlbmVkJC5uZXh0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYXV0b2NvbXBsZXRlIGRyb3AgZG93blxuICAgICAqL1xuICAgIHB1YmxpYyBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhcmdldC53aWR0aCA9IHRoaXMucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCArICdweCc7XG4gICAgICAgIHRoaXMudGFyZ2V0Lm9wZW4odGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMudGFyZ2V0Lm9uU2VsZWN0aW9uLnBpcGUodGFrZVVudGlsKHRoaXMuZHJvcERvd25PcGVuZWQkKSkuc3Vic2NyaWJlKHRoaXMuc2VsZWN0KTtcbiAgICAgICAgdGhpcy50YXJnZXQub25PcGVuZWQucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUodGhpcy5oaWdobGlnaHRGaXJzdEl0ZW0pO1xuICAgICAgICB0aGlzLnRhcmdldC5jaGlsZHJlbi5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZHJvcERvd25PcGVuZWQkKSkuc3Vic2NyaWJlKHRoaXMuaGlnaGxpZ2h0Rmlyc3RJdGVtKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBjb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldCA/IHRoaXMudGFyZ2V0LmNvbGxhcHNlZCA6IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZWxlY3QgPSAodmFsdWU6IElTZWxlY3Rpb25FdmVudEFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF2YWx1ZS5uZXdTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZS5jYW5jZWwgPSB0cnVlOyAvLyBEaXNhYmxlIHNlbGVjdGlvbiBpbiB0aGUgZHJvcCBkb3duLCBiZWNhdXNlIGluIGF1dG9jb21wbGV0ZSB3ZSBkbyBub3Qgc2F2ZSBzZWxlY3Rpb24uXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUubmV3U2VsZWN0aW9uLnZhbHVlO1xuICAgICAgICBjb25zdCBhcmdzOiBBdXRvY29tcGxldGVJdGVtU2VsZWN0aW9uRXZlbnRBcmdzID0geyB2YWx1ZTogbmV3VmFsdWUsIGNhbmNlbDogZmFsc2UgfTtcbiAgICAgICAgdGhpcy5vbkl0ZW1TZWxlY3RlZC5lbWl0KGFyZ3MpO1xuICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBtb2RlbCBhZnRlciB0aGUgaW5wdXQgaXMgcmUtZm9jdXNlZCwgaW4gb3JkZXIgdG8gaGF2ZSBwcm9wZXIgdmFsaWQgc3R5bGluZy5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdoZW4gaXRlbSBpcyBzZWxlY3RlZCB1c2luZyBtb3VzZSAoYW5kIGlucHV0IGlzIGJsdXJyZWQpLCB0aGVuIHZhbGlkIHN0eWxlIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgICAgdGhpcy5tb2RlbCA/IHRoaXMubW9kZWwuY29udHJvbC5zZXRWYWx1ZShuZXdWYWx1ZSkgOiB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZ2hsaWdodEZpcnN0SXRlbSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmZvY3VzZWRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5mb2N1c2VkSXRlbS5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5mb2N1c2VkSXRlbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YXJnZXQubmF2aWdhdGVGaXJzdCgpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZHJvcERvd25PcGVuZWQkLmNvbXBsZXRlKCk7XG4gICAgfVxufVxuXG4vKiogQGhpZGRlbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbSWd4RHJvcERvd25Nb2R1bGUsIENvbW1vbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbSWd4QXV0b2NvbXBsZXRlRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4QXV0b2NvbXBsZXRlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hBdXRvY29tcGxldGVNb2R1bGUgeyB9XG4iXX0=