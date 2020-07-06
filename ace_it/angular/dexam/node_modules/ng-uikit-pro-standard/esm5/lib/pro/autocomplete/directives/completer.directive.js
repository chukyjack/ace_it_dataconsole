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
var MdbCompleterDirective = /** @class */ (function () {
    function MdbCompleterDirective() {
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
    MdbCompleterDirective.prototype.registerList = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        this.list = list;
    };
    /**
     * @param {?} dropdown
     * @return {?}
     */
    MdbCompleterDirective.prototype.registerDropdown = /**
     * @param {?} dropdown
     * @return {?}
     */
    function (dropdown) {
        this.dropdown = dropdown;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MdbCompleterDirective.prototype.onHighlighted = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    };
    /**
     * @param {?} item
     * @param {?=} clearList
     * @return {?}
     */
    MdbCompleterDirective.prototype.onSelected = /**
     * @param {?} item
     * @param {?=} clearList
     * @return {?}
     */
    function (item, clearList) {
        if (clearList === void 0) { clearList = true; }
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    };
    /**
     * @param {?} term
     * @return {?}
     */
    MdbCompleterDirective.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        if (this._hasSelected) {
            // this.selected.emit(null);
            this.selected.emit(this.setToNullValue);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.clear = /**
     * @return {?}
     */
    function () {
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
        this._hasHighlighted = false;
        this.isOpen = false;
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.selectCurrent = /**
     * @return {?}
     */
    function () {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.nextRow = /**
     * @return {?}
     */
    function () {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.prevRow = /**
     * @return {?}
     */
    function () {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.hasHighlighted = /**
     * @return {?}
     */
    function () {
        return this._hasHighlighted;
    };
    /**
     * @param {?} cancel
     * @return {?}
     */
    MdbCompleterDirective.prototype.cancelBlur = /**
     * @param {?} cancel
     * @return {?}
     */
    function (cancel) {
        this._cancelBlur = cancel;
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.isCancelBlur = /**
     * @return {?}
     */
    function () {
        return this._cancelBlur;
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this._isOpen) {
            this.isOpen = true;
            this.list.open();
        }
    };
    Object.defineProperty(MdbCompleterDirective.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            this._isOpen = open;
            this.opened.emit(this._isOpen);
            if (this.list) {
                this.list.isOpen(open);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCompleterDirective.prototype, "autoHighlightIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoHighlightIndex;
        },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this._autoHighlightIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCompleterDirective.prototype, "hasSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
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
    return MdbCompleterDirective;
}());
export { MdbCompleterDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2RpcmVjdGl2ZXMvY29tcGxldGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSWhFLG1DQUtDOzs7Ozs7SUFKQyxxREFBMkI7Ozs7SUFDM0IsK0NBQWE7Ozs7O0lBQ2IscURBQTRCOzs7O0lBQzVCLGdEQUFjOzs7OztBQUdoQix1Q0FLQzs7Ozs7SUFKQyxvREFBYzs7OztJQUNkLDREQUFzQjs7OztJQUN0QixzREFBZ0I7Ozs7SUFDaEIsc0RBQWdCOztBQUdsQjtJQUFBO1FBSW1CLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUM3QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ2hELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBSTlDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHakIsbUJBQWMsR0FBUSxJQUFJLENBQUM7SUEwR3BDLENBQUM7Ozs7O0lBekdRLDRDQUFZOzs7O0lBQW5CLFVBQW9CLElBQW1CO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sZ0RBQWdCOzs7O0lBQXZCLFVBQXdCLFFBQTJCO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU0sNkNBQWE7Ozs7SUFBcEIsVUFBcUIsSUFBbUI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJ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SSxDQUFDLENBQUM7YUFDeEI7UUFDSCxDQUFDOzs7T0FSQTtJQVVELHNCQUFXLHFEQUFrQjs7OztRQUE3QjtZQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ2xDLENBQUM7Ozs7O1FBRUQsVUFBOEIsS0FBYTtZQUN6QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBTUQsc0JBQVcsOENBQVc7Ozs7UUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7O2dCQXpIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7OzsyQkFFRSxNQUFNOzhCQUNOLE1BQU07eUJBQ04sTUFBTTs7SUFvSFQsNEJBQUM7Q0FBQSxBQTFIRCxJQTBIQztTQXZIWSxxQkFBcUI7OztJQUNoQyx5Q0FBOEQ7O0lBQzlELDRDQUFpRTs7SUFDakUsdUNBQXNEOzs7OztJQUV0RCxxQ0FBNEI7Ozs7O0lBQzVCLHlDQUFvQzs7Ozs7SUFDcEMsZ0RBQWdDOzs7OztJQUNoQyw2Q0FBNkI7Ozs7O0lBQzdCLDRDQUE0Qjs7Ozs7SUFDNUIsd0NBQXdCOzs7OztJQUN4QixvREFBb0M7O0lBRXBDLCtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcGxldGVySXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcGxldGVyLWl0ZW0uY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDb21wbGV0ZXJMaXN0IHtcbiAgc2VhcmNoKHRlcm06IHN0cmluZyk6IHZvaWQ7XG4gIG9wZW4oKTogdm9pZDtcbiAgaXNPcGVuKG9wZW46IGJvb2xlYW4pOiB2b2lkO1xuICBjbGVhcigpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXRlckRyb3Bkb3duIHtcbiAgY2xlYXIoKTogdm9pZDtcbiAgc2VsZWN0Q3VycmVudCgpOiB2b2lkO1xuICBuZXh0Um93KCk6IHZvaWQ7XG4gIHByZXZSb3coKTogdm9pZDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYkNvbXBsZXRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJDb21wbGV0ZXJEaXJlY3RpdmUge1xuICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wbGV0ZXJJdGVtPigpO1xuICBAT3V0cHV0KCkgcHVibGljIGhpZ2hsaWdodGVkID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wbGV0ZXJJdGVtPigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIGxpc3Q6IENvbXBsZXRlckxpc3Q7XG4gIHByaXZhdGUgZHJvcGRvd246IENvbXBsZXRlckRyb3Bkb3duO1xuICBwcml2YXRlIF9oYXNIaWdobGlnaHRlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9oYXNTZWxlY3RlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9jYW5jZWxCbHVyID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzT3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIF9hdXRvSGlnaGxpZ2h0SW5kZXg6IG51bWJlcjtcblxuICBwdWJsaWMgc2V0VG9OdWxsVmFsdWU6IGFueSA9IG51bGw7XG4gIHB1YmxpYyByZWdpc3Rlckxpc3QobGlzdDogQ29tcGxldGVyTGlzdCkge1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJEcm9wZG93bihkcm9wZG93bjogQ29tcGxldGVyRHJvcGRvd24pIHtcbiAgICB0aGlzLmRyb3Bkb3duID0gZHJvcGRvd247XG4gIH1cblxuICBwdWJsaWMgb25IaWdobGlnaHRlZChpdGVtOiBDb21wbGV0ZXJJdGVtKSB7XG4gICAgdGhpcy5oaWdobGlnaHRlZC5lbWl0KGl0ZW0pO1xuICAgIHRoaXMuX2hhc0hpZ2hsaWdodGVkID0gISFpdGVtO1xuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0ZWQoaXRlbTogQ29tcGxldGVySXRlbSwgY2xlYXJMaXN0ID0gdHJ1ZSkge1xuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdChpdGVtKTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5faGFzU2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2xlYXJMaXN0KSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlYXJjaCh0ZXJtOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5faGFzU2VsZWN0ZWQpIHtcbiAgICAgIC8vIHRoaXMuc2VsZWN0ZWQuZW1pdChudWxsKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh0aGlzLnNldFRvTnVsbFZhbHVlKTtcbiAgICAgIHRoaXMuX2hhc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmxpc3QpIHtcbiAgICAgIHRoaXMubGlzdC5zZWFyY2godGVybSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIGlmICh0aGlzLmRyb3Bkb3duKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLmNsZWFyKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxpc3QpIHtcbiAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xuICAgIH1cbiAgICB0aGlzLl9oYXNIaWdobGlnaHRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q3VycmVudCgpIHtcbiAgICBpZiAodGhpcy5kcm9wZG93bikge1xuICAgICAgdGhpcy5kcm9wZG93bi5zZWxlY3RDdXJyZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5leHRSb3coKSB7XG4gICAgaWYgKHRoaXMuZHJvcGRvd24pIHtcbiAgICAgIHRoaXMuZHJvcGRvd24ubmV4dFJvdygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwcmV2Um93KCkge1xuICAgIGlmICh0aGlzLmRyb3Bkb3duKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLnByZXZSb3coKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFzSGlnaGxpZ2h0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0hpZ2hsaWdodGVkO1xuICB9XG5cbiAgcHVibGljIGNhbmNlbEJsdXIoY2FuY2VsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2FuY2VsQmx1ciA9IGNhbmNlbDtcbiAgfVxuXG4gIHB1YmxpYyBpc0NhbmNlbEJsdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbmNlbEJsdXI7XG4gIH1cblxuICBwdWJsaWMgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuX2lzT3Blbikge1xuICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5saXN0Lm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICB9XG5cbiAgcHVibGljIHNldCBpc09wZW4ob3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzT3BlbiA9IG9wZW47XG4gICAgdGhpcy5vcGVuZWQuZW1pdCh0aGlzLl9pc09wZW4pO1xuICAgIGlmICh0aGlzLmxpc3QpIHtcbiAgICAgIHRoaXMubGlzdC5pc09wZW4ob3Blbik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBhdXRvSGlnaGxpZ2h0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9IaWdobGlnaHRJbmRleDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgYXV0b0hpZ2hsaWdodEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLl9hdXRvSGlnaGxpZ2h0SW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1NlbGVjdGVkO1xuICB9XG59XG4iXX0=