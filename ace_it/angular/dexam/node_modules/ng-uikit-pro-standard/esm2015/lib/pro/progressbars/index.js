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
const MATERIAL_MODULES = [
    MdProgressBarModule,
    MdProgressSpinnerModule,
    ProgressbarModule
];
export class PreloadersModule {
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
/**
 * @deprecated
 */
export class ProgressBars {
    /**
     * @deprecated
     * @return {?}
     */
    static forRoot() {
        return { ngModule: PreloadersModule };
    }
}
ProgressBars.decorators = [
    { type: NgModule, args: [{
                imports: MATERIAL_MODULES,
                exports: MATERIAL_MODULES,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztNQUc3RCxnQkFBZ0IsR0FBRztJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtDQUNsQjtBQVdELE1BQU0sT0FBTyxnQkFBZ0I7OztZQVQ1QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNULG1CQUFtQixDQUFDLE9BQU8sRUFBRTtvQkFDN0IsdUJBQXVCLENBQUMsT0FBTyxFQUFFO29CQUNqQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7aUJBQzFCO2dCQUNELE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUI7Ozs7O0FBU0QsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBRXZCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTyxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDO0lBQ3RDLENBQUM7OztZQVJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixPQUFPLEVBQUUsZ0JBQWdCO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB7IEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XG5leHBvcnQgeyBQcm9ncmVzc0RpcmVjdGl2ZSB9IGZyb20gJy4vcHJvZ3Jlc3MuZGlyZWN0aXZlJztcbmV4cG9ydCB7IFByb2dyZXNzYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xuZXhwb3J0IHsgUHJvZ3Jlc3NiYXJNb2R1bGUgfSBmcm9tICcuL3Byb2dyZXNzYmFyLm1vZHVsZSc7XG5leHBvcnQgeyBQcm9ncmVzc2JhckNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuY29uZmlnLmNvbXBvbmVudCc7XG5leHBvcnQgeyBQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2dyZXNzYmFyTW9kdWxlIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBNZFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4vcHJvZ3Jlc3Mtc3Bpbm5lci1tb2R1bGUvaW5kZXgnO1xuaW1wb3J0IHsgTWRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJy4vcHJvZ3Jlc3MtYmFycy1tb2R1bGUvaW5kZXgnO1xuXG5cbmNvbnN0IE1BVEVSSUFMX01PRFVMRVMgPSBbXG4gIE1kUHJvZ3Jlc3NCYXJNb2R1bGUsXG4gIE1kUHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICBQcm9ncmVzc2Jhck1vZHVsZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBNZFByb2dyZXNzQmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgTWRQcm9ncmVzc1NwaW5uZXJNb2R1bGUuZm9yUm9vdCgpLFxuICBQcm9ncmVzc2Jhck1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZXhwb3J0czogTUFURVJJQUxfTU9EVUxFUyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcmVsb2FkZXJzTW9kdWxlIHsgfVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IE1BVEVSSUFMX01PRFVMRVMsXG4gIGV4cG9ydHM6IE1BVEVSSUFMX01PRFVMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFycyB7XG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge25nTW9kdWxlOiBQcmVsb2FkZXJzTW9kdWxlfTtcbiAgfVxufVxuIl19