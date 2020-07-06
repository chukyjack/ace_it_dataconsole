/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { catchError, map } from 'rxjs/operators';
import { CompleterBaseData } from './base-data.service';
var RemoteData = /** @class */ (function (_super) {
    tslib_1.__extends(RemoteData, _super);
    function RemoteData(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.setToNullValue = null;
        // private _urlFormater: (term: string) => string | any = null;
        _this._urlFormater = _this.setToNullValue;
        // private _dataField: string = null;
        _this._dataField = null;
        return _this;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} remoteUrl
     * @return {THIS}
     */
    RemoteData.prototype.remoteUrl = /**
     * @template THIS
     * @this {THIS}
     * @param {?} remoteUrl
     * @return {THIS}
     */
    function (remoteUrl) {
        (/** @type {?} */ (this))._remoteUrl = remoteUrl;
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} urlFormater
     * @return {?}
     */
    RemoteData.prototype.urlFormater = /**
     * @param {?} urlFormater
     * @return {?}
     */
    function (urlFormater) {
        this._urlFormater = urlFormater;
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    RemoteData.prototype.dataField = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        this._dataField = dataField;
    };
    /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     */
    /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     * @param {?} headers
     * @return {?}
     */
    RemoteData.prototype.headers = /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     * @param {?} headers
     * @return {?}
     */
    function (headers) {
        this._headers = headers;
    };
    /**
     * @param {?} requestOptions
     * @return {?}
     */
    RemoteData.prototype.requestOptions = /**
     * @param {?} requestOptions
     * @return {?}
     */
    function (requestOptions) {
        this._requestOptions = requestOptions;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    RemoteData.prototype.search = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var _this = this;
        this.cancel();
        // let params = {};
        /** @type {?} */
        var url = '';
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
        function (res) { return res; })), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var matches = _this.extractValue(data, _this._dataField);
            return _this.extractMatches(matches, term);
        })), map((/**
         * @param {?} matches
         * @return {?}
         */
        function (matches) {
            /** @type {?} */
            var results = _this.processResults(matches);
            _this.next(results);
            return results;
        })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            _this.error(err);
            // return null;
            return _this.setToNullValue;
        })))
            .subscribe();
    };
    /**
     * @return {?}
     */
    RemoteData.prototype.cancel = /**
     * @return {?}
     */
    function () {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    };
    // public convertToItem(data: any): CompleterItem {
    // public convertToItem(data: any): CompleterItem {
    /**
     * @param {?} data
     * @return {?}
     */
    RemoteData.prototype.convertToItem = 
    // public convertToItem(data: any): CompleterItem {
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    return RemoteData;
}(CompleterBaseData));
export { RemoteData };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3RlLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL3NlcnZpY2VzL3JlbW90ZS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3hEO0lBQWdDLHNDQUFpQjtJQVkvQyxvQkFBb0IsSUFBZ0I7UUFBcEMsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLFVBQUksR0FBSixJQUFJLENBQVk7UUFYN0Isb0JBQWMsR0FBUSxJQUFJLENBQUM7O1FBSTFCLGtCQUFZLEdBQW1DLEtBQUksQ0FBQyxjQUFjLENBQUM7O1FBRW5FLGdCQUFVLEdBQWlCLElBQUksQ0FBQzs7SUFPeEMsQ0FBQzs7Ozs7OztJQUVNLDhCQUFTOzs7Ozs7SUFBaEIsVUFBaUIsU0FBaUI7UUFDaEMsbUJBQUEsSUFBSSxFQUFBLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxnQ0FBVzs7OztJQUFsQixVQUFtQixXQUFxQztRQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVNLDhCQUFTOzs7O0lBQWhCLFVBQWlCLFNBQWlCO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksNEJBQU87Ozs7O0lBQWQsVUFBZSxPQUFvQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDOzs7OztJQUVNLG1DQUFjOzs7O0lBQXJCLFVBQXNCLGNBQW1CO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU0sMkJBQU07Ozs7SUFBYixVQUFjLElBQVk7UUFBMUIsaUJBdUNDO1FBdENDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7O1lBRVYsR0FBRyxHQUFHLEVBQUU7UUFDWixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNMLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xEO1FBRUQ7Ozs7O1dBS0c7UUFDSCwrQkFBK0I7UUFDL0IsaURBQWlEO1FBQ2pELGdGQUFnRjtRQUNoRixJQUFJO1FBRUosSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRzs7OztRQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsR0FBRyxFQUFILENBQUcsRUFBQyxFQUN0QixHQUFHOzs7O1FBQUMsVUFBQyxJQUFTOztnQkFDTixPQUFPLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQztZQUN4RCxPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFDRCxVQUFDLE9BQWM7O2dCQUNQLE9BQU8sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUM1QyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25CLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsRUFBQyxFQUNKLFVBQVU7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDYixLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLGVBQWU7WUFDZixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUc7YUFDSixTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRU0sMkJBQU07OztJQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsbURBQW1EOzs7Ozs7SUFDNUMsa0NBQWE7Ozs7OztJQUFwQixVQUFxQixJQUFTO1FBQzVCLE9BQU8saUJBQU0sYUFBYSxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUEzRkQsQ0FBZ0MsaUJBQWlCLEdBMkZoRDs7OztJQTFGQyxvQ0FBa0M7Ozs7O0lBQ2xDLGdDQUEyQjs7Ozs7SUFDM0Isa0NBQW1DOzs7OztJQUVuQyxrQ0FBMkU7Ozs7O0lBRTNFLGdDQUF3Qzs7SUFDeEMsOEJBQWM7Ozs7O0lBQ2QscUNBQTZCOzs7OztJQUdqQiwwQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cblxuaW1wb3J0IHsgQ29tcGxldGVyQmFzZURhdGEgfSBmcm9tICcuL2Jhc2UtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBsZXRlckl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBsZXRlci1pdGVtLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBSZW1vdGVEYXRhIGV4dGVuZHMgQ29tcGxldGVyQmFzZURhdGEge1xuICBwdWJsaWMgc2V0VG9OdWxsVmFsdWU6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX3JlbW90ZVVybDogc3RyaW5nO1xuICBwcml2YXRlIHJlbW90ZVNlYXJjaDogU3Vic2NyaXB0aW9uO1xuICAvLyBwcml2YXRlIF91cmxGb3JtYXRlcjogKHRlcm06IHN0cmluZykgPT4gc3RyaW5nIHwgYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfdXJsRm9ybWF0ZXI6ICh0ZXJtOiBzdHJpbmcpID0+IHN0cmluZyB8IGFueSA9IHRoaXMuc2V0VG9OdWxsVmFsdWU7XG4gIC8vIHByaXZhdGUgX2RhdGFGaWVsZDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBfZGF0YUZpZWxkOiBzdHJpbmcgfCBhbnkgPSBudWxsO1xuICBfaGVhZGVyczogYW55O1xuICBwcml2YXRlIF9yZXF1ZXN0T3B0aW9uczogYW55O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdGVVcmwocmVtb3RlVXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW1vdGVVcmwgPSByZW1vdGVVcmw7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgdXJsRm9ybWF0ZXIodXJsRm9ybWF0ZXI6ICh0ZXJtOiBzdHJpbmcpID0+IHN0cmluZykge1xuICAgIHRoaXMuX3VybEZvcm1hdGVyID0gdXJsRm9ybWF0ZXI7XG4gIH1cblxuICBwdWJsaWMgZGF0YUZpZWxkKGRhdGFGaWVsZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YUZpZWxkID0gZGF0YUZpZWxkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgdGhlIHJlcXVlc3RPcHRpb25zIHRvIHBhc3MgaGVhZGVycyB3aXRoIHRoZSBzZWFyY2ggcmVxdWVzdFxuICAgKi9cbiAgcHVibGljIGhlYWRlcnMoaGVhZGVyczogSHR0cEhlYWRlcnMpIHtcbiAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcbiAgfVxuXG4gIHB1YmxpYyByZXF1ZXN0T3B0aW9ucyhyZXF1ZXN0T3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5fcmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBzZWFyY2godGVybTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgICAvLyBsZXQgcGFyYW1zID0ge307XG4gICAgbGV0IHVybCA9ICcnO1xuICAgIGlmICh0aGlzLl91cmxGb3JtYXRlcikge1xuICAgICAgdXJsID0gdGhpcy5fdXJsRm9ybWF0ZXIodGVybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHRoaXMuX3JlbW90ZVVybCArIGVuY29kZVVSSUNvbXBvbmVudCh0ZXJtKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIElmIHJlcXVlc3RPcHRpb25zIGFyZSBwcm92aWRlZCwgdGhleSB3aWxsIG92ZXJyaWRlIGFueXRoaW5nIHNldCBpbiBoZWFkZXJzLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVxdWVzdE9wdGlvbnMgYXJlIHByb3ZpZGVkLCBhIG5ldyBSZXF1ZXN0T3B0aW9ucyBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQsXG4gICAgICogYW5kIGVpdGhlciB0aGUgcHJvdmlkZWQgaGVhZGVycyBvciBhIG5ldyBIZWFkZXJzKCkgb2JqZWN0IHdpbGwgYmUgc2VudC5cbiAgICAgKi9cbiAgICAvLyBpZiAoIXRoaXMuX3JlcXVlc3RPcHRpb25zKSB7XG4gICAgLy8gICB0aGlzLl9yZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucygpO1xuICAgIC8vICAgKHRoaXMuX3JlcXVlc3RPcHRpb25zLmhlYWRlcnMgYXMgYW55KSA9IHRoaXMuX2hlYWRlcnMgfHwgbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgLy8gfVxuXG4gICAgdGhpcy5yZW1vdGVTZWFyY2ggPSB0aGlzLmh0dHAuZ2V0KHVybCwgdGhpcy5fcmVxdWVzdE9wdGlvbnMpLnBpcGUoXG4gICAgICBtYXAoKHJlczogYW55KSA9PiByZXMpLFxuICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZXh0cmFjdFZhbHVlKGRhdGEsIHRoaXMuX2RhdGFGaWVsZCk7XG4gICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RNYXRjaGVzKG1hdGNoZXMsIHRlcm0pO1xuICAgICAgfSksXG4gICAgICBtYXAoXG4gICAgICAgIChtYXRjaGVzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLnByb2Nlc3NSZXN1bHRzKG1hdGNoZXMpO1xuICAgICAgICAgIHRoaXMubmV4dChyZXN1bHRzKTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5lcnJvcihlcnIpO1xuICAgICAgICAvLyByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0VG9OdWxsVmFsdWU7XG4gICAgICB9KSwgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGNhbmNlbCgpIHtcbiAgICBpZiAodGhpcy5yZW1vdGVTZWFyY2gpIHtcbiAgICAgIHRoaXMucmVtb3RlU2VhcmNoLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gcHVibGljIGNvbnZlcnRUb0l0ZW0oZGF0YTogYW55KTogQ29tcGxldGVySXRlbSB7XG4gIHB1YmxpYyBjb252ZXJ0VG9JdGVtKGRhdGE6IGFueSk6IENvbXBsZXRlckl0ZW0gfCBhbnkge1xuICAgIHJldHVybiBzdXBlci5jb252ZXJ0VG9JdGVtKGRhdGEpO1xuICB9XG59XG4iXX0=