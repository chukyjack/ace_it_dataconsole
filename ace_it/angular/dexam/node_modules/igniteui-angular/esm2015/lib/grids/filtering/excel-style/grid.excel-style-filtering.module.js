/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxGridExcelStyleFilteringComponent, IgxExcelStyleSortingTemplateDirective, IgxExcelStyleHidingTemplateDirective, IgxExcelStyleMovingTemplateDirective, IgxExcelStylePinningTemplateDirective } from './grid.excel-style-filtering.component';
import { IgxExcelStyleSortingComponent } from './excel-style-sorting.component';
import { IgxExcelStyleColumnMovingComponent } from './excel-style-column-moving.component';
import { IgxExcelStyleSearchComponent } from './excel-style-search.component';
import { IgxExcelStyleCustomDialogComponent } from './excel-style-custom-dialog.component';
import { IgxExcelStyleDefaultExpressionComponent } from './excel-style-default-expression.component';
import { IgxExcelStyleDateExpressionComponent } from './excel-style-date-expression.component';
import { IgxSelectionAPIService } from '../../../core/selection';
import { FormsModule } from '@angular/forms';
import { IgxGridPipesModule } from '../../grid-pipes.module';
import { IgxButtonModule } from '../../../directives/button/button.directive';
import { IgxButtonGroupModule } from '../../../buttonGroup/buttonGroup.component';
import { IgxDatePickerModule } from '../../../date-picker/date-picker.component';
import { IgxIconModule } from '../../../icon/index';
import { IgxRippleModule } from '../../../directives/ripple/ripple.directive';
import { IgxInputGroupModule } from '../../../input-group/input-group.component';
import { IgxDropDownModule } from '../../../drop-down/index';
import { IgxForOfModule } from '../../../directives/for-of/for_of.directive';
import { IgxCheckboxModule } from '../../../checkbox/checkbox.component';
import { IgxFilterModule } from '../../../directives/filter/filter.directive';
import { IgxToggleModule } from '../../../directives/toggle/toggle.directive';
import { IgxListModule } from '../../../list/list.component';
import { IgxExcelStyleSearchFilterPipe } from './excel-style-search.pipe';
/**
 * @hidden
 */
