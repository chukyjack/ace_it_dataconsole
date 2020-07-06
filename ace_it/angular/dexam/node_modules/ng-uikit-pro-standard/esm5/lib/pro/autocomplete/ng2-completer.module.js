/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompleterComponent } from './components/completer.component';
import { CompleterListItemComponent } from './components/completer-list-item.component';
import { CompleterService } from './services/completer.service';
import { LocalDataFactoryProvider, RemoteDataFactoryProvider } from './services/data-factory.service';
import { MdbCompleterDirective } from './directives/completer.directive';
import { MdbDropdownDirective } from './directives/dropdown.directive';
import { MdbInputCompleteDirective } from './directives/completer-input.directive';
import { MdbListDirective } from './directives/list-context.directive';
import { MdbRowDirective } from './directives/row.directive';
import { CommonModule } from '@angular/common';
var AutocompleteModule = /** @class */ (function () {
    function AutocompleteModule() {
    }
    AutocompleteModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        HttpClientModule
                    ],
                    declarations: [
                        CompleterListItemComponent,
                        MdbCompleterDirective,
                        MdbDropdownDirective,
                        MdbInputCompleteDirective,
                        MdbListDirective,
                        MdbRowDirective,
                        CompleterComponent
                    ],
                    exports: [
                        CompleterComponent,
                        CompleterListItemComponent,
                        MdbCompleterDirective,
                        MdbDropdownDirective,
                        MdbInputCompleteDirective,
                        MdbListDirective,
                        MdbRowDirective
                    ],
                    providers: [
                        CompleterService,
                        LocalDataFactoryProvider,
                        RemoteDataFactoryProvider
                    ]
                },] }
    ];
    return AutocompleteModule;
}());
export { AutocompleteModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNvbXBsZXRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG9jb21wbGV0ZS9uZzItY29tcGxldGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQztJQUFBO0lBOEJrQyxDQUFDOztnQkE5QmxDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGdCQUFnQjtxQkFDakI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLDBCQUEwQjt3QkFDMUIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLHlCQUF5Qjt3QkFDekIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsMEJBQTBCO3dCQUMxQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIseUJBQXlCO3dCQUN6QixnQkFBZ0I7d0JBQ2hCLGVBQWU7cUJBQ2hCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxnQkFBZ0I7d0JBQ2hCLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3FCQUMxQjtpQkFDRjs7SUFDaUMseUJBQUM7Q0FBQSxBQTlCbkMsSUE4Qm1DO1NBQXRCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21wbGV0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcGxldGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wbGV0ZXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb21wbGV0ZXItbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wbGV0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21wbGV0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbERhdGFGYWN0b3J5UHJvdmlkZXIsIFJlbW90ZURhdGFGYWN0b3J5UHJvdmlkZXIgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEtZmFjdG9yeS5zZXJ2aWNlJztcbmltcG9ydCB7IE1kYkNvbXBsZXRlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb21wbGV0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1kYkRyb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Ryb3Bkb3duLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZGJJbnB1dENvbXBsZXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbXBsZXRlci1pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWRiTGlzdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9saXN0LWNvbnRleHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1kYlJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb21wbGV0ZXJMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBNZGJDb21wbGV0ZXJEaXJlY3RpdmUsXG4gICAgTWRiRHJvcGRvd25EaXJlY3RpdmUsXG4gICAgTWRiSW5wdXRDb21wbGV0ZURpcmVjdGl2ZSxcbiAgICBNZGJMaXN0RGlyZWN0aXZlLFxuICAgIE1kYlJvd0RpcmVjdGl2ZSxcbiAgICBDb21wbGV0ZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbXBsZXRlckNvbXBvbmVudCxcbiAgICBDb21wbGV0ZXJMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBNZGJDb21wbGV0ZXJEaXJlY3RpdmUsXG4gICAgTWRiRHJvcGRvd25EaXJlY3RpdmUsXG4gICAgTWRiSW5wdXRDb21wbGV0ZURpcmVjdGl2ZSxcbiAgICBNZGJMaXN0RGlyZWN0aXZlLFxuICAgIE1kYlJvd0RpcmVjdGl2ZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb21wbGV0ZXJTZXJ2aWNlLFxuICAgIExvY2FsRGF0YUZhY3RvcnlQcm92aWRlcixcbiAgICBSZW1vdGVEYXRhRmFjdG9yeVByb3ZpZGVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlTW9kdWxlIHsgfVxuIl19