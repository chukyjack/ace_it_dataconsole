/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
export function ComponentType() { }
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
export class ComponentPortal {
    /**
     * @param {?} component
     * @param {?} injector
     */
    constructor(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    attach(host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    }
    /**
     * Detach this portal from its host
     * @return {?}
     */
    detach() {
        /** @type {?} */
        const host = this._attachedHost;
        this._attachedHost = null;
        return host.detach();
    }
    /**
     * Whether this portal is attached to a host.
     * @return {?}
     */
    get isAttached() {
        return this._attachedHost != null;
    }
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    // setAttachedHost(host: BasePortalHost) {
    setAttachedHost(host) {
        this._attachedHost = host;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentPortal.prototype._attachedHost;
    /**
     * The type of the component that will be instantiated for attachment.
     * @type {?}
     */
    ComponentPortal.prototype.component;
    /**
     * [Optional] Where the attached component should live in Angular's *logical* component tree.
     * This is different from where the component *renders*, which is determined by the PortalHost.
     * The origin necessary when the host is outside of the Angular application context.
     * @type {?}
     */
    ComponentPortal.prototype.viewContainerRef;
    /**
     * Injector used for the instantiation of the component.
     * @type {?}
     */
    ComponentPortal.prototype.injector;
}
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
export class BasePortalHost {
    constructor() {
        this.setToNullValue = null;
    }
    /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    attach(portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    }
    /**
     * @return {?}
     */
    detach() {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
        }
        this._attachedPortal = null;
        if (this._disposeFn != null) {
            this._disposeFn();
            // this._disposeFn = null;
            this._disposeFn = this.setToNullValue;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    setDisposeFn(fn) {
        this._disposeFn = fn;
    }
}
if (false) {
    /** @type {?} */
    BasePortalHost.prototype.setToNullValue;
    /**
     * The portal currently attached to the host.
     * @type {?}
     * @private
     */
    BasePortalHost.prototype._attachedPortal;
    /**
     * A function that will permanently dispose this host.
     * @type {?}
     * @private
     */
    BasePortalHost.prototype._disposeFn;
    /**
     * @abstract
     * @template T
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    BasePortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvcG9ydGFsL3BvcnRhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BLG1DQUVDOzs7OztBQU1ELE1BQU0sT0FBTyxlQUFlOzs7OztJQWdCMUIsWUFBWSxTQUEyQixFQUFFLFFBQWtCO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFHRCxNQUFNLENBQUMsSUFBb0IsRUFBRSxXQUFvQjtRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBR0QsTUFBTTs7Y0FDRSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWE7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFHRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDO0lBQ3BDLENBQUM7Ozs7Ozs7O0lBT0MsZUFBZSxDQUFDLElBQW9CO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7Ozs7O0lBN0NDLHdDQUE0Qzs7Ozs7SUFFNUMsb0NBQTRCOzs7Ozs7O0lBTzVCLDJDQUFtQzs7Ozs7SUFHbkMsbUNBQW1COzs7Ozs7O0FBdUNyQixNQUFNLE9BQWdCLGNBQWM7SUFBcEM7UUFDUyxtQkFBYyxHQUFRLElBQUksQ0FBQztJQThCcEMsQ0FBQzs7Ozs7O0lBckJDLE1BQU0sQ0FBQyxNQUE0QixFQUFFLFdBQW9CO1FBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBSUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUU7UUFFekUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEVBQWM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNGOzs7SUE5QkMsd0NBQWtDOzs7Ozs7SUFHbEMseUNBQW9EOzs7Ozs7SUFJcEQsb0NBQXFDOzs7Ozs7OztJQU9yQyxvRkFBcUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIEluamVjdG9yXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudFR5cGU8VD4ge1xuICBuZXcgKC4uLmFyZ3M6IGFueVtdKTogVDtcbn1cblxuXG4vKipcbiAqIEEgYENvbXBvbmVudFBvcnRhbGAgaXMgYSBwb3J0YWwgdGhhdCBpbnN0YW50aWF0ZXMgc29tZSBDb21wb25lbnQgdXBvbiBhdHRhY2htZW50LlxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9ydGFsPFQ+IHtcbiAgLy8gcHJpdmF0ZSBfYXR0YWNoZWRIb3N0OiBCYXNlUG9ydGFsSG9zdDtcbiAgcHJpdmF0ZSBfYXR0YWNoZWRIb3N0OiBCYXNlUG9ydGFsSG9zdCB8IGFueTtcbiAgLyoqIFRoZSB0eXBlIG9mIHRoZSBjb21wb25lbnQgdGhhdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBmb3IgYXR0YWNobWVudC4gKi9cbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+O1xuXG4gIC8qKlxuICAgKiBbT3B0aW9uYWxdIFdoZXJlIHRoZSBhdHRhY2hlZCBjb21wb25lbnQgc2hvdWxkIGxpdmUgaW4gQW5ndWxhcidzICpsb2dpY2FsKiBjb21wb25lbnQgdHJlZS5cbiAgICogVGhpcyBpcyBkaWZmZXJlbnQgZnJvbSB3aGVyZSB0aGUgY29tcG9uZW50ICpyZW5kZXJzKiwgd2hpY2ggaXMgZGV0ZXJtaW5lZCBieSB0aGUgUG9ydGFsSG9zdC5cbiAgICogVGhlIG9yaWdpbiBuZWNlc3Nhcnkgd2hlbiB0aGUgaG9zdCBpcyBvdXRzaWRlIG9mIHRoZSBBbmd1bGFyIGFwcGxpY2F0aW9uIGNvbnRleHQuXG4gICAqL1xuICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIC8qKiBJbmplY3RvciB1c2VkIGZvciB0aGUgaW5zdGFudGlhdGlvbiBvZiB0aGUgY29tcG9uZW50LiAqL1xuICBpbmplY3RvcjogSW5qZWN0b3I7XG5cbiAgY29uc3RydWN0b3IoY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB0aGlzLmluamVjdG9yID0gaW5qZWN0b3I7XG4gIH1cblxuICAvKiogQXR0YWNoIHRoaXMgcG9ydGFsIHRvIGEgaG9zdC4gKi9cbiAgYXR0YWNoKGhvc3Q6IEJhc2VQb3J0YWxIb3N0LCBuZXdlc3RPblRvcDogYm9vbGVhbikge1xuICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IGhvc3Q7XG4gICAgcmV0dXJuIGhvc3QuYXR0YWNoKHRoaXMsIG5ld2VzdE9uVG9wKTtcbiAgfVxuXG4gIC8qKiBEZXRhY2ggdGhpcyBwb3J0YWwgZnJvbSBpdHMgaG9zdCAqL1xuICBkZXRhY2goKTogdm9pZCB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuX2F0dGFjaGVkSG9zdDtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBudWxsO1xuICAgIHJldHVybiBob3N0LmRldGFjaCgpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhpcyBwb3J0YWwgaXMgYXR0YWNoZWQgdG8gYSBob3N0LiAqL1xuICBnZXQgaXNBdHRhY2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0YWNoZWRIb3N0ICE9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgUG9ydGFsSG9zdCByZWZlcmVuY2Ugd2l0aG91dCBwZXJmb3JtaW5nIGBhdHRhY2goKWAuIFRoaXMgaXMgdXNlZCBkaXJlY3RseSBieVxuICAgKiB0aGUgUG9ydGFsSG9zdCB3aGVuIGl0IGlzIHBlcmZvcm1pbmcgYW4gYGF0dGFjaCgpYCBvciBgZGV0YWNoKClgLlxuICAgKi9cbiAgLy8gc2V0QXR0YWNoZWRIb3N0KGhvc3Q6IEJhc2VQb3J0YWxIb3N0KSB7XG4gICAgc2V0QXR0YWNoZWRIb3N0KGhvc3Q6IEJhc2VQb3J0YWxIb3N0KTogYW55IHtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xuICB9XG59XG5cbi8qKlxuICogUGFydGlhbCBpbXBsZW1lbnRhdGlvbiBvZiBQb3J0YWxIb3N0IHRoYXQgb25seSBkZWFscyB3aXRoIGF0dGFjaGluZyBhXG4gKiBDb21wb25lbnRQb3J0YWxcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQb3J0YWxIb3N0IHtcbiAgcHVibGljIHNldFRvTnVsbFZhbHVlOiBhbnkgPSBudWxsO1xuICAvKiogVGhlIHBvcnRhbCBjdXJyZW50bHkgYXR0YWNoZWQgdG8gdGhlIGhvc3QuICovXG4gIC8vIHByaXZhdGUgX2F0dGFjaGVkUG9ydGFsOiBDb21wb25lbnRQb3J0YWw8YW55PjtcbiAgcHJpdmF0ZSBfYXR0YWNoZWRQb3J0YWw6IENvbXBvbmVudFBvcnRhbDxhbnk+IHwgYW55O1xuXG4gIC8qKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBwZXJtYW5lbnRseSBkaXNwb3NlIHRoaXMgaG9zdC4gKi9cbiAgLy8gcHJpdmF0ZSBfZGlzcG9zZUZuOiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9kaXNwb3NlRm46ICgpID0+IHZvaWQgfCBhbnk7XG5cbiAgYXR0YWNoKHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPGFueT4sIG5ld2VzdE9uVG9wOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYXR0YWNoZWRQb3J0YWwgPSBwb3J0YWw7XG4gICAgcmV0dXJuIHRoaXMuYXR0YWNoQ29tcG9uZW50UG9ydGFsKHBvcnRhbCwgbmV3ZXN0T25Ub3ApO1xuICB9XG5cbiAgYWJzdHJhY3QgYXR0YWNoQ29tcG9uZW50UG9ydGFsPFQ+KHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+LCBuZXdlc3RPblRvcDogYm9vbGVhbik6IENvbXBvbmVudFJlZjxUPjtcblxuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX2F0dGFjaGVkUG9ydGFsKSB7IHRoaXMuX2F0dGFjaGVkUG9ydGFsLnNldEF0dGFjaGVkSG9zdChudWxsKTsgfVxuXG4gICAgdGhpcy5fYXR0YWNoZWRQb3J0YWwgPSBudWxsO1xuICAgIGlmICh0aGlzLl9kaXNwb3NlRm4gIT0gbnVsbCkge1xuICAgICAgdGhpcy5fZGlzcG9zZUZuKCk7XG4gICAgICAvLyB0aGlzLl9kaXNwb3NlRm4gPSBudWxsO1xuICAgICAgdGhpcy5fZGlzcG9zZUZuID0gdGhpcy5zZXRUb051bGxWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBzZXREaXNwb3NlRm4oZm46ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9kaXNwb3NlRm4gPSBmbjtcbiAgfVxufVxuIl19