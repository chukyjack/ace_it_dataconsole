/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { transition, trigger, useAnimation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, NgModule, NgZone, Output } from '@angular/core';
import { fadeIn, fadeOut, slideInBottom, slideOutBottom } from '../animations/main';
/** @type {?} */
let NEXT_ID = 0;
/**
 * **Ignite UI for Angular Snackbar** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/snackbar.html)
 *
 * The Ignite UI Snack Bar provides feedback about an operation with a single-line message, which can
 * include a link to an action such as Undo.
 *
 * Example:
 * ```html
 * <button (click)="snackbar.show()">Send message</button>
 * <div>
 *   <igx-snackbar #snackbar message="Message sent">
 *   </igx-snackbar>
 * </div>
 * ```
 */
export class IgxSnackbarComponent {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
        /**
         * Sets/gets the `id` of the snackbar.
         * If not set, the `id` of the first snackbar component  will be `"igx-snackbar-0"`;
         * ```html
         * <igx-snackbar id = "Snackbar1"></igx-snackbar>
         * ```
         * ```typescript
         * let snackbarId = this.snackbar.id;
         * ```
         * \@memberof IgxSnackbarComponent
         */
        this.id = `igx-snackbar-${NEXT_ID++}`;
        /**
         * Enables/Disables the visibility of the snackbar.
         * If not set, the `isVisible` attribute will have value `false`.
         * ```html
         * <igx-snackbar [isVisible] = "true"></igx-snackbar>
         * ```
         * ```typescript
         * let isVisible =  this.snackbar.isVisible;
         * ```
         */
        this.isVisible = false;
        /**
         * Sets/gets if the snackbar will be automatically hidden after the `displayTime` is over.
         * Default value is `true`.
         * ```html
         * <igx-snackbar [autoHide] = "false"></igx-snackbar>
         * ```
         * ```typescript
         * let autoHide =  this.snackbar.autoHide;
         * ```
         */
        this.autoHide = true;
        /**
         * Sets/gets the duration of time(in milliseconds) in which the snackbar will be visible after it is being shown.
         * Default value is 4000.
         * ```html
         * <igx-snackbar [displayTime] = "2000"></igx-snackbar>
         * ```
         * ```typescript
         * let displayTime = this.snackbar.displayTime;
         * ```
         */
        this.displayTime = 4000;
        /**
         * An event that will be emitted when the action is executed.
         * Provides reference to the `IgxSnackbarComponent` as an argument.
         * ```html
         * <igx-snackbar (onAction) = "onAction($event)"></igx-snackbar>
         * ```
         */
        this.onAction = new EventEmitter();
        /**
         * An event that will be emitted when the snackbar animation starts.
         * Provides reference to the `AnimationEvent` interface as an argument.
         * ```html
         * <igx-snackbar (animationStarted) = "animationStarted($event)"></igx-snackbar>
         * ```
         */
        this.animationStarted = new EventEmitter();
        /**
         * An event that will be emitted when the snackbar animation ends.
         * Provides reference to the `AnimationEvent` interface as an argument.
         * ```html
         * <igx-snackbar (animationDone) = "animationDone($event)"></igx-snackbar>
         * ```
         */
        this.animationDone = new EventEmitter();
    }
    /**
     * Shows the snackbar and hides it after the `displayTime` is over if `autoHide` is set to `true`.
     * ```typescript
     * this.snackbar.show();
     * ```
     * @return {?}
     */
    show() {
        clearTimeout(this.timeoutId);
        setTimeout(this.timeoutId);
        this.isVisible = true;
        if (this.autoHide) {
            this.timeoutId = setTimeout(() => {
                this.hide();
            }, this.displayTime);
        }
    }
    /**
     * Hides the snackbar.
     * ```typescript
     * this.snackbar.hide();
     * ```
     * @return {?}
     */
    hide() {
        this.isVisible = false;
        clearTimeout(this.timeoutId);
    }
    /**
     * @hidden
     * @return {?}
     */
    triggerAction() {
        this.onAction.emit(this);
    }
    /**
     * @hidden
     * \@memberof IgxSnackbarComponent
     * @param {?} evt
     * @return {?}
     */
    snackbarAnimationStarted(evt) {
        if (evt.fromState === 'void') {
            this.animationStarted.emit(evt);
        }
    }
    /**
     * @hidden
     * \@memberof IgxSnackbarComponent
     * @param {?} evt
     * @return {?}
     */
    snackbarAnimationDone(evt) {
        if (evt.fromState === 'show') {
            this.animationDone.emit(evt);
        }
    }
}
IgxSnackbarComponent.decorators = [
    { type: Component, args: [{
                animations: [
                    trigger('slideInOut', [
                        transition('void => *', [
                            useAnimation(slideInBottom, {
                                params: {
                                    duration: '.35s',
                                    easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
                                    fromPosition: 'translateY(100%)',
                                    toPosition: 'translateY(0)'
                                }
                            })
                        ]),
                        transition('* => void', [
                            useAnimation(slideOutBottom, {
                                params: {
                                    duration: '.2s',
                                    easing: 'cubic-bezier(0.4, 0.0, 1, 1)',
                                    fromPosition: 'translateY(0)',
                                    toOpacity: 1,
                                    toPosition: 'translateY(100%)'
                                }
                            })
                        ])
                    ]),
                    trigger('fadeInOut', [
                        transition('void => *', [
                            useAnimation(fadeIn, {
                                params: {
                                    duration: '.35s',
                                    easing: 'ease-out'
                                }
                            })
                        ]),
                        transition('* => void', [
                            useAnimation(fadeOut, {
                                params: {
                                    duration: '.2s',
                                    easing: 'ease-out'
                                }
                            })
                        ])
                    ])
                ],
                selector: 'igx-snackbar',
                template: "<div class=\"igx-snackbar\" *ngIf=\"isVisible\" (@slideInOut.start)=\"snackbarAnimationStarted($event)\" (@slideInOut.done)=\"snackbarAnimationDone($event)\"\n    [@slideInOut]=\"isVisible\">\n    <div class=\"igx-snackbar__message\" [@fadeInOut]=\"isVisible\">\n        {{ message }}\n        <ng-content></ng-content>\n    </div>\n    <button class=\"igx-snackbar__button\" igxRipple=\"white\" *ngIf=\"actionText\" [@fadeInOut] (click)=\"triggerAction()\">\n        {{ actionText }}\n    </button>\n</div>\n",
                styles: [`
        :host {
            display: block;
        }
    `]
            }] }
];
/** @nocollapse */
IgxSnackbarComponent.ctorParameters = () => [
    { type: NgZone }
];
IgxSnackbarComponent.propDecorators = {
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    message: [{ type: Input }],
    isVisible: [{ type: Input }],
    autoHide: [{ type: Input }],
    displayTime: [{ type: Input }],
    actionText: [{ type: Input }],
    onAction: [{ type: Output }],
    animationStarted: [{ type: Output }],
    animationDone: [{ type: Output }]
};
if (false) {
    /**
     * Sets/gets the `id` of the snackbar.
     * If not set, the `id` of the first snackbar component  will be `"igx-snackbar-0"`;
     * ```html
     * <igx-snackbar id = "Snackbar1"></igx-snackbar>
     * ```
     * ```typescript
     * let snackbarId = this.snackbar.id;
     * ```
     * \@memberof IgxSnackbarComponent
     * @type {?}
     */
    IgxSnackbarComponent.prototype.id;
    /**
     * Sets/gets the `message` attribute.
     * ```html
     * <igx-snackbar [message] = "'Snackbar Component'"></igx-snackbar>
     * ```
     * ```typescript
     * let message =  this.snackbar.message;
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.message;
    /**
     * Enables/Disables the visibility of the snackbar.
     * If not set, the `isVisible` attribute will have value `false`.
     * ```html
     * <igx-snackbar [isVisible] = "true"></igx-snackbar>
     * ```
     * ```typescript
     * let isVisible =  this.snackbar.isVisible;
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.isVisible;
    /**
     * Sets/gets if the snackbar will be automatically hidden after the `displayTime` is over.
     * Default value is `true`.
     * ```html
     * <igx-snackbar [autoHide] = "false"></igx-snackbar>
     * ```
     * ```typescript
     * let autoHide =  this.snackbar.autoHide;
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.autoHide;
    /**
     * Sets/gets the duration of time(in milliseconds) in which the snackbar will be visible after it is being shown.
     * Default value is 4000.
     * ```html
     * <igx-snackbar [displayTime] = "2000"></igx-snackbar>
     * ```
     * ```typescript
     * let displayTime = this.snackbar.displayTime;
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.displayTime;
    /**
     * Sets/gets the `actionText` attribute.
     * ```html
     * <igx-snackbar [actionText] = "'Action Text'"></igx-snackbar>
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.actionText;
    /**
     * An event that will be emitted when the action is executed.
     * Provides reference to the `IgxSnackbarComponent` as an argument.
     * ```html
     * <igx-snackbar (onAction) = "onAction($event)"></igx-snackbar>
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.onAction;
    /**
     * An event that will be emitted when the snackbar animation starts.
     * Provides reference to the `AnimationEvent` interface as an argument.
     * ```html
     * <igx-snackbar (animationStarted) = "animationStarted($event)"></igx-snackbar>
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.animationStarted;
    /**
     * An event that will be emitted when the snackbar animation ends.
     * Provides reference to the `AnimationEvent` interface as an argument.
     * ```html
     * <igx-snackbar (animationDone) = "animationDone($event)"></igx-snackbar>
     * ```
     * @type {?}
     */
    IgxSnackbarComponent.prototype.animationDone;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxSnackbarComponent.prototype.timeoutId;
    /**
     * @type {?}
     * @private
     */
    IgxSnackbarComponent.prototype.zone;
}
/**
 * @hidden
 */
