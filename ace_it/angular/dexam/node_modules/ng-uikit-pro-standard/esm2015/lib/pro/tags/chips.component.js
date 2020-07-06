/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MaterialChipsComponent)),
    multi: true
};
export class MaterialChipsComponent {
    constructor() {
        this.placeholder = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange = new EventEmitter();
        this.labelsChange = new EventEmitter();
        this.onTouchedCallback = this.noop;
        this.onChangeCallback = this.noop;
        this.onTouchedCallback = this.onTouchedCallback === undefined ? this.noop : this.onTouchedCallback;
        this.onChangeCallback = this.onChangeCallback === undefined ? this.noop : this.onChangeCallback;
    }
    /**
     * @return {?}
     */
    get tagsfocused() {
        return this.isTagsFocused;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChangeCallback = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouchedCallback = fn; }
    /**
     * @param {?} value
     * @return {?}
     */
    removeValue(value) {
        /** @type {?} */
        const index = this.values.indexOf(value, 0);
        if (index !== undefined) {
            this.values.splice(index, 1);
            this.labelsChange.emit(this.values);
        }
    }
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    addValue(value, event) {
        event.preventDefault();
        if (!value || value.trim() === '') {
            return;
        }
        this.values.push(value);
        this.labelsChange.emit(this.values);
        this.labelToAdd = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this.values) {
            this.values = value;
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.focused = 'md-focused';
        this.isTagsFocused = true;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    }
    /**
     * @return {?}
     */
    focusOutFunction() {
        this.focused = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    }
}
MaterialChipsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-material-chips',
                template: "<div *ngIf=\"values && values.length\" class=\"md-chip-list\"  [ngClass]=\"focused\">\n  <span *ngFor=\"let value of values\" class=\"md-chip\" selected >         \n    {{value}} <i class=\"close fas fa-times\" aria-hidden=\"true\" (click)=\"removeValue(value)\" ></i>\n  </span>\n\n  <span>\n    <input  [(ngModel)]=\"labelToAdd\" \n            (keyup.enter)=\"addValue(box.value, $event)\"\n            (focus)=\"onFocus()\" \n            (focusout)=\"focusOutFunction()\"  \n            #box />\n  </span>\n</div>\n<div *ngIf=\"!values || !values.length\">\n  <input class=\"md-chips-input\" placeholder=\"{{ placeholder }}\" #tbox \n    (keyup.enter)=\"addValue(tbox.value, $event)\"/>\n</div>\n",
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
MaterialChipsComponent.ctorParameters = () => [];
MaterialChipsComponent.propDecorators = {
    placeholder: [{ type: Input, args: ['placeholder',] }],
    tagsfocusedChange: [{ type: Output }],
    labelsChange: [{ type: Output }],
    tagsfocused: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MaterialChipsComponent.prototype.placeholder;
    /** @type {?} */
    MaterialChipsComponent.prototype.addAreaDisplayed;
    /** @type {?} */
    MaterialChipsComponent.prototype.isTagsFocused;
    /** @type {?} */
    MaterialChipsComponent.prototype.values;
    /** @type {?} */
    MaterialChipsComponent.prototype.labelToAdd;
    /** @type {?} */
    MaterialChipsComponent.prototype.focused;
    /** @type {?} */
    MaterialChipsComponent.prototype.selected;
    /** @type {?} */
    MaterialChipsComponent.prototype.noop;
    /** @type {?} */
    MaterialChipsComponent.prototype.tagsfocusedChange;
    /** @type {?} */
    MaterialChipsComponent.prototype.labelsChange;
    /**
     * @type {?}
     * @private
     */
    MaterialChipsComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    MaterialChipsComponent.prototype.onChangeCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby90YWdzL2NoaXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR25ELE1BQU0sT0FBTyxtQ0FBbUMsR0FBUTtJQUN0RCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztJQUNyRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBUUQsTUFBTSxPQUFPLHNCQUFzQjtJQXdCakM7UUF0QjZCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRzlDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBT1osc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxpQkFBWSxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO1FBT3RFLHNCQUFpQixHQUFlLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUMscUJBQWdCLEdBQXFCLElBQUksQ0FBQyxJQUFJLENBQUM7UUFJckQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2xHLENBQUM7Ozs7SUFaRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFJRCxnQkFBZ0IsQ0FBQyxFQUFPLElBQUksSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ3pELGlCQUFpQixDQUFDLEVBQU8sSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFNM0QsV0FBVyxDQUFDLEtBQWE7O2NBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWEsRUFBRSxLQUFVO1FBQ2hDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWU7UUFDeEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUNELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQWxFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsdXNCQUFtQztnQkFDbkMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7Ozs7OzBCQUlFLEtBQUssU0FBQyxhQUFhO2dDQVVuQixNQUFNOzJCQUNOLE1BQU07MEJBRU4sS0FBSzs7OztJQWJOLDZDQUE4Qzs7SUFFOUMsa0RBQTBCOztJQUMxQiwrQ0FBc0I7O0lBQ3RCLHdDQUFpQjs7SUFDakIsNENBQW1COztJQUNuQix5Q0FBZ0I7O0lBQ2hCLDBDQUFpQjs7SUFDakIsc0NBQVU7O0lBRVYsbURBQWlEOztJQUNqRCw4Q0FBOEU7Ozs7O0lBTzlFLG1EQUFrRDs7Ozs7SUFDbEQsa0RBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbmV4cG9ydCBjb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF0ZXJpYWxDaGlwc0NvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItbWF0ZXJpYWwtY2hpcHMnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxDaGlwc0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCdwbGFjZWhvbGRlcicpIHB1YmxpYyBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIGFkZEFyZWFEaXNwbGF5ZWQ6IGJvb2xlYW47XG4gIGlzVGFnc0ZvY3VzZWQgPSBmYWxzZTtcbiAgdmFsdWVzOiBzdHJpbmdbXTtcbiAgbGFiZWxUb0FkZDogc3RyaW5nO1xuICBmb2N1c2VkOiBzdHJpbmc7XG4gIHNlbGVjdGVkOiBzdHJpbmc7XG4gIG5vb3A6IGFueTtcblxuICBAT3V0cHV0KCkgdGFnc2ZvY3VzZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsYWJlbHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB0YWdzZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1RhZ3NGb2N1c2VkO1xuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IHRoaXMubm9vcDtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gdGhpcy5ub29wO1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHsgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47IH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkgeyB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47IH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPT09IHVuZGVmaW5lZCA/IHRoaXMubm9vcCA6IHRoaXMub25Ub3VjaGVkQ2FsbGJhY2s7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gdGhpcy5vbkNoYW5nZUNhbGxiYWNrID09PSB1bmRlZmluZWQgPyB0aGlzLm5vb3AgOiB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2s7XG4gIH1cblxuICByZW1vdmVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnZhbHVlcy5pbmRleE9mKHZhbHVlLCAwKTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMubGFiZWxzQ2hhbmdlLmVtaXQodGhpcy52YWx1ZXMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFZhbHVlKHZhbHVlOiBzdHJpbmcsIGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdmFsdWUgfHwgdmFsdWUudHJpbSgpID09PSAnJykgeyByZXR1cm47IH1cbiAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB0aGlzLmxhYmVsc0NoYW5nZS5lbWl0KHRoaXMudmFsdWVzKTtcbiAgICB0aGlzLmxhYmVsVG9BZGQgPSAnJztcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlcykge1xuICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9ICdtZC1mb2N1c2VkJztcbiAgICB0aGlzLmlzVGFnc0ZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMudGFnc2ZvY3VzZWRDaGFuZ2UuZW1pdCh0aGlzLmlzVGFnc0ZvY3VzZWQpO1xuICB9XG4gIGZvY3VzT3V0RnVuY3Rpb24oKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gJyc7XG4gICAgdGhpcy5pc1RhZ3NGb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy50YWdzZm9jdXNlZENoYW5nZS5lbWl0KHRoaXMuaXNUYWdzRm9jdXNlZCk7XG4gIH1cbn1cbiJdfQ==