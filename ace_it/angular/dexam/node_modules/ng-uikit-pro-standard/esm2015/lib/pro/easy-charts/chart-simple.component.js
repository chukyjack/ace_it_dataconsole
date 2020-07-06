/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SimpleChartComponent {
    constructor() {
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
    ngOnInit() {
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
    }
}
SimpleChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-simple-chart',
                template: "<span class=\"min-chart\">\n  <span \n  *ngIf=\"customText\"  \n  class=\"chart-custom-text\"\n  [ngStyle]=\"{\n  'line-height': size + 'px',\n  'width': size + 'px',\n  'height': size + 'px'}\">{{ customText }}</span>\n  <span \n  *ngIf=\"!customText\" \n  class=\"percent\">{{ percent }}</span>\n  <mdb-easy-pie-chart [percent]=\"percent\" [options]=\"options\"></mdb-easy-pie-chart>\n</span>"
            }] }
];
/** @nocollapse */
SimpleChartComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZWFzeS1jaGFydHMvY2hhcnQtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLG9CQUFvQjtJQStCL0I7UUFsQk8sWUFBTyxHQUFRO1lBQ3BCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsV0FBVyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsSUFBSTtZQUNiLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsZUFBZSxFQUFFLElBQUk7WUFDckIsT0FBTyxFQUFFO2dCQUNOLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7U0FDSCxDQUFDO0lBR0YsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3RELENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsc1pBQTRDO2FBRTdDOzs7Ozt5QkFFRSxLQUFLLFNBQUMsWUFBWTtzQkFDbEIsS0FBSyxTQUFDLFNBQVM7dUJBQ2YsS0FBSyxTQUFDLFVBQVU7eUJBQ2hCLEtBQUssU0FBQyxZQUFZO3lCQUNsQixLQUFLLFNBQUMsWUFBWTswQkFDbEIsS0FBSyxTQUFDLGFBQWE7c0JBQ25CLEtBQUssU0FBQyxTQUFTO3dCQUNmLEtBQUssU0FBQyxXQUFXO3lCQUNqQixLQUFLLFNBQUMsWUFBWTttQkFDbEIsS0FBSyxTQUFDLE1BQU07cUJBQ1osS0FBSyxTQUFDLFFBQVE7c0JBQ2QsS0FBSyxTQUFDLFNBQVM7Ozs7SUFYaEIsMENBQXdDOztJQUN4Qyx1Q0FBa0M7O0lBQ2xDLHdDQUFvQzs7SUFDcEMsMENBQXdDOztJQUN4QywwQ0FBd0M7O0lBQ3hDLDJDQUEwQzs7SUFDMUMsdUNBQWtDOztJQUNsQyx5Q0FBc0M7O0lBQ3RDLDBDQUF3Qzs7SUFDeEMsb0NBQTRCOztJQUM1QixzQ0FBZ0M7O0lBQ2hDLHVDQUFpRTs7SUFDakUsdUNBZ0JFIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNpbXBsZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydC1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdjdXN0b21UZXh0JykgY3VzdG9tVGV4dDogc3RyaW5nO1xuICBASW5wdXQoJ3BlcmNlbnQnKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgnYmFyQ29sb3InKSBiYXJDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoJ3RyYWNrQ29sb3InKSB0cmFja0NvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2NhbGVDb2xvcicpIHNjYWxlQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCdzY2FsZUxlbmd0aCcpIHNjYWxlTGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgnbGluZUNhcCcpIGxpbmVDYXA6IHN0cmluZztcbiAgQElucHV0KCdsaW5lV2lkdGgnKSBsaW5lV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCd0cmFja1dpZHRoJykgdHJhY2tXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoJ3NpemUnKSBzaXplOiBudW1iZXI7XG4gIEBJbnB1dCgncm90YXRlJykgcm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgnYW5pbWF0ZScpIGFuaW1hdGU6IHsgZHVyYXRpb246IHN0cmluZywgZW5hYmxlZDogYm9vbGVhbn07XG4gIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgYmFyQ29sb3I6IG51bGwsXG4gICAgdHJhY2tDb2xvcjogbnVsbCxcbiAgICBzY2FsZUNvbG9yOiBudWxsLFxuICAgIHNjYWxlTGVuZ3RoOiAnJyxcbiAgICBsaW5lQ2FwOiBudWxsLFxuICAgIGxpbmVXaWR0aDogbnVsbCxcbiAgICB0cmFja1dpZHRoOiBudWxsLFxuICAgIHNpemU6IG51bGwsXG4gICAgcm90YXRlOiBudWxsLFxuICAgIGR1cmF0aW9uOiBudWxsLFxuICAgIGVuYWJsZUFuaW1hdGlvbjogbnVsbCxcbiAgICBhbmltYXRlOiB7XG4gICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9wdGlvbnMuYmFyQ29sb3IgPSAnIycgKyB0aGlzLmJhckNvbG9yO1xuICAgIHRoaXMub3B0aW9ucy50cmFja0NvbG9yID0gJyMnICsgdGhpcy50cmFja0NvbG9yO1xuICAgIHRoaXMub3B0aW9ucy5zY2FsZUNvbG9yID0gJyMnICsgdGhpcy5zY2FsZUNvbG9yO1xuICAgIHRoaXMub3B0aW9ucy5zY2FsZUxlbmd0aCA9IHRoaXMuc2NhbGVMZW5ndGg7XG4gICAgdGhpcy5vcHRpb25zLmxpbmVDYXAgPSB0aGlzLmxpbmVDYXA7XG4gICAgdGhpcy5vcHRpb25zLmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgIHRoaXMub3B0aW9ucy50cmFja1dpZHRoID0gdGhpcy50cmFja1dpZHRoO1xuICAgIHRoaXMub3B0aW9ucy5zaXplID0gdGhpcy5zaXplO1xuICAgIHRoaXMub3B0aW9ucy5yb3RhdGUgPSB0aGlzLnJvdGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMuYW5pbWF0ZS5kdXJhdGlvbiA9IHRoaXMuYW5pbWF0ZS5kdXJhdGlvbjtcbiAgICB0aGlzLm9wdGlvbnMuYW5pbWF0ZS5lbmFibGVkID0gdGhpcy5hbmltYXRlLmVuYWJsZWQ7XG4gIH1cblxufVxuXG4iXX0=