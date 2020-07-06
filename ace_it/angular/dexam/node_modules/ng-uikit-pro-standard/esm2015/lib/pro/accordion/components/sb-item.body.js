/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { RouterLinkWithHref } from '@angular/router';
import { window } from '../../../free/utils/facade/browser';
/**
 * @record
 */
export function IAccordionAnimationState() { }
if (false) {
    /** @type {?} */
    IAccordionAnimationState.prototype.state;
    /** @type {?} */
    IAccordionAnimationState.prototype.accordionEl;
}
export class SBItemBodyComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.animationStateChange = new EventEmitter();
        this.height = '0';
        this.expandAnimationState = 'collapsed';
        this.id = `mdb-accordion-`;
        this.ariaLabelledBy = '';
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    toggle(collapsed) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            collapsed ? this.expandAnimationState = 'collapsed' : this.expandAnimationState = 'expanded';
        }), 0);
    }
    /**
     * @return {?}
     */
    animationCallback() {
        this.animationStateChange.emit({
            state: this.expandAnimationState,
            accordionEl: this.el.nativeElement.parentElement.parentElement
        });
    }
    /**
     * @return {?}
     */
    openSidenavOnActiveLink() {
        /** @type {?} */
        const pathStrategyUrl = window.location.pathname;
        /** @type {?} */
        const hashStrategyUrl = window.location.hash;
        /** @type {?} */
        const activeLink = this.routerLinks.find((/**
         * @param {?} link
         * @return {?}
         */
        (link) => {
            return link.href === pathStrategyUrl || link.href === hashStrategyUrl;
        }));
        if (activeLink) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.expandAnimationState = 'expanded';
            }), 40);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.openSidenavOnActiveLink();
    }
}
SBItemBodyComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemBody',
                selector: 'mdb-item-body, mdb-accordion-item-body',
                template: "<div #body class=\"sb-item-body\"\n     [style.height]=\"height\"\n     (@expandBody.done)=\"animationCallback()\"\n     [@expandBody]=\"expandAnimationState\"\n     [id]=\"id\"\n     role=\"region\"\n     [attr.aria-labelledby]=\"ariaLabelledBy\">\n    <div class=\"card-body {{ customClass }}\">\n    \t<ng-content></ng-content>\n    </div>\n</div>\n",
                animations: [
                    trigger('expandBody', [
                        state('collapsed', style({ height: '0px', visibility: 'hidden' })),
                        state('expanded', style({ height: '*', visibility: 'visible' })),
                        transition('expanded <=> collapsed', animate('500ms ease')),
                    ])
                ]
            }] }
];
/** @nocollapse */
SBItemBodyComponent.ctorParameters = () => [
    { type: ElementRef }
];
SBItemBodyComponent.propDecorators = {
    customClass: [{ type: Input }],
    animationStateChange: [{ type: Output }],
    routerLinks: [{ type: ContentChildren, args: [RouterLinkWithHref,] }],
    bodyEl: [{ type: ViewChild, args: ['body',] }]
};
if (false) {
    /** @type {?} */
    SBItemBodyComponent.prototype.customClass;
    /** @type {?} */
    SBItemBodyComponent.prototype.animationStateChange;
    /** @type {?} */
    SBItemBodyComponent.prototype.routerLinks;
    /** @type {?} */
    SBItemBodyComponent.prototype.height;
    /** @type {?} */
    SBItemBodyComponent.prototype.expandAnimationState;
    /** @type {?} */
    SBItemBodyComponent.prototype.id;
    /** @type {?} */
    SBItemBodyComponent.prototype.ariaLabelledBy;
    /** @type {?} */
    SBItemBodyComponent.prototype.bodyEl;
    /**
     * @type {?}
     * @private
     */
    SBItemBodyComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUVmLFNBQVMsRUFDVCxNQUFNLEVBQUUsWUFBWSxFQUNyQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQUUxRCw4Q0FHQzs7O0lBRkMseUNBQWM7O0lBQ2QsK0NBQXVCOztBQWV6QixNQUFNLE9BQU8sbUJBQW1COzs7O0lBYTlCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBWHhCLHlCQUFvQixHQUEyQyxJQUFJLFlBQVksRUFBNEIsQ0FBQztRQUcvRyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLHlCQUFvQixHQUFHLFdBQVcsQ0FBQztRQUU1QixPQUFFLEdBQUcsZ0JBQWdCLENBQUM7UUFDN0IsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFLcEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsU0FBa0I7UUFDdkIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO1FBQy9GLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1lBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBQ2hDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYTtTQUMvRCxDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsdUJBQXVCOztjQUNmLGVBQWUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVE7O2NBQzFDLGVBQWUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUk7O2NBRXRDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQ3JELE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUM7UUFDeEUsQ0FBQyxFQUFDO1FBRUYsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQztZQUN6QyxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7U0FDUjtJQUNILENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLHdDQUF3QztnQkFDbEQsNFdBQWdDO2dCQUNoQyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTt3QkFDcEIsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO3dCQUNoRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7d0JBQzlELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQzVELENBQUM7aUJBQ0g7YUFDRjs7OztZQTVCQyxVQUFVOzs7MEJBOEJULEtBQUs7bUNBQ0wsTUFBTTswQkFDTixlQUFlLFNBQUMsa0JBQWtCO3FCQVFsQyxTQUFTLFNBQUMsTUFBTTs7OztJQVZqQiwwQ0FBNkI7O0lBQzdCLG1EQUFzSDs7SUFDdEgsMENBQWdGOztJQUVoRixxQ0FBb0I7O0lBQ3BCLG1EQUFtQzs7SUFFbkMsaUNBQTZCOztJQUM3Qiw2Q0FBb0I7O0lBRXBCLHFDQUFzQzs7Ozs7SUFFMUIsaUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3N0YXRlLCBzdHlsZSwgdHJpZ2dlciwgdHJhbnNpdGlvbiwgYW5pbWF0ZX0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1JvdXRlckxpbmtXaXRoSHJlZn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7d2luZG93fSBmcm9tICcuLi8uLi8uLi9mcmVlL3V0aWxzL2ZhY2FkZS9icm93c2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBJQWNjb3JkaW9uQW5pbWF0aW9uU3RhdGUge1xuICBzdGF0ZTogc3RyaW5nLFxuICBhY2NvcmRpb25FbDogRWxlbWVudFJlZlxufVxuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzYkl0ZW1Cb2R5JyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbS1ib2R5LCBtZGItYWNjb3JkaW9uLWl0ZW0tYm9keScsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5ib2R5Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZXhwYW5kQm9keScsIFtcbiAgICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7aGVpZ2h0OiAnMHB4JywgdmlzaWJpbGl0eTogJ2hpZGRlbid9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJ30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCc1MDBtcyBlYXNlJykpLFxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU0JJdGVtQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uU3RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJQWNjb3JkaW9uQW5pbWF0aW9uU3RhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxJQWNjb3JkaW9uQW5pbWF0aW9uU3RhdGU+KCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGlua1dpdGhIcmVmKSByb3V0ZXJMaW5rczogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XG5cbiAgcHVibGljIGhlaWdodCA9ICcwJztcbiAgZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJztcblxuICBwdWJsaWMgaWQgPSBgbWRiLWFjY29yZGlvbi1gO1xuICBhcmlhTGFiZWxsZWRCeSA9ICcnO1xuXG4gIEBWaWV3Q2hpbGQoJ2JvZHknKSBib2R5RWw6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgdG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29sbGFwc2VkID8gdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnIDogdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgfSwgMCk7XG4gIH1cblxuICBhbmltYXRpb25DYWxsYmFjaygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlLmVtaXQoe1xuICAgICAgICBzdGF0ZTogdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSxcbiAgICAgICAgYWNjb3JkaW9uRWw6IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgb3BlblNpZGVuYXZPbkFjdGl2ZUxpbmsoKSB7XG4gICAgY29uc3QgcGF0aFN0cmF0ZWd5VXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGNvbnN0IGhhc2hTdHJhdGVneVVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gICAgY29uc3QgYWN0aXZlTGluayA9IHRoaXMucm91dGVyTGlua3MuZmluZCgobGluazogYW55KSA9PiB7XG4gICAgICByZXR1cm4gbGluay5ocmVmID09PSBwYXRoU3RyYXRlZ3lVcmwgfHwgbGluay5ocmVmID09PSBoYXNoU3RyYXRlZ3lVcmw7XG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlTGluaykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnO1xuICAgICAgfSwgNDApO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLm9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKCk7XG4gIH1cblxufVxuIl19