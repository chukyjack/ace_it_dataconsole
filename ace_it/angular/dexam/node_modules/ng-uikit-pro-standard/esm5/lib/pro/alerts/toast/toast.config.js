/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * Configuration for an individual toast.
 * @record
 */
export function IndividualConfig() { }
if (false) {
    /**
     * toast time to live in milliseconds
     * default: 5000
     * @type {?|undefined}
     */
    IndividualConfig.prototype.timeOut;
    /**
     * toast show close button
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.closeButton;
    /**
     * show toast progress bar
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.extendedTimeOut;
    /**
     * show toast progress bar
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.progressBar;
    /**
     * render html in toast message (possibly unsafe)
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.enableHtml;
    /**
     * css class on toast component
     * default: toast
     * @type {?|undefined}
     */
    IndividualConfig.prototype.toastClass;
    /**
     * css class on toast container
     * default: toast-top-right
     * @type {?|undefined}
     */
    IndividualConfig.prototype.positionClass;
    /**
     * css class on to toast title
     * default: toast-title
     * @type {?|undefined}
     */
    IndividualConfig.prototype.titleClass;
    /**
     * css class on to toast title
     * default: toast-title
     * @type {?|undefined}
     */
    IndividualConfig.prototype.messageClass;
    /**
     * clicking on toast dismisses it
     * default: true
     * @type {?|undefined}
     */
    IndividualConfig.prototype.tapToDismiss;
    /**
     * Angular toast component to be shown
     * default: Toast
     * @type {?|undefined}
     */
    IndividualConfig.prototype.toastComponent;
    /**
     * Helps show toast from a websocket or from event outside Angular
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.onActivateTick;
    /**
     * actionButton - Field will create action button in toast, and assing parameter's value as button text
     * @type {?|undefined}
     */
    IndividualConfig.prototype.actionButton;
    /**
     * - Adds class to the toast action button
     * @type {?|undefined}
     */
    IndividualConfig.prototype.actionButtonClass;
    /** @type {?|undefined} */
    IndividualConfig.prototype.opacity;
}
/**
 * @record
 */
export function ToastIconClasses() { }
if (false) {
    /** @type {?|undefined} */
    ToastIconClasses.prototype.error;
    /** @type {?|undefined} */
    ToastIconClasses.prototype.info;
    /** @type {?|undefined} */
    ToastIconClasses.prototype.success;
    /** @type {?|undefined} */
    ToastIconClasses.prototype.warning;
}
// WARNING: interface has both a type and a value, skipping emit
/**
 * Remove warning message from angular-cli
 */
var /**
 * Remove warning message from angular-cli
 */
GlobalConfig = /** @class */ (function () {
    function GlobalConfig() {
    }
    return GlobalConfig;
}());
/**
 * Remove warning message from angular-cli
 */
export { GlobalConfig };
/**
 * Everything a toast needs to launch
 */
var /**
 * Everything a toast needs to launch
 */
