/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IgxDropDownItemComponent } from './../drop-down/drop-down-item.component';
import { Component } from '@angular/core';
var IgxSelectItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxSelectItemComponent, _super);
    function IgxSelectItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IgxSelectItemComponent.prototype, "itemText", {
        /** @hidden @internal */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.innerText.trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSelectItemComponent.prototype, "selected", {
        /**
         * Sets/Gets if the item is the currently selected one in the select
         *
         * ```typescript
         *  let mySelectedItem = this.select.selectedItem;
         *  let isMyItemSelected = mySelectedItem.selected; // true
         * ```
         */
        get: /**
         * Sets/Gets if the item is the currently selected one in the select
         *
         * ```typescript
         *  let mySelectedItem = this.select.selectedItem;
         *  let isMyItemSelected = mySelectedItem.selected; // true
         * ```
         * @return {?}
         */
        function () {
            return !this.isHeader && !this.disabled && this.selection.is_item_selected(this.dropDown.id, this);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && !this.isHeader && !this.disabled) {
                this.dropDown.selectItem(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxSelectItemComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
    };
    IgxSelectItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-select-item',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    return IgxSelectItemComponent;
}(IgxDropDownItemComponent));
export { IgxSelectItemComponent };
if (false) {
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxSelectItemComponent.prototype.isHeader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFNBQVMsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFFdkU7SUFJNEMsa0RBQXdCO0lBSnBFOztJQWtDQSxDQUFDO0lBM0JHLHNCQUFXLDRDQUFRO1FBRG5CLHdCQUF3Qjs7Ozs7UUFDeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTtJQVVELHNCQUFXLDRDQUFRO1FBUm5COzs7Ozs7O1dBT0c7Ozs7Ozs7Ozs7UUFDSDtZQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZHLENBQUM7Ozs7O1FBRUQsVUFBb0IsS0FBVTtZQUMxQixJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQztRQUNMLENBQUM7OztPQU5BOzs7O0lBV0QsMENBQVM7OztJQUFUO0lBQ0EsQ0FBQzs7Z0JBakNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsMkJBQTJCO2lCQUN4Qzs7SUErQkQsNkJBQUM7Q0FBQSxBQWxDRCxDQUk0Qyx3QkFBd0IsR0E4Qm5FO1NBOUJZLHNCQUFzQjs7Ozs7O0lBMEIvQiwwQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hEcm9wRG93bkl0ZW1Db21wb25lbnQgfSBmcm9tICcuLy4uL2Ryb3AtZG93bi9kcm9wLWRvd24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtc2VsZWN0LWl0ZW0nLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgSWd4U2VsZWN0SXRlbUNvbXBvbmVudCBleHRlbmRzIElneERyb3BEb3duSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBpdGVtVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVyVGV4dC50cmltKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cy9HZXRzIGlmIHRoZSBpdGVtIGlzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgb25lIGluIHRoZSBzZWxlY3RcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgbGV0IG15U2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3Quc2VsZWN0ZWRJdGVtO1xuICAgICAqICBsZXQgaXNNeUl0ZW1TZWxlY3RlZCA9IG15U2VsZWN0ZWRJdGVtLnNlbGVjdGVkOyAvLyB0cnVlXG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBzZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzSGVhZGVyICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMuc2VsZWN0aW9uLmlzX2l0ZW1fc2VsZWN0ZWQodGhpcy5kcm9wRG93bi5pZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZCh2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiAhdGhpcy5pc0hlYWRlciAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5kcm9wRG93bi5zZWxlY3RJdGVtKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIGlzSGVhZGVyOiBib29sZWFuO1xuXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIH1cbn1cbiJdfQ==