/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompleterBaseData } from './base-data.service';
var LocalData = /** @class */ (function (_super) {
    tslib_1.__extends(LocalData, _super);
    function LocalData() {
        return _super.call(this) || this;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    LocalData.prototype.data = /**
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    function (data) {
        var _this = this;
        if (data instanceof Observable) {
            ((/** @type {?} */ (data))).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                (/** @type {?} */ (_this))._data = res;
                if ((/** @type {?} */ (_this)).savedTerm) {
                    (/** @type {?} */ (_this)).search((/** @type {?} */ (_this)).savedTerm);
                }
            }));
        }
        else {
            (/** @type {?} */ (this))._data = (/** @type {?} */ (data));
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} term
     * @return {?}
     */
    LocalData.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            /** @type {?} */
            var matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    };
    // public convertToItem(data: any): CompleterItem {
    // public convertToItem(data: any): CompleterItem {
    /**
     * @param {?} data
     * @return {?}
     */
    LocalData.prototype.convertToItem = 
    // public convertToItem(data: any): CompleterItem {
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    LocalData.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalData.ctorParameters = function () { return []; };
    return LocalData;
}(CompleterBaseData));
export { LocalData };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalData.prototype._data;
    /**
     * @type {?}
     * @private
     */
    LocalData.prototype.savedTerm;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hdXRvY29tcGxldGUvc2VydmljZXMvbG9jYWwtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3hEO0lBQytCLHFDQUFpQjtJQU05QztlQUNFLGlCQUFPO0lBQ1QsQ0FBQzs7Ozs7OztJQUVNLHdCQUFJOzs7Ozs7SUFBWCxVQUFZLElBQStCO1FBQTNDLGlCQWFDO1FBWkMsSUFBSSxJQUFJLFlBQVksVUFBVSxFQUFFO1lBQzlCLENBQUMsbUJBQW1CLElBQUksRUFBQSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsR0FBRztnQkFDdEMsbUJBQUEsS0FBSSxFQUFBLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDakIsSUFBSSxtQkFBQSxLQUFJLEVBQUEsQ0FBQyxTQUFTLEVBQUU7b0JBQ2xCLG1CQUFBLEtBQUksRUFBQSxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxLQUFJLEVBQUEsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDN0I7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxLQUFLLEdBQUcsbUJBQU8sSUFBSSxFQUFBLENBQUM7U0FDMUI7UUFFRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSwwQkFBTTs7OztJQUFiLFVBQWMsSUFBWTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7Z0JBQ2hCLE9BQU8sR0FBVSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1lBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELG1EQUFtRDs7Ozs7O0lBQzFDLGlDQUFhOzs7Ozs7SUFBcEIsVUFBcUIsSUFBUztRQUM5QixPQUFPLGlCQUFNLGFBQWEsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkF2Q0YsVUFBVTs7OztJQXdDWCxnQkFBQztDQUFBLEFBeENELENBQytCLGlCQUFpQixHQXVDL0M7U0F2Q1ksU0FBUzs7Ozs7O0lBRXBCLDBCQUFxQjs7Ozs7SUFFckIsOEJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21wbGV0ZXJCYXNlRGF0YSB9IGZyb20gJy4vYmFzZS1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcGxldGVySXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcGxldGVyLWl0ZW0uY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsRGF0YSBleHRlbmRzIENvbXBsZXRlckJhc2VEYXRhIHtcblxuICBwcml2YXRlIF9kYXRhOiBhbnlbXTtcbiAgLy8gcHJpdmF0ZSBzYXZlZFRlcm06IHN0cmluZztcbiAgcHJpdmF0ZSBzYXZlZFRlcm06IHN0cmluZyB8IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGRhdGEoZGF0YTogYW55W10gfCBPYnNlcnZhYmxlPGFueVtdPikge1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgKDxPYnNlcnZhYmxlPGFueVtdPj5kYXRhKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICB0aGlzLl9kYXRhID0gcmVzO1xuICAgICAgICBpZiAodGhpcy5zYXZlZFRlcm0pIHtcbiAgICAgICAgICB0aGlzLnNlYXJjaCh0aGlzLnNhdmVkVGVybSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gPGFueVtdPmRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2VhcmNoKHRlcm06IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5zYXZlZFRlcm0gPSB0ZXJtO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNhdmVkVGVybSA9IG51bGw7XG4gICAgICBjb25zdCBtYXRjaGVzOiBhbnlbXSA9IHRoaXMuZXh0cmFjdE1hdGNoZXModGhpcy5fZGF0YSwgdGVybSk7XG4gICAgICB0aGlzLm5leHQodGhpcy5wcm9jZXNzUmVzdWx0cyhtYXRjaGVzKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcHVibGljIGNvbnZlcnRUb0l0ZW0oZGF0YTogYW55KTogQ29tcGxldGVySXRlbSB7XG4gICAgcHVibGljIGNvbnZlcnRUb0l0ZW0oZGF0YTogYW55KTogQ29tcGxldGVySXRlbSB8IGFueSB7XG4gICAgcmV0dXJuIHN1cGVyLmNvbnZlcnRUb0l0ZW0oZGF0YSk7XG4gIH1cbn1cbiJdfQ==