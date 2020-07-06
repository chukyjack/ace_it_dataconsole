/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SimpleChartComponent = /** @class */ (function () {
    function SimpleChartComponent() {
        this.options = {
            barColor: null,
            trackColor: null,
            scaleColor: null,
            scaleLength: '',
            lineCap: null,
            lineWidth: null,
            trackWidth: null,
            size: null,
            rotate: null,
            duration: null,
            enableAnimation: null,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
    }
    /**
     * @return {?}
     */
    SimpleChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.options.barColor = '#' + this.barColor;
        this.options.trackColor = '#' + this.trackColor;
        this.options.scaleColor = '#' + this.scaleColor;
        this.options.scaleLength = this.scaleLength;
        this.options.lineCap = this.lineCap;
        this.options.lineWidth = this.lineWidth;
        this.options.trackWidth = this.trackWidth;
        this.options.size = this.size;
        this.options.rotate = this.rotate;
        this.options.animate.duration = this.animate.duration;
        this.options.animate.enabled = this.animate.enabled;
    };
    SimpleChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-simple-chart',
                    template: "<span class=\"min-chart\">\n  <span \n  *ngIf=\"customText\"  \n  class=\"chart-custom-text\"\n  [ngStyle]=\"{\n  'line-height': size + 'px',\n  'width': size + 'px',\n  'height': size + 'px'}\">{{ customText }}</span>\n  <span \n  *ngIf=\"!customText\" \n  class=\"percent\">{{ percent }}</span>\n  <mdb-easy-pie-chart [percent]=\"percent\" [options]=\"options\"></mdb-easy-pie-chart>\n</span>"
                }] }
    ];
    /** @nocollapse */
    SimpleChartComponent.ctorParameters = function () { return []; };
    SimpleChartComponent.propDecorators = {
        customText: [{ type: Input, args: ['customText',] }],
        percent: [{ type: Input, args: ['percent',] }],
        barColor: [{ type: Input, args: ['barColor',] }],
        trackColor: [{ type: Input, args: ['trackColor',] }],
        scaleColor: [{ type: Input, args: ['scaleColor',] }],
        scaleLength: [{ type: Input, args: ['scaleLength',] }],
        lineCap: [{ type: Input, args: ['lineCap',] }],
        lineWidth: [{ type: Input, args: ['lineWidth',] }],
        trackWidth: [{ type: Input, args: ['trackWidth',] }],
        size: [{ type: Input, args: ['size',] }],
        rotate: [{ type: Input, args: ['rotate',] }],
        animate: [{ type: Input, args: ['animate',] }]
    };
    return SimpleChartComponent;
}());
export { SimpleChartComponent };
if (false) {
    /** @type {?} */
    SimpleChartComponent.prototype.customText;
    /** @type {?} */
    SimpleChartComponent.prototype.percent;
    /** @type {?} */
    SimpleChartComponent.prototype.barColor;
    /** @type {?} */
    SimpleChartComponent.prototype.trackColor;
    /** @type {?} */
    SimpleChartComponent.prototype.scaleColor;
    /** @type {?} */
    SimpleChartComponent.prototype.scaleLength;
    /** @type {?} */
    SimpleChartComponent.prototype.lineCap;
    /** @type {?} */
    SimpleChartComponent.prototype.lineWidth;
    /** @type {?} */
    SimpleChartComponent.prototype.trackWidth;
    /** @type {?} */
    SimpleChartComponent.prototype.size;
    /** @type {?} */
    SimpleChartComponent.prototype.rotate;
    /** @type {?} */
    SimpleChartComponent.prototype.animate;
    /** @type {?} */
    SimpleChartComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZWFzeS1jaGFydHMvY2hhcnQtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFvQ0U7UUFsQk8sWUFBTyxHQUFRO1lBQ3BCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsV0FBVyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsSUFBSTtZQUNiLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsZUFBZSxFQUFFLElBQUk7WUFDckIsT0FBTyxFQUFFO2dCQUNOLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7U0FDSCxDQUFDO0lBR0YsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDdEQsQ0FBQzs7Z0JBbkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixzWkFBNEM7aUJBRTdDOzs7Ozs2QkFFRSxLQUFLLFNBQUMsWUFBWTswQkFDbEIsS0FBSyxTQUFDLFNBQVM7MkJBQ2YsS0FBSyxTQUFDLFVBQVU7NkJBQ2hCLEtBQUssU0FBQyxZQUFZOzZCQUNsQixLQUFLLFNBQUMsWUFBWTs4QkFDbEIsS0FBSyxTQUFDLGFBQWE7MEJBQ25CLEtBQUssU0FBQyxTQUFTOzRCQUNmLEtBQUssU0FBQyxXQUFXOzZCQUNqQixLQUFLLFNBQUMsWUFBWTt1QkFDbEIsS0FBSyxTQUFDLE1BQU07eUJBQ1osS0FBSyxTQUFDLFFBQVE7MEJBQ2QsS0FBSyxTQUFDLFNBQVM7O0lBb0NsQiwyQkFBQztDQUFBLEFBckRELElBcURDO1NBaERZLG9CQUFvQjs7O0lBQy9CLDBDQUF3Qzs7SUFDeEMsdUNBQWtDOztJQUNsQyx3Q0FBb0M7O0lBQ3BDLDBDQUF3Qzs7SUFDeEMsMENBQXdDOztJQUN4QywyQ0FBMEM7O0lBQzFDLHVDQUFrQzs7SUFDbEMseUNBQXNDOztJQUN0QywwQ0FBd0M7O0lBQ3hDLG9DQUE0Qjs7SUFDNUIsc0NBQWdDOztJQUNoQyx1Q0FBaUU7O0lBQ2pFLHVDQWdCRSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zaW1wbGUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQtc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnY3VzdG9tVGV4dCcpIGN1c3RvbVRleHQ6IHN0cmluZztcbiAgQElucHV0KCdwZXJjZW50JykgcGVyY2VudDogbnVtYmVyO1xuICBASW5wdXQoJ2JhckNvbG9yJykgYmFyQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCd0cmFja0NvbG9yJykgdHJhY2tDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoJ3NjYWxlQ29sb3InKSBzY2FsZUNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2NhbGVMZW5ndGgnKSBzY2FsZUxlbmd0aDogbnVtYmVyO1xuICBASW5wdXQoJ2xpbmVDYXAnKSBsaW5lQ2FwOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGluZVdpZHRoJykgbGluZVdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgndHJhY2tXaWR0aCcpIHRyYWNrV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCdzaXplJykgc2l6ZTogbnVtYmVyO1xuICBASW5wdXQoJ3JvdGF0ZScpIHJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ2FuaW1hdGUnKSBhbmltYXRlOiB7IGR1cmF0aW9uOiBzdHJpbmcsIGVuYWJsZWQ6IGJvb2xlYW59O1xuICBwdWJsaWMgb3B0aW9uczogYW55ID0ge1xuICAgIGJhckNvbG9yOiBudWxsLFxuICAgIHRyYWNrQ29sb3I6IG51bGwsXG4gICAgc2NhbGVDb2xvcjogbnVsbCxcbiAgICBzY2FsZUxlbmd0aDogJycsXG4gICAgbGluZUNhcDogbnVsbCxcbiAgICBsaW5lV2lkdGg6IG51bGwsXG4gICAgdHJhY2tXaWR0aDogbnVsbCxcbiAgICBzaXplOiBudWxsLFxuICAgIHJvdGF0ZTogbnVsbCxcbiAgICBkdXJhdGlvbjogbnVsbCxcbiAgICBlbmFibGVBbmltYXRpb246IG51bGwsXG4gICAgYW5pbWF0ZToge1xuICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcHRpb25zLmJhckNvbG9yID0gJyMnICsgdGhpcy5iYXJDb2xvcjtcbiAgICB0aGlzLm9wdGlvbnMudHJhY2tDb2xvciA9ICcjJyArIHRoaXMudHJhY2tDb2xvcjtcbiAgICB0aGlzLm9wdGlvbnMuc2NhbGVDb2xvciA9ICcjJyArIHRoaXMuc2NhbGVDb2xvcjtcbiAgICB0aGlzLm9wdGlvbnMuc2NhbGVMZW5ndGggPSB0aGlzLnNjYWxlTGVuZ3RoO1xuICAgIHRoaXMub3B0aW9ucy5saW5lQ2FwID0gdGhpcy5saW5lQ2FwO1xuICAgIHRoaXMub3B0aW9ucy5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcbiAgICB0aGlzLm9wdGlvbnMudHJhY2tXaWR0aCA9IHRoaXMudHJhY2tXaWR0aDtcbiAgICB0aGlzLm9wdGlvbnMuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICB0aGlzLm9wdGlvbnMucm90YXRlID0gdGhpcy5yb3RhdGU7XG4gICAgdGhpcy5vcHRpb25zLmFuaW1hdGUuZHVyYXRpb24gPSB0aGlzLmFuaW1hdGUuZHVyYXRpb247XG4gICAgdGhpcy5vcHRpb25zLmFuaW1hdGUuZW5hYmxlZCA9IHRoaXMuYW5pbWF0ZS5lbmFibGVkO1xuICB9XG5cbn1cblxuIl19