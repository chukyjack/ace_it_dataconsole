/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { Directive, Component, NgModule, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxCheckboxModule } from '../checkbox/checkbox.component';
import { ColumnChooserBase } from './column-chooser-base';
import { ColumnChooserItemBase } from './column-chooser-item-base';
import { IgxInputGroupModule } from '../input-group/input-group.component';
var IgxColumnPinningItemDirective = /** @class */ (function (_super) {
    tslib_1.__extends(IgxColumnPinningItemDirective, _super);
    function IgxColumnPinningItemDirective() {
        return _super.call(this, 'pinned') || this;
    }
    Object.defineProperty(IgxColumnPinningItemDirective.prototype, "pinnable", {
        /**
         * Returns whether a column could be pinned.
         * It's not possible to pin a column if there is not enough space for the unpinned area.
         * ```typescript
         * const columnItem: IgxColumnPinningItemDirective;
         * this.columnItem.pinnable;
         * ```
         */
        get: /**
         * Returns whether a column could be pinned.
         * It's not possible to pin a column if there is not enough space for the unpinned area.
         * ```typescript
         * const columnItem: IgxColumnPinningItemDirective;
         * this.columnItem.pinnable;
         * ```
         * @return {?}
         */
        function () {
            if (this.column.grid.getUnpinnedWidth(true) - this.column.width < this.column.grid.unpinnedAreaMinWidth) {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    IgxColumnPinningItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxColumnPinningItem]'
                },] }
    ];
    /** @nocollapse */
    IgxColumnPinningItemDirective.ctorParameters = function () { return []; };
    return IgxColumnPinningItemDirective;
}(ColumnChooserItemBase));
export { IgxColumnPinningItemDirective };
var IgxColumnPinningComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxColumnPinningComponent, _super);
    function IgxColumnPinningComponent(cdr) {
        var _this = _super.call(this, cdr) || this;
        _this.cdr = cdr;
        return _this;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} container
     * @param {?} column
     * @return {?}
     */
    IgxColumnPinningComponent.prototype.createColumnItem = /**
     * @hidden
     * @param {?} container
     * @param {?} column
     * @return {?}
     */
    function (container, column) {
        if (column.level !== 0 || column.disablePinning) {
            return null;
        }
        /** @type {?} */
        var item = new IgxColumnPinningItemDirective();
        item.container = container;
        item.column = column;
        return item;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} columnItem
     * @return {?}
     */
    IgxColumnPinningComponent.prototype.checkboxValueChange = /**
     * @hidden
     * @param {?} event
     * @param {?} columnItem
     * @return {?}
     */
    function (event, columnItem) {
        if (event.checked && !columnItem.pinnable) {
            event.checkbox.checked = false;
            return false;
        }
        columnItem.value = !columnItem.value;
    };
    IgxColumnPinningComponent.decorators = [
        { type: Component, args: [{
                    preserveWhitespaces: false,
                    selector: 'igx-column-pinning',
                    template: "\n<div class=\"igx-column-hiding__header\">\n    <h4 class=\"igx-column-hiding__header-title\" *ngIf=\"title\">{{ title }}</h4>\n\n    <igx-input-group class=\"igx-column-hiding__header-input\" *ngIf=\"!disableFilter\">\n        <input igxInput\n            type=\"text\"\n            [(ngModel)]=\"filterCriteria\"\n            [placeholder]=\"filterColumnsPrompt\"\n            autocomplete=\"off\" />\n    </igx-input-group>\n</div>\n\n<div class=\"igx-column-hiding__columns\"\n    [style.max-height]=\"columnsAreaMaxHeight\">\n    <igx-checkbox igxColumnPinningItem\n        *ngFor=\"let columnItem of columnItems\"\n        class=\"igx-column-hiding__columns-item\"\n        (change)=\"checkboxValueChange($event, columnItem)\"\n        [checked]=\"columnItem.value\">\n        {{ columnItem.name }}\n    </igx-checkbox>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    IgxColumnPinningComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return IgxColumnPinningComponent;
}(ColumnChooserBase));
export { IgxColumnPinningComponent };
if (false) {
    /** @type {?} */
    IgxColumnPinningComponent.prototype.cdr;
}
/**
 * @hidden
 */
var IgxColumnPinningModule = /** @class */ (function () {
    function IgxColumnPinningModule() {
    }
    IgxColumnPinningModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxColumnPinningComponent, IgxColumnPinningItemDirective],
                    exports: [IgxColumnPinningComponent],
                    imports: [
                        IgxCheckboxModule,
                        IgxInputGroupModule,
                        CommonModule,
                        FormsModule
                    ]
                },] }
    ];
    return IgxColumnPinningModule;
}());
export { IgxColumnPinningModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXBpbm5pbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9jb2x1bW4tcGlubmluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQXdCLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0U7SUFHbUQseURBQXFCO0lBRXBFO2VBQ0ksa0JBQU0sUUFBUSxDQUFDO0lBQ25CLENBQUM7SUFVRCxzQkFBSSxtREFBUTtRQVJaOzs7Ozs7O1dBT0c7Ozs7Ozs7Ozs7UUFDSDtZQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3JHLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7O2dCQXRCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtpQkFDckM7Ozs7SUFxQkQsb0NBQUM7Q0FBQSxBQXZCRCxDQUdtRCxxQkFBcUIsR0FvQnZFO1NBcEJZLDZCQUE2QjtBQXNCMUM7SUFLK0MscURBQWlCO0lBRTVELG1DQUFtQixHQUFzQjtRQUF6QyxZQUNJLGtCQUFNLEdBQUcsQ0FBQyxTQUNiO1FBRmtCLFNBQUcsR0FBSCxHQUFHLENBQW1COztJQUV6QyxDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSCxvREFBZ0I7Ozs7OztJQUFoQixVQUFpQixTQUFjLEVBQUUsTUFBVztRQUN4QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUM7U0FDZjs7WUFDSyxJQUFJLEdBQUcsSUFBSSw2QkFBNkIsRUFBRTtRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSSx1REFBbUI7Ozs7OztJQUExQixVQUEyQixLQUFLLEVBQUUsVUFBeUM7UUFDdkUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDOztnQkFqQ0osU0FBUyxTQUFDO29CQUNQLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLGcxQkFBOEM7aUJBQ2pEOzs7O2dCQXBDOEQsaUJBQWlCOztJQWtFaEYsZ0NBQUM7Q0FBQSxBQWxDRCxDQUsrQyxpQkFBaUIsR0E2Qi9EO1NBN0JZLHlCQUF5Qjs7O0lBRXRCLHdDQUE2Qjs7Ozs7QUFnQzdDO0lBQUE7SUFXQSxDQUFDOztnQkFYQSxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMseUJBQXlCLEVBQUUsNkJBQTZCLENBQUM7b0JBQ3hFLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUNwQyxPQUFPLEVBQUU7d0JBQ0wsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osV0FBVztxQkFDZDtpQkFDSjs7SUFFRCw2QkFBQztDQUFBLEFBWEQsSUFXQztTQURZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgTmdNb2R1bGUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElneENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtbkNob29zZXJCYXNlIH0gZnJvbSAnLi9jb2x1bW4tY2hvb3Nlci1iYXNlJztcbmltcG9ydCB7IENvbHVtbkNob29zZXJJdGVtQmFzZSB9IGZyb20gJy4vY29sdW1uLWNob29zZXItaXRlbS1iYXNlJztcbmltcG9ydCB7IElneElucHV0R3JvdXBNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC1ncm91cC9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hDb2x1bW5QaW5uaW5nSXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIElneENvbHVtblBpbm5pbmdJdGVtRGlyZWN0aXZlIGV4dGVuZHMgQ29sdW1uQ2hvb3Nlckl0ZW1CYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncGlubmVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIGEgY29sdW1uIGNvdWxkIGJlIHBpbm5lZC5cbiAgICAgKiBJdCdzIG5vdCBwb3NzaWJsZSB0byBwaW4gYSBjb2x1bW4gaWYgdGhlcmUgaXMgbm90IGVub3VnaCBzcGFjZSBmb3IgdGhlIHVucGlubmVkIGFyZWEuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IGNvbHVtbkl0ZW06IElneENvbHVtblBpbm5pbmdJdGVtRGlyZWN0aXZlO1xuICAgICAqIHRoaXMuY29sdW1uSXRlbS5waW5uYWJsZTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgcGlubmFibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbi5ncmlkLmdldFVucGlubmVkV2lkdGgodHJ1ZSkgLSB0aGlzLmNvbHVtbi53aWR0aCA8IHRoaXMuY29sdW1uLmdyaWQudW5waW5uZWRBcmVhTWluV2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWNvbHVtbi1waW5uaW5nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29sdW1uLXBpbm5pbmcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneENvbHVtblBpbm5pbmdDb21wb25lbnQgZXh0ZW5kcyBDb2x1bW5DaG9vc2VyQmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihjZHIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBjcmVhdGVDb2x1bW5JdGVtKGNvbnRhaW5lcjogYW55LCBjb2x1bW46IGFueSkge1xuICAgICAgICBpZiAoY29sdW1uLmxldmVsICE9PSAwIHx8IGNvbHVtbi5kaXNhYmxlUGlubmluZykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBJZ3hDb2x1bW5QaW5uaW5nSXRlbURpcmVjdGl2ZSgpO1xuICAgICAgICBpdGVtLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgaXRlbS5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2hlY2tib3hWYWx1ZUNoYW5nZShldmVudCwgY29sdW1uSXRlbTogSWd4Q29sdW1uUGlubmluZ0l0ZW1EaXJlY3RpdmUpIHtcbiAgICAgICAgaWYgKGV2ZW50LmNoZWNrZWQgJiYgIWNvbHVtbkl0ZW0ucGlubmFibGUpIHtcbiAgICAgICAgICAgIGV2ZW50LmNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb2x1bW5JdGVtLnZhbHVlID0gIWNvbHVtbkl0ZW0udmFsdWU7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hDb2x1bW5QaW5uaW5nQ29tcG9uZW50LCBJZ3hDb2x1bW5QaW5uaW5nSXRlbURpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneENvbHVtblBpbm5pbmdDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgSWd4Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIElneElucHV0R3JvdXBNb2R1bGUsXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIElneENvbHVtblBpbm5pbmdNb2R1bGUge1xufVxuIl19