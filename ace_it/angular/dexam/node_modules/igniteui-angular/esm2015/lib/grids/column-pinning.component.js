/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Directive, Component, NgModule, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxCheckboxModule } from '../checkbox/checkbox.component';
import { ColumnChooserBase } from './column-chooser-base';
import { ColumnChooserItemBase } from './column-chooser-item-base';
import { IgxInputGroupModule } from '../input-group/input-group.component';
export class IgxColumnPinningItemDirective extends ColumnChooserItemBase {
    constructor() {
        super('pinned');
    }
    /**
     * Returns whether a column could be pinned.
     * It's not possible to pin a column if there is not enough space for the unpinned area.
     * ```typescript
     * const columnItem: IgxColumnPinningItemDirective;
     * this.columnItem.pinnable;
     * ```
     * @return {?}
     */
    get pinnable() {
        if (this.column.grid.getUnpinnedWidth(true) - this.column.width < this.column.grid.unpinnedAreaMinWidth) {
            return false;
        }
        return true;
    }
}
IgxColumnPinningItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxColumnPinningItem]'
            },] }
];
/** @nocollapse */
IgxColumnPinningItemDirective.ctorParameters = () => [];
export class IgxColumnPinningComponent extends ColumnChooserBase {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        super(cdr);
        this.cdr = cdr;
    }
    /**
     * @hidden
     * @param {?} container
     * @param {?} column
     * @return {?}
     */
    createColumnItem(container, column) {
        if (column.level !== 0 || column.disablePinning) {
            return null;
        }
        /** @type {?} */
        const item = new IgxColumnPinningItemDirective();
        item.container = container;
        item.column = column;
        return item;
    }
    /**
     * @hidden
     * @param {?} event
     * @param {?} columnItem
     * @return {?}
     */
    checkboxValueChange(event, columnItem) {
        if (event.checked && !columnItem.pinnable) {
            event.checkbox.checked = false;
            return false;
        }
        columnItem.value = !columnItem.value;
    }
}
IgxColumnPinningComponent.decorators = [
    { type: Component, args: [{
                preserveWhitespaces: false,
                selector: 'igx-column-pinning',
                template: "\n<div class=\"igx-column-hiding__header\">\n    <h4 class=\"igx-column-hiding__header-title\" *ngIf=\"title\">{{ title }}</h4>\n\n    <igx-input-group class=\"igx-column-hiding__header-input\" *ngIf=\"!disableFilter\">\n        <input igxInput\n            type=\"text\"\n            [(ngModel)]=\"filterCriteria\"\n            [placeholder]=\"filterColumnsPrompt\"\n            autocomplete=\"off\" />\n    </igx-input-group>\n</div>\n\n<div class=\"igx-column-hiding__columns\"\n    [style.max-height]=\"columnsAreaMaxHeight\">\n    <igx-checkbox igxColumnPinningItem\n        *ngFor=\"let columnItem of columnItems\"\n        class=\"igx-column-hiding__columns-item\"\n        (change)=\"checkboxValueChange($event, columnItem)\"\n        [checked]=\"columnItem.value\">\n        {{ columnItem.name }}\n    </igx-checkbox>\n</div>\n"
            }] }
];
/** @nocollapse */
IgxColumnPinningComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    IgxColumnPinningComponent.prototype.cdr;
}
/**
 * @hidden
 */
