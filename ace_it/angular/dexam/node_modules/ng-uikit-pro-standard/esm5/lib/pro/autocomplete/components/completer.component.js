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
var noop = (/**
 * @return {?}
 */
function () { });
var ɵ0 = noop;
/** @type {?} */
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return CompleterComponent; })),
    multi: true
};
var CompleterComponent = /** @class */ (function () {
    function CompleterComponent(completerService, renderer, el) {
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
    Object.defineProperty(CompleterComponent.prototype, "datasource", {
        set: /**
         * @param {?} source
         * @return {?}
         */
        function (source) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterComponent.prototype, "textNoResults", {
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            if (this._textNoResults !== text) {
                this._textNoResults = text;
                this.displayNoResults = this._textNoResults && this._textNoResults !== 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterComponent.prototype, "textSearching", {
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            if (this._textSearching !== text) {
                this._textSearching = text;
                this.displaySearching = this._textSearching && this._textSearching !== 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterComponent.prototype.onkeyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target.value !== '') {
            this.renderer.setStyle(event.target.nextElementSibling, 'visibility', 'visible');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterComponent.prototype.onclick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target === this.labelEl.nativeElement) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
            this._focus = true;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onFocusIn = /**
     * @return {?}
     */
    function () {
        if (this.labelEl) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onFocusOut = /**
     * @return {?}
     */
    function () {
        if (this.mdbCompleterInput.nativeElement.value === '' && this.labelEl && !this.placeholder) {
            this.renderer.removeClass(this.labelEl.nativeElement, 'active');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterComponent.prototype.activateClearButton = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mdbCompleterInput.nativeElement.value = '';
        this.value = '';
        this.renderer.setStyle(event.target, 'visibility', 'hidden');
    };
    /**
     * @param {?} buttonState
     * @return {?}
     */
    CompleterComponent.prototype.triggerClearButtonAnimation = /**
     * @param {?} buttonState
     * @return {?}
     */
    function (buttonState) {
        this.state = buttonState;
    };
    Object.defineProperty(CompleterComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this.searchStr; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
            }
            // Propagate the change in any case
            this._onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CompleterComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.labelEl) {
            this.renderer.removeClass(this.labelEl.nativeElement, 'active');
        }
        if (this.autofocus) {
            this._focus = true;
        }
        if (this.initialValue || this.searchStr || this.placeholder) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this._focus) {
            this.mdbCompleterInput.nativeElement.focus();
            this._focus = false;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onTouched = /**
     * @return {?}
     */
    function () {
        this._onTouchedCallback();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CompleterComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchStr = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CompleterComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CompleterComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.completer.selected.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            _this.selected.emit(item);
        }));
        this.completer.highlighted.subscribe((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            _this.highlighted.emit(item);
        }));
        this.completer.opened.subscribe((/**
         * @param {?} isOpen
         * @return {?}
         */
        function (isOpen) {
            _this._open = isOpen;
            _this.opened.emit(isOpen);
        }));
        if (this.initialValue) {
            this.searchStr = this.initialValue;
            this.onFocus();
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        if (this.searchStr === undefined || this.searchStr === '') {
            this.focused = false;
        }
        this.blur.emit(this);
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.focused = true;
        }), 0);
        this.focusEvent.emit({ focused: true, element: this.el });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CompleterComponent.prototype.onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.completer.open();
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.completer.clear();
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.mdbCompleterInput) {
            this.mdbCompleterInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.isOpen = /**
     * @return {?}
     */
    function () {
        return this._open;
    };
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
    CompleterComponent.ctorParameters = function () { return [
        { type: CompleterService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
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
    return CompleterComponent;
}());
export { CompleterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2NvbXBvbmVudHMvY29tcGxldGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxFQUNhLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxTQUFTLEVBQzNFLFVBQVUsRUFBaUIsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQy9ELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNsRyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQUUzRSxJQUFJOzs7QUFBRyxjQUFRLENBQUMsQ0FBQTs7O0lBRWhCLGdDQUFnQyxHQUFHO0lBQ3ZDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsRUFBQztJQUNqRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBR0Q7SUE2RkUsNEJBQ1UsZ0JBQWtDLEVBQ2xDLFFBQW1CLEVBQ25CLEVBQWM7UUFGZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENB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QUFnQzs7Ozs7SUFHOUIsOENBQTBDOzs7OztJQUMxQyxzQ0FBMkI7Ozs7O0lBQzNCLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFZpZXdDaGlsZCxcbiAgZm9yd2FyZFJlZiwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNZGJDb21wbGV0ZXJEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2NvbXBsZXRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tcGxldGVyRGF0YSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbXBsZXRlci1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcGxldGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbXBsZXRlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBsZXRlckl0ZW0gfSBmcm9tICcuL2NvbXBsZXRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNQVhfQ0hBUlMsIE1JTl9TRUFSQ0hfTEVOR1RILCBQQVVTRSwgVEVYVF9TRUFSQ0hJTkcsIFRFWFRfTk9fUkVTVUxUUyB9IGZyb20gJy4uL2dsb2JhbHMnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG5cbmNvbnN0IENPTVBMRVRFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29tcGxldGVyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWF1dG9jb21wbGV0ZSwgbWRiLWNvbXBsZXRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wbGV0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtDT01QTEVURVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdmb2N1c0FuaW1hdGlvbicsIFtcbiAgICBzdGF0ZSgndW5mb2N1c2VkJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxLjAsIDEuMCknLCB9KSksXG4gICAgc3RhdGUoJ2ZvY3VzZWQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDEuNSwgMS41KScgfSkpLFxuICAgIHRyYW5zaXRpb24oJ3VuZm9jdXNlZCA9PiBmb2N1c2VkJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICB0cmFuc2l0aW9uKCdmb2N1c2VkID0+IHVuZm9jdXNlZCcsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSlcbiAgXSldXG59KVxuZXhwb3J0IGNsYXNzIENvbXBsZXRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBwdWJsaWMgZGF0YVNlcnZpY2U6IENvbXBsZXRlckRhdGE7XG4gIEBJbnB1dCgpIHB1YmxpYyBpbnB1dE5hbWUgPSAnJztcbiAgQElucHV0KCkgcHVibGljIGlucHV0SWQgPSAnJztcbiAgQElucHV0KCkgcHVibGljIHBhdXNlID0gUEFVU0U7XG4gIEBJbnB1dCgpIHB1YmxpYyBtaW5TZWFyY2hMZW5ndGggPSBNSU5fU0VBUkNIX0xFTkdUSDtcbiAgQElucHV0KCkgcHVibGljIG1heENoYXJzID0gTUFYX0NIQVJTO1xuICBASW5wdXQoKSBwdWJsaWMgb3ZlcnJpZGVTdWdnZXN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGNsZWFyU2VsZWN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGNsZWFyVW5zZWxlY3RlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgZmlsbEhpZ2hsaWdodGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBtYXRjaENsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBmaWVsZFRhYmluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHB1YmxpYyBjbGVhckJ1dHRvblRhYkluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHB1YmxpYyBhdXRvTWF0Y2ggPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVJbnB1dCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgaW5wdXRDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgYXV0b2ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBvcGVuT25Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFZhbHVlOiBhbnk7XG4gIEBJbnB1dCgpIHB1YmxpYyBhdXRvSGlnaGxpZ2h0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGF0YXNvdXJjZShzb3VyY2U6IENvbXBsZXRlckRhdGEgfCBzdHJpbmcgfCBBcnJheTxhbnk+KSB7XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UgPSB0aGlzLmNvbXBsZXRlclNlcnZpY2UubG9jYWwoc291cmNlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChzb3VyY2UpID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlID0gdGhpcy5jb21wbGV0ZXJTZXJ2aWNlLnJlbW90ZShzb3VyY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZSA9IHNvdXJjZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRleHROb1Jlc3VsdHModGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX3RleHROb1Jlc3VsdHMgIT09IHRleHQpIHtcbiAgICAgIHRoaXMuX3RleHROb1Jlc3VsdHMgPSB0ZXh0O1xuICAgICAgdGhpcy5kaXNwbGF5Tm9SZXN1bHRzID0gdGhpcy5fdGV4dE5vUmVzdWx0cyAmJiB0aGlzLl90ZXh0Tm9SZXN1bHRzICE9PSAnZmFsc2UnO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdGV4dFNlYXJjaGluZyh0ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fdGV4dFNlYXJjaGluZyAhPT0gdGV4dCkge1xuICAgICAgdGhpcy5fdGV4dFNlYXJjaGluZyA9IHRleHQ7XG4gICAgICB0aGlzLmRpc3BsYXlTZWFyY2hpbmcgPSB0aGlzLl90ZXh0U2VhcmNoaW5nICYmIHRoaXMuX3RleHRTZWFyY2hpbmcgIT09ICdmYWxzZSc7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGxldGVySXRlbT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBoaWdobGlnaHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGxldGVySXRlbT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIGZvY3VzRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcHVibGljIGtleXVwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBrZXlkb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKE1kYkNvbXBsZXRlckRpcmVjdGl2ZSkgcHVibGljIGNvbXBsZXRlcjogTWRiQ29tcGxldGVyRGlyZWN0aXZlO1xuICBAVmlld0NoaWxkKCdtZGJDb21wbGV0ZXJJbnB1dCcpIHB1YmxpYyBtZGJDb21wbGV0ZXJJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGFiZWxFbCcpIGxhYmVsRWw6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIGZvY3VzZWQgPSBmYWxzZTtcblxuICAvLyBVc2VkIGluIHNsaWRpbmctZG93biBhbmltYXRpb25cbiAgc3RhdGUgPSAndW5mb2N1c2VkJztcblxuICBwdWJsaWMgc2VhcmNoU3RyID0gJyc7XG4gIHB1YmxpYyBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcblxuICBkaXNwbGF5U2VhcmNoaW5nOiBhbnkgPSB0cnVlO1xuICBkaXNwbGF5Tm9SZXN1bHRzOiBhbnkgPSB0cnVlO1xuICBfb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICBfb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG4gIF9mb2N1cyA9IGZhbHNlO1xuICBfb3BlbiA9IGZhbHNlO1xuICBfdGV4dE5vUmVzdWx0cyA9IFRFWFRfTk9fUkVTVUxUUztcbiAgX3RleHRTZWFyY2hpbmcgPSBURVhUX1NFQVJDSElORztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBsZXRlclNlcnZpY2U6IENvbXBsZXRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSkgb25rZXl1cChldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZywgJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25jbGljayhldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5sYWJlbEVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5sYWJlbEVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgIHRoaXMuX2ZvY3VzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c2luJykgb25Gb2N1c0luKCkge1xuICAgIGlmICh0aGlzLmxhYmVsRWwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5sYWJlbEVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c291dCcpIG9uRm9jdXNPdXQoKSB7XG4gICAgaWYgKHRoaXMubWRiQ29tcGxldGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9PT0gJycgJiYgdGhpcy5sYWJlbEVsICYmICF0aGlzLnBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgYWN0aXZhdGVDbGVhckJ1dHRvbihldmVudDogYW55KSB7XG4gICAgdGhpcy5tZGJDb21wbGV0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZXZlbnQudGFyZ2V0LCAndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgfVxuXG4gIHRyaWdnZXJDbGVhckJ1dHRvbkFuaW1hdGlvbihidXR0b25TdGF0ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGJ1dHRvblN0YXRlO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLnNlYXJjaFN0cjsgfVxuXG4gIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5zZWFyY2hTdHIpIHtcbiAgICAgIHRoaXMuc2VhcmNoU3RyID0gdjtcbiAgICB9XG4gICAgLy8gUHJvcGFnYXRlIHRoZSBjaGFuZ2UgaW4gYW55IGNhc2VcbiAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHYpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5sYWJlbEVsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlIHx8IHRoaXMuc2VhcmNoU3RyIHx8IHRoaXMucGxhY2Vob2xkZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5sYWJlbEVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuXG4gICAgaWYgKHRoaXMuX2ZvY3VzKSB7XG4gICAgICB0aGlzLm1kYkNvbXBsZXRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHRoaXMuX2ZvY3VzID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgb25Ub3VjaGVkKCkge1xuICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKCk7XG4gIH1cblxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hTdHIgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb21wbGV0ZXIuc2VsZWN0ZWQuc3Vic2NyaWJlKChpdGVtOiBDb21wbGV0ZXJJdGVtKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkLmVtaXQoaXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5jb21wbGV0ZXIuaGlnaGxpZ2h0ZWQuc3Vic2NyaWJlKChpdGVtOiBDb21wbGV0ZXJJdGVtKSA9PiB7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkLmVtaXQoaXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5jb21wbGV0ZXIub3BlbmVkLnN1YnNjcmliZSgoaXNPcGVuOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLl9vcGVuID0gaXNPcGVuO1xuICAgICAgdGhpcy5vcGVuZWQuZW1pdChpc09wZW4pO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZSkge1xuICAgICAgdGhpcy5zZWFyY2hTdHIgPSB0aGlzLmluaXRpYWxWYWx1ZTtcbiAgICAgIHRoaXMub25Gb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkJsdXIoKSB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICBpZiAodGhpcy5zZWFyY2hTdHIgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnNlYXJjaFN0ciA9PT0gJycpIHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmJsdXIuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZvY3VzKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9LCAwKTtcbiAgICB0aGlzLmZvY3VzRXZlbnQuZW1pdCh7IGZvY3VzZWQ6IHRydWUsIGVsZW1lbnQ6IHRoaXMuZWwgfSk7XG4gIH1cblxuICBwdWJsaWMgb25DaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKCkge1xuICAgIHRoaXMuY29tcGxldGVyLm9wZW4oKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICB0aGlzLmNvbXBsZXRlci5jbGVhcigpO1xuICB9XG5cbiAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1kYkNvbXBsZXRlcklucHV0KSB7XG4gICAgICB0aGlzLm1kYkNvbXBsZXRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cbn1cbiJdfQ==