/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { timer as observableTimer } from 'rxjs';
import { Directive, ElementRef, EventEmitter, Host, HostListener, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MdbCompleterDirective } from './completer.directive';
import { isNil } from '../globals';
// keyboard events
/** @type {?} */
const KEY_DW = 40;
/** @type {?} */
const KEY_RT = 39;
/** @type {?} */
const KEY_UP = 38;
/** @type {?} */
const KEY_LF = 37;
/** @type {?} */
const KEY_ES = 27;
/** @type {?} */
const KEY_EN = 13;
/** @type {?} */
const KEY_TAB = 9;
export class MdbInputCompleteDirective {
    // constructor( @Host() private completer: MdbCompleterDirective, private ngModel: NgModel, private el: ElementRef) {
    /**
     * @param {?} completer
     * @param {?} tempngModel
     * @param {?} el
     */
    constructor(completer, tempngModel, el) {
        this.completer = completer;
        this.tempngModel = tempngModel;
        this.el = el;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.openOnFocus = false;
        this.ngModelChange = new EventEmitter();
        this._searchStr = '';
        this._displayStr = '';
        // private blurTimer: Subscription = null;
        this.blurTimer = null;
        this.ngModel = this.tempngModel;
        this.completer.selected.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (!item) {
                return;
            }
            if (this.clearSelected) {
                this.searchStr = '';
            }
            else {
                this.searchStr = item.title;
            }
            this.ngModelChange.emit(this.searchStr);
        }));
        this.completer.highlighted.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (this.fillHighlighted) {
                if (item) {
                    this._displayStr = item.title;
                    this.ngModelChange.emit(item.title);
                }
                else {
                    this._displayStr = this.searchStr;
                    this.ngModelChange.emit(this.searchStr);
                }
            }
        }));
        // this.ngModel.valueChanges.subscribe(value => {
        this.ngModel.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (!isNil(value) && this._displayStr !== value) {
                if (this.searchStr !== value) {
                    this.completer.search(value);
                }
                this.searchStr = value;
            }
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyupHandler(event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            this.restoreSearchValue();
            this.completer.clear();
        }
        else {
            if (this.searchStr) {
                this.completer.open();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydownHandler(event) {
        if (event.keyCode === KEY_EN) {
            if (this.completer.hasHighlighted()) {
                event.preventDefault();
            }
            this.handleSelection();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.open();
            this.completer.nextRow();
        }
        else if (event.keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (event.keyCode === KEY_TAB) {
            this.handleSelection();
        }
        else if (event.keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                // get the focus back
                this.el.nativeElement.focus();
            }), 0);
            return;
        }
        this.blurTimer = observableTimer(200).subscribe((/**
         * @return {?}
         */
        () => {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
            if (this.overrideSuggested) {
                this.completer.onSelected({ title: this.searchStr, originalObject: null });
            }
            else {
                if (this.clearUnselected && !this.completer.hasSelected) {
                    this.searchStr = '';
                    this.el.nativeElement.value = '';
                }
                else {
                    this.restoreSearchValue();
                }
            }
            this.completer.clear();
        }));
    }
    /**
     * @return {?}
     */
    onfocus() {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.openOnFocus) {
            this.completer.open();
        }
    }
    /**
     * @return {?}
     */
    get searchStr() {
        return this._searchStr;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    set searchStr(term) {
        this._searchStr = term;
        this._displayStr = term;
    }
    /**
     * @private
     * @return {?}
     */
    handleSelection() {
        if (this.completer.hasHighlighted()) {
            this._searchStr = '';
            this.completer.selectCurrent();
        }
        else if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            this.completer.clear();
        }
    }
    /**
     * @private
     * @return {?}
     */
    restoreSearchValue() {
        if (this.fillHighlighted) {
            if (this._displayStr !== this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    }
}
MdbInputCompleteDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbCompleterInput]',
            },] }
];
/** @nocollapse */
MdbInputCompleteDirective.ctorParameters = () => [
    { type: MdbCompleterDirective, decorators: [{ type: Host }] },
    { type: NgModel },
    { type: ElementRef }
];
MdbInputCompleteDirective.propDecorators = {
    clearSelected: [{ type: Input, args: ['clearSelected',] }],
    clearUnselected: [{ type: Input, args: ['clearUnselected',] }],
    overrideSuggested: [{ type: Input, args: ['overrideSuggested',] }],
    fillHighlighted: [{ type: Input, args: ['fillHighlighted',] }],
    openOnFocus: [{ type: Input, args: ['openOnFocus',] }],
    ngModelChange: [{ type: Output }],
    keyupHandler: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    keydownHandler: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    onfocus: [{ type: HostListener, args: ['focus',] }]
};
if (false) {
    /** @type {?} */
    MdbInputCompleteDirective.prototype.clearSelected;
    /** @type {?} */
    MdbInputCompleteDirective.prototype.clearUnselected;
    /** @type {?} */
    MdbInputCompleteDirective.prototype.overrideSuggested;
    /** @type {?} */
    MdbInputCompleteDirective.prototype.fillHighlighted;
    /** @type {?} */
    MdbInputCompleteDirective.prototype.openOnFocus;
    /** @type {?} */
    MdbInputCompleteDirective.prototype.ngModelChange;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype._searchStr;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype._displayStr;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype.ngModel;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype.blurTimer;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype.completer;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype.tempngModel;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2RpcmVjdGl2ZXMvY29tcGxldGVyLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLEtBQUssSUFBSSxlQUFlLEVBQWlCLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7OztNQUs3QixNQUFNLEdBQUcsRUFBRTs7TUFDWCxNQUFNLEdBQUcsRUFBRTs7TUFDWCxNQUFNLEdBQUcsRUFBRTs7TUFDWCxNQUFNLEdBQUcsRUFBRTs7TUFDWCxNQUFNLEdBQUcsRUFBRTs7TUFDWCxNQUFNLEdBQUcsRUFBRTs7TUFDWCxPQUFPLEdBQUcsQ0FBQztBQUtqQixNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBY3BDLFlBQTZCLFNBQWdDLEVBQVUsV0FBb0IsRUFBVSxFQUFjO1FBQXRGLGNBQVMsR0FBVCxTQUFTLENBQXVCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVM7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBYnBGLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUM1QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUMzQixnQkFBVyxHQUFHLEtB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QUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQXVCbEMsWUFBWSxTQUFDLE1BQU07c0JBZ0NuQixZQUFZLFNBQUMsT0FBTzs7OztJQS9IckIsa0RBQXFEOztJQUNyRCxvREFBeUQ7O0lBQ3pELHNEQUE2RDs7SUFDN0Qsb0RBQXdEOztJQUN4RCxnREFBaUQ7O0lBRWpELGtEQUF1RTs7Ozs7SUFDdkUsK0NBQXdCOzs7OztJQUN4QixnREFBeUI7Ozs7O0lBQ3pCLDRDQUErQjs7Ozs7SUFFL0IsOENBQTZDOzs7OztJQUVoQyw4Q0FBZ0Q7Ozs7O0lBQUUsZ0RBQTRCOzs7OztJQUFFLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHt0aW1lciBhcyBvYnNlcnZhYmxlVGltZXIsICBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvbXBsZXRlckl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBsZXRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZGJDb21wbGV0ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBsZXRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgaXNOaWwgfSBmcm9tICcuLi9nbG9iYWxzJztcblxuXG5cbi8vIGtleWJvYXJkIGV2ZW50c1xuY29uc3QgS0VZX0RXID0gNDA7XG5jb25zdCBLRVlfUlQgPSAzOTtcbmNvbnN0IEtFWV9VUCA9IDM4O1xuY29uc3QgS0VZX0xGID0gMzc7XG5jb25zdCBLRVlfRVMgPSAyNztcbmNvbnN0IEtFWV9FTiA9IDEzO1xuY29uc3QgS0VZX1RBQiA9IDk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJDb21wbGV0ZXJJbnB1dF0nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJJbnB1dENvbXBsZXRlRGlyZWN0aXZlIHtcbiAgQElucHV0KCdjbGVhclNlbGVjdGVkJykgcHVibGljIGNsZWFyU2VsZWN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCdjbGVhclVuc2VsZWN0ZWQnKSBwdWJsaWMgY2xlYXJVbnNlbGVjdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgnb3ZlcnJpZGVTdWdnZXN0ZWQnKSBwdWJsaWMgb3ZlcnJpZGVTdWdnZXN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCdmaWxsSGlnaGxpZ2h0ZWQnKSBwdWJsaWMgZmlsbEhpZ2hsaWdodGVkID0gdHJ1ZTtcbiAgQElucHV0KCdvcGVuT25Gb2N1cycpIHB1YmxpYyBvcGVuT25Gb2N1cyA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgbmdNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByaXZhdGUgX3NlYXJjaFN0ciA9ICcnO1xuICBwcml2YXRlIF9kaXNwbGF5U3RyID0gJyc7XG4gIHByaXZhdGUgbmdNb2RlbDogTmdNb2RlbCB8IGFueTtcbiAgLy8gcHJpdmF0ZSBibHVyVGltZXI6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIHByaXZhdGUgYmx1clRpbWVyOiBTdWJzY3JpcHRpb24gfCBhbnkgPSBudWxsO1xuICAvLyBjb25zdHJ1Y3RvciggQEhvc3QoKSBwcml2YXRlIGNvbXBsZXRlcjogTWRiQ29tcGxldGVyRGlyZWN0aXZlLCBwcml2YXRlIG5nTW9kZWw6IE5nTW9kZWwsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgY29uc3RydWN0b3IoIEBIb3N0KCkgcHJpdmF0ZSBjb21wbGV0ZXI6IE1kYkNvbXBsZXRlckRpcmVjdGl2ZSwgcHJpdmF0ZSB0ZW1wbmdNb2RlbDogTmdNb2RlbCwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMubmdNb2RlbCA9IHRoaXMudGVtcG5nTW9kZWw7XG5cbiAgICB0aGlzLmNvbXBsZXRlci5zZWxlY3RlZC5zdWJzY3JpYmUoKGl0ZW06IENvbXBsZXRlckl0ZW0pID0+IHtcbiAgICAgIGlmICghaXRlbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jbGVhclNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU3RyID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlYXJjaFN0ciA9IGl0ZW0udGl0bGU7XG4gICAgICB9XG4gICAgICB0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaFN0cik7XG4gICAgfSk7XG4gICAgdGhpcy5jb21wbGV0ZXIuaGlnaGxpZ2h0ZWQuc3Vic2NyaWJlKChpdGVtOiBDb21wbGV0ZXJJdGVtKSA9PiB7XG4gICAgICBpZiAodGhpcy5maWxsSGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICB0aGlzLl9kaXNwbGF5U3RyID0gaXRlbS50aXRsZTtcbiAgICAgICAgICB0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdChpdGVtLnRpdGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9kaXNwbGF5U3RyID0gdGhpcy5zZWFyY2hTdHI7XG4gICAgICAgICAgdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQodGhpcy5zZWFyY2hTdHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gdGhpcy5uZ01vZGVsLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgIHRoaXMubmdNb2RlbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICBpZiAoIWlzTmlsKHZhbHVlKSAmJiB0aGlzLl9kaXNwbGF5U3RyICE9PSB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hTdHIgIT09IHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZXIuc2VhcmNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlYXJjaFN0ciA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBwdWJsaWMga2V5dXBIYW5kbGVyKGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLRVlfTEYgfHwgZXZlbnQua2V5Q29kZSA9PT0gS0VZX1JUIHx8IGV2ZW50LmtleUNvZGUgPT09IEtFWV9UQUIpIHtcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZX1VQIHx8IGV2ZW50LmtleUNvZGUgPT09IEtFWV9FTikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtFWV9EVykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdGhpcy5jb21wbGV0ZXIuc2VhcmNoKHRoaXMuc2VhcmNoU3RyKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtFWV9FUykge1xuICAgICAgdGhpcy5yZXN0b3JlU2VhcmNoVmFsdWUoKTtcbiAgICAgIHRoaXMuY29tcGxldGVyLmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlYXJjaFN0cikge1xuICAgICAgICB0aGlzLmNvbXBsZXRlci5vcGVuKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBrZXlkb3duSGFuZGxlcihldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtFWV9FTikge1xuICAgICAgaWYgKHRoaXMuY29tcGxldGVyLmhhc0hpZ2hsaWdodGVkKCkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlU2VsZWN0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLRVlfRFcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNvbXBsZXRlci5vcGVuKCk7XG4gICAgICB0aGlzLmNvbXBsZXRlci5uZXh0Um93KCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLRVlfVVApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNvbXBsZXRlci5wcmV2Um93KCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLRVlfVEFCKSB7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdGlvbigpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZX0VTKSB7XG4gICAgICAvLyBUaGlzIGlzIHZlcnkgc3BlY2lmaWMgdG8gSUUxMC8xMSAjMjcyXG4gICAgICAvLyB3aXRob3V0IHRoaXMsIElFIGNsZWFycyB0aGUgaW5wdXQgdGV4dFxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgcHVibGljIG9uQmx1cigpOiBhbnkge1xuICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gY2FuY2VsIEJsdXIgZm9yIElFXG4gICAgaWYgKHRoaXMuY29tcGxldGVyLmlzQ2FuY2VsQmx1cigpKSB7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gZ2V0IHRoZSBmb2N1cyBiYWNrXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYmx1clRpbWVyID0gb2JzZXJ2YWJsZVRpbWVyKDIwMCkuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmJsdXJUaW1lci51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmJsdXJUaW1lciA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLm92ZXJyaWRlU3VnZ2VzdGVkKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZXIub25TZWxlY3RlZCh7IHRpdGxlOiB0aGlzLnNlYXJjaFN0ciwgb3JpZ2luYWxPYmplY3Q6IG51bGwgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2xlYXJVbnNlbGVjdGVkICYmICF0aGlzLmNvbXBsZXRlci5oYXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdHIgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVTZWFyY2hWYWx1ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBsZXRlci5jbGVhcigpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gIHB1YmxpYyBvbmZvY3VzKCkge1xuICAgIGlmICh0aGlzLmJsdXJUaW1lcikge1xuICAgICAgdGhpcy5ibHVyVGltZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuYmx1clRpbWVyID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMub3Blbk9uRm9jdXMpIHtcbiAgICAgIHRoaXMuY29tcGxldGVyLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNlYXJjaFN0cigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoU3RyO1xuICB9XG5cbiAgcHVibGljIHNldCBzZWFyY2hTdHIodGVybTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoU3RyID0gdGVybTtcbiAgICB0aGlzLl9kaXNwbGF5U3RyID0gdGVybTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmNvbXBsZXRlci5oYXNIaWdobGlnaHRlZCgpKSB7XG4gICAgICB0aGlzLl9zZWFyY2hTdHIgPSAnJztcbiAgICAgIHRoaXMuY29tcGxldGVyLnNlbGVjdEN1cnJlbnQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3ZlcnJpZGVTdWdnZXN0ZWQpIHtcbiAgICAgIHRoaXMuY29tcGxldGVyLm9uU2VsZWN0ZWQoeyB0aXRsZTogdGhpcy5zZWFyY2hTdHIsIG9yaWdpbmFsT2JqZWN0OiBudWxsIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBsZXRlci5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZVNlYXJjaFZhbHVlKCkge1xuICAgIGlmICh0aGlzLmZpbGxIaWdobGlnaHRlZCkge1xuICAgICAgaWYgKHRoaXMuX2Rpc3BsYXlTdHIgIT09IHRoaXMuc2VhcmNoU3RyKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlTdHIgPSB0aGlzLnNlYXJjaFN0cjtcbiAgICAgICAgdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQodGhpcy5zZWFyY2hTdHIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19