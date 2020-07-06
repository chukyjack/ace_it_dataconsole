/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ChangeDetectorRef, TemplateRef, ViewContainerRef, NgModule, NgZone, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * @hidden
 */
export class IgxTemplateOutletDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _zone
     * @param {?} cdr
     */
    constructor(_viewContainerRef, _zone, cdr) {
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
    ngOnChanges(changes) {
        /** @type {?} */
        const actionType = this._getActionType(changes);
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
    }
    /**
     * @return {?}
     */
    cleanCache() {
        this._embeddedViewsMap.forEach((item) => {
            if (!item.destroyed) {
                item.destroy();
            }
        });
        this._embeddedViewsMap.clear();
    }
    /**
     * @param {?} tmplID
     * @return {?}
     */
    cleanView(tmplID) {
        /** @type {?} */
        const embView = this._embeddedViewsMap.get(tmplID);
        if (embView) {
            embView.destroy();
            this._embeddedViewsMap.delete(tmplID);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _recreateView() {
        // detach old and create new
        if (this._viewRef) {
            this._viewContainerRef.detach(this._viewContainerRef.indexOf(this._viewRef));
        }
        if (this.igxTemplateOutlet) {
            this._viewRef = this._viewContainerRef.createEmbeddedView(this.igxTemplateOutlet, this.igxTemplateOutletContext);
            this.onViewCreated.emit({ owner: this, view: this._viewRef, context: this.igxTemplateOutletContext });
            /** @type {?} */
            const tmplId = this.igxTemplateOutletContext['templateID'];
            if (tmplId) {
                // if context contains a template id, check if we have a view for that template already stored in the cache
                // if not create a copy and add it to the cache in detached state.
                // Note: Views in detached state do not appear in the DOM, however they remain stored in memory.
                /** @type {?} */
                const res = this._embeddedViewsMap.get(this.igxTemplateOutletContext['templateID']);
                if (!res) {
                    this._embeddedViewsMap.set(this.igxTemplateOutletContext['templateID'], this._viewRef);
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _moveView() {
        // using external view and inserting it in current view.
        /** @type {?} */
        const view = this.igxTemplateOutletContext['moveView'];
        /** @type {?} */
        const owner = this.igxTemplateOutletContext['owner'];
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
    }
    /**
     * @private
     * @return {?}
     */
    _useCachedView() {
        // use view for specific template cached in the current template outlet
        /** @type {?} */
        const tmplID = this.igxTemplateOutletContext['templateID'];
        /** @type {?} */
        const cachedView = tmplID ?
            this._embeddedViewsMap.get(tmplID) :
            null;
        // if view exists, but template has been changed and there is a view in the cache with the related template
        // then detach old view and insert the stored one with the matching template
        // after that update its context.
        this._viewContainerRef.detach(this._viewContainerRef.indexOf(this._viewRef));
        this._viewRef = cachedView;
        /** @type {?} */
        const oldContext = this._cloneContext(cachedView.context);
        this._viewContainerRef.insert(this._viewRef, 0);
        this._updateExistingContext(this.igxTemplateOutletContext);
        this.onCachedViewLoaded.emit({ owner: this, view: this._viewRef, context: this.igxTemplateOutletContext, oldContext });
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    _shouldRecreateView(changes) {
        /** @type {?} */
        const ctxChange = changes['igxTemplateOutletContext'];
        return !!changes['igxTemplateOutlet'] || (ctxChange && this._hasContextShapeChanged(ctxChange));
    }
    /**
     * @private
     * @param {?} ctxChange
     * @return {?}
     */
    _hasContextShapeChanged(ctxChange) {
        /** @type {?} */
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        /** @type {?} */
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    _updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            ((/** @type {?} */ (this._viewRef.context)))[propName] = ((/** @type {?} */ (this.igxTemplateOutletContext)))[propName];
        }
    }
    /**
     * @private
     * @param {?} ctx
     * @return {?}
     */
    _cloneContext(ctx) {
        /** @type {?} */
        const clone = {};
        for (const propName of Object.keys(ctx)) {
            clone[propName] = ctx[propName];
        }
        return clone;
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    _getActionType(changes) {
        /** @type {?} */
        const movedView = this.igxTemplateOutletContext['moveView'];
        /** @type {?} */
        const tmplID = this.igxTemplateOutletContext['templateID'];
        /** @type {?} */
        const cachedView = tmplID ?
            this._embeddedViewsMap.get(tmplID) :
            null;
        /** @type {?} */
        const shouldRecreate = this._shouldRecreateView(changes);
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
    }
}
IgxTemplateOutletDirective.decorators = [
    { type: Directive, args: [{ selector: '[igxTemplateOutlet]' },] }
];
/** @nocollapse */
IgxTemplateOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
IgxTemplateOutletDirective.propDecorators = {
    igxTemplateOutletContext: [{ type: Input }],
    igxTemplateOutlet: [{ type: Input }],
    onViewCreated: [{ type: Output }],
    onViewMoved: [{ type: Output }],
    onCachedViewLoaded: [{ type: Output }]
};
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
const TemplateOutletAction = {
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
export class IgxTemplateOutletModule {
}
IgxTemplateOutletModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxTemplateOutletDirective],
                entryComponents: [],
                exports: [IgxTemplateOutletDirective],
                imports: [CommonModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVfb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90ZW1wbGF0ZS1vdXRsZXQvdGVtcGxhdGVfb3V0bGV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBbUIsS0FBSyxFQUFhLGlCQUFpQixFQUNsQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBVyxNQUFNLEVBQUUsWUFBWSxFQUM5RyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFNL0MsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBc0JuQyxZQUFtQixpQkFBbUMsRUFBVSxLQUFhLEVBQVMsR0FBc0I7UUFBekYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjs7Ozs7UUFmcEcsc0JBQWlCLEdBQXNDLElBQUksR0FBRyxFQUFFLENBQUM7UUFPbEUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBd0IsQ0FBQztRQUd6RCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUF3QixDQUFDO1FBR3ZELHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUE4QixDQUFDO0lBRzNFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCOztjQUN4QixVQUFVLEdBQXlCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQ3JFLFFBQVEsVUFBVSxFQUFFO1lBQ2hCLEtBQUssb0JBQW9CLENBQUMsVUFBVTtnQkFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQUMsTUFBTTtZQUNsRSxLQUFLLG9CQUFvQixDQUFDLFFBQVE7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsRUFB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LE9BQU8sb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7U0FDakQ7SUFDTCxDQUFDOzs7WUFyS0osU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFOzs7O1lBUkEsZ0JBQWdCO1lBQVksTUFBTTtZQUQ5QixpQkFBaUI7Ozt1Q0FtQjlELEtBQUs7Z0NBRUwsS0FBSzs0QkFFTCxNQUFNOzBCQUdOLE1BQU07aUNBR04sTUFBTTs7Ozs7OztJQWxCUCw4Q0FBeUM7Ozs7Ozs7SUFNekMsdURBQXlFOztJQUV6RSw4REFBbUQ7O0lBRW5ELHVEQUFzRDs7SUFFdEQsbURBQ2dFOztJQUVoRSxpREFDOEQ7O0lBRTlELHdEQUMyRTs7SUFFL0QsdURBQTBDOzs7OztJQUFFLDJDQUFxQjs7SUFBRSx5Q0FBNkI7Ozs7SUFpSjVHLGFBQVU7SUFDVixXQUFRO0lBQ1IsZ0JBQWE7SUFDYixvQkFBaUI7Ozs7Ozs7OztBQUdyQiwwQ0FJQzs7O0lBSEcscUNBQWtDOztJQUNsQyxvQ0FBMkI7O0lBQzNCLHVDQUFhOzs7OztBQUdqQixnREFFQzs7O0lBREcsZ0RBQWdCOzs7OztBQWFwQixNQUFNLE9BQU8sdUJBQXVCOzs7WUFQbkMsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUMxQyxlQUFlLEVBQUUsRUFBRTtnQkFDbkIsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIElucHV0LCBPbkNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmLFxuICAgIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE5nTW9kdWxlLCBOZ1pvbmUsIFZpZXdSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2lneFRlbXBsYXRlT3V0bGV0XScgfSlcbmV4cG9ydCBjbGFzcyBJZ3hUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBfdmlld1JlZiAhOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcblxuICAgIC8qKlxuICAgICogVGhlIGVtYmVkZGVkIHZpZXdzIGNhY2hlLiBDb2xsZWN0aW9uIGlzIGtleS12YWx1ZSBwYWlyZWQuXG4gICAgKiBLZXkgaXMgdGhlIHRlbXBsYXRlIGlkLCB2YWx1ZSBpcyB0aGUgZW1iZWRkZWQgdmlldyBmb3IgdGhlIHJlbGF0ZWQgdGVtcGxhdGUuXG4gICAgKi9cbiAgICBwcml2YXRlIF9lbWJlZGRlZFZpZXdzTWFwOiBNYXA8c3RyaW5nLCBFbWJlZGRlZFZpZXdSZWY8YW55Pj4gPSBuZXcgTWFwKCk7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgaWd4VGVtcGxhdGVPdXRsZXRDb250ZXh0ICE6IE9iamVjdDtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBpZ3hUZW1wbGF0ZU91dGxldCAhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVmlld0NyZWF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElWaWV3Q2hhbmdlRXZlbnRBcmdzPigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVmlld01vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxJVmlld0NoYW5nZUV2ZW50QXJncz4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNhY2hlZFZpZXdMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElDYWNoZWRWaWV3TG9hZGVkRXZlbnRBcmdzPigpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIF96b25lOiBOZ1pvbmUsIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBjb25zdCBhY3Rpb25UeXBlOiBUZW1wbGF0ZU91dGxldEFjdGlvbiA9IHRoaXMuX2dldEFjdGlvblR5cGUoY2hhbmdlcyk7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUZW1wbGF0ZU91dGxldEFjdGlvbi5DcmVhdGVWaWV3OiB0aGlzLl9yZWNyZWF0ZVZpZXcoKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRlbXBsYXRlT3V0bGV0QWN0aW9uLk1vdmVWaWV3OiB0aGlzLl9tb3ZlVmlldygpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVPdXRsZXRBY3Rpb24uVXNlQ2FjaGVkVmlldzogdGhpcy5fdXNlQ2FjaGVkVmlldygpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGVtcGxhdGVPdXRsZXRBY3Rpb24uVXBkYXRlVmlld0NvbnRleHQ6IHRoaXMuX3VwZGF0ZUV4aXN0aW5nQ29udGV4dCh0aGlzLmlneFRlbXBsYXRlT3V0bGV0Q29udGV4dCk7IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFuQ2FjaGUoKSB7XG4gICAgICAgIHRoaXMuX2VtYmVkZGVkVmlld3NNYXAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3c01hcC5jbGVhcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhblZpZXcodG1wbElEKSB7XG4gICAgICAgIGNvbnN0IGVtYlZpZXcgPSB0aGlzLl9lbWJlZGRlZFZpZXdzTWFwLmdldCh0bXBsSUQpO1xuICAgICAgICBpZiAoZW1iVmlldykge1xuICAgICAgICAgICAgZW1iVmlldy5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9lbWJlZGRlZFZpZXdzTWFwLmRlbGV0ZSh0bXBsSUQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVjcmVhdGVWaWV3KCkge1xuICAgICAgICAvLyBkZXRhY2ggb2xkIGFuZCBjcmVhdGUgbmV3XG4gICAgICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmRldGFjaCh0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluZGV4T2YodGhpcy5fdmlld1JlZikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlneFRlbXBsYXRlT3V0bGV0KSB7XG4gICAgICAgICAgICB0aGlzLl92aWV3UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgICAgICAgICAgdGhpcy5pZ3hUZW1wbGF0ZU91dGxldCwgdGhpcy5pZ3hUZW1wbGF0ZU91dGxldENvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5vblZpZXdDcmVhdGVkLmVtaXQoeyBvd25lcjogdGhpcywgdmlldzogdGhpcy5fdmlld1JlZiwgY29udGV4dDogdGhpcy5pZ3hUZW1wbGF0ZU91dGxldENvbnRleHQgfSk7XG4gICAgICAgICAgICBjb25zdCB0bXBsSWQgPSB0aGlzLmlneFRlbXBsYXRlT3V0bGV0Q29udGV4dFsndGVtcGxhdGVJRCddO1xuICAgICAgICAgICAgaWYgKHRtcGxJZCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGNvbnRleHQgY29udGFpbnMgYSB0ZW1wbGF0ZSBpZCwgY2hlY2sgaWYgd2UgaGF2ZSBhIHZpZXcgZm9yIHRoYXQgdGVtcGxhdGUgYWxyZWFkeSBzdG9yZWQgaW4gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgLy8gaWYgbm90IGNyZWF0ZSBhIGNvcHkgYW5kIGFkZCBpdCB0byB0aGUgY2FjaGUgaW4gZGV0YWNoZWQgc3RhdGUuXG4gICAgICAgICAgICAgICAgLy8gTm90ZTogVmlld3MgaW4gZGV0YWNoZWQgc3RhdGUgZG8gbm90IGFwcGVhciBpbiB0aGUgRE9NLCBob3dldmVyIHRoZXkgcmVtYWluIHN0b3JlZCBpbiBtZW1vcnkuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gdGhpcy5fZW1iZWRkZWRWaWV3c01hcC5nZXQodGhpcy5pZ3hUZW1wbGF0ZU91dGxldENvbnRleHRbJ3RlbXBsYXRlSUQnXSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3c01hcC5zZXQodGhpcy5pZ3hUZW1wbGF0ZU91dGxldENvbnRleHRbJ3RlbXBsYXRlSUQnXSwgdGhpcy5fdmlld1JlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbW92ZVZpZXcoKSB7XG4gICAgICAgIC8vIHVzaW5nIGV4dGVybmFsIHZpZXcgYW5kIGluc2VydGluZyBpdCBpbiBjdXJyZW50IHZpZXcuXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmlneFRlbXBsYXRlT3V0bGV0Q29udGV4dFsnbW92ZVZpZXcnXTtcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzLmlneFRlbXBsYXRlT3V0bGV0Q29udGV4dFsnb3duZXInXTtcbiAgICAgICAgaWYgKHZpZXcgIT09IHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgICAgICAgIGlmIChvd25lci5fdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHZpZXcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIGRldGFjaCBpbiBjYXNlIHZpZXcgaXQgaXMgYXR0YWNoZWQgc29tZXdoZXJlIGVsc2UgYXQgdGhlIG1vbWVudC5cbiAgICAgICAgICAgICAgICBvd25lci5fdmlld0NvbnRhaW5lclJlZi5kZXRhY2gob3duZXIuX3ZpZXdDb250YWluZXJSZWYuaW5kZXhPZih2aWV3KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fdmlld1JlZiAmJiB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluZGV4T2YodGhpcy5fdmlld1JlZikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5kZXRhY2godGhpcy5fdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHRoaXMuX3ZpZXdSZWYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3ZpZXdSZWYgPSB2aWV3O1xuICAgICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5pbnNlcnQodmlldywgMCk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFeGlzdGluZ0NvbnRleHQodGhpcy5pZ3hUZW1wbGF0ZU91dGxldENvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5vblZpZXdNb3ZlZC5lbWl0KHsgb3duZXI6IHRoaXMsIHZpZXc6IHRoaXMuX3ZpZXdSZWYsIGNvbnRleHQ6IHRoaXMuaWd4VGVtcGxhdGVPdXRsZXRDb250ZXh0IH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgX3VzZUNhY2hlZFZpZXcoKSB7XG4gICAgICAgIC8vIHVzZSB2aWV3IGZvciBzcGVjaWZpYyB0ZW1wbGF0ZSBjYWNoZWQgaW4gdGhlIGN1cnJlbnQgdGVtcGxhdGUgb3V0bGV0XG4gICAgICAgIGNvbnN0IHRtcGxJRCA9IHRoaXMuaWd4VGVtcGxhdGVPdXRsZXRDb250ZXh0Wyd0ZW1wbGF0ZUlEJ107XG4gICAgICAgIGNvbnN0IGNhY2hlZFZpZXcgPSB0bXBsSUQgP1xuICAgICAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3c01hcC5nZXQodG1wbElEKSA6XG4gICAgICAgICAgICBudWxsO1xuICAgICAgICAvLyBpZiB2aWV3IGV4aXN0cywgYnV0IHRlbXBsYXRlIGhhcyBiZWVuIGNoYW5nZWQgYW5kIHRoZXJlIGlzIGEgdmlldyBpbiB0aGUgY2FjaGUgd2l0aCB0aGUgcmVsYXRlZCB0ZW1wbGF0ZVxuICAgICAgICAvLyB0aGVuIGRldGFjaCBvbGQgdmlldyBhbmQgaW5zZXJ0IHRoZSBzdG9yZWQgb25lIHdpdGggdGhlIG1hdGNoaW5nIHRlbXBsYXRlXG4gICAgICAgIC8vIGFmdGVyIHRoYXQgdXBkYXRlIGl0cyBjb250ZXh0LlxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmRldGFjaCh0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluZGV4T2YodGhpcy5fdmlld1JlZikpO1xuICAgICAgICB0aGlzLl92aWV3UmVmID0gY2FjaGVkVmlldztcbiAgICAgICAgY29uc3Qgb2xkQ29udGV4dCA9IHRoaXMuX2Nsb25lQ29udGV4dChjYWNoZWRWaWV3LmNvbnRleHQpO1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluc2VydCh0aGlzLl92aWV3UmVmLCAwKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlRXhpc3RpbmdDb250ZXh0KHRoaXMuaWd4VGVtcGxhdGVPdXRsZXRDb250ZXh0KTtcbiAgICAgICAgdGhpcy5vbkNhY2hlZFZpZXdMb2FkZWQuZW1pdCh7IG93bmVyOiB0aGlzLCB2aWV3OiB0aGlzLl92aWV3UmVmLCBjb250ZXh0OiB0aGlzLmlneFRlbXBsYXRlT3V0bGV0Q29udGV4dCwgb2xkQ29udGV4dCB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zaG91bGRSZWNyZWF0ZVZpZXcoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjdHhDaGFuZ2UgPSBjaGFuZ2VzWydpZ3hUZW1wbGF0ZU91dGxldENvbnRleHQnXTtcbiAgICAgICAgcmV0dXJuICEhY2hhbmdlc1snaWd4VGVtcGxhdGVPdXRsZXQnXSB8fCAoY3R4Q2hhbmdlICYmIHRoaXMuX2hhc0NvbnRleHRTaGFwZUNoYW5nZWQoY3R4Q2hhbmdlKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFzQ29udGV4dFNoYXBlQ2hhbmdlZChjdHhDaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBwcmV2Q3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5wcmV2aW91c1ZhbHVlIHx8IHt9KTtcbiAgICAgICAgY29uc3QgY3VyckN0eEtleXMgPSBPYmplY3Qua2V5cyhjdHhDaGFuZ2UuY3VycmVudFZhbHVlIHx8IHt9KTtcblxuICAgICAgICBpZiAocHJldkN0eEtleXMubGVuZ3RoID09PSBjdXJyQ3R4S2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgY3VyckN0eEtleXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldkN0eEtleXMuaW5kZXhPZihwcm9wTmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlRXhpc3RpbmdDb250ZXh0KGN0eDogT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgT2JqZWN0LmtleXMoY3R4KSkge1xuICAgICAgICAgICAgKDxhbnk+dGhpcy5fdmlld1JlZi5jb250ZXh0KVtwcm9wTmFtZV0gPSAoPGFueT50aGlzLmlneFRlbXBsYXRlT3V0bGV0Q29udGV4dClbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xvbmVDb250ZXh0KGN0eDogYW55KTogYW55IHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjdHgpKSB7XG4gICAgICAgICAgICBjbG9uZVtwcm9wTmFtZV0gPSBjdHhbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRBY3Rpb25UeXBlKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgbW92ZWRWaWV3ID0gdGhpcy5pZ3hUZW1wbGF0ZU91dGxldENvbnRleHRbJ21vdmVWaWV3J107XG4gICAgICAgIGNvbnN0IHRtcGxJRCA9IHRoaXMuaWd4VGVtcGxhdGVPdXRsZXRDb250ZXh0Wyd0ZW1wbGF0ZUlEJ107XG4gICAgICAgIGNvbnN0IGNhY2hlZFZpZXcgPSB0bXBsSUQgP1xuICAgICAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3c01hcC5nZXQodG1wbElEKSA6XG4gICAgICAgICAgICBudWxsO1xuICAgICAgICBjb25zdCBzaG91bGRSZWNyZWF0ZSA9IHRoaXMuX3Nob3VsZFJlY3JlYXRlVmlldyhjaGFuZ2VzKTtcbiAgICAgICAgaWYgKG1vdmVkVmlldykge1xuICAgICAgICAgICAgLy8gdmlldyBpcyBtb3ZlZCBmcm9tIGV4dGVybmFsIHNvdXJjZVxuICAgICAgICAgICAgcmV0dXJuIFRlbXBsYXRlT3V0bGV0QWN0aW9uLk1vdmVWaWV3O1xuICAgICAgICB9IGVsc2UgaWYgKHNob3VsZFJlY3JlYXRlICYmIGNhY2hlZFZpZXcpIHtcbiAgICAgICAgICAgIC8vIHNob3VsZCByZWNyZWF0ZSAodGVtcGxhdGUgb3IgY29udGV4dCBjaGFuZ2UpIGFuZCB0aGVyZSBpcyBhIG1hdGNoaW5nIHRlbXBsYXRlIGluIGNhY2hlXG4gICAgICAgICAgICByZXR1cm4gVGVtcGxhdGVPdXRsZXRBY3Rpb24uVXNlQ2FjaGVkVmlldztcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fdmlld1JlZiB8fCBzaG91bGRSZWNyZWF0ZSkge1xuICAgICAgICAgICAgLy8gbm8gdmlldyBvciBzaG91bGQgcmVjcmVhdGVcbiAgICAgICAgICAgIHJldHVybiBUZW1wbGF0ZU91dGxldEFjdGlvbi5DcmVhdGVWaWV3O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWd4VGVtcGxhdGVPdXRsZXRDb250ZXh0KSB7XG4gICAgICAgICAgICAvLyBoYXMgY29udGV4dCwgdXBkYXRlIGNvbnRleHRcbiAgICAgICAgICAgIHJldHVybiBUZW1wbGF0ZU91dGxldEFjdGlvbi5VcGRhdGVWaWV3Q29udGV4dDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmVudW0gVGVtcGxhdGVPdXRsZXRBY3Rpb24ge1xuICAgIENyZWF0ZVZpZXcsXG4gICAgTW92ZVZpZXcsXG4gICAgVXNlQ2FjaGVkVmlldyxcbiAgICBVcGRhdGVWaWV3Q29udGV4dFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElWaWV3Q2hhbmdlRXZlbnRBcmdzIHtcbiAgICBvd25lcjogSWd4VGVtcGxhdGVPdXRsZXREaXJlY3RpdmU7XG4gICAgdmlldzogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gICAgY29udGV4dDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZWRWaWV3TG9hZGVkRXZlbnRBcmdzIGV4dGVuZHMgSVZpZXdDaGFuZ2VFdmVudEFyZ3Mge1xuICAgIG9sZENvbnRleHQ6IGFueTtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4VGVtcGxhdGVPdXRsZXREaXJlY3RpdmVdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW10sXG4gICAgZXhwb3J0czogW0lneFRlbXBsYXRlT3V0bGV0RGlyZWN0aXZlXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIElneFRlbXBsYXRlT3V0bGV0TW9kdWxlIHtcbn1cbiJdfQ==