export class IgxColumnPinningModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXBpbm5pbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9jb2x1bW4tcGlubmluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBd0IsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUszRSxNQUFNLE9BQU8sNkJBQThCLFNBQVEscUJBQXFCO0lBRXBFO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7Ozs7Ozs7SUFVRCxJQUFJLFFBQVE7UUFDUixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3JHLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7O1lBdEJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2FBQ3JDOzs7O0FBNEJELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxpQkFBaUI7Ozs7SUFFNUQsWUFBbUIsR0FBc0I7UUFDckMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBREksUUFBRyxHQUFILEdBQUcsQ0FBbUI7SUFFekMsQ0FBQzs7Ozs7OztJQUtELGdCQUFnQixDQUFDLFNBQWMsRUFBRSxNQUFXO1FBQ3hDLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQztTQUNmOztjQUNLLElBQUksR0FBRyxJQUFJLDZCQUE2QixFQUFFO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFLTSxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsVUFBeUM7UUFDdkUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7WUFqQ0osU0FBUyxTQUFDO2dCQUNQLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGcxQkFBOEM7YUFDakQ7Ozs7WUFwQzhELGlCQUFpQjs7OztJQXVDaEUsd0NBQTZCOzs7OztBQTBDN0MsTUFBTSxPQUFPLHNCQUFzQjs7O1lBVmxDLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSw2QkFBNkIsQ0FBQztnQkFDeEUsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRTtvQkFDTCxpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsWUFBWTtvQkFDWixXQUFXO2lCQUNkO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE5nTW9kdWxlLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJZ3hDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5DaG9vc2VyQmFzZSB9IGZyb20gJy4vY29sdW1uLWNob29zZXItYmFzZSc7XG5pbXBvcnQgeyBDb2x1bW5DaG9vc2VySXRlbUJhc2UgfSBmcm9tICcuL2NvbHVtbi1jaG9vc2VyLWl0ZW0tYmFzZSc7XG5pbXBvcnQgeyBJZ3hJbnB1dEdyb3VwTW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtZ3JvdXAvaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Q29sdW1uUGlubmluZ0l0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb2x1bW5QaW5uaW5nSXRlbURpcmVjdGl2ZSBleHRlbmRzIENvbHVtbkNob29zZXJJdGVtQmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3Bpbm5lZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciBhIGNvbHVtbiBjb3VsZCBiZSBwaW5uZWQuXG4gICAgICogSXQncyBub3QgcG9zc2libGUgdG8gcGluIGEgY29sdW1uIGlmIHRoZXJlIGlzIG5vdCBlbm91Z2ggc3BhY2UgZm9yIHRoZSB1bnBpbm5lZCBhcmVhLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCBjb2x1bW5JdGVtOiBJZ3hDb2x1bW5QaW5uaW5nSXRlbURpcmVjdGl2ZTtcbiAgICAgKiB0aGlzLmNvbHVtbkl0ZW0ucGlubmFibGU7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0IHBpbm5hYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW4uZ3JpZC5nZXRVbnBpbm5lZFdpZHRoKHRydWUpIC0gdGhpcy5jb2x1bW4ud2lkdGggPCB0aGlzLmNvbHVtbi5ncmlkLnVucGlubmVkQXJlYU1pbldpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1jb2x1bW4tcGlubmluZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbHVtbi1waW5uaW5nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb2x1bW5QaW5uaW5nQ29tcG9uZW50IGV4dGVuZHMgQ29sdW1uQ2hvb3NlckJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIoY2RyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgY3JlYXRlQ29sdW1uSXRlbShjb250YWluZXI6IGFueSwgY29sdW1uOiBhbnkpIHtcbiAgICAgICAgaWYgKGNvbHVtbi5sZXZlbCAhPT0gMCB8fCBjb2x1bW4uZGlzYWJsZVBpbm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSWd4Q29sdW1uUGlubmluZ0l0ZW1EaXJlY3RpdmUoKTtcbiAgICAgICAgaXRlbS5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIGl0ZW0uY29sdW1uID0gY29sdW1uO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGNoZWNrYm94VmFsdWVDaGFuZ2UoZXZlbnQsIGNvbHVtbkl0ZW06IElneENvbHVtblBpbm5pbmdJdGVtRGlyZWN0aXZlKSB7XG4gICAgICAgIGlmIChldmVudC5jaGVja2VkICYmICFjb2x1bW5JdGVtLnBpbm5hYmxlKSB7XG4gICAgICAgICAgICBldmVudC5jaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29sdW1uSXRlbS52YWx1ZSA9ICFjb2x1bW5JdGVtLnZhbHVlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4Q29sdW1uUGlubmluZ0NvbXBvbmVudCwgSWd4Q29sdW1uUGlubmluZ0l0ZW1EaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hDb2x1bW5QaW5uaW5nQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIElneENoZWNrYm94TW9kdWxlLFxuICAgICAgICBJZ3hJbnB1dEdyb3VwTW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb2x1bW5QaW5uaW5nTW9kdWxlIHtcbn1cbiJdfQ==