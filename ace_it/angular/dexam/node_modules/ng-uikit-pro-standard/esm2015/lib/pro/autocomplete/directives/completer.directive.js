/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Output } from '@angular/core';
/**
 * @record
 */
export function CompleterList() { }
if (false) {
    /**
     * @param {?} term
     * @return {?}
     */
    CompleterList.prototype.search = function (term) { };
    /**
     * @return {?}
     */
    CompleterList.prototype.open = function () { };
    /**
     * @param {?} open
     * @return {?}
     */
    CompleterList.prototype.isOpen = function (open) { };
    /**
     * @return {?}
     */
    CompleterList.prototype.clear = function () { };
}
/**
 * @record
 */
export function CompleterDropdown() { }
if (false) {
    /**
     * @return {?}
     */
    CompleterDropdown.prototype.clear = function () { };
    /**
     * @return {?}
     */
    CompleterDropdown.prototype.selectCurrent = function () { };
    /**
     * @return {?}
     */
    CompleterDropdown.prototype.nextRow = function () { };
    /**
     * @return {?}
     */
    CompleterDropdown.prototype.prevRow = function () { };
}
export class MdbCompleterDirective {
    constructor() {
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.opened = new EventEmitter();
        this._hasHighlighted = false;
        this._hasSelected = false;
        this._cancelBlur = false;
        this._isOpen = false;
        this.setToNullValue = null;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    registerList(list) {
        this.list = list;
    }
    /**
     * @param {?} dropdown
     * @return {?}
     */
    registerDropdown(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onHighlighted(item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    }
    /**
     * @param {?} item
     * @param {?=} clearList
     * @return {?}
     */
    onSelected(item, clearList = true) {
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        if (this._hasSelected) {
            // this.selected.emit(null);
            this.selected.emit(this.setToNullValue);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
        this._hasHighlighted = false;
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    selectCurrent() {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    }
    /**
     * @return {?}
     */
    nextRow() {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    }
    /**
     * @return {?}
     */
    prevRow() {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    }
    /**
     * @return {?}
     */
    hasHighlighted() {
        return this._hasHighlighted;
    }
    /**
     * @param {?} cancel
     * @return {?}
     */
    cancelBlur(cancel) {
        this._cancelBlur = cancel;
    }
    /**
     * @return {?}
     */
    isCancelBlur() {
        return this._cancelBlur;
    }
    /**
     * @return {?}
     */
    open() {
        if (!this._isOpen) {
            this.isOpen = true;
            this.list.open();
        }
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    set isOpen(open) {
        this._isOpen = open;
        this.opened.emit(this._isOpen);
        if (this.list) {
            this.list.isOpen(open);
        }
    }
    /**
     * @return {?}
     */
    get autoHighlightIndex() {
        return this._autoHighlightIndex;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set autoHighlightIndex(index) {
        this._autoHighlightIndex = index;
    }
    /**
     * @return {?}
     */
    get hasSelected() {
        return this._hasSelected;
    }
}
MdbCompleterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbCompleter]',
            },] }
];
MdbCompleterDirective.propDecorators = {
    selected: [{ type: Output }],
    highlighted: [{ type: Output }],
    opened: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MdbCompleterDirective.prototype.selected;
    /** @type {?} */
    MdbCompleterDirective.prototype.highlighted;
    /** @type {?} */
    MdbCompleterDirective.prototype.opened;
    /**
     * @type {?}
     * @private
     */
    MdbCompleterDirective.prototype.list;
    /**
     * @type {?}
     * @private
     */
    MdbCompleterDirective.prototype.dropdown;
    /**
     * @type {?}
     * @private
     */
    MdbCompleterDirective.prototype._hasHighlighted;
    /**
     * @type {?}
     * @private
     */
    MdbCompleterDirective.prototype._hasSelected;
    /**
     * @type {?}
     * @private
     */
    MdbCompleterDirective.prototype._cancelBlur;
    /**
     * @type {?}
     * @private
     */
    MdbCompleterDirective.prototype._isOpen;
    /**
     * @type {?}
     * @private
     */
    MdbCompleterDirective.prototype._autoHighlightIndex;
    /** @type {?} */
    MdbCompleterDirective.prototype.setToNullValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2RpcmVjdGl2ZXMvY29tcGxldGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSWhFLG1DQUtDOzs7Ozs7SUFKQyxxREFBMkI7Ozs7SUFDM0IsK0NBQWE7Ozs7O0lBQ2IscURBQTRCOzs7O0lBQzVCLGdEQUFjOzs7OztBQUdoQix1Q0FLQzs7Ozs7SUFKQyxvREFBYzs7OztJQUNkLDREQUFzQjs7OztJQUN0QixzREFBZ0I7Ozs7SUFDaEIsc0RBQWdCOztBQU1sQixNQUFNLE9BQU8scUJBQXFCO0lBSGxDO1FBSW1CLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUM3QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ2hELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBSTlDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHakIsbUJBQWMsR0FBUSxJQUFJLENBQUM7SUEwR3BDLENBQUM7Ozs7O0lBekdRLFlBQVksQ0FBQyxJQUFtQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDOzs7OztJQUVNLGdCQUFnQixDQUFDLFFBQTJCO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU0sYUFBYSxDQUFDLElBQW1CO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUks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LEtBQWE7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7WUF6SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozt1QkFFRSxNQUFNOzBCQUNOLE1BQU07cUJBQ04sTUFBTTs7OztJQUZQLHlDQUE4RDs7SUFDOUQsNENBQWlFOztJQUNqRSx1Q0FBc0Q7Ozs7O0lBRXRELHFDQUE0Qjs7Ozs7SUFDNUIseUNBQW9DOzs7OztJQUNwQyxnREFBZ0M7Ozs7O0lBQ2hDLDZDQUE2Qjs7Ozs7SUFDN0IsNENBQTRCOzs7OztJQUM1Qix3Q0FBd0I7Ozs7O0lBQ3hCLG9EQUFvQzs7SUFFcEMsK0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21wbGV0ZXJJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wbGV0ZXItaXRlbS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXRlckxpc3Qge1xuICBzZWFyY2godGVybTogc3RyaW5nKTogdm9pZDtcbiAgb3BlbigpOiB2b2lkO1xuICBpc09wZW4ob3BlbjogYm9vbGVhbik6IHZvaWQ7XG4gIGNsZWFyKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGxldGVyRHJvcGRvd24ge1xuICBjbGVhcigpOiB2b2lkO1xuICBzZWxlY3RDdXJyZW50KCk6IHZvaWQ7XG4gIG5leHRSb3coKTogdm9pZDtcbiAgcHJldlJvdygpOiB2b2lkO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiQ29tcGxldGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYkNvbXBsZXRlckRpcmVjdGl2ZSB7XG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBsZXRlckl0ZW0+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgaGlnaGxpZ2h0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBsZXRlckl0ZW0+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgbGlzdDogQ29tcGxldGVyTGlzdDtcbiAgcHJpdmF0ZSBkcm9wZG93bjogQ29tcGxldGVyRHJvcGRvd247XG4gIHByaXZhdGUgX2hhc0hpZ2hsaWdodGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2hhc1NlbGVjdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2NhbmNlbEJsdXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaXNPcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgX2F1dG9IaWdobGlnaHRJbmRleDogbnVtYmVyO1xuXG4gIHB1YmxpYyBzZXRUb051bGxWYWx1ZTogYW55ID0gbnVsbDtcbiAgcHVibGljIHJlZ2lzdGVyTGlzdChsaXN0OiBDb21wbGV0ZXJMaXN0KSB7XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlckRyb3Bkb3duKGRyb3Bkb3duOiBDb21wbGV0ZXJEcm9wZG93bikge1xuICAgIHRoaXMuZHJvcGRvd24gPSBkcm9wZG93bjtcbiAgfVxuXG4gIHB1YmxpYyBvbkhpZ2hsaWdodGVkKGl0ZW06IENvbXBsZXRlckl0ZW0pIHtcbiAgICB0aGlzLmhpZ2hsaWdodGVkLmVtaXQoaXRlbSk7XG4gICAgdGhpcy5faGFzSGlnaGxpZ2h0ZWQgPSAhIWl0ZW07XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3RlZChpdGVtOiBDb21wbGV0ZXJJdGVtLCBjbGVhckxpc3QgPSB0cnVlKSB7XG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KGl0ZW0pO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB0aGlzLl9oYXNTZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjbGVhckxpc3QpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VhcmNoKHRlcm06IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9oYXNTZWxlY3RlZCkge1xuICAgICAgLy8gdGhpcy5zZWxlY3RlZC5lbWl0KG51bGwpO1xuICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KHRoaXMuc2V0VG9OdWxsVmFsdWUpO1xuICAgICAgdGhpcy5faGFzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGlzdCkge1xuICAgICAgdGhpcy5saXN0LnNlYXJjaCh0ZXJtKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuZHJvcGRvd24pIHtcbiAgICAgIHRoaXMuZHJvcGRvd24uY2xlYXIoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGlzdCkge1xuICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XG4gICAgfVxuICAgIHRoaXMuX2hhc0hpZ2hsaWdodGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RDdXJyZW50KCkge1xuICAgIGlmICh0aGlzLmRyb3Bkb3duKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLnNlbGVjdEN1cnJlbnQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmV4dFJvdygpIHtcbiAgICBpZiAodGhpcy5kcm9wZG93bikge1xuICAgICAgdGhpcy5kcm9wZG93bi5uZXh0Um93KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHByZXZSb3coKSB7XG4gICAgaWYgKHRoaXMuZHJvcGRvd24pIHtcbiAgICAgIHRoaXMuZHJvcGRvd24ucHJldlJvdygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNIaWdobGlnaHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzSGlnaGxpZ2h0ZWQ7XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsQmx1cihjYW5jZWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jYW5jZWxCbHVyID0gY2FuY2VsO1xuICB9XG5cbiAgcHVibGljIGlzQ2FuY2VsQmx1cigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuY2VsQmx1cjtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKCkge1xuICAgIGlmICghdGhpcy5faXNPcGVuKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICB0aGlzLmxpc3Qub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gIH1cblxuICBwdWJsaWMgc2V0IGlzT3BlbihvcGVuOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNPcGVuID0gb3BlbjtcbiAgICB0aGlzLm9wZW5lZC5lbWl0KHRoaXMuX2lzT3Blbik7XG4gICAgaWYgKHRoaXMubGlzdCkge1xuICAgICAgdGhpcy5saXN0LmlzT3BlbihvcGVuKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGF1dG9IaWdobGlnaHRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0hpZ2hsaWdodEluZGV4O1xuICB9XG5cbiAgcHVibGljIHNldCBhdXRvSGlnaGxpZ2h0SW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuX2F1dG9IaWdobGlnaHRJbmRleCA9IGluZGV4O1xuICB9XG5cbiAgcHVibGljIGdldCBoYXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzU2VsZWN0ZWQ7XG4gIH1cbn1cbiJdfQ==