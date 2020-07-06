/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import { isPlatformBrowser } from '@angular/common';
var TabDirective = /** @class */ (function () {
    function TabDirective(platformId, tabset, el, renderer) {
        this.renderer = renderer;
        this._disabled = false;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.select = new EventEmitter();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new EventEmitter();
        /**
         * fired before tab will be removed
         */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.test = true;
        // public el: ElementRef = null;
        this.el = null;
        this._active = false;
        this.isBrowser = null;
        this.isBrowser = isPlatformBrowser(platformId);
        this.el = el;
        this.tabset = tabset;
    }
    Object.defineProperty(TabDirective.prototype, "disabled", {
        /** if true tab can not be activated */
        get: /**
         * if true tab can not be activated
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
            if (this._disabled && this._active) {
                this.tabset.initActiveTab();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: /**
         * tab active state toggle
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            var _this = this;
            if (this.disabled && active || !active) {
                if (this._active && !active) {
                    this.renderer.removeClass(this.el.nativeElement, 'show');
                    this.renderer.removeClass(this.el.nativeElement, 'active');
                    this._active = active;
                    this.deselect.emit(this);
                }
                return;
            }
            this.renderer.addClass(this.el.nativeElement, 'show');
            this.renderer.addClass(this.el.nativeElement, 'active');
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach((/**
             * @param {?} mdbTab
             * @return {?}
             */
            function (mdbTab) {
                if (mdbTab !== _this) {
                    mdbTab.active = false;
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.removable = this.removable;
        this.tabset.addTab(this);
    };
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabset.removeTab(this);
    };
    TabDirective.decorators = [
        { type: Directive, args: [{ selector: 'mdb-tab, [mdbTab]' },] }
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: TabsetComponent },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TabDirective.propDecorators = {
        type: [{ type: Input }],
        heading: [{ type: Input }],
        disabled: [{ type: Input }],
        removable: [{ type: Input }],
        customClass: [{ type: Input }],
        tabOrder: [{ type: Input }],
        active: [{ type: Input }],
        select: [{ type: Output }],
        deselect: [{ type: Output }],
        removed: [{ type: Output }],
        addClass: [{ type: HostBinding, args: ['class.tab-pane',] }],
        test: [{ type: HostBinding, args: ['class.fade',] }]
    };
    return TabDirective;
}());
export { TabDirective };
if (false) {
    /** @type {?} */
    TabDirective.prototype.type;
    /**
     * tab header text
     * @type {?}
     */
    TabDirective.prototype.heading;
    /**
     * @type {?}
     * @private
     */
    TabDirective.prototype._disabled;
    /**
     * if true tab can be removable, additional button will appear
     * @type {?}
     */
    TabDirective.prototype.removable;
    /**
     * if set, will be added to the tab's class atribute
     * @type {?}
     */
    TabDirective.prototype.customClass;
    /** @type {?} */
    TabDirective.prototype.tabOrder;
    /**
     * fired when tab became active, $event:Tab equals to selected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.select;
    /**
     * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.deselect;
    /**
     * fired before tab will be removed
     * @type {?}
     */
    TabDirective.prototype.removed;
    /** @type {?} */
    TabDirective.prototype.addClass;
    /** @type {?} */
    TabDirective.prototype.test;
    /** @type {?} */
    TabDirective.prototype.headingRef;
    /** @type {?} */
    TabDirective.prototype.tabset;
    /** @type {?} */
    TabDirective.prototype.el;
    /** @type {?} */
    TabDirective.prototype.thus;
    /**
     * @type {?}
     * @private
     */
    TabDirective.prototype._active;
    /** @type {?} */
    TabDirective.prototype.isBrowser;
    /**
     * @type {?}
     * @private
     */
    TabDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdGFicy1waWxscy90YWIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFFTixVQUFVLEVBRVYsTUFBTSxFQUNOLFdBQVcsRUFFWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRWxEO0lBNEVFLHNCQUN1QixVQUFrQixFQUN2QyxNQUF1QixFQUFFLEVBQWMsRUFDL0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTlEckIsY0FBUyxHQUFHLEtBQUssQ0FBQzs7OztRQXVDVCxXQUFNLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7UUFFeEQsYUFBUSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRTFELFlBQU8sR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFNBQUksR0FBRyxJQUFJLENBQUM7O1FBTXZDLE9BQUUsR0FBcUIsSUFBSSxDQUFDO1FBRTNCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHeEIsY0FBUyxHQUFRLElBQUksQ0FBQztRQU1wQixJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQTlFRCxzQkFDSSxrQ0FBUTtRQUZaLHVDQUF1Qzs7Ozs7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O0lBRTFFLGdDQUFzRDs7SUFDdEQsNEJBQThDOztJQUc5QyxrQ0FBb0M7O0lBQ3BDLDhCQUErQjs7SUFFL0IsMEJBQW1DOztJQUNuQyw0QkFBVzs7Ozs7SUFDWCwrQkFBd0I7O0lBR3hCLGlDQUFzQjs7Ozs7SUFLcEIsZ0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lELFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFic2V0Q29tcG9uZW50fSBmcm9tICcuL3RhYnNldC5jb21wb25lbnQnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdtZGItdGFiLCBbbWRiVGFiXSd9KVxuZXhwb3J0IGNsYXNzIFRhYkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIHR5cGU6IHN0cmluZztcbiAgLyoqIHRhYiBoZWFkZXIgdGV4dCAqL1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGluZzogc3RyaW5nO1xuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIG5vdCBiZSBhY3RpdmF0ZWQgKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkICYmIHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy50YWJzZXQuaW5pdEFjdGl2ZVRhYigpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIGJlIHJlbW92YWJsZSwgYWRkaXRpb25hbCBidXR0b24gd2lsbCBhcHBlYXIgKi9cbiAgQElucHV0KCkgcHVibGljIHJlbW92YWJsZTogYm9vbGVhbjtcbiAgLyoqIGlmIHNldCwgd2lsbCBiZSBhZGRlZCB0byB0aGUgdGFiJ3MgY2xhc3MgYXRyaWJ1dGUgKi9cbiAgQElucHV0KCkgcHVibGljIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdGFiT3JkZXI6IG51bWJlcjtcblxuICAvKiogdGFiIGFjdGl2ZSBzdGF0ZSB0b2dnbGUgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgJiYgYWN0aXZlIHx8ICFhY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgIWFjdGl2ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3Nob3cnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICB0aGlzLmRlc2VsZWN0LmVtaXQodGhpcyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2hvdycpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzKTtcblxuICAgIHRoaXMudGFic2V0LnRhYnMuZm9yRWFjaCgobWRiVGFiOiBUYWJEaXJlY3RpdmUpID0+IHtcbiAgICAgIGlmIChtZGJUYWIgIT09IHRoaXMpIHtcbiAgICAgICAgbWRiVGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICAvKiogZmlyZWQgd2hlbiB0YWIgYmVjYW1lIGFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xuICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgaW5hY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIGRlc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xuICBAT3V0cHV0KCkgcHVibGljIGRlc2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIGZpcmVkIGJlZm9yZSB0YWIgd2lsbCBiZSByZW1vdmVkICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItcGFuZScpIHB1YmxpYyBhZGRDbGFzcyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmFkZScpIHB1YmxpYyB0ZXN0ID0gdHJ1ZTtcblxuXG4gIHB1YmxpYyBoZWFkaW5nUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwdWJsaWMgdGFic2V0OiBUYWJzZXRDb21wb25lbnQ7XG4gIC8vIHB1YmxpYyBlbDogRWxlbWVudFJlZiA9IG51bGw7XG4gIHB1YmxpYyBlbDogRWxlbWVudFJlZiB8IGFueSA9IG51bGw7XG4gIHRodXM6IHRoaXM7XG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuXG5cbiAgaXNCcm93c2VyOiBhbnkgPSBudWxsO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQsIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG5cbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy50YWJzZXQgPSB0YWJzZXQ7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmFibGUgPSB0aGlzLnJlbW92YWJsZTtcbiAgICB0aGlzLnRhYnNldC5hZGRUYWIodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnRhYnNldC5yZW1vdmVUYWIodGhpcyk7XG4gIH1cblxufVxuIl19