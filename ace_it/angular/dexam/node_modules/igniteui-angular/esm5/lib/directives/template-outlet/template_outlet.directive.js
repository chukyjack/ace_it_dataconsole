/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, ChangeDetectorRef, TemplateRef, ViewContainerRef, NgModule, NgZone, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * @hidden
 */
var IgxTemplateOutletDirective = /** @class */ (function () {
    function IgxTemplateOutletDirective(_viewContainerRef, _zone, cdr) {
        this._viewContainerRef = _viewContainerRef;
        this._zone = _zone;
        this.cdr = cdr;
        /**
         * The embedded views cache. Collection is key-value paired.
         * Key is the template id, value is the embedded view for the related template.
         */
        this._embeddedViewsMap = new Map();
        this.onViewCreated = new EventEmitter();
        this.onViewMoved = new EventEmitter();
        this.onCachedViewLoaded = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    IgxTemplateOutletDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var actionType = this._getActionType(changes);
        switch (actionType) {
            case TemplateOutletAction.CreateView:
                this._recreateView();
                break;
            case TemplateOutletAction.MoveView:
                this._moveView();
                break;
            case TemplateOutletAction.UseCachedView:
                this._useCachedView();
                break;
            case TemplateOutletAction.UpdateViewContext:
                this._updateExistingContext(this.igxTemplateOutletContext);
                break;
        }
    };
    /**
     * @return {?}
     */
    IgxTemplateOutletDirective.prototype.cleanCache = /**
     * @return {?}
     */
    function () {
        this._embeddedViewsMap.forEach(function (item) {
            if (!item.destroyed) {
                item.destroy();
            }
        });
        this._embeddedViewsMap.clear();
    };
    /**
     * @param {?} tmplID
     * @return {?}
     */
    IgxTemplateOutletDirective.prototype.cleanView = /**
     * @param {?} tmplID
     * @return {?}
     */
    function (tmplID) {
        /** @type {?} */
        var embView = this._embeddedViewsMap.get(tmplID);
        if (embView) {
            embView.destroy();
            this._embeddedViewsMap.delete(tmplID);
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxTemplateOutletDirective.prototype._recreateView = /**
     * @private
     * @return {?}
     */
    function () {
        // detach old and create new
        if (this._viewRef) {
            this._viewContainerRef.detach(this._viewContainerRef.indexOf(this._viewRef));
        }
        if (this.igxTemplateOutlet) {
            this._viewRef = this._viewContainerRef.createEmbeddedView(this.igxTemplateOutlet, this.igxTemplateOutletContext);
            this.onViewCreated.emit({ owner: this, view: this._viewRef, context: this.igxTemplateOutletContext });
            /** @type {?} */
            var tmplId = this.igxTemplateOutletContext['templateID'];
            if (tmplId) {
                // if context contains a template id, check if we have a view for that template already stored in the cache
                // if not create a copy and add it to the cache in detached state.
                // Note: Views in detached state do not appear in the DOM, however they remain stored in memory.
                /** @type {?} */
                var res = this._embeddedViewsMap.get(this.igxTemplateOutletContext['templateID']);
                if (!res) {
                    this._embeddedViewsMap.set(this.igxTemplateOutletContext['templateID'], this._viewRef);
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxTemplateOutletDirective.prototype._moveView = /**
     * @private
     * @return {?}
     */
    function () {
        // using external view and inserting it in current view.
        /** @type {?} */
        var view = this.igxTemplateOutletContext['moveView'];
        /** @type {?} */
        var owner = this.igxTemplateOutletContext['owner'];
        if (view !== this._viewRef) {
            if (owner._viewContainerRef.indexOf(view) !== -1) {
                // detach in case view it is attached somewhere else at the moment.
                owner._viewContainerRef.detach(owner._viewContainerRef.indexOf(view));
            }
            if (this._viewRef && this._viewContainerRef.indexOf(this._viewRef) !== -1) {
                this._viewContainerRef.detach(this._viewContainerRef.indexOf(this._viewRef));
            }
            this._viewRef = view;
            this._viewContainerRef.insert(view, 0);
            this._updateExistingContext(this.igxTemplateOutletContext);
            this.onViewMoved.emit({ owner: this, view: this._viewRef, context: this.igxTemplateOutletContext });
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxTemplateOutletDirective.prototype._useCachedView = /**
     * @private
     * @return {?}
     */
    function () {
        // use view for specific template cached in the current template outlet
        /** @type {?} */
        var tmplID = this.igxTemplateOutletContext['templateID'];
        /** @type {?} */
        var cachedView = tmplID ?
            this._embeddedViewsMap.get(tmplID) :
            null;
        // if view exists, but template has been changed and there is a view in the cache with the related template
        // then detach old view and insert the stored one with the matching template
        // after that update its context.
        this._viewContainerRef.detach(this._viewContainerRef.indexOf(this._viewRef));
        this._viewRef = cachedView;
        /** @type {?} */
        var oldContext = this._cloneContext(cachedView.context);
        this._viewContainerRef.insert(this._viewRef, 0);
        this._updateExistingContext(this.igxTemplateOutletContext);
        this.onCachedViewLoaded.emit({ owner: this, view: this._viewRef, context: this.igxTemplateOutletContext, oldContext: oldContext });
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    IgxTemplateOutletDirective.prototype._shouldRecreateView = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var ctxChange = changes['igxTemplateOutletContext'];
        return !!changes['igxTemplateOutlet'] || (ctxChange && this._hasContextShapeChanged(ctxChange));
    };
    /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    IgxTemplateOutletDirective.prototype._hasContextShapeChanged = /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    function (ctxChange) {
        var e_1, _a;
        /** @type {?} */
        var prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        /** @type {?} */
        var currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            try {
                for (var currCtxKeys_1 = tslib_1.__values(currCtxKeys), currCtxKeys_1_1 = currCtxKeys_1.next(); !currCtxKeys_1_1.done; currCtxKeys_1_1 = currCtxKeys_1.next()) {
                    var propName = currCtxKeys_1_1.value;
                    if (prevCtxKeys.indexOf(propName) === -1) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (currCtxKeys_1_1 && !currCtxKeys_1_1.done && (_a = currCtxKeys_1.return)) _a.call(currCtxKeys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    IgxTemplateOutletDirective.prototype._updateExistingContext = /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    function (ctx) {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(Object.keys(ctx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var propName = _c.value;
                ((/** @type {?} */ (this._viewRef.context)))[propName] = ((/** @type {?} */ (this.igxTemplateOutletContext)))[propName];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    IgxTemplateOutletDirective.prototype._cloneContext = /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    function (ctx) {
        var e_3, _a;
        /** @type {?} */
        var clone = {};
        try {
            for (var _b = tslib_1.__values(Object.keys(ctx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var propName = _c.value;
                clone[propName] = ctx[propName];
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return clone;
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    IgxTemplateOutletDirective.prototype._getActionType = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var movedView = this.igxTemplateOutletContext['moveView'];
        /** @type {?} */
        var tmplID = this.igxTemplateOutletContext['templateID'];
        /** @type {?} */
        var cachedView = tmplID ?
            this._embeddedViewsMap.get(tmplID) :
            null;
        /** @type {?} */
        var shouldRecreate = this._shouldRecreateView(changes);
        if (movedView) {
            // view is moved from external source
            return TemplateOutletAction.MoveView;
        }
        else if (shouldRecreate && cachedView) {
            // should recreate (template or context change) and there is a matching template in cache
            return TemplateOutletAction.UseCachedView;
        }
        else if (!this._viewRef || shouldRecreate) {
            // no view or should recreate
            return TemplateOutletAction.CreateView;
        }
        else if (this.igxTemplateOutletContext) {
            // has context, update context
            return TemplateOutletAction.UpdateViewContext;
        }
    };
    IgxTemplateOutletDirective.decorators = [
        { type: Directive, args: [{ selector: '[igxTemplateOutlet]' },] }
    ];
    /** @nocollapse */
    IgxTemplateOutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    IgxTemplateOutletDirective.propDecorators = {
        igxTemplateOutletContext: [{ type: Input }],
        igxTemplateOutlet: [{ type: Input }],
        onViewCreated: [{ type: Output }],
        onViewMoved: [{ type: Output }],
        onCachedViewLoaded: [{ type: Output }]
    };
    return IgxTemplateOutletDirective;
}());
export { IgxTemplateOutletDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTemplateOutletDirective.prototype._viewRef;
    /**
     * The embedded views cache. Collection is key-value paired.
     * Key is the template id, value is the embedded view for the related template.
     * @type {?}
     * @private
     */
    IgxTemplateOutletDirective.prototype._embeddedViewsMap;
    /** @type {?} */
    IgxTemplateOutletDirective.prototype.igxTemplateOutletContext;
    /** @type {?} */
    IgxTemplateOutletDirective.prototype.igxTemplateOutlet;
    /** @type {?} */
    IgxTemplateOutletDirective.prototype.onViewCreated;
    /** @type {?} */
    IgxTemplateOutletDirective.prototype.onViewMoved;
    /** @type {?} */
    IgxTemplateOutletDirective.prototype.onCachedViewLoaded;
    /** @type {?} */
    IgxTemplateOutletDirective.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    IgxTemplateOutletDirective.prototype._zone;
    /** @type {?} */
    IgxTemplateOutletDirective.prototype.cdr;
}
/** @enum {number} */
var TemplateOutletAction = {
    CreateView: 0,
    MoveView: 1,
    UseCachedView: 2,
    UpdateViewContext: 3,
};
TemplateOutletAction[TemplateOutletAction.CreateView] = 'CreateView';
TemplateOutletAction[TemplateOutletAction.MoveView] = 'MoveView';
TemplateOutletAction[TemplateOutletAction.UseCachedView] = 'UseCachedView';
TemplateOutletAction[TemplateOutletAction.UpdateViewContext] = 'UpdateViewContext';
/**
 * @record
 */
export function IViewChangeEventArgs() { }
if (false) {
    /** @type {?} */
    IViewChangeEventArgs.prototype.owner;
    /** @type {?} */
    IViewChangeEventArgs.prototype.view;
    /** @type {?} */
    IViewChangeEventArgs.prototype.context;
}
/**
 * @record
 */
export function ICachedViewLoadedEventArgs() { }
if (false) {
    /** @type {?} */
    ICachedViewLoadedEventArgs.prototype.oldContext;
}
/**
 * @hidden
 */
var IgxTemplateOutletModule = /** @class */ (function () {
    function IgxTemplateOutletModule() {
    }
    IgxTemplateOutletModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxTemplateOutletDirective],
                    entryComponents: [],
                    exports: [IgxTemplateOutletDirective],
                    imports: [CommonModule]
                },] }
    ];
    return IgxTemplateOutletModule;
}());
export { IgxTemplateOutletModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVfb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90ZW1wbGF0ZS1vdXRsZXQvdGVtcGxhdGVfb3V0bGV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQW1CLEtBQUssRUFBYSxpQkFBaUIsRUFDbEMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQVcsTUFBTSxFQUFFLFlBQVksRUFDOUcsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBSy9DO0lBdUJJLG9DQUFtQixpQkFBbUMsRUFBVSxLQUFhLEVBQVMsR0FBc0I7UUFBekYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjs7Ozs7UUFmcEcsc0JBQWlCLEdBQXNDLElBQUksR0FBRyxFQUFFLENBQUM7UUFPbEUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBd0IsQ0FBQztRQUd6RCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUF3QixDQUFDO1FBR3ZELHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUE4QixDQUFDO0lBRzNFLENBQUM7Ozs7O0lBRUQsZ0RBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCOztZQUN4QixVQUFVLEdBQXlCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQ3JFLFFBQVEsVUFBVSxFQUFFO1lBQ2hCLEtBQUssb0JBQW9CLENBQUMsVUFBVTtnQkFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQUMsTUFBTTtZQUNsRSxLQUFLLG9CQUFvQixDQUFDLFFBQVE7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUFD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LENBQUMsWUFBWSxDQUFDO2lCQUMxQjs7SUFHRCw4QkFBQztDQUFBLEFBUkQsSUFRQztTQURZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIElucHV0LCBPbkNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmLFxuICAgIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE5nTW9kdWxlLCBOZ1pvbmUsIFZpZXdSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2lneFRlbXBsYXRlT3V0bGV0XScgfSlcbmV4cG9ydCBjbGFzcyBJZ3hUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBfdmlld1JlZiAhOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICogVGhlIGVtYmVkZGVkIHZpZXdzIGNhY2hlLiBDb2xsZWN0aW9uIGlzIGtleS12YWx1ZSBwYWlyZWQuXG4gICAgKiBLZXkgaXMgdGhlIHRlbXBsYXRlIGlkLCB2YWx1ZSBpcyB0aGUgZW1iZWRkZWQgdmlldyBmb3IgdGhlIHJlbGF0ZWQgdGVtcGxhdGUuXG4gICAgKi9cbiAgICBwcml2YXRlIF9lbWJlZGRlZFZpZXdzTWFwOiBNYXA8c3RyaW5nLCBFbWJlZGRlZFZpZXdSZWY8YW55Pj4gPSBuZXcgTWFwKCk7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgaWd4VGVtcGxhdGVPdXRsZXRDb250ZXh0ICE6IE9iamVjdDtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBpZ3hUZW1wbGF0ZU91dGxldCAhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVmlld0NyZWF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElWaWV3Q2hhbmdlRXZlbnRBcmdzPigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVmlld01vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxJVmlld0NoYW5nZUV2ZW50QXJncz4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNhY2hlZFZpZXdMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElDYWNoZWRWaWV3TG9hZGVkRXZlbnRBcmdzPigpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIF96b25lOiBOZ1pvbmUsIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBjb25zdCBhY3Rpb25UeXBlOiBUZW1wbGF0ZU91dGxldEFjdGlvbiA9IHRoaXMuX2dldEFjdGlvblR5cGUoY2hhbmdlcyk7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZU91dGxldEFjdGlvbi5DcmVhdGVWaWV3OiB0aGlzLl9yZWNyZWF0ZVZpZXcoKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlT3V0bGV0QWN0aW9uLk1vdmVWaWV3OiB0aGlzLl9tb3ZlVmlldygpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVPdXRsZXRBY3Rpb24uVXNlQ2FjaGVkVmlldzogdGhpcy5fdXNlQ2FjaGVkVmlldygpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVPdXRsZXRBY3Rpb24uVXBkYXRlVmlld0NvbnRleHQ6IHRoaXMuX3VwZGF0ZUV4aXN0aW5nQ29udGV4dCh0aGlzLmlneFRlbXBsYXRlT3V0bGV0Q29udGV4dCk7IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFuQ2FjaGUoKSB7XG4gICAgICAgIHRoaXMuX2VtYmVkZGVkVmlld3NNYXAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3c01hcC5jbGVhcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhblZpZXcodG1wbElEKSB7XG4gICAgICAgIGNvbnN0IGVtYlZpZXcgPSB0aGlzLl9lbWJlZGRlZFZpZXdzTWFwLmdldCh0bXBsSUQpO1xuICAgICAgICBpZiAoZW1iVmlldykge1xuICAgICAgICAgICAgZW1iVmlldy5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9lbWJlZGRlZFZpZXdzTWFwLmRlbGV0ZSh0bXBsSUQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVjcmVhdGVWaWV3KCkge1xuICAgICAgICAvLyBkZXRhY2ggb2xkIGFuZCBjcmVhdGUgbmV3XG4gICAgICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmRldGFjaCh0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluZGV4T2YodGhpcy5fdmlld1JlZikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlneFRlbXBsYXRlT3V0bGV0KSB7XG4gICAgICAgICAgICB0aGlzLl92aWV3UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgICAgICAgICAgdGhpcy5pZ3hUZW1wbGF0ZU91dGxldCwgdGhpcy5pZ3hUZW1wbGF0ZU91dGxldENvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5vblZpZXdDcmVhdGVkLmVtaXQoeyBvd25lcjogdGhpcywgdmlldzogdGhpcy5fdmlld1JlZiwgY29udGV4dDogdGhpcy5pZ3hUZW1wbGF0ZU91dGxldENvbnRleHQgfSk7XG4gICAgICAgICAgICBjb25zdCB0bXBsSWQgPSB0aGlzLmlneFRlbXBsYXRlT3V0bGV0Q29udGV4dFsndGVtcGxhdGVJRCddO1xuICAgICAgICAgICAgaWYgKHRtcGxJZCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGNvbnRleHQgY29udGFpbnMgYSB0ZW1wbGF0ZSBpZCwgY2hlY2sgaWYgd2UgaGF2ZSBhIHZpZXcgZm9yIHRoYXQgdGVtcGxhdGUgYWxyZWFkeSBzdG9yZWQgaW4gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgLy8gaWYgbm90IGNyZWF0ZSBhIGNvcHkgYW5kIGFkZCBpdCB0byB0aGUgY2FjaGUgaW4gZGV0YWNoZWQgc3RhdGUuXG4gICAgICAgICAgICAgICAgLy8gTm90ZTogVmlld3MgaW4gZGV0YWNoZWQgc3RhdGUgZG8gbm90IGFwcGVhciBpbiB0aGUgRE9NLCBob3dldmVyIHRoZXkgcmVtYWluIHN0b3JlZCBpbiBtZW1vcnkuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gdGhpcy5fZW1iZWRkZWRWaWV3c01hcC5nZXQodGhpcy5pZ3hUZW1wbGF0ZU91dGxldENvbnRleHRbJ3RlbXBsYXRlSUQnXSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3c01hcC5zZXQodGhpcy5pZ3hUZW1wbGF0ZU91dGxldENvbnRleHRbJ3RlbXBsYXRlSUQnXSwgdGhpcy5fdmlld1JlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbW92ZVZpZXcoKSB7XG4gICAgICAgIC8vIHVzaW5nIGV4dGVybmFsIHZpZXcgYW5kIGluc2VydGluZyBpdCBpbiBjdXJyZW50IHZpZXcuXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmlneFRlbXBsYXRlT3V0bGV0Q29udGV4dFsnbW92ZVZpZXcnXTtcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzLmlneFRlbXBsYXRlT3V0bGV0Q29udGV4dFsnb3duZXInXTtcbiAgICAgICAgaWYgKHZpZXcgIT09IHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgICAgICAgIGlmIChvd25lci5fdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHZpZXcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIGRldGFjaCBpbiBjYXNlIHZpZXcgaXQgaXMgYXR0YWNoZWQgc29tZXdoZXJlIGVsc2UgYXQgdGhlIG1vbWVudC5cbiAgICAgICAgICAgICAgICBvd25lci5fdmlld0NvbnRhaW5lclJlZi5kZXRhY2gob3duZXIuX3ZpZXdDb250YWluZXJSZWYuaW5kZXhPZih2aWV3KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fdmlld1JlZiAmJiB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluZGV4T2YodGhpcy5fdmlld1JlZikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5kZXRhY2godGhpcy5fdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHRoaXMuX3ZpZXdSZWYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3ZpZXdSZWYgPSB2aWV3O1xuICAgICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5pbnNlcnQodmlldywgMCk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFeGlzdGluZ0NvbnRleHQodGhpcy5pZ3hUZW1wbGF0ZU91dGxldENvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5vblZpZXdNb3ZlZC5lbWl0KHsgb3duZXI6IHRoaXMsIHZpZXc6IHRoaXMuX3ZpZXdSZWYsIGNvbnRleHQ6IHRoaXMuaWd4VGVtcGxhdGVPdXRsZXRDb250ZXh0IH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgX3VzZUNhY2hlZFZpZXcoKSB7XG4gICAgICAgIC8vIHVzZSB2aWV3IGZvciBzcGVjaWZpYyB0ZW1wbGF0ZSBjYWNoZWQgaW4gdGhlIGN1cnJlbnQgdGVtcGxhdGUgb3V0bGV0XG4gICAgICAgIGNvbnN0IHRtcGxJRCA9IHRoaXMuaWd4VGVtcGxhdGVPdXRsZXRDb250ZXh0Wyd0ZW1wbGF0ZUlEJ107XG4gICAgICAgIGNvbnN0IGNhY2hlZFZpZXcgPSB0bXBsSUQgP1xuICAgICAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3c01hcC5nZXQodG1wbElEKSA6XG4gICAgICAgICAgICBudWxsO1xuICAgICAgICAvLyBpZiB2aWV3IGV4aXN0cywgYnV0IHRlbXBsYXRlIGhhcyBiZWVuIGNoYW5nZWQgYW5kIHRoZXJlIGlzIGEgdmlldyBpbiB0aGUgY2FjaGUgd2l0aCB0aGUgcmVsYXRlZCB0ZW1wbGF0ZVxuICAgICAgICAvLyB0aGVuIGRldGFjaCBvbGQgdmlldyBhbmQgaW5zZXJ0IHRoZSBzdG9yZWQgb25lIHdpdGggdGhlIG1hdGNoaW5nIHRlbXBsYXRlXG4gICAgICAgIC8vIGFmdGVyIHRoYXQgdXBkYXRlIGl0cyBjb250ZXh0LlxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmRldGFjaCh0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluZGV4T2YodGhpcy5fdmlld1JlZikpO1xuICAgICAgICB0aGlzLl92aWV3UmVmID0gY2FjaGVkVmlldztcbiAgICAgICAgY29uc3Qgb2xkQ29udGV4dCA9IHRoaXMuX2Nsb25lQ29udGV4dChjYWNoZWRWaWV3LmNvbnRleHQpO1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluc2VydCh0aGlzLl92aWV3UmVmLCAwKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlRXhpc3RpbmdDb250ZXh0KHRoaXMuaWd4VGVtcGxhdGVPdXRsZXRDb250ZXh0KTtcbiAgICAgICAgdGhpcy5vbkNhY2hlZFZpZXdMb2FkZWQuZW1pdCh7IG93bmVyOiB0aGlzLCB2aWV3OiB0aGlzLl92aWV3UmVmLCBjb250ZXh0OiB0aGlzLmlneFRlbXBsYXRlT3V0bGV0Q29udGV4dCwgb2xkQ29udGV4dCB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zaG91bGRSZWNyZWF0ZVZpZXcoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjdHhDaGFuZ2UgPSBjaGFuZ2VzWydpZ3hUZW1wbGF0ZU91dGxldENvbnRleHQnXTtcbiAgICAgICAgcmV0dXJuICEhY2hhbmdlc1snaWd4VGVtcGxhdGVPdXRsZXQnXSB8fCAoY3R4Q2hhbmdlICYmIHRoaXMuX2hhc0NvbnRleHRTaGFwZUNoYW5nZWQoY3R4Q2hhbmdlKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFzQ29udGV4dFNoYXBlQ2hhbmdlZChjdHhDaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBwcmV2Q3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5wcmV2aW91c1ZhbHVlIHx8IHt9KTtcbiAgICAgICAgY29uc3QgY3VyckN0eEtleXMgPSBPYmplY3Qua2V5cyhjdHhDaGFuZ2UuY3VycmVudFZhbHVlIHx8IHt9KTtcblxuICAgICAgICBpZiAocHJldkN0eEtleXMubGVuZ3RoID09PSBjdXJyQ3R4S2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgY3VyckN0eEtleXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldkN0eEtleXMuaW5kZXhPZihwcm9wTmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlRXhpc3RpbmdDb250ZXh0KGN0eDogT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgT2JqZWN0LmtleXMoY3R4KSkge1xuICAgICAgICAgICAgKDxhbnk+dGhpcy5fdmlld1JlZi5jb250ZXh0KVtwcm9wTmFtZV0gPSAoPGFueT50aGlzLmlneFRlbXBsYXRlT3V0bGV0Q29udGV4dClbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xvbmVDb250ZXh0KGN0eDogYW55KTogYW55IHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjdHgpKSB7XG4gICAgICAgICAgICBjbG9uZVtwcm9wTmFtZV0gPSBjdHhbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRBY3Rpb25UeXBlKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgbW92ZWRWaWV3ID0gdGhpcy5pZ3hUZW1wbGF0ZU91dGxldENvbnRleHRbJ21vdmVWaWV3J107XG4gICAgICAgIGNvbnN0IHRtcGxJRCA9IHRoaXMuaWd4VGVtcGxhdGVPdXRsZXRDb250ZXh0Wyd0ZW1wbGF0ZUlEJ107XG4gICAgICAgIGNvbnN0IGNhY2hlZFZpZXcgPSB0bXBsSUQgP1xuICAgICAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3c01hcC5nZXQodG1wbElEKSA6XG4gICAgICAgICAgICBudWxsO1xuICAgICAgICBjb25zdCBzaG91bGRSZWNyZWF0ZSA9IHRoaXMuX3Nob3VsZFJlY3JlYXRlVmlldyhjaGFuZ2VzKTtcbiAgICAgICAgaWYgKG1vdmVkVmlldykge1xuICAgICAgICAgICAgLy8gdmlldyBpcyBtb3ZlZCBmcm9tIGV4dGVybmFsIHNvdXJjZVxuICAgICAgICAgICAgcmV0dXJuIFRlbXBsYXRlT3V0bGV0QWN0aW9uLk1vdmVWaWV3O1xuICAgICAgICB9IGVsc2UgaWYgKHNob3VsZFJlY3JlYXRlICYmIGNhY2hlZFZpZXcpIHtcbiAgICAgICAgICAgIC8vIHNob3VsZCByZWNyZWF0ZSAodGVtcGxhdGUgb3IgY29udGV4dCBjaGFuZ2UpIGFuZCB0aGVyZSBpcyBhIG1hdGNoaW5nIHRlbXBsYXRlIGluIGNhY2hlXG4gICAgICAgICAgICByZXR1cm4gVGVtcGxhdGVPdXRsZXRBY3Rpb24uVXNlQ2FjaGVkVmlldztcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fdmlld1JlZiB8fCBzaG91bGRSZWNyZWF0ZSkge1xuICAgICAgICAgICAgLy8gbm8gdmlldyBvciBzaG91bGQgcmVjcmVhdGVcbiAgICAgICAgICAgIHJldHVybiBUZW1wbGF0ZU91dGxldEFjdGlvbi5DcmVhdGVWaWV3O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWd4VGVtcGxhdGVPdXRsZXRDb250ZXh0KSB7XG4gICAgICAgICAgICAvLyBoYXMgY29udGV4dCwgdXBkYXRlIGNvbnRleHRcbiAgICAgICAgICAgIHJldHVybiBUZW1wbGF0ZU91dGxldEFjdGlvbi5VcGRhdGVWaWV3Q29udGV4dDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmVudW0gVGVtcGxhdGVPdXRsZXRBY3Rpb24ge1xuICAgIENyZWF0ZVZpZXcsXG4gICAgTW92ZVZpZXcsXG4gICAgVXNlQ2FjaGVkVmlldyxcbiAgICBVcGRhdGVWaWV3Q29udGV4dFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElWaWV3Q2hhbmdlRXZlbnRBcmdzIHtcbiAgICBvd25lcjogSWd4VGVtcGxhdGVPdXRsZXREaXJlY3RpdmU7XG4gICAgdmlldzogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gICAgY29udGV4dDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZWRWaWV3TG9hZGVkRXZlbnRBcmdzIGV4dGVuZHMgSVZpZXdDaGFuZ2VFdmVudEFyZ3Mge1xuICAgIG9sZENvbnRleHQ6IGFueTtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4VGVtcGxhdGVPdXRsZXREaXJlY3RpdmVdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW10sXG4gICAgZXhwb3J0czogW0lneFRlbXBsYXRlT3V0bGV0RGlyZWN0aXZlXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIElneFRlbXBsYXRlT3V0bGV0TW9kdWxlIHtcbn1cbiJdfQ==