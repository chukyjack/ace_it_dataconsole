/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Input } from '@angular/core';
import { SBItemComponent } from './sb-item';
var SBItemHeadComponent = /** @class */ (function () {
    function SBItemHeadComponent(sbItem) {
        this.sbItem = sbItem;
        this.isDisabled = false;
        this.indicator = true;
        this.id = "mdb-accordion-";
        this.ariaExpanded = false;
        this.ariaControls = '';
        this.id = "mdb-accordion-head-" + this.sbItem.idModifier;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SBItemHeadComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 32) {
            this.toggleClick(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SBItemHeadComponent.prototype.toggleClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.sbItem.collapsed = !this.sbItem.collapsed;
            this.sbItem.toggle(this.sbItem.collapsed);
            this.ariaExpanded = !this.ariaExpanded;
        }
    };
    /**
     * @return {?}
     */
    SBItemHeadComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.sbItem.body) {
                _this.ariaControls = _this.sbItem.body.id;
                _this.sbItem.body.ariaLabelledBy = _this.id;
            }
        }), 0);
    };
    SBItemHeadComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'sbItemHead',
                    selector: 'mdb-item-head, mdb-accordion-item-head',
                    template: "<div class=\"card-header {{ customClass }}\" [ngClass]=\"{ 'item-disabled': isDisabled }\" (click)=\"toggleClick($event)\"\n     [id]=\"id\">\n  <a role=\"button\" href=\"javascript:;\" [attr.aria-expanded]=\"ariaExpanded\"\n     [attr.aria-controls]=\"ariaControls\">\n    <h5 class=\"mb-0 d-flex justify-content-between align-items-center\">\n      <span class=\"d-flex align-self-start align-items-center\">\n        <ng-content></ng-content>\n      </span>\n      <i *ngIf=\"indicator\" class=\"mdb-accordion-indicator rotate-icon\" aria-hidden=\"true\"></i>\n    </h5>\n  </a>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    SBItemHeadComponent.ctorParameters = function () { return [
        { type: SBItemComponent }
    ]; };
    SBItemHeadComponent.propDecorators = {
        isDisabled: [{ type: Input }],
        customClass: [{ type: Input }],
        indicator: [{ type: Input }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return SBItemHeadComponent;
}());
export { SBItemHeadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5oZWFkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUUxQztJQWNFLDZCQUFvQixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQVJsQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFbkIsT0FBRSxHQUFHLGdCQUFnQixDQUFDO1FBQzdCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBR2hCLElBQUksQ0FBQyxFQUFFLEdBQUcsd0JBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBWSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRW9DLHVDQUFTOzs7O0lBQTlDLFVBQStDLEtBQW9CO1FBQ2pFLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7UUFDcEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFBQSxpQkFPQztRQU5DLFVBQVU7OztRQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDcEIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDO2FBQzNDO1FBQ0gsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Z0JBeENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsMmxCQUFnQztpQkFDakM7Ozs7Z0JBTk8sZUFBZTs7OzZCQVFwQixLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFVTCxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQXVCckMsMEJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXBDWSxtQkFBbUI7OztJQUM5Qix5Q0FBNEI7O0lBQzVCLDBDQUE2Qjs7SUFDN0Isd0NBQTBCOztJQUUxQixpQ0FBNkI7O0lBQzdCLDJDQUFxQjs7SUFDckIsMkNBQWtCOzs7OztJQUVOLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U0JJdGVtQ29tcG9uZW50fSBmcm9tICcuL3NiLWl0ZW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzYkl0ZW1IZWFkJyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbS1oZWFkLCBtZGItYWNjb3JkaW9uLWl0ZW0taGVhZCcsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5oZWFkLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNCSXRlbUhlYWRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpbmRpY2F0b3IgPSB0cnVlO1xuXG4gIHB1YmxpYyBpZCA9IGBtZGItYWNjb3JkaW9uLWA7XG4gIGFyaWFFeHBhbmRlZCA9IGZhbHNlO1xuICBhcmlhQ29udHJvbHMgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNiSXRlbTogU0JJdGVtQ29tcG9uZW50KSB7XG4gICAgdGhpcy5pZCA9IGBtZGItYWNjb3JkaW9uLWhlYWQtJHt0aGlzLnNiSXRlbS5pZE1vZGlmaWVyfWA7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDbGljayhldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5zYkl0ZW0uY29sbGFwc2VkID0gIXRoaXMuc2JJdGVtLmNvbGxhcHNlZDtcbiAgICAgIHRoaXMuc2JJdGVtLnRvZ2dsZSh0aGlzLnNiSXRlbS5jb2xsYXBzZWQpO1xuICAgICAgdGhpcy5hcmlhRXhwYW5kZWQgPSAhdGhpcy5hcmlhRXhwYW5kZWQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2JJdGVtLmJvZHkpIHtcbiAgICAgICAgdGhpcy5hcmlhQ29udHJvbHMgPSB0aGlzLnNiSXRlbS5ib2R5LmlkO1xuICAgICAgICB0aGlzLnNiSXRlbS5ib2R5LmFyaWFMYWJlbGxlZEJ5ID0gdGhpcy5pZDtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxufVxuIl19