/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { LocalData } from './local-data.service';
import { RemoteData } from './remote-data.service';
/**
 * @return {?}
 */
export function localDataFactory() {
    return (/**
     * @return {?}
     */
    () => {
        return new LocalData();
    });
}
/**
 * @param {?} http
 * @return {?}
 */
export function remoteDataFactory(http) {
    return (/**
     * @return {?}
     */
    () => {
        return new RemoteData(http);
    });
}
/** @type {?} */
export let LocalDataFactoryProvider = { provide: LocalData, useFactory: localDataFactory };
/** @type {?} */
export let RemoteDataFactoryProvider = { provide: RemoteData, useFactory: remoteDataFactory, deps: [HttpClient] };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG9jb21wbGV0ZS9zZXJ2aWNlcy9kYXRhLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHbkQsTUFBTSxVQUFVLGdCQUFnQjtJQUM5Qjs7O0lBQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQ3pCLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQWdCO0lBQ2hEOzs7SUFBTyxHQUFHLEVBQUU7UUFDVixPQUFPLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUMsRUFBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFLLHdCQUF3QixHQUFHLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUU7O0FBQzFGLE1BQU0sS0FBSyx5QkFBeUIsR0FBRyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgTG9jYWxEYXRhIH0gZnJvbSAnLi9sb2NhbC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVtb3RlRGF0YSB9IGZyb20gJy4vcmVtb3RlLWRhdGEuc2VydmljZSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsRGF0YUZhY3RvcnkoKSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBMb2NhbERhdGEoKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW90ZURhdGFGYWN0b3J5KGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFJlbW90ZURhdGEoaHR0cCk7XG4gIH07XG59XG5cbmV4cG9ydCBsZXQgTG9jYWxEYXRhRmFjdG9yeVByb3ZpZGVyID0geyBwcm92aWRlOiBMb2NhbERhdGEsIHVzZUZhY3Rvcnk6IGxvY2FsRGF0YUZhY3RvcnkgfTtcbmV4cG9ydCBsZXQgUmVtb3RlRGF0YUZhY3RvcnlQcm92aWRlciA9IHsgcHJvdmlkZTogUmVtb3RlRGF0YSwgdXNlRmFjdG9yeTogcmVtb3RlRGF0YUZhY3RvcnksIGRlcHM6IFtIdHRwQ2xpZW50XSB9O1xuIl19