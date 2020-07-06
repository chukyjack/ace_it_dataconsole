/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { catchError } from 'rxjs/operators';
import { timer as observableTimer } from 'rxjs';
import { ChangeDetectorRef, Directive, Host, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MdbCompleterDirective } from './completer.directive';
import { MIN_SEARCH_LENGTH, PAUSE, CLEAR_TIMEOUT, isNil } from '../globals';
var CtrListContext = /** @class */ (function () {
    function CtrListContext(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
    return CtrListContext;
}());
export { CtrListContext };
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
var MdbListDirective = /** @class */ (function () {
    function MdbListDirective(tmpCompleter, templateRef, viewContainer, cd) {
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
    MdbListDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.completer.registerList(this);
        this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    };
    Object.defineProperty(MdbListDirective.prototype, "dataService", {
        set: /**
         * @param {?} newService
         * @return {?}
         */
        function (newService) {
            var _this = this;
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
                function (results) {
                    try {
                        _this.ctx.searchInitialized = true;
                        _this.ctx.searching = false;
                        _this.ctx.results = results;
                        if (_this.mdbListAutoMatch && results.length === 1 && results[0].title && !isNil(_this.term) &&
                            results[0].title.toLocaleLowerCase() === _this.term.toLocaleLowerCase()) {
                            // Do automatch
                            _this.completer.onSelected(results[0]);
                        }
                        if (_this._initialValue) {
                            _this.initialValue = _this._initialValue;
                            // this._initialValue = null;
                            _this._initialValue = _this.setToNullValue;
                        }
                        if (_this.mdbListAutoHighlight) {
                            _this.completer.autoHighlightIndex = _this.getBestMatchIndex();
                        }
                        _this.refreshTemplate();
                    }
                    catch (err) {
                    }
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbListDirective.prototype, "initialValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (this._dataService && typeof this._dataService.convertToItem === 'function') {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var initialItem = _this._dataService.convertToItem(value);
                    if (initialItem) {
                        _this.completer.onSelected(initialItem, false);
                    }
                }));
            }
            else if (!this._dataService) {
                this._initialValue = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    MdbListDirective.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var _this = this;
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
            function () {
                try {
                    _this.searchTimerComplete(term);
                }
                catch (err) {
                }
            }));
        }
        else if (!isNil(term) && term.length < this.mdbListMinSearchLength) {
            this.clear();
        }
    };
    /**
     * @return {?}
     */
    MdbListDirective.prototype.clear = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = observableTimer(CLEAR_TIMEOUT).subscribe((/**
         * @return {?}
         */
        function () {
            _this._clear();
        }));
    };
    /**
     * @return {?}
     */
    MdbListDirective.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.ctx.searchInitialized) {
            this.search('');
        }
        this.refreshTemplate();
    };
    /**
     * @param {?} open
     * @return {?}
     */
    MdbListDirective.prototype.isOpen = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.ctx.isOpen = open;
    };
    /**
     * @private
     * @return {?}
     */
    MdbListDirective.prototype._clear = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
    };
    /**
     * @private
     * @param {?} term
     * @return {?}
     */
    MdbListDirective.prototype.searchTimerComplete = /**
     * @private
     * @param {?} term
     * @return {?}
     */
    function (term) {
        // Begin the search
        if (isNil(term) || term.length < this.mdbListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    };
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
    MdbListDirective.prototype.refreshTemplate = 
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
    function () {
        // Recreate the template
        this.viewContainer.clear();
        if (this.ctx.results && this.ctx.isOpen) {
            this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        this.cd.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    MdbListDirective.prototype.getBestMatchIndex = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.ctx.results) {
            return null;
        }
        // First try to find the exact term
        /** @type {?} */
        var bestMatch = this.ctx.results.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.title.toLowerCase() === _this.term.toLocaleLowerCase(); }));
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.title.toLowerCase().startsWith(_this.term.toLocaleLowerCase()); }));
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.title.toLowerCase().includes(_this.term.toLocaleLowerCase()); }));
        }
        return bestMatch < 0 ? null : bestMatch;
    };
    MdbListDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbList]',
                },] }
    ];
    /** @nocollapse */
    MdbListDirective.ctorParameters = function () { return [
        { type: MdbCompleterDirective, decorators: [{ type: Host }] },
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: ChangeDetectorRef }
    ]; };
    MdbListDirective.propDecorators = {
        mdbListMinSearchLength: [{ type: Input }],
        mdbListPause: [{ type: Input }],
        mdbListAutoMatch: [{ type: Input }],
        mdbListAutoHighlight: [{ type: Input }],
        dataService: [{ type: Input, args: ['mdbList',] }],
        initialValue: [{ type: Input, args: ['mdbListInitialValue',] }]
    };
    return MdbListDirective;
}());
export { MdbListDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jb250ZXh0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2RpcmVjdGl2ZXMvbGlzdC1jb250ZXh0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRyxLQUFLLElBQUksZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxxQkFBcUIsRUFBaUIsTUFBTSx1QkFBdUIsQ0FBQztBQUc3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFNUU7SUFDRSx3QkFDUyxPQUF3QixFQUN4QixTQUFrQixFQUNsQixpQkFBMEIsRUFDMUIsTUFBZTtRQUhmLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFTO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVM7SUFDcEIsQ0FBQztJQUNQLHFCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7Ozs7SUFMRyxpQ0FBK0I7O0lBQy9CLG1DQUF5Qjs7SUFDekIsMkNBQWlDOztJQUNqQyxnQ0FBc0I7O0FBSTFCO0lBdUJFLDBCQUVrQixZQUFtQyxFQUMzQyxXQUF3QyxFQUN4QyxhQUErQixFQUMvQixFQUFxQjtRQUhiLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQUMzQyxnQkFBVyxHQUFYLFdBQVcsQ0FBNkI7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBeEJmLDJCQUFzQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6Qix5QkFBb0IsR0FBUSxLQUFLLENBQUM7O1FBSzNDLG1CQUFjLEdBQVEsSUFBSSxDQUFDOztRQUUxQixTQUFJLEdBQWlCLElBQUksQ0FBQzs7O1FBRzFCLGdCQUFXLEdBQXVCLElBQUksQ0FBQzs7UUFFdkMsZUFBVSxHQUF1QixJQUFJLENBQUM7UUFDdEMsUUFBRyxHQUFHLElBQUksY0FBYyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELGtCQUFhLEdBQVEsSUFBSSxDQUFDO1FBUWhDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNyQyxDQUFDOzs7O0lBRU0sbUNBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDbkMsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxjQUFjLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQsc0JBQ1cseUNBQVc7Ozs7O1FBRHRCLFVBQ3VCLFVBQXlCO1lBRGhELGlCQWlDQztZQS9CQyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztZQUMvQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZO29CQUNmLHVDQUF1QztvQkFDdkMsOENBQThDO29CQUM5QywwQkFBMEI7cUJBQ3pCLFNBQVM7Ozs7Z0JBQUMsVUFBQyxPQUFZO29CQUN0QixJQUFJO3dCQUNGLEtBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO3dCQUNsQyxLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzt3QkFDM0IsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDOzRCQUN4RixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFOzRCQUN4RSxlQUFlOzRCQUNmLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN2Qzt3QkFDRCxJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUU7NEJBQ3RCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQzs0QkFDdkMsNkJBQTZCOzRCQUM3QixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7eUJBQzFDO3dCQUNELElBQUksS0FBSSxDQUFDLG9CQUFvQixFQUFFOzRCQUM3QixLQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3lCQUM5RDt3QkFDRCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7cUJBQ3hCO29CQUFDLE9BQU8sR0FBRyxFQUFFO3FCQUViO2dCQUVILENBQUMsRUFBQyxDQUFDO2FBQ047UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUNXLDBDQUFZOzs7OztRQUR2QixVQUN3QixLQUFVO1lBRGxDLGlCQVlDO1lBVkMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO2dCQUM5RSxVQUFVOzs7Z0JBQUM7O3dCQUNILFdBQVcsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7b0JBQzFELElBQUksV0FBVyxFQUFFO3dCQUNmLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDL0M7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7T0FBQTs7Ozs7SUFFTSxpQ0FBTTs7OztJQUFiLFVBQWMsSUFBWTtRQUExQixpQkF5QkM7UUF4QkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNwRixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO2dCQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTOzs7WUFBQztnQkFDOUQsSUFBSTtvQkFDRixLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hDO2dCQUFDLE9BQU8sR0FBRyxFQUFFO2lCQUNiO1lBRUgsQ0FBQyxFQUFDLENBQUM7U0FDSjthQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDcEUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7O0lBRU0sZ0NBQUs7OztJQUFaO1FBQUEsaUJBT0M7UUFOQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQ3pELEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFTSwrQkFBSTs7O0lBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU0saUNBQU07Ozs7SUFBYixVQUFjLElBQWE7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8saUNBQU07Ozs7SUFBZDtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVPLDhDQUFtQjs7Ozs7SUFBM0IsVUFBNEIsSUFBWTtRQUN0QyxtQkFBbUI7UUFDbkIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQzNCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsaURBQWlEO0lBQ2pELGlGQUFpRjtJQUNqRixNQUFNO0lBRU4sb0NBQW9DO0lBQ3BDLCtDQUErQztJQUMvQyxNQUFNO0lBQ04sNEJBQTRCO0lBRTVCLHlDQUF5QztJQUN6QyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFSSwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXZCO1FBQ0Usd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUNuQyxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTyw0Q0FBaUI7Ozs7SUFBekI7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7OztZQUdHLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBMUQsQ0FBMEQsRUFBQztRQUM5Ryw4REFBOEQ7UUFDOUQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBbEUsQ0FBa0UsRUFBQyxDQUFDO1NBQ3BIO1FBQ0QsMkRBQTJEO1FBQzNELElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtZQUNqQixTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQWhFLENBQWdFLEVBQUMsQ0FBQztTQUNsSDtRQUVELE9BQU8sU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUMsQ0FBQzs7Z0JBM01GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7Ozs7Z0JBaEJRLHFCQUFxQix1QkF1Q3pCLElBQUk7Z0JBekNtRCxXQUFXO2dCQUFFLGdCQUFnQjtnQkFBaEYsaUJBQWlCOzs7eUNBb0J2QixLQUFLOytCQUNMLEtBQUs7bUNBQ0wsS0FBSzt1Q0FDTCxLQUFLOzhCQWlDTCxLQUFLLFNBQUMsU0FBUzsrQkFtQ2YsS0FBSyxTQUFDLHFCQUFxQjs7SUFrSTlCLHVCQUFDO0NBQUEsQUE3TUQsSUE2TUM7U0ExTVksZ0JBQWdCOzs7SUFDM0Isa0RBQTJEOztJQUMzRCx3Q0FBcUM7O0lBQ3JDLDRDQUF5Qzs7SUFDekMsZ0RBQWtEOzs7OztJQUdsRCx3Q0FBMEM7O0lBRTFDLDBDQUFrQzs7Ozs7SUFFbEMsZ0NBQWtDOzs7OztJQUdsQyx1Q0FBK0M7Ozs7O0lBRS9DLHNDQUE4Qzs7Ozs7SUFDOUMsK0JBQTBEOzs7OztJQUMxRCx5Q0FBa0M7Ozs7O0lBQ2xDLHFDQUErQzs7Ozs7SUFHN0Msd0NBQW1EOzs7OztJQUNuRCx1Q0FBZ0Q7Ozs7O0lBQ2hELHlDQUF1Qzs7Ozs7SUFDdkMsOEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgIHRpbWVyIGFzIG9ic2VydmFibGVUaW1lciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBIb3N0LCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNZGJDb21wbGV0ZXJEaXJlY3RpdmUsIENvbXBsZXRlckxpc3QgfSBmcm9tICcuL2NvbXBsZXRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tcGxldGVyRGF0YSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbXBsZXRlci1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcGxldGVySXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcGxldGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE1JTl9TRUFSQ0hfTEVOR1RILCBQQVVTRSwgQ0xFQVJfVElNRU9VVCwgaXNOaWwgfSBmcm9tICcuLi9nbG9iYWxzJztcblxuZXhwb3J0IGNsYXNzIEN0ckxpc3RDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlc3VsdHM6IENvbXBsZXRlckl0ZW1bXSxcbiAgICBwdWJsaWMgc2VhcmNoaW5nOiBib29sZWFuLFxuICAgIHB1YmxpYyBzZWFyY2hJbml0aWFsaXplZDogYm9vbGVhbixcbiAgICBwdWJsaWMgaXNPcGVuOiBib29sZWFuXG4gICkgeyB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJMaXN0XScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYkxpc3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIENvbXBsZXRlckxpc3Qge1xuICBASW5wdXQoKSBwdWJsaWMgbWRiTGlzdE1pblNlYXJjaExlbmd0aCA9IE1JTl9TRUFSQ0hfTEVOR1RIO1xuICBASW5wdXQoKSBwdWJsaWMgbWRiTGlzdFBhdXNlID0gUEFVU0U7XG4gIEBJbnB1dCgpIHB1YmxpYyBtZGJMaXN0QXV0b01hdGNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBtZGJMaXN0QXV0b0hpZ2hsaWdodDogYW55ID0gZmFsc2U7XG5cbiAgLy8gcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IENvbXBsZXRlckRhdGEgO1xuICBwcml2YXRlIF9kYXRhU2VydmljZTogQ29tcGxldGVyRGF0YSB8IGFueTtcbiAgLy8gcHJpdmF0ZSByZXN1bHRzOiBDb21wbGV0ZXJJdGVtW10gPSBbXTtcbiAgcHVibGljIHNldFRvTnVsbFZhbHVlOiBhbnkgPSBudWxsO1xuICAvLyBwcml2YXRlIHRlcm06IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgdGVybTogc3RyaW5nIHwgYW55ID0gbnVsbDtcbiAgLy8gcHJpdmF0ZSBzZWFyY2hpbmcgPSBmYWxzZTtcbiAgLy8gcHJpdmF0ZSBzZWFyY2hUaW1lcjogU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgcHJpdmF0ZSBzZWFyY2hUaW1lcjogU3Vic2NyaXB0aW9uIHwgYW55ID0gbnVsbDtcbiAgLy8gcHJpdmF0ZSBjbGVhclRpbWVyOiBTdWJzY3JpcHRpb24gPSBudWxsO1xuICBwcml2YXRlIGNsZWFyVGltZXI6IFN1YnNjcmlwdGlvbiB8IGFueSA9IG51bGw7XG4gIHByaXZhdGUgY3R4ID0gbmV3IEN0ckxpc3RDb250ZXh0KFtdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcbiAgcHJpdmF0ZSBfaW5pdGlhbFZhbHVlOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIGNvbXBsZXRlcjogTWRiQ29tcGxldGVyRGlyZWN0aXZlIHwgYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBASG9zdCgpIHByaXZhdGUgY29tcGxldGVyOiBNZGJDb21wbGV0ZXJEaXJlY3RpdmUsXG4gICAgQEhvc3QoKSBwcml2YXRlIHRtcENvbXBsZXRlcjogTWRiQ29tcGxldGVyRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPEN0ckxpc3RDb250ZXh0PixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmNvbXBsZXRlciA9IHRoaXMudG1wQ29tcGxldGVyO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29tcGxldGVyLnJlZ2lzdGVyTGlzdCh0aGlzKTtcbiAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgdGhpcy50ZW1wbGF0ZVJlZixcbiAgICAgIG5ldyBDdHJMaXN0Q29udGV4dChbXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSlcbiAgICApO1xuICB9XG5cbiAgQElucHV0KCdtZGJMaXN0JylcbiAgcHVibGljIHNldCBkYXRhU2VydmljZShuZXdTZXJ2aWNlOiBDb21wbGV0ZXJEYXRhKSB7XG4gICAgdGhpcy5fZGF0YVNlcnZpY2UgPSBuZXdTZXJ2aWNlO1xuICAgIGlmICh0aGlzLl9kYXRhU2VydmljZSkge1xuICAgICAgdGhpcy5fZGF0YVNlcnZpY2VcbiAgICAgICAgLy8gLmNhdGNoKGVyciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycikpXG4gICAgICAgIC8vIC5jYXRjaCgoZXJyOiBhbnkpID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyKSlcbiAgICAgICAgLy8gLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0czogYW55KSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnNlYXJjaEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jdHgucmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgICAgICAgICBpZiAodGhpcy5tZGJMaXN0QXV0b01hdGNoICYmIHJlc3VsdHMubGVuZ3RoID09PSAxICYmIHJlc3VsdHNbMF0udGl0bGUgJiYgIWlzTmlsKHRoaXMudGVybSkgJiZcbiAgICAgICAgICAgICAgcmVzdWx0c1swXS50aXRsZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSB0aGlzLnRlcm0udG9Mb2NhbGVMb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAvLyBEbyBhdXRvbWF0Y2hcbiAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZXIub25TZWxlY3RlZChyZXN1bHRzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9pbml0aWFsVmFsdWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSB0aGlzLl9pbml0aWFsVmFsdWU7XG4gICAgICAgICAgICAgIC8vIHRoaXMuX2luaXRpYWxWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMuX2luaXRpYWxWYWx1ZSA9IHRoaXMuc2V0VG9OdWxsVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tZGJMaXN0QXV0b0hpZ2hsaWdodCkge1xuICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlci5hdXRvSGlnaGxpZ2h0SW5kZXggPSB0aGlzLmdldEJlc3RNYXRjaEluZGV4KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hUZW1wbGF0ZSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgnbWRiTGlzdEluaXRpYWxWYWx1ZScpXG4gIHB1YmxpYyBzZXQgaW5pdGlhbFZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fZGF0YVNlcnZpY2UgJiYgdHlwZW9mIHRoaXMuX2RhdGFTZXJ2aWNlLmNvbnZlcnRUb0l0ZW0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbml0aWFsSXRlbSA9IHRoaXMuX2RhdGFTZXJ2aWNlLmNvbnZlcnRUb0l0ZW0odmFsdWUpO1xuICAgICAgICBpZiAoaW5pdGlhbEl0ZW0pIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlci5vblNlbGVjdGVkKGluaXRpYWxJdGVtLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2RhdGFTZXJ2aWNlKSB7XG4gICAgICB0aGlzLl9pbml0aWFsVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VhcmNoKHRlcm06IHN0cmluZykge1xuICAgIGlmICghaXNOaWwodGVybSkgJiYgdGVybS5sZW5ndGggPj0gdGhpcy5tZGJMaXN0TWluU2VhcmNoTGVuZ3RoICYmIHRoaXMudGVybSAhPT0gdGVybSkge1xuICAgICAgaWYgKHRoaXMuc2VhcmNoVGltZXIpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hUaW1lci51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnNlYXJjaFRpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jdHguc2VhcmNoaW5nKSB7XG4gICAgICAgIHRoaXMuY3R4LnJlc3VsdHMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguc2VhcmNoaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguc2VhcmNoSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZnJlc2hUZW1wbGF0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2xlYXJUaW1lcikge1xuICAgICAgICB0aGlzLmNsZWFyVGltZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VhcmNoVGltZXIgPSBvYnNlcnZhYmxlVGltZXIodGhpcy5tZGJMaXN0UGF1c2UpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hUaW1lckNvbXBsZXRlKHRlcm0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFpc05pbCh0ZXJtKSAmJiB0ZXJtLmxlbmd0aCA8IHRoaXMubWRiTGlzdE1pblNlYXJjaExlbmd0aCkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICBpZiAodGhpcy5zZWFyY2hUaW1lcikge1xuICAgICAgdGhpcy5zZWFyY2hUaW1lci51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyVGltZXIgPSBvYnNlcnZhYmxlVGltZXIoQ0xFQVJfVElNRU9VVCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuY3R4LnNlYXJjaEluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLnNlYXJjaCgnJyk7XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaFRlbXBsYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgaXNPcGVuKG9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLmN0eC5pc09wZW4gPSBvcGVuO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoVGltZXIpIHtcbiAgICAgIHRoaXMuc2VhcmNoVGltZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc2VhcmNoVGltZXIgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhU2VydmljZSkge1xuICAgICAgdGhpcy5kYXRhU2VydmljZS5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VhcmNoVGltZXJDb21wbGV0ZSh0ZXJtOiBzdHJpbmcpOiBhbnkge1xuICAgIC8vIEJlZ2luIHRoZSBzZWFyY2hcbiAgICBpZiAoaXNOaWwodGVybSkgfHwgdGVybS5sZW5ndGggPCB0aGlzLm1kYkxpc3RNaW5TZWFyY2hMZW5ndGgpIHtcbiAgICAgIHRoaXMuY3R4LnNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuX2RhdGFTZXJ2aWNlLnNlYXJjaCh0ZXJtKTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAvLyAgIHRoaXMuY3R4LnNlYXJjaGluZyA9IGZhbHNlO1xuICAvLyAgIGxldCBlcnJNc2cgPSAnc2VhcmNoIGVycm9yJztcbiAgLy8gICBpZiAoZXJyb3IpIHtcbiAgLy8gICAgIGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxuICAvLyAgICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcbiAgLy8gICB9XG5cbiAgLy8gICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlXG4gIC8vICAgfVxuICAvLyAgIHRoaXMucmVmcmVzaFRlbXBsYXRlKCk7XG5cbiAgLy8gICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZXJyTXNnKTtcbiAgLy8gfVxuXG4gIHByaXZhdGUgcmVmcmVzaFRlbXBsYXRlKCkge1xuICAgIC8vIFJlY3JlYXRlIHRoZSB0ZW1wbGF0ZVxuICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIGlmICh0aGlzLmN0eC5yZXN1bHRzICYmIHRoaXMuY3R4LmlzT3Blbikge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVJlZixcbiAgICAgICAgdGhpcy5jdHhcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIGdldEJlc3RNYXRjaEluZGV4KCkge1xuICAgIGlmICghdGhpcy5jdHgucmVzdWx0cykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gRmlyc3QgdHJ5IHRvIGZpbmQgdGhlIGV4YWN0IHRlcm1cbiAgICBsZXQgYmVzdE1hdGNoID0gdGhpcy5jdHgucmVzdWx0cy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMudGVybS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAvLyBJZiBub3QgdHJ5IHRvIGZpbmQgdGhlIGZpcnN0IGl0ZW0gdGhhdCBzdGFydHMgd2l0aCB0aGUgdGVybVxuICAgIGlmIChiZXN0TWF0Y2ggPCAwKSB7XG4gICAgICBiZXN0TWF0Y2ggPSB0aGlzLmN0eC5yZXN1bHRzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRoaXMudGVybS50b0xvY2FsZUxvd2VyQ2FzZSgpKSk7XG4gICAgfVxuICAgIC8vIElmIG5vdCB0cnkgdG8gZmluZCB0aGUgZmlyc3QgaXRlbSB0aGF0IGluY2x1ZGVzIHRoZSB0ZXJtXG4gICAgaWYgKGJlc3RNYXRjaCA8IDApIHtcbiAgICAgIGJlc3RNYXRjaCA9IHRoaXMuY3R4LnJlc3VsdHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMudGVybS50b0xvY2FsZUxvd2VyQ2FzZSgpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJlc3RNYXRjaCA8IDAgPyBudWxsIDogYmVzdE1hdGNoO1xuICB9XG5cbn1cbiJdfQ==