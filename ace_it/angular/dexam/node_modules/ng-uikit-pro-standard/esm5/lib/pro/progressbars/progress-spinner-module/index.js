/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MdProgressSpinnerComponent, MdSpinnerComponent, MdProgressSpinnerCssMatStylerDirective, } from './progress-spinner.component';
import { ProgressSpinnerComponent } from '../progress-spinner.component';
var MdProgressSpinnerModule = /** @class */ (function () {
    function MdProgressSpinnerModule() {
    }
    /** @deprecated */
    /**
     * @deprecated
     * @return {?}
     */
    MdProgressSpinnerModule.forRoot = /**
     * @deprecated
     * @return {?}
     */
    function () {
        return {
            ngModule: MdProgressSpinnerModule,
            providers: []
        };
    };
    MdProgressSpinnerModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        MdProgressSpinnerComponent,
                        MdSpinnerComponent,
                        MdProgressSpinnerCssMatStylerDirective,
                        ProgressSpinnerComponent
                    ],
                    declarations: [
                        MdProgressSpinnerComponent,
                        MdSpinnerComponent,
                        MdProgressSpinnerCssMatStylerDirective,
                        ProgressSpinnerComponent
                    ],
                },] }
    ];
    return MdProgressSpinnerModule;
}());
export { MdProgressSpinnerModule };
export { MdProgressSpinnerCssMatStylerDirective, MdProgressSpinnerComponent, MdSpinnerComponent } from './progress-spinner.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLW1vZHVsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixrQkFBa0IsRUFDbEIsc0NBQXNDLEdBQ3ZDLE1BQU0sOEJBQThCLENBQUM7QUFFdEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHekU7SUFBQTtJQXVCQSxDQUFDO0lBUEMsa0JBQWtCOzs7OztJQUNYLCtCQUFPOzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOztnQkF0QkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCwwQkFBMEI7d0JBQzFCLGtCQUFrQjt3QkFDbEIsc0NBQXNDO3dCQUN0Qyx3QkFBd0I7cUJBQ3pCO29CQUNELFlBQVksRUFBRTt3QkFDWiwwQkFBMEI7d0JBQzFCLGtCQUFrQjt3QkFDbEIsc0NBQXNDO3dCQUN0Qyx3QkFBd0I7cUJBQ3pCO2lCQUNGOztJQVVELDhCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUFFRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQztBQUNuQyxPQUFPLEVBRUwsc0NBQXNDLEVBQ3RDLDBCQUEwQixFQUMxQixrQkFBa0IsRUFDbkIsTUFBTSw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgTWRTcGlubmVyQ29tcG9uZW50LFxuICBNZFByb2dyZXNzU3Bpbm5lckNzc01hdFN0eWxlckRpcmVjdGl2ZSxcbn0gZnJvbSAnLi9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4uL3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbXG4gICAgTWRQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQsXG4gICAgTWRTcGlubmVyQ29tcG9uZW50LFxuICAgIE1kUHJvZ3Jlc3NTcGlubmVyQ3NzTWF0U3R5bGVyRGlyZWN0aXZlLFxuICAgIFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgICBNZFNwaW5uZXJDb21wb25lbnQsXG4gICAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50XG4gIF0sXG59KVxuXG5jbGFzcyBNZFByb2dyZXNzU3Bpbm5lck1vZHVsZSB7XG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1kUHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHsgTWRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfTtcbmV4cG9ydCB7XG4gIFByb2dyZXNzU3Bpbm5lck1vZGUsXG4gIE1kUHJvZ3Jlc3NTcGlubmVyQ3NzTWF0U3R5bGVyRGlyZWN0aXZlLFxuICBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgTWRTcGlubmVyQ29tcG9uZW50XG59IGZyb20gJy4vcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQnO1xuIl19