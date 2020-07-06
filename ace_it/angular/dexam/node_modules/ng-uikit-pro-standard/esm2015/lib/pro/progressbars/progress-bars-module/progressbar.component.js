/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, HostBinding, Input, } from '@angular/core';
// TODO(josephperrott): Benchpress tests.
// TODO(josephperrott): Add ARIA attributes for progressbar "for".
/**
 * <md-progress-bar> component.
 */
export class ProgressBarComponent {
    constructor() {
        /**
         * Color of the progress bar.
         */
        this.color = 'primary';
        this._value = 0;
        this._bufferValue = 0;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        this.mode = 'determinate';
    }
    /**
     * Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow.
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) { this._value = clamp(v || 0); }
    /**
     * Buffer value of the progress bar. Defaults to zero.
     * @return {?}
     */
    get bufferValue() { return this._bufferValue; }
    /**
     * @param {?} v
     * @return {?}
     */
    set bufferValue(v) { this._bufferValue = clamp(v || 0); }
    /**
     * Gets the current transform value for the progress bar's primary indicator.
     * @return {?}
     */
    _primaryTransform() {
        /** @type {?} */
        const scale = this.value / 100;
        return { transform: `scaleX(${scale})` };
    }
    /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     * @return {?}
     */
    _bufferTransform() {
        if (this.mode === 'buffer') {
            /** @type {?} */
            const scale = this.bufferValue / 100;
            return { transform: `scaleX(${scale})` };
        }
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-progress-bar, mat-progress-bar',
                template: "<!-- The background div is named as such because it appears below the other divs and is not sized based on values. -->\n<div class=\"mat-progress-bar-background mat-progress-bar-element\"></div>\n<div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n<div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\"></div>\n<div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;height:5px;overflow:hidden;position:relative;-webkit-transform:translateZ(0);transform:translateZ(0);transition:opacity 250ms linear;width:100%}:host .mat-progress-bar-element,:host .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}:host .mat-progress-bar-background{background-repeat:repeat-x;background-size:10px 4px;display:none}:host .mat-progress-bar-buffer{-webkit-transform-origin:top left;transform-origin:top left;transition:transform 250ms,stroke .3s cubic-bezier(.35,0,.25,1),-webkit-transform 250ms}:host .mat-progress-bar-secondary{display:none}:host .mat-progress-bar-fill{-webkit-animation:none;animation:none;-webkit-transform-origin:top left;transform-origin:top left;transition:transform 250ms,stroke .3s cubic-bezier(.35,0,.25,1),-webkit-transform 250ms}:host .mat-progress-bar-fill::after{-webkit-animation:none;animation:none;content:'';display:inline-block;left:0}:host[mode=query]{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}:host[mode=indeterminate] .mat-progress-bar-fill,:host[mode=query] .mat-progress-bar-fill{transition:none}:host[mode=indeterminate] .mat-progress-bar-primary,:host[mode=query] .mat-progress-bar-primary{-webkit-animation:2s linear infinite mat-progress-bar-primary-indeterminate-translate;animation:2s linear infinite mat-progress-bar-primary-indeterminate-translate;left:-145.166611%}:host[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,:host[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-animation:2s linear infinite mat-progress-bar-primary-indeterminate-scale;animation:2s linear infinite mat-progress-bar-primary-indeterminate-scale}:host[mode=indeterminate] .mat-progress-bar-secondary,:host[mode=query] .mat-progress-bar-secondary{-webkit-animation:2s linear infinite mat-progress-bar-secondary-indeterminate-translate;animation:2s linear infinite mat-progress-bar-secondary-indeterminate-translate;left:-54.888891%;display:block}:host[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,:host[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-animation:2s linear infinite mat-progress-bar-secondary-indeterminate-scale;animation:2s linear infinite mat-progress-bar-secondary-indeterminate-scale}:host[mode=buffer] .mat-progress-bar-background{-webkit-animation:250ms linear infinite mat-progress-bar-background-scroll;animation:250ms linear infinite mat-progress-bar-background-scroll;display:block}:host-context([dir=rtl]){-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}@-webkit-keyframes mat-progress-bar-primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.61106%);transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.61106%);transform:translateX(200.61106%)}}@-webkit-keyframes mat-progress-bar-primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.66148);transform:scaleX(.66148)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.66148);transform:scaleX(.66148)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes mat-progress-bar-secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:translateX(37.65191%);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:translateX(84.38617%);transform:translateX(84.38617%)}100%{-webkit-transform:translateX(160.27778%);transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:translateX(37.65191%);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:translateX(84.38617%);transform:translateX(84.38617%)}100%{-webkit-transform:translateX(160.27778%);transform:translateX(160.27778%)}}@-webkit-keyframes mat-progress-bar-secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:scaleX(.4571);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:scaleX(.4571);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}100%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes mat-progress-bar-background-scroll{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes mat-progress-bar-background-scroll{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}"]
            }] }
];
ProgressBarComponent.propDecorators = {
    color: [{ type: Input }],
    value: [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] }],
    bufferValue: [{ type: Input }],
    mode: [{ type: Input }, { type: HostBinding, args: ['attr.mode',] }]
};
if (false) {
    /**
     * Color of the progress bar.
     * @type {?}
     */
    ProgressBarComponent.prototype.color;
    /**
     * @type {?}
     * @private
     */
    ProgressBarComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    ProgressBarComponent.prototype._bufferValue;
    /**
     * Mode of the progress bar.
     *
     * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
     * 'determinate'.
     * Mirrored to mode attribute.
     * @type {?}
     */
    ProgressBarComponent.prototype.mode;
}
/**
 * Clamps a value to be between two numbers, by default 0 and 100.
 * @param {?} v
 * @param {?=} min
 * @param {?=} max
 * @return {?}
 */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3MtYmFycy1tb2R1bGUvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFnQnZCLE1BQU0sT0FBTyxvQkFBb0I7SUFQakM7Ozs7UUFTYSxVQUFLLEdBQWtDLFNBQVMsQ0FBQztRQUVsRCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBU1gsaUJBQVksR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1FBZ0J6QixTQUFJLEdBQXlELGFBQWEsQ0FBQztJQWtCL0UsQ0FBQzs7Ozs7SUF4Q0csSUFHSSxLQUFLLEtBQUssT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDbkMsSUFBSSxLQUFLLENBQUMsQ0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBS3JELElBQ0ksV0FBVyxLQUFLLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQy9DLElBQUksV0FBVyxDQUFDLENBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQWNqRSxpQkFBaUI7O2NBQ1AsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRztRQUM5QixPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsS0FBSyxHQUFHLEVBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFNRCxnQkFBZ0I7UUFDWixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFOztrQkFDbEIsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRztZQUNwQyxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsS0FBSyxHQUFHLEVBQUMsQ0FBQztTQUMxQztJQUNMLENBQUM7OztZQXJESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsMmhCQUEyQztnQkFFM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBRWxEOzs7b0JBR0ksS0FBSztvQkFLTCxLQUFLLFlBRUwsV0FBVyxTQUFDLG9CQUFvQjswQkFPaEMsS0FBSzttQkFXTCxLQUFLLFlBQ0wsV0FBVyxTQUFDLFdBQVc7Ozs7Ozs7SUExQnhCLHFDQUEwRDs7Ozs7SUFFMUQsc0NBQW1COzs7OztJQVNuQiw0Q0FBeUI7Ozs7Ozs7OztJQWN6QixvQ0FFMkU7Ozs7Ozs7OztBQXFCL0UsU0FBUyxLQUFLLENBQUMsQ0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUc7SUFDeEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBCZW5jaHByZXNzIHRlc3RzLlxuLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogQWRkIEFSSUEgYXR0cmlidXRlcyBmb3IgcHJvZ3Jlc3NiYXIgXCJmb3JcIi5cblxuXG4vKipcbiAqIDxtZC1wcm9ncmVzcy1iYXI+IGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtZGItcHJvZ3Jlc3MtYmFyLCBtYXQtcHJvZ3Jlc3MtYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Byb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJDb21wb25lbnQge1xuICAgIC8qKiBDb2xvciBvZiB0aGUgcHJvZ3Jlc3MgYmFyLiAqL1xuICAgIEBJbnB1dCgpIGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcblxuICAgIHByaXZhdGUgX3ZhbHVlID0gMDtcblxuICAgIC8qKiBWYWx1ZSBvZiB0aGUgcHJvZ3Jlc3NiYXIuIERlZmF1bHRzIHRvIHplcm8uIE1pcnJvcmVkIHRvIGFyaWEtdmFsdWVub3cuICovXG4gICAgQElucHV0KClcblxuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXZhbHVlbm93JylcbiAgICBnZXQgdmFsdWUoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuICAgIHNldCB2YWx1ZSh2OiBudW1iZXIpIHsgdGhpcy5fdmFsdWUgPSBjbGFtcCh2IHx8IDApOyB9XG5cbiAgICBwcml2YXRlIF9idWZmZXJWYWx1ZSA9IDA7XG5cbiAgICAvKiogQnVmZmVyIHZhbHVlIG9mIHRoZSBwcm9ncmVzcyBiYXIuIERlZmF1bHRzIHRvIHplcm8uICovXG4gICAgQElucHV0KClcbiAgICBnZXQgYnVmZmVyVmFsdWUoKSB7IHJldHVybiB0aGlzLl9idWZmZXJWYWx1ZTsgfVxuICAgIHNldCBidWZmZXJWYWx1ZSh2OiBudW1iZXIpIHsgdGhpcy5fYnVmZmVyVmFsdWUgPSBjbGFtcCh2IHx8IDApOyB9XG5cbiAgICAvKipcbiAgICAqIE1vZGUgb2YgdGhlIHByb2dyZXNzIGJhci5cbiAgICAqXG4gICAgKiBJbnB1dCBtdXN0IGJlIG9uZSBvZiB0aGVzZSB2YWx1ZXM6IGRldGVybWluYXRlLCBpbmRldGVybWluYXRlLCBidWZmZXIsIHF1ZXJ5LCBkZWZhdWx0cyB0b1xuICAgICogJ2RldGVybWluYXRlJy5cbiAgICAqIE1pcnJvcmVkIHRvIG1vZGUgYXR0cmlidXRlLlxuICAgICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIubW9kZScpXG4gICAgbW9kZTogJ2RldGVybWluYXRlJyB8ICdpbmRldGVybWluYXRlJyB8ICdidWZmZXInIHwgJ3F1ZXJ5JyA9ICdkZXRlcm1pbmF0ZSc7XG5cbiAgICAvKiogR2V0cyB0aGUgY3VycmVudCB0cmFuc2Zvcm0gdmFsdWUgZm9yIHRoZSBwcm9ncmVzcyBiYXIncyBwcmltYXJ5IGluZGljYXRvci4gKi9cbiAgICBfcHJpbWFyeVRyYW5zZm9ybSgpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLnZhbHVlIC8gMTAwO1xuICAgICAgICByZXR1cm4ge3RyYW5zZm9ybTogYHNjYWxlWCgke3NjYWxlfSlgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEdldHMgdGhlIGN1cnJlbnQgdHJhbnNmb3JtIHZhbHVlIGZvciB0aGUgcHJvZ3Jlc3MgYmFyJ3MgYnVmZmVyIGluZGljYXRvci4gIE9ubHkgdXNlZCBpZiB0aGVcbiAgICAqIHByb2dyZXNzIG1vZGUgaXMgc2V0IHRvIGJ1ZmZlciwgb3RoZXJ3aXNlIHJldHVybnMgYW4gdW5kZWZpbmVkLCBjYXVzaW5nIG5vIHRyYW5zZm9ybWF0aW9uLlxuICAgICovXG4gICAgX2J1ZmZlclRyYW5zZm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2J1ZmZlcicpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5idWZmZXJWYWx1ZSAvIDEwMDtcbiAgICAgICAgICAgIHJldHVybiB7dHJhbnNmb3JtOiBgc2NhbGVYKCR7c2NhbGV9KWB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiogQ2xhbXBzIGEgdmFsdWUgdG8gYmUgYmV0d2VlbiB0d28gbnVtYmVycywgYnkgZGVmYXVsdCAwIGFuZCAxMDAuICovXG5mdW5jdGlvbiBjbGFtcCh2OiBudW1iZXIsIG1pbiA9IDAsIG1heCA9IDEwMCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdikpO1xufVxuIl19