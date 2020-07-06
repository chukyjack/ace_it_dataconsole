/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
import { Component, Input, Output, EventEmitter, ViewChild, forwardRef, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MdbCompleterDirective } from '../directives/completer.directive';
import { CompleterService } from '../services/completer.service';
import { MAX_CHARS, MIN_SEARCH_LENGTH, PAUSE, TEXT_SEARCHING, TEXT_NO_RESULTS } from '../globals';
import { trigger, state, transition, animate, style } from '@angular/animations';
/** @type {?} */
const noop = (/**
 * @return {?}
 */
() => { });
const ɵ0 = noop;
/** @type {?} */
const COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => CompleterComponent)),
    multi: true
};
export class CompleterComponent {
    /**
     * @param {?} completerService
     * @param {?} renderer
     * @param {?} el
     */
    constructor(completerService, renderer, el) {
        this.completerService = completerService;
        this.renderer = renderer;
        this.el = el;
        this.inputName = '';
        this.inputId = '';
        this.pause = PAUSE;
        this.minSearchLength = MIN_SEARCH_LENGTH;
        this.maxChars = MAX_CHARS;
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.fillHighlighted = true;
        this.placeholder = '';
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.openOnFocus = false;
        this.autoHighlight = false;
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.blur = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.opened = new EventEmitter();
        this.keyup = new EventEmitter();
        this.keydown = new EventEmitter();
        this.focused = false;
        // Used in sliding-down animation
        this.state = 'unfocused';
        this.searchStr = '';
        this.control = new FormControl('');
        this.displaySearching = true;
        this.displayNoResults = true;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._focus = false;
        this._open = false;
        this._textNoResults = TEXT_NO_RESULTS;
        this._textSearching = TEXT_SEARCHING;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    set datasource(source) {
        if (source) {
            if (source instanceof Array) {
                this.dataService = this.completerService.local(source);
            }
            else if (typeof (source) === 'string') {
                this.dataService = this.completerService.remote(source);
            }
            else {
                this.dataService = source;
            }
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set textNoResults(text) {
        if (this._textNoResults !== text) {
            this._textNoResults = text;
            this.displayNoResults = this._textNoResults && this._textNoResults !== 'false';
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set textSearching(text) {
        if (this._textSearching !== text) {
            this._textSearching = text;
            this.displaySearching = this._textSearching && this._textSearching !== 'false';
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onkeyup(event) {
        if (event.target.value !== '') {
            this.renderer.setStyle(event.target.nextElementSibling, 'visibility', 'visible');
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onclick(event) {
        if (event.target === this.labelEl.nativeElement) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
            this._focus = true;
        }
    }
    /**
     * @return {?}
     */
    onFocusIn() {
        if (this.labelEl) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
        }
    }
    /**
     * @return {?}
     */
    onFocusOut() {
        if (this.mdbCompleterInput.nativeElement.value === '' && this.labelEl && !this.placeholder) {
            this.renderer.removeClass(this.labelEl.nativeElement, 'active');
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    activateClearButton(event) {
        this.mdbCompleterInput.nativeElement.value = '';
        this.value = '';
        this.renderer.setStyle(event.target, 'visibility', 'hidden');
    }
    /**
     * @param {?} buttonState
     * @return {?}
     */
    triggerClearButtonAnimation(buttonState) {
        this.state = buttonState;
    }
    /**
     * @return {?}
     */
    get value() { return this.searchStr; }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this.searchStr) {
            this.searchStr = v;
        }
        // Propagate the change in any case
        this._onChangeCallback(v);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.labelEl) {
            this.renderer.removeClass(this.labelEl.nativeElement, 'active');
        }
        if (this.autofocus) {
            this._focus = true;
        }
        if (this.initialValue || this.searchStr || this.placeholder) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._focus) {
            this.mdbCompleterInput.nativeElement.focus();
            this._focus = false;
        }
    }
    /**
     * @return {?}
     */
    onTouched() {
        this._onTouchedCallback();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.searchStr = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.completer.selected.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            this.selected.emit(item);
        }));
        this.completer.highlighted.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            this.highlighted.emit(item);
        }));
        this.completer.opened.subscribe((/**
         * @param {?} isOpen
         * @return {?}
         */
        (isOpen) => {
            this._open = isOpen;
            this.opened.emit(isOpen);
        }));
        if (this.initialValue) {
            this.searchStr = this.initialValue;
            this.onFocus();
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouched();
        if (this.searchStr === undefined || this.searchStr === '') {
            this.focused = false;
        }
        this.blur.emit(this);
    }
    /**
     * @return {?}
     */
    onFocus() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.focused = true;
        }), 0);
        this.focusEvent.emit({ focused: true, element: this.el });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChange(value) {
        this.value = value;
    }
    /**
     * @return {?}
     */
    open() {
        this.completer.open();
    }
    /**
     * @return {?}
     */
    close() {
        this.completer.clear();
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.mdbCompleterInput) {
            this.mdbCompleterInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    }
    /**
     * @return {?}
     */
    isOpen() {
        return this._open;
    }
}
CompleterComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-autocomplete, mdb-completer',
                template: "<div class=\"completer-holder md-form\" mdbCompleter>\n\n  <input #mdbCompleterInput [attr.id]=\"inputId.length > 0 ? inputId : null\" type=\"search\" class=\"completer-input form-control mdb-autocomplete\"\n    mdbCompleterInput [ngClass]=\"inputClass\" [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\"\n    [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\" [clearSelected]=\"clearSelected\" [clearUnselected]=\"clearUnselected\"\n    [overrideSuggested]=\"overrideSuggested\" [openOnFocus]=\"openOnFocus\" [fillHighlighted]=\"fillHighlighted\" (blur)=\"onBlur()\"\n    (focus)=\"onFocus()\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\n  />\n  <button type=\"button\"\n  [tabindex]=\"clearButtonTabIndex\"\n  class=\"mdb-autocomplete-clear\"\n  (click)=\"activateClearButton($event)\"\n  (focus)=\"triggerClearButtonAnimation('focused')\"\n  (blur)=\"triggerClearButtonAnimation('unfocused')\"\n  (mouseenter)=\"triggerClearButtonAnimation('focused')\"\n  (mouseleave)=\"triggerClearButtonAnimation('unfocused')\"\n  [@focusAnimation]=\"{value: state}\">\n    &#x2715;\n  </button>\n  <label #labelEl [ngClass]=\"{'active': focused || value || placeholder}\">{{ label }}</label>\n  <div class=\"completer-dropdown-holder\" *mdbList=\"dataService;\n      minSearchLength: minSearchLength;\n      pause: pause;\n      autoMatch: autoMatch;\n      initialValue: initialValue;\n      autoHighlight: autoHighlight;\n      let items = results;\n      let searchActive = searching;\n      let isInitialized = searchInitialized;\n      let isOpen = isOpen;\">\n    <div class=\"completer-dropdown\" mdbAutocompleteDropdown *ngIf=\"isInitialized && isOpen && ((items.length > 0 || displayNoResults) || (searchActive && displaySearching))\">\n      <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{_textSearching}}</div>\n      <div *ngIf=\"!searchActive && (!items || items.length === 0)\" class=\"completer-no-results\">{{_textNoResults}}</div>\n      <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n        <div class=\"completer-row\" [mdbRow]=\"rowIndex\" [dataItem]=\"item\">\n          <div class=\"completer-item-text\" [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n            <mdb-completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></mdb-completer-list-item>\n            <mdb-completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\"\n              [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n            </mdb-completer-list-item>\n          </div>\n          <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n            <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n            <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                providers: [COMPLETER_CONTROL_VALUE_ACCESSOR],
                animations: [trigger('focusAnimation', [
                        state('unfocused', style({ transform: 'scale(1.0, 1.0)', })),
                        state('focused', style({ transform: 'scale(1.5, 1.5)' })),
                        transition('unfocused => focused', animate('200ms ease-in')),
                        transition('focused => unfocused', animate('200ms ease-in'))
                    ])]
            }] }
];
/** @nocollapse */
CompleterComponent.ctorParameters = () => [
    { type: CompleterService },
    { type: Renderer2 },
    { type: ElementRef }
];
CompleterComponent.propDecorators = {
    dataService: [{ type: Input }],
    inputName: [{ type: Input }],
    inputId: [{ type: Input }],
    pause: [{ type: Input }],
    minSearchLength: [{ type: Input }],
    maxChars: [{ type: Input }],
    overrideSuggested: [{ type: Input }],
    clearSelected: [{ type: Input }],
    clearUnselected: [{ type: Input }],
    fillHighlighted: [{ type: Input }],
    placeholder: [{ type: Input }],
    matchClass: [{ type: Input }],
    fieldTabindex: [{ type: Input }],
    clearButtonTabIndex: [{ type: Input }],
    autoMatch: [{ type: Input }],
    disableInput: [{ type: Input }],
    inputClass: [{ type: Input }],
    autofocus: [{ type: Input }],
    openOnFocus: [{ type: Input }],
    initialValue: [{ type: Input }],
    autoHighlight: [{ type: Input }],
    label: [{ type: Input }],
    datasource: [{ type: Input }],
    textNoResults: [{ type: Input }],
    textSearching: [{ type: Input }],
    selected: [{ type: Output }],
    highlighted: [{ type: Output }],
    blur: [{ type: Output }],
    focusEvent: [{ type: Output }],
    opened: [{ type: Output }],
    keyup: [{ type: Output }],
    keydown: [{ type: Output }],
    completer: [{ type: ViewChild, args: [MdbCompleterDirective,] }],
    mdbCompleterInput: [{ type: ViewChild, args: ['mdbCompleterInput',] }],
    labelEl: [{ type: ViewChild, args: ['labelEl',] }],
    onkeyup: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onFocusIn: [{ type: HostListener, args: ['focusin',] }],
    onFocusOut: [{ type: HostListener, args: ['focusout',] }]
};
if (false) {
    /** @type {?} */
    CompleterComponent.prototype.dataService;
    /** @type {?} */
    CompleterComponent.prototype.inputName;
    /** @type {?} */
    CompleterComponent.prototype.inputId;
    /** @type {?} */
    CompleterComponent.prototype.pause;
    /** @type {?} */
    CompleterComponent.prototype.minSearchLength;
    /** @type {?} */
    CompleterComponent.prototype.maxChars;
    /** @type {?} */
    CompleterComponent.prototype.overrideSuggested;
    /** @type {?} */
    CompleterComponent.prototype.clearSelected;
    /** @type {?} */
    CompleterComponent.prototype.clearUnselected;
    /** @type {?} */
    CompleterComponent.prototype.fillHighlighted;
    /** @type {?} */
    CompleterComponent.prototype.placeholder;
    /** @type {?} */
    CompleterComponent.prototype.matchClass;
    /** @type {?} */
    CompleterComponent.prototype.fieldTabindex;
    /** @type {?} */
    CompleterComponent.prototype.clearButtonTabIndex;
    /** @type {?} */
    CompleterComponent.prototype.autoMatch;
    /** @type {?} */
    CompleterComponent.prototype.disableInput;
    /** @type {?} */
    CompleterComponent.prototype.inputClass;
    /** @type {?} */
    CompleterComponent.prototype.autofocus;
    /** @type {?} */
    CompleterComponent.prototype.openOnFocus;
    /** @type {?} */
    CompleterComponent.prototype.initialValue;
    /** @type {?} */
    CompleterComponent.prototype.autoHighlight;
    /** @type {?} */
    CompleterComponent.prototype.label;
    /** @type {?} */
    CompleterComponent.prototype.selected;
    /** @type {?} */
    CompleterComponent.prototype.highlighted;
    /** @type {?} */
    CompleterComponent.prototype.blur;
    /** @type {?} */
    CompleterComponent.prototype.focusEvent;
    /** @type {?} */
    CompleterComponent.prototype.opened;
    /** @type {?} */
    CompleterComponent.prototype.keyup;
    /** @type {?} */
    CompleterComponent.prototype.keydown;
    /** @type {?} */
    CompleterComponent.prototype.completer;
    /** @type {?} */
    CompleterComponent.prototype.mdbCompleterInput;
    /** @type {?} */
    CompleterComponent.prototype.labelEl;
    /** @type {?} */
    CompleterComponent.prototype.focused;
    /** @type {?} */
    CompleterComponent.prototype.state;
    /** @type {?} */
    CompleterComponent.prototype.searchStr;
    /** @type {?} */
    CompleterComponent.prototype.control;
    /** @type {?} */
    CompleterComponent.prototype.displaySearching;
    /** @type {?} */
    CompleterComponent.prototype.displayNoResults;
    /** @type {?} */
    CompleterComponent.prototype._onTouchedCallback;
    /** @type {?} */
    CompleterComponent.prototype._onChangeCallback;
    /** @type {?} */
    CompleterComponent.prototype._focus;
    /** @type {?} */
    CompleterComponent.prototype._open;
    /** @type {?} */
    CompleterComponent.prototype._textNoResults;
    /** @type {?} */
    CompleterComponent.prototype._textSearching;
    /**
     * @type {?}
     * @private
     */
    CompleterComponent.prototype.completerService;
    /**
     * @type {?}
     * @private
     */
    CompleterComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CompleterComponent.prototype.el;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2NvbXBvbmVudHMvY29tcGxldGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxFQUNhLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxTQUFTLEVBQzNFLFVBQVUsRUFBaUIsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQy9ELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNsRyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUUzRSxJQUFJOzs7QUFBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7OztNQUVoQixnQ0FBZ0MsR0FBRztJQUN2QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsRUFBQztJQUNqRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBY0QsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBa0Y3QixZQUNVLGdCQUFrQyxFQUNsQyxRQUFtQixFQUNuQixFQUFjO1FBRmQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFr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QkFPaEMsWUFBWSxTQUFDLFNBQVM7eUJBTXRCLFlBQVksU0FBQyxVQUFVOzs7O0lBekd4Qix5Q0FBMkM7O0lBQzNDLHVDQUErQjs7SUFDL0IscUNBQTZCOztJQUM3QixtQ0FBOEI7O0lBQzlCLDZDQUFvRDs7SUFDcEQsc0NBQXFDOztJQUNyQywrQ0FBMEM7O0lBQzFDLDJDQUFzQzs7SUFDdEMsNkNBQXdDOztJQUN4Qyw2Q0FBdUM7O0lBQ3ZDLHlDQUFpQzs7SUFDakMsd0NBQW1DOztJQUNuQywyQ0FBc0M7O0lBQ3RDLGlEQUE0Qzs7SUFDNUMsdUNBQWtDOztJQUNsQywwQ0FBcUM7O0lBQ3JDLHdDQUFtQzs7SUFDbkMsdUNBQWtDOztJQUNsQyx5Q0FBb0M7O0lBQ3BDLDBDQUFrQzs7SUFDbEMsMkNBQXNDOztJQUN0QyxtQ0FBOEI7O0lBK0I5QixzQ0FBOEQ7O0lBQzlELHlDQUFpRTs7SUFDakUsa0NBQTJDOztJQUMzQyx3Q0FBaUQ7O0lBQ2pELG9DQUFzRDs7SUFDdEQsbUNBQStEOztJQUMvRCxxQ0FBaUU7O0lBRWpFLHVDQUEwRTs7SUFDMUUsK0NBQXFFOztJQUNyRSxxQ0FBMEM7O0lBRTFDLHFDQUF1Qjs7SUFHdkIsbUNBQW9COztJQUVwQix1Q0FBc0I7O0lBQ3RCLHFDQUFxQzs7SUFFckMsOENBQTZCOztJQUM3Qiw4Q0FBNkI7O0lBQzdCLGdEQUFzQzs7SUFDdEMsK0NBQTJDOztJQUMzQyxvQ0FBZTs7SUFDZixtQ0FBYzs7SUFDZCw0Q0FBaUM7O0lBQ2pDLDRDQUFnQzs7Ozs7SUFHOUIsOENBQTBDOzs7OztJQUMxQyxzQ0FBMkI7Ozs7O0lBQzNCLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFZpZXdDaGlsZCxcbiAgZm9yd2FyZFJlZiwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNZGJDb21wbGV0ZXJEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2NvbXBsZXRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tcGxldGVyRGF0YSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbXBsZXRlci1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcGxldGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbXBsZXRlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBsZXRlckl0ZW0gfSBmcm9tICcuL2NvbXBsZXRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNQVhfQ0hBUlMsIE1JTl9TRUFSQ0hfTEVOR1RILCBQQVVTRSwgVEVYVF9TRUFSQ0hJTkcsIFRFWFRfTk9fUkVTVUxUUyB9IGZyb20gJy4uL2dsb2JhbHMnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG5cbmNvbnN0IENPTVBMRVRFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29tcGxldGVyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWF1dG9jb21wbGV0ZSwgbWRiLWNvbXBsZXRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wbGV0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtDT01QTEVURVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmb2N1c0FuaW1hdGlvbicsIFtcbiAgICBzdGF0ZSgndW5mb2N1c2VkJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxLjAsIDEuMCknLCB9KSksXG4gICAgc3RhdGUoJ2ZvY3VzZWQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDEuNSwgMS41KScgfSkpLFxuICAgIHRyYW5zaXRpb24oJ3VuZm9jdXNlZCA9PiBmb2N1c2VkJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICB0cmFuc2l0aW9uKCdmb2N1c2VkID0+IHVuZm9jdXNlZCcsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSlcbiAgXSldXG59KVxuZXhwb3J0IGNsYXNzIENvbXBsZXRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBwdWJsaWMgZGF0YVNlcnZpY2U6IENvbXBsZXRlckRhdGE7XG4gIEBJbnB1dCgpIHB1YmxpYyBpbnB1dE5hbWUgPSAnJztcbiAgQElucHV0KCkgcHVibGljIGlucHV0SWQgPSAnJztcbiAgQElucHV0KCkgcHVibGljIHBhdXNlID0gUEFVU0U7XG4gIEBJbnB1dCgpIHB1YmxpYyBtaW5TZWFyY2hMZW5ndGggPSBNSU5fU0VBUkNIX0xFTkdUSDtcbiAgQElucHV0KCkgcHVibGljIG1heENoYXJzID0gTUFYX0NIQVJTO1xuICBASW5wdXQoKSBwdWJsaWMgb3ZlcnJpZGVTdWdnZXN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGNsZWFyU2VsZWN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGNsZWFyVW5zZWxlY3RlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgZmlsbEhpZ2hsaWdodGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBtYXRjaENsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBmaWVsZFRhYmluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHB1YmxpYyBjbGVhckJ1dHRvblRhYkluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHB1YmxpYyBhdXRvTWF0Y2ggPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVJbnB1dCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgaW5wdXRDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgYXV0b2ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBvcGVuT25Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFZhbHVlOiBhbnk7XG4gIEBJbnB1dCgpIHB1YmxpYyBhdXRvSGlnaGxpZ2h0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGF0YXNvdXJjZShzb3VyY2U6IENvbXBsZXRlckRhdGEgfCBzdHJpbmcgfCBBcnJheTxhbnk+KSB7XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UgPSB0aGlzLmNvbXBsZXRlclNlcnZpY2UubG9jYWwoc291cmNlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChzb3VyY2UpID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlID0gdGhpcy5jb21wbGV0ZXJTZXJ2aWNlLnJlbW90ZShzb3VyY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZSA9IHNvdXJjZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRleHROb1Jlc3VsdHModGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX3RleHROb1Jlc3VsdHMgIT09IHRleHQpIHtcbiAgICAgIHRoaXMuX3RleHROb1Jlc3VsdHMgPSB0ZXh0O1xuICAgICAgdGhpcy5kaXNwbGF5Tm9SZXN1bHRzID0gdGhpcy5fdGV4dE5vUmVzdWx0cyAmJiB0aGlzLl90ZXh0Tm9SZXN1bHRzICE9PSAnZmFsc2UnO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdGV4dFNlYXJjaGluZyh0ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fdGV4dFNlYXJjaGluZyAhPT0gdGV4dCkge1xuICAgICAgdGhpcy5fdGV4dFNlYXJjaGluZyA9IHRleHQ7XG4gICAgICB0aGlzLmRpc3BsYXlTZWFyY2hpbmcgPSB0aGlzLl90ZXh0U2VhcmNoaW5nICYmIHRoaXMuX3RleHRTZWFyY2hpbmcgIT09ICdmYWxzZSc7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGxldGVySXRlbT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBoaWdobGlnaHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGxldGVySXRlbT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIGZvY3VzRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcHVibGljIGtleXVwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBrZXlkb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKE1kYkNvbXBsZXRlckRpcmVjdGl2ZSkgcHVibGljIGNvbXBsZXRlcjogTWRiQ29tcGxldGVyRGlyZWN0aXZlO1xuICBAVmlld0NoaWxkKCdtZGJDb21wbGV0ZXJJbnB1dCcpIHB1YmxpYyBtZGJDb21wbGV0ZXJJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGFiZWxFbCcpIGxhYmVsRWw6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIGZvY3VzZWQgPSBmYWxzZTtcblxuICAvLyBVc2VkIGluIHNsaWRpbmctZG93biBhbmltYXRpb25cbiAgc3RhdGUgPSAndW5mb2N1c2VkJztcblxuICBwdWJsaWMgc2VhcmNoU3RyID0gJyc7XG4gIHB1YmxpYyBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcblxuICBkaXNwbGF5U2VhcmNoaW5nOiBhbnkgPSB0cnVlO1xuICBkaXNwbGF5Tm9SZXN1bHRzOiBhbnkgPSB0cnVlO1xuICBfb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICBfb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG4gIF9mb2N1cyA9IGZhbHNlO1xuICBfb3BlbiA9IGZhbHNlO1xuICBfdGV4dE5vUmVzdWx0cyA9IFRFWFRfTk9fUkVTVUxUUztcbiAgX3RleHRTZWFyY2hpbmcgPSBURVhUX1NFQVJDSElORztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBsZXRlclNlcnZpY2U6IENvbXBsZXRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSkgb25rZXl1cChldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZywgJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25jbGljayhldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5sYWJlbEVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5sYWJlbEVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgIHRoaXMuX2ZvY3VzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c2luJykgb25Gb2N1c0luKCkge1xuICAgIGlmICh0aGlzLmxhYmVsRWwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5sYWJlbEVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c291dCcpIG9uRm9jdXNPdXQoKSB7XG4gICAgaWYgKHRoaXMubWRiQ29tcGxldGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9PT0gJycgJiYgdGhpcy5sYWJlbEVsICYmICF0aGlzLnBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgYWN0aXZhdGVDbGVhckJ1dHRvbihldmVudDogYW55KSB7XG4gICAgdGhpcy5tZGJDb21wbGV0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZXZlbnQudGFyZ2V0LCAndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgfVxuXG4gIHRyaWdnZXJDbGVhckJ1dHRvbkFuaW1hdGlvbihidXR0b25TdGF0ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGJ1dHRvblN0YXRlO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLnNlYXJjaFN0cjsgfVxuXG4gIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5zZWFyY2hTdHIpIHtcbiAgICAgIHRoaXMuc2VhcmNoU3RyID0gdjtcbiAgICB9XG4gICAgLy8gUHJvcGFnYXRlIHRoZSBjaGFuZ2UgaW4gYW55IGNhc2VcbiAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHYpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5sYWJlbEVsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlIHx8IHRoaXMuc2VhcmNoU3RyIHx8IHRoaXMucGxhY2Vob2xkZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5sYWJlbEVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuXG4gICAgaWYgKHRoaXMuX2ZvY3VzKSB7XG4gICAgICB0aGlzLm1kYkNvbXBsZXRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHRoaXMuX2ZvY3VzID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgb25Ub3VjaGVkKCkge1xuICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKCk7XG4gIH1cblxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hTdHIgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb21wbGV0ZXIuc2VsZWN0ZWQuc3Vic2NyaWJlKChpdGVtOiBDb21wbGV0ZXJJdGVtKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkLmVtaXQoaXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5jb21wbGV0ZXIuaGlnaGxpZ2h0ZWQuc3Vic2NyaWJlKChpdGVtOiBDb21wbGV0ZXJJdGVtKSA9PiB7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkLmVtaXQoaXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5jb21wbGV0ZXIub3BlbmVkLnN1YnNjcmliZSgoaXNPcGVuOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLl9vcGVuID0gaXNPcGVuO1xuICAgICAgdGhpcy5vcGVuZWQuZW1pdChpc09wZW4pO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZSkge1xuICAgICAgdGhpcy5zZWFyY2hTdHIgPSB0aGlzLmluaXRpYWxWYWx1ZTtcbiAgICAgIHRoaXMub25Gb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkJsdXIoKSB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICBpZiAodGhpcy5zZWFyY2hTdHIgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnNlYXJjaFN0ciA9PT0gJycpIHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmJsdXIuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZvY3VzKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9LCAwKTtcbiAgICB0aGlzLmZvY3VzRXZlbnQuZW1pdCh7IGZvY3VzZWQ6IHRydWUsIGVsZW1lbnQ6IHRoaXMuZWwgfSk7XG4gIH1cblxuICBwdWJsaWMgb25DaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKCkge1xuICAgIHRoaXMuY29tcGxldGVyLm9wZW4oKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICB0aGlzLmNvbXBsZXRlci5jbGVhcigpO1xuICB9XG5cbiAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1kYkNvbXBsZXRlcklucHV0KSB7XG4gICAgICB0aGlzLm1kYkNvbXBsZXRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cbn1cbiJdfQ==