export class IgxGridExcelStyleFilteringModule {
}
IgxGridExcelStyleFilteringModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    IgxGridExcelStyleFilteringComponent,
                    IgxExcelStyleSortingComponent,
                    IgxExcelStyleColumnMovingComponent,
                    IgxExcelStyleSearchComponent,
                    IgxExcelStyleCustomDialogComponent,
                    IgxExcelStyleDefaultExpressionComponent,
                    IgxExcelStyleDateExpressionComponent,
                    IgxExcelStyleSortingTemplateDirective,
                    IgxExcelStyleHidingTemplateDirective,
                    IgxExcelStyleMovingTemplateDirective,
                    IgxExcelStylePinningTemplateDirective,
                    IgxExcelStyleSearchFilterPipe
                ],
                exports: [
                    IgxGridExcelStyleFilteringComponent,
                    IgxExcelStyleSortingTemplateDirective,
                    IgxExcelStyleHidingTemplateDirective,
                    IgxExcelStyleMovingTemplateDirective,
                    IgxExcelStylePinningTemplateDirective,
                    IgxExcelStyleDateExpressionComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    IgxGridPipesModule,
                    IgxButtonModule,
                    IgxButtonGroupModule,
                    IgxDatePickerModule,
                    IgxIconModule,
                    IgxRippleModule,
                    IgxInputGroupModule,
                    IgxDropDownModule,
                    IgxForOfModule,
                    IgxCheckboxModule,
                    IgxFilterModule,
                    IgxToggleModule,
                    IgxListModule
                ],
                entryComponents: [
                    IgxGridExcelStyleFilteringComponent
                ],
                providers: [
                    IgxSelectionAPIService
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5leGNlbC1zdHlsZS1maWx0ZXJpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9maWx0ZXJpbmcvZXhjZWwtc3R5bGUvZ3JpZC5leGNlbC1zdHlsZS1maWx0ZXJpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0gsbUNBQW1DLEVBQ25DLHFDQUFxQyxFQUNyQyxvQ0FBb0MsRUFDcEMsb0NBQW9DLEVBQ3BDLHFDQUFxQyxFQUN4QyxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFvRDFFLE1BQU0sT0FBTyxnQ0FBZ0M7OztZQS9DNUMsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixtQ0FBbUM7b0JBQ25DLDZCQUE2QjtvQkFDN0Isa0NBQWtDO29CQUNsQyw0QkFBNEI7b0JBQzVCLGtDQUFrQztvQkFDbEMsdUNBQXVDO29CQUN2QyxvQ0FBb0M7b0JBQ3BDLHFDQUFxQztvQkFDckMsb0NBQW9DO29CQUNwQyxvQ0FBb0M7b0JBQ3BDLHFDQUFxQztvQkFDckMsNkJBQTZCO2lCQUNoQztnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsbUNBQW1DO29CQUNuQyxxQ0FBcUM7b0JBQ3JDLG9DQUFvQztvQkFDcEMsb0NBQW9DO29CQUNwQyxxQ0FBcUM7b0JBQ3JDLG9DQUFvQztpQkFDdkM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixhQUFhO2lCQUNoQjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2IsbUNBQW1DO2lCQUN0QztnQkFDRCxTQUFTLEVBQUU7b0JBQ1Asc0JBQXNCO2lCQUN6QjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIElneEdyaWRFeGNlbFN0eWxlRmlsdGVyaW5nQ29tcG9uZW50LFxuICAgIElneEV4Y2VsU3R5bGVTb3J0aW5nVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSWd4RXhjZWxTdHlsZUhpZGluZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElneEV4Y2VsU3R5bGVNb3ZpbmdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJZ3hFeGNlbFN0eWxlUGlubmluZ1RlbXBsYXRlRGlyZWN0aXZlXG59IGZyb20gJy4vZ3JpZC5leGNlbC1zdHlsZS1maWx0ZXJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IElneEV4Y2VsU3R5bGVTb3J0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9leGNlbC1zdHlsZS1zb3J0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hFeGNlbFN0eWxlQ29sdW1uTW92aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9leGNlbC1zdHlsZS1jb2x1bW4tbW92aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hFeGNlbFN0eWxlU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9leGNlbC1zdHlsZS1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IElneEV4Y2VsU3R5bGVDdXN0b21EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2V4Y2VsLXN0eWxlLWN1c3RvbS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IElneEV4Y2VsU3R5bGVEZWZhdWx0RXhwcmVzc2lvbkNvbXBvbmVudCB9IGZyb20gJy4vZXhjZWwtc3R5bGUtZGVmYXVsdC1leHByZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hFeGNlbFN0eWxlRGF0ZUV4cHJlc3Npb25Db21wb25lbnQgfSBmcm9tICcuL2V4Y2VsLXN0eWxlLWRhdGUtZXhwcmVzc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4U2VsZWN0aW9uQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VsZWN0aW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSWd4R3JpZFBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vLi4vZ3JpZC1waXBlcy5tb2R1bGUnO1xuaW1wb3J0IHsgSWd4QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hCdXR0b25Hcm91cE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2J1dHRvbkdyb3VwL2J1dHRvbkdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElneEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9pY29uL2luZGV4JztcbmltcG9ydCB7IElneFJpcHBsZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4SW5wdXRHcm91cE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2lucHV0LWdyb3VwL2lucHV0LWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hEcm9wRG93bk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ryb3AtZG93bi9pbmRleCc7XG5pbXBvcnQgeyBJZ3hGb3JPZk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvZm9yLW9mL2Zvcl9vZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4Q2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RmlsdGVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9maWx0ZXIvZmlsdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hUb2dnbGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElneExpc3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9saXN0L2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IElneEV4Y2VsU3R5bGVTZWFyY2hGaWx0ZXJQaXBlIH0gZnJvbSAnLi9leGNlbC1zdHlsZS1zZWFyY2gucGlwZSc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBJZ3hHcmlkRXhjZWxTdHlsZUZpbHRlcmluZ0NvbXBvbmVudCxcbiAgICAgICAgSWd4RXhjZWxTdHlsZVNvcnRpbmdDb21wb25lbnQsXG4gICAgICAgIElneEV4Y2VsU3R5bGVDb2x1bW5Nb3ZpbmdDb21wb25lbnQsXG4gICAgICAgIElneEV4Y2VsU3R5bGVTZWFyY2hDb21wb25lbnQsXG4gICAgICAgIElneEV4Y2VsU3R5bGVDdXN0b21EaWFsb2dDb21wb25lbnQsXG4gICAgICAgIElneEV4Y2VsU3R5bGVEZWZhdWx0RXhwcmVzc2lvbkNvbXBvbmVudCxcbiAgICAgICAgSWd4RXhjZWxTdHlsZURhdGVFeHByZXNzaW9uQ29tcG9uZW50LFxuICAgICAgICBJZ3hFeGNlbFN0eWxlU29ydGluZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hFeGNlbFN0eWxlSGlkaW5nVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneEV4Y2VsU3R5bGVNb3ZpbmdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4RXhjZWxTdHlsZVBpbm5pbmdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4RXhjZWxTdHlsZVNlYXJjaEZpbHRlclBpcGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgSWd4R3JpZEV4Y2VsU3R5bGVGaWx0ZXJpbmdDb21wb25lbnQsXG4gICAgICAgIElneEV4Y2VsU3R5bGVTb3J0aW5nVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIElneEV4Y2VsU3R5bGVIaWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgSWd4RXhjZWxTdHlsZU1vdmluZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hFeGNlbFN0eWxlUGlubmluZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBJZ3hFeGNlbFN0eWxlRGF0ZUV4cHJlc3Npb25Db21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgSWd4R3JpZFBpcGVzTW9kdWxlLFxuICAgICAgICBJZ3hCdXR0b25Nb2R1bGUsXG4gICAgICAgIElneEJ1dHRvbkdyb3VwTW9kdWxlLFxuICAgICAgICBJZ3hEYXRlUGlja2VyTW9kdWxlLFxuICAgICAgICBJZ3hJY29uTW9kdWxlLFxuICAgICAgICBJZ3hSaXBwbGVNb2R1bGUsXG4gICAgICAgIElneElucHV0R3JvdXBNb2R1bGUsXG4gICAgICAgIElneERyb3BEb3duTW9kdWxlLFxuICAgICAgICBJZ3hGb3JPZk1vZHVsZSxcbiAgICAgICAgSWd4Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIElneEZpbHRlck1vZHVsZSxcbiAgICAgICAgSWd4VG9nZ2xlTW9kdWxlLFxuICAgICAgICBJZ3hMaXN0TW9kdWxlXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgSWd4R3JpZEV4Y2VsU3R5bGVGaWx0ZXJpbmdDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkRXhjZWxTdHlsZUZpbHRlcmluZ01vZHVsZSB7XG5cbn1cbiJdfQ==