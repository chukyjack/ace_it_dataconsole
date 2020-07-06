/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
import { isNil } from '../globals';
/**
 * @abstract
 */
var /**
 * @abstract
 */
CompleterBaseData = /** @class */ (function (_super) {
    tslib_1.__extends(CompleterBaseData, _super);
    function CompleterBaseData() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    CompleterBaseData.prototype.cancel = /**
     * @return {?}
     */
    function () { };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} searchFields
     * @return {THIS}
     */
    CompleterBaseData.prototype.searchFields = /**
     * @template THIS
     * @this {THIS}
     * @param {?} searchFields
     * @return {THIS}
     */
    function (searchFields) {
        (/** @type {?} */ (this))._searchFields = searchFields;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} titleField
     * @return {THIS}
     */
    CompleterBaseData.prototype.titleField = /**
     * @template THIS
     * @this {THIS}
     * @param {?} titleField
     * @return {THIS}
     */
    function (titleField) {
        (/** @type {?} */ (this))._titleField = titleField;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} descriptionField
     * @return {THIS}
     */
    CompleterBaseData.prototype.descriptionField = /**
     * @template THIS
     * @this {THIS}
     * @param {?} descriptionField
     * @return {THIS}
     */
    function (descriptionField) {
        (/** @type {?} */ (this))._descriptionField = descriptionField;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} imageField
     * @return {THIS}
     */
    CompleterBaseData.prototype.imageField = /**
     * @template THIS
     * @this {THIS}
     * @param {?} imageField
     * @return {THIS}
     */
    function (imageField) {
        (/** @type {?} */ (this))._imageField = imageField;
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CompleterBaseData.prototype.convertToItem = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // let image: string = null;
        /** @type {?} */
        var image = null;
        /** @type {?} */
        var formattedText;
        // let formattedDesc: string;
        /** @type {?} */
        var formattedDesc;
        if (this._titleField) {
            formattedText = this.extractTitle(data);
        }
        else {
            formattedText = data;
        }
        if (this._descriptionField) {
            formattedDesc = this.extractValue(data, this._descriptionField);
        }
        if (this._imageField) {
            image = this.extractValue(data, this._imageField);
        }
        if (isNil(formattedText)) {
            return null;
        }
        return (/** @type {?} */ ({
            title: formattedText,
            description: formattedDesc,
            image: image,
            originalObject: data
        }));
    };
    /**
     * @protected
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    CompleterBaseData.prototype.extractMatches = /**
     * @protected
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    function (data, term) {
        var _this = this;
        /** @type {?} */
        var matches = [];
        /** @type {?} */
        var searchFields = this._searchFields ? this._searchFields.split(',') : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term !== '') {
            matches = data.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var values = searchFields ?
                    searchFields.map((/**
                     * @param {?} searchField
                     * @return {?}
                     */
                    function (searchField) { return _this.extractValue(item, searchField); })).filter((/**
                     * @param {?} value
                     * @return {?}
                     */
                    function (value) { return !!value; })) : [item];
                return values.some((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0; }));
            }));
        }
        else {
            matches = data;
        }
        return matches;
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    CompleterBaseData.prototype.extractTitle = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        // split title fields and run extractValue for each and join with ' '
        return this._titleField.split(',')
            .map((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            return _this.extractValue(item, field);
        }))
            .reduce((/**
         * @param {?} acc
         * @param {?} titlePart
         * @return {?}
         */
        function (acc, titlePart) { return acc ? acc + " " + titlePart : titlePart; }));
    };
    /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    CompleterBaseData.prototype.extractValue = /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    function (obj, key) {
        /** @type {?} */
        var keys;
        /** @type {?} */
        var result;
        if (key) {
            keys = key.split('.');
            result = obj;
            for (var i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    };
    /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    CompleterBaseData.prototype.processResults = /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    function (matches) {
        /** @type {?} */
        var i;
        /** @type {?} */
        var results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                /** @type {?} */
                var item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    };
    return CompleterBaseData;
}(Subject));
/**
 * @abstract
 */
