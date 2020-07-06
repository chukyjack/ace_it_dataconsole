/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
export { BarComponent } from './bar.component';
export { ProgressDirective } from './progress.directive';
export { ProgressbarComponent } from './progressbar.component';
export { ProgressbarModule } from './progressbar.module';
export { ProgressbarConfigComponent } from './progressbar.config.component';
export { ProgressSpinnerComponent } from './progress-spinner.component';
import { ProgressbarModule } from './progressbar.module';
import { MdProgressSpinnerModule } from './progress-spinner-module/index';
import { MdProgressBarModule } from './progress-bars-module/index';
/** @type {?} */
var MATERIAL_MODULES = [
    MdProgressBarModule,
    MdProgressSpinnerModule,
    ProgressbarModule
];
var PreloadersModule = /** @class */ (function () {
    function PreloadersModule() {
    }
    PreloadersModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MdProgressBarModule.forRoot(),
                        MdProgressSpinnerModule.forRoot(),
                        ProgressbarModule.forRoot()
                    ],
                    exports: MATERIAL_MODULES,
                },] }
    ];
    return PreloadersModule;
}());
export { PreloadersModule };
/**
 * @deprecated
 */
var ProgressBars = /** @class */ (function () {
    function ProgressBars() {
    }
    /** @deprecated */
    /**
     * @deprecated
     * @return {?}
     */
    ProgressBars.forRoot = /**
     * @deprecated
     * @return {?}
     */
    function () {
        return { ngModule: PreloadersModule };
    };
    ProgressBars.decorators = [
        { type: NgModule, args: [{
                    imports: MATERIAL_MODULES,
                    exports: MATERIAL_MODULES,
                },] }
    ];
    return ProgressBars;
}());
export { ProgressBars };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztJQUc3RCxnQkFBZ0IsR0FBRztJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtDQUNsQjtBQUVEO0lBQUE7SUFTZ0MsQ0FBQzs7Z0JBVGhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1QsbUJBQW1CLENBQUMsT0FBTyxFQUFFO3dCQUM3Qix1QkFBdUIsQ0FBQyxPQUFPLEVBQUU7d0JBQ2pDLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFLGdCQUFnQjtpQkFDMUI7O0lBRStCLHVCQUFDO0NBQUEsQUFUakMsSUFTaUM7U0FBcEIsZ0JBQWdCOzs7O0FBRzdCO0lBQUE7SUFTQSxDQUFDO0lBSkMsa0JBQWtCOzs7OztJQUNYLG9CQUFPOzs7O0lBQWQ7UUFDRSxPQUFPLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBUkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLE9BQU8sRUFBRSxnQkFBZ0I7aUJBQzFCOztJQU1ELG1CQUFDO0NBQUEsQUFURCxJQVNDO1NBTFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgeyBCYXJDb21wb25lbnQgfSBmcm9tICcuL2Jhci5jb21wb25lbnQnO1xuZXhwb3J0IHsgUHJvZ3Jlc3NEaXJlY3RpdmUgfSBmcm9tICcuL3Byb2dyZXNzLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBQcm9ncmVzc2JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50JztcbmV4cG9ydCB7IFByb2dyZXNzYmFyTW9kdWxlIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5tb2R1bGUnO1xuZXhwb3J0IHsgUHJvZ3Jlc3NiYXJDb25maWdDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbmZpZy5jb21wb25lbnQnO1xuZXhwb3J0IHsgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9ncmVzc2Jhck1vZHVsZSB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIubW9kdWxlJztcblxuaW1wb3J0IHsgTWRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICcuL3Byb2dyZXNzLXNwaW5uZXItbW9kdWxlL2luZGV4JztcbmltcG9ydCB7IE1kUHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICcuL3Byb2dyZXNzLWJhcnMtbW9kdWxlL2luZGV4JztcblxuXG5jb25zdCBNQVRFUklBTF9NT0RVTEVTID0gW1xuICBNZFByb2dyZXNzQmFyTW9kdWxlLFxuICBNZFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgUHJvZ3Jlc3NiYXJNb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgTWRQcm9ncmVzc0Jhck1vZHVsZS5mb3JSb290KCksXG4gIE1kUHJvZ3Jlc3NTcGlubmVyTW9kdWxlLmZvclJvb3QoKSxcbiAgUHJvZ3Jlc3NiYXJNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGV4cG9ydHM6IE1BVEVSSUFMX01PRFVMRVMsXG59KVxuXG5leHBvcnQgY2xhc3MgUHJlbG9hZGVyc01vZHVsZSB7IH1cblxuLyoqIEBkZXByZWNhdGVkICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBNQVRFUklBTF9NT0RVTEVTLFxuICBleHBvcnRzOiBNQVRFUklBTF9NT0RVTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhcnMge1xuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtuZ01vZHVsZTogUHJlbG9hZGVyc01vZHVsZX07XG4gIH1cbn1cbiJdfQ==