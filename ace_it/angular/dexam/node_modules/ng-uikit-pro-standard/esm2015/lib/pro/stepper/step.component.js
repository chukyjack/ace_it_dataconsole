/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, TemplateRef, ElementRef, } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class MdbStepComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.editable = true;
        this._isActive = false;
    }
    /**
     * @return {?}
     */
    get isDone() { return this._isDone; }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDone(value) {
        this._isDone = value;
    }
    /**
     * @return {?}
     */
    get isWrong() { return this._isWrong; }
    /**
     * @param {?} value
     * @return {?}
     */
    set isWrong(value) {
        this._isWrong = value;
    }
    /**
     * @return {?}
     */
    get isActive() { return this._isActive; }
    /**
     * @param {?} value
     * @return {?}
     */
    set isActive(value) {
        this._isActive = value;
    }
    /**
     * @private
     * @return {?}
     */
    _removeClasses() {
        this.isActive = false;
        this.isDone = false;
        this.isWrong = false;
    }
    /**
     * @return {?}
     */
    reset() {
        if (this.stepForm) {
            this.stepForm.reset();
        }
        this._removeClasses();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MdbStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-step',
                exportAs: 'mdbStep',
                template: '<ng-template><ng-content></ng-content></ng-template>'
            }] }
];
/** @nocollapse */
MdbStepComponent.ctorParameters = () => [
    { type: ElementRef }
];
MdbStepComponent.propDecorators = {
    content: [{ type: ViewChild, args: [TemplateRef,] }],
    editable: [{ type: Input }],
    name: [{ type: Input }],
    label: [{ type: Input }],
    stepForm: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxHQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBTzNCLFlBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBTHhCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUF1QmpCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFsQlUsQ0FBQzs7OztJQUVyQyxJQUFJLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7OztJQUNyQyxJQUFJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFHRCxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7OztJQUN2QyxJQUFJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFHRCxJQUFJLFFBQVEsS0FBSyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7OztJQUN6QyxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBR08sY0FBYztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxRQUFRO0lBRVIsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxzREFBc0Q7YUFDakU7Ozs7WUFUQyxVQUFVOzs7c0JBV1QsU0FBUyxTQUFDLFdBQVc7dUJBQ3JCLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFKTixtQ0FBa0Q7O0lBQ2xELG9DQUF5Qjs7SUFDekIsZ0NBQXNCOztJQUN0QixpQ0FBdUI7O0lBQ3ZCLG9DQUE2Qjs7Ozs7SUFRN0IsbUNBQXlCOzs7OztJQU16QixvQ0FBMEI7Ozs7O0lBTTFCLHFDQUEwQjs7SUFsQmQsOEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXN0ZXAnLFxuICBleHBvcnRBczogJ21kYlN0ZXAnLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgZWRpdGFibGUgPSB0cnVlO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0ZXBGb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIGdldCBpc0RvbmUoKSB7IHJldHVybiB0aGlzLl9pc0RvbmU7IH1cbiAgc2V0IGlzRG9uZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRG9uZSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2lzRG9uZTogYm9vbGVhbjtcblxuICBnZXQgaXNXcm9uZygpIHsgcmV0dXJuIHRoaXMuX2lzV3Jvbmc7IH1cbiAgc2V0IGlzV3JvbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc1dyb25nID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfaXNXcm9uZzogYm9vbGVhbjtcblxuICBnZXQgaXNBY3RpdmUoKSB7IHJldHVybiB0aGlzLl9pc0FjdGl2ZTsgfVxuICBzZXQgaXNBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2lzQWN0aXZlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlQ2xhc3NlcygpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5pc0RvbmUgPSBmYWxzZTtcbiAgICB0aGlzLmlzV3JvbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGlmICh0aGlzLnN0ZXBGb3JtKSB7XG4gICAgICB0aGlzLnN0ZXBGb3JtLnJlc2V0KCk7XG4gICAgfVxuICAgIHRoaXMuX3JlbW92ZUNsYXNzZXMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cbn1cbiJdfQ==