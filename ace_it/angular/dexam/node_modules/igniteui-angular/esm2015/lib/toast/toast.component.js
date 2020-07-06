/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostBinding, Input, NgModule, Optional, Output } from '@angular/core';
import { IgxNavigationService } from '../core/navigation';
/** @type {?} */
let NEXT_ID = 0;
/**
 * **Ignite UI for Angular Toast** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/toast.html)
 *
 * The Ignite UI Toast provides information and warning messages that are non-interactive and cannot
 * be dismissed by the user. Toasts can be displayed at the bottom, middle, or top of the page.
 *
 * Example:
 * ```html
 * <button (click)="toast.show()">Show notification</button>
 * <igx-toast #toast
 *           message="Notification displayed"
 *           displayTime="1000">
 * </igx-toast>
 * ```
 */
export class IgxToastComponent {
    /**
     * @param {?} elementRef
     * @param {?} navService
     */
    constructor(elementRef, navService) {
        this.elementRef = elementRef;
        this.navService = navService;
        /**
         * Returns a list of available CSS classes.
         * ```typescript
         * let toastClasses =  this.toast.CSS_CLASSES;
         * ```
         * \@memberof IgxToastComponent
         */
        this.CSS_CLASSES = {
            IGX_TOAST_BOTTOM: 'igx-toast--bottom',
            IGX_TOAST_MIDDLE: 'igx-toast--middle',
            IGX_TOAST_TOP: 'igx-toast--top'
        };
        /**
         * Sets/gets the `id` of the toast.
         * If not set, the `id` will have value `"igx-toast-0"`.
         * ```html
         * <igx-toast id = "my-first-toast"></igx-toast>
         * ```
         * ```typescript
         * let toastId = this.toast.id;
         * ```
         */
        this.id = `igx-toast-${NEXT_ID++}`;
        /**
         * Emits an event prior the toast is shown.
         * Provides reference to the `IgxToastComponent` as event argument.
         * ```html
         * <igx-toast (onShowing) = "onShowing($event)"></igx-toast>
         * ```
         * \@memberof IgxToastComponent
         */
        this.onShowing = new EventEmitter();
        /**
         * Emits an event when the toast is shown.
         * Provides reference to the `IgxToastComponent` as event argument.
         * ```html
         * <igx-toast (onShown) = "onShown($event)"></igx-toast>
         * ```
         * \@memberof IgxToastComponent
         */
        this.onShown = new EventEmitter();
        /**
         * Emits an event prior the toast is hidden.
         * Provides reference to the `IgxToastComponent` as event argument.
         * ```html
         * <igx-toast (onHiding) = "onHiding($event)"></igx-toast>
         * ```
         * \@memberof IgxToastComponent
         */
        this.onHiding = new EventEmitter();
        /**
         *  Emits an event when the toast is hidden.
         *  Provides reference to the `IgxToastComponent` as event argument.
         * ```html
         * <igx-toast (onHidden) = "onHidden($event)"></igx-toast>
         * ```
         * \@memberof IgxToastComponent
         */
        this.onHidden = new EventEmitter();
        /**
         * Sets/gets the `role` attribute.
         * If not set, `role` will have value `"alert"`.
         * ```html
         * <igx-toast [role] = "'notify'"></igx-toast>
         * ```
         * ```typescript
         * let toastRole = this.toast.role;
         * ```
         * \@memberof IgxToastComponent
         */
        this.role = 'alert';
        /**
         * Sets/gets whether the toast will be hidden after the `displayTime` is over.
         * Default value is `true`.
         * ```html
         * <igx-toast [autoHide] = "false"></igx-toast>
         * ```
         * ```typescript
         * let autoHide = this.toast.autoHide;
         * ```
         * \@memberof IgxToastComponent
         */
        this.autoHide = true;
        /**
         * Sets/gets the duration of time span(in milliseconds) which the toast will be visible
         * after it is being shown.
         * Default value is `4000`.
         * ```html
         * <igx-toast [displayTime] = "2500"></igx-toast>
         * ```
         * ```typescript
         * let displayTime = this.toast.displayTime;
         * ```
         * \@memberof IgxToastComponent
         */
        this.displayTime = 4000;
        /**
         * Enables/Disables the visibility of the toast.
         * If not set, the `isVisible` attribute will have value `false`.
         * ```html
         * <igx-toast [isVisible] = "true"></igx-toast>
         * ```
         * ```typescript
         * let isVisible = this.toast.isVisible;
         * ```
         * \@memberof IgxToastComponent
         */
        this.isVisible = false;
        /**
         * Sets/gets the position of the toast.
         * If not set, the `position` attribute will have value `IgxToastPosition.Bottom`.
         * ```html
         * <igx-toast [position] = "top"></igx-toast>
         * ```
         * ```typescript
         * let toastPosition = this.toast.position;
         * ```
         * \@memberof IgxToastComponent
         */
        this.position = IgxToastPosition.Bottom;
    }
    /**
     * Gets the nativeElement of the toast.
     * ```typescript
     * let nativeElement = this.toast.element;
     * ```
     * \@memberof IgxToastComponent
     * @return {?}
     */
    get element() {
        return this.elementRef.nativeElement;
    }
    /**
     * Shows the toast.
     * If `autoHide` is enabled, the toast will hide after `displayTime` is over.
     * ```typescript
     * this.toast.show();
     * ```
     * \@memberof IgxToastComponent
     * @return {?}
     */
    show() {
        clearInterval(this.timeoutId);
        this.onShowing.emit(this);
        this.isVisible = true;
        if (this.autoHide) {
            this.timeoutId = setTimeout(() => {
                this.hide();
            }, this.displayTime);
        }
        this.onShown.emit(this);
    }
    /**
     * Hides the toast.
     * ```typescript
     * this.toast.hide();
     * ```
     * \@memberof IgxToastComponent
     * @return {?}
     */
    hide() {
        this.onHiding.emit(this);
        this.isVisible = false;
        this.onHidden.emit(this);
        clearInterval(this.timeoutId);
    }
    /**
     * Wraps \@show() method due \@IToggleView interface implementation.
     * @hidden
     * @return {?}
     */
    open() {
        this.show();
    }
    /**
     * Wraps \@hide() method due \@IToggleView interface implementation.
     * @hidden
     * @return {?}
     */
    close() {
        this.hide();
    }
    /**
     * Toggles the visible state of the toast.
     * ```typescript
     * this.toast.toggle();
     * ```
     * \@memberof IgxToastComponent
     * @return {?}
     */
    toggle() {
        this.isVisible ? this.close() : this.open();
    }
    /**
     * Sets/gets the class name of the toast based on the `position` value.
     * ```typescript
     * let className =  this.toast.mapPositionToClassName();
     * ```
     * \@memberof IgxToastComponent
     * @return {?}
     */
    mapPositionToClassName() {
        if (this.position === IgxToastPosition.Top) {
            return this.CSS_CLASSES.IGX_TOAST_TOP;
        }
        if (this.position === IgxToastPosition.Middle) {
            return this.CSS_CLASSES.IGX_TOAST_MIDDLE;
        }
        if (this.position === IgxToastPosition.Bottom) {
            return this.CSS_CLASSES.IGX_TOAST_BOTTOM;
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        if (this.navService && this.id) {
            this.navService.add(this.id, this);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        if (this.navService && this.id) {
            this.navService.remove(this.id);
        }
    }
}
IgxToastComponent.decorators = [
    { type: Component, args: [{
                animations: [
                    trigger('animate', [
                        state('show', style({
                            opacity: 1
                        })),
                        transition('* => show', animate('.20s ease')),
                        transition('show => *', animate('.40s ease-out'))
                    ])
                ],
                selector: 'igx-toast',
                template: "<div [ngClass]=\"mapPositionToClassName()\" *ngIf=\"this.isVisible\" [@animate]=\"'show'\">\n    {{ message }}\n</div>\n",
                styles: [`
        :host {
            display: block;
        }
    `]
            }] }
];
/** @nocollapse */
IgxToastComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: IgxNavigationService, decorators: [{ type: Optional }] }
];
IgxToastComponent.propDecorators = {
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    onShowing: [{ type: Output }],
    onShown: [{ type: Output }],
    onHiding: [{ type: Output }],
    onHidden: [{ type: Output }],
    role: [{ type: Input }],
    autoHide: [{ type: Input }],
    displayTime: [{ type: Input }],
    isVisible: [{ type: Input }],
    message: [{ type: Input }],
    position: [{ type: Input }]
};
if (false) {
    /**
     * Returns a list of available CSS classes.
     * ```typescript
     * let toastClasses =  this.toast.CSS_CLASSES;
     * ```
     * \@memberof IgxToastComponent
     * @type {?}
     */
    IgxToastComponent.prototype.CSS_CLASSES;
    /**
     * Sets/gets the `id` of the toast.
     * If not set, the `id` will have value `"igx-toast-0"`.
     * ```html
     * <igx-toast id = "my-first-toast"></igx-toast>
     * ```
     * ```typescript
     * let toastId = this.toast.id;
     * ```
     * @type {?}
     */
    IgxToastComponent.prototype.id;
    /**
     * Emits an event prior the toast is shown.
     * Provides reference to the `IgxToastComponent` as event argument.
     * ```html
     * <igx-toast (onShowing) = "onShowing($event)"></igx-toast>
     * ```
     * \@memberof IgxToastComponent
     * @type {?}
     */
    IgxToastComponent.prototype.onShowing;
    /**
     * Emits an event when the toast is shown.
     * Provides reference to the `IgxToastComponent` as event argument.
     * ```html
     * <igx-toast (onShown) = "onShown($event)"></igx-toast>
     * ```
     * \@memberof IgxToastComponent
     * @type {?}
     */
    IgxToastComponent.prototype.onShown;
    /**
     * Emits an event prior the toast is hidden.
     * Provides reference to the `IgxToastComponent` as event argument.
     * ```html
     * <igx-toast (onHiding) = "onHiding($event)"></igx-toast>
     * ```
     * \@memberof IgxToastComponent
     * @type {?}
     */
    IgxToastComponent.prototype.onHiding;
    /**
     *  Emits an event when the toast is hidden.
     *  Provides reference to the `IgxToastComponent` as event argument.
     * ```html
     * <igx-toast (onHidden) = "onHidden($event)"></igx-toast>
     * ```
     * \@memberof IgxToastComponent
     * @type {?}
     */
    IgxToastComponent.prototype.onHidden;
    /**
     * Sets/gets the `role` attribute.
     * If not set, `role` will have value `"alert"`.
     * ```html
     * <igx-toast [role] = "'notify'"></igx-toast>
     * ```
     * ```typescript
     * let toastRole = this.toast.role;
     * ```
     * \@memberof IgxToastComponent
     * @type {?}
     */
    IgxToastComponent.prototype.role;
    /**
     * Sets/gets whether the toast will be hidden after the `displayTime` is over.
     * Default value is `true`.
     * ```html
     * <igx-toast [autoHide] = "false"></igx-toast>
     * ```
     * ```typescript
     * let autoHide = this.toast.autoHide;
     * ```
     * \@memberof IgxToastComponent
     * @type {?}
     */
    IgxToastComponent.prototype.autoHide;
    /**
     * Sets/gets the duration of time span(in milliseconds) which the toast will be visible
     * after it is being shown.
     * Default value is `4000`.
     * ```html
     * <igx-toast [displayTime] = "2500"></igx-toast>
     * ```
     * ```typescript
     * let displayTime = this.toast.displayTime;
     * ```
     * \@memberof IgxToastComponent
     * @type {?}
     */
    IgxToastComponent.prototype.displayTime;
    /**
     * Enables/Disables the visibility of the toast.
     * If not set, the `isVisible` attribute will have value `false`.
     * ```html
     * <igx-toast [isVisible] = "true"></igx-toast>
     * ```
     * ```typescript
     * let isVisible = this.toast.isVisible;
     * ```
     * \@memberof IgxToastComponent
     * @type {?}
     */
    IgxToastComponent.prototype.isVisible;
    /**
     * Sets/gets the message that will be shown by the toast.
     * ```html
     * <igx-toast [message] = "Notification"></igx-toast>
     * ```
     * ```typescript
     * let toastMessage = this.toast.message;
     * ```
     * \@memberof IgxToastComponent
     * @type {?}
     */
    IgxToastComponent.prototype.message;
    /**
     * Sets/gets the position of the toast.
     * If not set, the `position` attribute will have value `IgxToastPosition.Bottom`.
     * ```html
     * <igx-toast [position] = "top"></igx-toast>
     * ```
     * ```typescript
     * let toastPosition = this.toast.position;
     * ```
     * \@memberof IgxToastComponent
     * @type {?}
     */
    IgxToastComponent.prototype.position;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxToastComponent.prototype.timeoutId;
    /**
     * @type {?}
     * @private
     */
    IgxToastComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    IgxToastComponent.prototype.navService;
}
/** @enum {number} */
const IgxToastPosition = {
    Bottom: 0,
    Middle: 1,
    Top: 2,
};
export { IgxToastPosition };
IgxToastPosition[IgxToastPosition.Bottom] = 'Bottom';
IgxToastPosition[IgxToastPosition.Middle] = 'Middle';
IgxToastPosition[IgxToastPosition.Top] = 'Top';
/**
 * @hidden
 */
