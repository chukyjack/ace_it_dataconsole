/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ContentChildren, QueryList, Input, EventEmitter, Output } from '@angular/core';
import { ScrollSpyLinkDirective } from './scroll-spy-link.directive';
import { ScrollSpyService } from './scroll-spy.service';
import { distinctUntilChanged } from 'rxjs/operators';
var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(scrollSpyService) {
        this.scrollSpyService = scrollSpyService;
        this.activeLinkChange = new EventEmitter();
    }
    Object.defineProperty(ScrollSpyDirective.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} newId
         * @return {?}
         */
        function (newId) {
            if (newId) {
                this._id = newId;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ScrollSpyDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.activeSub = this.scrollSpyService.active$
            .pipe(distinctUntilChanged())
            .subscribe((/**
         * @param {?} activeLink
         * @return {?}
         */
        function (activeLink) {
            _this.activeLinkChange.emit(activeLink);
        }));
    };
    /**
     * @return {?}
     */
    ScrollSpyDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.scrollSpyService.addScrollSpy({ id: this.id, links: this.links });
    };
    /**
     * @return {?}
     */
    ScrollSpyDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.scrollSpyService.removeScrollSpy(this.id);
        this.activeSub.unsubscribe();
    };
    ScrollSpyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbScrollSpy]'
                },] }
    ];
    /** @nocollapse */
    ScrollSpyDirective.ctorParameters = function () { return [
        { type: ScrollSpyService }
    ]; };
    ScrollSpyDirective.propDecorators = {
        links: [{ type: ContentChildren, args: [ScrollSpyLinkDirective, { descendants: true },] }],
        id: [{ type: Input, args: ['mdbScrollSpy',] }],
        activeLinkChange: [{ type: Output }]
    };
    return ScrollSpyDirective;
}());
export { ScrollSpyDirective };
if (false) {
    /** @type {?} */
    ScrollSpyDirective.prototype.links;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyDirective.prototype._id;
    /** @type {?} */
    ScrollSpyDirective.prototype.activeLinkChange;
    /** @type {?} */
    ScrollSpyDirective.prototype.activeSub;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyDirective.prototype.scrollSpyService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Njcm9sbC1zcHkvc2Nyb2xsLXNweS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUVmLFNBQVMsRUFDVCxLQUFLLEVBR0wsWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRDtJQXdCRSw0QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFKNUMscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFLeEUsQ0FBQztJQWxCRCxzQkFDSSxrQ0FBRTs7OztRQUROO1lBRUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2xCLENBQUM7Ozs7O1FBRUQsVUFBTyxLQUFhO1lBQ2xCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQzs7O09BTkE7Ozs7SUFpQkQscUNBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPO2FBQzNDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQzVCLFNBQVM7Ozs7UUFBQyxVQUFDLFVBQVU7WUFDcEIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCwrQ0FBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFOTyxnQkFBZ0I7Ozt3QkFRckIsZUFBZSxTQUFDLHNCQUFzQixFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQztxQkFHM0QsS0FBSyxTQUFDLGNBQWM7bUNBYXBCLE1BQU07O0lBdUJULHlCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0F4Q1ksa0JBQWtCOzs7SUFDN0IsbUNBQ3lDOzs7OztJQWF6QyxpQ0FBb0I7O0lBRXBCLDhDQUF3RTs7SUFFeEUsdUNBQXdCOzs7OztJQUVaLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBRdWVyeUxpc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Njcm9sbFNweUxpbmtEaXJlY3RpdmV9IGZyb20gJy4vc2Nyb2xsLXNweS1saW5rLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1Njcm9sbFNweVNlcnZpY2V9IGZyb20gJy4vc2Nyb2xsLXNweS5zZXJ2aWNlJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWR9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlNjcm9sbFNweV0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNweURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZHJlbihTY3JvbGxTcHlMaW5rRGlyZWN0aXZlLCB7ZGVzY2VuZGFudHM6IHRydWV9KVxuICBsaW5rczogUXVlcnlMaXN0PFNjcm9sbFNweUxpbmtEaXJlY3RpdmU+O1xuXG4gIEBJbnB1dCgnbWRiU2Nyb2xsU3B5JylcbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgc2V0IGlkKG5ld0lkOiBzdHJpbmcpIHtcbiAgICBpZiAobmV3SWQpIHtcbiAgICAgIHRoaXMuX2lkID0gbmV3SWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcblxuICBAT3V0cHV0KCkgYWN0aXZlTGlua0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBhY3RpdmVTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcm9sbFNweVNlcnZpY2U6IFNjcm9sbFNweVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWN0aXZlU3ViID0gdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLmFjdGl2ZSRcbiAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXG4gICAgICAuc3Vic2NyaWJlKChhY3RpdmVMaW5rKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlTGlua0NoYW5nZS5lbWl0KGFjdGl2ZUxpbmspO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLmFkZFNjcm9sbFNweSh7aWQ6IHRoaXMuaWQsIGxpbmtzOiB0aGlzLmxpbmtzfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnNjcm9sbFNweVNlcnZpY2UucmVtb3ZlU2Nyb2xsU3B5KHRoaXMuaWQpO1xuICAgIHRoaXMuYWN0aXZlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==