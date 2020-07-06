/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, TemplateRef, ElementRef, } from '@angular/core';
import { FormGroup } from '@angular/forms';
var MdbStepComponent = /** @class */ (function () {
    function MdbStepComponent(el) {
        this.el = el;
        this.editable = true;
        this._isActive = false;
    }
    Object.defineProperty(MdbStepComponent.prototype, "isDone", {
        get: /**
         * @return {?}
         */
        function () { return this._isDone; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbStepComponent.prototype, "isWrong", {
        get: /**
         * @return {?}
         */
        function () { return this._isWrong; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isWrong = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbStepComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () { return this._isActive; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isActive = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    MdbStepComponent.prototype._removeClasses = /**
     * @private
     * @return {?}
     */
    function () {
        this.isActive = false;
        this.isDone = false;
        this.isWrong = false;
    };
    /**
     * @return {?}
     */
    MdbStepComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        if (this.stepForm) {
            this.stepForm.reset();
        }
        this._removeClasses();
    };
    /**
     * @return {?}
     */
    MdbStepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    MdbStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-step',
                    exportAs: 'mdbStep',
                    template: '<ng-template><ng-content></ng-content></ng-template>'
                }] }
    ];
    /** @nocollapse */
    MdbStepComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MdbStepComponent.propDecorators = {
        content: [{ type: ViewChild, args: [TemplateRef,] }],
        editable: [{ type: Input }],
        name: [{ type: Input }],
        label: [{ type: Input }],
        stepForm: [{ type: Input }]
    };
    return MdbStepComponent;
}());
export { MdbStepComponent };
if (false) {
    /** @type {?} */
    MdbStepComponent.prototype.content;
    /** @type {?} */
    MdbStepComponent.prototype.editable;
    /** @type {?} */
    MdbStepComponent.prototype.name;
    /** @type {?} */
    MdbStepComponent.prototype.label;
    /** @type {?} */
    MdbStepComponent.prototype.stepForm;
    /**
     * @type {?}
     * @private
     */
    MdbStepComponent.prototype._isDone;
    /**
     * @type {?}
     * @private
     */
    MdbStepComponent.prototype._isWrong;
    /**
     * @type {?}
     * @private
     */
    MdbStepComponent.prototype._isActive;
    /** @type {?} */
    MdbStepComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxHQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQVlFLDBCQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUx4QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBdUJqQixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBbEJVLENBQUM7SUFFckMsc0JBQUksb0NBQU07Ozs7UUFBVixjQUFlLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQ3JDLFVBQVcsS0FBYztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FIb0M7SUFNckMsc0JBQUkscUNBQU87Ozs7UUFBWCxjQUFnQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7OztRQUN2QyxVQUFZLEtBQWM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BSHNDO0lBTXZDLHNCQUFJLHNDQUFROzs7O1FBQVosY0FBaUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDekMsVUFBYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUh3Qzs7Ozs7SUFNakMseUNBQWM7Ozs7SUFBdEI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsZ0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtJQUVBLENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsc0RBQXNEO2lCQUNqRTs7OztnQkFUQyxVQUFVOzs7MEJBV1QsU0FBUyxTQUFDLFdBQVc7MkJBQ3JCLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBc0NSLHVCQUFDO0NBQUEsQUFoREQsSUFnREM7U0EzQ1ksZ0JBQWdCOzs7SUFDM0IsbUNBQWtEOztJQUNsRCxvQ0FBeUI7O0lBQ3pCLGdDQUFzQjs7SUFDdEIsaUNBQXVCOztJQUN2QixvQ0FBNkI7Ozs7O0lBUTdCLG1DQUF5Qjs7Ozs7SUFNekIsb0NBQTBCOzs7OztJQU0xQixxQ0FBMEI7O0lBbEJkLDhCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zdGVwJyxcbiAgZXhwb3J0QXM6ICdtZGJTdGVwJyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGVkaXRhYmxlID0gdHJ1ZTtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBzdGVwRm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge31cblxuICBnZXQgaXNEb25lKCkgeyByZXR1cm4gdGhpcy5faXNEb25lOyB9XG4gIHNldCBpc0RvbmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0RvbmUgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9pc0RvbmU6IGJvb2xlYW47XG5cbiAgZ2V0IGlzV3JvbmcoKSB7IHJldHVybiB0aGlzLl9pc1dyb25nOyB9XG4gIHNldCBpc1dyb25nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNXcm9uZyA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2lzV3Jvbmc6IGJvb2xlYW47XG5cbiAgZ2V0IGlzQWN0aXZlKCkgeyByZXR1cm4gdGhpcy5faXNBY3RpdmU7IH1cbiAgc2V0IGlzQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNBY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3JlbW92ZUNsYXNzZXMoKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XG4gICAgdGhpcy5pc1dyb25nID0gZmFsc2U7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy5zdGVwRm9ybSkge1xuICAgICAgdGhpcy5zdGVwRm9ybS5yZXNldCgpO1xuICAgIH1cbiAgICB0aGlzLl9yZW1vdmVDbGFzc2VzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG59XG4iXX0=