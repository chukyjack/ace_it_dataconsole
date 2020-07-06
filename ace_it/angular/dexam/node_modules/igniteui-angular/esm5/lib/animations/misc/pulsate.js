/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, animation, keyframes, style } from '@angular/animations';
/** @type {?} */
var heartbeatBase = [
    style({
        animationTimingFunction: "ease-out",
        transform: "scale(1)",
        transformOrigin: "center center"
    }),
    animate("{{duration}} {{delay}} {{easing}}", keyframes([
        style({
            animationTimingFunction: "ease-in",
            offset: 0.1,
            transform: "scale(0.91)"
        }),
        style({
            animationTimingFunction: "ease-out",
            offset: 0.17,
            transform: "scale(0.98)"
        }),
        style({
            animationTimingFunction: "ease-in",
            offset: 0.33,
            transform: "scale(0.87)"
        }),
        style({
            animationTimingFunction: "ease-out",
            offset: 0.45,
            transform: "scale(1)"
        })
    ]))
];
/** @type {?} */
var heartbeatParams = {
    delay: '0s',
    duration: '1.5s',
    easing: 'ease-in-out'
};
/** @type {?} */
var pulsateBase = [
    animate("{{duration}} {{delay}} {{easing}}", keyframes([
        style({
            offset: 0,
            transform: "scale({{fromScale}})"
        }),
        style({
            offset: 0.5,
            transform: "scale({{toScale}})"
        }),
        style({
            offset: 1,
            transform: "scale({{fromScale}})"
        })
    ]))
];
/** @type {?} */
var pulsateParams = {
    delay: '0s',
    duration: '.5s',
    easing: 'ease-in-out',
    fromScale: 1,
    toScale: 1.1
};
/** @type {?} */
var blinkBase = [
    animate("{{duration}} {{delay}} {{easing}}", keyframes([
        style({
            offset: 0,
            opacity: .8,
            transform: "scale({{fromScale}})"
        }),
        style({
            offset: 0.8,
            opacity: 0,
            transform: "scale({{midScale}})"
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: "scale({{toScale}})"
        })
    ]))
];
/** @type {?} */
var blinkParams = {
    delay: '0s',
    duration: '.8s',
    easing: 'ease-in-out',
    fromScale: .2,
    midScale: 1.2,
    toScale: 2.2
};
/** @type {?} */
var pulsateFwd = animation(pulsateBase, {
    params: tslib_1.__assign({}, pulsateParams)
});
/** @type {?} */
var pulsateBck = animation(pulsateBase, {
    params: tslib_1.__assign({}, pulsateParams, { toScale: .9 })
});
/** @type {?} */
var heartbeat = animation(heartbeatBase, {
    params: tslib_1.__assign({}, heartbeatParams)
});
/** @type {?} */
var blink = animation(blinkBase, {
    params: tslib_1.__assign({}, blinkParams)
});
export { heartbeat, pulsateFwd, pulsateBck, blink };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVsc2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvYW5pbWF0aW9ucy9taXNjL3B1bHNhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsT0FBTyxFQUNQLFNBQVMsRUFHVCxTQUFTLEVBQ1QsS0FBSyxFQUNSLE1BQU0scUJBQXFCLENBQUM7O0lBR3ZCLGFBQWEsR0FBd0I7SUFDdkMsS0FBSyxDQUFDO1FBQ0YsdUJBQXVCLEVBQUUsVUFBVTtRQUNuQyxTQUFTLEVBQUUsVUFBVTtRQUNyQixlQUFlLEVBQUUsZUFBZTtLQUNuQyxDQUFDO0lBQ0YsT0FBTyxDQUNILG1DQUFtQyxFQUNuQyxTQUFTLENBQUM7UUFDTixLQUFLLENBQUM7WUFDRix1QkFBdUIsRUFBRSxTQUFTO1lBQ2xDLE1BQU0sRUFBRSxHQUFHO1lBQ1gsU0FBUyxFQUFFLGFBQWE7U0FDM0IsQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNGLHVCQUF1QixFQUFFLFVBQVU7WUFDbkMsTUFBTSxFQUFFLElBQUk7WUFDWixTQUFTLEVBQUUsYUFBYTtTQUMzQixDQUFDO1FBQ0YsS0FBSyxDQUFDO1lBQ0YsdUJBQXVCLEVBQUUsU0FBUztZQUNsQyxNQUFNLEVBQUUsSUFBSTtZQUNaLFNBQVMsRUFBRSxhQUFhO1NBQzNCLENBQUM7UUFDRixLQUFLLENBQUM7WUFDRix1QkFBdUIsRUFBRSxVQUFVO1lBQ25DLE1BQU0sRUFBRSxJQUFJO1lBQ1osU0FBUyxFQUFFLFVBQVU7U0FDeEIsQ0FBQztLQUNMLENBQUMsQ0FDTDtDQUNKOztJQUVLLGVBQWUsR0FBcUI7SUFDdEMsS0FBSyxFQUFFLElBQUk7SUFDWCxRQUFRLEVBQUUsTUFBTTtJQUNoQixNQUFNLEVBQUUsYUFBYTtDQUN4Qjs7SUFFSyxXQUFXLEdBQXdCO0lBQ3JDLE9BQU8sQ0FDSCxtQ0FBbUMsRUFDbkMsU0FBUyxDQUFDO1FBQ04sS0FBSyxDQUFDO1lBQ0YsTUFBTSxFQUFFLENBQUM7WUFDVCxTQUFTLEVBQUUsc0JBQXNCO1NBQ3BDLENBQUM7UUFDRixLQUFLLENBQUM7WUFDRixNQUFNLEVBQUUsR0FBRztZQUNYLFNBQVMsRUFBRSxvQkFBb0I7U0FDbEMsQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNGLE1BQU0sRUFBRSxDQUFDO1lBQ1QsU0FBUyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO0tBQ0wsQ0FBQyxDQUNMO0NBQ0o7O0lBRUssYUFBYSxHQUFxQjtJQUNwQyxLQUFLLEVBQUUsSUFBSTtJQUNYLFFBQVEsRUFBRSxLQUFLO0lBQ2YsTUFBTSxFQUFFLGFBQWE7SUFDckIsU0FBUyxFQUFFLENBQUM7SUFDWixPQUFPLEVBQUUsR0FBRztDQUNmOztJQUVLLFNBQVMsR0FBd0I7SUFDbkMsT0FBTyxDQUNILG1DQUFtQyxFQUNuQyxTQUFTLENBQUM7UUFDTixLQUFLLENBQUM7WUFDRixNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsU0FBUyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO1FBQ0YsS0FBSyxDQUFDO1lBQ0YsTUFBTSxFQUFFLEdBQUc7WUFDWCxPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxxQkFBcUI7U0FDbkMsQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNGLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsb0JBQW9CO1NBQ2xDLENBQUM7S0FDTCxDQUFDLENBQ0w7Q0FDSjs7SUFFSyxXQUFXLEdBQXFCO0lBQ2xDLEtBQUssRUFBRSxJQUFJO0lBQ1gsUUFBUSxFQUFFLEtBQUs7SUFDZixNQUFNLEVBQUUsYUFBYTtJQUNyQixTQUFTLEVBQUUsRUFBRTtJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsT0FBTyxFQUFFLEdBQUc7Q0FDZjs7SUFFSyxVQUFVLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRTtJQUN0QyxNQUFNLHVCQUNDLGFBQWEsQ0FDbkI7Q0FDSixDQUFDOztJQUVJLFVBQVUsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFO0lBQ3RDLE1BQU0sdUJBQ0MsYUFBYSxJQUNoQixPQUFPLEVBQUUsRUFBRSxHQUNkO0NBQ0osQ0FBQzs7SUFFSSxTQUFTLEdBQUcsU0FBUyxDQUFDLGFBQWEsRUFBRTtJQUN2QyxNQUFNLHVCQUNDLGVBQWUsQ0FDckI7Q0FDSixDQUFDOztJQUVJLEtBQUssR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFO0lBQy9CLE1BQU0sdUJBQ0MsV0FBVyxDQUNqQjtDQUNKLENBQUM7QUFFRixPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsS0FBSyxFQUNSLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGFuaW1hdGUsXG4gICAgYW5pbWF0aW9uLFxuICAgIEFuaW1hdGlvbk1ldGFkYXRhLFxuICAgIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLFxuICAgIGtleWZyYW1lcyxcbiAgICBzdHlsZVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IElBbmltYXRpb25QYXJhbXMgfSBmcm9tICcuLi9tYWluJztcblxuY29uc3QgaGVhcnRiZWF0QmFzZTogQW5pbWF0aW9uTWV0YWRhdGFbXSA9IFtcbiAgICBzdHlsZSh7XG4gICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBgZWFzZS1vdXRgLFxuICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSgxKWAsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogYGNlbnRlciBjZW50ZXJgXG4gICAgfSksXG4gICAgYW5pbWF0ZShcbiAgICAgICAgYHt7ZHVyYXRpb259fSB7e2RlbGF5fX0ge3tlYXNpbmd9fWAsXG4gICAgICAgIGtleWZyYW1lcyhbXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IGBlYXNlLWluYCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAuMSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSgwLjkxKWBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBgZWFzZS1vdXRgLFxuICAgICAgICAgICAgICAgIG9mZnNldDogMC4xNyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSgwLjk4KWBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBgZWFzZS1pbmAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLjMzLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHNjYWxlKDAuODcpYFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IGBlYXNlLW91dGAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLjQ1LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHNjYWxlKDEpYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICApXG5dO1xuXG5jb25zdCBoZWFydGJlYXRQYXJhbXM6IElBbmltYXRpb25QYXJhbXMgPSB7XG4gICAgZGVsYXk6ICcwcycsXG4gICAgZHVyYXRpb246ICcxLjVzJyxcbiAgICBlYXNpbmc6ICdlYXNlLWluLW91dCdcbn07XG5cbmNvbnN0IHB1bHNhdGVCYXNlOiBBbmltYXRpb25NZXRhZGF0YVtdID0gW1xuICAgIGFuaW1hdGUoXG4gICAgICAgIGB7e2R1cmF0aW9ufX0ge3tkZWxheX19IHt7ZWFzaW5nfX1gLFxuICAgICAgICBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSh7e2Zyb21TY2FsZX19KWBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgIG9mZnNldDogMC41LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHNjYWxlKHt7dG9TY2FsZX19KWBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSh7e2Zyb21TY2FsZX19KWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgKVxuXTtcblxuY29uc3QgcHVsc2F0ZVBhcmFtczogSUFuaW1hdGlvblBhcmFtcyA9IHtcbiAgICBkZWxheTogJzBzJyxcbiAgICBkdXJhdGlvbjogJy41cycsXG4gICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLFxuICAgIGZyb21TY2FsZTogMSxcbiAgICB0b1NjYWxlOiAxLjFcbn07XG5cbmNvbnN0IGJsaW5rQmFzZTogQW5pbWF0aW9uTWV0YWRhdGFbXSA9IFtcbiAgICBhbmltYXRlKFxuICAgICAgICBge3tkdXJhdGlvbn19IHt7ZGVsYXl9fSB7e2Vhc2luZ319YCxcbiAgICAgICAga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjgsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoe3tmcm9tU2NhbGV9fSlgXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAuOCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHNjYWxlKHt7bWlkU2NhbGV9fSlgXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSh7e3RvU2NhbGV9fSlgXG4gICAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgIClcbl07XG5cbmNvbnN0IGJsaW5rUGFyYW1zOiBJQW5pbWF0aW9uUGFyYW1zID0ge1xuICAgIGRlbGF5OiAnMHMnLFxuICAgIGR1cmF0aW9uOiAnLjhzJyxcbiAgICBlYXNpbmc6ICdlYXNlLWluLW91dCcsXG4gICAgZnJvbVNjYWxlOiAuMixcbiAgICBtaWRTY2FsZTogMS4yLFxuICAgIHRvU2NhbGU6IDIuMlxufTtcblxuY29uc3QgcHVsc2F0ZUZ3ZCA9IGFuaW1hdGlvbihwdWxzYXRlQmFzZSwge1xuICAgIHBhcmFtczoge1xuICAgICAgICAuLi5wdWxzYXRlUGFyYW1zXG4gICAgfVxufSk7XG5cbmNvbnN0IHB1bHNhdGVCY2sgPSBhbmltYXRpb24ocHVsc2F0ZUJhc2UsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4ucHVsc2F0ZVBhcmFtcyxcbiAgICAgICAgdG9TY2FsZTogLjlcbiAgICB9XG59KTtcblxuY29uc3QgaGVhcnRiZWF0ID0gYW5pbWF0aW9uKGhlYXJ0YmVhdEJhc2UsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4uaGVhcnRiZWF0UGFyYW1zXG4gICAgfVxufSk7XG5cbmNvbnN0IGJsaW5rID0gYW5pbWF0aW9uKGJsaW5rQmFzZSwge1xuICAgIHBhcmFtczoge1xuICAgICAgICAuLi5ibGlua1BhcmFtc1xuICAgIH1cbn0pO1xuXG5leHBvcnQge1xuICAgIGhlYXJ0YmVhdCxcbiAgICBwdWxzYXRlRndkLFxuICAgIHB1bHNhdGVCY2ssXG4gICAgYmxpbmtcbn07XG4iXX0=