ToastPackage = /** @class */ (function () {
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
    }
    /** Fired on click */
    /**
     * Fired on click
     * @return {?}
     */
    ToastPackage.prototype.triggerTap = /**
     * Fired on click
     * @return {?}
     */
    function () {
        this._onTap.next();
        this._onTap.complete();
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onTap = /**
     * @return {?}
     */
    function () {
        return this._onTap.asObservable();
    };
    /** available for use in custom toast */
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    ToastPackage.prototype.triggerAction = /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        this._onAction.next(action);
        this._onAction.complete();
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onAction = /**
     * @return {?}
     */
    function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());
/**
 * Everything a toast needs to launch
 */
export { ToastPackage };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastPackage.prototype._onTap;
    /**
     * @type {?}
     * @private
     */
    ToastPackage.prototype._onAction;
    /** @type {?} */
    ToastPackage.prototype.toastId;
    /** @type {?} */
    ToastPackage.prototype.config;
    /** @type {?} */
    ToastPackage.prototype.message;
    /** @type {?} */
    ToastPackage.prototype.title;
    /** @type {?} */
    ToastPackage.prototype.toastType;
    /** @type {?} */
    ToastPackage.prototype.toastRef;
}
/** @type {?} */
export var tsConfig = {
    serviceInstance: new Object()
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFRNUMsc0NBeUVBOzs7Ozs7O0lBbkVDLG1DQUF1Qjs7Ozs7O0lBS3ZCLHVDQUFzQjs7Ozs7O0lBT3RCLDJDQUErQjs7Ozs7O0lBSy9CLHVDQUFzQjs7Ozs7O0lBS3RCLHNDQUFxQjs7Ozs7O0lBS3JCLHNDQUFvQjs7Ozs7O0lBS3BCLHlDQUE2Qjs7Ozs7O0lBSzdCLHNDQUFvQjs7Ozs7O0lBS3BCLHdDQUFzQjs7Ozs7O0lBS3RCLHdDQUF1Qjs7Ozs7O0lBS3ZCLDBDQUEwQzs7Ozs7O0lBSzFDLDBDQUF5Qjs7Ozs7SUFJekIsd0NBQXNCOzs7OztJQUl0Qiw2Q0FBMkI7O0lBQzNCLG1DQUFpQjs7Ozs7QUFHbkIsc0NBS0M7OztJQUpDLGlDQUFlOztJQUNmLGdDQUFjOztJQUNkLG1DQUFpQjs7SUFDakIsbUNBQWlCOzs7Ozs7QUFtQ25COzs7O0lBQUE7SUFBMkIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUE1QixJQUE0Qjs7Ozs7Ozs7QUFJNUI7Ozs7SUFJRSxzQkFDUyxPQUFlLEVBQ2YsTUFBd0IsRUFDeEIsT0FBMEIsRUFDMUIsS0FBYSxFQUNiLFNBQWlCLEVBQ2pCLFFBQXVCO1FBTHZCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBVHhCLFdBQU0sR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNyQyxjQUFTLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUFTNUMsQ0FBQztJQUVMLHFCQUFxQjs7Ozs7SUFDckIsaUNBQVU7Ozs7SUFBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsNEJBQUs7OztJQUFMO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCx3Q0FBd0M7Ozs7OztJQUN4QyxvQ0FBYTs7Ozs7SUFBYixVQUFjLE1BQVk7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsK0JBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFSCxtQkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7Ozs7Ozs7Ozs7SUFoQ0MsOEJBQTZDOzs7OztJQUM3QyxpQ0FBZ0Q7O0lBRzlDLCtCQUFzQjs7SUFDdEIsOEJBQStCOztJQUMvQiwrQkFBaUM7O0lBQ2pDLDZCQUFvQjs7SUFDcEIsaUNBQXdCOztJQUN4QixnQ0FBOEI7OztBQTBCbEMsTUFBTSxLQUFPLFFBQVEsR0FBRztJQUN0QixlQUFlLEVBQUUsSUFBSSxNQUFNLEVBQUU7Q0FDOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpuby1pbmZlcnJhYmxlLXR5cGVzICovXG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBTdWJqZWN0ICwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LmluamVjdG9yJztcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciBhbiBpbmRpdmlkdWFsIHRvYXN0LlxuICovXG4gZXhwb3J0IGludGVyZmFjZSBJbmRpdmlkdWFsQ29uZmlnIHtcbiAgLyoqXG4gICogdG9hc3QgdGltZSB0byBsaXZlIGluIG1pbGxpc2Vjb25kc1xuICAqIGRlZmF1bHQ6IDUwMDBcbiAgKi9cbiAgLy8gdGltZU91dD86IG51bWJlcjtcbiAgdGltZU91dD86IG51bWJlciB8IGFueTtcbiAgLyoqXG4gICogdG9hc3Qgc2hvdyBjbG9zZSBidXR0b25cbiAgKiBkZWZhdWx0OiBmYWxzZVxuICAqL1xuICBjbG9zZUJ1dHRvbj86IGJvb2xlYW47XG4gIC8qKiB0aW1lIHRvIGNsb3NlIGFmdGVyIGEgdXNlciBob3ZlcnMgb3ZlciB0b2FzdCAqL1xuICAvKipcbiAgICogc2hvdyB0b2FzdCBwcm9ncmVzcyBiYXJcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIC8vIGV4dGVuZGVkVGltZU91dD86IG51bWJlcjtcbiAgZXh0ZW5kZWRUaW1lT3V0PzogbnVtYmVyIHwgYW55O1xuICAvKipcbiAgICogc2hvdyB0b2FzdCBwcm9ncmVzcyBiYXJcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHByb2dyZXNzQmFyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHJlbmRlciBodG1sIGluIHRvYXN0IG1lc3NhZ2UgKHBvc3NpYmx5IHVuc2FmZSlcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIGVuYWJsZUh0bWw/OiBib29sZWFuO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IGNvbXBvbmVudFxuICAgKiBkZWZhdWx0OiB0b2FzdFxuICAgKi9cbiAgdG9hc3RDbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0b2FzdCBjb250YWluZXJcbiAgICogZGVmYXVsdDogdG9hc3QtdG9wLXJpZ2h0XG4gICAqL1xuICBwb3NpdGlvbkNsYXNzPzogc3RyaW5nIHwgYW55O1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvIHRvYXN0IHRpdGxlXG4gICAqIGRlZmF1bHQ6IHRvYXN0LXRpdGxlXG4gICAqL1xuICB0aXRsZUNsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvIHRvYXN0IHRpdGxlXG4gICAqIGRlZmF1bHQ6IHRvYXN0LXRpdGxlXG4gICAqL1xuICBtZXNzYWdlQ2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjbGlja2luZyBvbiB0b2FzdCBkaXNtaXNzZXMgaXRcbiAgICogZGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgdGFwVG9EaXNtaXNzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEFuZ3VsYXIgdG9hc3QgY29tcG9uZW50IHRvIGJlIHNob3duXG4gICAqIGRlZmF1bHQ6IFRvYXN0XG4gICAqL1xuICB0b2FzdENvbXBvbmVudD86IENvbXBvbmVudFR5cGU8YW55PiB8IGFueTtcbiAgLyoqXG4gICAqIEhlbHBzIHNob3cgdG9hc3QgZnJvbSBhIHdlYnNvY2tldCBvciBmcm9tIGV2ZW50IG91dHNpZGUgQW5ndWxhclxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgb25BY3RpdmF0ZVRpY2s/OiBib29sZWFuO1xuICAvKipcbiAgICogYWN0aW9uQnV0dG9uIC0gRmllbGQgd2lsbCBjcmVhdGUgYWN0aW9uIGJ1dHRvbiBpbiB0b2FzdCwgYW5kIGFzc2luZyBwYXJhbWV0ZXIncyB2YWx1ZSBhcyBidXR0b24gdGV4dFxuICAgKi9cbiAgYWN0aW9uQnV0dG9uPzogc3RyaW5nO1xuICAvKipcbiAgICogLSBBZGRzIGNsYXNzIHRvIHRoZSB0b2FzdCBhY3Rpb24gYnV0dG9uXG4gICAqL1xuICBhY3Rpb25CdXR0b25DbGFzcz86IHN0cmluZztcbiAgb3BhY2l0eT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdEljb25DbGFzc2VzIHtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGluZm8/OiBzdHJpbmc7XG4gIHN1Y2Nlc3M/OiBzdHJpbmc7XG4gIHdhcm5pbmc/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogR2xvYmFsIFRvYXN0IGNvbmZpZ3VyYXRpb25cbiAqIEluY2x1ZGVzIGFsbCBJbmRpdmlkdWFsQ29uZmlnXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsQ29uZmlnIGV4dGVuZHMgSW5kaXZpZHVhbENvbmZpZyB7XG4gIC8qKlxuICAgKiBtYXggdG9hc3RzIG9wZW5lZC4gVG9hc3RzIHdpbGwgYmUgcXVldWVkXG4gICAqIFplcm8gaXMgdW5saW1pdGVkXG4gICAqIGRlZmF1bHQ6IDBcbiAgICovXG4gIG1heE9wZW5lZD86IG51bWJlcjtcbiAgLyoqXG4gICAqIGRpc21pc3MgY3VycmVudCB0b2FzdCB3aGVuIG1heCBpcyByZWFjaGVkXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBhdXRvRGlzbWlzcz86IGJvb2xlYW47XG4gIGljb25DbGFzc2VzPzogVG9hc3RJY29uQ2xhc3NlcztcbiAgLyoqXG4gICAqIE5ldyB0b2FzdCBwbGFjZW1lbnRcbiAgICogZGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgbmV3ZXN0T25Ub3A/OiBib29sZWFuO1xuICAvKipcbiAgICogYmxvY2sgZHVwbGljYXRlIG1lc3NhZ2VzXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBwcmV2ZW50RHVwbGljYXRlcz86IGJvb2xlYW47XG4gIG9wYWNpdHk/OiBudW1iZXI7XG59XG4vKipcbiAqIFJlbW92ZSB3YXJuaW5nIG1lc3NhZ2UgZnJvbSBhbmd1bGFyLWNsaVxuICovXG5leHBvcnQgY2xhc3MgR2xvYmFsQ29uZmlnIHt9XG4vKipcbiAqIEV2ZXJ5dGhpbmcgYSB0b2FzdCBuZWVkcyB0byBsYXVuY2hcbiAqL1xuZXhwb3J0IGNsYXNzIFRvYXN0UGFja2FnZSB7XG4gIHByaXZhdGUgX29uVGFwOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF9vbkFjdGlvbjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdG9hc3RJZDogbnVtYmVyLFxuICAgIHB1YmxpYyBjb25maWc6IEluZGl2aWR1YWxDb25maWcsXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyB8IFNhZmVIdG1sLFxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0b2FzdFR5cGU6IHN0cmluZyxcbiAgICBwdWJsaWMgdG9hc3RSZWY6IFRvYXN0UmVmPGFueT4sXG4gICkgeyB9XG5cbiAgLyoqIEZpcmVkIG9uIGNsaWNrICovXG4gIHRyaWdnZXJUYXAoKSB7XG4gICAgdGhpcy5fb25UYXAubmV4dCgpO1xuICAgIHRoaXMuX29uVGFwLmNvbXBsZXRlKCk7XG4gIH1cblxuICBvblRhcCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9vblRhcC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiBhdmFpbGFibGUgZm9yIHVzZSBpbiBjdXN0b20gdG9hc3QgKi9cbiAgdHJpZ2dlckFjdGlvbihhY3Rpb24/OiBhbnkpIHtcbiAgICB0aGlzLl9vbkFjdGlvbi5uZXh0KGFjdGlvbik7XG4gICAgdGhpcy5fb25BY3Rpb24uY29tcGxldGUoKTtcbiAgfVxuXG4gIG9uQWN0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX29uQWN0aW9uLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbn1cblxuXG5leHBvcnQgY29uc3QgdHNDb25maWcgPSB7XG4gIHNlcnZpY2VJbnN0YW5jZTogbmV3IE9iamVjdCgpXG59O1xuIl19