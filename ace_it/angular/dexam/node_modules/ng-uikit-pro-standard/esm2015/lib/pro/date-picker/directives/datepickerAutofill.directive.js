/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
/** @enum {number} */
const KeyCode = {
    backspace: 8, delete: 46,
};
KeyCode[KeyCode.backspace] = 'backspace';
KeyCode[KeyCode.delete] = 'delete';
export class InputAutoFillDirective {
    /**
     * @param {?} el
     * @param {?} rndr
     */
    constructor(el, rndr) {
        this.el = el;
        this.rndr = rndr;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onKeyUp(evt) {
        if (!this.opts.enabled || evt.keyCode === KeyCode.backspace || evt.keyCode === KeyCode.delete) {
            return;
        }
        /** @type {?} */
        const val = this.getInputValue();
        /** @type {?} */
        const ews = this.endsWith(val, this.opts.separator);
        /** @type {?} */
        const parts = val.split(this.opts.separator);
        /** @type {?} */
        const idx = parts.length - 1;
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
    }
    /**
     * @private
     * @param {?} val
     * @param {?} suffix
     * @return {?}
     */
    endsWith(val, suffix) {
        return val.indexOf(suffix, val.length - suffix.length) !== -1;
    }
    /**
     * @private
     * @param {?} str
     * @param {?} idx
     * @param {?} val
     * @return {?}
     */
    insertPos(str, idx, val) {
        return str.substr(0, idx) + val + str.substr(idx);
    }
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    getPartLength(idx) {
        return this.opts.formatParts[idx].length;
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    isNumber(val) {
        return val.match(/[1-9]/) !== null;
    }
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    isDay(idx) {
        return this.opts.formatParts[idx].indexOf('d') !== -1;
    }
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    isMonth(idx) {
        return this.opts.formatParts[idx].indexOf('m') !== -1 && this.opts.formatParts[idx].length === 2;
    }
    /**
     * @private
     * @return {?}
     */
    getInputValue() {
        return this.el.nativeElement.value;
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    setInputValue(val) {
        this.rndr.setProperty(this.el.nativeElement, 'value', val);
    }
}
InputAutoFillDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbInputAutoFill]'
            },] }
];
/** @nocollapse */
InputAutoFillDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
InputAutoFillDirective.propDecorators = {
    opts: [{ type: Input }],
    onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlckF1dG9maWxsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZGF0ZS1waWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyQXV0b2ZpbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBR3hFLFlBQWEsRUFBRSxVQUFXOzs7O0FBTXhDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBR2pDLFlBQW9CLEVBQWMsRUFBVSxJQUFlO1FBQXZDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFXO0lBQUcsQ0FBQzs7Ozs7SUFFNUIsT0FBTyxDQUFDLEdBQWtCO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzdGLE9BQU87U0FDUjs7Y0FFSyxHQUFHLEdBQVcsSUFBSSxDQUFDLGFBQWEsRUFBRTs7Y0FDbEMsR0FBRyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOztjQUN0RCxLQUFLLEdBQWtCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7O2NBQ3JELEdBQUcsR0FBVyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7UUFFcEMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxD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dkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLEdBQVc7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7OztJQUVPLGFBQWE7UUFDbkIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLEdBQVc7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7OztZQXZFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7OztZQVBtQixVQUFVO1lBQUUsU0FBUzs7O21CQVV0QyxLQUFLO3NCQUlMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFKakMsc0NBQWdDOzs7OztJQUVwQixvQ0FBc0I7Ozs7O0lBQUUsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU15SW5wdXRBdXRvRmlsbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5wdXRBdXRvZmlsbC5pbnRlcmZhY2UnO1xyXG5cclxuZW51bSBLZXlDb2RlIHtiYWNrc3BhY2UgPSA4LCBkZWxldGUgPSA0Nn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21kYklucHV0QXV0b0ZpbGxdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0QXV0b0ZpbGxEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIG9wdHM6IElNeUlucHV0QXV0b0ZpbGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcm5kcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pIG9uS2V5VXAoZXZ0OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMub3B0cy5lbmFibGVkIHx8IGV2dC5rZXlDb2RlID09PSBLZXlDb2RlLmJhY2tzcGFjZSB8fCBldnQua2V5Q29kZSA9PT0gS2V5Q29kZS5kZWxldGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbDogc3RyaW5nID0gdGhpcy5nZXRJbnB1dFZhbHVlKCk7XHJcbiAgICBjb25zdCBld3M6IGJvb2xlYW4gPSB0aGlzLmVuZHNXaXRoKHZhbCwgdGhpcy5vcHRzLnNlcGFyYXRvcik7XHJcbiAgICBjb25zdCBwYXJ0czogQXJyYXk8c3RyaW5nPiA9IHZhbC5zcGxpdCh0aGlzLm9wdHMuc2VwYXJhdG9yKTtcclxuICAgIGNvbnN0IGlkeDogbnVtYmVyID0gcGFydHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICBpZiAodmFsLmluZGV4T2YodGhpcy5vcHRzLnNlcGFyYXRvciArIHRoaXMub3B0cy5zZXBhcmF0b3IpICE9PSAtMSB8fCBpZHggPiAyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWV3cyAmJlxyXG4gICAgICAodmFsLmxlbmd0aCA9PT0gdGhpcy5nZXRQYXJ0TGVuZ3RoKDApIHx8XHJcbiAgICAgICAgdmFsLmxlbmd0aCA9PT0gdGhpcy5nZXRQYXJ0TGVuZ3RoKDApICsgdGhpcy5nZXRQYXJ0TGVuZ3RoKDEpICsgdGhpcy5vcHRzLnNlcGFyYXRvci5sZW5ndGgpKSB7XHJcbiAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh2YWwgKyB0aGlzLm9wdHMuc2VwYXJhdG9yKTtcclxuICB9IGVsc2UgaWYgKGV3cyAmJlxyXG4gICAgcGFydHNbaWR4IC0gMV0ubGVuZ3RoIDwgdGhpcy5nZXRQYXJ0TGVuZ3RoKGlkeCAtIDEpICYmXHJcbiAgICB0aGlzLmlzTnVtYmVyKHBhcnRzW2lkeCAtIDFdKSAmJiAodGhpcy5pc0RheShpZHggLSAxKSB8fCB0aGlzLmlzTW9udGgoaWR4IC0gMSkpKSB7XHJcbiAgICB0aGlzLnNldElucHV0VmFsdWUodGhpcy5pbnNlcnRQb3ModmFsLCB2YWwubGVuZ3RoIC0gMiwgJzAnKSk7XHJcbiAgfSBlbHNlIGlmIChwYXJ0c1tpZHhdLmxlbmd0aCA8IHRoaXMuZ2V0UGFydExlbmd0aChpZHgpICYmXHJcbiAgICB0aGlzLmlzTnVtYmVyKHBhcnRzW2lkeF0pICYmXHJcbiAgICAoTnVtYmVyKHBhcnRzW2lkeF0pID4gMyAmJlxyXG4gICAgICB0aGlzLmlzRGF5KGlkeCkgfHxcclxuICAgICAgTnVtYmVyKHBhcnRzW2lkeF0pID4gMSAmJlxyXG4gICAgICB0aGlzLmlzTW9udGgoaWR4KSkpIHtcclxuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh0aGlzLmluc2VydFBvcyh2YWwsIHZhbC5sZW5ndGggLSAxLCAnMCcpICsgKGlkeCA8IDIgPyB0aGlzLm9wdHMuc2VwYXJhdG9yIDogJycpKTtcclxuICB9XHJcbn1cclxuXHJcbiAgcHJpdmF0ZSBlbmRzV2l0aCh2YWw6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWwuaW5kZXhPZihzdWZmaXgsIHZhbC5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc2VydFBvcyhzdHI6IHN0cmluZywgaWR4OiBudW1iZXIsIHZhbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIGlkeCkgKyB2YWwgKyBzdHIuc3Vic3RyKGlkeCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhcnRMZW5ndGgoaWR4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5mb3JtYXRQYXJ0c1tpZHhdLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNOdW1iZXIodmFsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWwubWF0Y2goL1sxLTldLykgIT09IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRGF5KGlkeDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLmZvcm1hdFBhcnRzW2lkeF0uaW5kZXhPZignZCcpICE9PSAtMTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNNb250aChpZHg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5mb3JtYXRQYXJ0c1tpZHhdLmluZGV4T2YoJ20nKSAhPT0gLTEgJiYgdGhpcy5vcHRzLmZvcm1hdFBhcnRzW2lkeF0ubGVuZ3RoID09PSAyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJbnB1dFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJbnB1dFZhbHVlKHZhbDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnJuZHIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWwpO1xyXG4gIH1cclxufVxyXG4iXX0=