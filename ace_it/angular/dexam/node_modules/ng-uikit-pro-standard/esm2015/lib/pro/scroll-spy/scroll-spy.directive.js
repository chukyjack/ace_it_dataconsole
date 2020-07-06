/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ContentChildren, QueryList, Input, EventEmitter, Output } from '@angular/core';
import { ScrollSpyLinkDirective } from './scroll-spy-link.directive';
import { ScrollSpyService } from './scroll-spy.service';
import { distinctUntilChanged } from 'rxjs/operators';
export class ScrollSpyDirective {
    /**
     * @param {?} scrollSpyService
     */
    constructor(scrollSpyService) {
        this.scrollSpyService = scrollSpyService;
        this.activeLinkChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} newId
     * @return {?}
     */
    set id(newId) {
        if (newId) {
            this._id = newId;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activeSub = this.scrollSpyService.active$
            .pipe(distinctUntilChanged())
            .subscribe((/**
         * @param {?} activeLink
         * @return {?}
         */
        (activeLink) => {
            this.activeLinkChange.emit(activeLink);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.scrollSpyService.addScrollSpy({ id: this.id, links: this.links });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.scrollSpyService.removeScrollSpy(this.id);
        this.activeSub.unsubscribe();
    }
}
ScrollSpyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbScrollSpy]'
            },] }
];
/** @nocollapse */
ScrollSpyDirective.ctorParameters = () => [
    { type: ScrollSpyService }
];
ScrollSpyDirective.propDecorators = {
    links: [{ type: ContentChildren, args: [ScrollSpyLinkDirective, { descendants: true },] }],
    id: [{ type: Input, args: ['mdbScrollSpy',] }],
    activeLinkChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Njcm9sbC1zcHkvc2Nyb2xsLXNweS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUVmLFNBQVMsRUFDVCxLQUFLLEVBR0wsWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQU1wRCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBcUI3QixZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUo1QyxxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUt4RSxDQUFDOzs7O0lBbEJELElBQ0ksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELElBQUksRUFBRSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7SUFXRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTzthQUMzQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUM1QixTQUFTOzs7O1FBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFOTyxnQkFBZ0I7OztvQkFRckIsZUFBZSxTQUFDLHNCQUFzQixFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQztpQkFHM0QsS0FBSyxTQUFDLGNBQWM7K0JBYXBCLE1BQU07Ozs7SUFoQlAsbUNBQ3lDOzs7OztJQWF6QyxpQ0FBb0I7O0lBRXBCLDhDQUF3RTs7SUFFeEUsdUNBQXdCOzs7OztJQUVaLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBRdWVyeUxpc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Njcm9sbFNweUxpbmtEaXJlY3RpdmV9IGZyb20gJy4vc2Nyb2xsLXNweS1saW5rLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1Njcm9sbFNweVNlcnZpY2V9IGZyb20gJy4vc2Nyb2xsLXNweS5zZXJ2aWNlJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWR9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlNjcm9sbFNweV0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNweURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZHJlbihTY3JvbGxTcHlMaW5rRGlyZWN0aXZlLCB7ZGVzY2VuZGFudHM6IHRydWV9KVxuICBsaW5rczogUXVlcnlMaXN0PFNjcm9sbFNweUxpbmtEaXJlY3RpdmU+O1xuXG4gIEBJbnB1dCgnbWRiU2Nyb2xsU3B5JylcbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgc2V0IGlkKG5ld0lkOiBzdHJpbmcpIHtcbiAgICBpZiAobmV3SWQpIHtcbiAgICAgIHRoaXMuX2lkID0gbmV3SWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcblxuICBAT3V0cHV0KCkgYWN0aXZlTGlua0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBhY3RpdmVTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcm9sbFNweVNlcnZpY2U6IFNjcm9sbFNweVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWN0aXZlU3ViID0gdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLmFjdGl2ZSRcbiAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXG4gICAgICAuc3Vic2NyaWJlKChhY3RpdmVMaW5rKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlTGlua0NoYW5nZS5lbWl0KGFjdGl2ZUxpbmspO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLmFkZFNjcm9sbFNweSh7aWQ6IHRoaXMuaWQsIGxpbmtzOiB0aGlzLmxpbmtzfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnNjcm9sbFNweVNlcnZpY2UucmVtb3ZlU2Nyb2xsU3B5KHRoaXMuaWQpO1xuICAgIHRoaXMuYWN0aXZlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==