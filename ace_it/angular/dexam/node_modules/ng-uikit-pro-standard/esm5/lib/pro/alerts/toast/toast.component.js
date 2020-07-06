/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, Component, HostBinding, HostListener, } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ToastPackage, tsConfig } from './toast.config';
var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastPackage, appRef) {
        var _this = this;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /**
         * width of progress bar
         */
        this.width = -1;
        this.state = 'inactive';
        /**
         * a combination of toast type and options.toastClass
         */
        this.toastClasses = '';
        this.toastService = tsConfig.serviceInstance;
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe((/**
         * @return {?}
         */
        function () {
            _this.activateToast();
        }));
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe((/**
         * @return {?}
         */
        function () {
            _this.remove();
        }));
        this.opacity = this.options.opacity;
    }
    Object.defineProperty(ToastComponent.prototype, "animationParams", {
        /** controls animation */
        get: /**
         * controls animation
         * @return {?}
         */
        function () {
            return {
                value: this.state,
                params: {
                    opacity: this.opacity
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     */
    /**
     * activates toast and sets timeout
     * @return {?}
     */
    ToastComponent.prototype.activateToast = /**
     * activates toast and sets timeout
     * @return {?}
     */
    function () {
        var _this = this;
        this.state = 'active';
        if (this.options.timeOut !== 0) {
            this.timeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.remove();
            }), this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval((/**
                 * @return {?}
                 */
                function () { return _this.updateProgress(); }), 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    /**
     * updates progress bar width
     */
    /**
     * updates progress bar width
     * @return {?}
     */
    ToastComponent.prototype.updateProgress = /**
     * updates progress bar width
     * @return {?}
     */
    function () {
        if (this.width === 0) {
            return;
        }
        /** @type {?} */
        var now = new Date().getTime();
        /** @type {?} */
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.width <= 0) {
            this.width = 0;
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     */
    /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    ToastComponent.prototype.remove = /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () {
            return _this.toastService.remove(_this.toastPackage.toastId);
        }), 250);
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.onActionClick = /**
     * @return {?}
     */
    function () {
        this.toastPackage.triggerAction();
        this.remove();
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.tapToast = /**
     * @return {?}
     */
    function () {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.stickAround = /**
     * @return {?}
     */
    function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.delayedHideToast = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (+this.options.extendedTimeOut === 0 || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () { return _this.remove(); }), this.options.extendedTimeOut);
        this.options.timeOut = +this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + this.options.timeOut;
        this.width = 100;
        if (this.options.progressBar) {
            this.intervalId = setInterval((/**
             * @return {?}
             */
            function () { return _this.updateProgress(); }), 10);
        }
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-toast-component',
                    template: "<button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"md-toast-close-button\">\n  &times;\n</button>\n<div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\">\n  {{title}}\n</div>\n<div *ngIf=\"message && options.enableHtml\" class=\"{{options.messageClass}}\" [innerHTML]=\"message\">\n</div>\n<div *ngIf=\"message && !options.enableHtml\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\">\n  {{message}}\n</div>\n<button *ngIf=\"options.actionButton\" class=\"btn btn-block md-toast-action mt-2\" [ngClass]=\"options.actionButtonClass\"\n        (click)=\"onActionClick()\">{{ options.actionButton }}</button>\n<div *ngIf=\"options.progressBar\">\n  <div class=\"md-toast-progress\" [style.width.%]=\"width\"></div>\n</div>\n",
                    animations: [
                        trigger('flyInOut', [
                            state('inactive', style({ opacity: 0 })),
                            state('active', style({ opacity: '{{ opacity }}' }), { params: { opacity: 0.5 } }),
                            state('removed', style({ opacity: 0 })),
                            transition('inactive => active', animate('300ms ease-in')),
                            transition('active => removed', animate('300ms ease-in')),
                        ]),
                    ]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: ToastPackage },
        { type: ApplicationRef }
    ]; };
    ToastComponent.propDecorators = {
        toastClasses: [{ type: HostBinding, args: ['class',] }],
        animationParams: [{ type: HostBinding, args: ['@flyInOut',] }],
        tapToast: [{ type: HostListener, args: ['click',] }],
        stickAround: [{ type: HostListener, args: ['mouseenter',] }],
        delayedHideToast: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return ToastComponent;
}());
export { ToastComponent };
if (false) {
    /** @type {?} */
    ToastComponent.prototype.message;
    /** @type {?} */
    ToastComponent.prototype.title;
    /** @type {?} */
    ToastComponent.prototype.options;
    /**
     * width of progress bar
     * @type {?}
     */
    ToastComponent.prototype.width;
    /** @type {?} */
    ToastComponent.prototype.state;
    /**
     * a combination of toast type and options.toastClass
     * @type {?}
     */
    ToastComponent.prototype.toastClasses;
    /** @type {?} */
    ToastComponent.prototype.opacity;
    /** @type {?} */
    ToastComponent.prototype.timeout;
    /** @type {?} */
    ToastComponent.prototype.intervalId;
    /** @type {?} */
    ToastComponent.prototype.hideTime;
    /** @type {?} */
    ToastComponent.prototype.sub;
    /** @type {?} */
    ToastComponent.prototype.sub1;
    /**
     * @type {?}
     * @protected
     */
    ToastComponent.prototype.toastService;
    /** @type {?} */
    ToastComponent.prototype.toastPackage;
    /**
     * @type {?}
     * @protected
     */
    ToastComponent.prototype.appRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUNkLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFLL0UsT0FBTyxFQUFlLFlBQVksRUFBRSxRQUFRLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRTtJQXdDRSx3QkFDUyxZQUEwQixFQUN2QixNQUFzQjtRQUZsQyxpQkFrQkM7UUFqQlEsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7Ozs7UUF4QmxDLFVBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNYLFVBQUssR0FBRyxVQUFVLENBQUM7Ozs7UUFFRyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQXVCdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBRTdDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQU0sWUFBWSxDQUFDLFNBQVMsU0FBSSxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVksQ0FBQztRQUNsRixJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUzs7O1FBQUM7WUFD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WUFBWTtnQkFaaEMsY0FBYzs7OytCQW1DYixXQUFXLFNBQUMsT0FBTztrQ0FFbkIsV0FBVyxTQUFDLFdBQVc7MkJBZ0d2QixZQUFZLFNBQUMsT0FBTzs4QkFVcEIsWUFBWSxTQUFDLFlBQVk7bUNBYXpCLFlBQVksU0FBQyxZQUFZOztJQWE1QixxQkFBQztDQUFBLEFBM0pELElBMkpDO1NBOUlZLGNBQWM7OztJQUN6QixpQ0FBMkI7O0lBQzNCLCtCQUFjOztJQUNkLGlDQUFzQjs7Ozs7SUFFdEIsK0JBQVc7O0lBQ1gsK0JBQW1COzs7OztJQUVuQixzQ0FBd0M7O0lBV3hDLGlDQUE0Qjs7SUFDM0IsaUNBQWE7O0lBQ2Isb0NBQWdCOztJQUNoQixrQ0FBaUI7O0lBQ2pCLDZCQUFrQjs7SUFDbEIsOEJBQW1COzs7OztJQUNuQixzQ0FBNEI7O0lBRzNCLHNDQUFpQzs7Ozs7SUFDakMsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtTYWZlSHRtbH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtHbG9iYWxDb25maWcsIFRvYXN0UGFja2FnZSwgdHNDb25maWd9IGZyb20gJy4vdG9hc3QuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXRvYXN0LWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmbHlJbk91dCcsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoeyBvcGFjaXR5OiAne3sgb3BhY2l0eSB9fScgfSksIHsgcGFyYW1zOiB7IG9wYWNpdHk6IDAuNSB9fSksXG4gICAgICBzdGF0ZSgncmVtb3ZlZCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCczMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IHJlbW92ZWQnLCBhbmltYXRlKCczMDBtcyBlYXNlLWluJykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIG1lc3NhZ2U6IHN0cmluZyB8IFNhZmVIdG1sO1xuICB0aXRsZTogc3RyaW5nO1xuICBvcHRpb25zOiBHbG9iYWxDb25maWc7XG4gIC8qKiB3aWR0aCBvZiBwcm9ncmVzcyBiYXIgKi9cbiAgd2lkdGggPSAtMTtcbiAgc3RhdGUgPSAnaW5hY3RpdmUnO1xuICAvKiogYSBjb21iaW5hdGlvbiBvZiB0b2FzdCB0eXBlIGFuZCBvcHRpb25zLnRvYXN0Q2xhc3MgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRvYXN0Q2xhc3NlcyA9ICcnO1xuICAvKiogY29udHJvbHMgYW5pbWF0aW9uICovXG4gIEBIb3N0QmluZGluZygnQGZseUluT3V0JylcbiAgZ2V0IGFuaW1hdGlvblBhcmFtcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMuc3RhdGUsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgb3BhY2l0eTogdGhpcy5vcGFjaXR5XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBvcGFjaXR5OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICB0aW1lb3V0OiBhbnk7XG4gICBpbnRlcnZhbElkOiBhbnk7XG4gICBoaWRlVGltZTogbnVtYmVyO1xuICAgc3ViOiBTdWJzY3JpcHRpb247XG4gICBzdWIxOiBTdWJzY3JpcHRpb247XG4gICBwcm90ZWN0ZWQgdG9hc3RTZXJ2aWNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRvYXN0UGFja2FnZTogVG9hc3RQYWNrYWdlLFxuICAgIHByb3RlY3RlZCBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICApIHtcbiAgICB0aGlzLnRvYXN0U2VydmljZSA9IHRzQ29uZmlnLnNlcnZpY2VJbnN0YW5jZTtcblxuICAgIHRoaXMubWVzc2FnZSA9IHRvYXN0UGFja2FnZS5tZXNzYWdlO1xuICAgIHRoaXMudGl0bGUgPSB0b2FzdFBhY2thZ2UudGl0bGU7XG4gICAgdGhpcy5vcHRpb25zID0gdG9hc3RQYWNrYWdlLmNvbmZpZztcbiAgICB0aGlzLnRvYXN0Q2xhc3NlcyA9IGAke3RvYXN0UGFja2FnZS50b2FzdFR5cGV9ICR7dG9hc3RQYWNrYWdlLmNvbmZpZy50b2FzdENsYXNzfWA7XG4gICAgdGhpcy5zdWIgPSB0b2FzdFBhY2thZ2UudG9hc3RSZWYuYWZ0ZXJBY3RpdmF0ZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRlVG9hc3QoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1YjEgPSB0b2FzdFBhY2thZ2UudG9hc3RSZWYubWFudWFsQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wYWNpdHkgPSB0aGlzLm9wdGlvbnMub3BhY2l0eTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdWIxLnVuc3Vic2NyaWJlKCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG4gIC8qKlxuICAgKiBhY3RpdmF0ZXMgdG9hc3QgYW5kIHNldHMgdGltZW91dFxuICAgKi9cbiAgYWN0aXZhdGVUb2FzdCgpIHtcbiAgICB0aGlzLnN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aW1lT3V0ICE9PSAwKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgIH0sIHRoaXMub3B0aW9ucy50aW1lT3V0KTtcbiAgICAgIHRoaXMuaGlkZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHRoaXMub3B0aW9ucy50aW1lT3V0O1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0Jhcikge1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzKCksIDEwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5vbkFjdGl2YXRlVGljaykge1xuICAgICAgdGhpcy5hcHBSZWYudGljaygpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogdXBkYXRlcyBwcm9ncmVzcyBiYXIgd2lkdGhcbiAgICovXG4gIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgIGlmICh0aGlzLndpZHRoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMuaGlkZVRpbWUgLSBub3c7XG4gICAgdGhpcy53aWR0aCA9IChyZW1haW5pbmcgLyB0aGlzLm9wdGlvbnMudGltZU91dCkgKiAxMDA7XG4gICAgaWYgKHRoaXMud2lkdGggPD0gMCkge1xuICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRlbGxzIHRvYXN0clNlcnZpY2UgdG8gcmVtb3ZlIHRoaXMgdG9hc3QgYWZ0ZXIgYW5pbWF0aW9uIHRpbWVcbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMuc3RhdGUgPSAncmVtb3ZlZCc7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PlxuICAgICAgdGhpcy50b2FzdFNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3RQYWNrYWdlLnRvYXN0SWQpLFxuICAgICAgMjUwXG4gICAgKTtcbiAgfVxuXG4gIG9uQWN0aW9uQ2xpY2soKSB7XG4gICAgdGhpcy50b2FzdFBhY2thZ2UudHJpZ2dlckFjdGlvbigpO1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHRhcFRvYXN0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSAncmVtb3ZlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50b2FzdFBhY2thZ2UudHJpZ2dlclRhcCgpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGFwVG9EaXNtaXNzKSB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgc3RpY2tBcm91bmQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLm9wdGlvbnMudGltZU91dCA9IDA7XG4gICAgdGhpcy5oaWRlVGltZSA9IDA7XG5cbiAgICAvLyBkaXNhYmxlIHByb2dyZXNzQmFyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMud2lkdGggPSAwO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBkZWxheWVkSGlkZVRvYXN0KCkge1xuICAgIGlmICgrdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dCA9PT0gMCB8fCB0aGlzLnN0YXRlID09PSAncmVtb3ZlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZSgpLCB0aGlzLm9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0KTtcbiAgICB0aGlzLm9wdGlvbnMudGltZU91dCA9ICt0aGlzLm9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0O1xuICAgIHRoaXMuaGlkZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHRoaXMub3B0aW9ucy50aW1lT3V0O1xuICAgIHRoaXMud2lkdGggPSAxMDA7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0Jhcikge1xuICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVQcm9ncmVzcygpLCAxMCk7XG4gICAgfVxuICB9XG59XG4iXX0=