/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { isNil } from '../globals';
/**
 * @abstract
 */
export class CompleterBaseData extends Subject {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    cancel() { }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} searchFields
     * @return {THIS}
     */
    searchFields(searchFields) {
        (/** @type {?} */ (this))._searchFields = searchFields;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} titleField
     * @return {THIS}
     */
    titleField(titleField) {
        (/** @type {?} */ (this))._titleField = titleField;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} descriptionField
     * @return {THIS}
     */
    descriptionField(descriptionField) {
        (/** @type {?} */ (this))._descriptionField = descriptionField;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} imageField
     * @return {THIS}
     */
    imageField(imageField) {
        (/** @type {?} */ (this))._imageField = imageField;
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    convertToItem(data) {
        // let image: string = null;
        /** @type {?} */
        let image = null;
        /** @type {?} */
        let formattedText;
        // let formattedDesc: string;
        /** @type {?} */
        let formattedDesc;
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
    }
    /**
     * @protected
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    extractMatches(data, term) {
        /** @type {?} */
        let matches = [];
        /** @type {?} */
        const searchFields = this._searchFields ? this._searchFields.split(',') : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term !== '') {
            matches = data.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                /** @type {?} */
                const values = searchFields ?
                    searchFields.map((/**
                     * @param {?} searchField
                     * @return {?}
                     */
                    searchField => this.extractValue(item, searchField))).filter((/**
                     * @param {?} value
                     * @return {?}
                     */
                    value => !!value)) : [item];
                return values.some((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0));
            }));
        }
        else {
            matches = data;
        }
        return matches;
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    extractTitle(item) {
        // split title fields and run extractValue for each and join with ' '
        return this._titleField.split(',')
            .map((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            return this.extractValue(item, field);
        }))
            .reduce((/**
         * @param {?} acc
         * @param {?} titlePart
         * @return {?}
         */
        (acc, titlePart) => acc ? `${acc} ${titlePart}` : titlePart));
    }
    /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    extractValue(obj, key) {
        /** @type {?} */
        let keys;
        /** @type {?} */
        let result;
        if (key) {
            keys = key.split('.');
            result = obj;
            for (let i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    }
    /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    processResults(matches) {
        /** @type {?} */
        let i;
        /** @type {?} */
        const results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                /** @type {?} */
                const item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG9jb21wbGV0ZS9zZXJ2aWNlcy9iYXNlLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUkvQixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBRW5DLE1BQU0sT0FBZ0IsaUJBQWtCLFNBQVEsT0FBd0I7SUFRdEU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7Ozs7SUFJTSxNQUFNLEtBQUssQ0FBQzs7Ozs7OztJQUVaLFlBQVksQ0FBQyxZQUFvQjtRQUN0QyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRU0sVUFBVSxDQUFDLFVBQWtCO1FBQ2xDLG1CQUFBLElBQUksRUFBQSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxnQkFBd0I7UUFDOUMsbUJBQUEsSUFBSSxFQUFBLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUMsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFTSxVQUFVLENBQUMsVUFBa0I7UUFDbEMsbUJBQUEsSUFBSSxFQUFBLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsSUFBUzs7O1lBRXhCLEtBQUssR0FBaUIsSUFBSTs7WUFDMUIsYUFBcUI7OztZQUVyQixhQUEy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RyxHQUFHLENBQUM7WUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDMUI7YUFDRjtTQUNGO2FBQU07WUFDTCxNQUFNLEdBQUcsR0FBRyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFUyxjQUFjLENBQUMsT0FBaUI7O1lBQ3BDLENBQVM7O2NBQ1AsT0FBTyxHQUFvQixFQUFFO1FBRW5DLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7c0JBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDcEI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGOzs7Ozs7SUE1SEMsMENBQWdDOzs7OztJQUNoQyx3Q0FBOEI7Ozs7O0lBQzlCLDhDQUFvQzs7Ozs7SUFDcEMsd0NBQThCOzs7Ozs7SUFNOUIseURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21wbGV0ZXJJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wbGV0ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGxldGVyRGF0YSB9IGZyb20gJy4vY29tcGxldGVyLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBpc05pbCB9IGZyb20gJy4uL2dsb2JhbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcGxldGVyQmFzZURhdGEgZXh0ZW5kcyBTdWJqZWN0PENvbXBsZXRlckl0ZW1bXT4gaW1wbGVtZW50cyBDb21wbGV0ZXJEYXRhIHtcblxuXG4gIHByb3RlY3RlZCBfc2VhcmNoRmllbGRzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfdGl0bGVGaWVsZDogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2Rlc2NyaXB0aW9uRmllbGQ6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9pbWFnZUZpZWxkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBzZWFyY2godGVybTogc3RyaW5nKTogdm9pZDtcblxuICBwdWJsaWMgY2FuY2VsKCkgeyB9XG5cbiAgcHVibGljIHNlYXJjaEZpZWxkcyhzZWFyY2hGaWVsZHM6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaEZpZWxkcyA9IHNlYXJjaEZpZWxkcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyB0aXRsZUZpZWxkKHRpdGxlRmllbGQ6IHN0cmluZykge1xuICAgIHRoaXMuX3RpdGxlRmllbGQgPSB0aXRsZUZpZWxkO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGRlc2NyaXB0aW9uRmllbGQoZGVzY3JpcHRpb25GaWVsZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb25GaWVsZCA9IGRlc2NyaXB0aW9uRmllbGQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgaW1hZ2VGaWVsZChpbWFnZUZpZWxkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbWFnZUZpZWxkID0gaW1hZ2VGaWVsZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBjb252ZXJ0VG9JdGVtKGRhdGE6IGFueSkge1xuICAgIC8vIGxldCBpbWFnZTogc3RyaW5nID0gbnVsbDtcbiAgICBsZXQgaW1hZ2U6IHN0cmluZyB8IGFueSA9IG51bGw7XG4gICAgbGV0IGZvcm1hdHRlZFRleHQ6IHN0cmluZztcbiAgICAvLyBsZXQgZm9ybWF0dGVkRGVzYzogc3RyaW5nO1xuICAgIGxldCBmb3JtYXR0ZWREZXNjOiBzdHJpbmcgfCBhbnk7XG5cbiAgICBpZiAodGhpcy5fdGl0bGVGaWVsZCkge1xuICAgICAgZm9ybWF0dGVkVGV4dCA9IHRoaXMuZXh0cmFjdFRpdGxlKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXR0ZWRUZXh0ID0gZGF0YTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGVzY3JpcHRpb25GaWVsZCkge1xuICAgICAgZm9ybWF0dGVkRGVzYyA9IHRoaXMuZXh0cmFjdFZhbHVlKGRhdGEsIHRoaXMuX2Rlc2NyaXB0aW9uRmllbGQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbWFnZUZpZWxkKSB7XG4gICAgICBpbWFnZSA9IHRoaXMuZXh0cmFjdFZhbHVlKGRhdGEsIHRoaXMuX2ltYWdlRmllbGQpO1xuICAgIH1cblxuICAgIGlmIChpc05pbChmb3JtYXR0ZWRUZXh0KSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBmb3JtYXR0ZWRUZXh0LFxuICAgICAgZGVzY3JpcHRpb246IGZvcm1hdHRlZERlc2MsXG4gICAgICBpbWFnZTogaW1hZ2UsXG4gICAgICBvcmlnaW5hbE9iamVjdDogZGF0YVxuICAgIH0gYXMgQ29tcGxldGVySXRlbTtcblxuICB9XG5cbiAgcHJvdGVjdGVkIGV4dHJhY3RNYXRjaGVzKGRhdGE6IGFueVtdLCB0ZXJtOiBzdHJpbmcpIHtcbiAgICBsZXQgbWF0Y2hlczogYW55W10gPSBbXTtcbiAgICBjb25zdCBzZWFyY2hGaWVsZHMgPSB0aGlzLl9zZWFyY2hGaWVsZHMgPyB0aGlzLl9zZWFyY2hGaWVsZHMuc3BsaXQoJywnKSA6IG51bGw7XG4gICAgaWYgKHRoaXMuX3NlYXJjaEZpZWxkcyAhPT0gbnVsbCAmJiB0aGlzLl9zZWFyY2hGaWVsZHMgIT09IHVuZGVmaW5lZCAmJiB0ZXJtICE9PSAnJykge1xuICAgICAgbWF0Y2hlcyA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZXM6IGFueVtdID0gc2VhcmNoRmllbGRzID9cbiAgICAgICAgc2VhcmNoRmllbGRzLm1hcChzZWFyY2hGaWVsZCA9PiB0aGlzLmV4dHJhY3RWYWx1ZShpdGVtLCBzZWFyY2hGaWVsZCkpLmZpbHRlcih2YWx1ZSA9PiAhIXZhbHVlKSA6IFtpdGVtXTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5zb21lKHZhbHVlID0+IHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRlcm0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSA+PSAwKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXRjaGVzID0gZGF0YTtcbiAgICB9XG5cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgcHJvdGVjdGVkIGV4dHJhY3RUaXRsZShpdGVtOiBhbnkpIHtcbiAgICAvLyBzcGxpdCB0aXRsZSBmaWVsZHMgYW5kIHJ1biBleHRyYWN0VmFsdWUgZm9yIGVhY2ggYW5kIGpvaW4gd2l0aCAnICdcbiAgICByZXR1cm4gdGhpcy5fdGl0bGVGaWVsZC5zcGxpdCgnLCcpXG4gICAgICAubWFwKChmaWVsZCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5leHRyYWN0VmFsdWUoaXRlbSwgZmllbGQpO1xuICAgICAgfSlcbiAgICAgIC5yZWR1Y2UoKGFjYywgdGl0bGVQYXJ0KSA9PiBhY2MgPyBgJHthY2N9ICR7dGl0bGVQYXJ0fWAgOiB0aXRsZVBhcnQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGV4dHJhY3RWYWx1ZShvYmo6IGFueSwga2V5OiBzdHJpbmcpIHtcbiAgICBsZXQga2V5czogc3RyaW5nW107XG4gICAgbGV0IHJlc3VsdDogYW55O1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgIHJlc3VsdCA9IG9iajtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W2tleXNbaV1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IG9iajtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByb3RlY3RlZCBwcm9jZXNzUmVzdWx0cyhtYXRjaGVzOiBzdHJpbmdbXSk6IENvbXBsZXRlckl0ZW1bXSB7XG4gICAgbGV0IGk6IG51bWJlcjtcbiAgICBjb25zdCByZXN1bHRzOiBDb21wbGV0ZXJJdGVtW10gPSBbXTtcblxuICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY29udmVydFRvSXRlbShtYXRjaGVzW2ldKTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn1cbiJdfQ==