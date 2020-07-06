/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, } from '@angular/core';
import { SBItemComponent } from './sb-item';
import { MdbAccordionService } from '../mdb-accordion.service';
var SqueezeBoxComponent = /** @class */ (function () {
    function SqueezeBoxComponent(accordionService) {
        this.accordionService = accordionService;
        this._multiple = true;
    }
    Object.defineProperty(SqueezeBoxComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () { return this._multiple; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._multiple = value;
            this.accordionService.updateMultipleState(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SqueezeBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.accordionService.updateMultipleState(this.multiple);
    };
    /**
     * @return {?}
     */
    SqueezeBoxComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.multiple) {
            this.items.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                /** @type {?} */
                var collapsed = el.collapsed ? true : false;
                el.applyToggle(collapsed);
            }));
        }
        this.itemsChanges = this.items.changes.subscribe((/**
         * @param {?} accordionItems
         * @return {?}
         */
        function (accordionItems) {
            _this.items = accordionItems;
            /** @type {?} */
            var accordionItemsArray = accordionItems.toArray();
            _this.accordionService.updateItemsArray(accordionItemsArray);
        }));
        this.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.accordionService.addItem(item); }));
    };
    /**
     * @return {?}
     */
    SqueezeBoxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.itemsChanges) {
            this.itemsChanges.unsubscribe();
        }
    };
    SqueezeBoxComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'squeezebox',
                    selector: 'mdb-squeezebox, mdb-accordion',
                    template: "<div class=\"accordion md-accordion\">\n  <ng-content></ng-content>\n</div>",
                    providers: [MdbAccordionService]
                }] }
    ];
    /** @nocollapse */
    SqueezeBoxComponent.ctorParameters = function () { return [
        { type: MdbAccordionService }
    ]; };
    SqueezeBoxComponent.propDecorators = {
        multiple: [{ type: Input }],
        items: [{ type: ContentChildren, args: [SBItemComponent,] }]
    };
    return SqueezeBoxComponent;
}());
export { SqueezeBoxComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SqueezeBoxComponent.prototype.itemsChanges;
    /**
     * @type {?}
     * @private
     */
    SqueezeBoxComponent.prototype._multiple;
    /** @type {?} */
    SqueezeBoxComponent.prototype.items;
    /**
     * @type {?}
     * @private
     */
    SqueezeBoxComponent.prototype.accordionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1ZWV6ZWJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc3F1ZWV6ZWJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsR0FJVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRy9EO0lBb0JFLDZCQUFvQixnQkFBcUM7UUFBckMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQUpqRCxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBSW1DLENBQUM7SUFWN0Qsc0JBQ0kseUNBQVE7Ozs7UUFEWixjQUNpQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7OztRQUN6QyxVQUFhLEtBQWM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUp3Qzs7OztJQVd6QyxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7SUFFRCxnREFBa0I7OztJQUFsQjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxFQUFPOztvQkFDbkIsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSztnQkFDOUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUUsVUFBQyxjQUFtQjtZQUNwRSxLQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQzs7Z0JBQ3RCLG1CQUFtQixHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDcEQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUQsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLElBQVMsSUFBSyxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQW5DLENBQW1DLEVBQUMsQ0FBQztJQUMxRSxDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsK0JBQStCO29CQUN6Qyx1RkFBOEI7b0JBQzlCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNqQzs7OztnQkFSUSxtQkFBbUI7OzsyQkFhekIsS0FBSzt3QkFRTCxlQUFlLFNBQUMsZUFBZTs7SUFnQ2xDLDBCQUFDO0NBQUEsQUFsREQsSUFrREM7U0E1Q1ksbUJBQW1COzs7Ozs7SUFFOUIsMkNBQW1DOzs7OztJQVFuQyx3Q0FBeUI7O0lBRXpCLG9DQUFvRTs7Ozs7SUFFeEQsK0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U0JJdGVtQ29tcG9uZW50fSBmcm9tICcuL3NiLWl0ZW0nO1xuaW1wb3J0IHsgTWRiQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uL21kYi1hY2NvcmRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc3F1ZWV6ZWJveCcsXG4gIHNlbGVjdG9yOiAnbWRiLXNxdWVlemVib3gsIG1kYi1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ3NxdWVlemVib3guaHRtbCcsXG4gIHByb3ZpZGVyczogW01kYkFjY29yZGlvblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNxdWVlemVCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBpdGVtc0NoYW5nZXM6IFN1YnNjcmlwdGlvbjtcblxuICBASW5wdXQoKVxuICBnZXQgbXVsdGlwbGUoKSB7IHJldHVybiB0aGlzLl9tdWx0aXBsZTsgfVxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuYWNjb3JkaW9uU2VydmljZS51cGRhdGVNdWx0aXBsZVN0YXRlKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9tdWx0aXBsZSA9IHRydWU7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihTQkl0ZW1Db21wb25lbnQpIGl0ZW1zOiBRdWVyeUxpc3Q8U0JJdGVtQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY29yZGlvblNlcnZpY2U6IE1kYkFjY29yZGlvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY2NvcmRpb25TZXJ2aWNlLnVwZGF0ZU11bHRpcGxlU3RhdGUodGhpcy5tdWx0aXBsZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkID0gZWwuY29sbGFwc2VkID8gIHRydWUgOiBmYWxzZTtcbiAgICAgICAgZWwuYXBwbHlUb2dnbGUoY29sbGFwc2VkKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaXRlbXNDaGFuZ2VzID0gdGhpcy5pdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSggKGFjY29yZGlvbkl0ZW1zOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaXRlbXMgPSBhY2NvcmRpb25JdGVtcztcbiAgICAgIGNvbnN0IGFjY29yZGlvbkl0ZW1zQXJyYXkgPSBhY2NvcmRpb25JdGVtcy50b0FycmF5KCk7XG4gICAgICB0aGlzLmFjY29yZGlvblNlcnZpY2UudXBkYXRlSXRlbXNBcnJheShhY2NvcmRpb25JdGVtc0FycmF5KTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCggKGl0ZW06IGFueSkgPT4gdGhpcy5hY2NvcmRpb25TZXJ2aWNlLmFkZEl0ZW0oaXRlbSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaXRlbXNDaGFuZ2VzKSB7XG4gICAgICB0aGlzLml0ZW1zQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG5cbn1cbiJdfQ==