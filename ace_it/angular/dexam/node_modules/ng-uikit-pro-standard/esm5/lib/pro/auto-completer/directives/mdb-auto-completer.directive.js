/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Inject, Input, Output, Renderer2 } from '@angular/core';
import { MdbAutoCompleterComponent } from '../components/mdb-auto-completer.component';
import { DOCUMENT } from '@angular/platform-browser';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var MdbAutoCompleterDirective = /** @class */ (function () {
    function MdbAutoCompleterDirective(renderer, el, platformId, document) {
        this.renderer = renderer;
        this.el = el;
        this.document = document;
        this.ngModelChange = new EventEmitter();
        this.clearBtnClicked = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._getClosestEl = /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) {
        for (; el && el !== document; el = el.parentNode) {
            if (el.matches && el.matches(selector)) {
                return el;
            }
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._renderClearButton = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var el = this.renderer.createElement('button');
        this._setStyles(el, {
            position: 'absolute',
            top: '25%',
            right: '0',
            visibility: 'hidden'
        });
        this._addClass(el, ['mdb-autocomplete-clear', 'fa', 'fa-times']);
        this.renderer.setAttribute(el, 'type', 'button');
        this.renderer.setAttribute(el, 'tabindex', this.mdbAutoCompleter.clearButtonTabIndex.toString());
        this.listenToClearClick = this.renderer.listen(el, 'click', (/**
         * @return {?}
         */
        function () {
            _this.clearBtnClicked.emit();
        }));
        if (this.isBrowser) {
            /** @type {?} */
            var parent_1 = this._getClosestEl(this.el.nativeElement, '.md-form') || this.el.nativeElement;
            this.renderer.appendChild(parent_1, el);
        }
    };
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} target
     * @param {?} styles
     * @return {THIS}
     */
    MdbAutoCompleterDirective.prototype._setStyles = /**
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} target
     * @param {?} styles
     * @return {THIS}
     */
    function (target, styles) {
        var _this = this;
        Object.keys(styles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            (/** @type {?} */ (_this)).renderer.setStyle(target, prop, styles[prop]);
        }));
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._addClass = /**
     * @private
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function (target, name) {
        var _this = this;
        name.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            _this.renderer.addClass(target, el);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._clearInput = /**
     * @private
     * @return {?}
     */
    function () {
        this.el.nativeElement.value = '';
        this.ngModelChange.emit('');
        /** @type {?} */
        var clearButton = this.el.nativeElement.parentElement.lastElementChild;
        this._setStyles(clearButton, { visibility: 'hidden' });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._isOpen()) {
            this._show();
        }
        this.mdbAutoCompleter.removeHighlight(0);
        this.mdbAutoCompleter.highlightRow(0);
        /** @type {?} */
        var clearButtonVisibility = event.target.value.length > 0 ? 'visible' : 'hidden';
        /** @type {?} */
        var clearButton = this.el.nativeElement.parentElement.lastElementChild;
        this._setStyles(clearButton, { visibility: clearButtonVisibility });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mdbAutoCompleter.navigateUsingKeyboard(event);
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleFocusIn = /**
     * @return {?}
     */
    function () {
        this._show();
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleBlurIn = /**
     * @return {?}
     */
    function () {
        this._hide();
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleMouseDown = /**
     * @return {?}
     */
    function () {
        this.mdbAutoCompleter.highlightRow(0);
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.getCoords = /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        if (this.isBrowser) {
            /** @type {?} */
            var box = elem.getBoundingClientRect();
            /** @type {?} */
            var body = document.body;
            /** @type {?} */
            var docEl = document.documentElement;
            /** @type {?} */
            var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
            /** @type {?} */
            var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
            /** @type {?} */
            var clientTop = docEl.clientTop || body.clientTop || 0;
            /** @type {?} */
            var clientLeft = docEl.clientLeft || body.clientLeft || 0;
            /** @type {?} */
            var top_1 = box.top + scrollTop - clientTop;
            /** @type {?} */
            var left = box.left + scrollLeft - clientLeft;
            return { top: Math.round(top_1), left: Math.round(left) };
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._isOpen = /**
     * @private
     * @return {?}
     */
    function () {
        return this.mdbAutoCompleter.isOpen();
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._show = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.mdbAutoCompleter.show();
        this._appendDropdownToInput();
        if (this.mdbAutoCompleter.appendToBody) {
            if (this._getClosestEl(this.el.nativeElement, '.modal-body')) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.renderer.setStyle(_this.mdbAutoCompleter.dropdown.nativeElement, 'z-index', '1100');
                }), 0);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._hide = /**
     * @private
     * @return {?}
     */
    function () {
        this.mdbAutoCompleter.hide();
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._appendDropdownToInput = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = this.el.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var el = this.el.nativeElement;
        /** @type {?} */
        var style = window.getComputedStyle(this.el.nativeElement);
        /** @type {?} */
        var height = ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom']
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return parseInt(style.getPropertyValue(key), 10); }))
            .reduce((/**
         * @param {?} prev
         * @param {?} cur
         * @return {?}
         */
        function (prev, cur) { return prev + cur; }));
        this.mdbAutoCompleter.parameters = {
            left: this.getCoords(el).left,
            top: this.getCoords(el).top + height,
            width: position.width,
            bottom: window.innerHeight - height - el.getBoundingClientRect().top,
            inputHeight: height
        };
        this.mdbAutoCompleter.appendDropdown({
            left: this.getCoords(el).left,
            top: this.getCoords(el).top + height,
            width: position.width,
            bottom: window.innerHeight - height - this.getCoords(el).top
        });
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.mdbAutoCompleter.selectedItemChanged().subscribe((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            _this.el.nativeElement.value = item.text;
            /** @type {?} */
            var clearButtonVisibility = _this.el.nativeElement.value.length > 0 ? 'visible' : 'hidden';
            /** @type {?} */
            var clearButton = _this.el.nativeElement.parentElement.lastElementChild;
            _this._setStyles(clearButton, { visibility: clearButtonVisibility });
        }));
        this.mdbAutoCompleter.isDropdownOpen().subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (state) {
                _this._appendDropdownToInput();
            }
        }));
        if (this.mdbAutoCompleter.clearButton && this.isBrowser) {
            this._renderClearButton();
            /** @type {?} */
            var clearButton_1 = this.el.nativeElement.parentElement.querySelectorAll('.mdb-autocomplete-clear')[0];
            this._clearButton = this.document.querySelector('.mdb-autocomplete-clear');
            this.renderer.listen(clearButton_1, 'focus', (/**
             * @return {?}
             */
            function () {
                ['click', 'keydown:space', 'keydown:enter'].forEach((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) { return _this.renderer.listen(clearButton_1, event, (/**
                 * @return {?}
                 */
                function () {
                    _this._clearInput();
                })); }));
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.2, 1.2)',
                    transition: '200ms'
                });
            }));
            this.renderer.listen(clearButton_1, 'mouseenter', (/**
             * @return {?}
             */
            function () {
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.2, 1.2)',
                    transition: '200ms'
                });
            }));
            this.renderer.listen(clearButton_1, 'mouseleave', (/**
             * @return {?}
             */
            function () {
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.0, 1.0)',
                    transition: '200ms'
                });
            }));
            this.renderer.listen(clearButton_1, 'blur', (/**
             * @return {?}
             */
            function () {
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.0, 1.0)',
                    transition: '200ms'
                });
            }));
            if (this.el.nativeElement.disabled) {
                this.renderer.setAttribute(clearButton_1, 'disabled', 'true');
            }
            this._autocompleterInputChanges = new MutationObserver((/**
             * @param {?} mutations
             * @return {?}
             */
            function (mutations) {
                mutations.forEach((/**
                 * @param {?} mutation
                 * @return {?}
                 */
                function (mutation) {
                    if (mutation.attributeName === 'disabled') {
                        _this.renderer.setAttribute(_this._clearButton, 'disabled', 'true');
                    }
                }));
            }));
            this._autocompleterInputChanges.observe(this.el.nativeElement, {
                attributes: true,
                childList: true,
                characterData: true
            });
        }
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._autocompleterInputChanges) {
            this._autocompleterInputChanges.disconnect();
        }
        if (this.listenToClearClick) {
            this.listenToClearClick();
        }
    };
    MdbAutoCompleterDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[mdbAutoCompleter], textarea[mdbAutoCompleter]',
                    host: {
                        '(input)': '_handleInput($event)',
                        '(keydown)': '_handleKeyDown($event)',
                        '(focusin)': '_handleFocusIn()',
                        '(blur)': '_handleBlurIn()',
                        '(mousedown)': '_handleMouseDown()'
                    },
                    exportAs: 'mdbAutoCompleterTrigger',
                },] }
    ];
    /** @nocollapse */
    MdbAutoCompleterDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    MdbAutoCompleterDirective.propDecorators = {
        mdbAutoCompleter: [{ type: Input }],
        ngModelChange: [{ type: Output }],
        clearBtnClicked: [{ type: Output }]
    };
    return MdbAutoCompleterDirective;
}());
export { MdbAutoCompleterDirective };
if (false) {
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.mdbAutoCompleter;
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.ngModelChange;
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.clearBtnClicked;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype._autocompleterInputChanges;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype._clearButton;
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.listenToClearClick;
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.isBrowser;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvZGlyZWN0aXZlcy9tZGItYXV0by1jb21wbGV0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUduRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRWxEO0lBcUJFLG1DQUNVLFFBQW1CLEVBQ25CLEVBQWMsRUFDRCxVQUFrQixFQUNiLFFBQWE7UUFIL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRUksYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVovQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBWWxELElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7OztJQUVPLGlEQUFhOzs7Ozs7SUFBckIsVUFBc0IsRUFBTyxFQUFFLFFBQWdCO1FBQzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDaEQsSUFBSSxFQUFFLENBQUMsT0FBTyxJQUFJ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QUM7U0FDOUM7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQXZRRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFEQUFxRDtvQkFDL0QsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSxzQkFBc0I7d0JBQ2pDLFdBQVcsRUFBRSx3QkFBd0I7d0JBQ3JDLFdBQVcsRUFBRSxrQkFBa0I7d0JBQy9CLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLGFBQWEsRUFBRSxvQkFBb0I7cUJBQ3BDO29CQUNELFFBQVEsRUFBRSx5QkFBeUI7aUJBQ3BDOzs7O2dCQW5CQyxTQUFTO2dCQU5ULFVBQVU7NkNBdUNQLE1BQU0sU0FBQyxXQUFXO2dEQUNsQixNQUFNLFNBQUMsUUFBUTs7O21DQWJqQixLQUFLO2dDQUNMLE1BQU07a0NBQ04sTUFBTTs7SUEyUFQsZ0NBQUM7Q0FBQSxBQXpRRCxJQXlRQztTQTlQWSx5QkFBeUI7OztJQUNwQyxxREFBcUQ7O0lBQ3JELGtEQUFrRDs7SUFDbEQsb0RBQW9EOzs7OztJQUVwRCwrREFBcUQ7Ozs7O0lBQ3JELGlEQUEwQjs7SUFDMUIsdURBQTZCOztJQUM3Qiw4Q0FBbUI7Ozs7O0lBR2pCLDZDQUEyQjs7Ozs7SUFDM0IsdUNBQXNCOzs7OztJQUV0Qiw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9tZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtJU2VsZWN0ZWRPcHRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvc2VsZWN0ZWQtb3B0aW9uLmludGVyZmFjZSc7XG5cbmltcG9ydCB7UExBVEZPUk1fSUR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbWRiQXV0b0NvbXBsZXRlcl0sIHRleHRhcmVhW21kYkF1dG9Db21wbGV0ZXJdJyxcbiAgaG9zdDoge1xuICAgICcoaW5wdXQpJzogJ19oYW5kbGVJbnB1dCgkZXZlbnQpJyxcbiAgICAnKGtleWRvd24pJzogJ19oYW5kbGVLZXlEb3duKCRldmVudCknLFxuICAgICcoZm9jdXNpbiknOiAnX2hhbmRsZUZvY3VzSW4oKScsXG4gICAgJyhibHVyKSc6ICdfaGFuZGxlQmx1ckluKCknLFxuICAgICcobW91c2Vkb3duKSc6ICdfaGFuZGxlTW91c2VEb3duKCknXG4gIH0sXG4gIGV4cG9ydEFzOiAnbWRiQXV0b0NvbXBsZXRlclRyaWdnZXInLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJBdXRvQ29tcGxldGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbWRiQXV0b0NvbXBsZXRlcjogTWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudDtcbiAgQE91dHB1dCgpIG5nTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNsZWFyQnRuQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgX2F1dG9jb21wbGV0ZXJJbnB1dENoYW5nZXM6IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIHByaXZhdGUgX2NsZWFyQnV0dG9uOiBhbnk7XG4gIGxpc3RlblRvQ2xlYXJDbGljazogRnVuY3Rpb247XG4gIGlzQnJvd3NlcjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENsb3Nlc3RFbChlbDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgZm9yICg7IGVsICYmIGVsICE9PSBkb2N1bWVudDsgZWwgPSBlbC5wYXJlbnROb2RlKSB7XG4gICAgICBpZiAoZWwubWF0Y2hlcyAmJiBlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyQ2xlYXJCdXR0b24oKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGhpcy5fc2V0U3R5bGVzKGVsLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzI1JScsXG4gICAgICByaWdodDogJzAnLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICB9KTtcblxuXG4gICAgdGhpcy5fYWRkQ2xhc3MoZWwsIFsnbWRiLWF1dG9jb21wbGV0ZS1jbGVhcicsICdmYScsICdmYS10aW1lcyddKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCAndHlwZScsICdidXR0b24nKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3RhYmluZGV4JywgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmNsZWFyQnV0dG9uVGFiSW5kZXgudG9TdHJpbmcoKSk7XG4gICAgdGhpcy5saXN0ZW5Ub0NsZWFyQ2xpY2sgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhckJ0bkNsaWNrZWQuZW1pdCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9nZXRDbG9zZXN0RWwodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLm1kLWZvcm0nKSB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudCwgZWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFN0eWxlcyh0YXJnZXQ6IEVsZW1lbnRSZWYsIHN0eWxlczogYW55KSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChwcm9wOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGFyZ2V0LCBwcm9wLCBzdHlsZXNbcHJvcF0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkQ2xhc3ModGFyZ2V0OiBFbGVtZW50UmVmLCBuYW1lOiBzdHJpbmdbXSkge1xuICAgIG5hbWUuZm9yRWFjaCgoZWw6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0YXJnZXQsIGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFySW5wdXQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQoJycpO1xuICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHt2aXNpYmlsaXR5OiAnaGlkZGVuJ30pO1xuICB9XG5cblxuICBwdWJsaWMgX2hhbmRsZUlucHV0KGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuX2lzT3BlbigpKSB7XG4gICAgICB0aGlzLl9zaG93KCk7XG4gICAgfVxuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnJlbW92ZUhpZ2hsaWdodCgwKTtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuaGlnaGxpZ2h0Um93KDApO1xuXG4gICAgY29uc3QgY2xlYXJCdXR0b25WaXNpYmlsaXR5ID0gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDAgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHt2aXNpYmlsaXR5OiBjbGVhckJ1dHRvblZpc2liaWxpdHl9KTtcbiAgfVxuXG4gIHB1YmxpYyBfaGFuZGxlS2V5RG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLm5hdmlnYXRlVXNpbmdLZXlib2FyZChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgX2hhbmRsZUZvY3VzSW4oKSB7XG4gICAgdGhpcy5fc2hvdygpO1xuICB9XG5cbiAgcHVibGljIF9oYW5kbGVCbHVySW4oKSB7XG4gICAgdGhpcy5faGlkZSgpO1xuICB9XG5cbiAgcHVibGljIF9oYW5kbGVNb3VzZURvd24oKSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmhpZ2hsaWdodFJvdygwKTtcbiAgfVxuXG4gIGdldENvb3JkcyhlbGVtOiBhbnkpOiBhbnkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgYm94OiBDbGllbnRSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGJvZHk6IGFueSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICBjb25zdCBkb2NFbDogYW55ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICBjb25zdCBzY3JvbGxUb3A6IG51bWJlciA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0OiBudW1iZXIgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgICAgIGNvbnN0IGNsaWVudFRvcDogbnVtYmVyID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgICBjb25zdCBjbGllbnRMZWZ0OiBudW1iZXIgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICBjb25zdCB0b3A6IG51bWJlciA9IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3A7XG4gICAgICBjb25zdCBsZWZ0OiBudW1iZXIgPSBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0O1xuXG4gICAgICByZXR1cm4ge3RvcDogTWF0aC5yb3VuZCh0b3ApLCBsZWZ0OiBNYXRoLnJvdW5kKGxlZnQpfTtcbiAgICB9XG4gIH1cblxuXG4gIHByaXZhdGUgX2lzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5tZGJBdXRvQ29tcGxldGVyLmlzT3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvdygpIHtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuc2hvdygpO1xuICAgIHRoaXMuX2FwcGVuZERyb3Bkb3duVG9JbnB1dCgpO1xuXG4gICAgaWYgKHRoaXMubWRiQXV0b0NvbXBsZXRlci5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIGlmICh0aGlzLl9nZXRDbG9zZXN0RWwodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLm1vZGFsLWJvZHknKSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubWRiQXV0b0NvbXBsZXRlci5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsICcxMTAwJyk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hpZGUoKSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmhpZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERyb3Bkb3duVG9JbnB1dCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbjogQ2xpZW50UmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gWydoZWlnaHQnLCAncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnbWFyZ2luLXRvcCcsICdtYXJnaW4tYm90dG9tJ11cbiAgICAgIC5tYXAoKGtleSkgPT4gcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShrZXkpLCAxMCkpXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYgKyBjdXIpO1xuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnBhcmFtZXRlcnMgPSB7XG4gICAgICBsZWZ0OiB0aGlzLmdldENvb3JkcyhlbCkubGVmdCxcbiAgICAgIHRvcDogdGhpcy5nZXRDb29yZHMoZWwpLnRvcCArIGhlaWdodCxcbiAgICAgIHdpZHRoOiBwb3NpdGlvbi53aWR0aCxcbiAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0IC0gaGVpZ2h0IC0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgaW5wdXRIZWlnaHQ6IGhlaWdodFxuICAgIH07XG5cbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuYXBwZW5kRHJvcGRvd24oe1xuICAgICAgbGVmdDogdGhpcy5nZXRDb29yZHMoZWwpLmxlZnQsXG4gICAgICB0b3A6IHRoaXMuZ2V0Q29vcmRzKGVsKS50b3AgKyBoZWlnaHQsXG4gICAgICB3aWR0aDogcG9zaXRpb24ud2lkdGgsXG4gICAgICBib3R0b206IHdpbmRvdy5pbm5lckhlaWdodCAtIGhlaWdodCAtIHRoaXMuZ2V0Q29vcmRzKGVsKS50b3BcbiAgICB9KTtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCkuc3Vic2NyaWJlKChpdGVtOiBJU2VsZWN0ZWRPcHRpb24pID0+IHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IGl0ZW0udGV4dDtcbiAgICAgIGNvbnN0IGNsZWFyQnV0dG9uVmlzaWJpbGl0eSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggPiAwID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHt2aXNpYmlsaXR5OiBjbGVhckJ1dHRvblZpc2liaWxpdHl9KTtcbiAgICB9KTtcblxuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5pc0Ryb3Bkb3duT3BlbigpLnN1YnNjcmliZSgoc3RhdGU6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB0aGlzLl9hcHBlbmREcm9wZG93blRvSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgaWYgKHRoaXMubWRiQXV0b0NvbXBsZXRlci5jbGVhckJ1dHRvbiAmJiB0aGlzLmlzQnJvd3Nlcikge1xuXG4gICAgICB0aGlzLl9yZW5kZXJDbGVhckJ1dHRvbigpO1xuICAgICAgY29uc3QgY2xlYXJCdXR0b24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWRiLWF1dG9jb21wbGV0ZS1jbGVhcicpWzBdO1xuXG4gICAgICB0aGlzLl9jbGVhckJ1dHRvbiA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYi1hdXRvY29tcGxldGUtY2xlYXInKTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdmb2N1cycsICgpID0+IHtcbiAgICAgICAgWydjbGljaycsICdrZXlkb3duOnNwYWNlJywgJ2tleWRvd246ZW50ZXInXS5mb3JFYWNoKGV2ZW50ID0+IHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCBldmVudCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2NsZWFySW5wdXQoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMiwgMS4yKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMiwgMS4yKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMCwgMS4wKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMCwgMS4wKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGNsZWFyQnV0dG9uLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2NsZWFyQnV0dG9uLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcy5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZXJJbnB1dENoYW5nZXMpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZXJJbnB1dENoYW5nZXMuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxpc3RlblRvQ2xlYXJDbGljaykge1xuICAgICAgdGhpcy5saXN0ZW5Ub0NsZWFyQ2xpY2soKTtcbiAgICB9XG4gIH1cblxufVxuIl19