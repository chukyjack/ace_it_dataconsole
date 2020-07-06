/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, style } from '@angular/animations';
import { EaseOut } from '../easings';
/** @type {?} */
const base = [
    style({
        opacity: `{{startOpacity}}`
    }),
    animate(`{{duration}} {{delay}} {{easing}}`, style({
        opacity: `{{endOpacity}}`
    }))
];
/** @type {?} */
const baseParams = {
    delay: '0s',
    duration: '350ms',
    easing: EaseOut.sine,
    endOpacity: 1,
    startOpacity: 0
};
/** @type {?} */
const fadeIn = animation(base, {
    params: baseParams
});
/** @type {?} */
const fadeOut = animation(base, {
    params: {
        delay: '0s',
        duration: '350ms',
        easing: EaseOut.sine,
        endOpacity: 0,
        startOpacity: 1
    }
});
export { fadeIn, fadeOut };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2FuaW1hdGlvbnMvZmFkZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQWlELEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9HLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7O01BRy9CLElBQUksR0FBd0I7SUFDOUIsS0FBSyxDQUFDO1FBQ0YsT0FBTyxFQUFFLGtCQUFrQjtLQUM5QixDQUFDO0lBQ0YsT0FBTyxDQUNILG1DQUFtQyxFQUNuQyxLQUFLLENBQUM7UUFDRixPQUFPLEVBQUUsZ0JBQWdCO0tBQzVCLENBQUMsQ0FDTDtDQUNKOztNQUVLLFVBQVUsR0FBcUI7SUFDakMsS0FBSyxFQUFFLElBQUk7SUFDWCxRQUFRLEVBQUUsT0FBTztJQUNqQixNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUk7SUFDcEIsVUFBVSxFQUFFLENBQUM7SUFDYixZQUFZLEVBQUUsQ0FBQztDQUNsQjs7TUFFSyxNQUFNLEdBQStCLFNBQVMsQ0FBQyxJQUFJLEVBQUU7SUFDdkQsTUFBTSxFQUFFLFVBQVU7Q0FDckIsQ0FBQzs7TUFFSSxPQUFPLEdBQStCLFNBQVMsQ0FBQyxJQUFJLEVBQUU7SUFDeEQsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLElBQUk7UUFDWCxRQUFRLEVBQUUsT0FBTztRQUNqQixNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDcEIsVUFBVSxFQUFFLENBQUM7UUFDYixZQUFZLEVBQUUsQ0FBQztLQUNsQjtDQUNKLENBQUM7QUFFRixPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgYW5pbWF0aW9uLCBBbmltYXRpb25NZXRhZGF0YSwgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBFYXNlT3V0IH0gZnJvbSAnLi4vZWFzaW5ncyc7XG5pbXBvcnQgeyBJQW5pbWF0aW9uUGFyYW1zIH0gZnJvbSAnLi4vbWFpbic7XG5cbmNvbnN0IGJhc2U6IEFuaW1hdGlvbk1ldGFkYXRhW10gPSBbXG4gICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiBge3tzdGFydE9wYWNpdHl9fWBcbiAgICB9KSxcbiAgICBhbmltYXRlKFxuICAgICAgICBge3tkdXJhdGlvbn19IHt7ZGVsYXl9fSB7e2Vhc2luZ319YCxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogYHt7ZW5kT3BhY2l0eX19YFxuICAgICAgICB9KVxuICAgIClcbl07XG5cbmNvbnN0IGJhc2VQYXJhbXM6IElBbmltYXRpb25QYXJhbXMgPSB7XG4gICAgZGVsYXk6ICcwcycsXG4gICAgZHVyYXRpb246ICczNTBtcycsXG4gICAgZWFzaW5nOiBFYXNlT3V0LnNpbmUsXG4gICAgZW5kT3BhY2l0eTogMSxcbiAgICBzdGFydE9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IGZhZGVJbjogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oYmFzZSwge1xuICAgIHBhcmFtczogYmFzZVBhcmFtc1xufSk7XG5cbmNvbnN0IGZhZGVPdXQ6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKGJhc2UsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgZGVsYXk6ICcwcycsXG4gICAgICAgIGR1cmF0aW9uOiAnMzUwbXMnLFxuICAgICAgICBlYXNpbmc6IEVhc2VPdXQuc2luZSxcbiAgICAgICAgZW5kT3BhY2l0eTogMCxcbiAgICAgICAgc3RhcnRPcGFjaXR5OiAxXG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9O1xuIl19