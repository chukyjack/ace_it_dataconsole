/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ProgressbarConfigComponent } from './progressbar.config.component';
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent(config) {
        Object.assign(this, config);
    }
    ProgressbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-progressbar, mdb-progress',
                    template: "<div mdbProgress [animate]=\"animate\" [max]=\"max\">\n  <mdb-bar [type]=\"type\" [value]=\"value\">\n    <ng-content></ng-content>\n  </mdb-bar>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: ProgressbarConfigComponent }
    ]; };
    ProgressbarComponent.propDecorators = {
        animate: [{ type: Input }],
        max: [{ type: Input }],
        type: [{ type: Input }],
        value: [{ type: Input }]
    };
    return ProgressbarComponent;
}());
export { ProgressbarComponent };
if (false) {
    /**
     * if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4)
     * @type {?}
     */
    ProgressbarComponent.prototype.animate;
    /**
     * maximum total value of progress element
     * @type {?}
     */
    ProgressbarComponent.prototype.max;
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @type {?}
     */
    ProgressbarComponent.prototype.type;
    /**
     * current value of progress bar
     * @type {?}
     */
    ProgressbarComponent.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RTtJQWNFLDhCQUFtQixNQUFrQztRQUNuRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLHVLQUEyQztpQkFDNUM7Ozs7Z0JBTFEsMEJBQTBCOzs7MEJBUWhDLEtBQUs7c0JBRUwsS0FBSzt1QkFFTCxLQUFLO3dCQUVMLEtBQUs7O0lBS1IsMkJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWJZLG9CQUFvQjs7Ozs7O0lBRS9CLHVDQUFpQzs7Ozs7SUFFakMsbUNBQTRCOzs7OztJQUU1QixvQ0FBNkI7Ozs7O0lBRTdCLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb25maWcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXByb2dyZXNzYmFyLCBtZGItcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29tcG9uZW50IHtcbiAgICAvKiogaWYgYHRydWVgIGNoYW5naW5nIHZhbHVlIG9mIHByb2dyZXNzIGJhciB3aWxsIGJlIGFuaW1hdGVkIChub3RlOiBub3Qgc3VwcG9ydGVkIGJ5IEJvb3RzdHJhcCA0KSAqL1xuICBASW5wdXQoKSBwdWJsaWMgYW5pbWF0ZTogYm9vbGVhbjtcbiAgLyoqIG1heGltdW0gdG90YWwgdmFsdWUgb2YgcHJvZ3Jlc3MgZWxlbWVudCAqL1xuICBASW5wdXQoKSBwdWJsaWMgbWF4OiBudW1iZXI7XG4gIC8qKiBwcm92aWRlIG9uZSBvZiB0aGUgZm91ciBzdXBwb3J0ZWQgY29udGV4dHVhbCBjbGFzc2VzOiBgc3VjY2Vzc2AsIGBpbmZvYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCAqL1xuICBASW5wdXQoKSBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAvKiogY3VycmVudCB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIgKi9cbiAgQElucHV0KCkgcHVibGljIHZhbHVlOiBudW1iZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogUHJvZ3Jlc3NiYXJDb25maWdDb21wb25lbnQpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cbn1cbiJdfQ==