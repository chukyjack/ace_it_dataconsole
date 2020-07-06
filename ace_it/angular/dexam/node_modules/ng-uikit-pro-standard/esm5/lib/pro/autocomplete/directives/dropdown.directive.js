/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Host, HostListener } from '@angular/core';
import { MdbCompleterDirective } from './completer.directive';
/**
 * @record
 */
export function CtrRowElement() { }
if (false) {
    /**
     * @param {?} selected
     * @return {?}
     */
    CtrRowElement.prototype.setHighlighted = function (selected) { };
    /**
     * @return {?}
     */
    CtrRowElement.prototype.getNativeElement = function () { };
    /**
     * @return {?}
     */
    CtrRowElement.prototype.getDataItem = function () { };
}
var CtrRowItem = /** @class */ (function () {
    function CtrRowItem(row, index) {
        this.row = row;
        this.index = index;
    }
    return CtrRowItem;
}());
export { CtrRowItem };
if (false) {
    /** @type {?} */
    CtrRowItem.prototype.row;
    /** @type {?} */
    CtrRowItem.prototype.index;
}
var MdbDropdownDirective = /** @class */ (function () {
    function MdbDropdownDirective(completer, el) {
        this.completer = completer;
        this.el = el;
        this.setToNullValue = null;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === 'auto';
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.completer.registerDropdown(null);
        this.completer.registerDropdown(this.setToNullValue);
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var autoHighlightIndex = this.completer.autoHighlightIndex;
        if (autoHighlightIndex) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.highlightRow(autoHighlightIndex);
            }), 0);
        }
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.onMouseDown = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Support for canceling blur on IE (issue #158)
        this.completer.cancelBlur(true);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.completer.cancelBlur(false);
        }), 0);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    MdbDropdownDirective.prototype.registerRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.rows.push(row);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbDropdownDirective.prototype.highlightRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var highlighted = this.rows.find((/**
         * @param {?} row
         * @return {?}
         */
        function (row) { return row.index === index; }));
        if (index < 0) {
            if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
            }
            this.currHighlighted = undefined;
            this.completer.onHighlighted(this.setToNullValue);
            return;
        }
        if (!highlighted) {
            return;
        }
        if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
        }
        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());
        if (this.isScrollOn && this.currHighlighted) {
            /** @type {?} */
            var rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                /** @type {?} */
                var row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row)
                        < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top
                            // + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10)));
                            + parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop)), 10)));
                    }
                }
            }
        }
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.rows = [];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MdbDropdownDirective.prototype.onSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.completer.onSelected(item);
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.selectCurrent = /**
     * @return {?}
     */
    function () {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.nextRow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.prevRow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    };
    /**
     * @private
     * @param {?} offset
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownScrollTopTo = /**
     * @private
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    };
    /**
     * @private
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownRowTop = /**
     * @private
     * @return {?}
     */
    function () {
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                // parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
                parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop)), 10));
    };
    /**
     * @private
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return this.el.nativeElement.getBoundingClientRect().top +
            // parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
            parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).maxHeight)), 10);
    };
    /**
     * @private
     * @param {?} row
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownRowOffsetHeight = /**
     * @private
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var css = getComputedStyle(row);
        return row.offsetHeight +
            // parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
            parseInt((/** @type {?} */ (css.marginTop)), 10) + parseInt((/** @type {?} */ (css.marginBottom)), 10);
    };
    MdbDropdownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbAutocompleteDropdown]',
                },] }
    ];
    /** @nocollapse */
    MdbDropdownDirective.ctorParameters = function () { return [
        { type: MdbCompleterDirective, decorators: [{ type: Host }] },
        { type: ElementRef }
    ]; };
    MdbDropdownDirective.propDecorators = {
        onMouseDown: [{ type: HostListener, args: ['mousedown',] }]
    };
    return MdbDropdownDirective;
}());
export { MdbDropdownDirective };
if (false) {
    /** @type {?} */
    MdbDropdownDirective.prototype.setToNullValue;
    /**
     * @type {?}
     * @private
     */
    MdbDropdownDirective.prototype.rows;
    /**
     * @type {?}
     * @private
     */
    MdbDropdownDirective.prototype.currHighlighted;
    /**
     * @type {?}
     * @private
     */
    MdbDropdownDirective.prototype.isScrollOn;
    /**
     * @type {?}
     * @private
     */
    MdbDropdownDirective.prototype.completer;
    /**
     * @type {?}
     * @private
     */
    MdbDropdownDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hdXRvY29tcGxldGUvZGlyZWN0aXZlcy9kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUc1RyxPQUFPLEVBQUUscUJBQXFCLEVBQXFCLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHakYsbUNBSUM7Ozs7OztJQUhDLGlFQUF3Qzs7OztJQUN4QywyREFBd0I7Ozs7SUFDeEIsc0RBQTZCOztBQUcvQjtJQUNFLG9CQUFtQixHQUFrQixFQUFTLEtBQWE7UUFBeEMsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7SUFBSSxDQUFDO0lBQ2xFLGlCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEYSx5QkFBeUI7O0lBQUUsMkJBQW9COztBQUc3RDtJQVlFLDhCQUE2QixTQUFnQyxFQUFVLEVBQWM7UUFBeEQsY0FBUyxHQUFULFNBQVMsQ0FBdUI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBUDlFLG1CQUFjLEdBQVEsSUFBSSxDQUFDO1FBQzFCLFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBTzlCLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVNLHVDQUFROzs7SUFBZjs7WUFDUSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDO0lBQzlELENBQUM7Ozs7SUFFTSww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QUFDO0lBQzNFLENBQUM7Ozs7OztJQUVPLHNEQUF1Qjs7Ozs7SUFBL0IsVUFBZ0MsR0FBUTs7WUFDaEMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztRQUNqQyxPQUFPLEdBQUcsQ0FBQyxZQUFZO1lBQ3JCLGdFQUFnRTtZQUNoRSxRQUFRLENBQUMsbUJBQUEsR0FBRyxDQUFDLFNBQVMsRUFBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxtQkFBQSxHQUFHLENBQUMsWUFBWSxFQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Z0JBeEpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7OztnQkFmUSxxQkFBcUIsdUJBeUJkLElBQUk7Z0JBNUJlLFVBQVU7Ozs4QkFzRDFDLFlBQVksU0FBQyxXQUFXOztJQW1IM0IsMkJBQUM7Q0FBQSxBQXpKRCxJQXlKQztTQXRKWSxvQkFBb0I7OztJQUUvQiw4Q0FBa0M7Ozs7O0lBQ2xDLG9DQUFnQzs7Ozs7SUFFaEMsK0NBQTBDOzs7OztJQUUxQywwQ0FBa0M7Ozs7O0lBRXJCLHlDQUFnRDs7Ozs7SUFBRSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcGxldGVySXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcGxldGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE1kYkNvbXBsZXRlckRpcmVjdGl2ZSwgQ29tcGxldGVyRHJvcGRvd24gfSBmcm9tICcuL2NvbXBsZXRlci5kaXJlY3RpdmUnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3RyUm93RWxlbWVudCB7XG4gIHNldEhpZ2hsaWdodGVkKHNlbGVjdGVkOiBib29sZWFuKTogdm9pZDtcbiAgZ2V0TmF0aXZlRWxlbWVudCgpOiBhbnk7XG4gIGdldERhdGFJdGVtKCk6IENvbXBsZXRlckl0ZW07XG59XG5cbmV4cG9ydCBjbGFzcyBDdHJSb3dJdGVtIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJvdzogQ3RyUm93RWxlbWVudCwgcHVibGljIGluZGV4OiBudW1iZXIpIHsgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiQXV0b2NvbXBsZXRlRHJvcGRvd25dJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiRHJvcGRvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBDb21wbGV0ZXJEcm9wZG93biwgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIHB1YmxpYyBzZXRUb051bGxWYWx1ZTogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSByb3dzOiBDdHJSb3dJdGVtW10gPSBbXTtcbiAgLy8gcHJpdmF0ZSBjdXJySGlnaGxpZ2h0ZWQ6IEN0clJvd0l0ZW07XG4gIHByaXZhdGUgY3VyckhpZ2hsaWdodGVkOiBDdHJSb3dJdGVtIHwgYW55O1xuICAvLyBwcml2YXRlIGlzU2Nyb2xsT246IGJvb2xlYW47XG4gIHByaXZhdGUgaXNTY3JvbGxPbjogYm9vbGVhbiB8IGFueTtcblxuICBjb25zdHJ1Y3RvciggQEhvc3QoKSBwcml2YXRlIGNvbXBsZXRlcjogTWRiQ29tcGxldGVyRGlyZWN0aXZlLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5jb21wbGV0ZXIucmVnaXN0ZXJEcm9wZG93bih0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5pc1Njcm9sbE9uID0gY3NzLm1heEhlaWdodCAmJiBjc3Mub3ZlcmZsb3dZID09PSAnYXV0byc7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gdGhpcy5jb21wbGV0ZXIucmVnaXN0ZXJEcm9wZG93bihudWxsKTtcbiAgICB0aGlzLmNvbXBsZXRlci5yZWdpc3RlckRyb3Bkb3duKHRoaXMuc2V0VG9OdWxsVmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBhdXRvSGlnaGxpZ2h0SW5kZXggPSB0aGlzLmNvbXBsZXRlci5hdXRvSGlnaGxpZ2h0SW5kZXg7XG4gICAgaWYgKGF1dG9IaWdobGlnaHRJbmRleCkge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0Um93KGF1dG9IaWdobGlnaHRJbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJykgcHVibGljIG9uTW91c2VEb3duKCkge1xuICAgIC8vIFN1cHBvcnQgZm9yIGNhbmNlbGluZyBibHVyIG9uIElFIChpc3N1ZSAjMTU4KVxuICAgIHRoaXMuY29tcGxldGVyLmNhbmNlbEJsdXIodHJ1ZSk7XG4gICAgc2V0VGltZW91dChcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZXIuY2FuY2VsQmx1cihmYWxzZSk7XG4gICAgICB9LFxuICAgICAgMFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJSb3cocm93OiBDdHJSb3dJdGVtKSB7XG4gICAgdGhpcy5yb3dzLnB1c2gocm93KTtcbiAgfVxuXG4gIHB1YmxpYyBoaWdobGlnaHRSb3coaW5kZXg6IG51bWJlcik6IGFueSB7XG5cbiAgICBjb25zdCBoaWdobGlnaHRlZCA9IHRoaXMucm93cy5maW5kKHJvdyA9PiByb3cuaW5kZXggPT09IGluZGV4KTtcblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGlmICh0aGlzLmN1cnJIaWdobGlnaHRlZCkge1xuICAgICAgICB0aGlzLmN1cnJIaWdobGlnaHRlZC5yb3cuc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJySGlnaGxpZ2h0ZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmNvbXBsZXRlci5vbkhpZ2hsaWdodGVkKHRoaXMuc2V0VG9OdWxsVmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghaGlnaGxpZ2h0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jdXJySGlnaGxpZ2h0ZWQpIHtcbiAgICAgIHRoaXMuY3VyckhpZ2hsaWdodGVkLnJvdy5zZXRIaWdobGlnaHRlZChmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJySGlnaGxpZ2h0ZWQgPSBoaWdobGlnaHRlZDtcbiAgICB0aGlzLmN1cnJIaWdobGlnaHRlZC5yb3cuc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XG4gICAgdGhpcy5jb21wbGV0ZXIub25IaWdobGlnaHRlZCh0aGlzLmN1cnJIaWdobGlnaHRlZC5yb3cuZ2V0RGF0YUl0ZW0oKSk7XG5cbiAgICBpZiAodGhpcy5pc1Njcm9sbE9uICYmIHRoaXMuY3VyckhpZ2hsaWdodGVkKSB7XG4gICAgICBjb25zdCByb3dUb3AgPSB0aGlzLmRyb3Bkb3duUm93VG9wKCk7XG4gICAgICBpZiAocm93VG9wIDwgMCkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duU2Nyb2xsVG9wVG8ocm93VG9wIC0gMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLmN1cnJIaWdobGlnaHRlZC5yb3cuZ2V0TmF0aXZlRWxlbWVudCgpO1xuICAgICAgICBpZiAodGhpcy5kcm9wZG93bkhlaWdodCgpIDwgcm93LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSkge1xuICAgICAgICAgIHRoaXMuZHJvcGRvd25TY3JvbGxUb3BUbyh0aGlzLmRyb3Bkb3duUm93T2Zmc2V0SGVpZ2h0KHJvdykpO1xuICAgICAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gdGhpcy5kcm9wZG93blJvd09mZnNldEhlaWdodChyb3cpXG4gICAgICAgICAgICA8IHJvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TY3JvbGxUb3BUbyhyb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gKHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICAgICAgICAgIC8vICsgcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnBhZGRpbmdUb3AsIDEwKSkpO1xuICAgICAgICAgICAgKyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCkucGFkZGluZ1RvcCBhcyBhbnksIDEwKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICB0aGlzLnJvd3MgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdGVkKGl0ZW06IENvbXBsZXRlckl0ZW0pIHtcbiAgICB0aGlzLmNvbXBsZXRlci5vblNlbGVjdGVkKGl0ZW0pO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdEN1cnJlbnQoKSB7XG4gICAgaWYgKHRoaXMuY3VyckhpZ2hsaWdodGVkKSB7XG4gICAgICB0aGlzLm9uU2VsZWN0ZWQodGhpcy5jdXJySGlnaGxpZ2h0ZWQucm93LmdldERhdGFJdGVtKCkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMub25TZWxlY3RlZCh0aGlzLnJvd3NbMF0ucm93LmdldERhdGFJdGVtKCkpO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljIG5leHRSb3coKSB7XG4gICAgbGV0IG5leHRSb3dJbmRleCA9IDA7XG4gICAgaWYgKHRoaXMuY3VyckhpZ2hsaWdodGVkKSB7XG4gICAgICBuZXh0Um93SW5kZXggPSB0aGlzLmN1cnJIaWdobGlnaHRlZC5pbmRleCArIDE7XG4gICAgfVxuICAgIHRoaXMuaGlnaGxpZ2h0Um93KG5leHRSb3dJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgcHJldlJvdygpIHtcbiAgICBsZXQgbmV4dFJvd0luZGV4ID0gLTE7XG4gICAgaWYgKHRoaXMuY3VyckhpZ2hsaWdodGVkKSB7XG4gICAgICBuZXh0Um93SW5kZXggPSB0aGlzLmN1cnJIaWdobGlnaHRlZC5pbmRleCAtIDE7XG4gICAgfVxuICAgIHRoaXMuaGlnaGxpZ2h0Um93KG5leHRSb3dJbmRleCk7XG4gIH1cblxuICBwcml2YXRlIGRyb3Bkb3duU2Nyb2xsVG9wVG8ob2Zmc2V0OiBhbnkpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCArIG9mZnNldDtcbiAgfVxuXG4gIHByaXZhdGUgZHJvcGRvd25Sb3dUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VyckhpZ2hsaWdodGVkLnJvdy5nZXROYXRpdmVFbGVtZW50KCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC1cbiAgICAgICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICtcbiAgICAgICAgLy8gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnBhZGRpbmdUb3AsIDEwKSk7XG4gICAgICAgIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5wYWRkaW5nVG9wIGFzIGFueSwgMTApKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJvcGRvd25IZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgK1xuICAgICAgLy8gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLm1heEhlaWdodCwgMTApO1xuICAgICAgcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLm1heEhlaWdodCBhcyBhbnksIDEwKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJvcGRvd25Sb3dPZmZzZXRIZWlnaHQocm93OiBhbnkpIHtcbiAgICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKHJvdyk7XG4gICAgcmV0dXJuIHJvdy5vZmZzZXRIZWlnaHQgK1xuICAgICAgLy8gcGFyc2VJbnQoY3NzLm1hcmdpblRvcCwgMTApICsgcGFyc2VJbnQoY3NzLm1hcmdpbkJvdHRvbSwgMTApO1xuICAgICAgcGFyc2VJbnQoY3NzLm1hcmdpblRvcCBhcyBhbnksIDEwKSArIHBhcnNlSW50KGNzcy5tYXJnaW5Cb3R0b20gYXMgYW55LCAxMCk7XG4gIH1cbn1cbiJdfQ==