/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
export class CardRotatingComponent {
    constructor() {
        this.rotate = false;
        this.ANIMATION_TRANSITION_TIME = 1000;
        this.animationStart = new EventEmitter();
        this.animationEnd = new EventEmitter();
    }
    /**
     * @return {?}
     */
    toggle() {
        this.rotate = !this.rotate;
        this.animationStart.emit();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.animationEnd.emit();
        }), this.ANIMATION_TRANSITION_TIME);
    }
}
CardRotatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-rotating, mdb-flipping-card',
                template: "<div class=\"flip-container card-wrapper\" [ngClass]=\"{'rotate': rotate}\">\n  <div class=\"flipper card-rotating effect__click tp-box\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
            }] }
];
CardRotatingComponent.propDecorators = {
    animationStart: [{ type: Output }],
    animationEnd: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CardRotatingComponent.prototype.rotate;
    /** @type {?} */
    CardRotatingComponent.prototype.ANIMATION_TRANSITION_TIME;
    /** @type {?} */
    CardRotatingComponent.prototype.animationStart;
    /** @type {?} */
    CardRotatingComponent.prototype.animationEnd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1yb3RhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2NhcmRzL2NhcmQtcm90YXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPaEUsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQztRQU1TLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsOEJBQXlCLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQVV0RSxDQUFDOzs7O0lBUkMsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFM0IsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDLEdBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCx5TUFBMkM7YUFDNUM7Ozs2QkFLRSxNQUFNOzJCQUNOLE1BQU07Ozs7SUFIUCx1Q0FBc0I7O0lBQ3RCLDBEQUFpQzs7SUFDakMsK0NBQXNFOztJQUN0RSw2Q0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1jYXJkLXJvdGF0aW5nLCBtZGItZmxpcHBpbmctY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1yb3RhdGluZy5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDYXJkUm90YXRpbmdDb21wb25lbnQge1xuICBwdWJsaWMgcm90YXRlID0gZmFsc2U7XG4gIEFOSU1BVElPTl9UUkFOU0lUSU9OX1RJTUUgPSAxMDAwO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBhbmltYXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMucm90YXRlID0gIXRoaXMucm90YXRlO1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhcnQuZW1pdCgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkVuZC5lbWl0KCk7XG4gICAgfSwgdGhpcy5BTklNQVRJT05fVFJBTlNJVElPTl9USU1FKTtcbiAgfVxufVxuIl19