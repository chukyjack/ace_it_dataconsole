/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Input } from '@angular/core';
import { SBItemComponent } from './sb-item';
export class SBItemHeadComponent {
    /**
     * @param {?} sbItem
     */
    constructor(sbItem) {
        this.sbItem = sbItem;
        this.isDisabled = false;
        this.indicator = true;
        this.id = `mdb-accordion-`;
        this.ariaExpanded = false;
        this.ariaControls = '';
        this.id = `mdb-accordion-head-${this.sbItem.idModifier}`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (event.keyCode === 32) {
            this.toggleClick(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleClick(event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.sbItem.collapsed = !this.sbItem.collapsed;
            this.sbItem.toggle(this.sbItem.collapsed);
            this.ariaExpanded = !this.ariaExpanded;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.sbItem.body) {
                this.ariaControls = this.sbItem.body.id;
                this.sbItem.body.ariaLabelledBy = this.id;
            }
        }), 0);
    }
}
SBItemHeadComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemHead',
                selector: 'mdb-item-head, mdb-accordion-item-head',
                template: "<div class=\"card-header {{ customClass }}\" [ngClass]=\"{ 'item-disabled': isDisabled }\" (click)=\"toggleClick($event)\"\n     [id]=\"id\">\n  <a role=\"button\" href=\"javascript:;\" [attr.aria-expanded]=\"ariaExpanded\"\n     [attr.aria-controls]=\"ariaControls\">\n    <h5 class=\"mb-0 d-flex justify-content-between align-items-center\">\n      <span class=\"d-flex align-self-start align-items-center\">\n        <ng-content></ng-content>\n      </span>\n      <i *ngIf=\"indicator\" class=\"mdb-accordion-indicator rotate-icon\" aria-hidden=\"true\"></i>\n    </h5>\n  </a>\n</div>\n"
            }] }
];
/** @nocollapse */
SBItemHeadComponent.ctorParameters = () => [
    { type: SBItemComponent }
];
SBItemHeadComponent.propDecorators = {
    isDisabled: [{ type: Input }],
    customClass: [{ type: Input }],
    indicator: [{ type: Input }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    SBItemHeadComponent.prototype.isDisabled;
    /** @type {?} */
    SBItemHeadComponent.prototype.customClass;
    /** @type {?} */
    SBItemHeadComponent.prototype.indicator;
    /** @type {?} */
    SBItemHeadComponent.prototype.id;
    /** @type {?} */
    SBItemHeadComponent.prototype.ariaExpanded;
    /** @type {?} */
    SBItemHeadComponent.prototype.ariaControls;
    /**
     * @type {?}
     * @private
     */
    SBItemHeadComponent.prototype.sbItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5oZWFkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQU8xQyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBUzlCLFlBQW9CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBUmxDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFFLEdBQUcsZ0JBQWdCLENBQUM7UUFDN0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFHaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxzQkFBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVvQyxTQUFTLENBQUMsS0FBb0I7UUFDakUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBVTtRQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDM0M7UUFDSCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCwybEJBQWdDO2FBQ2pDOzs7O1lBTk8sZUFBZTs7O3lCQVFwQixLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFVTCxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBWm5DLHlDQUE0Qjs7SUFDNUIsMENBQTZCOztJQUM3Qix3Q0FBMEI7O0lBRTFCLGlDQUE2Qjs7SUFDN0IsMkNBQXFCOztJQUNyQiwyQ0FBa0I7Ozs7O0lBRU4scUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTQkl0ZW1Db21wb25lbnR9IGZyb20gJy4vc2ItaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbUhlYWQnLFxuICBzZWxlY3RvcjogJ21kYi1pdGVtLWhlYWQsIG1kYi1hY2NvcmRpb24taXRlbS1oZWFkJyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmhlYWQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU0JJdGVtSGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGluZGljYXRvciA9IHRydWU7XG5cbiAgcHVibGljIGlkID0gYG1kYi1hY2NvcmRpb24tYDtcbiAgYXJpYUV4cGFuZGVkID0gZmFsc2U7XG4gIGFyaWFDb250cm9scyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2JJdGVtOiBTQkl0ZW1Db21wb25lbnQpIHtcbiAgICB0aGlzLmlkID0gYG1kYi1hY2NvcmRpb24taGVhZC0ke3RoaXMuc2JJdGVtLmlkTW9kaWZpZXJ9YDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIHRoaXMudG9nZ2xlQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnNiSXRlbS5jb2xsYXBzZWQgPSAhdGhpcy5zYkl0ZW0uY29sbGFwc2VkO1xuICAgICAgdGhpcy5zYkl0ZW0udG9nZ2xlKHRoaXMuc2JJdGVtLmNvbGxhcHNlZCk7XG4gICAgICB0aGlzLmFyaWFFeHBhbmRlZCA9ICF0aGlzLmFyaWFFeHBhbmRlZDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zYkl0ZW0uYm9keSkge1xuICAgICAgICB0aGlzLmFyaWFDb250cm9scyA9IHRoaXMuc2JJdGVtLmJvZHkuaWQ7XG4gICAgICAgIHRoaXMuc2JJdGVtLmJvZHkuYXJpYUxhYmVsbGVkQnkgPSB0aGlzLmlkO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG59XG4iXX0=