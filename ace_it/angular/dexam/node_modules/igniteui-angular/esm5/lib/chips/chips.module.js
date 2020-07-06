/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxAvatarModule } from '../avatar/avatar.component';
import { IgxIconModule } from '../icon/index';
import { IgxChipComponent } from './chip.component';
import { IgxChipsAreaComponent } from './chips-area.component';
import { IgxDragDropModule } from '../directives/dragdrop/dragdrop.directive';
import { IgxPrefixModule, IgxPrefixDirective } from '../directives/prefix/prefix.directive';
import { IgxSuffixModule, IgxSuffixDirective } from '../directives/suffix/suffix.directive';
/**
 * @hidden
 */
var IgxChipsModule = /** @class */ (function () {
    function IgxChipsModule() {
    }
    IgxChipsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        IgxChipsAreaComponent,
                        IgxChipComponent
                    ],
                    exports: [
                        IgxChipsAreaComponent,
                        IgxChipComponent,
                        IgxPrefixDirective,
                        IgxSuffixDirective
                    ],
                    imports: [
                        CommonModule,
                        IgxRippleModule,
                        IgxIconModule,
                        IgxButtonModule,
                        IgxAvatarModule,
                        IgxDragDropModule,
                        IgxPrefixModule,
                        IgxSuffixModule
                    ]
                },] }
    ];
    return IgxChipsModule;
}());
export { IgxChipsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jaGlwcy9jaGlwcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQUs1RjtJQUFBO0lBc0I4QixDQUFDOztnQkF0QjlCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3dCQUNyQixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7d0JBQ3JCLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLGVBQWU7cUJBQ2hCO2lCQUNGOztJQUM2QixxQkFBQztDQUFBLEFBdEIvQixJQXNCK0I7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4UmlwcGxlTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9yaXBwbGUvcmlwcGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IElneEF2YXRhck1vZHVsZSB9IGZyb20gJy4uL2F2YXRhci9hdmF0YXIuY29tcG9uZW50JztcbmltcG9ydCB7IElneEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2luZGV4JztcbmltcG9ydCB7IElneENoaXBDb21wb25lbnQgfSBmcm9tICcuL2NoaXAuY29tcG9uZW50JztcbmltcG9ydCB7IElneENoaXBzQXJlYUNvbXBvbmVudCB9IGZyb20gJy4vY2hpcHMtYXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RHJhZ0Ryb3BNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2RyYWdkcm9wL2RyYWdkcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hQcmVmaXhNb2R1bGUsIElneFByZWZpeERpcmVjdGl2ZX0gZnJvbSAnLi4vZGlyZWN0aXZlcy9wcmVmaXgvcHJlZml4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hTdWZmaXhNb2R1bGUsIElneFN1ZmZpeERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvc3VmZml4L3N1ZmZpeC5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSWd4Q2hpcHNBcmVhQ29tcG9uZW50LFxuICAgIElneENoaXBDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIElneENoaXBzQXJlYUNvbXBvbmVudCxcbiAgICBJZ3hDaGlwQ29tcG9uZW50LFxuICAgIElneFByZWZpeERpcmVjdGl2ZSxcbiAgICBJZ3hTdWZmaXhEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJZ3hSaXBwbGVNb2R1bGUsXG4gICAgSWd4SWNvbk1vZHVsZSxcbiAgICBJZ3hCdXR0b25Nb2R1bGUsXG4gICAgSWd4QXZhdGFyTW9kdWxlLFxuICAgIElneERyYWdEcm9wTW9kdWxlLFxuICAgIElneFByZWZpeE1vZHVsZSxcbiAgICBJZ3hTdWZmaXhNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hDaGlwc01vZHVsZSB7IH1cbiJdfQ==