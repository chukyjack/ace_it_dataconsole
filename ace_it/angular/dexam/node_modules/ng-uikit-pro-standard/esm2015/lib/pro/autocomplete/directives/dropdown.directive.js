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
export class CtrRowItem {
    /**
     * @param {?} row
     * @param {?} index
     */
    constructor(row, index) {
        this.row = row;
        this.index = index;
    }
}
if (false) {
    /** @type {?} */
    CtrRowItem.prototype.row;
    /** @type {?} */
    CtrRowItem.prototype.index;
}
export class MdbDropdownDirective {
    /**
     * @param {?} completer
     * @param {?} el
     */
    constructor(completer, el) {
        this.completer = completer;
        this.el = el;
        this.setToNullValue = null;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === 'auto';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.completer.registerDropdown(null);
        this.completer.registerDropdown(this.setToNullValue);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const autoHighlightIndex = this.completer.autoHighlightIndex;
        if (autoHighlightIndex) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.highlightRow(autoHighlightIndex);
            }), 0);
        }
    }
    /**
     * @return {?}
     */
    onMouseDown() {
        // Support for canceling blur on IE (issue #158)
        this.completer.cancelBlur(true);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.completer.cancelBlur(false);
        }), 0);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    registerRow(row) {
        this.rows.push(row);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    highlightRow(index) {
        /** @type {?} */
        const highlighted = this.rows.find((/**
         * @param {?} row
         * @return {?}
         */
        row => row.index === index));
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
            const rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                /** @type {?} */
                const row = this.currHighlighted.row.getNativeElement();
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
    }
    /**
     * @return {?}
     */
    clear() {
        this.rows = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onSelected(item) {
        this.completer.onSelected(item);
    }
    /**
     * @return {?}
     */
    selectCurrent() {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    }
    /**
     * @return {?}
     */
    nextRow() {
        /** @type {?} */
        let nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    }
    /**
     * @return {?}
     */
    prevRow() {
        /** @type {?} */
        let nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    }
    /**
     * @private
     * @param {?} offset
     * @return {?}
     */
    dropdownScrollTopTo(offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    }
    /**
     * @private
     * @return {?}
     */
    dropdownRowTop() {
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                // parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
                parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop)), 10));
    }
    /**
     * @private
     * @return {?}
     */
    dropdownHeight() {
        return this.el.nativeElement.getBoundingClientRect().top +
            // parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
            parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).maxHeight)), 10);
    }
    /**
     * @private
     * @param {?} row
     * @return {?}
     */
    dropdownRowOffsetHeight(row) {
        /** @type {?} */
        const css = getComputedStyle(row);
        return row.offsetHeight +
            // parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
            parseInt((/** @type {?} */ (css.marginTop)), 10) + parseInt((/** @type {?} */ (css.marginBottom)), 10);
    }
}
MdbDropdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbAutocompleteDropdown]',
            },] }
];
/** @nocollapse */
MdbDropdownDirective.ctorParameters = () => [
    { type: MdbCompleterDirective, decorators: [{ type: Host }] },
    { type: ElementRef }
];
MdbDropdownDirective.propDecorators = {
    onMouseDown: [{ type: HostListener, args: ['mousedown',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hdXRvY29tcGxldGUvZGlyZWN0aXZlcy9kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUc1RyxPQUFPLEVBQUUscUJBQXFCLEVBQXFCLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHakYsbUNBSUM7Ozs7OztJQUhDLGlFQUF3Qzs7OztJQUN4QywyREFBd0I7Ozs7SUFDeEIsc0RBQTZCOztBQUcvQixNQUFNLE9BQU8sVUFBVTs7Ozs7SUFDckIsWUFBbUIsR0FBa0IsRUFBUyxLQUFhO1FBQXhDLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQUksQ0FBQztDQUNqRTs7O0lBRGEseUJBQXlCOztJQUFFLDJCQUFvQjs7QUFNN0QsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFTL0IsWUFBNkIsU0FBZ0MsRUFBVSxFQUFjO1FBQXhELGNBQVMsR0FBVCxTQUFTLENBQXVCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVA5RSxtQkFBYyxHQUFRLElBQUksQ0FBQztRQUMxQixTQUFJLEdBQWlCLEVBQUUsQ0FBQztRQU85QixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFTSxRQUFROztjQUNQLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUM7SUFDOUQsQ0FBQzs7OztJ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QVEsQ0FBQyxtQkFBQSxHQUFHLENBQUMsU0FBUyxFQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLG1CQUFBLEdBQUcsQ0FBQyxZQUFZLEVBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7WUF4SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7WUFmUSxxQkFBcUIsdUJBeUJkLElBQUk7WUE1QmUsVUFBVTs7OzBCQXNEMUMsWUFBWSxTQUFDLFdBQVc7Ozs7SUFqQ3pCLDhDQUFrQzs7Ozs7SUFDbEMsb0NBQWdDOzs7OztJQUVoQywrQ0FBMEM7Ozs7O0lBRTFDLDBDQUFrQzs7Ozs7SUFFckIseUNBQWdEOzs7OztJQUFFLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21wbGV0ZXJJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wbGV0ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWRiQ29tcGxldGVyRGlyZWN0aXZlLCBDb21wbGV0ZXJEcm9wZG93biB9IGZyb20gJy4vY29tcGxldGVyLmRpcmVjdGl2ZSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBDdHJSb3dFbGVtZW50IHtcbiAgc2V0SGlnaGxpZ2h0ZWQoc2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkO1xuICBnZXROYXRpdmVFbGVtZW50KCk6IGFueTtcbiAgZ2V0RGF0YUl0ZW0oKTogQ29tcGxldGVySXRlbTtcbn1cblxuZXhwb3J0IGNsYXNzIEN0clJvd0l0ZW0ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm93OiBDdHJSb3dFbGVtZW50LCBwdWJsaWMgaW5kZXg6IG51bWJlcikgeyB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJBdXRvY29tcGxldGVEcm9wZG93bl0nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJEcm9wZG93bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbXBsZXRlckRyb3Bkb3duLCBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHVibGljIHNldFRvTnVsbFZhbHVlOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIHJvd3M6IEN0clJvd0l0ZW1bXSA9IFtdO1xuICAvLyBwcml2YXRlIGN1cnJIaWdobGlnaHRlZDogQ3RyUm93SXRlbTtcbiAgcHJpdmF0ZSBjdXJySGlnaGxpZ2h0ZWQ6IEN0clJvd0l0ZW0gfCBhbnk7XG4gIC8vIHByaXZhdGUgaXNTY3JvbGxPbjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc1Njcm9sbE9uOiBib29sZWFuIHwgYW55O1xuXG4gIGNvbnN0cnVjdG9yKCBASG9zdCgpIHByaXZhdGUgY29tcGxldGVyOiBNZGJDb21wbGV0ZXJEaXJlY3RpdmUsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmNvbXBsZXRlci5yZWdpc3RlckRyb3Bkb3duKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmlzU2Nyb2xsT24gPSBjc3MubWF4SGVpZ2h0ICYmIGNzcy5vdmVyZmxvd1kgPT09ICdhdXRvJztcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyB0aGlzLmNvbXBsZXRlci5yZWdpc3RlckRyb3Bkb3duKG51bGwpO1xuICAgIHRoaXMuY29tcGxldGVyLnJlZ2lzdGVyRHJvcGRvd24odGhpcy5zZXRUb051bGxWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGF1dG9IaWdobGlnaHRJbmRleCA9IHRoaXMuY29tcGxldGVyLmF1dG9IaWdobGlnaHRJbmRleDtcbiAgICBpZiAoYXV0b0hpZ2hsaWdodEluZGV4KSB7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3coYXV0b0hpZ2hsaWdodEluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nKSBwdWJsaWMgb25Nb3VzZURvd24oKSB7XG4gICAgLy8gU3VwcG9ydCBmb3IgY2FuY2VsaW5nIGJsdXIgb24gSUUgKGlzc3VlICMxNTgpXG4gICAgdGhpcy5jb21wbGV0ZXIuY2FuY2VsQmx1cih0cnVlKTtcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbXBsZXRlci5jYW5jZWxCbHVyKGZhbHNlKTtcbiAgICAgIH0sXG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlclJvdyhyb3c6IEN0clJvd0l0ZW0pIHtcbiAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xuICB9XG5cbiAgcHVibGljIGhpZ2hsaWdodFJvdyhpbmRleDogbnVtYmVyKTogYW55IHtcblxuICAgIGNvbnN0IGhpZ2hsaWdodGVkID0gdGhpcy5yb3dzLmZpbmQocm93ID0+IHJvdy5pbmRleCA9PT0gaW5kZXgpO1xuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaWYgKHRoaXMuY3VyckhpZ2hsaWdodGVkKSB7XG4gICAgICAgIHRoaXMuY3VyckhpZ2hsaWdodGVkLnJvdy5zZXRIaWdobGlnaHRlZChmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJIaWdobGlnaHRlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuY29tcGxldGVyLm9uSGlnaGxpZ2h0ZWQodGhpcy5zZXRUb051bGxWYWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFoaWdobGlnaHRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmN1cnJIaWdobGlnaHRlZCkge1xuICAgICAgdGhpcy5jdXJySGlnaGxpZ2h0ZWQucm93LnNldEhpZ2hsaWdodGVkKGZhbHNlKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJIaWdobGlnaHRlZCA9IGhpZ2hsaWdodGVkO1xuICAgIHRoaXMuY3VyckhpZ2hsaWdodGVkLnJvdy5zZXRIaWdobGlnaHRlZCh0cnVlKTtcbiAgICB0aGlzLmNvbXBsZXRlci5vbkhpZ2hsaWdodGVkKHRoaXMuY3VyckhpZ2hsaWdodGVkLnJvdy5nZXREYXRhSXRlbSgpKTtcblxuICAgIGlmICh0aGlzLmlzU2Nyb2xsT24gJiYgdGhpcy5jdXJySGlnaGxpZ2h0ZWQpIHtcbiAgICAgIGNvbnN0IHJvd1RvcCA9IHRoaXMuZHJvcGRvd25Sb3dUb3AoKTtcbiAgICAgIGlmIChyb3dUb3AgPCAwKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TY3JvbGxUb3BUbyhyb3dUb3AgLSAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuY3VyckhpZ2hsaWdodGVkLnJvdy5nZXROYXRpdmVFbGVtZW50KCk7XG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duSGVpZ2h0KCkgPCByb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tKSB7XG4gICAgICAgICAgdGhpcy5kcm9wZG93blNjcm9sbFRvcFRvKHRoaXMuZHJvcGRvd25Sb3dPZmZzZXRIZWlnaHQocm93KSk7XG4gICAgICAgICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLSB0aGlzLmRyb3Bkb3duUm93T2Zmc2V0SGVpZ2h0KHJvdylcbiAgICAgICAgICAgIDwgcm93LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNjcm9sbFRvcFRvKHJvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgICAgICAgICAgLy8gKyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCkucGFkZGluZ1RvcCwgMTApKSk7XG4gICAgICAgICAgICArIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5wYWRkaW5nVG9wIGFzIGFueSwgMTApKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMucm93cyA9IFtdO1xuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0ZWQoaXRlbTogQ29tcGxldGVySXRlbSkge1xuICAgIHRoaXMuY29tcGxldGVyLm9uU2VsZWN0ZWQoaXRlbSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q3VycmVudCgpIHtcbiAgICBpZiAodGhpcy5jdXJySGlnaGxpZ2h0ZWQpIHtcbiAgICAgIHRoaXMub25TZWxlY3RlZCh0aGlzLmN1cnJIaWdobGlnaHRlZC5yb3cuZ2V0RGF0YUl0ZW0oKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vblNlbGVjdGVkKHRoaXMucm93c1swXS5yb3cuZ2V0RGF0YUl0ZW0oKSk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgbmV4dFJvdygpIHtcbiAgICBsZXQgbmV4dFJvd0luZGV4ID0gMDtcbiAgICBpZiAodGhpcy5jdXJySGlnaGxpZ2h0ZWQpIHtcbiAgICAgIG5leHRSb3dJbmRleCA9IHRoaXMuY3VyckhpZ2hsaWdodGVkLmluZGV4ICsgMTtcbiAgICB9XG4gICAgdGhpcy5oaWdobGlnaHRSb3cobmV4dFJvd0luZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBwcmV2Um93KCkge1xuICAgIGxldCBuZXh0Um93SW5kZXggPSAtMTtcbiAgICBpZiAodGhpcy5jdXJySGlnaGxpZ2h0ZWQpIHtcbiAgICAgIG5leHRSb3dJbmRleCA9IHRoaXMuY3VyckhpZ2hsaWdodGVkLmluZGV4IC0gMTtcbiAgICB9XG4gICAgdGhpcy5oaWdobGlnaHRSb3cobmV4dFJvd0luZGV4KTtcbiAgfVxuXG4gIHByaXZhdGUgZHJvcGRvd25TY3JvbGxUb3BUbyhvZmZzZXQ6IGFueSkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wICsgb2Zmc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBkcm9wZG93blJvd1RvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJySGlnaGxpZ2h0ZWQucm93LmdldE5hdGl2ZUVsZW1lbnQoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLVxuICAgICAgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgK1xuICAgICAgICAvLyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCkucGFkZGluZ1RvcCwgMTApKTtcbiAgICAgICAgcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnBhZGRpbmdUb3AgYXMgYW55LCAxMCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcm9wZG93bkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArXG4gICAgICAvLyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCkubWF4SGVpZ2h0LCAxMCk7XG4gICAgICBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCkubWF4SGVpZ2h0IGFzIGFueSwgMTApO1xuICB9XG5cbiAgcHJpdmF0ZSBkcm9wZG93blJvd09mZnNldEhlaWdodChyb3c6IGFueSkge1xuICAgIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUocm93KTtcbiAgICByZXR1cm4gcm93Lm9mZnNldEhlaWdodCArXG4gICAgICAvLyBwYXJzZUludChjc3MubWFyZ2luVG9wLCAxMCkgKyBwYXJzZUludChjc3MubWFyZ2luQm90dG9tLCAxMCk7XG4gICAgICBwYXJzZUludChjc3MubWFyZ2luVG9wIGFzIGFueSwgMTApICsgcGFyc2VJbnQoY3NzLm1hcmdpbkJvdHRvbSBhcyBhbnksIDEwKTtcbiAgfVxufVxuIl19