/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export class ProgressSpinnerComponent {
    /**
     * @param {?} el
     * @param {?} platformId
     */
    constructor(el, platformId) {
        this.addClass = 'spinner-blue-only';
        this.isBrowser = false;
        this.spinnerType = '';
        this.spinnerColor = 'rainbow';
        this.isBrowser = isPlatformBrowser(platformId);
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const hostElem = this.el.nativeElement;
        /** @type {?} */
        const colorClass = this.spinnerColor;
        this.addClass = 'spinner-rainbow';
        switch (colorClass) {
            case 'green':
                this.addClass = 'spinner-green-only';
                break;
            case 'blue':
                this.addClass = 'spinner-blue-only';
                break;
            case 'yellow':
                this.addClass = 'spinner-yellow-only';
                break;
            case 'red':
                this.addClass = 'spinner-red-only';
                break;
            case 'rainbow':
                this.addClass = 'spinner-rainbow spinner-blue-only mat-progress-spinner';
                this.spinerRun();
                break;
        }
        hostElem.children[0].children[0].className += ' ' + this.addClass;
    }
    /**
     * @return {?}
     */
    spinerRun() {
        /** @type {?} */
        let counter = 0;
        /** @type {?} */
        const hostElem = this.el.nativeElement;
        if (this.isBrowser) {
            setInterval((/**
             * @return {?}
             */
            () => {
                switch (counter) {
                    case 0:
                        this.addClass = 'spinner-red-only mat-progress-spinner ';
                        break;
                    case 1:
                        this.addClass = 'spinner-yellow-only mat-progress-spinner';
                        break;
                    case 2:
                        this.addClass = 'spinner-blue-only mat-progress-spinner';
                        break;
                    case 3:
                        this.addClass = 'spinner-green-only mat-progress-spinner';
                        break;
                }
                hostElem.children[0].children[0].className = ' ' + this.addClass;
                if (counter < 3) {
                    counter++;
                }
                else {
                    counter = 0;
                }
            }), 1333);
        }
    }
}
ProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-spinner',
                template: "<div class=\"preloader-wrapper active  {{spinnerType}}\">\n    <mdb-Spinners mdbSpinners mode=\"indeterminate\"></mdb-Spinners>\n</div>"
            }] }
];
/** @nocollapse */
ProgressSpinnerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ProgressSpinnerComponent.propDecorators = {
    spinnerType: [{ type: Input }],
    spinnerColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProgressSpinnerComponent.prototype.el;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.addClass;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.isBrowser;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.spinnerType;
    /** @type {?} */
    ProgressSpinnerComponent.prototype.spinnerColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFpQixNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTXBELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBT2pDLFlBQVksRUFBYyxFQUF1QixVQUFrQjtRQUxuRSxhQUFRLEdBQVcsbUJBQW1CLENBQUM7UUFDdkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNULGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBRzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELGVBQWU7O2NBQ0wsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTs7Y0FDaEMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFFbEMsUUFBUSxVQUFVLEVBQUU7WUFDaEIsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ3JDLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztnQkFDcEMsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDO2dCQUN0QyxNQUFNO1lBQ1YsS0FBSyxLQUFLO2dCQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWtCLENBQUM7Z0JBQ25DLE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyx3REFBd0QsQ0FBQztnQkFDekUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixNQUFNO1NBQ2I7UUFDRCxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVELFNBQVM7O1lBQ0QsT0FBTyxHQUFHLENBQUM7O2NBQ1QsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtRQUN0QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsV0FBVzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNiLFFBQVEsT0FBTyxFQUFFO29CQUNiLEtBQUssQ0FBQzt3QkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLHdDQUF3QyxDQUFDO3dCQUN6RCxNQUFNO29CQUNWLEtBQUssQ0FBQzt3QkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLDBDQUEwQyxDQUFDO3dCQUMzRCxNQUFNO29CQUNWLEtBQUssQ0FBQzt3QkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLHdDQUF3QyxDQUFDO3dCQUN6RCxNQUFNO29CQUNWLEtBQUssQ0FBQzt3QkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLHlDQUF5QyxDQUFDO3dCQUMxRCxNQUFNO2lCQUNiO2dCQUVELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDO2lCQUNiO3FCQUFNO29CQUNILE9BQU8sR0FBRyxDQUFDLENBQUM7aUJBQ2Y7WUFDTCxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjtJQUNMLENBQUM7OztZQXRFSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG1KQUE4QzthQUNqRDs7OztZQU4wQixVQUFVO3lDQWNKLE1BQU0sU0FBQyxXQUFXOzs7MEJBSDlDLEtBQUs7MkJBQ0wsS0FBSzs7OztJQUpOLHNDQUFlOztJQUNmLDRDQUF1Qzs7SUFDdkMsNkNBQWtCOztJQUNsQiwrQ0FBMEI7O0lBQzFCLGdEQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIEluamVjdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtZGItc3Bpbm5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICdwcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBlbDogRWxlbWVudFJlZjtcbiAgICBhZGRDbGFzczogU3RyaW5nID0gJ3NwaW5uZXItYmx1ZS1vbmx5JztcbiAgICBpc0Jyb3dzZXIgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzcGlubmVyVHlwZSA9ICcnO1xuICAgIEBJbnB1dCgpIHNwaW5uZXJDb2xvciA9ICdyYWluYm93JztcblxuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgY29uc3QgaG9zdEVsZW0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbG9yQ2xhc3MgPSB0aGlzLnNwaW5uZXJDb2xvcjtcbiAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXJhaW5ib3cnO1xuXG4gICAgICAgIHN3aXRjaCAoY29sb3JDbGFzcykge1xuICAgICAgICAgICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1ncmVlbi1vbmx5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JsdWUnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1ibHVlLW9ubHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneWVsbG93JzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXIteWVsbG93LW9ubHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVkJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItcmVkLW9ubHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmFpbmJvdyc6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXJhaW5ib3cgc3Bpbm5lci1ibHVlLW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXInO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVyUnVuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaG9zdEVsZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuYWRkQ2xhc3M7XG4gICAgfVxuXG4gICAgc3BpbmVyUnVuKCkge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGNvbnN0IGhvc3RFbGVtID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvdW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXJlZC1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyICc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXllbGxvdy1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItYmx1ZS1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItZ3JlZW4tb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBob3N0RWxlbS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc05hbWUgPSAnICcgKyB0aGlzLmFkZENsYXNzO1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyIDwgMykge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTMzMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=