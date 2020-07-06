/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var ProgressSpinnerComponent = /** @class */ (function () {
    function ProgressSpinnerComponent(el, platformId) {
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
    ProgressSpinnerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hostElem = this.el.nativeElement;
        /** @type {?} */
        var colorClass = this.spinnerColor;
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
    };
    /**
     * @return {?}
     */
    ProgressSpinnerComponent.prototype.spinerRun = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var counter = 0;
        /** @type {?} */
        var hostElem = this.el.nativeElement;
        if (this.isBrowser) {
            setInterval((/**
             * @return {?}
             */
            function () {
                switch (counter) {
                    case 0:
                        _this.addClass = 'spinner-red-only mat-progress-spinner ';
                        break;
                    case 1:
                        _this.addClass = 'spinner-yellow-only mat-progress-spinner';
                        break;
                    case 2:
                        _this.addClass = 'spinner-blue-only mat-progress-spinner';
                        break;
                    case 3:
                        _this.addClass = 'spinner-green-only mat-progress-spinner';
                        break;
                }
                hostElem.children[0].children[0].className = ' ' + _this.addClass;
                if (counter < 3) {
                    counter++;
                }
                else {
                    counter = 0;
                }
            }), 1333);
        }
    };
    ProgressSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-spinner',
                    template: "<div class=\"preloader-wrapper active  {{spinnerType}}\">\n    <mdb-Spinners mdbSpinners mode=\"indeterminate\"></mdb-Spinners>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ProgressSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ProgressSpinnerComponent.propDecorators = {
        spinnerType: [{ type: Input }],
        spinnerColor: [{ type: Input }]
    };
    return ProgressSpinnerComponent;
}());
export { ProgressSpinnerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFpQixNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBEO0lBV0ksa0NBQVksRUFBYyxFQUF1QixVQUFrQjtRQUxuRSxhQUFRLEdBQVcsbUJBQW1CLENBQUM7UUFDdkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNULGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBRzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELGtEQUFlOzs7SUFBZjs7WUFDVSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztZQUNoQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVk7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUVsQyxRQUFRLFVBQVUsRUFBRTtZQUNoQixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztnQkFDckMsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO2dCQUNwQyxNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3RDLE1BQU07WUFDVixLQUFLLEtBQUs7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztnQkFDbkMsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLHdEQUF3RCxDQUFDO2dCQUN6RSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLE1BQU07U0FDYjtRQUNELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0RSxDQUFDOzs7O0lBRUQsNENBQVM7OztJQUFUO1FBQUEsaUJBNEJDOztZQTNCTyxPQUFPLEdBQUcsQ0FBQzs7WUFDVCxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1FBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixXQUFXOzs7WUFBQztnQkFDUixRQUFRLE9BQU8sRUFBRTtvQkFDYixLQUFLLENBQUM7d0JBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRyx3Q0FBd0MsQ0FBQzt3QkFDekQsTUFBTTtvQkFDVixLQUFLLENBQUM7d0JBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRywwQ0FBMEMsQ0FBQzt3QkFDM0QsTUFBTTtvQkFDVixLQUFLLENBQUM7d0JBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRyx3Q0FBd0MsQ0FBQzt3QkFDekQsTUFBTTtvQkFDVixLQUFLLENBQUM7d0JBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRyx5Q0FBeUMsQ0FBQzt3QkFDMUQsTUFBTTtpQkFDYjtnQkFFRCxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ2pFLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQztpQkFDYjtxQkFBTTtvQkFDSCxPQUFPLEdBQUcsQ0FBQyxDQUFDO2lCQUNmO1lBQ0wsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7SUFDTCxDQUFDOztnQkF0RUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixtSkFBOEM7aUJBQ2pEOzs7O2dCQU4wQixVQUFVOzZDQWNKLE1BQU0sU0FBQyxXQUFXOzs7OEJBSDlDLEtBQUs7K0JBQ0wsS0FBSzs7SUE4RFYsK0JBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQW5FWSx3QkFBd0I7OztJQUNqQyxzQ0FBZTs7SUFDZiw0Q0FBdUM7O0lBQ3ZDLDZDQUFrQjs7SUFDbEIsK0NBQTBCOztJQUMxQixnREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBJbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWRiLXNwaW5uZXInLFxuICAgIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgZWw6IEVsZW1lbnRSZWY7XG4gICAgYWRkQ2xhc3M6IFN0cmluZyA9ICdzcGlubmVyLWJsdWUtb25seSc7XG4gICAgaXNCcm93c2VyID0gZmFsc2U7XG4gICAgQElucHV0KCkgc3Bpbm5lclR5cGUgPSAnJztcbiAgICBASW5wdXQoKSBzcGlubmVyQ29sb3IgPSAncmFpbmJvdyc7XG5cbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnN0IGhvc3RFbGVtID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBjb2xvckNsYXNzID0gdGhpcy5zcGlubmVyQ29sb3I7XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1yYWluYm93JztcblxuICAgICAgICBzd2l0Y2ggKGNvbG9yQ2xhc3MpIHtcbiAgICAgICAgICAgIGNhc2UgJ2dyZWVuJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItZ3JlZW4tb25seSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdibHVlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItYmx1ZS1vbmx5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3llbGxvdyc6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXllbGxvdy1vbmx5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXJlZC1vbmx5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JhaW5ib3cnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1yYWluYm93IHNwaW5uZXItYmx1ZS1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyJztcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lclJ1bigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGhvc3RFbGVtLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmFkZENsYXNzO1xuICAgIH1cblxuICAgIHNwaW5lclJ1bigpIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBjb25zdCBob3N0RWxlbSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjb3VudGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1yZWQtb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci15ZWxsb3ctb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLWJsdWUtb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLWdyZWVuLW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaG9zdEVsZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2xhc3NOYW1lID0gJyAnICsgdGhpcy5hZGRDbGFzcztcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlciA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEzMzMpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19