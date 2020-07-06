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
var SBItemBodyComponent = /** @class */ (function () {
    function SBItemBodyComponent(el) {
        this.el = el;
        this.animationStateChange = new EventEmitter();
        this.height = '0';
        this.expandAnimationState = 'collapsed';
        this.id = "mdb-accordion-";
        this.ariaLabelledBy = '';
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemBodyComponent.prototype.toggle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            collapsed ? _this.expandAnimationState = 'collapsed' : _this.expandAnimationState = 'expanded';
        }), 0);
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.animationCallback = /**
     * @return {?}
     */
    function () {
        this.animationStateChange.emit({
            state: this.expandAnimationState,
            accordionEl: this.el.nativeElement.parentElement.parentElement
        });
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.openSidenavOnActiveLink = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var pathStrategyUrl = window.location.pathname;
        /** @type {?} */
        var hashStrategyUrl = window.location.hash;
        /** @type {?} */
        var activeLink = this.routerLinks.find((/**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            return link.href === pathStrategyUrl || link.href === hashStrategyUrl;
        }));
        if (activeLink) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.expandAnimationState = 'expanded';
            }), 40);
        }
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.openSidenavOnActiveLink();
    };
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
    SBItemBodyComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SBItemBodyComponent.propDecorators = {
        customClass: [{ type: Input }],
        animationStateChange: [{ type: Output }],
        routerLinks: [{ type: ContentChildren, args: [RouterLinkWithHref,] }],
        bodyEl: [{ type: ViewChild, args: ['body',] }]
    };
    return SBItemBodyComponent;
}());
export { SBItemBodyComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUVmLFNBQVMsRUFDVCxNQUFNLEVBQUUsWUFBWSxFQUNyQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQUUxRCw4Q0FHQzs7O0lBRkMseUNBQWM7O0lBQ2QsK0NBQXVCOztBQUd6QjtJQXlCRSw2QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFYeEIseUJBQW9CLEdBQTJDLElBQUksWUFBWSxFQUE0QixDQUFDO1FBRy9HLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDcEIseUJBQW9CLEdBQUcsV0FBVyxDQUFDO1FBRTVCLE9BQUUsR0FBRyxnQkFBZ0IsQ0FBQztRQUM3QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQUtwQixDQUFDOzs7OztJQUVELG9DQUFNOzs7O0lBQU4sVUFBTyxTQUFrQjtRQUF6QixpQkFJQztRQUhDLFVBQVU7OztRQUFDO1lBQ1QsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO1FBQy9GLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7SUFFRCwrQ0FBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7WUFDM0IsS0FBSyxFQUFFLElBQUksQ0FBQyxvQkFBb0I7WUFDaEMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhO1NBQy9ELENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxxREFBdUI7OztJQUF2QjtRQUFBLGlCQWFDOztZQVpPLGVBQWUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVE7O1lBQzFDLGVBQWUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUk7O1lBRXRDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLElBQVM7WUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQztRQUN4RSxDQUFDLEVBQUM7UUFFRixJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVU7OztZQUFDO2dCQUNULEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUM7WUFDekMsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ1I7SUFDSCxDQUFDOzs7O0lBRUQsZ0RBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOztnQkEzREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsd0NBQXdDO29CQUNsRCw0V0FBZ0M7b0JBQ2hDLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsWUFBWSxFQUFFOzRCQUNwQixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7NEJBQ2hFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQzs0QkFDOUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzt5QkFDNUQsQ0FBQztxQkFDSDtpQkFDRjs7OztnQkE1QkMsVUFBVTs7OzhCQThCVCxLQUFLO3VDQUNMLE1BQU07OEJBQ04sZUFBZSxTQUFDLGtCQUFrQjt5QkFRbEMsU0FBUyxTQUFDLE1BQU07O0lBc0NuQiwwQkFBQztDQUFBLEFBN0RELElBNkRDO1NBakRZLG1CQUFtQjs7O0lBQzlCLDBDQUE2Qjs7SUFDN0IsbURBQXNIOztJQUN0SCwwQ0FBZ0Y7O0lBRWhGLHFDQUFvQjs7SUFDcEIsbURBQW1DOztJQUVuQyxpQ0FBNkI7O0lBQzdCLDZDQUFvQjs7SUFFcEIscUNBQXNDOzs7OztJQUUxQixpQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgUXVlcnlMaXN0LFxuICBPdXRwdXQsIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7c3RhdGUsIHN0eWxlLCB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7Um91dGVyTGlua1dpdGhIcmVmfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHt3aW5kb3d9IGZyb20gJy4uLy4uLy4uL2ZyZWUvdXRpbHMvZmFjYWRlL2Jyb3dzZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvcmRpb25BbmltYXRpb25TdGF0ZSB7XG4gIHN0YXRlOiBzdHJpbmcsXG4gIGFjY29yZGlvbkVsOiBFbGVtZW50UmVmXG59XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbUJvZHknLFxuICBzZWxlY3RvcjogJ21kYi1pdGVtLWJvZHksIG1kYi1hY2NvcmRpb24taXRlbS1ib2R5JyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmJvZHkuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdleHBhbmRCb2R5JywgW1xuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCB2aXNpYmlsaXR5OiAnaGlkZGVuJ30pKSxcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJywgdmlzaWJpbGl0eTogJ3Zpc2libGUnfSkpLFxuICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzUwMG1zIGVhc2UnKSksXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTQkl0ZW1Cb2R5Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBhbmltYXRpb25TdGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPElBY2NvcmRpb25BbmltYXRpb25TdGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPElBY2NvcmRpb25BbmltYXRpb25TdGF0ZT4oKTtcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYpIHJvdXRlckxpbmtzOiBRdWVyeUxpc3Q8Um91dGVyTGlua1dpdGhIcmVmPjtcblxuICBwdWJsaWMgaGVpZ2h0ID0gJzAnO1xuICBleHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnO1xuXG4gIHB1YmxpYyBpZCA9IGBtZGItYWNjb3JkaW9uLWA7XG4gIGFyaWFMYWJlbGxlZEJ5ID0gJyc7XG5cbiAgQFZpZXdDaGlsZCgnYm9keScpIGJvZHlFbDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICB0b2dnbGUoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb2xsYXBzZWQgPyB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCcgOiB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2V4cGFuZGVkJztcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGFuaW1hdGlvbkNhbGxiYWNrKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2UuZW1pdCh7XG4gICAgICAgIHN0YXRlOiB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlLFxuICAgICAgICBhY2NvcmRpb25FbDogdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBvcGVuU2lkZW5hdk9uQWN0aXZlTGluaygpIHtcbiAgICBjb25zdCBwYXRoU3RyYXRlZ3lVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgY29uc3QgaGFzaFN0cmF0ZWd5VXJsID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cbiAgICBjb25zdCBhY3RpdmVMaW5rID0gdGhpcy5yb3V0ZXJMaW5rcy5maW5kKChsaW5rOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBsaW5rLmhyZWYgPT09IHBhdGhTdHJhdGVneVVybCB8fCBsaW5rLmhyZWYgPT09IGhhc2hTdHJhdGVneVVybDtcbiAgICB9KTtcblxuICAgIGlmIChhY3RpdmVMaW5rKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgICB9LCA0MCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMub3BlblNpZGVuYXZPbkFjdGl2ZUxpbmsoKTtcbiAgfVxuXG59XG4iXX0=