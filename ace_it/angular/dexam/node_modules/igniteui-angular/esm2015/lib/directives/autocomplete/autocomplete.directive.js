/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class IgxAutocompleteDirective extends IgxDropDownItemNavigationDirective {
    /**
     * @param {?} ngModel
     * @param {?} formControl
     * @param {?} group
     * @param {?} elementRef
     * @param {?} cdr
     */
    constructor(ngModel, formControl, group, elementRef, cdr) {
        super(null);
        this.ngModel = ngModel;
        this.formControl = formControl;
        this.group = group;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.defaultSettings = {
            modal: false,
            scrollStrategy: new AbsoluteScrollStrategy(),
            positionStrategy: new AutoPositionStrategy({ target: this.parentElement }),
            excludePositionTarget: true
        };
        this.dropDownOpened$ = new Subject();
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
        this.disabled = false;
        /**
         * Emitted after item from the drop down is selected
         *
         * ```html
         * <input igxInput [igxAutocomplete]="townsPanel" (onItemSelected)='itemSelected($event)' />
         * ```
         */
        this.onItemSelected = new EventEmitter();
        /**
         * @hidden \@internal
         */
        this.autofill = 'off';
        /**
         * @hidden \@internal
         */
        this.role = 'combobox';
        this.select = (value) => {
            if (!value.newSelection) {
                return;
            }
            value.cancel = true; // Disable selection in the drop down, because in autocomplete we do not save selection.
            // Disable selection in the drop down, because in autocomplete we do not save selection.
            /** @type {?} */
            const newValue = value.newSelection.value;
            /** @type {?} */
            const args = { value: newValue, cancel: false };
            this.onItemSelected.emit(args);
            if (args.cancel) {
                return;
            }
            this.close();
            this.nativeElement.focus();
            // Update model after the input is re-focused, in order to have proper valid styling.
            // Otherwise when item is selected using mouse (and input is blurred), then valid style will be removed.
            this.model ? this.model.control.setValue(newValue) : this.nativeElement.value = newValue;
        };
        this.highlightFirstItem = () => {
            if (this.target.focusedItem) {
                this.target.focusedItem.focused = false;
                this.target.focusedItem = null;
            }
            this.target.navigateFirst();
            this.cdr.detectChanges();
        };
    }
    /**
     * @protected
     * @return {?}
     */
    get model() {
        return this.ngModel || this.formControl;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get parentElement() {
        return this.group ? this.group.element.nativeElement : this.nativeElement;
    }
    /**
     * @private
     * @return {?}
     */
    get settings() {
        /** @type {?} */
        const settings = Object.assign({}, this.defaultSettings, this.autocompleteSettings);
        if (!settings.positionStrategy.settings.target) {
            /** @type {?} */
            const positionStrategyClone = settings.positionStrategy.clone();
            positionStrategyClone.settings.target = this.parentElement;
            settings.positionStrategy = positionStrategyClone;
        }
        return settings;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get ariaExpanded() {
        return !this.collapsed;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get hasPopUp() {
        return 'listbox';
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get ariaOwns() {
        return this.target.listId;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get ariaActiveDescendant() {
        return !this.target.collapsed && this.target.focusedItem ? this.target.focusedItem.id : null;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get ariaAutocomplete() {
        return 'list';
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    onInput() {
        this.open();
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    onArrowDown(event) {
        event.preventDefault();
        this.open();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    onTab() {
        this.close();
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    handleKeyDown(event) {
        if (!this.collapsed) {
            switch (event.key.toLowerCase()) {
                case 'space':
                case 'spacebar':
                case ' ':
                case 'home':
                case 'end':
                    return;
                default:
                    super.handleKeyDown(event);
            }
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    onArrowDownKeyDown() {
        super.onArrowDownKeyDown();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    onArrowUpKeyDown() {
        super.onArrowUpKeyDown();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    onEndKeyDown() {
        super.onEndKeyDown();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    onHomeKeyDown() {
        super.onHomeKeyDown();
    }
    /**
     * Closes autocomplete drop down
     * @return {?}
     */
    close() {
        if (this.collapsed) {
            return;
        }
        this.target.close();
        this.dropDownOpened$.next();
    }
    /**
     * Opens autocomplete drop down
     * @return {?}
     */
    open() {
        if (this.disabled || !this.collapsed) {
            return;
        }
        this.target.width = this.parentElement.clientWidth + 'px';
        this.target.open(this.settings);
        this.target.onSelection.pipe(takeUntil(this.dropDownOpened$)).subscribe(this.select);
        this.target.onOpened.pipe(first()).subscribe(this.highlightFirstItem);
        this.target.children.changes.pipe(takeUntil(this.dropDownOpened$)).subscribe(this.highlightFirstItem);
    }
    /**
     * @private
     * @return {?}
     */
    get collapsed() {
        return this.target ? this.target.collapsed : true;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this.dropDownOpened$.complete();
    }
}
IgxAutocompleteDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxAutocomplete]'
            },] }
];
/** @nocollapse */
IgxAutocompleteDirective.ctorParameters = () => [
    { type: NgModel, decorators: [{ type: Self }, { type: Optional }, { type: Inject, args: [NgModel,] }] },
    { type: FormControlName, decorators: [{ type: Self }, { type: Optional }, { type: Inject, args: [FormControlName,] }] },
    { type: IgxInputGroupComponent, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
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
    onTab: [{ type: HostListener, args: ['keydown.Tab', ['$event'],] }, { type: HostListener, args: ['keydown.Shift.Tab', [`$event`],] }]
};
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
export class IgxAutocompleteModule {
}
IgxAutocompleteModule.decorators = [
    { type: NgModule, args: [{
                imports: [IgxDropDownModule, CommonModule],
                declarations: [IgxAutocompleteDirective],
                exports: [IgxAutocompleteDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQzNFLFFBQVEsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQW1CLHNCQUFzQixFQUFzQyxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBdUIsa0NBQWtDLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6SSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7O0FBT2pFLHdEQUtDOzs7Ozs7SUFERyxtREFBYzs7Ozs7QUFHbEIsaURBT0M7Ozs7OztJQUxHLHVEQUFxQzs7Ozs7SUFFckMscURBQWlDOzs7OztJQUVqQyw2Q0FBZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QnBELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxrQ0FBa0M7Ozs7Ozs7O0lBRTVFLFlBQTJELE9BQWdCLEVBQ1IsV0FBNEIsRUFDN0QsS0FBNkIs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b250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBJbnB1dCwgU2VsZiwgT3B0aW9uYWwsIEluamVjdCwgSG9zdEJpbmRpbmcsIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuICAgIE5nTW9kdWxlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kZWwsIEZvcm1Db250cm9sTmFtZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FuY2VsYWJsZUV2ZW50QXJncyB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgT3ZlcmxheVNldHRpbmdzLCBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5LCBJU2Nyb2xsU3RyYXRlZ3ksIElQb3NpdGlvblN0cmF0ZWd5LCBBdXRvUG9zaXRpb25TdHJhdGVneSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IElneERyb3BEb3duTW9kdWxlLCBJZ3hEcm9wRG93bkNvbXBvbmVudCwgSVNlbGVjdGlvbkV2ZW50QXJncywgSWd4RHJvcERvd25JdGVtTmF2aWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2Ryb3AtZG93bi9pbmRleCc7XG5pbXBvcnQgeyBJZ3hJbnB1dEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vaW5wdXQtZ3JvdXAvaW5kZXgnO1xuaW1wb3J0IHsgSWd4T3ZlcmxheU91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4uL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgdGhhdCBlbmNhcHN1bGF0ZXMgb25JdGVtU2VsZWN0aW9uIGV2ZW50IGFyZ3VtZW50cyAtIG5ldyB2YWx1ZSBhbmQgY2FuY2VsIHNlbGVjdGlvbi5cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBdXRvY29tcGxldGVJdGVtU2VsZWN0aW9uRXZlbnRBcmdzIGV4dGVuZHMgQ2FuY2VsYWJsZUV2ZW50QXJncyB7XG4gICAgLyoqXG4gICAgICogTmV3IHZhbHVlIHNlbGVjdGVkIGZyb20gdGhlIGRyb3AgZG93blxuICAgICAqL1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlT3ZlcmxheVNldHRpbmdzIHtcbiAgICAvKiogUG9zaXRpb24gc3RyYXRlZ3kgdG8gdXNlIHdpdGggdGhpcyBzZXR0aW5ncyAqL1xuICAgIHBvc2l0aW9uU3RyYXRlZ3k/OiBJUG9zaXRpb25TdHJhdGVneTtcbiAgICAvKiogU2Nyb2xsIHN0cmF0ZWd5IHRvIHVzZSB3aXRoIHRoaXMgc2V0dGluZ3MgKi9cbiAgICBzY3JvbGxTdHJhdGVneT86IElTY3JvbGxTdHJhdGVneTtcbiAgICAvKiogU2V0IHRoZSBvdXRsZXQgY29udGFpbmVyIHRvIGF0dGFjaCB0aGUgb3ZlcmxheSB0byAqL1xuICAgIG91dGxldD86IElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmUgfCBFbGVtZW50UmVmO1xufVxuXG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIEF1dG9jb21wbGV0ZSoqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9hdXRvY29tcGxldGUuaHRtbClcbiAqXG4gKiBUaGUgaWd4QXV0b2NvbXBsZXRlIGRpcmVjdGl2ZSBwcm92aWRlcyBhIHdheSB0byBlbmhhbmNlIGEgdGV4dCBpbnB1dFxuICogYnkgc2hvd2luZyBhIGRyb3AgZG93biBvZiBzdWdnZXN0ZWQgb3B0aW9ucywgcHJvdmlkZWQgYnkgdGhlIGRldmVsb3Blci5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2lneEF1dG9jb21wbGV0ZV09XCJ0b3duc1BhbmVsXCIgLz5cbiAqIDxpZ3gtZHJvcC1kb3duICN0b3duc1BhbmVsPlxuICogICAgIDxpZ3gtZHJvcC1kb3duLWl0ZW0gKm5nRm9yPVwibGV0IHRvd24gb2YgdG93bnMgfCBzdGFydHNXaXRoOnRvd25TZWxlY3RlZFwiIFt2YWx1ZV09XCJ0b3duXCI+XG4gKiAgICAgICAgIHt7dG93bn19XG4gKiAgICAgPC9pZ3gtZHJvcC1kb3duLWl0ZW0+XG4gKiA8L2lneC1kcm9wLWRvd24+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4QXV0b2NvbXBsZXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4QXV0b2NvbXBsZXRlRGlyZWN0aXZlIGV4dGVuZHMgSWd4RHJvcERvd25JdGVtTmF2aWdhdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBjb25zdHJ1Y3RvcihAU2VsZigpIEBPcHRpb25hbCgpIEBJbmplY3QoTmdNb2RlbCkgcHJvdGVjdGVkIG5nTW9kZWw6IE5nTW9kZWwsXG4gICAgICAgICAgICAgICAgQFNlbGYoKSBAT3B0aW9uYWwoKSBASW5qZWN0KEZvcm1Db250cm9sTmFtZSkgcHJvdGVjdGVkIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbE5hbWUsXG4gICAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGdyb3VwOiBJZ3hJbnB1dEdyb3VwQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKG51bGwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVmYXVsdFNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3MgPSB7XG4gICAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IG5ldyBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5KCksXG4gICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IG5ldyBBdXRvUG9zaXRpb25TdHJhdGVneSh7IHRhcmdldDogdGhpcy5wYXJlbnRFbGVtZW50IH0pLFxuICAgICAgICBleGNsdWRlUG9zaXRpb25UYXJnZXQ6IHRydWVcbiAgICB9O1xuXG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGRyb3BEb3duT3BlbmVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJvdGVjdGVkIGdldCBtb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmdNb2RlbCB8fCB0aGlzLmZvcm1Db250cm9sO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIGdldCBuYXRpdmVFbGVtZW50KCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgZ2V0IHBhcmVudEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cCA/IHRoaXMuZ3JvdXAuZWxlbWVudC5uYXRpdmVFbGVtZW50IDogdGhpcy5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IHNldHRpbmdzKCk6IE92ZXJsYXlTZXR0aW5ncyB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0U2V0dGluZ3MsIHRoaXMuYXV0b2NvbXBsZXRlU2V0dGluZ3MpO1xuICAgICAgICBpZiAoIXNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kuc2V0dGluZ3MudGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5Q2xvbmU6IElQb3NpdGlvblN0cmF0ZWd5ID0gc2V0dGluZ3MucG9zaXRpb25TdHJhdGVneS5jbG9uZSgpO1xuICAgICAgICAgICAgcG9zaXRpb25TdHJhdGVneUNsb25lLnNldHRpbmdzLnRhcmdldCA9IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHNldHRpbmdzLnBvc2l0aW9uU3RyYXRlZ3kgPSBwb3NpdGlvblN0cmF0ZWd5Q2xvbmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRhcmdldCBvZiB0aGUgYXV0b2NvbXBsZXRlIGRpcmVjdGl2ZVxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS0gU2V0IC0tPlxuICAgICAqIDxpbnB1dCBbaWd4QXV0b2NvbXBsZXRlXT1cImRyb3Bkb3duXCIgLz5cbiAgICAgKiAuLi5cbiAgICAgKiA8aWd4LWRyb3AtZG93biAjZHJvcGRvd24+XG4gICAgICogLi4uXG4gICAgICogPC9pZ3gtZHJvcC1kb3duPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4QXV0b2NvbXBsZXRlJylcbiAgICBwdWJsaWMgdGFyZ2V0OiBJZ3hEcm9wRG93bkNvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgYXV0b2NvbXBsZXRlIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBkaXNhYmxlZCA9IHRoaXMuYXV0b2NvbXBsZXRlLmRpc2FibGVkO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2lneEF1dG9jb21wbGV0ZV09XCJ0b3duc1BhbmVsXCIgW2lneEF1dG9jb21wbGV0ZURpc2FibGVkXT1cImRpc2FibGVkXCIvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBzZXRcbiAgICAgKiBwdWJsaWMgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4QXV0b2NvbXBsZXRlRGlzYWJsZWQnKVxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZSBvdmVybGF5IHNldHRpbmdzIGZvciB0aGUgYXV0b2NvbXBsZXRlIGRyb3AgZG93blxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGxldCBzZXR0aW5ncyA9IHRoaXMuYXV0b2NvbXBsZXRlLmF1dG9jb21wbGV0ZVNldHRpbmdzO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2lneEF1dG9jb21wbGV0ZV09XCJ0b3duc1BhbmVsXCIgW2lneEF1dG9jb21wbGV0ZVNldHRpbmdzXT1cInNldHRpbmdzXCIvPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBzZXRcbiAgICAgKiB0aGlzLnNldHRpbmdzID0ge1xuICAgICAqICBwb3NpdGlvblN0cmF0ZWd5OiBuZXcgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSh7XG4gICAgICogICAgICBjbG9zZUFuaW1hdGlvbjogbnVsbCxcbiAgICAgKiAgICAgIG9wZW5BbmltYXRpb246IG51bGxcbiAgICAgKiAgfSlcbiAgICAgKiB9O1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4QXV0b2NvbXBsZXRlU2V0dGluZ3MnKVxuICAgIGF1dG9jb21wbGV0ZVNldHRpbmdzOiBBdXRvY29tcGxldGVPdmVybGF5U2V0dGluZ3M7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIGFmdGVyIGl0ZW0gZnJvbSB0aGUgZHJvcCBkb3duIGlzIHNlbGVjdGVkXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlucHV0IGlneElucHV0IFtpZ3hBdXRvY29tcGxldGVdPVwidG93bnNQYW5lbFwiIChvbkl0ZW1TZWxlY3RlZCk9J2l0ZW1TZWxlY3RlZCgkZXZlbnQpJyAvPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIG9uSXRlbVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxBdXRvY29tcGxldGVJdGVtU2VsZWN0aW9uRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmF1dG9jb21wbGV0ZScpXG4gICAgcHVibGljIGF1dG9maWxsID0gJ29mZic7XG5cbiAgICAvKiogQGhpZGRlbiAgQGludGVybmFsICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIHB1YmxpYyByb2xlID0gJ2NvbWJvYm94JztcblxuICAgIC8qKiBAaGlkZGVuICBAaW50ZXJuYWwgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXG4gICAgcHVibGljIGdldCBhcmlhRXhwYW5kZWQoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5jb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gIEBpbnRlcm5hbCAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWhhc3BvcHVwJylcbiAgICBwdWJsaWMgZ2V0IGhhc1BvcFVwKCkge1xuICAgICAgICByZXR1cm4gJ2xpc3Rib3gnO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICBAaW50ZXJuYWwgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1vd25zJylcbiAgICBwdWJsaWMgZ2V0IGFyaWFPd25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQubGlzdElkO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICBAaW50ZXJuYWwgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1hY3RpdmVkZXNjZW5kYW50JylcbiAgICBwdWJsaWMgZ2V0IGFyaWFBY3RpdmVEZXNjZW5kYW50KCkge1xuICAgICAgICByZXR1cm4gIXRoaXMudGFyZ2V0LmNvbGxhcHNlZCAmJiB0aGlzLnRhcmdldC5mb2N1c2VkSXRlbSA/IHRoaXMudGFyZ2V0LmZvY3VzZWRJdGVtLmlkIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAgQGludGVybmFsICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtYXV0b2NvbXBsZXRlJylcbiAgICBwdWJsaWMgZ2V0IGFyaWFBdXRvY29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiAnbGlzdCc7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gIEBpbnRlcm5hbCAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgICBvbklucHV0KCkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAgQGludGVybmFsICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BcnJvd0Rvd24nLCBbJyRldmVudCddKVxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uQWx0LkFycm93RG93bicsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BcnJvd1VwJywgWyckZXZlbnQnXSlcbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFsdC5BcnJvd1VwJywgWyckZXZlbnQnXSlcbiAgICBvbkFycm93RG93bihldmVudDogRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gIEBpbnRlcm5hbCAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uVGFiJywgWyckZXZlbnQnXSlcbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLlNoaWZ0LlRhYicsIFtgJGV2ZW50YF0pXG4gICAgb25UYWIoKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAgQGludGVybmFsICovXG4gICAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BhY2UnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NwYWNlYmFyJzpcbiAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuaGFuZGxlS2V5RG93bihldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAgQGludGVybmFsICovXG4gICAgb25BcnJvd0Rvd25LZXlEb3duKCkge1xuICAgICAgICBzdXBlci5vbkFycm93RG93bktleURvd24oKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAgQGludGVybmFsICovXG4gICAgb25BcnJvd1VwS2V5RG93bigpIHtcbiAgICAgICAgc3VwZXIub25BcnJvd1VwS2V5RG93bigpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICBAaW50ZXJuYWwgKi9cbiAgICBvbkVuZEtleURvd24oKSB7XG4gICAgICAgIHN1cGVyLm9uRW5kS2V5RG93bigpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuICBAaW50ZXJuYWwgKi9cbiAgICBvbkhvbWVLZXlEb3duKCkge1xuICAgICAgICBzdXBlci5vbkhvbWVLZXlEb3duKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIGF1dG9jb21wbGV0ZSBkcm9wIGRvd25cbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0LmNsb3NlKCk7XG4gICAgICAgIHRoaXMuZHJvcERvd25PcGVuZWQkLm5leHQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyBhdXRvY29tcGxldGUgZHJvcCBkb3duXG4gICAgICovXG4gICAgcHVibGljIG9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0LndpZHRoID0gdGhpcy5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy50YXJnZXQub3Blbih0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy50YXJnZXQub25TZWxlY3Rpb24ucGlwZSh0YWtlVW50aWwodGhpcy5kcm9wRG93bk9wZW5lZCQpKS5zdWJzY3JpYmUodGhpcy5zZWxlY3QpO1xuICAgICAgICB0aGlzLnRhcmdldC5vbk9wZW5lZC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSh0aGlzLmhpZ2hsaWdodEZpcnN0SXRlbSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmNoaWxkcmVuLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kcm9wRG93bk9wZW5lZCQpKS5zdWJzY3JpYmUodGhpcy5oaWdobGlnaHRGaXJzdEl0ZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGNvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQuY29sbGFwc2VkIDogdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdCA9ICh2YWx1ZTogSVNlbGVjdGlvbkV2ZW50QXJncykgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlLm5ld1NlbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlLmNhbmNlbCA9IHRydWU7IC8vIERpc2FibGUgc2VsZWN0aW9uIGluIHRoZSBkcm9wIGRvd24sIGJlY2F1c2UgaW4gYXV0b2NvbXBsZXRlIHdlIGRvIG5vdCBzYXZlIHNlbGVjdGlvbi5cbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZS5uZXdTZWxlY3Rpb24udmFsdWU7XG4gICAgICAgIGNvbnN0IGFyZ3M6IEF1dG9jb21wbGV0ZUl0ZW1TZWxlY3Rpb25FdmVudEFyZ3MgPSB7IHZhbHVlOiBuZXdWYWx1ZSwgY2FuY2VsOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLm9uSXRlbVNlbGVjdGVkLmVtaXQoYXJncyk7XG4gICAgICAgIGlmIChhcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIG1vZGVsIGFmdGVyIHRoZSBpbnB1dCBpcyByZS1mb2N1c2VkLCBpbiBvcmRlciB0byBoYXZlIHByb3BlciB2YWxpZCBzdHlsaW5nLlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2hlbiBpdGVtIGlzIHNlbGVjdGVkIHVzaW5nIG1vdXNlIChhbmQgaW5wdXQgaXMgYmx1cnJlZCksIHRoZW4gdmFsaWQgc3R5bGUgd2lsbCBiZSByZW1vdmVkLlxuICAgICAgICB0aGlzLm1vZGVsID8gdGhpcy5tb2RlbC5jb250cm9sLnNldFZhbHVlKG5ld1ZhbHVlKSA6IHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGlnaGxpZ2h0Rmlyc3RJdGVtID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQuZm9jdXNlZEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmZvY3VzZWRJdGVtLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmZvY3VzZWRJdGVtID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhcmdldC5uYXZpZ2F0ZUZpcnN0KCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kcm9wRG93bk9wZW5lZCQuY29tcGxldGUoKTtcbiAgICB9XG59XG5cbi8qKiBAaGlkZGVuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtJZ3hEcm9wRG93bk1vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hBdXRvY29tcGxldGVEaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hBdXRvY29tcGxldGVEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIElneEF1dG9jb21wbGV0ZU1vZHVsZSB7IH1cbiJdfQ==