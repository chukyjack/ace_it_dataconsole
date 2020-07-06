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
    function () {
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
    function () {
        return new RemoteData(http);
    });
}
/** @type {?} */
export var LocalDataFactoryProvider = { provide: LocalData, useFactory: localDataFactory };
/** @type {?} */
export var RemoteDataFactoryProvider = { provide: RemoteData, useFactory: remoteDataFactory, deps: [HttpClient] };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG9jb21wbGV0ZS9zZXJ2aWNlcy9kYXRhLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHbkQsTUFBTSxVQUFVLGdCQUFnQjtJQUM5Qjs7O0lBQU87UUFDTCxPQUFPLElBQUksU0FBUyxFQUFFLENBQUM7SUFDekIsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBZ0I7SUFDaEQ7OztJQUFPO1FBQ0wsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLEVBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBSyx3QkFBd0IsR0FBRyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFOztBQUMxRixNQUFNLEtBQUsseUJBQXlCLEdBQUcsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IExvY2FsRGF0YSB9IGZyb20gJy4vbG9jYWwtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFJlbW90ZURhdGEgfSBmcm9tICcuL3JlbW90ZS1kYXRhLnNlcnZpY2UnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbERhdGFGYWN0b3J5KCkge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgTG9jYWxEYXRhKCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdGVEYXRhRmFjdG9yeShodHRwOiBIdHRwQ2xpZW50KSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBSZW1vdGVEYXRhKGh0dHApO1xuICB9O1xufVxuXG5leHBvcnQgbGV0IExvY2FsRGF0YUZhY3RvcnlQcm92aWRlciA9IHsgcHJvdmlkZTogTG9jYWxEYXRhLCB1c2VGYWN0b3J5OiBsb2NhbERhdGFGYWN0b3J5IH07XG5leHBvcnQgbGV0IFJlbW90ZURhdGFGYWN0b3J5UHJvdmlkZXIgPSB7IHByb3ZpZGU6IFJlbW90ZURhdGEsIHVzZUZhY3Rvcnk6IHJlbW90ZURhdGFGYWN0b3J5LCBkZXBzOiBbSHR0cENsaWVudF0gfTtcbiJdfQ==