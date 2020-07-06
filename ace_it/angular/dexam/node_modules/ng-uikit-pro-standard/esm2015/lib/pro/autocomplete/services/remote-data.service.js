/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { catchError, map } from 'rxjs/operators';
import { CompleterBaseData } from './base-data.service';
export class RemoteData extends CompleterBaseData {
    /**
     * @param {?} http
     */
    constructor(http) {
        super();
        this.http = http;
        this.setToNullValue = null;
        // private _urlFormater: (term: string) => string | any = null;
        this._urlFormater = this.setToNullValue;
        // private _dataField: string = null;
        this._dataField = null;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} remoteUrl
     * @return {THIS}
     */
    remoteUrl(remoteUrl) {
        (/** @type {?} */ (this))._remoteUrl = remoteUrl;
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} urlFormater
     * @return {?}
     */
    urlFormater(urlFormater) {
        this._urlFormater = urlFormater;
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    dataField(dataField) {
        this._dataField = dataField;
    }
    /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     * @param {?} headers
     * @return {?}
     */
    headers(headers) {
        this._headers = headers;
    }
    /**
     * @param {?} requestOptions
     * @return {?}
     */
    requestOptions(requestOptions) {
        this._requestOptions = requestOptions;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        this.cancel();
        // let params = {};
        /** @type {?} */
        let url = '';
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        /*
         * If requestOptions are provided, they will override anything set in headers.
         *
         * If no requestOptions are provided, a new RequestOptions object will be instantiated,
         * and either the provided headers or a new Headers() object will be sent.
         */
        // if (!this._requestOptions) {
        //   this._requestOptions = new RequestOptions();
        //   (this._requestOptions.headers as any) = this._headers || new HttpHeaders();
        // }
        this.remoteSearch = this.http.get(url, this._requestOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => res)), map((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            /** @type {?} */
            const matches = this.extractValue(data, this._dataField);
            return this.extractMatches(matches, term);
        })), map((/**
         * @param {?} matches
         * @return {?}
         */
        (matches) => {
            /** @type {?} */
            const results = this.processResults(matches);
            this.next(results);
            return results;
        })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            this.error(err);
            // return null;
            return this.setToNullValue;
        })))
            .subscribe();
    }
    /**
     * @return {?}
     */
    cancel() {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
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
if (false) {
    /** @type {?} */
    RemoteData.prototype.setToNullValue;
    /**
     * @type {?}
     * @private
     */
    RemoteData.prototype._remoteUrl;
    /**
     * @type {?}
     * @private
     */
    RemoteData.prototype.remoteSearch;
    /**
     * @type {?}
     * @private
     */
    RemoteData.prototype._urlFormater;
    /**
     * @type {?}
     * @private
     */
    RemoteData.prototype._dataField;
    /** @type {?} */
    RemoteData.prototype._headers;
    /**
     * @type {?}
     * @private
     */
    RemoteData.prototype._requestOptions;
    /**
     * @type {?}
     * @private
     */
    RemoteData.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3RlLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL3NlcnZpY2VzL3JlbW90ZS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHeEQsTUFBTSxPQUFPLFVBQVcsU0FBUSxpQkFBaUI7Ozs7SUFZL0MsWUFBb0IsSUFBZ0I7UUFDbEMsS0FBSyxFQUFFLENBQUM7UUFEVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBWDdCLG1CQUFjLEdBQVEsSUFBSSxDQUFDOztRQUkxQixpQkFBWSxHQUFtQyxJQUFJLENBQUMsY0FBYyxDQUFDOztRQUVuRSxlQUFVLEdBQWlCLElBQUksQ0FBQztJQU94QyxDQUFDOzs7Ozs7O0lBRU0sU0FBUyxDQUFDLFNBQWlCO1FBQ2hDLG1CQUFBLElBQUksRUFBQSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLFdBQXFDO1FBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLFNBQWlCO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUtNLE9BQU8sQ0FBQyxPQUFvQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDOzs7OztJQUVNLGNBQWMsQ0FBQyxjQUFtQjtRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxJQUFZO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7O1lBRVYsR0FBRyxHQUFHLEVBQUU7UUFDWixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNMLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xEO1FBRUQ7Ozs7O1dBS0c7UUFDSCwrQkFBK0I7UUFDL0IsaURBQWlEO1FBQ2pELGdGQUFnRjtRQUNoRixJQUFJO1FBRUosSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRzs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFDdEIsR0FBRzs7OztRQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7O2tCQUNWLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3hELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUNELENBQUMsT0FBYyxFQUFFLEVBQUU7O2tCQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25CLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsRUFBQyxFQUNKLFVBQVU7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsZUFBZTtZQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBRzthQUNKLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFTSxNQUFNO1FBQ1gsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7Ozs7SUFHTSxhQUFhLENBQUMsSUFBUztRQUM1QixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNGOzs7SUExRkMsb0NBQWtDOzs7OztJQUNsQyxnQ0FBMkI7Ozs7O0lBQzNCLGtDQUFtQzs7Ozs7SUFFbkMsa0NBQTJFOzs7OztJQUUzRSxnQ0FBd0M7O0lBQ3hDLDhCQUFjOzs7OztJQUNkLHFDQUE2Qjs7Ozs7SUFHakIsMEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5cbmltcG9ydCB7IENvbXBsZXRlckJhc2VEYXRhIH0gZnJvbSAnLi9iYXNlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wbGV0ZXJJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wbGV0ZXItaXRlbS5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgUmVtb3RlRGF0YSBleHRlbmRzIENvbXBsZXRlckJhc2VEYXRhIHtcbiAgcHVibGljIHNldFRvTnVsbFZhbHVlOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9yZW1vdGVVcmw6IHN0cmluZztcbiAgcHJpdmF0ZSByZW1vdGVTZWFyY2g6IFN1YnNjcmlwdGlvbjtcbiAgLy8gcHJpdmF0ZSBfdXJsRm9ybWF0ZXI6ICh0ZXJtOiBzdHJpbmcpID0+IHN0cmluZyB8IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX3VybEZvcm1hdGVyOiAodGVybTogc3RyaW5nKSA9PiBzdHJpbmcgfCBhbnkgPSB0aGlzLnNldFRvTnVsbFZhbHVlO1xuICAvLyBwcml2YXRlIF9kYXRhRmllbGQ6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgX2RhdGFGaWVsZDogc3RyaW5nIHwgYW55ID0gbnVsbDtcbiAgX2hlYWRlcnM6IGFueTtcbiAgcHJpdmF0ZSBfcmVxdWVzdE9wdGlvbnM6IGFueTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3RlVXJsKHJlbW90ZVVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVtb3RlVXJsID0gcmVtb3RlVXJsO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHVybEZvcm1hdGVyKHVybEZvcm1hdGVyOiAodGVybTogc3RyaW5nKSA9PiBzdHJpbmcpIHtcbiAgICB0aGlzLl91cmxGb3JtYXRlciA9IHVybEZvcm1hdGVyO1xuICB9XG5cbiAgcHVibGljIGRhdGFGaWVsZChkYXRhRmllbGQ6IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGFGaWVsZCA9IGRhdGFGaWVsZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIHRoZSByZXF1ZXN0T3B0aW9ucyB0byBwYXNzIGhlYWRlcnMgd2l0aCB0aGUgc2VhcmNoIHJlcXVlc3RcbiAgICovXG4gIHB1YmxpYyBoZWFkZXJzKGhlYWRlcnM6IEh0dHBIZWFkZXJzKSB7XG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cblxuICBwdWJsaWMgcmVxdWVzdE9wdGlvbnMocmVxdWVzdE9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuX3JlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gIH1cblxuICBwdWJsaWMgc2VhcmNoKHRlcm06IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgLy8gbGV0IHBhcmFtcyA9IHt9O1xuICAgIGxldCB1cmwgPSAnJztcbiAgICBpZiAodGhpcy5fdXJsRm9ybWF0ZXIpIHtcbiAgICAgIHVybCA9IHRoaXMuX3VybEZvcm1hdGVyKHRlcm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSB0aGlzLl9yZW1vdGVVcmwgKyBlbmNvZGVVUklDb21wb25lbnQodGVybSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBJZiByZXF1ZXN0T3B0aW9ucyBhcmUgcHJvdmlkZWQsIHRoZXkgd2lsbCBvdmVycmlkZSBhbnl0aGluZyBzZXQgaW4gaGVhZGVycy5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlcXVlc3RPcHRpb25zIGFyZSBwcm92aWRlZCwgYSBuZXcgUmVxdWVzdE9wdGlvbnMgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkLFxuICAgICAqIGFuZCBlaXRoZXIgdGhlIHByb3ZpZGVkIGhlYWRlcnMgb3IgYSBuZXcgSGVhZGVycygpIG9iamVjdCB3aWxsIGJlIHNlbnQuXG4gICAgICovXG4gICAgLy8gaWYgKCF0aGlzLl9yZXF1ZXN0T3B0aW9ucykge1xuICAgIC8vICAgdGhpcy5fcmVxdWVzdE9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoKTtcbiAgICAvLyAgICh0aGlzLl9yZXF1ZXN0T3B0aW9ucy5oZWFkZXJzIGFzIGFueSkgPSB0aGlzLl9oZWFkZXJzIHx8IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIC8vIH1cblxuICAgIHRoaXMucmVtb3RlU2VhcmNoID0gdGhpcy5odHRwLmdldCh1cmwsIHRoaXMuX3JlcXVlc3RPcHRpb25zKS5waXBlKFxuICAgICAgbWFwKChyZXM6IGFueSkgPT4gcmVzKSxcbiAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmV4dHJhY3RWYWx1ZShkYXRhLCB0aGlzLl9kYXRhRmllbGQpO1xuICAgICAgICByZXR1cm4gdGhpcy5leHRyYWN0TWF0Y2hlcyhtYXRjaGVzLCB0ZXJtKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKFxuICAgICAgICAobWF0Y2hlczogYW55W10pID0+IHtcbiAgICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5wcm9jZXNzUmVzdWx0cyhtYXRjaGVzKTtcbiAgICAgICAgICB0aGlzLm5leHQocmVzdWx0cyk7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgICAgLy8gcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFRvTnVsbFZhbHVlO1xuICAgICAgfSksIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBjYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMucmVtb3RlU2VhcmNoKSB7XG4gICAgICB0aGlzLnJlbW90ZVNlYXJjaC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHB1YmxpYyBjb252ZXJ0VG9JdGVtKGRhdGE6IGFueSk6IENvbXBsZXRlckl0ZW0ge1xuICBwdWJsaWMgY29udmVydFRvSXRlbShkYXRhOiBhbnkpOiBDb21wbGV0ZXJJdGVtIHwgYW55IHtcbiAgICByZXR1cm4gc3VwZXIuY29udmVydFRvSXRlbShkYXRhKTtcbiAgfVxufVxuIl19