export class IgxSnackbarModule {
}
IgxSnackbarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxSnackbarComponent],
                exports: [IgxSnackbarComponent],
                imports: [CommonModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zbmFja2Jhci9zbmFja2Jhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLSCxVQUFVLEVBQ1YsT0FBTyxFQUNQLFlBQVksRUFDZixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFFaEYsT0FBTyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVmLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFzRzdCLFlBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFROzs7Ozs7Ozs7Ozs7UUF2RnpCLE9BQUUsR0FBRyxnQkFBZ0IsT0FBTyxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7UUFzQnhCLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7Ozs7O1FBWWxCLGFBQVEsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7Ozs7O1FBWWhCLGdCQUFXLEdBQUcsSUFBSSxDQUFDOzs7Ozs7OztRQWlCbEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUF3QixDQUFDOzs7Ozs7OztRQVNwRCxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQzs7Ozs7Ozs7UUFTdEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztJQU1oQyxDQUFDOzs7Ozs7OztJQVE5QixJQUFJO1FBQ1AsWUFBWSxDQUFDLElBQUksQ0FBQyxT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Qzs7Ozs7Ozs7Ozs7O0lBWWhDLDJDQUFtQzs7Ozs7Ozs7SUFRbkMsMENBQW9DOzs7Ozs7Ozs7SUFTcEMsd0NBQXFFOzs7Ozs7Ozs7SUFTckUsZ0RBQXVFOzs7Ozs7Ozs7SUFTdkUsNkNBQW9FOzs7Ozs7SUFJcEUseUNBQWtCOzs7OztJQUVOLG9DQUFvQjs7Ozs7QUFnRXBDLE1BQU0sT0FBTyxpQkFBaUI7OztZQUw3QixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGFuaW1hdGUsXG4gICAgQW5pbWF0aW9uRXZlbnQsXG4gICAgc3RhdGUsXG4gICAgc3R5bGUsXG4gICAgdHJhbnNpdGlvbixcbiAgICB0cmlnZ2VyLFxuICAgIHVzZUFuaW1hdGlvblxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgTmdab25lLFxuICAgIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCwgc2xpZGVJbkJvdHRvbSwgc2xpZGVPdXRCb3R0b20gfSBmcm9tICcuLi9hbmltYXRpb25zL21haW4nO1xuXG5sZXQgTkVYVF9JRCA9IDA7XG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIFNuYWNrYmFyKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL3NuYWNrYmFyLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBTbmFjayBCYXIgcHJvdmlkZXMgZmVlZGJhY2sgYWJvdXQgYW4gb3BlcmF0aW9uIHdpdGggYSBzaW5nbGUtbGluZSBtZXNzYWdlLCB3aGljaCBjYW5cbiAqIGluY2x1ZGUgYSBsaW5rIHRvIGFuIGFjdGlvbiBzdWNoIGFzIFVuZG8uXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gKGNsaWNrKT1cInNuYWNrYmFyLnNob3coKVwiPlNlbmQgbWVzc2FnZTwvYnV0dG9uPlxuICogPGRpdj5cbiAqICAgPGlneC1zbmFja2JhciAjc25hY2tiYXIgbWVzc2FnZT1cIk1lc3NhZ2Ugc2VudFwiPlxuICogICA8L2lneC1zbmFja2Jhcj5cbiAqIDwvZGl2PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignc2xpZGVJbk91dCcsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICAgICB1c2VBbmltYXRpb24oc2xpZGVJbkJvdHRvbSwge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAnLjM1cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVBvc2l0aW9uOiAndHJhbnNsYXRlWSgxMDAlKScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b1Bvc2l0aW9uOiAndHJhbnNsYXRlWSgwKSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICB1c2VBbmltYXRpb24oc2xpZGVPdXRCb3R0b20sIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogJy4ycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Qb3NpdGlvbjogJ3RyYW5zbGF0ZVkoMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9PcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Qb3NpdGlvbjogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ2ZhZGVJbk91dCcsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICAgICB1c2VBbmltYXRpb24oZmFkZUluLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246ICcuMzVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIHVzZUFuaW1hdGlvbihmYWRlT3V0LCB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246ICcuMnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIHNlbGVjdG9yOiAnaWd4LXNuYWNrYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NuYWNrYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgSWd4U25hY2tiYXJDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgaWRgIG9mIHRoZSBzbmFja2Jhci5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGlkYCBvZiB0aGUgZmlyc3Qgc25hY2tiYXIgY29tcG9uZW50ICB3aWxsIGJlIGBcImlneC1zbmFja2Jhci0wXCJgO1xuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNuYWNrYmFyIGlkID0gXCJTbmFja2JhcjFcIj48L2lneC1zbmFja2Jhcj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IHNuYWNrYmFySWQgPSB0aGlzLnNuYWNrYmFyLmlkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTbmFja2JhckNvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LXNuYWNrYmFyLSR7TkVYVF9JRCsrfWA7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgbWVzc2FnZWAgYXR0cmlidXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNuYWNrYmFyIFttZXNzYWdlXSA9IFwiJ1NuYWNrYmFyIENvbXBvbmVudCdcIj48L2lneC1zbmFja2Jhcj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IG1lc3NhZ2UgPSAgdGhpcy5zbmFja2Jhci5tZXNzYWdlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzL0Rpc2FibGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBzbmFja2Jhci5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGlzVmlzaWJsZWAgYXR0cmlidXRlIHdpbGwgaGF2ZSB2YWx1ZSBgZmFsc2VgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNuYWNrYmFyIFtpc1Zpc2libGVdID0gXCJ0cnVlXCI+PC9pZ3gtc25hY2tiYXI+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1Zpc2libGUgPSAgdGhpcy5zbmFja2Jhci5pc1Zpc2libGU7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGlzVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIGlmIHRoZSBzbmFja2JhciB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgaGlkZGVuIGFmdGVyIHRoZSBgZGlzcGxheVRpbWVgIGlzIG92ZXIuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc25hY2tiYXIgW2F1dG9IaWRlXSA9IFwiZmFsc2VcIj48L2lneC1zbmFja2Jhcj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGF1dG9IaWRlID0gIHRoaXMuc25hY2tiYXIuYXV0b0hpZGU7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGF1dG9IaWRlID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgZHVyYXRpb24gb2YgdGltZShpbiBtaWxsaXNlY29uZHMpIGluIHdoaWNoIHRoZSBzbmFja2JhciB3aWxsIGJlIHZpc2libGUgYWZ0ZXIgaXQgaXMgYmVpbmcgc2hvd24uXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyA0MDAwLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNuYWNrYmFyIFtkaXNwbGF5VGltZV0gPSBcIjIwMDBcIj48L2lneC1zbmFja2Jhcj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGRpc3BsYXlUaW1lID0gdGhpcy5zbmFja2Jhci5kaXNwbGF5VGltZTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzcGxheVRpbWUgPSA0MDAwO1xuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBgYWN0aW9uVGV4dGAgYXR0cmlidXRlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNuYWNrYmFyIFthY3Rpb25UZXh0XSA9IFwiJ0FjdGlvbiBUZXh0J1wiPjwvaWd4LXNuYWNrYmFyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhY3Rpb25UZXh0Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCB3aWxsIGJlIGVtaXR0ZWQgd2hlbiB0aGUgYWN0aW9uIGlzIGV4ZWN1dGVkLlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZSB0byB0aGUgYElneFNuYWNrYmFyQ29tcG9uZW50YCBhcyBhbiBhcmd1bWVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbmFja2JhciAob25BY3Rpb24pID0gXCJvbkFjdGlvbigkZXZlbnQpXCI+PC9pZ3gtc25hY2tiYXI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8SWd4U25hY2tiYXJDb21wb25lbnQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBldmVudCB0aGF0IHdpbGwgYmUgZW1pdHRlZCB3aGVuIHRoZSBzbmFja2JhciBhbmltYXRpb24gc3RhcnRzLlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZSB0byB0aGUgYEFuaW1hdGlvbkV2ZW50YCBpbnRlcmZhY2UgYXMgYW4gYXJndW1lbnQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtc25hY2tiYXIgKGFuaW1hdGlvblN0YXJ0ZWQpID0gXCJhbmltYXRpb25TdGFydGVkKCRldmVudClcIj48L2lneC1zbmFja2Jhcj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGFuaW1hdGlvblN0YXJ0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFuaW1hdGlvbkV2ZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCB3aWxsIGJlIGVtaXR0ZWQgd2hlbiB0aGUgc25hY2tiYXIgYW5pbWF0aW9uIGVuZHMuXG4gICAgICogUHJvdmlkZXMgcmVmZXJlbmNlIHRvIHRoZSBgQW5pbWF0aW9uRXZlbnRgIGludGVyZmFjZSBhcyBhbiBhcmd1bWVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zbmFja2JhciAoYW5pbWF0aW9uRG9uZSkgPSBcImFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiPjwvaWd4LXNuYWNrYmFyPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgYW5pbWF0aW9uRG9uZSA9IG5ldyBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uRXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSB0aW1lb3V0SWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyB0aGUgc25hY2tiYXIgYW5kIGhpZGVzIGl0IGFmdGVyIHRoZSBgZGlzcGxheVRpbWVgIGlzIG92ZXIgaWYgYGF1dG9IaWRlYCBpcyBzZXQgdG8gYHRydWVgLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnNuYWNrYmFyLnNob3coKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5hdXRvSGlkZSkge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuZGlzcGxheVRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZXMgdGhlIHNuYWNrYmFyLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnNuYWNrYmFyLmhpZGUoKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHRyaWdnZXJBY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25BY3Rpb24uZW1pdCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICogQG1lbWJlcm9mIElneFNuYWNrYmFyQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNuYWNrYmFyQW5pbWF0aW9uU3RhcnRlZChldnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChldnQuZnJvbVN0YXRlID09PSAndm9pZCcpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhcnRlZC5lbWl0KGV2dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICogQG1lbWJlcm9mIElneFNuYWNrYmFyQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIHNuYWNrYmFyQW5pbWF0aW9uRG9uZShldnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChldnQuZnJvbVN0YXRlID09PSAnc2hvdycpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRG9uZS5lbWl0KGV2dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneFNuYWNrYmFyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSWd4U25hY2tiYXJDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIElneFNuYWNrYmFyTW9kdWxlIHsgfVxuIl19