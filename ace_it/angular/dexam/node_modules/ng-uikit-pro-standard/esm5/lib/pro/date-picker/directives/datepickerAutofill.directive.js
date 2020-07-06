/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
/** @enum {number} */
var KeyCode = {
    backspace: 8, delete: 46,
};
KeyCode[KeyCode.backspace] = 'backspace';
KeyCode[KeyCode.delete] = 'delete';
var InputAutoFillDirective = /** @class */ (function () {
    function InputAutoFillDirective(el, rndr) {
        this.el = el;
        this.rndr = rndr;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    InputAutoFillDirective.prototype.onKeyUp = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        if (!this.opts.enabled || evt.keyCode === KeyCode.backspace || evt.keyCode === KeyCode.delete) {
            return;
        }
        /** @type {?} */
        var val = this.getInputValue();
        /** @type {?} */
        var ews = this.endsWith(val, this.opts.separator);
        /** @type {?} */
        var parts = val.split(this.opts.separator);
        /** @type {?} */
        var idx = parts.length - 1;
        if (val.indexOf(this.opts.separator + this.opts.separator) !== -1 || idx > 2) {
            return;
        }
        if (!ews &&
            (val.length === this.getPartLength(0) ||
                val.length === this.getPartLength(0) + this.getPartLength(1) + this.opts.separator.length)) {
            this.setInputValue(val + this.opts.separator);
        }
        else if (ews &&
            parts[idx - 1].length < this.getPartLength(idx - 1) &&
            this.isNumber(parts[idx - 1]) && (this.isDay(idx - 1) || this.isMonth(idx - 1))) {
            this.setInputValue(this.insertPos(val, val.length - 2, '0'));
        }
        else if (parts[idx].length < this.getPartLength(idx) &&
            this.isNumber(parts[idx]) &&
            (Number(parts[idx]) > 3 &&
                this.isDay(idx) ||
                Number(parts[idx]) > 1 &&
                    this.isMonth(idx))) {
            this.setInputValue(this.insertPos(val, val.length - 1, '0') + (idx < 2 ? this.opts.separator : ''));
        }
    };
    /**
     * @private
     * @param {?} val
     * @param {?} suffix
     * @return {?}
     */
    InputAutoFillDirective.prototype.endsWith = /**
     * @private
     * @param {?} val
     * @param {?} suffix
     * @return {?}
     */
    function (val, suffix) {
        return val.indexOf(suffix, val.length - suffix.length) !== -1;
    };
    /**
     * @private
     * @param {?} str
     * @param {?} idx
     * @param {?} val
     * @return {?}
     */
    InputAutoFillDirective.prototype.insertPos = /**
     * @private
     * @param {?} str
     * @param {?} idx
     * @param {?} val
     * @return {?}
     */
    function (str, idx, val) {
        return str.substr(0, idx) + val + str.substr(idx);
    };
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    InputAutoFillDirective.prototype.getPartLength = /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        return this.opts.formatParts[idx].length;
    };
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    InputAutoFillDirective.prototype.isNumber = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return val.match(/[1-9]/) !== null;
    };
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    InputAutoFillDirective.prototype.isDay = /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        return this.opts.formatParts[idx].indexOf('d') !== -1;
    };
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    InputAutoFillDirective.prototype.isMonth = /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        return this.opts.formatParts[idx].indexOf('m') !== -1 && this.opts.formatParts[idx].length === 2;
    };
    /**
     * @private
     * @return {?}
     */
    InputAutoFillDirective.prototype.getInputValue = /**
     * @private
     * @return {?}
     */
    function () {
        return this.el.nativeElement.value;
    };
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    InputAutoFillDirective.prototype.setInputValue = /**
     * @private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.rndr.setProperty(this.el.nativeElement, 'value', val);
    };
    InputAutoFillDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbInputAutoFill]'
                },] }
    ];
    /** @nocollapse */
    InputAutoFillDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    InputAutoFillDirective.propDecorators = {
        opts: [{ type: Input }],
        onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }]
    };
    return InputAutoFillDirective;
}());
export { InputAutoFillDirective };
if (false) {
    /** @type {?} */
    InputAutoFillDirective.prototype.opts;
    /**
     * @type {?}
     * @private
     */
    InputAutoFillDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    InputAutoFillDirective.prototype.rndr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlckF1dG9maWxsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZGF0ZS1waWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyQXV0b2ZpbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBR3hFLFlBQWEsRUFBRSxVQUFXOzs7O0FBRXhDO0lBT0UsZ0NBQW9CLEVBQWMsRUFBVSxJQUFlO1FBQXZDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFXO0lBQUcsQ0FBQzs7Ozs7SUFFNUIsd0NBQU87Ozs7SUFBMUMsVUFBMkMsR0FBa0I7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDN0YsT0FBTztTQUNSOztZQUVLLEdBQUcsR0FBVyxJQUFJLENBQUMsYUFBYSxFQUFFOztZQUNsQyxHQUFHLEdBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7O1lBQ3RELEtBQUssR0FBa0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7WUFDckQsR0FBRyxHQUFXLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUVwQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxD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QztJQUNyQyxDQUFDOzs7Ozs7SUFFTyxzQ0FBSzs7Ozs7SUFBYixVQUFjLEdBQVc7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRU8sd0NBQU87Ozs7O0lBQWYsVUFBZ0IsR0FBVztRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ25HLENBQUM7Ozs7O0lBRU8sOENBQWE7Ozs7SUFBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFTyw4Q0FBYTs7Ozs7SUFBckIsVUFBc0IsR0FBVztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Z0JBdkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjs7OztnQkFQbUIsVUFBVTtnQkFBRSxTQUFTOzs7dUJBVXRDLEtBQUs7MEJBSUwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUErRG5DLDZCQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0FwRVksc0JBQXNCOzs7SUFDakMsc0NBQWdDOzs7OztJQUVwQixvQ0FBc0I7Ozs7O0lBQUUsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU15SW5wdXRBdXRvRmlsbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5wdXRBdXRvZmlsbC5pbnRlcmZhY2UnO1xyXG5cclxuZW51bSBLZXlDb2RlIHtiYWNrc3BhY2UgPSA4LCBkZWxldGUgPSA0Nn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21kYklucHV0QXV0b0ZpbGxdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0QXV0b0ZpbGxEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIG9wdHM6IElNeUlucHV0QXV0b0ZpbGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcm5kcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pIG9uS2V5VXAoZXZ0OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMub3B0cy5lbmFibGVkIHx8IGV2dC5rZXlDb2RlID09PSBLZXlDb2RlLmJhY2tzcGFjZSB8fCBldnQua2V5Q29kZSA9PT0gS2V5Q29kZS5kZWxldGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbDogc3RyaW5nID0gdGhpcy5nZXRJbnB1dFZhbHVlKCk7XHJcbiAgICBjb25zdCBld3M6IGJvb2xlYW4gPSB0aGlzLmVuZHNXaXRoKHZhbCwgdGhpcy5vcHRzLnNlcGFyYXRvcik7XHJcbiAgICBjb25zdCBwYXJ0czogQXJyYXk8c3RyaW5nPiA9IHZhbC5zcGxpdCh0aGlzLm9wdHMuc2VwYXJhdG9yKTtcclxuICAgIGNvbnN0IGlkeDogbnVtYmVyID0gcGFydHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICBpZiAodmFsLmluZGV4T2YodGhpcy5vcHRzLnNlcGFyYXRvciArIHRoaXMub3B0cy5zZXBhcmF0b3IpICE9PSAtMSB8fCBpZHggPiAyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWV3cyAmJlxyXG4gICAgICAodmFsLmxlbmd0aCA9PT0gdGhpcy5nZXRQYXJ0TGVuZ3RoKDApIHx8XHJcbiAgICAgICAgdmFsLmxlbmd0aCA9PT0gdGhpcy5nZXRQYXJ0TGVuZ3RoKDApICsgdGhpcy5nZXRQYXJ0TGVuZ3RoKDEpICsgdGhpcy5vcHRzLnNlcGFyYXRvci5sZW5ndGgpKSB7XHJcbiAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh2YWwgKyB0aGlzLm9wdHMuc2VwYXJhdG9yKTtcclxuICB9IGVsc2UgaWYgKGV3cyAmJlxyXG4gICAgcGFydHNbaWR4IC0gMV0ubGVuZ3RoIDwgdGhpcy5nZXRQYXJ0TGVuZ3RoKGlkeCAtIDEpICYmXHJcbiAgICB0aGlzLmlzTnVtYmVyKHBhcnRzW2lkeCAtIDFdKSAmJiAodGhpcy5pc0RheShpZHggLSAxKSB8fCB0aGlzLmlzTW9udGgoaWR4IC0gMSkpKSB7XHJcbiAgICB0aGlzLnNldElucHV0VmFsdWUodGhpcy5pbnNlcnRQb3ModmFsLCB2YWwubGVuZ3RoIC0gMiwgJzAnKSk7XHJcbiAgfSBlbHNlIGlmIChwYXJ0c1tpZHhdLmxlbmd0aCA8IHRoaXMuZ2V0UGFydExlbmd0aChpZHgpICYmXHJcbiAgICB0aGlzLmlzTnVtYmVyKHBhcnRzW2lkeF0pICYmXHJcbiAgICAoTnVtYmVyKHBhcnRzW2lkeF0pID4gMyAmJlxyXG4gICAgICB0aGlzLmlzRGF5KGlkeCkgfHxcclxuICAgICAgTnVtYmVyKHBhcnRzW2lkeF0pID4gMSAmJlxyXG4gICAgICB0aGlzLmlzTW9udGgoaWR4KSkpIHtcclxuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh0aGlzLmluc2VydFBvcyh2YWwsIHZhbC5sZW5ndGggLSAxLCAnMCcpICsgKGlkeCA8IDIgPyB0aGlzLm9wdHMuc2VwYXJhdG9yIDogJycpKTtcclxuICB9XHJcbn1cclxuXHJcbiAgcHJpdmF0ZSBlbmRzV2l0aCh2YWw6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWwuaW5kZXhPZihzdWZmaXgsIHZhbC5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc2VydFBvcyhzdHI6IHN0cmluZywgaWR4OiBudW1iZXIsIHZhbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIGlkeCkgKyB2YWwgKyBzdHIuc3Vic3RyKGlkeCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhcnRMZW5ndGgoaWR4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5mb3JtYXRQYXJ0c1tpZHhdLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNOdW1iZXIodmFsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWwubWF0Y2goL1sxLTldLykgIT09IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRGF5KGlkeDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLmZvcm1hdFBhcnRzW2lkeF0uaW5kZXhPZignZCcpICE9PSAtMTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNNb250aChpZHg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5mb3JtYXRQYXJ0c1tpZHhdLmluZGV4T2YoJ20nKSAhPT0gLTEgJiYgdGhpcy5vcHRzLmZvcm1hdFBhcnRzW2lkeF0ubGVuZ3RoID09PSAyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJbnB1dFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJbnB1dFZhbHVlKHZhbDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnJuZHIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWwpO1xyXG4gIH1cclxufVxyXG4iXX0=