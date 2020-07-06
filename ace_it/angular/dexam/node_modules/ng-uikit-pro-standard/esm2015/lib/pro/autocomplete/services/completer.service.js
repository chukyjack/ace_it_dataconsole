/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { LocalData } from './local-data.service';
import { RemoteData } from './remote-data.service';
export class CompleterService {
    /**
     * @param {?} localDataFactory
     * @param {?} remoteDataFactory
     */
    constructor(localDataFactory, // Using any instead of () => LocalData because on AoT errors
    remoteDataFactory // Using any instead of () => LocalData because on AoT errors
    ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory;
    }
    /**
     * @param {?} data
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    local(data, searchFields = '', titleField = '') {
        /** @type {?} */
        const localData = this.localDataFactory();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    }
    /**
     * @param {?} url
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    remote(url, searchFields = '', titleField = '') {
        /** @type {?} */
        const remoteData = this.remoteDataFactory();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    }
}
CompleterService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompleterService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LocalData,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [RemoteData,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompleterService.prototype.localDataFactory;
    /**
     * @type {?}
     * @private
     */
    CompleterService.prototype.remoteDataFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG9jb21wbGV0ZS9zZXJ2aWNlcy9jb21wbGV0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUluRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUMzQixZQUM2QixnQkFBcUIsRUFBRSw2REFBNkQ7SUFDbkYsaUJBQXNCLENBQUMsNkRBQTZEOztRQURyRixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQUs7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFLO0lBQ2hELENBQUM7Ozs7Ozs7SUFFRSxLQUFLLENBQUMsSUFBNkIsRUFBRSxZQUFZLEdBQUcsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFOztjQUV0RSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1FBQ3pDLE9BQU8sU0FBUzthQUNiLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixZQUFZLENBQUMsWUFBWSxDQUFDO2FBQzFCLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUFDLEdBQVcsRUFBRSxZQUFZLEdBQUcsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFOztjQUVyRCxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBQzNDLE9BQU8sVUFBVTthQUNkLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDZCxZQUFZLENBQUMsWUFBWSxDQUFDO2FBQzFCLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUF2QkYsVUFBVTs7Ozs0Q0FHTixNQUFNLFNBQUMsU0FBUzs0Q0FDaEIsTUFBTSxTQUFDLFVBQVU7Ozs7Ozs7SUFEbEIsNENBQWdEOzs7OztJQUNoRCw2Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTG9jYWxEYXRhIH0gZnJvbSAnLi9sb2NhbC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVtb3RlRGF0YSB9IGZyb20gJy4vcmVtb3RlLWRhdGEuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBsZXRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KExvY2FsRGF0YSkgcHJpdmF0ZSBsb2NhbERhdGFGYWN0b3J5OiBhbnksIC8vIFVzaW5nIGFueSBpbnN0ZWFkIG9mICgpID0+IExvY2FsRGF0YSBiZWNhdXNlIG9uIEFvVCBlcnJvcnNcbiAgICBASW5qZWN0KFJlbW90ZURhdGEpIHByaXZhdGUgcmVtb3RlRGF0YUZhY3Rvcnk6IGFueSAvLyBVc2luZyBhbnkgaW5zdGVhZCBvZiAoKSA9PiBMb2NhbERhdGEgYmVjYXVzZSBvbiBBb1QgZXJyb3JzXG4gICkgeyB9XG5cbiAgcHVibGljIGxvY2FsKGRhdGE6IGFueVtdIHwgT2JzZXJ2YWJsZTxhbnk+LCBzZWFyY2hGaWVsZHMgPSAnJywgdGl0bGVGaWVsZCA9ICcnKTogTG9jYWxEYXRhIHtcblxuICAgIGNvbnN0IGxvY2FsRGF0YSA9IHRoaXMubG9jYWxEYXRhRmFjdG9yeSgpO1xuICAgIHJldHVybiBsb2NhbERhdGFcbiAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAuc2VhcmNoRmllbGRzKHNlYXJjaEZpZWxkcylcbiAgICAgIC50aXRsZUZpZWxkKHRpdGxlRmllbGQpO1xuICB9XG5cbiAgcHVibGljIHJlbW90ZSh1cmw6IHN0cmluZywgc2VhcmNoRmllbGRzID0gJycsIHRpdGxlRmllbGQgPSAnJyk6IFJlbW90ZURhdGEge1xuXG4gICAgY29uc3QgcmVtb3RlRGF0YSA9IHRoaXMucmVtb3RlRGF0YUZhY3RvcnkoKTtcbiAgICByZXR1cm4gcmVtb3RlRGF0YVxuICAgICAgLnJlbW90ZVVybCh1cmwpXG4gICAgICAuc2VhcmNoRmllbGRzKHNlYXJjaEZpZWxkcylcbiAgICAgIC50aXRsZUZpZWxkKHRpdGxlRmllbGQpO1xuICB9XG59XG4iXX0=