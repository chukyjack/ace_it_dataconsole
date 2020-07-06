/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Host, HostListener, Input, Renderer2 } from '@angular/core';
import { MdbDropdownDirective, CtrRowItem } from './dropdown.directive';
var MdbRowDirective = /** @class */ (function () {
    function MdbRowDirective(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
    };
    Object.defineProperty(MdbRowDirective.prototype, "mdbRow", {
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this._rowIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbRowDirective.prototype, "dataItem", {
        set: /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.dropdown.onSelected(this._item);
    };
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        this.dropdown.highlightRow(this._rowIndex);
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    MdbRowDirective.prototype.setHighlighted = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        this.selected = selected;
        if (this.selected) {
            this.renderer.addClass(this.el.nativeElement, 'completer-selected-row');
        }
        else if (!this.selected) {
            this.renderer.removeClass(this.el.nativeElement, 'completer-selected-row');
        }
    };
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.getNativeElement = /**
     * @return {?}
     */
    function () {
        return this.el.nativeElement;
    };
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.getDataItem = /**
     * @return {?}
     */
    function () {
        return this._item;
    };
    MdbRowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbRow]',
                },] }
    ];
    /** @nocollapse */
    MdbRowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: MdbDropdownDirective, decorators: [{ type: Host }] }
    ]; };
    MdbRowDirective.propDecorators = {
        mdbRow: [{ type: Input }],
        dataItem: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }],
        onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }]
    };
    return MdbRowDirective;
}());
export { MdbRowDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MdbRowDirective.prototype.selected;
    /**
     * @type {?}
     * @private
     */
    MdbRowDirective.prototype._rowIndex;
    /**
     * @type {?}
     * @private
     */
    MdbRowDirective.prototype._item;
    /**
     * @type {?}
     * @private
     */
    MdbRowDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbRowDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbRowDirective.prototype.dropdown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2RpcmVjdGl2ZXMvcm93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR3BHLE9BQU8sRUFBRSxvQkFBb0IsRUFBaUIsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdkY7SUFTRSx5QkFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQWtCLFFBQThCO1FBQTNGLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQWtCLGFBQVEsR0FBUixRQUFRLENBQXNCO1FBSnZHLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFJMEYsQ0FBQzs7OztJQUU3RyxrQ0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELHNCQUNJLG1DQUFNOzs7OztRQURWLFVBQ1csS0FBYTtZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHFDQUFROzs7OztRQURaLFVBQ2EsSUFBbUI7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7Ozs7SUFFNkIsaUNBQU87OztJQUFyQztRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRWtDLHNDQUFZOzs7SUFBL0M7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFTSx3Q0FBYzs7OztJQUFyQixVQUFzQixRQUFpQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztTQUN6RTthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDNUU7SUFDSCxDQUFDOzs7O0lBRU0sMENBQWdCOzs7SUFBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFTSxxQ0FBVzs7O0lBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQVBtQixVQUFVO2dCQUE2QixTQUFTO2dCQUczRCxvQkFBb0IsdUJBV3VDLElBQUk7Ozt5QkFNckUsS0FBSzsyQkFLTCxLQUFLOzBCQUtMLFlBQVksU0FBQyxPQUFPOytCQUlwQixZQUFZLFNBQUMsWUFBWTs7SUFvQjVCLHNCQUFDO0NBQUEsQUFqREQsSUFpREM7U0E5Q1ksZUFBZTs7Ozs7O0lBRTFCLG1DQUF5Qjs7Ozs7SUFDekIsb0NBQTBCOzs7OztJQUMxQixnQ0FBNkI7Ozs7O0lBRWpCLDZCQUFzQjs7Ozs7SUFBRSxtQ0FBMkI7Ozs7O0lBQUUsbUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBIb3N0TGlzdGVuZXIsIElucHV0LCBSZW5kZXJlcjIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21wbGV0ZXJJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wbGV0ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWRiRHJvcGRvd25EaXJlY3RpdmUsIEN0clJvd0VsZW1lbnQsIEN0clJvd0l0ZW0gfSBmcm9tICcuL2Ryb3Bkb3duLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJSb3ddJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiUm93RGlyZWN0aXZlIGltcGxlbWVudHMgQ3RyUm93RWxlbWVudCwgT25Jbml0IHtcblxuICBwcml2YXRlIHNlbGVjdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3Jvd0luZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgX2l0ZW06IENvbXBsZXRlckl0ZW07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASG9zdCgpIHByaXZhdGUgZHJvcGRvd246IE1kYkRyb3Bkb3duRGlyZWN0aXZlKSB7IH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kcm9wZG93bi5yZWdpc3RlclJvdyhuZXcgQ3RyUm93SXRlbSh0aGlzLCB0aGlzLl9yb3dJbmRleCkpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1kYlJvdyhpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcm93SW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhSXRlbShpdGVtOiBDb21wbGV0ZXJJdGVtKSB7XG4gICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIHB1YmxpYyBvbkNsaWNrKCkge1xuICAgIHRoaXMuZHJvcGRvd24ub25TZWxlY3RlZCh0aGlzLl9pdGVtKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBwdWJsaWMgb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMuZHJvcGRvd24uaGlnaGxpZ2h0Um93KHRoaXMuX3Jvd0luZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRIaWdobGlnaHRlZChzZWxlY3RlZDogYm9vbGVhbikge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdjb21wbGV0ZXItc2VsZWN0ZWQtcm93Jyk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdjb21wbGV0ZXItc2VsZWN0ZWQtcm93Jyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldE5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbTtcbiAgfVxufVxuIl19