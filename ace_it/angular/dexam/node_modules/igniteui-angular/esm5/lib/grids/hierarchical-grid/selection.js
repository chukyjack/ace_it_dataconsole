/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IgxSelectionAPIService } from '../../core/selection';
/**
 * @hidden
 */
var /**
 * @hidden
 */
IgxHierarchicalSelectionAPIService = /** @class */ (function (_super) {
    tslib_1.__extends(IgxHierarchicalSelectionAPIService, _super);
    function IgxHierarchicalSelectionAPIService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hSelection = new Map();
        return _this;
    }
    /**
     * @param {?} rootID
     * @param {?} parentID
     * @param {?} cell
     * @return {?}
     */
    IgxHierarchicalSelectionAPIService.prototype.add_sub_item = /**
     * @param {?} rootID
     * @param {?} parentID
     * @param {?} cell
     * @return {?}
     */
    function (rootID, parentID, cell) {
        /** @type {?} */
        var selItem = new Map();
        selItem.set(parentID, cell);
        this.hSelection.set(rootID, selItem);
    };
    /**
     * @param {?} rootID
     * @return {?}
     */
    IgxHierarchicalSelectionAPIService.prototype.get_sub_item = /**
     * @param {?} rootID
     * @return {?}
     */
    function (rootID) {
        /** @type {?} */
        var selItem;
        /** @type {?} */
        var sel = this.hSelection.get(rootID);
        if (sel) {
            selItem = {
                gridID: this.hSelection.get(rootID).keys().next().value,
                cell: this.hSelection.get(rootID).values().next().value
            };
        }
        return selItem;
    };
    /**
     * @param {?} rootID
     * @return {?}
     */
    IgxHierarchicalSelectionAPIService.prototype.clear_sub_item = /**
     * @param {?} rootID
     * @return {?}
     */
    function (rootID) {
        return this.hSelection.set(rootID, null);
    };
    return IgxHierarchicalSelectionAPIService;
}(IgxSelectionAPIService));
/**
 * @hidden
 */
export { IgxHierarchicalSelectionAPIService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxHierarchicalSelectionAPIService.prototype.hSelection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9oaWVyYXJjaGljYWwtZ3JpZC9zZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUs5RDs7OztJQUF3RCw4REFBc0I7SUFBOUU7UUFBQSxxRUF5QkM7UUF4QmEsZ0JBQVUsR0FBbUMsSUFBSSxHQUFHLEVBQThCLENBQUM7O0lBd0JqRyxDQUFDOzs7Ozs7O0lBdEJVLHlEQUFZOzs7Ozs7SUFBbkIsVUFBb0IsTUFBYyxFQUFHLFFBQWdCLEVBQUUsSUFBUzs7WUFDdEQsT0FBTyxHQUFHLElBQUksR0FBRyxFQUFlO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVNLHlEQUFZOzs7O0lBQW5CLFVBQW9CLE1BQWM7O1lBQzFCLE9BQU87O1lBQ0wsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLEdBQUcsRUFBRTtZQUNMLE9BQU8sR0FBRztnQkFDTixNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSztnQkFDdkQsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUs7YUFDMUQsQ0FBQztTQUNMO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTSwyREFBYzs7OztJQUFyQixVQUFzQixNQUFjO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTCx5Q0FBQztBQUFELENBQUMsQUF6QkQsQ0FBd0Qsc0JBQXNCLEdBeUI3RTs7Ozs7Ozs7OztJQXhCRyx3REFBNkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudCB9IGZyb20gJy4vaGllcmFyY2hpY2FsLWdyaWQuY29tcG9uZW50JztcblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjbGFzcyBJZ3hIaWVyYXJjaGljYWxTZWxlY3Rpb25BUElTZXJ2aWNlIGV4dGVuZHMgSWd4U2VsZWN0aW9uQVBJU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGhTZWxlY3Rpb246IE1hcDxzdHJpbmcsICBNYXA8c3RyaW5nLCBhbnk+PiA9IG5ldyBNYXA8c3RyaW5nLCAgIE1hcDxzdHJpbmcsIGFueT4+KCk7XG5cbiAgICBwdWJsaWMgYWRkX3N1Yl9pdGVtKHJvb3RJRDogc3RyaW5nLCAgcGFyZW50SUQ6IHN0cmluZywgY2VsbDogYW55KSB7XG4gICAgICAgIGNvbnN0IHNlbEl0ZW0gPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xuICAgICAgICBzZWxJdGVtLnNldChwYXJlbnRJRCwgY2VsbCk7XG4gICAgICAgIHRoaXMuaFNlbGVjdGlvbi5zZXQocm9vdElELCBzZWxJdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X3N1Yl9pdGVtKHJvb3RJRDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBzZWxJdGVtO1xuICAgICAgICBjb25zdCBzZWwgPSB0aGlzLmhTZWxlY3Rpb24uZ2V0KHJvb3RJRCk7XG4gICAgICAgIGlmIChzZWwpIHtcbiAgICAgICAgICAgIHNlbEl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgZ3JpZElEOiB0aGlzLmhTZWxlY3Rpb24uZ2V0KHJvb3RJRCkua2V5cygpLm5leHQoKS52YWx1ZSAsXG4gICAgICAgICAgICAgICAgY2VsbDogdGhpcy5oU2VsZWN0aW9uLmdldChyb290SUQpLnZhbHVlcygpLm5leHQoKS52YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsSXRlbTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJfc3ViX2l0ZW0ocm9vdElEOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaFNlbGVjdGlvbi5zZXQocm9vdElELCBudWxsKTtcbiAgICB9XG5cbn1cbiJdfQ==