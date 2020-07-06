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
var KEY_DW = 40;
/** @type {?} */
var KEY_RT = 39;
/** @type {?} */
var KEY_UP = 38;
/** @type {?} */
var KEY_LF = 37;
/** @type {?} */
var KEY_ES = 27;
/** @type {?} */
var KEY_EN = 13;
/** @type {?} */
var KEY_TAB = 9;
var MdbInputCompleteDirective = /** @class */ (function () {
    // constructor( @Host() private completer: MdbCompleterDirective, private ngModel: NgModel, private el: ElementRef) {
    function MdbInputCompleteDirective(completer, tempngModel, el) {
        var _this = this;
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
        function (item) {
            if (!item) {
                return;
            }
            if (_this.clearSelected) {
                _this.searchStr = '';
            }
            else {
                _this.searchStr = item.title;
            }
            _this.ngModelChange.emit(_this.searchStr);
        }));
        this.completer.highlighted.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (_this.fillHighlighted) {
                if (item) {
                    _this._displayStr = item.title;
                    _this.ngModelChange.emit(item.title);
                }
                else {
                    _this._displayStr = _this.searchStr;
                    _this.ngModelChange.emit(_this.searchStr);
                }
            }
        }));
        // this.ngModel.valueChanges.subscribe(value => {
        this.ngModel.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!isNil(value) && _this._displayStr !== value) {
                if (_this.searchStr !== value) {
                    _this.completer.search(value);
                }
                _this.searchStr = value;
            }
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.keyupHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.keydownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                // get the focus back
                _this.el.nativeElement.focus();
            }), 0);
            return;
        }
        this.blurTimer = observableTimer(200).subscribe((/**
         * @return {?}
         */
        function () {
            _this.blurTimer.unsubscribe();
            _this.blurTimer = null;
            if (_this.overrideSuggested) {
                _this.completer.onSelected({ title: _this.searchStr, originalObject: null });
            }
            else {
                if (_this.clearUnselected && !_this.completer.hasSelected) {
                    _this.searchStr = '';
                    _this.el.nativeElement.value = '';
                }
                else {
                    _this.restoreSearchValue();
                }
            }
            _this.completer.clear();
        }));
    };
    /**
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.onfocus = /**
     * @return {?}
     */
    function () {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.openOnFocus) {
            this.completer.open();
        }
    };
    Object.defineProperty(MdbInputCompleteDirective.prototype, "searchStr", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchStr;
        },
        set: /**
         * @param {?} term
         * @return {?}
         */
        function (term) {
            this._searchStr = term;
            this._displayStr = term;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.handleSelection = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.restoreSearchValue = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.fillHighlighted) {
            if (this._displayStr !== this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    };
    MdbInputCompleteDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbCompleterInput]',
                },] }
    ];
    /** @nocollapse */
    MdbInputCompleteDirective.ctorParameters = function () { return [
        { type: MdbCompleterDirective, decorators: [{ type: Host }] },
        { type: NgModel },
        { type: ElementRef }
    ]; };
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
    return MdbInputCompleteDirective;
}());
export { MdbInputCompleteDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2RpcmVjdGl2ZXMvY29tcGxldGVyLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLEtBQUssSUFBSSxlQUFlLEVBQWlCLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7OztJQUs3QixNQUFNLEdBQUcsRUFBRTs7SUFDWCxNQUFNLEdBQUcsRUFBRTs7SUFDWCxNQUFNLEdBQUcsRUFBRTs7SUFDWCxNQUFNLEdBQUcsRUFBRTs7SUFDWCxNQUFNLEdBQUcsRUFBRTs7SUFDWCxNQUFNLEdBQUcsRUFBRTs7SUFDWCxPQUFPLEdBQUcsQ0FBQztBQUVqQjtJQWdCRSxxSEFBcUg7SUFDckgsbUNBQTZCLFNBQWdDLEVBQVUsV0FBb0IsRUFBVSxFQUFjO1FBQW5ILGlCQWtDQztRQWxDNEIsY0FBUyxHQUFULFNBQVMsQ0FBdUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFicEYsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzNCLGdCQUFXLEdB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QU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztpQ0F1QmhDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBdUJsQyxZQUFZLFNBQUMsTUFBTTswQkFnQ25CLFlBQVksU0FBQyxPQUFPOztJQXVDdkIsZ0NBQUM7Q0FBQSxBQTFLRCxJQTBLQztTQXZLWSx5QkFBeUI7OztJQUNwQyxrREFBcUQ7O0lBQ3JELG9EQUF5RDs7SUFDekQsc0RBQTZEOztJQUM3RCxvREFBd0Q7O0lBQ3hELGdEQUFpRDs7SUFFakQsa0RBQXVFOzs7OztJQUN2RSwrQ0FBd0I7Ozs7O0lBQ3hCLGdEQUF5Qjs7Ozs7SUFDekIsNENBQStCOzs7OztJQUUvQiw4Q0FBNkM7Ozs7O0lBRWhDLDhDQUFnRDs7Ozs7SUFBRSxnREFBNEI7Ozs7O0lBQUUsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge3RpbWVyIGFzIG9ic2VydmFibGVUaW1lciwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3QsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ29tcGxldGVySXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcGxldGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE1kYkNvbXBsZXRlckRpcmVjdGl2ZSB9IGZyb20gJy4vY29tcGxldGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBpc05pbCB9IGZyb20gJy4uL2dsb2JhbHMnO1xuXG5cblxuLy8ga2V5Ym9hcmQgZXZlbnRzXG5jb25zdCBLRVlfRFcgPSA0MDtcbmNvbnN0IEtFWV9SVCA9IDM5O1xuY29uc3QgS0VZX1VQID0gMzg7XG5jb25zdCBLRVlfTEYgPSAzNztcbmNvbnN0IEtFWV9FUyA9IDI3O1xuY29uc3QgS0VZX0VOID0gMTM7XG5jb25zdCBLRVlfVEFCID0gOTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYkNvbXBsZXRlcklucHV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYklucHV0Q29tcGxldGVEaXJlY3RpdmUge1xuICBASW5wdXQoJ2NsZWFyU2VsZWN0ZWQnKSBwdWJsaWMgY2xlYXJTZWxlY3RlZCA9IGZhbHNlO1xuICBASW5wdXQoJ2NsZWFyVW5zZWxlY3RlZCcpIHB1YmxpYyBjbGVhclVuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCdvdmVycmlkZVN1Z2dlc3RlZCcpIHB1YmxpYyBvdmVycmlkZVN1Z2dlc3RlZCA9IGZhbHNlO1xuICBASW5wdXQoJ2ZpbGxIaWdobGlnaHRlZCcpIHB1YmxpYyBmaWxsSGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICBASW5wdXQoJ29wZW5PbkZvY3VzJykgcHVibGljIG9wZW5PbkZvY3VzID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBuZ01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSBfc2VhcmNoU3RyID0gJyc7XG4gIHByaXZhdGUgX2Rpc3BsYXlTdHIgPSAnJztcbiAgcHJpdmF0ZSBuZ01vZGVsOiBOZ01vZGVsIHwgYW55O1xuICAvLyBwcml2YXRlIGJsdXJUaW1lcjogU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgcHJpdmF0ZSBibHVyVGltZXI6IFN1YnNjcmlwdGlvbiB8IGFueSA9IG51bGw7XG4gIC8vIGNvbnN0cnVjdG9yKCBASG9zdCgpIHByaXZhdGUgY29tcGxldGVyOiBNZGJDb21wbGV0ZXJEaXJlY3RpdmUsIHByaXZhdGUgbmdNb2RlbDogTmdNb2RlbCwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICBjb25zdHJ1Y3RvciggQEhvc3QoKSBwcml2YXRlIGNvbXBsZXRlcjogTWRiQ29tcGxldGVyRGlyZWN0aXZlLCBwcml2YXRlIHRlbXBuZ01vZGVsOiBOZ01vZGVsLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5uZ01vZGVsID0gdGhpcy50ZW1wbmdNb2RlbDtcblxuICAgIHRoaXMuY29tcGxldGVyLnNlbGVjdGVkLnN1YnNjcmliZSgoaXRlbTogQ29tcGxldGVySXRlbSkgPT4ge1xuICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNsZWFyU2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTdHIgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU3RyID0gaXRlbS50aXRsZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2VhcmNoU3RyKTtcbiAgICB9KTtcbiAgICB0aGlzLmNvbXBsZXRlci5oaWdobGlnaHRlZC5zdWJzY3JpYmUoKGl0ZW06IENvbXBsZXRlckl0ZW0pID0+IHtcbiAgICAgIGlmICh0aGlzLmZpbGxIaWdobGlnaHRlZCkge1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIHRoaXMuX2Rpc3BsYXlTdHIgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KGl0ZW0udGl0bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2Rpc3BsYXlTdHIgPSB0aGlzLnNlYXJjaFN0cjtcbiAgICAgICAgICB0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaFN0cik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyB0aGlzLm5nTW9kZWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgdGhpcy5uZ01vZGVsLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIGlmICghaXNOaWwodmFsdWUpICYmIHRoaXMuX2Rpc3BsYXlTdHIgIT09IHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFN0ciAhPT0gdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlci5zZWFyY2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VhcmNoU3RyID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBrZXl1cEhhbmRsZXIoZXZlbnQ6IGFueSk6IGFueSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtFWV9MRiB8fCBldmVudC5rZXlDb2RlID09PSBLRVlfUlQgfHwgZXZlbnQua2V5Q29kZSA9PT0gS0VZX1RBQikge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLRVlfVVAgfHwgZXZlbnQua2V5Q29kZSA9PT0gS0VZX0VOKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZX0RXKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0aGlzLmNvbXBsZXRlci5zZWFyY2godGhpcy5zZWFyY2hTdHIpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZX0VTKSB7XG4gICAgICB0aGlzLnJlc3RvcmVTZWFyY2hWYWx1ZSgpO1xuICAgICAgdGhpcy5jb21wbGV0ZXIuY2xlYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc2VhcmNoU3RyKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVyLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGtleWRvd25IYW5kbGVyKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZX0VOKSB7XG4gICAgICBpZiAodGhpcy5jb21wbGV0ZXIuaGFzSGlnaGxpZ2h0ZWQoKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5oYW5kbGVTZWxlY3Rpb24oKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtFWV9EVykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY29tcGxldGVyLm9wZW4oKTtcbiAgICAgIHRoaXMuY29tcGxldGVyLm5leHRSb3coKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtFWV9VUCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY29tcGxldGVyLnByZXZSb3coKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtFWV9UQUIpIHtcbiAgICAgIHRoaXMuaGFuZGxlU2VsZWN0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLRVlfRVMpIHtcbiAgICAgIC8vIFRoaXMgaXMgdmVyeSBzcGVjaWZpYyB0byBJRTEwLzExICMyNzJcbiAgICAgIC8vIHdpdGhvdXQgdGhpcywgSUUgY2xlYXJzIHRoZSBpbnB1dCB0ZXh0XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBwdWJsaWMgb25CbHVyKCk6IGFueSB7XG4gICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBjYW5jZWwgQmx1ciBmb3IgSUVcbiAgICBpZiAodGhpcy5jb21wbGV0ZXIuaXNDYW5jZWxCbHVyKCkpIHtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAvLyBnZXQgdGhlIGZvY3VzIGJhY2tcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ibHVyVGltZXIgPSBvYnNlcnZhYmxlVGltZXIoMjAwKS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuYmx1clRpbWVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuYmx1clRpbWVyID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMub3ZlcnJpZGVTdWdnZXN0ZWQpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlci5vblNlbGVjdGVkKHsgdGl0bGU6IHRoaXMuc2VhcmNoU3RyLCBvcmlnaW5hbE9iamVjdDogbnVsbCB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5jbGVhclVuc2VsZWN0ZWQgJiYgIXRoaXMuY29tcGxldGVyLmhhc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0ciA9ICcnO1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZVNlYXJjaFZhbHVlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcGxldGVyLmNsZWFyKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgcHVibGljIG9uZm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuYmx1clRpbWVyKSB7XG4gICAgICB0aGlzLmJsdXJUaW1lci51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5ibHVyVGltZXIgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcGVuT25Gb2N1cykge1xuICAgICAgdGhpcy5jb21wbGV0ZXIub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VhcmNoU3RyKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hTdHI7XG4gIH1cblxuICBwdWJsaWMgc2V0IHNlYXJjaFN0cih0ZXJtOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWFyY2hTdHIgPSB0ZXJtO1xuICAgIHRoaXMuX2Rpc3BsYXlTdHIgPSB0ZXJtO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZWxlY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY29tcGxldGVyLmhhc0hpZ2hsaWdodGVkKCkpIHtcbiAgICAgIHRoaXMuX3NlYXJjaFN0ciA9ICcnO1xuICAgICAgdGhpcy5jb21wbGV0ZXIuc2VsZWN0Q3VycmVudCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vdmVycmlkZVN1Z2dlc3RlZCkge1xuICAgICAgdGhpcy5jb21wbGV0ZXIub25TZWxlY3RlZCh7IHRpdGxlOiB0aGlzLnNlYXJjaFN0ciwgb3JpZ2luYWxPYmplY3Q6IG51bGwgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGVyLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlU2VhcmNoVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuZmlsbEhpZ2hsaWdodGVkKSB7XG4gICAgICBpZiAodGhpcy5fZGlzcGxheVN0ciAhPT0gdGhpcy5zZWFyY2hTdHIpIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheVN0ciA9IHRoaXMuc2VhcmNoU3RyO1xuICAgICAgICB0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaFN0cik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=