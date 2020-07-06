/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, ChangeDetectorRef, EventEmitter, HostBinding, Input, IterableDiffers, Output, QueryList, ElementRef } from '@angular/core';
import { IgxChipComponent } from './chip.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
/**
 * @record
 */
export function IBaseChipsAreaEventArgs() { }
if (false) {
    /** @type {?} */
    IBaseChipsAreaEventArgs.prototype.originalEvent;
    /** @type {?} */
    IBaseChipsAreaEventArgs.prototype.owner;
}
/**
 * @record
 */
export function IChipsAreaReorderEventArgs() { }
if (false) {
    /** @type {?} */
    IChipsAreaReorderEventArgs.prototype.chipsArray;
}
/**
 * @record
 */
export function IChipsAreaSelectEventArgs() { }
if (false) {
    /** @type {?} */
    IChipsAreaSelectEventArgs.prototype.newSelection;
}
var IgxChipsAreaComponent = /** @class */ (function () {
    function IgxChipsAreaComponent(cdr, element, _iterableDiffers) {
        this.cdr = cdr;
        this.element = element;
        this._iterableDiffers = _iterableDiffers;
        /**
         * @hidden
         */
        this.class = '';
        /**
         * Emits an event when `IgxChipComponent`s in the `IgxChipsAreaComponent` should be reordered.
         * Returns an array of `IgxChipComponent`s.
         * ```html
         * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onReorder)="changedOrder($event)"></igx-chips-area>
         * ```
         * ```typescript
         * public changedOrder(event: IChipsAreaReorderEventArgs){
         *      let chips: IgxChipComponent[] = event.chipsArray;
         * }
         * ```
         */
        this.onReorder = new EventEmitter();
        /**
         * Emits an event when an `IgxChipComponent` in the `IgxChipsAreaComponent` is selected/deselected.
         * Fired after the chips area is initialized if there are initially selected chips as well.
         * Returns an array of selected `IgxChipComponent`s and the `IgxChipAreaComponent`.
         * ```html
         * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onSelection)="selection($event)"></igx-chips-area>
         * ```
         * ```typescript
         * public selection(event: IChipsAreaSelectEventArgs){
         *      let selectedChips: IgxChipComponent[] = event.newSelection;
         * }
         */
        this.onSelection = new EventEmitter();
        /**
         * Emits an event when an `IgxChipComponent` in the `IgxChipsAreaComponent` is moved.
         * ```html
         * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onMoveStart)="moveStart($event)"></igx-chips-area>
         * ```
         * ```typescript
         * moveStart(event: IBaseChipsAreaEventArgs){
         *      let chipArea = event.owner;
         * }
         * ```
         */
        this.onMoveStart = new EventEmitter();
        /**
         * Emits an event after an `IgxChipComponent` in the `IgxChipsAreaComponent` is moved.
         * ```html
         * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onMoveEnd)="moveEnd($event)"></igx-chips-area>
         * ```
         * ```typescript
         * moveEnd(event: IBaseChipsAreaEventArgs){
         *      let chipArea = event.owner;
         * }
         * ```
         */
        this.onMoveEnd = new EventEmitter();
        this._differ = null;
        this.selectedChips = [];
        this.destroy$ = new Subject();
        this._differ = this._iterableDiffers.find([]).create(null);
    }
    Object.defineProperty(IgxChipsAreaComponent.prototype, "hostClass", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            /** @type {?} */
            var classes = ['igx-chip-area'];
            classes.push(this.class);
            return classes.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxChipsAreaComponent.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        // If we have initially selected chips through their inputs, we need to get them, because we cannot listen to their events yet.
        if (this.chipsList.length) {
            this.selectedChips = this.chipsList.filter(function (item) { return item.selected; });
            if (this.selectedChips.length) {
                this.onSelection.emit({
                    originalEvent: null,
                    newSelection: this.selectedChips,
                    owner: this
                });
            }
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxChipsAreaComponent.prototype.ngDoCheck = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.chipsList) {
            /** @type {?} */
            var changes = this._differ.diff(this.chipsList.toArray());
            if (changes) {
                changes.forEachAddedItem(function (addedChip) {
                    addedChip.item.onMoveStart.pipe(takeUntil(_this.destroy$)).subscribe(function (args) {
                        _this.onChipMoveStart(args);
                    });
                    addedChip.item.onMoveEnd.pipe(takeUntil(_this.destroy$)).subscribe(function (args) {
                        _this.onChipMoveEnd(args);
                    });
                    addedChip.item.onDragEnter.pipe(takeUntil(_this.destroy$)).subscribe(function (args) {
                        _this.onChipDragEnter(args);
                    });
                    addedChip.item.onKeyDown.pipe(takeUntil(_this.destroy$)).subscribe(function (args) {
                        _this.onChipKeyDown(args);
                    });
                    if (addedChip.item.selectable) {
                        addedChip.item.onSelection.pipe(takeUntil(_this.destroy$)).subscribe(function (args) {
                            _this.onChipSelectionChange(args);
                        });
                    }
                });
                this.modifiedChipsArray = this.chipsList.toArray();
            }
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxChipsAreaComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxChipsAreaComponent.prototype.onChipKeyDown = /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var orderChanged = false;
        /** @type {?} */
        var chipsArray = this.chipsList.toArray();
        /** @type {?} */
        var dragChipIndex = chipsArray.findIndex(function (el) { return el === event.owner; });
        if (event.originalEvent.shiftKey === true) {
            if (event.originalEvent.key === 'ArrowLeft' || event.originalEvent.key === 'Left') {
                orderChanged = this.positionChipAtIndex(dragChipIndex, dragChipIndex - 1, false, event.originalEvent);
                if (orderChanged) {
                    setTimeout(function () {
                        _this.chipsList.toArray()[dragChipIndex - 1].chipArea.nativeElement.focus();
                    });
                }
            }
            else if (event.originalEvent.key === 'ArrowRight' || event.originalEvent.key === 'Right') {
                orderChanged = this.positionChipAtIndex(dragChipIndex, dragChipIndex + 1, true, event.originalEvent);
            }
        }
        else {
            if ((event.originalEvent.key === 'ArrowLeft' || event.originalEvent.key === 'Left') && dragChipIndex > 0) {
                chipsArray[dragChipIndex - 1].chipArea.nativeElement.focus();
            }
            else if ((event.originalEvent.key === 'ArrowRight' || event.originalEvent.key === 'Right') &&
                dragChipIndex < chipsArray.length - 1) {
                chipsArray[dragChipIndex + 1].chipArea.nativeElement.focus();
            }
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxChipsAreaComponent.prototype.onChipMoveStart = /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onMoveStart.emit({
            originalEvent: event.originalEvent,
            owner: this
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxChipsAreaComponent.prototype.onChipMoveEnd = /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onMoveEnd.emit({
            originalEvent: event.originalEvent,
            owner: this
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxChipsAreaComponent.prototype.onChipDragEnter = /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dropChipRect = event.owner.elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var dropChipIndex = this.chipsList.toArray().findIndex(function (el) { return el === event.owner; });
        /** @type {?} */
        var dragChipIndex = this.chipsList.toArray().findIndex(function (el) { return el === event.dragChip; });
        if (dragChipIndex < dropChipIndex) {
            // from the left to right
            this.positionChipAtIndex(dragChipIndex, dropChipIndex, true, event.originalEvent);
        }
        else {
            // from the right to left
            this.positionChipAtIndex(dragChipIndex, dropChipIndex, false, event.originalEvent);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} chipIndex
     * @param {?} targetIndex
     * @param {?} shiftRestLeft
     * @param {?} originalEvent
     * @return {?}
     */
    IgxChipsAreaComponent.prototype.positionChipAtIndex = /**
     * @hidden
     * @protected
     * @param {?} chipIndex
     * @param {?} targetIndex
     * @param {?} shiftRestLeft
     * @param {?} originalEvent
     * @return {?}
     */
    function (chipIndex, targetIndex, shiftRestLeft, originalEvent) {
        if (chipIndex < 0 || this.chipsList.length <= chipIndex ||
            targetIndex < 0 || this.chipsList.length <= targetIndex) {
            return false;
        }
        /** @type {?} */
        var chipsArray = this.chipsList.toArray();
        /** @type {?} */
        var result = [];
        for (var i = 0; i < chipsArray.length; i++) {
            if (shiftRestLeft) {
                if (chipIndex <= i && i < targetIndex) {
                    result.push(chipsArray[i + 1]);
                }
                else if (i === targetIndex) {
                    result.push(chipsArray[chipIndex]);
                }
                else {
                    result.push(chipsArray[i]);
                }
            }
            else {
                if (targetIndex < i && i <= chipIndex) {
                    result.push(chipsArray[i - 1]);
                }
                else if (i === targetIndex) {
                    result.push(chipsArray[chipIndex]);
                }
                else {
                    result.push(chipsArray[i]);
                }
            }
        }
        this.modifiedChipsArray = result;
        /** @type {?} */
        var eventData = {
            chipsArray: this.modifiedChipsArray,
            originalEvent: originalEvent,
            owner: this
        };
        this.onReorder.emit(eventData);
        return true;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxChipsAreaComponent.prototype.onChipSelectionChange = /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.selected) {
            this.selectedChips.push(event.owner);
        }
        else if (!event.selected) {
            this.selectedChips = this.selectedChips.filter(function (chip) {
                return chip.id !== event.owner.id;
            });
        }
        this.onSelection.emit({
            originalEvent: event.originalEvent,
            newSelection: this.selectedChips,
            owner: this
        });
    };
    IgxChipsAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-chips-area',
                    template: "<ng-content></ng-content>\n"
                }] }
    ];
    /** @nocollapse */
    IgxChipsAreaComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: IterableDiffers }
    ]; };
    IgxChipsAreaComponent.propDecorators = {
        class: [{ type: Input }],
        hostClass: [{ type: HostBinding, args: ['attr.class',] }],
        width: [{ type: HostBinding, args: ['style.width.px',] }, { type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        onReorder: [{ type: Output }],
        onSelection: [{ type: Output }],
        onMoveStart: [{ type: Output }],
        onMoveEnd: [{ type: Output }],
        chipsList: [{ type: ContentChildren, args: [IgxChipComponent,] }]
    };
    return IgxChipsAreaComponent;
}());
export { IgxChipsAreaComponent };
if (false) {
    /**
     * @hidden
     * @type {?}
     */
    IgxChipsAreaComponent.prototype.class;
    /**
     * An \@Input property that sets the width of the `IgxChipsAreaComponent`.
     * ```html
     * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onReorder)="chipsOrderChanged($event)"></igx-chips-area>
     * ```
     * @type {?}
     */
    IgxChipsAreaComponent.prototype.width;
    /**
     * An \@Input property that sets the height of the `IgxChipsAreaComponent`.
     * ```html
     * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onReorder)="chipsOrderChanged($event)"></igx-chips-area>
     * ```
     * @type {?}
     */
    IgxChipsAreaComponent.prototype.height;
    /**
     * Emits an event when `IgxChipComponent`s in the `IgxChipsAreaComponent` should be reordered.
     * Returns an array of `IgxChipComponent`s.
     * ```html
     * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onReorder)="changedOrder($event)"></igx-chips-area>
     * ```
     * ```typescript
     * public changedOrder(event: IChipsAreaReorderEventArgs){
     *      let chips: IgxChipComponent[] = event.chipsArray;
     * }
     * ```
     * @type {?}
     */
    IgxChipsAreaComponent.prototype.onReorder;
    /**
     * Emits an event when an `IgxChipComponent` in the `IgxChipsAreaComponent` is selected/deselected.
     * Fired after the chips area is initialized if there are initially selected chips as well.
     * Returns an array of selected `IgxChipComponent`s and the `IgxChipAreaComponent`.
     * ```html
     * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onSelection)="selection($event)"></igx-chips-area>
     * ```
     * ```typescript
     * public selection(event: IChipsAreaSelectEventArgs){
     *      let selectedChips: IgxChipComponent[] = event.newSelection;
     * }
     * @type {?}
     */
    IgxChipsAreaComponent.prototype.onSelection;
    /**
     * Emits an event when an `IgxChipComponent` in the `IgxChipsAreaComponent` is moved.
     * ```html
     * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onMoveStart)="moveStart($event)"></igx-chips-area>
     * ```
     * ```typescript
     * moveStart(event: IBaseChipsAreaEventArgs){
     *      let chipArea = event.owner;
     * }
     * ```
     * @type {?}
     */
    IgxChipsAreaComponent.prototype.onMoveStart;
    /**
     * Emits an event after an `IgxChipComponent` in the `IgxChipsAreaComponent` is moved.
     * ```html
     * <igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onMoveEnd)="moveEnd($event)"></igx-chips-area>
     * ```
     * ```typescript
     * moveEnd(event: IBaseChipsAreaEventArgs){
     *      let chipArea = event.owner;
     * }
     * ```
     * @type {?}
     */
    IgxChipsAreaComponent.prototype.onMoveEnd;
    /**
     * Holds the `IgxChipComponent` in the `IgxChipsAreaComponent`.
     * ```typescript
     * ngAfterViewInit(){
     *    let chips = this.chipsArea.chipsList;
     * }
     * ```
     * @type {?}
     */
    IgxChipsAreaComponent.prototype.chipsList;
    /**
     * @type {?}
     * @private
     */
    IgxChipsAreaComponent.prototype.modifiedChipsArray;
    /**
     * @type {?}
     * @private
     */
    IgxChipsAreaComponent.prototype._differ;
    /**
     * @type {?}
     * @private
     */
    IgxChipsAreaComponent.prototype.selectedChips;
    /**
     * @type {?}
     * @protected
     */
    IgxChipsAreaComponent.prototype.destroy$;
    /** @type {?} */
    IgxChipsAreaComponent.prototype.cdr;
    /** @type {?} */
    IgxChipsAreaComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    IgxChipsAreaComponent.prototype._iterableDiffers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NoaXBzL2NoaXBzLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULGVBQWUsRUFDZixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsZUFBZSxFQUNmLE1BQU0sRUFDTixTQUFTLEVBSVQsVUFBVSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDSCxnQkFBZ0IsRUFLbkIsTUFBTSxrQkFBa0IsQ0FBQztBQUkxQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRWhELDZDQUdDOzs7SUFGRyxnREFBOEY7O0lBQzlGLHdDQUE2Qjs7Ozs7QUFHakMsZ0RBRUM7OztJQURHLGdEQUErQjs7Ozs7QUFHbkMsK0NBRUM7OztJQURHLGlEQUFpQzs7QUFHckM7SUFxSEksK0JBQW1CLEdBQXNCLEVBQVMsT0FBbUIsRUFDekQsZ0JBQWlDO1FBRDFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUN6RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCOzs7O1FBNUd0QyxVQUFLLEdBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O1FBOENYLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7OztRQWUzRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7UUFjNUQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7O1FBYzFELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQWN2RCxZQUFPLEdB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TCxNQUFNOzhCQWVOLE1BQU07OEJBY04sTUFBTTs0QkFjTixNQUFNOzRCQVdOLGVBQWUsU0FBQyxnQkFBZ0I7O0lBK0xyQyw0QkFBQztDQUFBLEFBNVNELElBNFNDO1NBeFNZLHFCQUFxQjs7Ozs7O0lBSzlCLHNDQUNrQjs7Ozs7Ozs7SUFtQmxCLHNDQUVxQjs7Ozs7Ozs7SUFRckIsdUNBRXNCOzs7Ozs7Ozs7Ozs7OztJQWN0QiwwQ0FDa0U7Ozs7Ozs7Ozs7Ozs7O0lBY2xFLDRDQUNtRTs7Ozs7Ozs7Ozs7OztJQWFuRSw0Q0FDaUU7Ozs7Ozs7Ozs7Ozs7SUFhakUsMENBQytEOzs7Ozs7Ozs7O0lBVS9ELDBDQUM4Qzs7Ozs7SUFFOUMsbURBQStDOzs7OztJQUMvQyx3Q0FBZ0U7Ozs7O0lBQ2hFLDhDQUErQzs7Ozs7SUFDL0MseUNBQTRDOztJQUVoQyxvQ0FBNkI7O0lBQUUsd0NBQTBCOzs7OztJQUNqRSxpREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIEl0ZXJhYmxlRGlmZmVyLFxuICAgIEl0ZXJhYmxlRGlmZmVycyxcbiAgICBPdXRwdXQsXG4gICAgUXVlcnlMaXN0LFxuICAgIERvQ2hlY2ssXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgSWd4Q2hpcENvbXBvbmVudCxcbiAgICBJQ2hpcFNlbGVjdEV2ZW50QXJncyxcbiAgICBJQ2hpcEtleURvd25FdmVudEFyZ3MsXG4gICAgSUNoaXBFbnRlckRyYWdBcmVhRXZlbnRBcmdzLFxuICAgIElCYXNlQ2hpcEV2ZW50QXJnc1xufSBmcm9tICcuL2NoaXAuY29tcG9uZW50JztcbmltcG9ydCB7XG4gICAgSWd4RHJvcEVudGVyRXZlbnRBcmdzXG59IGZyb20gJy4uL2RpcmVjdGl2ZXMvZHJhZ2Ryb3AvZHJhZ2Ryb3AuZGlyZWN0aXZlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL2ludGVybmFsL1N1YmplY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElCYXNlQ2hpcHNBcmVhRXZlbnRBcmdzIHtcbiAgICBvcmlnaW5hbEV2ZW50OiBQb2ludGVyRXZlbnQgfCBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCB8IEtleWJvYXJkRXZlbnQgfCBJZ3hEcm9wRW50ZXJFdmVudEFyZ3M7XG4gICAgb3duZXI6IElneENoaXBzQXJlYUNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hpcHNBcmVhUmVvcmRlckV2ZW50QXJncyBleHRlbmRzIElCYXNlQ2hpcHNBcmVhRXZlbnRBcmdzIHtcbiAgICBjaGlwc0FycmF5OiBJZ3hDaGlwQ29tcG9uZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoaXBzQXJlYVNlbGVjdEV2ZW50QXJncyBleHRlbmRzIElCYXNlQ2hpcHNBcmVhRXZlbnRBcmdzIHtcbiAgICBuZXdTZWxlY3Rpb246IElneENoaXBDb21wb25lbnRbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtY2hpcHMtYXJlYScsXG4gICAgdGVtcGxhdGVVcmw6ICdjaGlwcy1hcmVhLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSWd4Q2hpcHNBcmVhQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjaywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjbGFzcyA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5jbGFzcycpXG4gICAgZ2V0IGhvc3RDbGFzcygpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsnaWd4LWNoaXAtYXJlYSddO1xuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jbGFzcyk7XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHdpZHRoIG9mIHRoZSBgSWd4Q2hpcHNBcmVhQ29tcG9uZW50YC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwcy1hcmVhICNjaGlwc0FyZWEgW3dpZHRoXT1cIiczMDAnXCIgW2hlaWdodF09XCInMTAnXCIgKG9uUmVvcmRlcik9XCJjaGlwc09yZGVyQ2hhbmdlZCgkZXZlbnQpXCI+PC9pZ3gtY2hpcHMtYXJlYT5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBgSWd4Q2hpcHNBcmVhQ29tcG9uZW50YC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwcy1hcmVhICNjaGlwc0FyZWEgW3dpZHRoXT1cIiczMDAnXCIgW2hlaWdodF09XCInMTAnXCIgKG9uUmVvcmRlcik9XCJjaGlwc09yZGVyQ2hhbmdlZCgkZXZlbnQpXCI+PC9pZ3gtY2hpcHMtYXJlYT5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIGBJZ3hDaGlwQ29tcG9uZW50YHMgaW4gdGhlIGBJZ3hDaGlwc0FyZWFDb21wb25lbnRgIHNob3VsZCBiZSByZW9yZGVyZWQuXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBgSWd4Q2hpcENvbXBvbmVudGBzLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXBzLWFyZWEgI2NoaXBzQXJlYSBbd2lkdGhdPVwiJzMwMCdcIiBbaGVpZ2h0XT1cIicxMCdcIiAob25SZW9yZGVyKT1cImNoYW5nZWRPcmRlcigkZXZlbnQpXCI+PC9pZ3gtY2hpcHMtYXJlYT5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIGNoYW5nZWRPcmRlcihldmVudDogSUNoaXBzQXJlYVJlb3JkZXJFdmVudEFyZ3Mpe1xuICAgICAqICAgICAgbGV0IGNoaXBzOiBJZ3hDaGlwQ29tcG9uZW50W10gPSBldmVudC5jaGlwc0FycmF5O1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25SZW9yZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxJQ2hpcHNBcmVhUmVvcmRlckV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gYW4gYElneENoaXBDb21wb25lbnRgIGluIHRoZSBgSWd4Q2hpcHNBcmVhQ29tcG9uZW50YCBpcyBzZWxlY3RlZC9kZXNlbGVjdGVkLlxuICAgICAqIEZpcmVkIGFmdGVyIHRoZSBjaGlwcyBhcmVhIGlzIGluaXRpYWxpemVkIGlmIHRoZXJlIGFyZSBpbml0aWFsbHkgc2VsZWN0ZWQgY2hpcHMgYXMgd2VsbC5cbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHNlbGVjdGVkIGBJZ3hDaGlwQ29tcG9uZW50YHMgYW5kIHRoZSBgSWd4Q2hpcEFyZWFDb21wb25lbnRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXBzLWFyZWEgI2NoaXBzQXJlYSBbd2lkdGhdPVwiJzMwMCdcIiBbaGVpZ2h0XT1cIicxMCdcIiAob25TZWxlY3Rpb24pPVwic2VsZWN0aW9uKCRldmVudClcIj48L2lneC1jaGlwcy1hcmVhPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgc2VsZWN0aW9uKGV2ZW50OiBJQ2hpcHNBcmVhU2VsZWN0RXZlbnRBcmdzKXtcbiAgICAgKiAgICAgIGxldCBzZWxlY3RlZENoaXBzOiBJZ3hDaGlwQ29tcG9uZW50W10gPSBldmVudC5uZXdTZWxlY3Rpb247XG4gICAgICogfVxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8SUNoaXBzQXJlYVNlbGVjdEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gYW4gYElneENoaXBDb21wb25lbnRgIGluIHRoZSBgSWd4Q2hpcHNBcmVhQ29tcG9uZW50YCBpcyBtb3ZlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwcy1hcmVhICNjaGlwc0FyZWEgW3dpZHRoXT1cIiczMDAnXCIgW2hlaWdodF09XCInMTAnXCIgKG9uTW92ZVN0YXJ0KT1cIm1vdmVTdGFydCgkZXZlbnQpXCI+PC9pZ3gtY2hpcHMtYXJlYT5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbW92ZVN0YXJ0KGV2ZW50OiBJQmFzZUNoaXBzQXJlYUV2ZW50QXJncyl7XG4gICAgICogICAgICBsZXQgY2hpcEFyZWEgPSBldmVudC5vd25lcjtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uTW92ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJQmFzZUNoaXBzQXJlYUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IGFmdGVyIGFuIGBJZ3hDaGlwQ29tcG9uZW50YCBpbiB0aGUgYElneENoaXBzQXJlYUNvbXBvbmVudGAgaXMgbW92ZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcHMtYXJlYSAjY2hpcHNBcmVhIFt3aWR0aF09XCInMzAwJ1wiIFtoZWlnaHRdPVwiJzEwJ1wiIChvbk1vdmVFbmQpPVwibW92ZUVuZCgkZXZlbnQpXCI+PC9pZ3gtY2hpcHMtYXJlYT5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbW92ZUVuZChldmVudDogSUJhc2VDaGlwc0FyZWFFdmVudEFyZ3Mpe1xuICAgICAqICAgICAgbGV0IGNoaXBBcmVhID0gZXZlbnQub3duZXI7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbk1vdmVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPElCYXNlQ2hpcHNBcmVhRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogSG9sZHMgdGhlIGBJZ3hDaGlwQ29tcG9uZW50YCBpbiB0aGUgYElneENoaXBzQXJlYUNvbXBvbmVudGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIGxldCBjaGlwcyA9IHRoaXMuY2hpcHNBcmVhLmNoaXBzTGlzdDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihJZ3hDaGlwQ29tcG9uZW50KVxuICAgIHB1YmxpYyBjaGlwc0xpc3Q6IFF1ZXJ5TGlzdDxJZ3hDaGlwQ29tcG9uZW50PjtcblxuICAgIHByaXZhdGUgbW9kaWZpZWRDaGlwc0FycmF5OiBJZ3hDaGlwQ29tcG9uZW50W107XG4gICAgcHJpdmF0ZSBfZGlmZmVyOiBJdGVyYWJsZURpZmZlcjxJZ3hDaGlwQ29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgc2VsZWN0ZWRDaGlwczogSWd4Q2hpcENvbXBvbmVudFtdID0gW107XG4gICAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpIHtcbiAgICAgICAgdGhpcy5fZGlmZmVyID0gdGhpcy5faXRlcmFibGVEaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBpbml0aWFsbHkgc2VsZWN0ZWQgY2hpcHMgdGhyb3VnaCB0aGVpciBpbnB1dHMsIHdlIG5lZWQgdG8gZ2V0IHRoZW0sIGJlY2F1c2Ugd2UgY2Fubm90IGxpc3RlbiB0byB0aGVpciBldmVudHMgeWV0LlxuICAgICAgICBpZiAodGhpcy5jaGlwc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hpcHMgPSB0aGlzLmNoaXBzTGlzdC5maWx0ZXIoKGl0ZW06IElneENoaXBDb21wb25lbnQpID0+IGl0ZW0uc2VsZWN0ZWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBuZXdTZWxlY3Rpb246IHRoaXMuc2VsZWN0ZWRDaGlwcyxcbiAgICAgICAgICAgICAgICAgICAgb3duZXI6IHRoaXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jaGlwc0xpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLl9kaWZmZXIuZGlmZih0aGlzLmNoaXBzTGlzdC50b0FycmF5KCkpO1xuICAgICAgICAgICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLmZvckVhY2hBZGRlZEl0ZW0oKGFkZGVkQ2hpcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhZGRlZENoaXAuaXRlbS5vbk1vdmVTdGFydC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hpcE1vdmVTdGFydChhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkQ2hpcC5pdGVtLm9uTW92ZUVuZC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hpcE1vdmVFbmQoYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBhZGRlZENoaXAuaXRlbS5vbkRyYWdFbnRlci5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hpcERyYWdFbnRlcihhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkQ2hpcC5pdGVtLm9uS2V5RG93bi5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hpcEtleURvd24oYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkZWRDaGlwLml0ZW0uc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkZWRDaGlwLml0ZW0ub25TZWxlY3Rpb24ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGlwU2VsZWN0aW9uQ2hhbmdlKGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGlmaWVkQ2hpcHNBcnJheSA9IHRoaXMuY2hpcHNMaXN0LnRvQXJyYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkNoaXBLZXlEb3duKGV2ZW50OiBJQ2hpcEtleURvd25FdmVudEFyZ3MpIHtcbiAgICAgICAgbGV0IG9yZGVyQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjaGlwc0FycmF5ID0gdGhpcy5jaGlwc0xpc3QudG9BcnJheSgpO1xuICAgICAgICBjb25zdCBkcmFnQ2hpcEluZGV4ID0gY2hpcHNBcnJheS5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gZXZlbnQub3duZXIpO1xuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudC5zaGlmdEtleSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5vcmlnaW5hbEV2ZW50LmtleSA9PT0gJ0xlZnQnKSB7XG4gICAgICAgICAgICAgICAgb3JkZXJDaGFuZ2VkID0gdGhpcy5wb3NpdGlvbkNoaXBBdEluZGV4KGRyYWdDaGlwSW5kZXgsIGRyYWdDaGlwSW5kZXggLSAxLCBmYWxzZSwgZXZlbnQub3JpZ2luYWxFdmVudCk7XG4gICAgICAgICAgICAgICAgaWYgKG9yZGVyQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpcHNMaXN0LnRvQXJyYXkoKVtkcmFnQ2hpcEluZGV4IC0gMV0uY2hpcEFyZWEubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcgfHwgZXZlbnQub3JpZ2luYWxFdmVudC5rZXkgPT09ICdSaWdodCcpIHtcbiAgICAgICAgICAgICAgICBvcmRlckNoYW5nZWQgPSB0aGlzLnBvc2l0aW9uQ2hpcEF0SW5kZXgoZHJhZ0NoaXBJbmRleCwgZHJhZ0NoaXBJbmRleCArIDEsIHRydWUsIGV2ZW50Lm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKChldmVudC5vcmlnaW5hbEV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcgfHwgZXZlbnQub3JpZ2luYWxFdmVudC5rZXkgPT09ICdMZWZ0JykgJiYgZHJhZ0NoaXBJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBjaGlwc0FycmF5W2RyYWdDaGlwSW5kZXggLSAxXS5jaGlwQXJlYS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChldmVudC5vcmlnaW5hbEV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQua2V5ID09PSAnUmlnaHQnKSAmJlxuICAgICAgICAgICAgICAgIGRyYWdDaGlwSW5kZXggPCBjaGlwc0FycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjaGlwc0FycmF5W2RyYWdDaGlwSW5kZXggKyAxXS5jaGlwQXJlYS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uQ2hpcE1vdmVTdGFydChldmVudDogSUJhc2VDaGlwRXZlbnRBcmdzKSB7XG4gICAgICAgIHRoaXMub25Nb3ZlU3RhcnQuZW1pdCh7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgICAgb3duZXI6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkNoaXBNb3ZlRW5kKGV2ZW50OiBJQmFzZUNoaXBFdmVudEFyZ3MpIHtcbiAgICAgICAgdGhpcy5vbk1vdmVFbmQuZW1pdCh7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgICAgb3duZXI6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkNoaXBEcmFnRW50ZXIoZXZlbnQ6IElDaGlwRW50ZXJEcmFnQXJlYUV2ZW50QXJncykge1xuICAgICAgICBjb25zdCBkcm9wQ2hpcFJlY3QgPSBldmVudC5vd25lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGRyb3BDaGlwSW5kZXggPSB0aGlzLmNoaXBzTGlzdC50b0FycmF5KCkuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IGV2ZW50Lm93bmVyKTtcbiAgICAgICAgY29uc3QgZHJhZ0NoaXBJbmRleCA9IHRoaXMuY2hpcHNMaXN0LnRvQXJyYXkoKS5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gZXZlbnQuZHJhZ0NoaXApO1xuICAgICAgICBpZiAoZHJhZ0NoaXBJbmRleCA8IGRyb3BDaGlwSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGZyb20gdGhlIGxlZnQgdG8gcmlnaHRcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25DaGlwQXRJbmRleChkcmFnQ2hpcEluZGV4LCBkcm9wQ2hpcEluZGV4LCB0cnVlLCBldmVudC5vcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZyb20gdGhlIHJpZ2h0IHRvIGxlZnRcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25DaGlwQXRJbmRleChkcmFnQ2hpcEluZGV4LCBkcm9wQ2hpcEluZGV4LCBmYWxzZSwgZXZlbnQub3JpZ2luYWxFdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uQ2hpcEF0SW5kZXgoY2hpcEluZGV4LCB0YXJnZXRJbmRleCwgc2hpZnRSZXN0TGVmdCwgb3JpZ2luYWxFdmVudCkge1xuICAgICAgICBpZiAoY2hpcEluZGV4IDwgMCB8fCB0aGlzLmNoaXBzTGlzdC5sZW5ndGggPD0gY2hpcEluZGV4IHx8XG4gICAgICAgICAgICB0YXJnZXRJbmRleCA8IDAgfHwgdGhpcy5jaGlwc0xpc3QubGVuZ3RoIDw9IHRhcmdldEluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGlwc0FycmF5ID0gdGhpcy5jaGlwc0xpc3QudG9BcnJheSgpO1xuICAgICAgICBjb25zdCByZXN1bHQ6IElneENoaXBDb21wb25lbnRbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaXBzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlmdFJlc3RMZWZ0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaXBJbmRleCA8PSBpICYmIGkgPCB0YXJnZXRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlwc0FycmF5W2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSB0YXJnZXRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlwc0FycmF5W2NoaXBJbmRleF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaXBzQXJyYXlbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgaSAmJiBpIDw9IGNoaXBJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlwc0FycmF5W2kgLSAxXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSB0YXJnZXRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlwc0FycmF5W2NoaXBJbmRleF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaXBzQXJyYXlbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGlmaWVkQ2hpcHNBcnJheSA9IHJlc3VsdDtcblxuICAgICAgICBjb25zdCBldmVudERhdGE6IElDaGlwc0FyZWFSZW9yZGVyRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgY2hpcHNBcnJheTogdGhpcy5tb2RpZmllZENoaXBzQXJyYXksXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgICAgICAgICAgb3duZXI6IHRoaXNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vblJlb3JkZXIuZW1pdChldmVudERhdGEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uQ2hpcFNlbGVjdGlvbkNoYW5nZShldmVudDogSUNoaXBTZWxlY3RFdmVudEFyZ3MpIHtcbiAgICAgICAgaWYgKGV2ZW50LnNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hpcHMucHVzaChldmVudC5vd25lcik7XG4gICAgICAgIH0gZWxzZSBpZiAoIWV2ZW50LnNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hpcHMgPSB0aGlzLnNlbGVjdGVkQ2hpcHMuZmlsdGVyKChjaGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaXAuaWQgIT09IGV2ZW50Lm93bmVyLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblNlbGVjdGlvbi5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb246IHRoaXMuc2VsZWN0ZWRDaGlwcyxcbiAgICAgICAgICAgIG93bmVyOiB0aGlzXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==