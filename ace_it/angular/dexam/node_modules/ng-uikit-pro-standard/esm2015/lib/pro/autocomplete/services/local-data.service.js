/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompleterBaseData } from './base-data.service';
export class LocalData extends CompleterBaseData {
    constructor() {
        super();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    data(data) {
        if (data instanceof Observable) {
            ((/** @type {?} */ (data))).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                (/** @type {?} */ (this))._data = res;
                if ((/** @type {?} */ (this)).savedTerm) {
                    (/** @type {?} */ (this)).search((/** @type {?} */ (this)).savedTerm);
                }
            }));
        }
        else {
            (/** @type {?} */ (this))._data = (/** @type {?} */ (data));
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            /** @type {?} */
            const matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    }
    // public convertToItem(data: any): CompleterItem {
    /**
     * @param {?} data
     * @return {?}
     */
    convertToItem(data) {
        return super.convertToItem(data);
    }
}
LocalData.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalData.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hdXRvY29tcGxldGUvc2VydmljZXMvbG9jYWwtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJeEQsTUFBTSxPQUFPLFNBQVUsU0FBUSxpQkFBaUI7SUFNOUM7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7Ozs7Ozs7SUFFTSxJQUFJLENBQUMsSUFBK0I7UUFDekMsSUFBSSxJQUFJLFlBQVksVUFBVSxFQUFFO1lBQzlCLENBQUMsbUJBQW1CLElBQUksRUFBQSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQzFDLG1CQUFBLElBQUksRUFBQSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLElBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsU0FBUyxFQUFFO29CQUNsQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLENBQUMsbUJBQUEsSUFBSSxFQUFBLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzdCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsbUJBQUEsSUFBSSxFQUFBLENBQUMsS0FBSyxHQUFHLG1CQUFPLElBQUksRUFBQSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLElBQVk7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7O2tCQUNoQixPQUFPLEdBQVUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztZQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7OztJQUdRLGFBQWEsQ0FBQyxJQUFTO1FBQzlCLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUF2Q0YsVUFBVTs7Ozs7Ozs7O0lBR1QsMEJBQXFCOzs7OztJQUVyQiw4QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbXBsZXRlckJhc2VEYXRhIH0gZnJvbSAnLi9iYXNlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wbGV0ZXJJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wbGV0ZXItaXRlbS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxEYXRhIGV4dGVuZHMgQ29tcGxldGVyQmFzZURhdGEge1xuXG4gIHByaXZhdGUgX2RhdGE6IGFueVtdO1xuICAvLyBwcml2YXRlIHNhdmVkVGVybTogc3RyaW5nO1xuICBwcml2YXRlIHNhdmVkVGVybTogc3RyaW5nIHwgYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgZGF0YShkYXRhOiBhbnlbXSB8IE9ic2VydmFibGU8YW55W10+KSB7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAoPE9ic2VydmFibGU8YW55W10+PmRhdGEpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSByZXM7XG4gICAgICAgIGlmICh0aGlzLnNhdmVkVGVybSkge1xuICAgICAgICAgIHRoaXMuc2VhcmNoKHRoaXMuc2F2ZWRUZXJtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSA8YW55W10+ZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZWFyY2godGVybTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLnNhdmVkVGVybSA9IHRlcm07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2F2ZWRUZXJtID0gbnVsbDtcbiAgICAgIGNvbnN0IG1hdGNoZXM6IGFueVtdID0gdGhpcy5leHRyYWN0TWF0Y2hlcyh0aGlzLl9kYXRhLCB0ZXJtKTtcbiAgICAgIHRoaXMubmV4dCh0aGlzLnByb2Nlc3NSZXN1bHRzKG1hdGNoZXMpKTtcbiAgICB9XG4gIH1cblxuICAvLyBwdWJsaWMgY29udmVydFRvSXRlbShkYXRhOiBhbnkpOiBDb21wbGV0ZXJJdGVtIHtcbiAgICBwdWJsaWMgY29udmVydFRvSXRlbShkYXRhOiBhbnkpOiBDb21wbGV0ZXJJdGVtIHwgYW55IHtcbiAgICByZXR1cm4gc3VwZXIuY29udmVydFRvSXRlbShkYXRhKTtcbiAgfVxufVxuIl19