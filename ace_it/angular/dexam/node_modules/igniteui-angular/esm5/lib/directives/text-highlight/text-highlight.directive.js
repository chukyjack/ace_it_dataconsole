/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, Input, NgModule, Renderer2 } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DeprecateProperty } from '../../core/deprecateDecorators';
/**
 * @record
 */
function ISearchInfo() { }
if (false) {
    /** @type {?} */
    ISearchInfo.prototype.searchedText;
    /** @type {?} */
    ISearchInfo.prototype.content;
    /** @type {?} */
    ISearchInfo.prototype.matchCount;
    /** @type {?} */
    ISearchInfo.prototype.caseSensitive;
    /** @type {?} */
    ISearchInfo.prototype.exactMatch;
}
/**
 * An interface describing information for the active highlight.
 * @record
 */
export function IActiveHighlightInfo() { }
if (false) {
    /**
     * The row index of the highlight. This property is deprecated, use `row` instead.
     * @type {?|undefined}
     */
    IActiveHighlightInfo.prototype.rowIndex;
    /**
     * The column index of the highlight. This property is deprecated, use `column` instead.
     * @type {?|undefined}
     */
    IActiveHighlightInfo.prototype.columnIndex;
    /**
     * The page index of the highlight. This property is deprecated.
     * @type {?|undefined}
     */
    IActiveHighlightInfo.prototype.page;
    /**
     * The row of the highlight.
     * @type {?|undefined}
     */
    IActiveHighlightInfo.prototype.row;
    /**
     * The column of the highlight.
     * @type {?|undefined}
     */
    IActiveHighlightInfo.prototype.column;
    /**
     * The index of the highlight.
     * @type {?}
     */
    IActiveHighlightInfo.prototype.index;
}
var IgxTextHighlightDirective = /** @class */ (function () {
    function IgxTextHighlightDirective(element, renderer) {
        var _this = this;
        this.element = element;
        this.renderer = renderer;
        this._div = null;
        this._observer = null;
        this._nodeWasRemoved = false;
        this._forceEvaluation = false;
        this._activeElementIndex = -1;
        /**
         * Identifies the highlight within a unique group.
         * This allows it to have several different highlight groups,
         * with each of them having their own active highlight.
         *
         * ```html
         * <div
         *   igxTextHighlight
         *   [groupName]="myGroupName">
         * </div>
         * ```
         */
        this.groupName = '';
        this._value = '';
        this.destroy$ = new Subject();
        IgxTextHighlightDirective.onActiveElementChanged.pipe(takeUntil(this.destroy$)).subscribe(function (groupName) {
            if (_this.groupName === groupName) {
                if (_this._activeElementIndex !== -1) {
                    _this.deactivate();
                }
                _this.activateIfNecessary();
            }
        });
    }
    Object.defineProperty(IgxTextHighlightDirective.prototype, "value", {
        /**
         * The underlying value of the element that will be highlighted.
         *
         * ```typescript
         * // get
         * const elementValue = this.textHighlight.value;
         * ```
         *
         * ```html
         * <!--set-->
         * <div
         *   igxTextHighlight
         *   [value]="newValue">
         * </div>
         * ```
         */
        get: /**
         * The underlying value of the element that will be highlighted.
         *
         * ```typescript
         * // get
         * const elementValue = this.textHighlight.value;
         * ```
         *
         * ```html
         * <!--set-->
         * <div
         *   igxTextHighlight
         *   [value]="newValue">
         * </div>
         * ```
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === undefined || value === null) {
                this._value = '';
            }
            else {
                this._value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTextHighlightDirective.prototype, "lastSearchInfo", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._lastSearchInfo;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Activates the highlight at a given index.
     * (if such index exists)
     */
    /**
     * Activates the highlight at a given index.
     * (if such index exists)
     * @param {?} groupName
     * @param {?} highlight
     * @return {?}
     */
    IgxTextHighlightDirective.setActiveHighlight = /**
     * Activates the highlight at a given index.
     * (if such index exists)
     * @param {?} groupName
     * @param {?} highlight
     * @return {?}
     */
    function (groupName, highlight) {
        IgxTextHighlightDirective.highlightGroupsMap.set(groupName, highlight);
        IgxTextHighlightDirective.onActiveElementChanged.emit(groupName);
    };
    /**
     * Clears any existing highlight.
     */
    /**
     * Clears any existing highlight.
     * @param {?} groupName
     * @return {?}
     */
    IgxTextHighlightDirective.clearActiveHighlight = /**
     * Clears any existing highlight.
     * @param {?} groupName
     * @return {?}
     */
    function (groupName) {
        IgxTextHighlightDirective.highlightGroupsMap.set(groupName, {
            index: -1
        });
        IgxTextHighlightDirective.onActiveElementChanged.emit(groupName);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.clearHighlight();
        if (this._observer !== null) {
            this._observer.disconnect();
        }
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value && !changes.value.firstChange) {
            this._valueChanged = true;
        }
        else if ((changes.row !== undefined && !changes.row.firstChange) ||
            (changes.column !== undefined && !changes.column.firstChange) ||
            (changes.page !== undefined && !changes.page.firstChange)) {
            if (this._activeElementIndex !== -1) {
                this.deactivate();
            }
            this.activateIfNecessary();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.parentElement = this.renderer.parentNode(this.element.nativeElement);
        if (IgxTextHighlightDirective.highlightGroupsMap.has(this.groupName) === false) {
            IgxTextHighlightDirective.highlightGroupsMap.set(this.groupName, {
                index: -1
            });
        }
        this._lastSearchInfo = {
            searchedText: '',
            content: this.value,
            matchCount: 0,
            caseSensitive: false,
            exactMatch: false
        };
        this._container = this.parentElement.firstElementChild;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.ngAfterViewChecked = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this._valueChanged) {
            this.highlight(this._lastSearchInfo.searchedText, this._lastSearchInfo.caseSensitive, this._lastSearchInfo.exactMatch);
            this.activateIfNecessary();
            this._valueChanged = false;
        }
    };
    /**
     * Clears the existing highlight and highlights the searched text.
     * Returns how many times the element contains the searched text.
     */
    /**
     * Clears the existing highlight and highlights the searched text.
     * Returns how many times the element contains the searched text.
     * @param {?} text
     * @param {?=} caseSensitive
     * @param {?=} exactMatch
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.highlight = /**
     * Clears the existing highlight and highlights the searched text.
     * Returns how many times the element contains the searched text.
     * @param {?} text
     * @param {?=} caseSensitive
     * @param {?=} exactMatch
     * @return {?}
     */
    function (text, caseSensitive, exactMatch) {
        /** @type {?} */
        var caseSensitiveResolved = caseSensitive ? true : false;
        /** @type {?} */
        var exactMatchResolved = exactMatch ? true : false;
        if (this.searchNeedsEvaluation(text, caseSensitiveResolved, exactMatchResolved)) {
            this._lastSearchInfo.searchedText = text;
            this._lastSearchInfo.caseSensitive = caseSensitiveResolved;
            this._lastSearchInfo.exactMatch = exactMatchResolved;
            this._lastSearchInfo.content = this.value;
            if (text === '' || text === undefined || text === null) {
                this.clearHighlight();
            }
            else {
                this.clearChildElements(true);
                this._lastSearchInfo.matchCount = this.getHighlightedText(text, caseSensitive, exactMatch);
            }
        }
        else if (this._nodeWasRemoved) {
            this._lastSearchInfo.searchedText = text;
            this._lastSearchInfo.caseSensitive = caseSensitiveResolved;
            this._lastSearchInfo.exactMatch = exactMatchResolved;
        }
        return this._lastSearchInfo.matchCount;
    };
    /**
     * Clears any existing highlight.
     */
    /**
     * Clears any existing highlight.
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.clearHighlight = /**
     * Clears any existing highlight.
     * @return {?}
     */
    function () {
        this.clearChildElements(false);
        this._lastSearchInfo.searchedText = '';
        this._lastSearchInfo.matchCount = 0;
    };
    /**
     * Activates the highlight if it is on the currently active row, column and page.
     */
    /**
     * Activates the highlight if it is on the currently active row, column and page.
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.activateIfNecessary = /**
     * Activates the highlight if it is on the currently active row, column and page.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var group = IgxTextHighlightDirective.highlightGroupsMap.get(this.groupName);
        /** @type {?} */
        var column = group.columnIndex === undefined ? group.column : group.columnIndex;
        /** @type {?} */
        var row = group.rowIndex === undefined ? group.row : group.rowIndex;
        if (column === this.column && row === this.row && group.page === this.page) {
            this.activate(group.index);
        }
    };
    /**
     * Attaches a MutationObserver to the parentElement and watches for when the container element is removed/readded to the DOM.
     * Should be used only when necessary as using many observers may lead to performance degradation.
     */
    /**
     * Attaches a MutationObserver to the parentElement and watches for when the container element is removed/readded to the DOM.
     * Should be used only when necessary as using many observers may lead to performance degradation.
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.observe = /**
     * Attaches a MutationObserver to the parentElement and watches for when the container element is removed/readded to the DOM.
     * Should be used only when necessary as using many observers may lead to performance degradation.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._observer === null) {
            /** @type {?} */
            var callback = function (mutationList) {
                mutationList.forEach(function (mutation) {
                    /** @type {?} */
                    var removedNodes = Array.from(mutation.removedNodes);
                    removedNodes.forEach(function (n) {
                        if (n === _this._container) {
                            _this._nodeWasRemoved = true;
                            _this.clearChildElements(false);
                        }
                    });
                    /** @type {?} */
                    var addedNodes = Array.from(mutation.addedNodes);
                    addedNodes.forEach(function (n) {
                        if (n === _this.parentElement.firstElementChild && _this._nodeWasRemoved) {
                            _this._container = _this.parentElement.firstElementChild;
                            _this._nodeWasRemoved = false;
                            _this._forceEvaluation = true;
                            _this.highlight(_this._lastSearchInfo.searchedText, _this._lastSearchInfo.caseSensitive, _this._lastSearchInfo.exactMatch);
                            _this._forceEvaluation = false;
                            _this.activateIfNecessary();
                            _this._observer.disconnect();
                            _this._observer = null;
                        }
                    });
                });
            };
            this._observer = new MutationObserver(callback);
            this._observer.observe(this.parentElement, { childList: true });
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.activate = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.deactivate();
        if (this._div !== null) {
            /** @type {?} */
            var spans = this._div.querySelectorAll('span');
            this._activeElementIndex = index;
            if (spans.length <= index) {
                return;
            }
            /** @type {?} */
            var elementToActivate = spans[index];
            this.renderer.addClass(elementToActivate, this.activeCssClass);
            this.renderer.setAttribute(elementToActivate, 'style', 'background:orange;color:black');
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.deactivate = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._activeElementIndex === -1) {
            return;
        }
        /** @type {?} */
        var spans = this._div.querySelectorAll('span');
        if (spans.length <= this._activeElementIndex) {
            this._activeElementIndex = -1;
            return;
        }
        /** @type {?} */
        var elementToDeactivate = spans[this._activeElementIndex];
        this.renderer.removeClass(elementToDeactivate, this.activeCssClass);
        this.renderer.setAttribute(elementToDeactivate, 'style', 'background:yellow;color:black');
        this._activeElementIndex = -1;
    };
    /**
     * @private
     * @param {?} originalContentHidden
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.clearChildElements = /**
     * @private
     * @param {?} originalContentHidden
     * @return {?}
     */
    function (originalContentHidden) {
        this.renderer.setProperty(this.element.nativeElement, 'hidden', originalContentHidden);
        if (this._div !== null) {
            this.renderer.removeChild(this.parentElement, this._div);
            this._div = null;
            this._activeElementIndex = -1;
        }
    };
    /**
     * @private
     * @param {?} searchText
     * @param {?} caseSensitive
     * @param {?} exactMatch
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.getHighlightedText = /**
     * @private
     * @param {?} searchText
     * @param {?} caseSensitive
     * @param {?} exactMatch
     * @return {?}
     */
    function (searchText, caseSensitive, exactMatch) {
        this.appendDiv();
        /** @type {?} */
        var stringValue = String(this.value);
        /** @type {?} */
        var contentStringResolved = !caseSensitive ? stringValue.toLowerCase() : stringValue;
        /** @type {?} */
        var searchTextResolved = !caseSensitive ? searchText.toLowerCase() : searchText;
        /** @type {?} */
        var matchCount = 0;
        if (exactMatch) {
            if (contentStringResolved === searchTextResolved) {
                // tslint:disable-next-line:max-line-length
                this.appendSpan("<span class=\"" + this.cssClass + "\" style=\"background:yellow;color:black\">" + stringValue + "</span>");
                matchCount++;
            }
            else {
                this.appendText(stringValue);
            }
        }
        else {
            /** @type {?} */
            var foundIndex = contentStringResolved.indexOf(searchTextResolved, 0);
            /** @type {?} */
            var previousMatchEnd = 0;
            while (foundIndex !== -1) {
                /** @type {?} */
                var start = foundIndex;
                /** @type {?} */
                var end = foundIndex + searchTextResolved.length;
                this.appendText(stringValue.substring(previousMatchEnd, start));
                // tslint:disable-next-line:max-line-length
                this.appendSpan("<span class=\"" + this.cssClass + "\" style=\"background:yellow;color:black\">" + stringValue.substring(start, end) + "</span>");
                previousMatchEnd = end;
                matchCount++;
                foundIndex = contentStringResolved.indexOf(searchTextResolved, end);
            }
            this.appendText(stringValue.substring(previousMatchEnd, stringValue.length));
        }
        return matchCount;
    };
    /**
     * @private
     * @param {?} text
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.appendText = /**
     * @private
     * @param {?} text
     * @return {?}
     */
    function (text) {
        /** @type {?} */
        var textElement = this.renderer.createText(text);
        this.renderer.appendChild(this._div, textElement);
    };
    /**
     * @private
     * @param {?} outerHTML
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.appendSpan = /**
     * @private
     * @param {?} outerHTML
     * @return {?}
     */
    function (outerHTML) {
        /** @type {?} */
        var span = this.renderer.createElement('span');
        this.renderer.appendChild(this._div, span);
        this.renderer.setProperty(span, 'outerHTML', outerHTML);
    };
    /**
     * @private
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.appendDiv = /**
     * @private
     * @return {?}
     */
    function () {
        this._div = this.renderer.createElement('div');
        if (this.containerClass) {
            this.renderer.addClass(this._div, this.containerClass);
        }
        this.renderer.appendChild(this.parentElement, this._div);
    };
    /**
     * @private
     * @param {?} text
     * @param {?} caseSensitive
     * @param {?} exactMatch
     * @return {?}
     */
    IgxTextHighlightDirective.prototype.searchNeedsEvaluation = /**
     * @private
     * @param {?} text
     * @param {?} caseSensitive
     * @param {?} exactMatch
     * @return {?}
     */
    function (text, caseSensitive, exactMatch) {
        /** @type {?} */
        var searchedText = this._lastSearchInfo.searchedText;
        return !this._nodeWasRemoved &&
            (searchedText === null ||
                searchedText !== text ||
                this._lastSearchInfo.content !== this.value ||
                this._lastSearchInfo.caseSensitive !== caseSensitive ||
                this._lastSearchInfo.exactMatch !== exactMatch ||
                this._forceEvaluation);
    };
    IgxTextHighlightDirective.onActiveElementChanged = new EventEmitter();
    IgxTextHighlightDirective.highlightGroupsMap = new Map();
    IgxTextHighlightDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxTextHighlight]'
                },] }
    ];
    /** @nocollapse */
    IgxTextHighlightDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    IgxTextHighlightDirective.propDecorators = {
        cssClass: [{ type: Input, args: ['cssClass',] }],
        activeCssClass: [{ type: Input, args: ['activeCssClass',] }],
        containerClass: [{ type: Input, args: ['containerClass',] }],
        groupName: [{ type: Input, args: ['groupName',] }],
        value: [{ type: Input, args: ['value',] }],
        row: [{ type: Input, args: ['row',] }],
        column: [{ type: Input, args: ['column',] }],
        page: [{ type: Input, args: ['page',] }]
    };
    tslib_1.__decorate([
        DeprecateProperty("IgxTextHighlightDirective 'page' input property is deprecated."),
        tslib_1.__metadata("design:type", Number)
    ], IgxTextHighlightDirective.prototype, "page", void 0);
    return IgxTextHighlightDirective;
}());
export { IgxTextHighlightDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTextHighlightDirective.onActiveElementChanged;
    /** @type {?} */
    IgxTextHighlightDirective.highlightGroupsMap;
    /**
     * @type {?}
     * @private
     */
    IgxTextHighlightDirective.prototype._lastSearchInfo;
    /**
     * @type {?}
     * @private
     */
    IgxTextHighlightDirective.prototype._div;
    /**
     * @type {?}
     * @private
     */
    IgxTextHighlightDirective.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    IgxTextHighlightDirective.prototype._nodeWasRemoved;
    /**
     * @type {?}
     * @private
     */
    IgxTextHighlightDirective.prototype._forceEvaluation;
    /**
     * @type {?}
     * @private
     */
    IgxTextHighlightDirective.prototype._activeElementIndex;
    /**
     * @type {?}
     * @private
     */
    IgxTextHighlightDirective.prototype._valueChanged;
    /**
     * Determines the `CSS` class of the highlight elements.
     * This allows the developer to provide custom `CSS` to customize the highlight.
     *
     * ```html
     * <div
     *   igxTextHighlight
     *   [cssClass]="myClass">
     * </div>
     * ```
     * @type {?}
     */
    IgxTextHighlightDirective.prototype.cssClass;
    /**
     * Determines the `CSS` class of the active highlight element.
     * This allows the developer to provide custom `CSS` to customize the highlight.
     *
     * ```html
     * <div
     *   igxTextHighlight
     *   [activeCssClass]="activeHighlightClass">
     * </div>
     * ```
     * @type {?}
     */
    IgxTextHighlightDirective.prototype.activeCssClass;
    /**
     * @hidden
     * @type {?}
     */
    IgxTextHighlightDirective.prototype.containerClass;
    /**
     * Identifies the highlight within a unique group.
     * This allows it to have several different highlight groups,
     * with each of them having their own active highlight.
     *
     * ```html
     * <div
     *   igxTextHighlight
     *   [groupName]="myGroupName">
     * </div>
     * ```
     * @type {?}
     */
    IgxTextHighlightDirective.prototype.groupName;
    /**
     * @type {?}
     * @private
     */
    IgxTextHighlightDirective.prototype._value;
    /**
     * The identifier of the row on which the directive is currently on.
     *
     * ```html
     * <div
     *   igxTextHighlight
     *   [row]="0">
     * </div>
     * ```
     * @type {?}
     */
    IgxTextHighlightDirective.prototype.row;
    /**
     * The identifier of the column on which the directive is currently on.
     *
     * ```html
     * <div
     *   igxTextHighlight
     *   [column]="0">
     * </div>
     * ```
     * @type {?}
     */
    IgxTextHighlightDirective.prototype.column;
    /** @type {?} */
    IgxTextHighlightDirective.prototype.page;
    /**
     * @hidden
     * @type {?}
     */
    IgxTextHighlightDirective.prototype.parentElement;
    /**
     * @type {?}
     * @private
     */
    IgxTextHighlightDirective.prototype._container;
    /**
     * @type {?}
     * @private
     */
    IgxTextHighlightDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    IgxTextHighlightDirective.prototype.element;
    /** @type {?} */
    IgxTextHighlightDirective.prototype.renderer;
}
/**
 * @hidden
 */
