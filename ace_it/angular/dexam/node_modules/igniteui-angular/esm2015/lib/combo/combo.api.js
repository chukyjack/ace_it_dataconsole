/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
export class IgxComboAPIService {
    constructor() {
        this.disableTransitions = false;
    }
    /**
     * @param {?} combo
     * @return {?}
     */
    register(combo) {
        this.combo = combo;
    }
    /**
     * @return {?}
     */
    clear() {
        this.combo = null;
    }
    /**
     * @return {?}
     */
    get item_focusable() {
        return false;
    }
    /**
     * @return {?}
     */
    get isRemote() {
        return this.combo.isRemote;
    }
    /**
     * @return {?}
     */
    add_custom_item() {
        if (!this.combo) {
            return;
        }
        this.combo.addItemToCollection();
    }
    /**
     * @return {?}
     */
    get comboID() {
        return this.combo.id;
    }
    /**
     * @param {?} itemID
     * @param {?=} event
     * @return {?}
     */
    set_selected_item(itemID, event) {
        /** @type {?} */
        const selected = this.combo.isItemSelected(itemID);
        if (itemID === null || itemID === undefined) {
            return;
        }
        if (!selected) {
            this.combo.selectItems([itemID], false, event);
        }
        else {
            this.combo.deselectItems([itemID], event);
        }
    }
    /**
     * @param {?} itemID
     * @return {?}
     */
    is_item_selected(itemID) {
        return this.combo.isItemSelected(itemID);
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxComboAPIService.prototype.combo;
    /** @type {?} */
    IgxComboAPIService.prototype.disableTransitions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8uYXBpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21iby9jb21iby5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUFHVyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7SUE2Q3RDLENBQUM7Ozs7O0lBM0NVLFFBQVEsQ0FBQyxLQUFtQjtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBR00sS0FBSztRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFHRCxJQUFXLGNBQWM7UUFDckIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7OztJQUNELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLGVBQWU7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELElBQVcsT0FBTztRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRU0saUJBQWlCLENBQUMsTUFBVyxFQUFFLEtBQWE7O2NBQ3pDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDbEQsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxNQUFXO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNKOzs7Ozs7SUEvQ0csbUNBQThCOztJQUU5QixnREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hDb21ib0Jhc2UgfSBmcm9tICcuL2NvbWJvLmNvbW1vbic7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgSWd4Q29tYm9BUElTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29tYm86IElneENvbWJvQmFzZTtcblxuICAgIHB1YmxpYyBkaXNhYmxlVHJhbnNpdGlvbnMgPSBmYWxzZTtcblxuICAgIHB1YmxpYyByZWdpc3Rlcihjb21ibzogSWd4Q29tYm9CYXNlKSB7XG4gICAgICAgIHRoaXMuY29tYm8gPSBjb21ibztcbiAgICB9XG5cblxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb21ibyA9IG51bGw7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgZ2V0IGl0ZW1fZm9jdXNhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNSZW1vdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbWJvLmlzUmVtb3RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRfY3VzdG9tX2l0ZW0oKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jb21ibykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tYm8uYWRkSXRlbVRvQ29sbGVjdGlvbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY29tYm9JRCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21iby5pZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0X3NlbGVjdGVkX2l0ZW0oaXRlbUlEOiBhbnksIGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmNvbWJvLmlzSXRlbVNlbGVjdGVkKGl0ZW1JRCk7XG4gICAgICAgIGlmIChpdGVtSUQgPT09IG51bGwgfHwgaXRlbUlEID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbWJvLnNlbGVjdEl0ZW1zKFtpdGVtSURdLCBmYWxzZSwgZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21iby5kZXNlbGVjdEl0ZW1zKFtpdGVtSURdLCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNfaXRlbV9zZWxlY3RlZChpdGVtSUQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21iby5pc0l0ZW1TZWxlY3RlZChpdGVtSUQpO1xuICAgIH1cbn1cbiJdfQ==