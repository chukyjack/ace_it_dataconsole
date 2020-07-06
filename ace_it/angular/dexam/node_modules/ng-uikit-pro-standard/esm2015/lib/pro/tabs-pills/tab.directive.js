/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import { isPlatformBrowser } from '@angular/common';
export class TabDirective {
    /**
     * @param {?} platformId
     * @param {?} tabset
     * @param {?} el
     * @param {?} renderer
     */
    constructor(platformId, tabset, el, renderer) {
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
    /**
     * if true tab can not be activated
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
        if (this._disabled && this._active) {
            this.tabset.initActiveTab();
        }
    }
    /**
     * tab active state toggle
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
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
        (mdbTab) => {
            if (mdbTab !== this) {
                mdbTab.active = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.removable = this.removable;
        this.tabset.addTab(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tabset.removeTab(this);
    }
}
TabDirective.decorators = [
    { type: Directive, args: [{ selector: 'mdb-tab, [mdbTab]' },] }
];
/** @nocollapse */
TabDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: TabsetComponent },
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdGFicy1waWxscy90YWIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFFTixVQUFVLEVBRVYsTUFBTSxFQUNOLFdBQVcsRUFFWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBR2xELE1BQU0sT0FBTyxZQUFZOzs7Ozs7O0lBMkV2QixZQUN1QixVQUFrQixFQUN2QyxNQUF1QixFQUFFLEVBQWMsRUFDL0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTlEckIsY0FBUyxHQUFHLEtBQUssQ0FBQzs7OztRQXVDVCxXQUFNLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7UUFFeEQsYUFBUSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRTFELFlBQU8sR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFNBQUksR0FBRyxJQUFJLENBQUM7O1FBTXZDLE9BQUUsR0FBcUIsSUFBSSxDQUFDO1FBRTNCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHeEIsY0FBUyxHQUFRLElBQUksQ0FBQztRQU1wQixJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUE5RUQsSUFD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OztJQUNYLCtCQUF3Qjs7SUFHeEIsaUNBQXNCOzs7OztJQUtwQixnQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJzZXRDb21wb25lbnR9IGZyb20gJy4vdGFic2V0LmNvbXBvbmVudCc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ21kYi10YWIsIFttZGJUYWJdJ30pXG5leHBvcnQgY2xhc3MgVGFiRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAvKiogdGFiIGhlYWRlciB0ZXh0ICovXG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkaW5nOiBzdHJpbmc7XG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gbm90IGJlIGFjdGl2YXRlZCAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG5cbiAgICBpZiAodGhpcy5fZGlzYWJsZWQgJiYgdGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLnRhYnNldC5pbml0QWN0aXZlVGFiKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gYmUgcmVtb3ZhYmxlLCBhZGRpdGlvbmFsIGJ1dHRvbiB3aWxsIGFwcGVhciAqL1xuICBASW5wdXQoKSBwdWJsaWMgcmVtb3ZhYmxlOiBib29sZWFuO1xuICAvKiogaWYgc2V0LCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0YWIncyBjbGFzcyBhdHJpYnV0ZSAqL1xuICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKSB0YWJPcmRlcjogbnVtYmVyO1xuXG4gIC8qKiB0YWIgYWN0aXZlIHN0YXRlIHRvZ2dsZSAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgcHVibGljIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCAmJiBhY3RpdmUgfHwgIWFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZSAmJiAhYWN0aXZlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2hvdycpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuZGVzZWxlY3QuZW1pdCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzaG93Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMpO1xuXG4gICAgdGhpcy50YWJzZXQudGFicy5mb3JFYWNoKChtZGJUYWI6IFRhYkRpcmVjdGl2ZSkgPT4ge1xuICAgICAgaWYgKG1kYlRhYiAhPT0gdGhpcykge1xuICAgICAgICBtZGJUYWIuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgYWN0aXZlLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBzZWxlY3RlZCBpbnN0YW5jZSBvZiBUYWIgY29tcG9uZW50ICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIGZpcmVkIHdoZW4gdGFiIGJlY2FtZSBpbmFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gZGVzZWxlY3RlZCBpbnN0YW5jZSBvZiBUYWIgY29tcG9uZW50ICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgZGVzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogZmlyZWQgYmVmb3JlIHRhYiB3aWxsIGJlIHJlbW92ZWQgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyByZW1vdmVkOiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYi1wYW5lJykgcHVibGljIGFkZENsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mYWRlJykgcHVibGljIHRlc3QgPSB0cnVlO1xuXG5cbiAgcHVibGljIGhlYWRpbmdSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIHB1YmxpYyB0YWJzZXQ6IFRhYnNldENvbXBvbmVudDtcbiAgLy8gcHVibGljIGVsOiBFbGVtZW50UmVmID0gbnVsbDtcbiAgcHVibGljIGVsOiBFbGVtZW50UmVmIHwgYW55ID0gbnVsbDtcbiAgdGh1czogdGhpcztcbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XG5cblxuICBpc0Jyb3dzZXI6IGFueSA9IG51bGw7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICB0YWJzZXQ6IFRhYnNldENvbXBvbmVudCwgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcblxuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLnRhYnNldCA9IHRhYnNldDtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92YWJsZSA9IHRoaXMucmVtb3ZhYmxlO1xuICAgIHRoaXMudGFic2V0LmFkZFRhYih0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudGFic2V0LnJlbW92ZVRhYih0aGlzKTtcbiAgfVxuXG59XG4iXX0=