var IgxTextHighlightModule = /** @class */ (function () {
    function IgxTextHighlightModule() {
    }
    IgxTextHighlightModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxTextHighlightDirective],
                    exports: [IgxTextHighlightDirective]
                },] }
    ];
    return IgxTextHighlightModule;
}());
export { IgxTextHighlightModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1oaWdobGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RleHQtaGlnaGxpZ2h0L3RleHQtaGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUdSLFNBQVMsRUFHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUVuRSwwQkFNQzs7O0lBTEcsbUNBQXFCOztJQUNyQiw4QkFBZ0I7O0lBQ2hCLGlDQUFtQjs7SUFDbkIsb0NBQXVCOztJQUN2QixpQ0FBb0I7Ozs7OztBQU14QiwwQ0F5QkM7Ozs7OztJQXJCRyx3Q0FBa0I7Ozs7O0lBSWxCLDJDQUFxQjs7Ozs7SUFJckIsb0NBQWM7Ozs7O0lBSWQsbUNBQVU7Ozs7O0lBSVYsc0NBQWE7Ozs7O0lBSWIscUNBQWM7O0FBR2xCO0lBK0pJLG1DQUFvQixPQUFtQixFQUFTLFFBQW1CO1FBQW5FLGlCQVNDO1FBVG1CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBdkozRCxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osY0FBUyxHQUFxQixJQUFJLENBQUM7UUFDbkMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHdCQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O1FBa0QxQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWQsV0FBTSxHQUFH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Qix5Q0FFb0I7Ozs7O0lBWXBCLGtEQUEwQjs7Ozs7SUFFMUIsK0NBQXdCOzs7OztJQUV4Qiw2Q0FBMEM7Ozs7O0lBcUI5Qiw0Q0FBMkI7O0lBQUUsNkNBQTBCOzs7OztBQWlTdkU7SUFBQTtJQUlzQyxDQUFDOztnQkFKdEMsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDdkM7O0lBQ3FDLDZCQUFDO0NBQUEsQUFKdkMsSUFJdUM7U0FBMUIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIFJlbmRlcmVyMixcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIEFmdGVyVmlld0NoZWNrZWRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEZXByZWNhdGVQcm9wZXJ0eSB9IGZyb20gJy4uLy4uL2NvcmUvZGVwcmVjYXRlRGVjb3JhdG9ycyc7XG5cbmludGVyZmFjZSBJU2VhcmNoSW5mbyB7XG4gICAgc2VhcmNoZWRUZXh0OiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIG1hdGNoQ291bnQ6IG51bWJlcjtcbiAgICBjYXNlU2Vuc2l0aXZlOiBib29sZWFuO1xuICAgIGV4YWN0TWF0Y2g6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIGRlc2NyaWJpbmcgaW5mb3JtYXRpb24gZm9yIHRoZSBhY3RpdmUgaGlnaGxpZ2h0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBY3RpdmVIaWdobGlnaHRJbmZvIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcm93IGluZGV4IG9mIHRoZSBoaWdobGlnaHQuIFRoaXMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCwgdXNlIGByb3dgIGluc3RlYWQuXG4gICAgICovXG4gICAgcm93SW5kZXg/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbHVtbiBpbmRleCBvZiB0aGUgaGlnaGxpZ2h0LiBUaGlzIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQsIHVzZSBgY29sdW1uYCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGNvbHVtbkluZGV4PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBwYWdlIGluZGV4IG9mIHRoZSBoaWdobGlnaHQuIFRoaXMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC5cbiAgICAgKi9cbiAgICBwYWdlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSByb3cgb2YgdGhlIGhpZ2hsaWdodC5cbiAgICAgKi9cbiAgICByb3c/OiBhbnk7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbHVtbiBvZiB0aGUgaGlnaGxpZ2h0LlxuICAgICAqL1xuICAgIGNvbHVtbj86IGFueTtcbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGhpZ2hsaWdodC5cbiAgICAgKi9cbiAgICBpbmRleDogbnVtYmVyO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hUZXh0SGlnaGxpZ2h0XSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBvbkFjdGl2ZUVsZW1lbnRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgcHVibGljIHN0YXRpYyBoaWdobGlnaHRHcm91cHNNYXAgPSBuZXcgTWFwPHN0cmluZywgSUFjdGl2ZUhpZ2hsaWdodEluZm8+KCk7XG5cbiAgICBwcml2YXRlIF9sYXN0U2VhcmNoSW5mbzogSVNlYXJjaEluZm87XG4gICAgcHJpdmF0ZSBfZGl2ID0gbnVsbDtcbiAgICBwcml2YXRlIF9vYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbm9kZVdhc1JlbW92ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9mb3JjZUV2YWx1YXRpb24gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9hY3RpdmVFbGVtZW50SW5kZXggPSAtMTtcbiAgICBwcml2YXRlIF92YWx1ZUNoYW5nZWQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHRoZSBgQ1NTYCBjbGFzcyBvZiB0aGUgaGlnaGxpZ2h0IGVsZW1lbnRzLlxuICAgICAqIFRoaXMgYWxsb3dzIHRoZSBkZXZlbG9wZXIgdG8gcHJvdmlkZSBjdXN0b20gYENTU2AgdG8gY3VzdG9taXplIHRoZSBoaWdobGlnaHQuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdlxuICAgICAqICAgaWd4VGV4dEhpZ2hsaWdodFxuICAgICAqICAgW2Nzc0NsYXNzXT1cIm15Q2xhc3NcIj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2Nzc0NsYXNzJylcbiAgICBwdWJsaWMgY3NzQ2xhc3M6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIGBDU1NgIGNsYXNzIG9mIHRoZSBhY3RpdmUgaGlnaGxpZ2h0IGVsZW1lbnQuXG4gICAgICogVGhpcyBhbGxvd3MgdGhlIGRldmVsb3BlciB0byBwcm92aWRlIGN1c3RvbSBgQ1NTYCB0byBjdXN0b21pemUgdGhlIGhpZ2hsaWdodC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2XG4gICAgICogICBpZ3hUZXh0SGlnaGxpZ2h0XG4gICAgICogICBbYWN0aXZlQ3NzQ2xhc3NdPVwiYWN0aXZlSGlnaGxpZ2h0Q2xhc3NcIj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2FjdGl2ZUNzc0NsYXNzJylcbiAgICBwdWJsaWMgYWN0aXZlQ3NzQ2xhc3M6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASW5wdXQoJ2NvbnRhaW5lckNsYXNzJylcbiAgICBwdWJsaWMgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIElkZW50aWZpZXMgdGhlIGhpZ2hsaWdodCB3aXRoaW4gYSB1bmlxdWUgZ3JvdXAuXG4gICAgICogVGhpcyBhbGxvd3MgaXQgdG8gaGF2ZSBzZXZlcmFsIGRpZmZlcmVudCBoaWdobGlnaHQgZ3JvdXBzLFxuICAgICAqIHdpdGggZWFjaCBvZiB0aGVtIGhhdmluZyB0aGVpciBvd24gYWN0aXZlIGhpZ2hsaWdodC5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2XG4gICAgICogICBpZ3hUZXh0SGlnaGxpZ2h0XG4gICAgICogICBbZ3JvdXBOYW1lXT1cIm15R3JvdXBOYW1lXCI+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdncm91cE5hbWUnKVxuICAgIHB1YmxpYyBncm91cE5hbWUgPSAnJztcblxuICAgIHByaXZhdGUgX3ZhbHVlID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdW5kZXJseWluZyB2YWx1ZSBvZiB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgaGlnaGxpZ2h0ZWQuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogY29uc3QgZWxlbWVudFZhbHVlID0gdGhpcy50ZXh0SGlnaGxpZ2h0LnZhbHVlO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDwhLS1zZXQtLT5cbiAgICAgKiA8ZGl2XG4gICAgICogICBpZ3hUZXh0SGlnaGxpZ2h0XG4gICAgICogICBbdmFsdWVdPVwibmV3VmFsdWVcIj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ3ZhbHVlJylcbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBpZGVudGlmaWVyIG9mIHRoZSByb3cgb24gd2hpY2ggdGhlIGRpcmVjdGl2ZSBpcyBjdXJyZW50bHkgb24uXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdlxuICAgICAqICAgaWd4VGV4dEhpZ2hsaWdodFxuICAgICAqICAgW3Jvd109XCIwXCI+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdyb3cnKVxuICAgIHB1YmxpYyByb3c6IGFueTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBjb2x1bW4gb24gd2hpY2ggdGhlIGRpcmVjdGl2ZSBpcyBjdXJyZW50bHkgb24uXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdlxuICAgICAqICAgaWd4VGV4dEhpZ2hsaWdodFxuICAgICAqICAgW2NvbHVtbl09XCIwXCI+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdjb2x1bW4nKVxuICAgIHB1YmxpYyBjb2x1bW46IGFueTtcblxuICAgIEBJbnB1dCgncGFnZScpXG4gICAgQERlcHJlY2F0ZVByb3BlcnR5KGBJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlICdwYWdlJyBpbnB1dCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLmApXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGxhc3RTZWFyY2hJbmZvKCk6IElTZWFyY2hJbmZvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhc3RTZWFyY2hJbmZvO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGFyZW50RWxlbWVudDogYW55O1xuXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyOiBhbnk7XG5cbiAgICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlcyB0aGUgaGlnaGxpZ2h0IGF0IGEgZ2l2ZW4gaW5kZXguXG4gICAgICogKGlmIHN1Y2ggaW5kZXggZXhpc3RzKVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0QWN0aXZlSGlnaGxpZ2h0KGdyb3VwTmFtZTogc3RyaW5nLCBoaWdobGlnaHQ6IElBY3RpdmVIaWdobGlnaHRJbmZvKSB7XG4gICAgICAgIElneFRleHRIaWdobGlnaHREaXJlY3RpdmUuaGlnaGxpZ2h0R3JvdXBzTWFwLnNldChncm91cE5hbWUsIGhpZ2hsaWdodCk7XG4gICAgICAgIElneFRleHRIaWdobGlnaHREaXJlY3RpdmUub25BY3RpdmVFbGVtZW50Q2hhbmdlZC5lbWl0KGdyb3VwTmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFueSBleGlzdGluZyBoaWdobGlnaHQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjbGVhckFjdGl2ZUhpZ2hsaWdodChncm91cE5hbWUpIHtcbiAgICAgICAgSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZS5oaWdobGlnaHRHcm91cHNNYXAuc2V0KGdyb3VwTmFtZSwge1xuICAgICAgICAgICAgaW5kZXg6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICBJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlLm9uQWN0aXZlRWxlbWVudENoYW5nZWQuZW1pdChncm91cE5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICAgICAgSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZS5vbkFjdGl2ZUVsZW1lbnRDaGFuZ2VkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGdyb3VwTmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXBOYW1lID09PSBncm91cE5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWN0aXZlRWxlbWVudEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUlmTmVjZXNzYXJ5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5jbGVhckhpZ2hsaWdodCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9vYnNlcnZlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLnZhbHVlICYmICFjaGFuZ2VzLnZhbHVlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKChjaGFuZ2VzLnJvdyAhPT0gdW5kZWZpbmVkICYmICFjaGFuZ2VzLnJvdy5maXJzdENoYW5nZSkgfHxcbiAgICAgICAgICAgIChjaGFuZ2VzLmNvbHVtbiAhPT0gdW5kZWZpbmVkICYmICFjaGFuZ2VzLmNvbHVtbi5maXJzdENoYW5nZSkgfHxcbiAgICAgICAgICAgIChjaGFuZ2VzLnBhZ2UgIT09IHVuZGVmaW5lZCAmJiAhY2hhbmdlcy5wYWdlLmZpcnN0Q2hhbmdlKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZUVsZW1lbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVJZk5lY2Vzc2FyeSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgICBpZiAoSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZS5oaWdobGlnaHRHcm91cHNNYXAuaGFzKHRoaXMuZ3JvdXBOYW1lKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIElneFRleHRIaWdobGlnaHREaXJlY3RpdmUuaGlnaGxpZ2h0R3JvdXBzTWFwLnNldCh0aGlzLmdyb3VwTmFtZSwge1xuICAgICAgICAgICAgICAgIGluZGV4OiAtMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0U2VhcmNoSW5mbyA9IHtcbiAgICAgICAgICAgIHNlYXJjaGVkVGV4dDogJycsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgbWF0Y2hDb3VudDogMCxcbiAgICAgICAgICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQodGhpcy5fbGFzdFNlYXJjaEluZm8uc2VhcmNoZWRUZXh0LCB0aGlzLl9sYXN0U2VhcmNoSW5mby5jYXNlU2Vuc2l0aXZlLCB0aGlzLl9sYXN0U2VhcmNoSW5mby5leGFjdE1hdGNoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVJZk5lY2Vzc2FyeSgpO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGV4aXN0aW5nIGhpZ2hsaWdodCBhbmQgaGlnaGxpZ2h0cyB0aGUgc2VhcmNoZWQgdGV4dC5cbiAgICAgKiBSZXR1cm5zIGhvdyBtYW55IHRpbWVzIHRoZSBlbGVtZW50IGNvbnRhaW5zIHRoZSBzZWFyY2hlZCB0ZXh0LlxuICAgICAqL1xuICAgIHB1YmxpYyBoaWdobGlnaHQodGV4dDogc3RyaW5nLCBjYXNlU2Vuc2l0aXZlPzogYm9vbGVhbiwgZXhhY3RNYXRjaD86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgICAgICBjb25zdCBjYXNlU2Vuc2l0aXZlUmVzb2x2ZWQgPSBjYXNlU2Vuc2l0aXZlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBjb25zdCBleGFjdE1hdGNoUmVzb2x2ZWQgPSBleGFjdE1hdGNoID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaE5lZWRzRXZhbHVhdGlvbih0ZXh0LCBjYXNlU2Vuc2l0aXZlUmVzb2x2ZWQsIGV4YWN0TWF0Y2hSZXNvbHZlZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RTZWFyY2hJbmZvLnNlYXJjaGVkVGV4dCA9IHRleHQ7XG4gICAgICAgICAgICB0aGlzLl9sYXN0U2VhcmNoSW5mby5jYXNlU2Vuc2l0aXZlID0gY2FzZVNlbnNpdGl2ZVJlc29sdmVkO1xuICAgICAgICAgICAgdGhpcy5fbGFzdFNlYXJjaEluZm8uZXhhY3RNYXRjaCA9IGV4YWN0TWF0Y2hSZXNvbHZlZDtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RTZWFyY2hJbmZvLmNvbnRlbnQgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGV4dCA9PT0gJycgfHwgdGV4dCA9PT0gdW5kZWZpbmVkIHx8IHRleHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFySGlnaGxpZ2h0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJDaGlsZEVsZW1lbnRzKHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RTZWFyY2hJbmZvLm1hdGNoQ291bnQgPSB0aGlzLmdldEhpZ2hsaWdodGVkVGV4dCh0ZXh0LCBjYXNlU2Vuc2l0aXZlLCBleGFjdE1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ub2RlV2FzUmVtb3ZlZCkge1xuICAgICAgICAgICAgdGhpcy5fbGFzdFNlYXJjaEluZm8uc2VhcmNoZWRUZXh0ID0gdGV4dDtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RTZWFyY2hJbmZvLmNhc2VTZW5zaXRpdmUgPSBjYXNlU2Vuc2l0aXZlUmVzb2x2ZWQ7XG4gICAgICAgICAgICB0aGlzLl9sYXN0U2VhcmNoSW5mby5leGFjdE1hdGNoID0gZXhhY3RNYXRjaFJlc29sdmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhc3RTZWFyY2hJbmZvLm1hdGNoQ291bnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFueSBleGlzdGluZyBoaWdobGlnaHQuXG4gICAgICovXG4gICAgcHVibGljIGNsZWFySGlnaGxpZ2h0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyQ2hpbGRFbGVtZW50cyhmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5fbGFzdFNlYXJjaEluZm8uc2VhcmNoZWRUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuX2xhc3RTZWFyY2hJbmZvLm1hdGNoQ291bnQgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlcyB0aGUgaGlnaGxpZ2h0IGlmIGl0IGlzIG9uIHRoZSBjdXJyZW50bHkgYWN0aXZlIHJvdywgY29sdW1uIGFuZCBwYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhY3RpdmF0ZUlmTmVjZXNzYXJ5KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBncm91cCA9IElneFRleHRIaWdobGlnaHREaXJlY3RpdmUuaGlnaGxpZ2h0R3JvdXBzTWFwLmdldCh0aGlzLmdyb3VwTmFtZSk7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IGdyb3VwLmNvbHVtbkluZGV4ID09PSB1bmRlZmluZWQgPyBncm91cC5jb2x1bW4gOiBncm91cC5jb2x1bW5JbmRleDtcbiAgICAgICAgY29uc3Qgcm93ID0gZ3JvdXAucm93SW5kZXggPT09IHVuZGVmaW5lZCA/IGdyb3VwLnJvdyA6IGdyb3VwLnJvd0luZGV4O1xuXG4gICAgICAgIGlmIChjb2x1bW4gPT09IHRoaXMuY29sdW1uICYmIHJvdyA9PT0gdGhpcy5yb3cgJiYgZ3JvdXAucGFnZSA9PT0gdGhpcy5wYWdlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlKGdyb3VwLmluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGEgTXV0YXRpb25PYnNlcnZlciB0byB0aGUgcGFyZW50RWxlbWVudCBhbmQgd2F0Y2hlcyBmb3Igd2hlbiB0aGUgY29udGFpbmVyIGVsZW1lbnQgaXMgcmVtb3ZlZC9yZWFkZGVkIHRvIHRoZSBET00uXG4gICAgICogU2hvdWxkIGJlIHVzZWQgb25seSB3aGVuIG5lY2Vzc2FyeSBhcyB1c2luZyBtYW55IG9ic2VydmVycyBtYXkgbGVhZCB0byBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgb2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX29ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IChtdXRhdGlvbkxpc3QpID0+IHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVkTm9kZXMuZm9yRWFjaCgobikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPT09IHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVXYXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQ2hpbGRFbGVtZW50cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZGVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuICAgICAgICAgICAgICAgICAgICBhZGRlZE5vZGVzLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID09PSB0aGlzLnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgJiYgdGhpcy5fbm9kZVdhc1JlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb250YWluZXIgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZVdhc1JlbW92ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlRXZhbHVhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQodGhpcy5fbGFzdFNlYXJjaEluZm8uc2VhcmNoZWRUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0U2VhcmNoSW5mby5jYXNlU2Vuc2l0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0U2VhcmNoSW5mby5leGFjdE1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JjZUV2YWx1YXRpb24gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVJZk5lY2Vzc2FyeSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMucGFyZW50RWxlbWVudCwge2NoaWxkTGlzdDogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9kaXYgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW5zID0gdGhpcy5fZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRJbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgICBpZiAoc3BhbnMubGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50VG9BY3RpdmF0ZSA9IHNwYW5zW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFRvQWN0aXZhdGUsIHRoaXMuYWN0aXZlQ3NzQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFRvQWN0aXZhdGUsICdzdHlsZScsICdiYWNrZ3JvdW5kOm9yYW5nZTtjb2xvcjpibGFjaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWFjdGl2YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZlRWxlbWVudEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3BhbnMgPSB0aGlzLl9kaXYucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpO1xuXG4gICAgICAgIGlmIChzcGFucy5sZW5ndGggPD0gdGhpcy5fYWN0aXZlRWxlbWVudEluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50SW5kZXggPSAtMTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRUb0RlYWN0aXZhdGUgPSBzcGFuc1t0aGlzLl9hY3RpdmVFbGVtZW50SW5kZXhdO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnRUb0RlYWN0aXZhdGUsIHRoaXMuYWN0aXZlQ3NzQ2xhc3MpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50VG9EZWFjdGl2YXRlLCAnc3R5bGUnLCAnYmFja2dyb3VuZDp5ZWxsb3c7Y29sb3I6YmxhY2snKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudEluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGVhckNoaWxkRWxlbWVudHMob3JpZ2luYWxDb250ZW50SGlkZGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nLCBvcmlnaW5hbENvbnRlbnRIaWRkZW4pO1xuXG4gICAgICAgIGlmICh0aGlzLl9kaXYgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5wYXJlbnRFbGVtZW50LCB0aGlzLl9kaXYpO1xuXG4gICAgICAgICAgICB0aGlzLl9kaXYgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudEluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEhpZ2hsaWdodGVkVGV4dChzZWFyY2hUZXh0OiBzdHJpbmcsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4sIGV4YWN0TWF0Y2g6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hcHBlbmREaXYoKTtcblxuICAgICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IFN0cmluZyh0aGlzLnZhbHVlKTtcbiAgICAgICAgY29uc3QgY29udGVudFN0cmluZ1Jlc29sdmVkID0gIWNhc2VTZW5zaXRpdmUgPyBzdHJpbmdWYWx1ZS50b0xvd2VyQ2FzZSgpIDogc3RyaW5nVmFsdWU7XG4gICAgICAgIGNvbnN0IHNlYXJjaFRleHRSZXNvbHZlZCA9ICFjYXNlU2Vuc2l0aXZlID8gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpIDogc2VhcmNoVGV4dDtcblxuICAgICAgICBsZXQgbWF0Y2hDb3VudCA9IDA7XG5cbiAgICAgICAgaWYgKGV4YWN0TWF0Y2gpIHtcbiAgICAgICAgICAgIGlmIChjb250ZW50U3RyaW5nUmVzb2x2ZWQgPT09IHNlYXJjaFRleHRSZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZFNwYW4oYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNzc0NsYXNzfVwiIHN0eWxlPVwiYmFja2dyb3VuZDp5ZWxsb3c7Y29sb3I6YmxhY2tcIj4ke3N0cmluZ1ZhbHVlfTwvc3Bhbj5gKTtcbiAgICAgICAgICAgICAgICBtYXRjaENvdW50Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kVGV4dChzdHJpbmdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZm91bmRJbmRleCA9IGNvbnRlbnRTdHJpbmdSZXNvbHZlZC5pbmRleE9mKHNlYXJjaFRleHRSZXNvbHZlZCwgMCk7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNNYXRjaEVuZCA9IDA7XG5cbiAgICAgICAgICAgIHdoaWxlIChmb3VuZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gZm91bmRJbmRleDtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBmb3VuZEluZGV4ICsgc2VhcmNoVGV4dFJlc29sdmVkLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kVGV4dChzdHJpbmdWYWx1ZS5zdWJzdHJpbmcocHJldmlvdXNNYXRjaEVuZCwgc3RhcnQpKTtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRTcGFuKGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jc3NDbGFzc31cIiBzdHlsZT1cImJhY2tncm91bmQ6eWVsbG93O2NvbG9yOmJsYWNrXCI+JHtzdHJpbmdWYWx1ZS5zdWJzdHJpbmcoc3RhcnQsIGVuZCl9PC9zcGFuPmApO1xuXG4gICAgICAgICAgICAgICAgcHJldmlvdXNNYXRjaEVuZCA9IGVuZDtcbiAgICAgICAgICAgICAgICBtYXRjaENvdW50Kys7XG5cbiAgICAgICAgICAgICAgICBmb3VuZEluZGV4ID0gY29udGVudFN0cmluZ1Jlc29sdmVkLmluZGV4T2Yoc2VhcmNoVGV4dFJlc29sdmVkLCBlbmQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFwcGVuZFRleHQoc3RyaW5nVmFsdWUuc3Vic3RyaW5nKHByZXZpb3VzTWF0Y2hFbmQsIHN0cmluZ1ZhbHVlLmxlbmd0aCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoQ291bnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBlbmRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0ZXh0KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9kaXYsIHRleHRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGVuZFNwYW4ob3V0ZXJIVE1MOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2Rpdiwgc3Bhbik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoc3BhbiwgJ291dGVySFRNTCcsIG91dGVySFRNTCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBlbmREaXYoKSB7XG4gICAgICAgIHRoaXMuX2RpdiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlmICggdGhpcy5jb250YWluZXJDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kaXYsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5wYXJlbnRFbGVtZW50LCB0aGlzLl9kaXYpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VhcmNoTmVlZHNFdmFsdWF0aW9uKHRleHQ6IHN0cmluZywgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbiwgZXhhY3RNYXRjaDogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBzZWFyY2hlZFRleHQgPSB0aGlzLl9sYXN0U2VhcmNoSW5mby5zZWFyY2hlZFRleHQ7XG5cbiAgICAgICAgcmV0dXJuICF0aGlzLl9ub2RlV2FzUmVtb3ZlZCAmJlxuICAgICAgICAgICAgKHNlYXJjaGVkVGV4dCA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIHNlYXJjaGVkVGV4dCAhPT0gdGV4dCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RTZWFyY2hJbmZvLmNvbnRlbnQgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0U2VhcmNoSW5mby5jYXNlU2Vuc2l0aXZlICE9PSBjYXNlU2Vuc2l0aXZlIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFNlYXJjaEluZm8uZXhhY3RNYXRjaCAhPT0gZXhhY3RNYXRjaCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlRXZhbHVhdGlvbik7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4VGV4dEhpZ2hsaWdodE1vZHVsZSB7IH1cbiJdfQ==