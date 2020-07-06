/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
var EasyPieChartComponent = /** @class */ (function () {
    function EasyPieChartComponent(el, platformId, _r) {
        this._r = _r;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
        this.element = el;
        /** @type {?} */
        var options = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
        this.options = Object.assign(options, this.options);
    }
    /**
     * @return {?}
     */
    EasyPieChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var size = this.options.size;
            this.element.nativeElement.innerHTML = '';
            this.pieChart = new EasyPieChart(this.element.nativeElement, this.options);
            this.pieChart.update(this.percent);
            // Positioning text in center of chart
            /** @type {?} */
            var percent = document.querySelector('.percent');
            if (percent) {
                this._r.setStyle(percent, 'line-height', size + 'px');
                this._r.setStyle(percent, 'width', size + 'px');
                this._r.setStyle(percent, 'height', size + 'px');
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    EasyPieChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes['percent'].isFirstChange()) {
            this.pieChart.update(this.percent);
        }
    };
    EasyPieChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-easy-pie-chart',
                    template: '<div>Loading</div>'
                }] }
    ];
    /** @nocollapse */
    EasyPieChartComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: Renderer2 }
    ]; };
    EasyPieChartComponent.propDecorators = {
        percent: [{ type: Input, args: ['percent',] }],
        options: [{ type: Input, args: ['options',] }]
    };
    return EasyPieChartComponent;
}());
export { EasyPieChartComponent };
if (false) {
    /** @type {?} */
    EasyPieChartComponent.prototype.percent;
    /** @type {?} */
    EasyPieChartComponent.prototype.options;
    /** @type {?} */
    EasyPieChartComponent.prototype.element;
    /** @type {?} */
    EasyPieChartComponent.prototype.pieChart;
    /** @type {?} */
    EasyPieChartComponent.prototype.isBrowser;
    /**
     * @type {?}
     * @private
     */
    EasyPieChartComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc21hbGxwaWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9lYXN5LWNoYXJ0cy9jaGFydC1zbWFsbHBpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFvQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BEO0lBV0UsK0JBQVksRUFBYyxFQUF1QixVQUFrQixFQUFVLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO1FBRjFGLGNBQVMsR0FBUSxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7WUFDWixPQUFPLEdBQUc7WUFDZCxRQUFRLEVBQUUsU0FBUztZQUNuQixVQUFVLEVBQUUsU0FBUztZQUNyQixVQUFVLEVBQUUsU0FBUztZQUNyQixXQUFXLEVBQUUsQ0FBQztZQUNkLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFNBQVMsRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFLEdBQUc7WUFDVCxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztnQkFDWixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Z0JBRTdCLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztZQUNsRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ2xEO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7O2dCQW5ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7Ozs7Z0JBUm1CLFVBQVU7NkNBZ0JDLE1BQU0sU0FBQyxXQUFXO2dCQWhCd0IsU0FBUzs7OzBCQVUvRSxLQUFLLFNBQUMsU0FBUzswQkFDZixLQUFLLFNBQUMsU0FBUzs7SUE4Q2xCLDRCQUFDO0NBQUEsQUFwREQsSUFvREM7U0FoRFkscUJBQXFCOzs7SUFDaEMsd0NBQStCOztJQUMvQix3Q0FBK0I7O0lBQy9CLHdDQUFhOztJQUNiLHlDQUFjOztJQUNkLDBDQUF1Qjs7Ozs7SUFFOEMsbUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSB2YXIgRWFzeVBpZUNoYXJ0OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1lYXN5LXBpZS1jaGFydCcsXG4gIHRlbXBsYXRlOiAnPGRpdj5Mb2FkaW5nPC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBFYXN5UGllQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgncGVyY2VudCcpIHBlcmNlbnQ6IGFueTtcbiAgQElucHV0KCdvcHRpb25zJykgb3B0aW9uczogYW55O1xuICBlbGVtZW50OiBhbnk7XG4gIHBpZUNoYXJ0OiBhbnk7XG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZywgcHJpdmF0ZSBfcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbDtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgYmFyQ29sb3I6ICcjZWYxZTI1JyxcbiAgICAgIHRyYWNrQ29sb3I6ICcjZjlmOWY5JyxcbiAgICAgIHNjYWxlQ29sb3I6ICcjZGZlMGUwJyxcbiAgICAgIHNjYWxlTGVuZ3RoOiA1LFxuICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgIGxpbmVXaWR0aDogMyxcbiAgICAgIHNpemU6IDExMCxcbiAgICAgIHJvdGF0ZTogMCxcbiAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucywgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplO1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLnBpZUNoYXJ0ID0gbmV3IEVhc3lQaWVDaGFydCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5vcHRpb25zKTtcbiAgICAgIHRoaXMucGllQ2hhcnQudXBkYXRlKHRoaXMucGVyY2VudCk7XG4gICAgICAvLyBQb3NpdGlvbmluZyB0ZXh0IGluIGNlbnRlciBvZiBjaGFydFxuICAgICAgY29uc3QgcGVyY2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJjZW50Jyk7XG4gICAgICBpZiAocGVyY2VudCkge1xuICAgICAgICB0aGlzLl9yLnNldFN0eWxlKHBlcmNlbnQsICdsaW5lLWhlaWdodCcsIHNpemUgKyAncHgnKTtcbiAgICAgICAgdGhpcy5fci5zZXRTdHlsZShwZXJjZW50LCAnd2lkdGgnLCBzaXplICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMuX3Iuc2V0U3R5bGUocGVyY2VudCwgJ2hlaWdodCcsIHNpemUgKyAncHgnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCFjaGFuZ2VzWydwZXJjZW50J10uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLnBpZUNoYXJ0LnVwZGF0ZSh0aGlzLnBlcmNlbnQpO1xuICAgIH1cbiAgfVxufVxuIl19