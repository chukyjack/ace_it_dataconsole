/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
var MdbOptionComponent = /** @class */ (function () {
    function MdbOptionComponent(el) {
        this.el = el;
        this.clicked = false;
        this.clicked = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbOptionComponent.prototype.handleMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var text = this.value || event.target.text || event.target.textContent || event.target.value;
        this.selectedItem = { text: text.toString().trim(), element: this };
        this.clicked = true;
    };
    MdbOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-option',
                    template: "<div class=\"completer-row\" (mousedown)=\"handleMouseDown($event)\" mdbAutoCompleterOption>\n  <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MdbOptionComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MdbOptionComponent.propDecorators = {
        value: [{ type: Input }]
    };
    return MdbOptionComponent;
}());
export { MdbOptionComponent };
if (false) {
    /** @type {?} */
    MdbOptionComponent.prototype.value;
    /** @type {?} */
    MdbOptionComponent.prototype.clicked;
    /** @type {?} */
    MdbOptionComponent.prototype.selectedItem;
    /** @type {?} */
    MdbOptionComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG8tY29tcGxldGVyL2NvbXBvbmVudHMvbWRiLW9wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUczRDtJQVdFLDRCQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUhqQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBSWQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCw0Q0FBZTs7OztJQUFmLFVBQWdCLEtBQVU7O1lBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztRQUM5RixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsK0lBQXdDO2lCQUV6Qzs7OztnQkFQa0IsVUFBVTs7O3dCQVUxQixLQUFLOztJQWNSLHlCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FmWSxrQkFBa0I7OztJQUM3QixtQ0FBdUI7O0lBQ3ZCLHFDQUFnQjs7SUFDaEIsMENBQThCOztJQUVsQixnQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJU2VsZWN0ZWRPcHRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvc2VsZWN0ZWQtb3B0aW9uLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ21kYi1vcHRpb24uY29tcG9uZW50Lmh0bWwnXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBNZGJPcHRpb25Db21wb25lbnQge1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBjbGlja2VkID0gZmFsc2U7XG4gIHNlbGVjdGVkSXRlbTogSVNlbGVjdGVkT3B0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlTW91c2VEb3duKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy52YWx1ZSB8fCBldmVudC50YXJnZXQudGV4dCB8fCBldmVudC50YXJnZXQudGV4dENvbnRlbnQgfHwgZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0ge3RleHQ6IHRleHQudG9TdHJpbmcoKS50cmltKCksIGVsZW1lbnQ6IHRoaXN9O1xuICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XG4gIH1cblxufVxuIl19