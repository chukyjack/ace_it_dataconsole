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
export class IgxTextHighlightDirective {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
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
        IgxTextHighlightDirective.onActiveElementChanged.pipe(takeUntil(this.destroy$)).subscribe((groupName) => {
            if (this.groupName === groupName) {
                if (this._activeElementIndex !== -1) {
                    this.deactivate();
                }
                this.activateIfNecessary();
            }
        });
    }
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
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (value === undefined || value === null) {
            this._value = '';
        }
        else {
            this._value = value;
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    get lastSearchInfo() {
        return this._lastSearchInfo;
    }
    /**
     * Activates the highlight at a given index.
     * (if such index exists)
     * @param {?} groupName
     * @param {?} highlight
     * @return {?}
     */
    static setActiveHighlight(groupName, highlight) {
        IgxTextHighlightDirective.highlightGroupsMap.set(groupName, highlight);
        IgxTextHighlightDirective.onActiveElementChanged.emit(groupName);
    }
    /**
     * Clears any existing highlight.
     * @param {?} groupName
     * @return {?}
     */
    static clearActiveHighlight(groupName) {
        IgxTextHighlightDirective.highlightGroupsMap.set(groupName, {
            index: -1
        });
        IgxTextHighlightDirective.onActiveElementChanged.emit(groupName);
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this.clearHighlight();
        if (this._observer !== null) {
            this._observer.disconnect();
        }
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
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
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._valueChanged) {
            this.highlight(this._lastSearchInfo.searchedText, this._lastSearchInfo.caseSensitive, this._lastSearchInfo.exactMatch);
            this.activateIfNecessary();
            this._valueChanged = false;
        }
    }
    /**
     * Clears the existing highlight and highlights the searched text.
     * Returns how many times the element contains the searched text.
     * @param {?} text
     * @param {?=} caseSensitive
     * @param {?=} exactMatch
     * @return {?}
     */
    highlight(text, caseSensitive, exactMatch) {
        /** @type {?} */
        const caseSensitiveResolved = caseSensitive ? true : false;
        /** @type {?} */
        const exactMatchResolved = exactMatch ? true : false;
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
    }
    /**
     * Clears any existing highlight.
     * @return {?}
     */
    clearHighlight() {
        this.clearChildElements(false);
        this._lastSearchInfo.searchedText = '';
        this._lastSearchInfo.matchCount = 0;
    }
    /**
     * Activates the highlight if it is on the currently active row, column and page.
     * @return {?}
     */
    activateIfNecessary() {
        /** @type {?} */
        const group = IgxTextHighlightDirective.highlightGroupsMap.get(this.groupName);
        /** @type {?} */
        const column = group.columnIndex === undefined ? group.column : group.columnIndex;
        /** @type {?} */
        const row = group.rowIndex === undefined ? group.row : group.rowIndex;
        if (column === this.column && row === this.row && group.page === this.page) {
            this.activate(group.index);
        }
    }
    /**
     * Attaches a MutationObserver to the parentElement and watches for when the container element is removed/readded to the DOM.
     * Should be used only when necessary as using many observers may lead to performance degradation.
     * @return {?}
     */
    observe() {
        if (this._observer === null) {
            /** @type {?} */
            const callback = (mutationList) => {
                mutationList.forEach((mutation) => {
                    /** @type {?} */
                    const removedNodes = Array.from(mutation.removedNodes);
                    removedNodes.forEach((n) => {
                        if (n === this._container) {
                            this._nodeWasRemoved = true;
                            this.clearChildElements(false);
                        }
                    });
                    /** @type {?} */
                    const addedNodes = Array.from(mutation.addedNodes);
                    addedNodes.forEach((n) => {
                        if (n === this.parentElement.firstElementChild && this._nodeWasRemoved) {
                            this._container = this.parentElement.firstElementChild;
                            this._nodeWasRemoved = false;
                            this._forceEvaluation = true;
                            this.highlight(this._lastSearchInfo.searchedText, this._lastSearchInfo.caseSensitive, this._lastSearchInfo.exactMatch);
                            this._forceEvaluation = false;
                            this.activateIfNecessary();
                            this._observer.disconnect();
                            this._observer = null;
                        }
                    });
                });
            };
            this._observer = new MutationObserver(callback);
            this._observer.observe(this.parentElement, { childList: true });
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    activate(index) {
        this.deactivate();
        if (this._div !== null) {
            /** @type {?} */
            const spans = this._div.querySelectorAll('span');
            this._activeElementIndex = index;
            if (spans.length <= index) {
                return;
            }
            /** @type {?} */
            const elementToActivate = spans[index];
            this.renderer.addClass(elementToActivate, this.activeCssClass);
            this.renderer.setAttribute(elementToActivate, 'style', 'background:orange;color:black');
        }
    }
    /**
     * @private
     * @return {?}
     */
    deactivate() {
        if (this._activeElementIndex === -1) {
            return;
        }
        /** @type {?} */
        const spans = this._div.querySelectorAll('span');
        if (spans.length <= this._activeElementIndex) {
            this._activeElementIndex = -1;
            return;
        }
        /** @type {?} */
        const elementToDeactivate = spans[this._activeElementIndex];
        this.renderer.removeClass(elementToDeactivate, this.activeCssClass);
        this.renderer.setAttribute(elementToDeactivate, 'style', 'background:yellow;color:black');
        this._activeElementIndex = -1;
    }
    /**
     * @private
     * @param {?} originalContentHidden
     * @return {?}
     */
    clearChildElements(originalContentHidden) {
        this.renderer.setProperty(this.element.nativeElement, 'hidden', originalContentHidden);
        if (this._div !== null) {
            this.renderer.removeChild(this.parentElement, this._div);
            this._div = null;
            this._activeElementIndex = -1;
        }
    }
    /**
     * @private
     * @param {?} searchText
     * @param {?} caseSensitive
     * @param {?} exactMatch
     * @return {?}
     */
    getHighlightedText(searchText, caseSensitive, exactMatch) {
        this.appendDiv();
        /** @type {?} */
        const stringValue = String(this.value);
        /** @type {?} */
        const contentStringResolved = !caseSensitive ? stringValue.toLowerCase() : stringValue;
        /** @type {?} */
        const searchTextResolved = !caseSensitive ? searchText.toLowerCase() : searchText;
        /** @type {?} */
        let matchCount = 0;
        if (exactMatch) {
            if (contentStringResolved === searchTextResolved) {
                // tslint:disable-next-line:max-line-length
                this.appendSpan(`<span class="${this.cssClass}" style="background:yellow;color:black">${stringValue}</span>`);
                matchCount++;
            }
            else {
                this.appendText(stringValue);
            }
        }
        else {
            /** @type {?} */
            let foundIndex = contentStringResolved.indexOf(searchTextResolved, 0);
            /** @type {?} */
            let previousMatchEnd = 0;
            while (foundIndex !== -1) {
                /** @type {?} */
                const start = foundIndex;
                /** @type {?} */
                const end = foundIndex + searchTextResolved.length;
                this.appendText(stringValue.substring(previousMatchEnd, start));
                // tslint:disable-next-line:max-line-length
                this.appendSpan(`<span class="${this.cssClass}" style="background:yellow;color:black">${stringValue.substring(start, end)}</span>`);
                previousMatchEnd = end;
                matchCount++;
                foundIndex = contentStringResolved.indexOf(searchTextResolved, end);
            }
            this.appendText(stringValue.substring(previousMatchEnd, stringValue.length));
        }
        return matchCount;
    }
    /**
     * @private
     * @param {?} text
     * @return {?}
     */
    appendText(text) {
        /** @type {?} */
        const textElement = this.renderer.createText(text);
        this.renderer.appendChild(this._div, textElement);
    }
    /**
     * @private
     * @param {?} outerHTML
     * @return {?}
     */
    appendSpan(outerHTML) {
        /** @type {?} */
        const span = this.renderer.createElement('span');
        this.renderer.appendChild(this._div, span);
        this.renderer.setProperty(span, 'outerHTML', outerHTML);
    }
    /**
     * @private
     * @return {?}
     */
    appendDiv() {
        this._div = this.renderer.createElement('div');
        if (this.containerClass) {
            this.renderer.addClass(this._div, this.containerClass);
        }
        this.renderer.appendChild(this.parentElement, this._div);
    }
    /**
     * @private
     * @param {?} text
     * @param {?} caseSensitive
     * @param {?} exactMatch
     * @return {?}
     */
    searchNeedsEvaluation(text, caseSensitive, exactMatch) {
        /** @type {?} */
        const searchedText = this._lastSearchInfo.searchedText;
        return !this._nodeWasRemoved &&
            (searchedText === null ||
                searchedText !== text ||
                this._lastSearchInfo.content !== this.value ||
                this._lastSearchInfo.caseSensitive !== caseSensitive ||
                this._lastSearchInfo.exactMatch !== exactMatch ||
                this._forceEvaluation);
    }
}
IgxTextHighlightDirective.onActiveElementChanged = new EventEmitter();
IgxTextHighlightDirective.highlightGroupsMap = new Map();
IgxTextHighlightDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxTextHighlight]'
            },] }
];
/** @nocollapse */
IgxTextHighlightDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
    DeprecateProperty(`IgxTextHighlightDirective 'page' input property is deprecated.`),
    tslib_1.__metadata("design:type", Number)
], IgxTextHighlightDirective.prototype, "page", void 0);
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
export class IgxTextHighlightModule {
}
IgxTextHighlightModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxTextHighlightDirective],
                exports: [IgxTextHighlightDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1oaWdobGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RleHQtaGlnaGxpZ2h0L3RleHQtaGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUdSLFNBQVMsRUFHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7OztBQUVuRSwwQkFNQzs7O0lBTEcsbUNBQXFCOztJQUNyQiw4QkFBZ0I7O0lBQ2hCLGlDQUFtQjs7SUFDbkIsb0NBQXVCOztJQUN2QixpQ0FBb0I7Ozs7OztBQU14QiwwQ0F5QkM7Ozs7OztJQXJCRyx3Q0FBa0I7Ozs7O0lBSWxCLDJDQUFxQjs7Ozs7SUFJckIsb0NBQWM7Ozs7O0lBSWQsbUNBQVU7Ozs7O0lBSVYsc0NBQWE7Ozs7O0lBSWIscUNBQWM7O0FBTWxCLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBNEpsQyxZQUFvQixPQUFtQixFQUFTLFFBQW1CO1FBQS9DLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBdkozRCxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osY0FBUyxHQUFxQixJQUFJLENBQUM7UUFDbkMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHdCQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O1FBa0QxQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWQs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QUFVO1lBTVYsU0FBUzs7O3VCQXdFUixLQUFLLFNBQUMsVUFBVTs2QkFjaEIsS0FBSyxTQUFDLGdCQUFnQjs2QkFNdEIsS0FBSyxTQUFDLGdCQUFnQjt3QkFldEIsS0FBSyxTQUFDLFdBQVc7b0JBcUJqQixLQUFLLFNBQUMsT0FBTztrQkFzQmIsS0FBSyxTQUFDLEtBQUs7cUJBYVgsS0FBSyxTQUFDLFFBQVE7bUJBR2QsS0FBSyxTQUFDLE1BQU07O0FBRWI7SUFEQyxpQkFBaUIsQ0FBQyxnRUFBZ0UsQ0FBQzs7dURBQ2hFOzs7Ozs7SUF0SHBCLGlEQUFtRTs7SUFDbkUsNkNBQTJFOzs7OztJQUUzRSxvREFBcUM7Ozs7O0lBQ3JDLHlDQUFvQjs7Ozs7SUFDcEIsOENBQTJDOzs7OztJQUMzQyxvREFBZ0M7Ozs7O0lBQ2hDLHFEQUFpQzs7Ozs7SUFDakMsd0RBQWlDOzs7OztJQUNqQyxrREFBK0I7Ozs7Ozs7Ozs7Ozs7SUFhL0IsNkNBQ3dCOzs7Ozs7Ozs7Ozs7O0lBYXhCLG1EQUM4Qjs7Ozs7SUFLOUIsbURBQzhCOzs7Ozs7Ozs7Ozs7OztJQWM5Qiw4Q0FDc0I7Ozs7O0lBRXRCLDJDQUFvQjs7Ozs7Ozs7Ozs7O0lBd0NwQix3Q0FDZ0I7Ozs7Ozs7Ozs7OztJQVloQiwyQ0FDbUI7O0lBRW5CLHlDQUVvQjs7Ozs7SUFZcEIsa0RBQTBCOzs7OztJQUUxQiwrQ0FBd0I7Ozs7O0lBRXhCLDZDQUEwQzs7Ozs7SUFxQjlCLDRDQUEyQjs7SUFBRSw2Q0FBMEI7Ozs7O0FBcVN2RSxNQUFNLE9BQU8sc0JBQXNCOzs7WUFKbEMsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBSZW5kZXJlcjIsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBBZnRlclZpZXdDaGVja2VkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVwcmVjYXRlUHJvcGVydHkgfSBmcm9tICcuLi8uLi9jb3JlL2RlcHJlY2F0ZURlY29yYXRvcnMnO1xuXG5pbnRlcmZhY2UgSVNlYXJjaEluZm8ge1xuICAgIHNlYXJjaGVkVGV4dDogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICBtYXRjaENvdW50OiBudW1iZXI7XG4gICAgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbjtcbiAgICBleGFjdE1hdGNoOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEFuIGludGVyZmFjZSBkZXNjcmliaW5nIGluZm9ybWF0aW9uIGZvciB0aGUgYWN0aXZlIGhpZ2hsaWdodC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWN0aXZlSGlnaGxpZ2h0SW5mbyB7XG4gICAgLyoqXG4gICAgICogVGhlIHJvdyBpbmRleCBvZiB0aGUgaGlnaGxpZ2h0LiBUaGlzIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQsIHVzZSBgcm93YCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIHJvd0luZGV4PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBjb2x1bW4gaW5kZXggb2YgdGhlIGhpZ2hsaWdodC4gVGhpcyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLCB1c2UgYGNvbHVtbmAgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBjb2x1bW5JbmRleD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgcGFnZSBpbmRleCBvZiB0aGUgaGlnaGxpZ2h0LiBUaGlzIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuXG4gICAgICovXG4gICAgcGFnZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgcm93IG9mIHRoZSBoaWdobGlnaHQuXG4gICAgICovXG4gICAgcm93PzogYW55O1xuICAgIC8qKlxuICAgICAqIFRoZSBjb2x1bW4gb2YgdGhlIGhpZ2hsaWdodC5cbiAgICAgKi9cbiAgICBjb2x1bW4/OiBhbnk7XG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG9mIHRoZSBoaWdobGlnaHQuXG4gICAgICovXG4gICAgaW5kZXg6IG51bWJlcjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4VGV4dEhpZ2hsaWdodF0nXG59KVxuZXhwb3J0IGNsYXNzIElneFRleHRIaWdobGlnaHREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgb25BY3RpdmVFbGVtZW50Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIHB1YmxpYyBzdGF0aWMgaGlnaGxpZ2h0R3JvdXBzTWFwID0gbmV3IE1hcDxzdHJpbmcsIElBY3RpdmVIaWdobGlnaHRJbmZvPigpO1xuXG4gICAgcHJpdmF0ZSBfbGFzdFNlYXJjaEluZm86IElTZWFyY2hJbmZvO1xuICAgIHByaXZhdGUgX2RpdiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX25vZGVXYXNSZW1vdmVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZm9yY2VFdmFsdWF0aW9uID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfYWN0aXZlRWxlbWVudEluZGV4ID0gLTE7XG4gICAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgYENTU2AgY2xhc3Mgb2YgdGhlIGhpZ2hsaWdodCBlbGVtZW50cy5cbiAgICAgKiBUaGlzIGFsbG93cyB0aGUgZGV2ZWxvcGVyIHRvIHByb3ZpZGUgY3VzdG9tIGBDU1NgIHRvIGN1c3RvbWl6ZSB0aGUgaGlnaGxpZ2h0LlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXZcbiAgICAgKiAgIGlneFRleHRIaWdobGlnaHRcbiAgICAgKiAgIFtjc3NDbGFzc109XCJteUNsYXNzXCI+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdjc3NDbGFzcycpXG4gICAgcHVibGljIGNzc0NsYXNzOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHRoZSBgQ1NTYCBjbGFzcyBvZiB0aGUgYWN0aXZlIGhpZ2hsaWdodCBlbGVtZW50LlxuICAgICAqIFRoaXMgYWxsb3dzIHRoZSBkZXZlbG9wZXIgdG8gcHJvdmlkZSBjdXN0b20gYENTU2AgdG8gY3VzdG9taXplIHRoZSBoaWdobGlnaHQuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdlxuICAgICAqICAgaWd4VGV4dEhpZ2hsaWdodFxuICAgICAqICAgW2FjdGl2ZUNzc0NsYXNzXT1cImFjdGl2ZUhpZ2hsaWdodENsYXNzXCI+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdhY3RpdmVDc3NDbGFzcycpXG4gICAgcHVibGljIGFjdGl2ZUNzc0NsYXNzOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQElucHV0KCdjb250YWluZXJDbGFzcycpXG4gICAgcHVibGljIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBJZGVudGlmaWVzIHRoZSBoaWdobGlnaHQgd2l0aGluIGEgdW5pcXVlIGdyb3VwLlxuICAgICAqIFRoaXMgYWxsb3dzIGl0IHRvIGhhdmUgc2V2ZXJhbCBkaWZmZXJlbnQgaGlnaGxpZ2h0IGdyb3VwcyxcbiAgICAgKiB3aXRoIGVhY2ggb2YgdGhlbSBoYXZpbmcgdGhlaXIgb3duIGFjdGl2ZSBoaWdobGlnaHQuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdlxuICAgICAqICAgaWd4VGV4dEhpZ2hsaWdodFxuICAgICAqICAgW2dyb3VwTmFtZV09XCJteUdyb3VwTmFtZVwiPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnZ3JvdXBOYW1lJylcbiAgICBwdWJsaWMgZ3JvdXBOYW1lID0gJyc7XG5cbiAgICBwcml2YXRlIF92YWx1ZSA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVuZGVybHlpbmcgdmFsdWUgb2YgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGhpZ2hsaWdodGVkLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldFxuICAgICAqIGNvbnN0IGVsZW1lbnRWYWx1ZSA9IHRoaXMudGV4dEhpZ2hsaWdodC52YWx1ZTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tc2V0LS0+XG4gICAgICogPGRpdlxuICAgICAqICAgaWd4VGV4dEhpZ2hsaWdodFxuICAgICAqICAgW3ZhbHVlXT1cIm5ld1ZhbHVlXCI+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCd2YWx1ZScpXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWRlbnRpZmllciBvZiB0aGUgcm93IG9uIHdoaWNoIHRoZSBkaXJlY3RpdmUgaXMgY3VycmVudGx5IG9uLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXZcbiAgICAgKiAgIGlneFRleHRIaWdobGlnaHRcbiAgICAgKiAgIFtyb3ddPVwiMFwiPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgncm93JylcbiAgICBwdWJsaWMgcm93OiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWRlbnRpZmllciBvZiB0aGUgY29sdW1uIG9uIHdoaWNoIHRoZSBkaXJlY3RpdmUgaXMgY3VycmVudGx5IG9uLlxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXZcbiAgICAgKiAgIGlneFRleHRIaWdobGlnaHRcbiAgICAgKiAgIFtjb2x1bW5dPVwiMFwiPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnY29sdW1uJylcbiAgICBwdWJsaWMgY29sdW1uOiBhbnk7XG5cbiAgICBASW5wdXQoJ3BhZ2UnKVxuICAgIEBEZXByZWNhdGVQcm9wZXJ0eShgSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZSAncGFnZScgaW5wdXQgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC5gKVxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBsYXN0U2VhcmNoSW5mbygpOiBJU2VhcmNoSW5mbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0U2VhcmNoSW5mbztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHBhcmVudEVsZW1lbnQ6IGFueTtcblxuICAgIHByaXZhdGUgX2NvbnRhaW5lcjogYW55O1xuXG4gICAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZXMgdGhlIGhpZ2hsaWdodCBhdCBhIGdpdmVuIGluZGV4LlxuICAgICAqIChpZiBzdWNoIGluZGV4IGV4aXN0cylcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHNldEFjdGl2ZUhpZ2hsaWdodChncm91cE5hbWU6IHN0cmluZywgaGlnaGxpZ2h0OiBJQWN0aXZlSGlnaGxpZ2h0SW5mbykge1xuICAgICAgICBJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlLmhpZ2hsaWdodEdyb3Vwc01hcC5zZXQoZ3JvdXBOYW1lLCBoaWdobGlnaHQpO1xuICAgICAgICBJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlLm9uQWN0aXZlRWxlbWVudENoYW5nZWQuZW1pdChncm91cE5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbnkgZXhpc3RpbmcgaGlnaGxpZ2h0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJBY3RpdmVIaWdobGlnaHQoZ3JvdXBOYW1lKSB7XG4gICAgICAgIElneFRleHRIaWdobGlnaHREaXJlY3RpdmUuaGlnaGxpZ2h0R3JvdXBzTWFwLnNldChncm91cE5hbWUsIHtcbiAgICAgICAgICAgIGluZGV4OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZS5vbkFjdGl2ZUVsZW1lbnRDaGFuZ2VkLmVtaXQoZ3JvdXBOYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgICAgIElneFRleHRIaWdobGlnaHREaXJlY3RpdmUub25BY3RpdmVFbGVtZW50Q2hhbmdlZC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChncm91cE5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwTmFtZSA9PT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZUVsZW1lbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVJZk5lY2Vzc2FyeSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY2xlYXJIaWdobGlnaHQoKTtcblxuICAgICAgICBpZiAodGhpcy5fb2JzZXJ2ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy52YWx1ZSAmJiAhY2hhbmdlcy52YWx1ZS5maXJzdENoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICgoY2hhbmdlcy5yb3cgIT09IHVuZGVmaW5lZCAmJiAhY2hhbmdlcy5yb3cuZmlyc3RDaGFuZ2UpIHx8XG4gICAgICAgICAgICAoY2hhbmdlcy5jb2x1bW4gIT09IHVuZGVmaW5lZCAmJiAhY2hhbmdlcy5jb2x1bW4uZmlyc3RDaGFuZ2UpIHx8XG4gICAgICAgICAgICAoY2hhbmdlcy5wYWdlICE9PSB1bmRlZmluZWQgJiYgIWNoYW5nZXMucGFnZS5maXJzdENoYW5nZSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hY3RpdmVFbGVtZW50SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlSWZOZWNlc3NhcnkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgaWYgKElneFRleHRIaWdobGlnaHREaXJlY3RpdmUuaGlnaGxpZ2h0R3JvdXBzTWFwLmhhcyh0aGlzLmdyb3VwTmFtZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlLmhpZ2hsaWdodEdyb3Vwc01hcC5zZXQodGhpcy5ncm91cE5hbWUsIHtcbiAgICAgICAgICAgICAgICBpbmRleDogLTFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdFNlYXJjaEluZm8gPSB7XG4gICAgICAgICAgICBzZWFyY2hlZFRleHQ6ICcnLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIG1hdGNoQ291bnQ6IDAsXG4gICAgICAgICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KHRoaXMuX2xhc3RTZWFyY2hJbmZvLnNlYXJjaGVkVGV4dCwgdGhpcy5fbGFzdFNlYXJjaEluZm8uY2FzZVNlbnNpdGl2ZSwgdGhpcy5fbGFzdFNlYXJjaEluZm8uZXhhY3RNYXRjaCk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlSWZOZWNlc3NhcnkoKTtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBleGlzdGluZyBoaWdobGlnaHQgYW5kIGhpZ2hsaWdodHMgdGhlIHNlYXJjaGVkIHRleHQuXG4gICAgICogUmV0dXJucyBob3cgbWFueSB0aW1lcyB0aGUgZWxlbWVudCBjb250YWlucyB0aGUgc2VhcmNoZWQgdGV4dC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGlnaGxpZ2h0KHRleHQ6IHN0cmluZywgY2FzZVNlbnNpdGl2ZT86IGJvb2xlYW4sIGV4YWN0TWF0Y2g/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgY2FzZVNlbnNpdGl2ZVJlc29sdmVkID0gY2FzZVNlbnNpdGl2ZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgZXhhY3RNYXRjaFJlc29sdmVkID0gZXhhY3RNYXRjaCA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hOZWVkc0V2YWx1YXRpb24odGV4dCwgY2FzZVNlbnNpdGl2ZVJlc29sdmVkLCBleGFjdE1hdGNoUmVzb2x2ZWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0U2VhcmNoSW5mby5zZWFyY2hlZFRleHQgPSB0ZXh0O1xuICAgICAgICAgICAgdGhpcy5fbGFzdFNlYXJjaEluZm8uY2FzZVNlbnNpdGl2ZSA9IGNhc2VTZW5zaXRpdmVSZXNvbHZlZDtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RTZWFyY2hJbmZvLmV4YWN0TWF0Y2ggPSBleGFjdE1hdGNoUmVzb2x2ZWQ7XG4gICAgICAgICAgICB0aGlzLl9sYXN0U2VhcmNoSW5mby5jb250ZW50ID0gdGhpcy52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHRleHQgPT09ICcnIHx8IHRleHQgPT09IHVuZGVmaW5lZCB8fCB0ZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckhpZ2hsaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQ2hpbGRFbGVtZW50cyh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0U2VhcmNoSW5mby5tYXRjaENvdW50ID0gdGhpcy5nZXRIaWdobGlnaHRlZFRleHQodGV4dCwgY2FzZVNlbnNpdGl2ZSwgZXhhY3RNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbm9kZVdhc1JlbW92ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RTZWFyY2hJbmZvLnNlYXJjaGVkVGV4dCA9IHRleHQ7XG4gICAgICAgICAgICB0aGlzLl9sYXN0U2VhcmNoSW5mby5jYXNlU2Vuc2l0aXZlID0gY2FzZVNlbnNpdGl2ZVJlc29sdmVkO1xuICAgICAgICAgICAgdGhpcy5fbGFzdFNlYXJjaEluZm8uZXhhY3RNYXRjaCA9IGV4YWN0TWF0Y2hSZXNvbHZlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0U2VhcmNoSW5mby5tYXRjaENvdW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbnkgZXhpc3RpbmcgaGlnaGxpZ2h0LlxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhckhpZ2hsaWdodCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhckNoaWxkRWxlbWVudHMoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX2xhc3RTZWFyY2hJbmZvLnNlYXJjaGVkVGV4dCA9ICcnO1xuICAgICAgICB0aGlzLl9sYXN0U2VhcmNoSW5mby5tYXRjaENvdW50ID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZXMgdGhlIGhpZ2hsaWdodCBpZiBpdCBpcyBvbiB0aGUgY3VycmVudGx5IGFjdGl2ZSByb3csIGNvbHVtbiBhbmQgcGFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZhdGVJZk5lY2Vzc2FyeSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBJZ3hUZXh0SGlnaGxpZ2h0RGlyZWN0aXZlLmhpZ2hsaWdodEdyb3Vwc01hcC5nZXQodGhpcy5ncm91cE5hbWUpO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBncm91cC5jb2x1bW5JbmRleCA9PT0gdW5kZWZpbmVkID8gZ3JvdXAuY29sdW1uIDogZ3JvdXAuY29sdW1uSW5kZXg7XG4gICAgICAgIGNvbnN0IHJvdyA9IGdyb3VwLnJvd0luZGV4ID09PSB1bmRlZmluZWQgPyBncm91cC5yb3cgOiBncm91cC5yb3dJbmRleDtcblxuICAgICAgICBpZiAoY29sdW1uID09PSB0aGlzLmNvbHVtbiAmJiByb3cgPT09IHRoaXMucm93ICYmIGdyb3VwLnBhZ2UgPT09IHRoaXMucGFnZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZShncm91cC5pbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhIE11dGF0aW9uT2JzZXJ2ZXIgdG8gdGhlIHBhcmVudEVsZW1lbnQgYW5kIHdhdGNoZXMgZm9yIHdoZW4gdGhlIGNvbnRhaW5lciBlbGVtZW50IGlzIHJlbW92ZWQvcmVhZGRlZCB0byB0aGUgRE9NLlxuICAgICAqIFNob3VsZCBiZSB1c2VkIG9ubHkgd2hlbiBuZWNlc3NhcnkgYXMgdXNpbmcgbWFueSBvYnNlcnZlcnMgbWF5IGxlYWQgdG8gcGVyZm9ybWFuY2UgZGVncmFkYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIG9ic2VydmUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9vYnNlcnZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAobXV0YXRpb25MaXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZE5vZGVzLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID09PSB0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlV2FzUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckNoaWxkRWxlbWVudHMoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkZWROb2Rlcy5mb3JFYWNoKChuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobiA9PT0gdGhpcy5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkICYmIHRoaXMuX25vZGVXYXNSZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVXYXNSZW1vdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JjZUV2YWx1YXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KHRoaXMuX2xhc3RTZWFyY2hJbmZvLnNlYXJjaGVkVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdFNlYXJjaEluZm8uY2FzZVNlbnNpdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdFNlYXJjaEluZm8uZXhhY3RNYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yY2VFdmFsdWF0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlSWZOZWNlc3NhcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnBhcmVudEVsZW1lbnQsIHtjaGlsZExpc3Q6IHRydWV9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYWN0aXZhdGUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcblxuICAgICAgICBpZiAodGhpcy5fZGl2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFucyA9IHRoaXMuX2Rpdi5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50SW5kZXggPSBpbmRleDtcblxuICAgICAgICAgICAgaWYgKHNwYW5zLmxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZWxlbWVudFRvQWN0aXZhdGUgPSBzcGFuc1tpbmRleF07XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRUb0FjdGl2YXRlLCB0aGlzLmFjdGl2ZUNzc0NsYXNzKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRUb0FjdGl2YXRlLCAnc3R5bGUnLCAnYmFja2dyb3VuZDpvcmFuZ2U7Y29sb3I6YmxhY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZUVsZW1lbnRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNwYW5zID0gdGhpcy5fZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKTtcblxuICAgICAgICBpZiAoc3BhbnMubGVuZ3RoIDw9IHRoaXMuX2FjdGl2ZUVsZW1lbnRJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudEluZGV4ID0gLTE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50VG9EZWFjdGl2YXRlID0gc3BhbnNbdGhpcy5fYWN0aXZlRWxlbWVudEluZGV4XTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50VG9EZWFjdGl2YXRlLCB0aGlzLmFjdGl2ZUNzc0NsYXNzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFRvRGVhY3RpdmF0ZSwgJ3N0eWxlJywgJ2JhY2tncm91bmQ6eWVsbG93O2NvbG9yOmJsYWNrJyk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRJbmRleCA9IC0xO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYXJDaGlsZEVsZW1lbnRzKG9yaWdpbmFsQ29udGVudEhpZGRlbjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJywgb3JpZ2luYWxDb250ZW50SGlkZGVuKTtcblxuICAgICAgICBpZiAodGhpcy5fZGl2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucGFyZW50RWxlbWVudCwgdGhpcy5fZGl2KTtcblxuICAgICAgICAgICAgdGhpcy5fZGl2ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRJbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRIaWdobGlnaHRlZFRleHQoc2VhcmNoVGV4dDogc3RyaW5nLCBjYXNlU2Vuc2l0aXZlOiBib29sZWFuLCBleGFjdE1hdGNoOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kRGl2KCk7XG5cbiAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBTdHJpbmcodGhpcy52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRTdHJpbmdSZXNvbHZlZCA9ICFjYXNlU2Vuc2l0aXZlID8gc3RyaW5nVmFsdWUudG9Mb3dlckNhc2UoKSA6IHN0cmluZ1ZhbHVlO1xuICAgICAgICBjb25zdCBzZWFyY2hUZXh0UmVzb2x2ZWQgPSAhY2FzZVNlbnNpdGl2ZSA/IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKSA6IHNlYXJjaFRleHQ7XG5cbiAgICAgICAgbGV0IG1hdGNoQ291bnQgPSAwO1xuXG4gICAgICAgIGlmIChleGFjdE1hdGNoKSB7XG4gICAgICAgICAgICBpZiAoY29udGVudFN0cmluZ1Jlc29sdmVkID09PSBzZWFyY2hUZXh0UmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRTcGFuKGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jc3NDbGFzc31cIiBzdHlsZT1cImJhY2tncm91bmQ6eWVsbG93O2NvbG9yOmJsYWNrXCI+JHtzdHJpbmdWYWx1ZX08L3NwYW4+YCk7XG4gICAgICAgICAgICAgICAgbWF0Y2hDb3VudCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZFRleHQoc3RyaW5nVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZvdW5kSW5kZXggPSBjb250ZW50U3RyaW5nUmVzb2x2ZWQuaW5kZXhPZihzZWFyY2hUZXh0UmVzb2x2ZWQsIDApO1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzTWF0Y2hFbmQgPSAwO1xuXG4gICAgICAgICAgICB3aGlsZSAoZm91bmRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGZvdW5kSW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gZm91bmRJbmRleCArIHNlYXJjaFRleHRSZXNvbHZlZC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZFRleHQoc3RyaW5nVmFsdWUuc3Vic3RyaW5nKHByZXZpb3VzTWF0Y2hFbmQsIHN0YXJ0KSk7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kU3BhbihgPHNwYW4gY2xhc3M9XCIke3RoaXMuY3NzQ2xhc3N9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOnllbGxvdztjb2xvcjpibGFja1wiPiR7c3RyaW5nVmFsdWUuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpfTwvc3Bhbj5gKTtcblxuICAgICAgICAgICAgICAgIHByZXZpb3VzTWF0Y2hFbmQgPSBlbmQ7XG4gICAgICAgICAgICAgICAgbWF0Y2hDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgZm91bmRJbmRleCA9IGNvbnRlbnRTdHJpbmdSZXNvbHZlZC5pbmRleE9mKHNlYXJjaFRleHRSZXNvbHZlZCwgZW5kKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hcHBlbmRUZXh0KHN0cmluZ1ZhbHVlLnN1YnN0cmluZyhwcmV2aW91c01hdGNoRW5kLCBzdHJpbmdWYWx1ZS5sZW5ndGgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaENvdW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwZW5kVGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGV4dCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZGl2LCB0ZXh0RWxlbWVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBlbmRTcGFuKG91dGVySFRNTDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9kaXYsIHNwYW4pO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHNwYW4sICdvdXRlckhUTUwnLCBvdXRlckhUTUwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwZW5kRGl2KCkge1xuICAgICAgICB0aGlzLl9kaXYgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZiAoIHRoaXMuY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZGl2LCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMucGFyZW50RWxlbWVudCwgdGhpcy5fZGl2KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlYXJjaE5lZWRzRXZhbHVhdGlvbih0ZXh0OiBzdHJpbmcsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4sIGV4YWN0TWF0Y2g6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoZWRUZXh0ID0gdGhpcy5fbGFzdFNlYXJjaEluZm8uc2VhcmNoZWRUZXh0O1xuXG4gICAgICAgIHJldHVybiAhdGhpcy5fbm9kZVdhc1JlbW92ZWQgJiZcbiAgICAgICAgICAgIChzZWFyY2hlZFRleHQgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICBzZWFyY2hlZFRleHQgIT09IHRleHQgfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0U2VhcmNoSW5mby5jb250ZW50ICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFNlYXJjaEluZm8uY2FzZVNlbnNpdGl2ZSAhPT0gY2FzZVNlbnNpdGl2ZSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RTZWFyY2hJbmZvLmV4YWN0TWF0Y2ggIT09IGV4YWN0TWF0Y2ggfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JjZUV2YWx1YXRpb24pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4VGV4dEhpZ2hsaWdodERpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneFRleHRIaWdobGlnaHREaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIElneFRleHRIaWdobGlnaHRNb2R1bGUgeyB9XG4iXX0=