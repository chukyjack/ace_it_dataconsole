/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Renderer2, HostListener } from '@angular/core';
import { socialsState } from '../animations/animations.component';
export class CardRevealComponent {
    /**
     * @param {?} _r
     */
    constructor(_r) {
        this._r = _r;
    }
    /**
     * @return {?}
     */
    onWindowResize() {
        if (this.cardOverflow && this.cardFront && this.cardReveal) {
            /** @type {?} */
            const height = this.cardFront.nativeElement.offsetHeight;
            this._r.setStyle(this.cardOverflow.nativeElement, 'height', height + 'px');
            this._r.setStyle(this.cardReveal.nativeElement.firstElementChild, 'height', height + 'px');
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        this.show = !this.show;
        this.socials = (this.socials === 'active') ? 'inactive' : 'active';
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const height = this.cardFront.nativeElement.offsetHeight;
            this._r.setStyle(this.cardOverflow.nativeElement, 'height', height + 'px');
            if (this.cardReveal) {
                this._r.setStyle(this.cardReveal.nativeElement.firstElementChild, 'height', height + 'px');
            }
        }), 0);
    }
}
CardRevealComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-reveal',
                template: "<div #cardOverflow class=\"card-overflow\">\n  <div #cardFront class=\"card-front\">\n    <ng-content select=\".card-front\" ></ng-content>\n  </div>\n  <div #cardReveal class=\"card-reveal\" *ngIf=\"show\"  [@socialsState]=\"socials\">\n    <ng-content select=\".card-reveal\"></ng-content>\n  </div>\n</div>\n",
                animations: [socialsState]
            }] }
];
/** @nocollapse */
CardRevealComponent.ctorParameters = () => [
    { type: Renderer2 }
];
CardRevealComponent.propDecorators = {
    cardReveal: [{ type: ViewChild, args: ['cardReveal',] }],
    cardFront: [{ type: ViewChild, args: ['cardFront',] }],
    cardOverflow: [{ type: ViewChild, args: ['cardOverflow',] }],
    onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
};
if (false) {
    /** @type {?} */
    CardRevealComponent.prototype.cardReveal;
    /** @type {?} */
    CardRevealComponent.prototype.cardFront;
    /** @type {?} */
    CardRevealComponent.prototype.cardOverflow;
    /** @type {?} */
    CardRevealComponent.prototype.socials;
    /** @type {?} */
    CardRevealComponent.prototype.show;
    /**
     * @type {?}
     * @private
     */
    CardRevealComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1yZXZlYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9jYXJkcy9jYXJkLXJldmVhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQVFsRSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBZ0I5QixZQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztJQUFJLENBQUM7Ozs7SUFSdEMsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O2tCQUNwRCxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUN4RCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDNUY7SUFDSCxDQUFDOzs7O0lBR0QsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNuRSxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7O2tCQUNOLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZO1lBQ3hELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFFM0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzVGO1FBQ0wsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixtVUFBeUM7Z0JBQ3pDLFVBQVUsRUFBRSxDQUFDLFlBQVksQ0FBQzthQUMzQjs7OztZQVAwQyxTQUFTOzs7eUJBVWpELFNBQVMsU0FBQyxZQUFZO3dCQUN0QixTQUFTLFNBQUMsV0FBVzsyQkFDckIsU0FBUyxTQUFDLGNBQWM7NkJBSXhCLFlBQVksU0FBQyxlQUFlOzs7O0lBTjdCLHlDQUFnRDs7SUFDaEQsd0NBQThDOztJQUM5QywyQ0FBb0Q7O0lBQ3BELHNDQUFvQjs7SUFDcEIsbUNBQXFCOzs7OztJQVdULGlDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc29jaWFsc1N0YXRlIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9hbmltYXRpb25zLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1jYXJkLXJldmVhbCcsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1yZXZlYWwuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbc29jaWFsc1N0YXRlXVxufSlcblxuZXhwb3J0IGNsYXNzIENhcmRSZXZlYWxDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCdjYXJkUmV2ZWFsJykgY2FyZFJldmVhbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY2FyZEZyb250JykgY2FyZEZyb250OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjYXJkT3ZlcmZsb3cnKSBjYXJkT3ZlcmZsb3c6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBzb2NpYWxzOiBhbnk7XG4gIHB1YmxpYyBzaG93OiBib29sZWFuO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5jYXJkT3ZlcmZsb3cgJiYgdGhpcy5jYXJkRnJvbnQgJiYgdGhpcy5jYXJkUmV2ZWFsKSB7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNhcmRGcm9udC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIHRoaXMuX3Iuc2V0U3R5bGUodGhpcy5jYXJkT3ZlcmZsb3cubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xuICAgICAgdGhpcy5fci5zZXRTdHlsZSh0aGlzLmNhcmRSZXZlYWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCwgJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3I6IFJlbmRlcmVyMikgeyB9XG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIHRoaXMuc29jaWFscyA9ICh0aGlzLnNvY2lhbHMgPT09ICdhY3RpdmUnKSA/ICdpbmFjdGl2ZScgOiAnYWN0aXZlJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jYXJkRnJvbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMuX3Iuc2V0U3R5bGUodGhpcy5jYXJkT3ZlcmZsb3cubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhcmRSZXZlYWwpIHtcbiAgICAgICAgICB0aGlzLl9yLnNldFN0eWxlKHRoaXMuY2FyZFJldmVhbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLCAnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxufVxuIl19