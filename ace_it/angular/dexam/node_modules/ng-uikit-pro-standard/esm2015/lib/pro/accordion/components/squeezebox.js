/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, } from '@angular/core';
import { SBItemComponent } from './sb-item';
import { MdbAccordionService } from '../mdb-accordion.service';
export class SqueezeBoxComponent {
    /**
     * @param {?} accordionService
     */
    constructor(accordionService) {
        this.accordionService = accordionService;
        this._multiple = true;
    }
    /**
     * @return {?}
     */
    get multiple() { return this._multiple; }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        this._multiple = value;
        this.accordionService.updateMultipleState(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.accordionService.updateMultipleState(this.multiple);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.multiple) {
            this.items.forEach((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                /** @type {?} */
                const collapsed = el.collapsed ? true : false;
                el.applyToggle(collapsed);
            }));
        }
        this.itemsChanges = this.items.changes.subscribe((/**
         * @param {?} accordionItems
         * @return {?}
         */
        (accordionItems) => {
            this.items = accordionItems;
            /** @type {?} */
            const accordionItemsArray = accordionItems.toArray();
            this.accordionService.updateItemsArray(accordionItemsArray);
        }));
        this.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.accordionService.addItem(item)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.itemsChanges) {
            this.itemsChanges.unsubscribe();
        }
    }
}
SqueezeBoxComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'squeezebox',
                selector: 'mdb-squeezebox, mdb-accordion',
                template: "<div class=\"accordion md-accordion\">\n  <ng-content></ng-content>\n</div>",
                providers: [MdbAccordionService]
            }] }
];
/** @nocollapse */
SqueezeBoxComponent.ctorParameters = () => [
    { type: MdbAccordionService }
];
SqueezeBoxComponent.propDecorators = {
    multiple: [{ type: Input }],
    items: [{ type: ContentChildren, args: [SBItemComponent,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1ZWV6ZWJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc3F1ZWV6ZWJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsR0FJVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBUy9ELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFjOUIsWUFBb0IsZ0JBQXFDO1FBQXJDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBcUI7UUFKakQsY0FBUyxHQUFHLElBQUksQ0FBQztJQUltQyxDQUFDOzs7O0lBVjdELElBQ0ksUUFBUSxLQUFLLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ3pDLElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztZQUFDLENBQUMsRUFBTyxFQUFFLEVBQUU7O3NCQUN2QixTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO2dCQUM5QyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7UUFBRSxDQUFDLGNBQW1CLEVBQUUsRUFBRTtZQUN4RSxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQzs7a0JBQ3RCLG1CQUFtQixHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUQsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsK0JBQStCO2dCQUN6Qyx1RkFBOEI7Z0JBQzlCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDOzs7O1lBUlEsbUJBQW1COzs7dUJBYXpCLEtBQUs7b0JBUUwsZUFBZSxTQUFDLGVBQWU7Ozs7Ozs7SUFWaEMsMkNBQW1DOzs7OztJQVFuQyx3Q0FBeUI7O0lBRXpCLG9DQUFvRTs7Ozs7SUFFeEQsK0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U0JJdGVtQ29tcG9uZW50fSBmcm9tICcuL3NiLWl0ZW0nO1xuaW1wb3J0IHsgTWRiQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uL21kYi1hY2NvcmRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc3F1ZWV6ZWJveCcsXG4gIHNlbGVjdG9yOiAnbWRiLXNxdWVlemVib3gsIG1kYi1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ3NxdWVlemVib3guaHRtbCcsXG4gIHByb3ZpZGVyczogW01kYkFjY29yZGlvblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNxdWVlemVCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBpdGVtc0NoYW5nZXM6IFN1YnNjcmlwdGlvbjtcblxuICBASW5wdXQoKVxuICBnZXQgbXVsdGlwbGUoKSB7IHJldHVybiB0aGlzLl9tdWx0aXBsZTsgfVxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuYWNjb3JkaW9uU2VydmljZS51cGRhdGVNdWx0aXBsZVN0YXRlKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9tdWx0aXBsZSA9IHRydWU7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihTQkl0ZW1Db21wb25lbnQpIGl0ZW1zOiBRdWVyeUxpc3Q8U0JJdGVtQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY29yZGlvblNlcnZpY2U6IE1kYkFjY29yZGlvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY2NvcmRpb25TZXJ2aWNlLnVwZGF0ZU11bHRpcGxlU3RhdGUodGhpcy5tdWx0aXBsZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkID0gZWwuY29sbGFwc2VkID8gIHRydWUgOiBmYWxzZTtcbiAgICAgICAgZWwuYXBwbHlUb2dnbGUoY29sbGFwc2VkKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaXRlbXNDaGFuZ2VzID0gdGhpcy5pdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSggKGFjY29yZGlvbkl0ZW1zOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaXRlbXMgPSBhY2NvcmRpb25JdGVtcztcbiAgICAgIGNvbnN0IGFjY29yZGlvbkl0ZW1zQXJyYXkgPSBhY2NvcmRpb25JdGVtcy50b0FycmF5KCk7XG4gICAgICB0aGlzLmFjY29yZGlvblNlcnZpY2UudXBkYXRlSXRlbXNBcnJheShhY2NvcmRpb25JdGVtc0FycmF5KTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCggKGl0ZW06IGFueSkgPT4gdGhpcy5hY2NvcmRpb25TZXJ2aWNlLmFkZEl0ZW0oaXRlbSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaXRlbXNDaGFuZ2VzKSB7XG4gICAgICB0aGlzLml0ZW1zQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG5cbn1cbiJdfQ==