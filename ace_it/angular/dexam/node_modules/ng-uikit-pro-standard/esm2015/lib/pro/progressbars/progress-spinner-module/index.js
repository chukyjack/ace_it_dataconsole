/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MdProgressSpinnerComponent, MdSpinnerComponent, MdProgressSpinnerCssMatStylerDirective, } from './progress-spinner.component';
import { ProgressSpinnerComponent } from '../progress-spinner.component';
class MdProgressSpinnerModule {
    /**
     * @deprecated
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MdProgressSpinnerModule,
            providers: []
        };
    }
}
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
export { MdProgressSpinnerModule };
export { MdProgressSpinnerCssMatStylerDirective, MdProgressSpinnerComponent, MdSpinnerComponent } from './progress-spinner.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLW1vZHVsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixrQkFBa0IsRUFDbEIsc0NBQXNDLEdBQ3ZDLE1BQU0sOEJBQThCLENBQUM7QUFFdEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHekUsTUFlTSx1QkFBdUI7Ozs7O0lBRTNCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7O1lBdEJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsMEJBQTBCO29CQUMxQixrQkFBa0I7b0JBQ2xCLHNDQUFzQztvQkFDdEMsd0JBQXdCO2lCQUN6QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osMEJBQTBCO29CQUMxQixrQkFBa0I7b0JBQ2xCLHNDQUFzQztvQkFDdEMsd0JBQXdCO2lCQUN6QjthQUNGOztBQVlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxDQUFDO0FBQ25DLE9BQU8sRUFFTCxzQ0FBc0MsRUFDdEMsMEJBQTBCLEVBQzFCLGtCQUFrQixFQUNuQixNQUFNLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1kUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxuICBNZFNwaW5uZXJDb21wb25lbnQsXG4gIE1kUHJvZ3Jlc3NTcGlubmVyQ3NzTWF0U3R5bGVyRGlyZWN0aXZlLFxufSBmcm9tICcuL3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtcbiAgICBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgICBNZFNwaW5uZXJDb21wb25lbnQsXG4gICAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1kUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxuICAgIE1kU3Bpbm5lckNvbXBvbmVudCxcbiAgICBNZFByb2dyZXNzU3Bpbm5lckNzc01hdFN0eWxlckRpcmVjdGl2ZSxcbiAgICBQcm9ncmVzc1NwaW5uZXJDb21wb25lbnRcbiAgXSxcbn0pXG5cbmNsYXNzIE1kUHJvZ3Jlc3NTcGlubmVyTW9kdWxlIHtcbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgeyBNZFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9O1xuZXhwb3J0IHtcbiAgUHJvZ3Jlc3NTcGlubmVyTW9kZSxcbiAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG4gIE1kUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxuICBNZFNwaW5uZXJDb21wb25lbnRcbn0gZnJvbSAnLi9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudCc7XG4iXX0=