export { CompleterBaseData };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CompleterBaseData.prototype._searchFields;
    /**
     * @type {?}
     * @protected
     */
    CompleterBaseData.prototype._titleField;
    /**
     * @type {?}
     * @protected
     */
    CompleterBaseData.prototype._descriptionField;
    /**
     * @type {?}
     * @protected
     */
    CompleterBaseData.prototype._imageField;
    /**
     * @abstract
     * @param {?} term
     * @return {?}
     */
    CompleterBaseData.prototype.search = function (term) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG9jb21wbGV0ZS9zZXJ2aWNlcy9iYXNlLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQUVuQzs7OztJQUFnRCw2Q0FBd0I7SUFRdEU7ZUFDRSxpQkFBTztJQUNULENBQUM7Ozs7SUFJTSxrQ0FBTTs7O0lBQWIsY0FBa0IsQ0FBQzs7Ozs7OztJQUVaLHdDQUFZOzs7Ozs7SUFBbkIsVUFBb0IsWUFBb0I7UUFDdEMsbUJBQUEsSUFBSSxFQUFBLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVNLHNDQUFVOzs7Ozs7SUFBakIsVUFBa0IsVUFBa0I7UUFDbEMsbUJBQUEsSUFBSSxFQUFBLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVNLDRDQUFnQjs7Ozs7O0lBQXZCLFVBQXdCLGdCQUF3QjtRQUM5QyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUMxQyxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVNLHNDQUFVOzs7Ozs7SUFBakIsVUFBa0IsVUFBa0I7UUFDbEMsbUJBQUEsSUFBSSxFQUFBLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSx5Q0FBYTs7OztJQUFwQixVQUFxQixJQUFT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dGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbXBsZXRlckl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBsZXRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wbGV0ZXJEYXRhIH0gZnJvbSAnLi9jb21wbGV0ZXItZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IGlzTmlsIH0gZnJvbSAnLi4vZ2xvYmFscyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wbGV0ZXJCYXNlRGF0YSBleHRlbmRzIFN1YmplY3Q8Q29tcGxldGVySXRlbVtdPiBpbXBsZW1lbnRzIENvbXBsZXRlckRhdGEge1xuXG5cbiAgcHJvdGVjdGVkIF9zZWFyY2hGaWVsZHM6IHN0cmluZztcbiAgcHJvdGVjdGVkIF90aXRsZUZpZWxkOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfZGVzY3JpcHRpb25GaWVsZDogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2ltYWdlRmllbGQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHNlYXJjaCh0ZXJtOiBzdHJpbmcpOiB2b2lkO1xuXG4gIHB1YmxpYyBjYW5jZWwoKSB7IH1cblxuICBwdWJsaWMgc2VhcmNoRmllbGRzKHNlYXJjaEZpZWxkczogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoRmllbGRzID0gc2VhcmNoRmllbGRzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHRpdGxlRmllbGQodGl0bGVGaWVsZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGl0bGVGaWVsZCA9IHRpdGxlRmllbGQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgZGVzY3JpcHRpb25GaWVsZChkZXNjcmlwdGlvbkZpZWxkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbkZpZWxkID0gZGVzY3JpcHRpb25GaWVsZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBpbWFnZUZpZWxkKGltYWdlRmllbGQ6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlRmllbGQgPSBpbWFnZUZpZWxkO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGNvbnZlcnRUb0l0ZW0oZGF0YTogYW55KSB7XG4gICAgLy8gbGV0IGltYWdlOiBzdHJpbmcgPSBudWxsO1xuICAgIGxldCBpbWFnZTogc3RyaW5nIHwgYW55ID0gbnVsbDtcbiAgICBsZXQgZm9ybWF0dGVkVGV4dDogc3RyaW5nO1xuICAgIC8vIGxldCBmb3JtYXR0ZWREZXNjOiBzdHJpbmc7XG4gICAgbGV0IGZvcm1hdHRlZERlc2M6IHN0cmluZyB8IGFueTtcblxuICAgIGlmICh0aGlzLl90aXRsZUZpZWxkKSB7XG4gICAgICBmb3JtYXR0ZWRUZXh0ID0gdGhpcy5leHRyYWN0VGl0bGUoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdHRlZFRleHQgPSBkYXRhO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kZXNjcmlwdGlvbkZpZWxkKSB7XG4gICAgICBmb3JtYXR0ZWREZXNjID0gdGhpcy5leHRyYWN0VmFsdWUoZGF0YSwgdGhpcy5fZGVzY3JpcHRpb25GaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ltYWdlRmllbGQpIHtcbiAgICAgIGltYWdlID0gdGhpcy5leHRyYWN0VmFsdWUoZGF0YSwgdGhpcy5faW1hZ2VGaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTmlsKGZvcm1hdHRlZFRleHQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGZvcm1hdHRlZFRleHQsXG4gICAgICBkZXNjcmlwdGlvbjogZm9ybWF0dGVkRGVzYyxcbiAgICAgIGltYWdlOiBpbWFnZSxcbiAgICAgIG9yaWdpbmFsT2JqZWN0OiBkYXRhXG4gICAgfSBhcyBDb21wbGV0ZXJJdGVtO1xuXG4gIH1cblxuICBwcm90ZWN0ZWQgZXh0cmFjdE1hdGNoZXMoZGF0YTogYW55W10sIHRlcm06IHN0cmluZykge1xuICAgIGxldCBtYXRjaGVzOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IHNlYXJjaEZpZWxkcyA9IHRoaXMuX3NlYXJjaEZpZWxkcyA/IHRoaXMuX3NlYXJjaEZpZWxkcy5zcGxpdCgnLCcpIDogbnVsbDtcbiAgICBpZiAodGhpcy5fc2VhcmNoRmllbGRzICE9PSBudWxsICYmIHRoaXMuX3NlYXJjaEZpZWxkcyAhPT0gdW5kZWZpbmVkICYmIHRlcm0gIT09ICcnKSB7XG4gICAgICBtYXRjaGVzID0gZGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlczogYW55W10gPSBzZWFyY2hGaWVsZHMgP1xuICAgICAgICBzZWFyY2hGaWVsZHMubWFwKHNlYXJjaEZpZWxkID0+IHRoaXMuZXh0cmFjdFZhbHVlKGl0ZW0sIHNlYXJjaEZpZWxkKSkuZmlsdGVyKHZhbHVlID0+ICEhdmFsdWUpIDogW2l0ZW1dO1xuICAgICAgICByZXR1cm4gdmFsdWVzLnNvbWUodmFsdWUgPT4gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGVybS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpID49IDApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdGNoZXMgPSBkYXRhO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgZXh0cmFjdFRpdGxlKGl0ZW06IGFueSkge1xuICAgIC8vIHNwbGl0IHRpdGxlIGZpZWxkcyBhbmQgcnVuIGV4dHJhY3RWYWx1ZSBmb3IgZWFjaCBhbmQgam9pbiB3aXRoICcgJ1xuICAgIHJldHVybiB0aGlzLl90aXRsZUZpZWxkLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RWYWx1ZShpdGVtLCBmaWVsZCk7XG4gICAgICB9KVxuICAgICAgLnJlZHVjZSgoYWNjLCB0aXRsZVBhcnQpID0+IGFjYyA/IGAke2FjY30gJHt0aXRsZVBhcnR9YCA6IHRpdGxlUGFydCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZXh0cmFjdFZhbHVlKG9iajogYW55LCBrZXk6IHN0cmluZykge1xuICAgIGxldCBrZXlzOiBzdHJpbmdbXTtcbiAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgaWYgKGtleSkge1xuICAgICAga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgcmVzdWx0ID0gb2JqO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHRba2V5c1tpXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gb2JqO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJvdGVjdGVkIHByb2Nlc3NSZXN1bHRzKG1hdGNoZXM6IHN0cmluZ1tdKTogQ29tcGxldGVySXRlbVtdIHtcbiAgICBsZXQgaTogbnVtYmVyO1xuICAgIGNvbnN0IHJlc3VsdHM6IENvbXBsZXRlckl0ZW1bXSA9IFtdO1xuXG4gICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jb252ZXJ0VG9JdGVtKG1hdGNoZXNbaV0pO1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuIl19