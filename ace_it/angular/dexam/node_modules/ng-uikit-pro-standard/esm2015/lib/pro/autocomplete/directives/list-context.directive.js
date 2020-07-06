/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { catchError } from 'rxjs/operators';
import { timer as observableTimer } from 'rxjs';
import { ChangeDetectorRef, Directive, Host, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MdbCompleterDirective } from './completer.directive';
import { MIN_SEARCH_LENGTH, PAUSE, CLEAR_TIMEOUT, isNil } from '../globals';
export class CtrListContext {
    /**
     * @param {?} results
     * @param {?} searching
     * @param {?} searchInitialized
     * @param {?} isOpen
     */
    constructor(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
}
if (false) {
    /** @type {?} */
    CtrListContext.prototype.results;
    /** @type {?} */
    CtrListContext.prototype.searching;
    /** @type {?} */
    CtrListContext.prototype.searchInitialized;
    /** @type {?} */
    CtrListContext.prototype.isOpen;
}
export class MdbListDirective {
    /**
     * @param {?} tmpCompleter
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} cd
     */
    constructor(tmpCompleter, templateRef, viewContainer, cd) {
        this.tmpCompleter = tmpCompleter;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.mdbListMinSearchLength = MIN_SEARCH_LENGTH;
        this.mdbListPause = PAUSE;
        this.mdbListAutoMatch = false;
        this.mdbListAutoHighlight = false;
        // private results: CompleterItem[] = [];
        this.setToNullValue = null;
        // private term: string = null;
        this.term = null;
        // private searching = false;
        // private searchTimer: Subscription = null;
        this.searchTimer = null;
        // private clearTimer: Subscription = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false, false);
        this._initialValue = null;
        this.completer = this.tmpCompleter;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.completer.registerList(this);
        this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    }
    /**
     * @param {?} newService
     * @return {?}
     */
    set dataService(newService) {
        this._dataService = newService;
        if (this._dataService) {
            this._dataService
                // .catch(err => this.handleError(err))
                // .catch((err: any) => this.handleError(err))
                // .subscribe(results => {
                .subscribe((/**
             * @param {?} results
             * @return {?}
             */
            (results) => {
                try {
                    this.ctx.searchInitialized = true;
                    this.ctx.searching = false;
                    this.ctx.results = results;
                    if (this.mdbListAutoMatch && results.length === 1 && results[0].title && !isNil(this.term) &&
                        results[0].title.toLocaleLowerCase() === this.term.toLocaleLowerCase()) {
                        // Do automatch
                        this.completer.onSelected(results[0]);
                    }
                    if (this._initialValue) {
                        this.initialValue = this._initialValue;
                        // this._initialValue = null;
                        this._initialValue = this.setToNullValue;
                    }
                    if (this.mdbListAutoHighlight) {
                        this.completer.autoHighlightIndex = this.getBestMatchIndex();
                    }
                    this.refreshTemplate();
                }
                catch (err) {
                }
            }));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set initialValue(value) {
        if (this._dataService && typeof this._dataService.convertToItem === 'function') {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const initialItem = this._dataService.convertToItem(value);
                if (initialItem) {
                    this.completer.onSelected(initialItem, false);
                }
            }));
        }
        else if (!this._dataService) {
            this._initialValue = value;
        }
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        if (!isNil(term) && term.length >= this.mdbListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                this.ctx.results = [];
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = observableTimer(this.mdbListPause).subscribe((/**
             * @return {?}
             */
            () => {
                try {
                    this.searchTimerComplete(term);
                }
                catch (err) {
                }
            }));
        }
        else if (!isNil(term) && term.length < this.mdbListMinSearchLength) {
            this.clear();
        }
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = observableTimer(CLEAR_TIMEOUT).subscribe((/**
         * @return {?}
         */
        () => {
            this._clear();
        }));
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.ctx.searchInitialized) {
            this.search('');
        }
        this.refreshTemplate();
    }
    /**
     * @param {?} open
     * @return {?}
     */
    isOpen(open) {
        this.ctx.isOpen = open;
    }
    /**
     * @private
     * @return {?}
     */
    _clear() {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
    }
    /**
     * @private
     * @param {?} term
     * @return {?}
     */
    searchTimerComplete(term) {
        // Begin the search
        if (isNil(term) || term.length < this.mdbListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    }
    // private handleError(error: any) {
    //   this.ctx.searching = false;
    //   let errMsg = 'search error';
    //   if (error) {
    //     errMsg = (error.message) ? error.message :
    //       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //   }
    //   if (console && console.error) {
    //     console.error(errMsg); // log to console
    //   }
    //   this.refreshTemplate();
    //   return observableThrowError(errMsg);
    // }
    /**
     * @private
     * @return {?}
     */
    refreshTemplate() {
        // Recreate the template
        this.viewContainer.clear();
        if (this.ctx.results && this.ctx.isOpen) {
            this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        this.cd.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    getBestMatchIndex() {
        if (!this.ctx.results) {
            return null;
        }
        // First try to find the exact term
        /** @type {?} */
        let bestMatch = this.ctx.results.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item.title.toLowerCase() === this.term.toLocaleLowerCase()));
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => item.title.toLowerCase().startsWith(this.term.toLocaleLowerCase())));
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => item.title.toLowerCase().includes(this.term.toLocaleLowerCase())));
        }
        return bestMatch < 0 ? null : bestMatch;
    }
}
MdbListDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbList]',
            },] }
];
/** @nocollapse */
MdbListDirective.ctorParameters = () => [
    { type: MdbCompleterDirective, decorators: [{ type: Host }] },
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: ChangeDetectorRef }
];
MdbListDirective.propDecorators = {
    mdbListMinSearchLength: [{ type: Input }],
    mdbListPause: [{ type: Input }],
    mdbListAutoMatch: [{ type: Input }],
    mdbListAutoHighlight: [{ type: Input }],
    dataService: [{ type: Input, args: ['mdbList',] }],
    initialValue: [{ type: Input, args: ['mdbListInitialValue',] }]
};
if (false) {
    /** @type {?} */
    MdbListDirective.prototype.mdbListMinSearchLength;
    /** @type {?} */
    MdbListDirective.prototype.mdbListPause;
    /** @type {?} */
    MdbListDirective.prototype.mdbListAutoMatch;
    /** @type {?} */
    MdbListDirective.prototype.mdbListAutoHighlight;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype._dataService;
    /** @type {?} */
    MdbListDirective.prototype.setToNullValue;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.term;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.searchTimer;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.clearTimer;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.ctx;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype._initialValue;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.completer;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.tmpCompleter;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    MdbListDirective.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jb250ZXh0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2RpcmVjdGl2ZXMvbGlzdC1jb250ZXh0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRyxLQUFLLElBQUksZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxxQkFBcUIsRUFBaUIsTUFBTSx1QkFBdUIsQ0FBQztBQUc3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFNUUsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUFDekIsWUFDUyxPQUF3QixFQUN4QixTQUFrQixFQUNsQixpQkFBMEIsRUFDMUIsTUFBZTtRQUhmLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFTO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFDcEIsQ0FBQztDQUNOOzs7SUFMRyxpQ0FBK0I7O0lBQy9CLG1DQUF5Qjs7SUFDekIsMkNBQWlDOztJQUNqQyxnQ0FBc0I7O0FBTzFCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7SUFvQjNCLFlBRWtCLFlBQW1DLEVBQzNDLFdBQXdDLEVBQ3hDLGFBQStCLEVBQy9CLEVBQXFCO1FBSGIsaUJBQVksR0FBWixZQUFZLENBQXVCO1FBQzNDLGdCQUFXLEdBQVgsV0FBVyxDQUE2QjtRQUN4QyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IsT0FBRSxHQUFG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b3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyAgdGltZXIgYXMgb2JzZXJ2YWJsZVRpbWVyLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEhvc3QsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1kYkNvbXBsZXRlckRpcmVjdGl2ZSwgQ29tcGxldGVyTGlzdCB9IGZyb20gJy4vY29tcGxldGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb21wbGV0ZXJEYXRhIH0gZnJvbSAnLi4vc2VydmljZXMvY29tcGxldGVyLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wbGV0ZXJJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wbGV0ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTUlOX1NFQVJDSF9MRU5HVEgsIFBBVVNFLCBDTEVBUl9USU1FT1VULCBpc05pbCB9IGZyb20gJy4uL2dsb2JhbHMnO1xuXG5leHBvcnQgY2xhc3MgQ3RyTGlzdENvbnRleHQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVzdWx0czogQ29tcGxldGVySXRlbVtdLFxuICAgIHB1YmxpYyBzZWFyY2hpbmc6IGJvb2xlYW4sXG4gICAgcHVibGljIHNlYXJjaEluaXRpYWxpemVkOiBib29sZWFuLFxuICAgIHB1YmxpYyBpc09wZW46IGJvb2xlYW5cbiAgKSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYkxpc3RdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiTGlzdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQ29tcGxldGVyTGlzdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBtZGJMaXN0TWluU2VhcmNoTGVuZ3RoID0gTUlOX1NFQVJDSF9MRU5HVEg7XG4gIEBJbnB1dCgpIHB1YmxpYyBtZGJMaXN0UGF1c2UgPSBQQVVTRTtcbiAgQElucHV0KCkgcHVibGljIG1kYkxpc3RBdXRvTWF0Y2ggPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIG1kYkxpc3RBdXRvSGlnaGxpZ2h0OiBhbnkgPSBmYWxzZTtcblxuICAvLyBwcml2YXRlIF9kYXRhU2VydmljZTogQ29tcGxldGVyRGF0YSA7XG4gIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBDb21wbGV0ZXJEYXRhIHwgYW55O1xuICAvLyBwcml2YXRlIHJlc3VsdHM6IENvbXBsZXRlckl0ZW1bXSA9IFtdO1xuICBwdWJsaWMgc2V0VG9OdWxsVmFsdWU6IGFueSA9IG51bGw7XG4gIC8vIHByaXZhdGUgdGVybTogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSB0ZXJtOiBzdHJpbmcgfCBhbnkgPSBudWxsO1xuICAvLyBwcml2YXRlIHNlYXJjaGluZyA9IGZhbHNlO1xuICAvLyBwcml2YXRlIHNlYXJjaFRpbWVyOiBTdWJzY3JpcHRpb24gPSBudWxsO1xuICBwcml2YXRlIHNlYXJjaFRpbWVyOiBTdWJzY3JpcHRpb24gfCBhbnkgPSBudWxsO1xuICAvLyBwcml2YXRlIGNsZWFyVGltZXI6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIHByaXZhdGUgY2xlYXJUaW1lcjogU3Vic2NyaXB0aW9uIHwgYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBjdHggPSBuZXcgQ3RyTGlzdENvbnRleHQoW10sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuICBwcml2YXRlIF9pbml0aWFsVmFsdWU6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgY29tcGxldGVyOiBNZGJDb21wbGV0ZXJEaXJlY3RpdmUgfCBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIEBIb3N0KCkgcHJpdmF0ZSBjb21wbGV0ZXI6IE1kYkNvbXBsZXRlckRpcmVjdGl2ZSxcbiAgICBASG9zdCgpIHByaXZhdGUgdG1wQ29tcGxldGVyOiBNZGJDb21wbGV0ZXJEaXJlY3RpdmUsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8Q3RyTGlzdENvbnRleHQ+LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuY29tcGxldGVyID0gdGhpcy50bXBDb21wbGV0ZXI7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb21wbGV0ZXIucmVnaXN0ZXJMaXN0KHRoaXMpO1xuICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICB0aGlzLnRlbXBsYXRlUmVmLFxuICAgICAgbmV3IEN0ckxpc3RDb250ZXh0KFtdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKVxuICAgICk7XG4gIH1cblxuICBASW5wdXQoJ21kYkxpc3QnKVxuICBwdWJsaWMgc2V0IGRhdGFTZXJ2aWNlKG5ld1NlcnZpY2U6IENvbXBsZXRlckRhdGEpIHtcbiAgICB0aGlzLl9kYXRhU2VydmljZSA9IG5ld1NlcnZpY2U7XG4gICAgaWYgKHRoaXMuX2RhdGFTZXJ2aWNlKSB7XG4gICAgICB0aGlzLl9kYXRhU2VydmljZVxuICAgICAgICAvLyAuY2F0Y2goZXJyID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyKSlcbiAgICAgICAgLy8gLmNhdGNoKChlcnI6IGFueSkgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpKVxuICAgICAgICAvLyAuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xuICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jdHguc2VhcmNoSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jdHguc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN0eC5yZXN1bHRzID0gcmVzdWx0cztcbiAgICAgICAgICAgIGlmICh0aGlzLm1kYkxpc3RBdXRvTWF0Y2ggJiYgcmVzdWx0cy5sZW5ndGggPT09IDEgJiYgcmVzdWx0c1swXS50aXRsZSAmJiAhaXNOaWwodGhpcy50ZXJtKSAmJlxuICAgICAgICAgICAgICByZXN1bHRzWzBdLnRpdGxlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IHRoaXMudGVybS50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgIC8vIERvIGF1dG9tYXRjaFxuICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlci5vblNlbGVjdGVkKHJlc3VsdHNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxWYWx1ZSkge1xuICAgICAgICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHRoaXMuX2luaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgICAgLy8gdGhpcy5faW5pdGlhbFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgdGhpcy5faW5pdGlhbFZhbHVlID0gdGhpcy5zZXRUb051bGxWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1kYkxpc3RBdXRvSGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICAgIHRoaXMuY29tcGxldGVyLmF1dG9IaWdobGlnaHRJbmRleCA9IHRoaXMuZ2V0QmVzdE1hdGNoSW5kZXgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRlbXBsYXRlKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCdtZGJMaXN0SW5pdGlhbFZhbHVlJylcbiAgcHVibGljIHNldCBpbml0aWFsVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLl9kYXRhU2VydmljZSAmJiB0eXBlb2YgdGhpcy5fZGF0YVNlcnZpY2UuY29udmVydFRvSXRlbSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxJdGVtID0gdGhpcy5fZGF0YVNlcnZpY2UuY29udmVydFRvSXRlbSh2YWx1ZSk7XG4gICAgICAgIGlmIChpbml0aWFsSXRlbSkge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVyLm9uU2VsZWN0ZWQoaW5pdGlhbEl0ZW0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fZGF0YVNlcnZpY2UpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZWFyY2godGVybTogc3RyaW5nKSB7XG4gICAgaWYgKCFpc05pbCh0ZXJtKSAmJiB0ZXJtLmxlbmd0aCA+PSB0aGlzLm1kYkxpc3RNaW5TZWFyY2hMZW5ndGggJiYgdGhpcy50ZXJtICE9PSB0ZXJtKSB7XG4gICAgICBpZiAodGhpcy5zZWFyY2hUaW1lcikge1xuICAgICAgICB0aGlzLnNlYXJjaFRpbWVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuc2VhcmNoVGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmN0eC5zZWFyY2hpbmcpIHtcbiAgICAgICAgdGhpcy5jdHgucmVzdWx0cyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5zZWFyY2hpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmN0eC5zZWFyY2hJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVmcmVzaFRlbXBsYXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jbGVhclRpbWVyKSB7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lci51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWFyY2hUaW1lciA9IG9ic2VydmFibGVUaW1lcih0aGlzLm1kYkxpc3RQYXVzZSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLnNlYXJjaFRpbWVyQ29tcGxldGUodGVybSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIWlzTmlsKHRlcm0pICYmIHRlcm0ubGVuZ3RoIDwgdGhpcy5tZGJMaXN0TWluU2VhcmNoTGVuZ3RoKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIGlmICh0aGlzLnNlYXJjaFRpbWVyKSB7XG4gICAgICB0aGlzLnNlYXJjaFRpbWVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJUaW1lciA9IG9ic2VydmFibGVUaW1lcihDTEVBUl9USU1FT1VUKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKCkge1xuICAgIGlmICghdGhpcy5jdHguc2VhcmNoSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuc2VhcmNoKCcnKTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoVGVtcGxhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBpc09wZW4ob3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuY3R4LmlzT3BlbiA9IG9wZW47XG4gIH1cblxuICBwcml2YXRlIF9jbGVhcigpIHtcbiAgICBpZiAodGhpcy5zZWFyY2hUaW1lcikge1xuICAgICAgdGhpcy5zZWFyY2hUaW1lci51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zZWFyY2hUaW1lciA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmRhdGFTZXJ2aWNlLmNhbmNlbCgpO1xuICAgIH1cblxuICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWFyY2hUaW1lckNvbXBsZXRlKHRlcm06IHN0cmluZyk6IGFueSB7XG4gICAgLy8gQmVnaW4gdGhlIHNlYXJjaFxuICAgIGlmIChpc05pbCh0ZXJtKSB8fCB0ZXJtLmxlbmd0aCA8IHRoaXMubWRiTGlzdE1pblNlYXJjaExlbmd0aCkge1xuICAgICAgdGhpcy5jdHguc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5fZGF0YVNlcnZpY2Uuc2VhcmNoKHRlcm0pO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gIC8vICAgdGhpcy5jdHguc2VhcmNoaW5nID0gZmFsc2U7XG4gIC8vICAgbGV0IGVyck1zZyA9ICdzZWFyY2ggZXJyb3InO1xuICAvLyAgIGlmIChlcnJvcikge1xuICAvLyAgICAgZXJyTXNnID0gKGVycm9yLm1lc3NhZ2UpID8gZXJyb3IubWVzc2FnZSA6XG4gIC8vICAgICAgIGVycm9yLnN0YXR1cyA/IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHR9YCA6ICdTZXJ2ZXIgZXJyb3InO1xuICAvLyAgIH1cblxuICAvLyAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGVcbiAgLy8gICB9XG4gIC8vICAgdGhpcy5yZWZyZXNoVGVtcGxhdGUoKTtcblxuICAvLyAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihlcnJNc2cpO1xuICAvLyB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoVGVtcGxhdGUoKSB7XG4gICAgLy8gUmVjcmVhdGUgdGhlIHRlbXBsYXRlXG4gICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgaWYgKHRoaXMuY3R4LnJlc3VsdHMgJiYgdGhpcy5jdHguaXNPcGVuKSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgICB0aGlzLnRlbXBsYXRlUmVmLFxuICAgICAgICB0aGlzLmN0eFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QmVzdE1hdGNoSW5kZXgoKSB7XG4gICAgaWYgKCF0aGlzLmN0eC5yZXN1bHRzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBGaXJzdCB0cnkgdG8gZmluZCB0aGUgZXhhY3QgdGVybVxuICAgIGxldCBiZXN0TWF0Y2ggPSB0aGlzLmN0eC5yZXN1bHRzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy50ZXJtLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xuICAgIC8vIElmIG5vdCB0cnkgdG8gZmluZCB0aGUgZmlyc3QgaXRlbSB0aGF0IHN0YXJ0cyB3aXRoIHRoZSB0ZXJtXG4gICAgaWYgKGJlc3RNYXRjaCA8IDApIHtcbiAgICAgIGJlc3RNYXRjaCA9IHRoaXMuY3R4LnJlc3VsdHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50aXRsZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGhpcy50ZXJtLnRvTG9jYWxlTG93ZXJDYXNlKCkpKTtcbiAgICB9XG4gICAgLy8gSWYgbm90IHRyeSB0byBmaW5kIHRoZSBmaXJzdCBpdGVtIHRoYXQgaW5jbHVkZXMgdGhlIHRlcm1cbiAgICBpZiAoYmVzdE1hdGNoIDwgMCkge1xuICAgICAgYmVzdE1hdGNoID0gdGhpcy5jdHgucmVzdWx0cy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy50ZXJtLnRvTG9jYWxlTG93ZXJDYXNlKCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmVzdE1hdGNoIDwgMCA/IG51bGwgOiBiZXN0TWF0Y2g7XG4gIH1cblxufVxuIl19