export class IgxToastModule {
}
IgxToastModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxToastComponent],
                exports: [IgxToastComponent],
                imports: [CommonModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi90b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsRUFHUixRQUFRLEVBQ1IsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBZSxNQUFNLG9CQUFvQixDQUFDOztJQUVuRSxPQUFPLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ2YsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUF5SzFCLFlBQ1ksVUFBc0IsRUFDVixVQUFnQztRQUQ1QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBc0I7Ozs7Ozs7O1FBbkt4QyxnQkFBVyxHQUFHO1lBQzFCLGdCQUFnQixFQUFFLG1CQUFtQjtZQUNyQyxnQkFBZ0IsRUFBRSxtQkFBbUI7WUFDckMsYUFBYSxFQUFFLGdCQUFnQjtTQUNsQyxDQUFDOzs7Ozs7Ozs7OztRQWNLLE9BQUUsR0FBRyxhQUFhLE9BQU8sRUFBRSxFQUFFLENBQUM7Ozs7Ozs7OztRQVc5QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7Ozs7Ozs7OztRQVdsRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7Ozs7Ozs7OztRQVdoRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7Ozs7Ozs7OztRQVdqRCxhQUFRLEdBQUcsSUFBSSxZ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QixDQUFDO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE9wdGlvbmFsLFxuICAgIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneE5hdmlnYXRpb25TZXJ2aWNlLCBJVG9nZ2xlVmlldyB9IGZyb20gJy4uL2NvcmUvbmF2aWdhdGlvbic7XG5cbmxldCBORVhUX0lEID0gMDtcbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgVG9hc3QqKiAtXG4gKiBbRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly93d3cuaW5mcmFnaXN0aWNzLmNvbS9wcm9kdWN0cy9pZ25pdGUtdWktYW5ndWxhci9hbmd1bGFyL2NvbXBvbmVudHMvdG9hc3QuaHRtbClcbiAqXG4gKiBUaGUgSWduaXRlIFVJIFRvYXN0IHByb3ZpZGVzIGluZm9ybWF0aW9uIGFuZCB3YXJuaW5nIG1lc3NhZ2VzIHRoYXQgYXJlIG5vbi1pbnRlcmFjdGl2ZSBhbmQgY2Fubm90XG4gKiBiZSBkaXNtaXNzZWQgYnkgdGhlIHVzZXIuIFRvYXN0cyBjYW4gYmUgZGlzcGxheWVkIGF0IHRoZSBib3R0b20sIG1pZGRsZSwgb3IgdG9wIG9mIHRoZSBwYWdlLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIChjbGljayk9XCJ0b2FzdC5zaG93KClcIj5TaG93IG5vdGlmaWNhdGlvbjwvYnV0dG9uPlxuICogPGlneC10b2FzdCAjdG9hc3RcbiAqICAgICAgICAgICBtZXNzYWdlPVwiTm90aWZpY2F0aW9uIGRpc3BsYXllZFwiXG4gKiAgICAgICAgICAgZGlzcGxheVRpbWU9XCIxMDAwXCI+XG4gKiA8L2lneC10b2FzdD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2FuaW1hdGUnLCBbXG4gICAgICAgICAgICBzdGF0ZSgnc2hvdycsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHNob3cnLCBhbmltYXRlKCcuMjBzIGVhc2UnKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdzaG93ID0+IConLCBhbmltYXRlKCcuNDBzIGVhc2Utb3V0JykpXG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBzZWxlY3RvcjogJ2lneC10b2FzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0b2FzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIElneFRvYXN0Q29tcG9uZW50IGltcGxlbWVudHMgSVRvZ2dsZVZpZXcsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhdmFpbGFibGUgQ1NTIGNsYXNzZXMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0b2FzdENsYXNzZXMgPSAgdGhpcy50b2FzdC5DU1NfQ0xBU1NFUztcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VG9hc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgQ1NTX0NMQVNTRVMgPSB7XG4gICAgICAgIElHWF9UT0FTVF9CT1RUT006ICdpZ3gtdG9hc3QtLWJvdHRvbScsXG4gICAgICAgIElHWF9UT0FTVF9NSURETEU6ICdpZ3gtdG9hc3QtLW1pZGRsZScsXG4gICAgICAgIElHWF9UT0FTVF9UT1A6ICdpZ3gtdG9hc3QtLXRvcCdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgaWRgIG9mIHRoZSB0b2FzdC5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGlkYCB3aWxsIGhhdmUgdmFsdWUgYFwiaWd4LXRvYXN0LTBcImAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtdG9hc3QgaWQgPSBcIm15LWZpcnN0LXRvYXN0XCI+PC9pZ3gtdG9hc3Q+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0b2FzdElkID0gdGhpcy50b2FzdC5pZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC10b2FzdC0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgcHJpb3IgdGhlIHRvYXN0IGlzIHNob3duLlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZSB0byB0aGUgYElneFRvYXN0Q29tcG9uZW50YCBhcyBldmVudCBhcmd1bWVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10b2FzdCAob25TaG93aW5nKSA9IFwib25TaG93aW5nKCRldmVudClcIj48L2lneC10b2FzdD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VG9hc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TaG93aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hUb2FzdENvbXBvbmVudD4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvYXN0IGlzIHNob3duLlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZSB0byB0aGUgYElneFRvYXN0Q29tcG9uZW50YCBhcyBldmVudCBhcmd1bWVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10b2FzdCAob25TaG93bikgPSBcIm9uU2hvd24oJGV2ZW50KVwiPjwvaWd4LXRvYXN0PlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUb2FzdENvbXBvbmVudFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblNob3duID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hUb2FzdENvbXBvbmVudD4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHByaW9yIHRoZSB0b2FzdCBpcyBoaWRkZW4uXG4gICAgICogUHJvdmlkZXMgcmVmZXJlbmNlIHRvIHRoZSBgSWd4VG9hc3RDb21wb25lbnRgIGFzIGV2ZW50IGFyZ3VtZW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRvYXN0IChvbkhpZGluZykgPSBcIm9uSGlkaW5nKCRldmVudClcIj48L2lneC10b2FzdD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VG9hc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25IaWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPElneFRvYXN0Q29tcG9uZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvYXN0IGlzIGhpZGRlbi5cbiAgICAgKiAgUHJvdmlkZXMgcmVmZXJlbmNlIHRvIHRoZSBgSWd4VG9hc3RDb21wb25lbnRgIGFzIGV2ZW50IGFyZ3VtZW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRvYXN0IChvbkhpZGRlbikgPSBcIm9uSGlkZGVuKCRldmVudClcIj48L2lneC10b2FzdD5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VG9hc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25IaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyPElneFRvYXN0Q29tcG9uZW50PigpO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYHJvbGVgIGF0dHJpYnV0ZS5cbiAgICAgKiBJZiBub3Qgc2V0LCBgcm9sZWAgd2lsbCBoYXZlIHZhbHVlIGBcImFsZXJ0XCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRvYXN0IFtyb2xlXSA9IFwiJ25vdGlmeSdcIj48L2lneC10b2FzdD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHRvYXN0Um9sZSA9IHRoaXMudG9hc3Qucm9sZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VG9hc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByb2xlID0gJ2FsZXJ0JztcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgd2hldGhlciB0aGUgdG9hc3Qgd2lsbCBiZSBoaWRkZW4gYWZ0ZXIgdGhlIGBkaXNwbGF5VGltZWAgaXMgb3Zlci5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGB0cnVlYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC10b2FzdCBbYXV0b0hpZGVdID0gXCJmYWxzZVwiPjwvaWd4LXRvYXN0PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgYXV0b0hpZGUgPSB0aGlzLnRvYXN0LmF1dG9IaWRlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUb2FzdENvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGF1dG9IaWRlID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgZHVyYXRpb24gb2YgdGltZSBzcGFuKGluIG1pbGxpc2Vjb25kcykgd2hpY2ggdGhlIHRvYXN0IHdpbGwgYmUgdmlzaWJsZVxuICAgICAqIGFmdGVyIGl0IGlzIGJlaW5nIHNob3duLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYDQwMDBgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRvYXN0IFtkaXNwbGF5VGltZV0gPSBcIjI1MDBcIj48L2lneC10b2FzdD5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGRpc3BsYXlUaW1lID0gdGhpcy50b2FzdC5kaXNwbGF5VGltZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VG9hc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNwbGF5VGltZSA9IDQwMDA7XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzL0Rpc2FibGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0b2FzdC5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGlzVmlzaWJsZWAgYXR0cmlidXRlIHdpbGwgaGF2ZSB2YWx1ZSBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRvYXN0IFtpc1Zpc2libGVdID0gXCJ0cnVlXCI+PC9pZ3gtdG9hc3Q+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1Zpc2libGUgPSB0aGlzLnRvYXN0LmlzVmlzaWJsZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VG9hc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1Zpc2libGUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgbWVzc2FnZSB0aGF0IHdpbGwgYmUgc2hvd24gYnkgdGhlIHRvYXN0LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRvYXN0IFttZXNzYWdlXSA9IFwiTm90aWZpY2F0aW9uXCI+PC9pZ3gtdG9hc3Q+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCB0b2FzdE1lc3NhZ2UgPSB0aGlzLnRvYXN0Lm1lc3NhZ2U7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRvYXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgdG9hc3QuXG4gICAgICogSWYgbm90IHNldCwgdGhlIGBwb3NpdGlvbmAgYXR0cmlidXRlIHdpbGwgaGF2ZSB2YWx1ZSBgSWd4VG9hc3RQb3NpdGlvbi5Cb3R0b21gLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXRvYXN0IFtwb3NpdGlvbl0gPSBcInRvcFwiPjwvaWd4LXRvYXN0PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgdG9hc3RQb3NpdGlvbiA9IHRoaXMudG9hc3QucG9zaXRpb247XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneFRvYXN0Q29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcG9zaXRpb246IElneFRvYXN0UG9zaXRpb24gPSBJZ3hUb2FzdFBvc2l0aW9uLkJvdHRvbTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG5hdGl2ZUVsZW1lbnQgb2YgdGhlIHRvYXN0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgbmF0aXZlRWxlbWVudCA9IHRoaXMudG9hc3QuZWxlbWVudDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VG9hc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSB0aW1lb3V0SWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5hdlNlcnZpY2U6IElneE5hdmlnYXRpb25TZXJ2aWNlKSB7IH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIHRoZSB0b2FzdC5cbiAgICAgKiBJZiBgYXV0b0hpZGVgIGlzIGVuYWJsZWQsIHRoZSB0b2FzdCB3aWxsIGhpZGUgYWZ0ZXIgYGRpc3BsYXlUaW1lYCBpcyBvdmVyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnRvYXN0LnNob3coKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VG9hc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgIHRoaXMub25TaG93aW5nLmVtaXQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5hdXRvSGlkZSkge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuZGlzcGxheVRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblNob3duLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZXMgdGhlIHRvYXN0LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnRvYXN0LmhpZGUoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VG9hc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkhpZGluZy5lbWl0KHRoaXMpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uSGlkZGVuLmVtaXQodGhpcyk7XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcHMgQHNob3coKSBtZXRob2QgZHVlIEBJVG9nZ2xlVmlldyBpbnRlcmZhY2UgaW1wbGVtZW50YXRpb24uXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvcGVuKCkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBAaGlkZSgpIG1ldGhvZCBkdWUgQElUb2dnbGVWaWV3IGludGVyZmFjZSBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSB2aXNpYmxlIHN0YXRlIG9mIHRoZSB0b2FzdC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy50b2FzdC50b2dnbGUoKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4VG9hc3RDb21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGNsYXNzIG5hbWUgb2YgdGhlIHRvYXN0IGJhc2VkIG9uIHRoZSBgcG9zaXRpb25gIHZhbHVlLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgY2xhc3NOYW1lID0gIHRoaXMudG9hc3QubWFwUG9zaXRpb25Ub0NsYXNzTmFtZSgpO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hUb2FzdENvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBtYXBQb3NpdGlvblRvQ2xhc3NOYW1lKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSBJZ3hUb2FzdFBvc2l0aW9uLlRvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ1NTX0NMQVNTRVMuSUdYX1RPQVNUX1RPUDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSBJZ3hUb2FzdFBvc2l0aW9uLk1pZGRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ1NTX0NMQVNTRVMuSUdYX1RPQVNUX01JRERMRTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSBJZ3hUb2FzdFBvc2l0aW9uLkJvdHRvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ1NTX0NMQVNTRVMuSUdYX1RPQVNUX0JPVFRPTTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5hdlNlcnZpY2UgJiYgdGhpcy5pZCkge1xuICAgICAgICAgICAgdGhpcy5uYXZTZXJ2aWNlLmFkZCh0aGlzLmlkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLm5hdlNlcnZpY2UgJiYgdGhpcy5pZCkge1xuICAgICAgICAgICAgdGhpcy5uYXZTZXJ2aWNlLnJlbW92ZSh0aGlzLmlkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBFbnVtZXJhdGlvbiBmb3IgdG9hc3QgcG9zaXRpb25cbiAqIENhbiBiZTpcbiAqIEJvdHRvbVxuICogTWlkZGxlXG4gKiBUb3BcbiAqL1xuZXhwb3J0IGVudW0gSWd4VG9hc3RQb3NpdGlvbiB7XG4gICAgQm90dG9tLFxuICAgIE1pZGRsZSxcbiAgICBUb3Bcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4VG9hc3RDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtJZ3hUb2FzdENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4VG9hc3RNb2R1bGUgeyB9XG4iXX0=