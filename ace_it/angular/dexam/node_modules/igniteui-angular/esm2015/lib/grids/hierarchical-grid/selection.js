/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IgxSelectionAPIService } from '../../core/selection';
/**
 * @hidden
 */
export class IgxHierarchicalSelectionAPIService extends IgxSelectionAPIService {
    constructor() {
        super(...arguments);
        this.hSelection = new Map();
    }
    /**
     * @param {?} rootID
     * @param {?} parentID
     * @param {?} cell
     * @return {?}
     */
    add_sub_item(rootID, parentID, cell) {
        /** @type {?} */
        const selItem = new Map();
        selItem.set(parentID, cell);
        this.hSelection.set(rootID, selItem);
    }
    /**
     * @param {?} rootID
     * @return {?}
     */
    get_sub_item(rootID) {
        /** @type {?} */
        let selItem;
        /** @type {?} */
        const sel = this.hSelection.get(rootID);
        if (sel) {
            selItem = {
                gridID: this.hSelection.get(rootID).keys().next().value,
                cell: this.hSelection.get(rootID).values().next().value
            };
        }
        return selItem;
    }
    /**
     * @param {?} rootID
     * @return {?}
     */
    clear_sub_item(rootID) {
        return this.hSelection.set(rootID, null);
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalSelectionAPIService.prototype.hSelection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9oaWVyYXJjaGljYWwtZ3JpZC9zZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBSzlELE1BQU0sT0FBTyxrQ0FBbUMsU0FBUSxzQkFBc0I7SUFBOUU7O1FBQ2MsZUFBVSxHQUFtQyxJQUFJLEdBQUcsRUFBOEIsQ0FBQztJQXdCakcsQ0FBQzs7Ozs7OztJQXRCVSxZQUFZLENBQUMsTUFBYyxFQUFHLFFBQWdCLEVBQUUsSUFBUzs7Y0FDdEQsT0FBTyxHQUFHLElBQUksR0FBRyxFQUFlO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVNLFlBQVksQ0FBQyxNQUFjOztZQUMxQixPQUFPOztjQUNMLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxHQUFHLEVBQUU7WUFDTCxPQUFPLEdBQUc7Z0JBQ04sTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUs7Z0JBQ3ZELElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLO2FBQzFELENBQUM7U0FDTDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sY0FBYyxDQUFDLE1BQWM7UUFDaEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUVKOzs7Ozs7SUF4Qkcsd0RBQTZGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWd4U2VsZWN0aW9uQVBJU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VsZWN0aW9uJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2hpZXJhcmNoaWNhbC1ncmlkLmNvbXBvbmVudCc7XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgY2xhc3MgSWd4SGllcmFyY2hpY2FsU2VsZWN0aW9uQVBJU2VydmljZSBleHRlbmRzIElneFNlbGVjdGlvbkFQSVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBoU2VsZWN0aW9uOiBNYXA8c3RyaW5nLCAgTWFwPHN0cmluZywgYW55Pj4gPSBuZXcgTWFwPHN0cmluZywgICBNYXA8c3RyaW5nLCBhbnk+PigpO1xuXG4gICAgcHVibGljIGFkZF9zdWJfaXRlbShyb290SUQ6IHN0cmluZywgIHBhcmVudElEOiBzdHJpbmcsIGNlbGw6IGFueSkge1xuICAgICAgICBjb25zdCBzZWxJdGVtID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcbiAgICAgICAgc2VsSXRlbS5zZXQocGFyZW50SUQsIGNlbGwpO1xuICAgICAgICB0aGlzLmhTZWxlY3Rpb24uc2V0KHJvb3RJRCwgc2VsSXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldF9zdWJfaXRlbShyb290SUQ6IHN0cmluZykge1xuICAgICAgICBsZXQgc2VsSXRlbTtcbiAgICAgICAgY29uc3Qgc2VsID0gdGhpcy5oU2VsZWN0aW9uLmdldChyb290SUQpO1xuICAgICAgICBpZiAoc2VsKSB7XG4gICAgICAgICAgICBzZWxJdGVtID0ge1xuICAgICAgICAgICAgICAgIGdyaWRJRDogdGhpcy5oU2VsZWN0aW9uLmdldChyb290SUQpLmtleXMoKS5uZXh0KCkudmFsdWUgLFxuICAgICAgICAgICAgICAgIGNlbGw6IHRoaXMuaFNlbGVjdGlvbi5nZXQocm9vdElEKS52YWx1ZXMoKS5uZXh0KCkudmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbEl0ZW07XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyX3N1Yl9pdGVtKHJvb3RJRDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhTZWxlY3Rpb24uc2V0KHJvb3RJRCwgbnVsbCk7XG4gICAgfVxuXG59XG4iXX0=