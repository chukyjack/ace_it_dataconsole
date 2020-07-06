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
export class IgxChipsAreaComponent {
    /**
     * @param {?} cdr
     * @param {?} element
     * @param {?} _iterableDiffers
     */
    constructor(cdr, element, _iterableDiffers) {
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
    /**
     * @hidden
     * @return {?}
     */
    get hostClass() {
        /** @type {?} */
        const classes = ['igx-chip-area'];
        classes.push(this.class);
        return classes.join(' ');
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        // If we have initially selected chips through their inputs, we need to get them, because we cannot listen to their events yet.
        if (this.chipsList.length) {
            this.selectedChips = this.chipsList.filter((item) => item.selected);
            if (this.selectedChips.length) {
                this.onSelection.emit({
                    originalEvent: null,
                    newSelection: this.selectedChips,
                    owner: this
                });
            }
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngDoCheck() {
        if (this.chipsList) {
            /** @type {?} */
            const changes = this._differ.diff(this.chipsList.toArray());
            if (changes) {
                changes.forEachAddedItem((addedChip) => {
                    addedChip.item.onMoveStart.pipe(takeUntil(this.destroy$)).subscribe((args) => {
                        this.onChipMoveStart(args);
                    });
                    addedChip.item.onMoveEnd.pipe(takeUntil(this.destroy$)).subscribe((args) => {
                        this.onChipMoveEnd(args);
                    });
                    addedChip.item.onDragEnter.pipe(takeUntil(this.destroy$)).subscribe((args) => {
                        this.onChipDragEnter(args);
                    });
                    addedChip.item.onKeyDown.pipe(takeUntil(this.destroy$)).subscribe((args) => {
                        this.onChipKeyDown(args);
                    });
                    if (addedChip.item.selectable) {
                        addedChip.item.onSelection.pipe(takeUntil(this.destroy$)).subscribe((args) => {
                            this.onChipSelectionChange(args);
                        });
                    }
                });
                this.modifiedChipsArray = this.chipsList.toArray();
            }
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    onChipKeyDown(event) {
        /** @type {?} */
        let orderChanged = false;
        /** @type {?} */
        const chipsArray = this.chipsList.toArray();
        /** @type {?} */
        const dragChipIndex = chipsArray.findIndex((el) => el === event.owner);
        if (event.originalEvent.shiftKey === true) {
            if (event.originalEvent.key === 'ArrowLeft' || event.originalEvent.key === 'Left') {
                orderChanged = this.positionChipAtIndex(dragChipIndex, dragChipIndex - 1, false, event.originalEvent);
                if (orderChanged) {
                    setTimeout(() => {
                        this.chipsList.toArray()[dragChipIndex - 1].chipArea.nativeElement.focus();
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
    }
    /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    onChipMoveStart(event) {
        this.onMoveStart.emit({
            originalEvent: event.originalEvent,
            owner: this
        });
    }
    /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    onChipMoveEnd(event) {
        this.onMoveEnd.emit({
            originalEvent: event.originalEvent,
            owner: this
        });
    }
    /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    onChipDragEnter(event) {
        /** @type {?} */
        const dropChipRect = event.owner.elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const dropChipIndex = this.chipsList.toArray().findIndex((el) => el === event.owner);
        /** @type {?} */
        const dragChipIndex = this.chipsList.toArray().findIndex((el) => el === event.dragChip);
        if (dragChipIndex < dropChipIndex) {
            // from the left to right
            this.positionChipAtIndex(dragChipIndex, dropChipIndex, true, event.originalEvent);
        }
        else {
            // from the right to left
            this.positionChipAtIndex(dragChipIndex, dropChipIndex, false, event.originalEvent);
        }
    }
    /**
     * @hidden
     * @protected
     * @param {?} chipIndex
     * @param {?} targetIndex
     * @param {?} shiftRestLeft
     * @param {?} originalEvent
     * @return {?}
     */
    positionChipAtIndex(chipIndex, targetIndex, shiftRestLeft, originalEvent) {
        if (chipIndex < 0 || this.chipsList.length <= chipIndex ||
            targetIndex < 0 || this.chipsList.length <= targetIndex) {
            return false;
        }
        /** @type {?} */
        const chipsArray = this.chipsList.toArray();
        /** @type {?} */
        const result = [];
        for (let i = 0; i < chipsArray.length; i++) {
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
        const eventData = {
            chipsArray: this.modifiedChipsArray,
            originalEvent: originalEvent,
            owner: this
        };
        this.onReorder.emit(eventData);
        return true;
    }
    /**
     * @hidden
     * @protected
     * @param {?} event
     * @return {?}
     */
    onChipSelectionChange(event) {
        if (event.selected) {
            this.selectedChips.push(event.owner);
        }
        else if (!event.selected) {
            this.selectedChips = this.selectedChips.filter((chip) => {
                return chip.id !== event.owner.id;
            });
        }
        this.onSelection.emit({
            originalEvent: event.originalEvent,
            newSelection: this.selectedChips,
            owner: this
        });
    }
}
IgxChipsAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-chips-area',
                template: "<ng-content></ng-content>\n"
            }] }
];
/** @nocollapse */
IgxChipsAreaComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: IterableDiffers }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NoaXBzL2NoaXBzLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULGVBQWUsRUFDZixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsZUFBZSxFQUNmLE1BQU0sRUFDTixTQUFTLEVBSVQsVUFBVSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDSCxnQkFBZ0IsRUFLbkIsTUFBTSxrQkFBa0IsQ0FBQztBQUkxQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRWhELDZDQUdDOzs7SUFGRyxnREFBOEY7O0lBQzlGLHdDQUE2Qjs7Ozs7QUFHakMsZ0RBRUM7OztJQURHLGdEQUErQjs7Ozs7QUFHbkMsK0NBRUM7OztJQURHLGlEQUFpQzs7QUFPckMsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBaUg5QixZQUFtQixHQUFzQixFQUFTLE9BQW1CLEVBQ3pELGdCQUFpQztRQUQxQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDekQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjs7OztRQTVHdEMsVUFBSyxHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztRQThDWCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7UUFlM0QsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7O1FBYzVELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7Ozs7Ozs7Ozs7OztRQWMxRCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFjdkQsWUFBTyxHQUE0QyxJQUFJLENBQUM7UUFDeEQsa0JBQWEsR0FBdUIsRUFBRSxDQUFDO1FBQ3JDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBSXhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUF6R0QsSUFDSSxTQUFTOztjQUNILE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUF3R00sZUFBZTtRQUNsQiwrSEFBK0g7UUFDL0gsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RGLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO29CQUNsQixhQUFhLEVBQUUsSUFBSTtvQkFDbkIsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhO29CQUNoQyxLQUFLLEVBQUUsSUFBSTtpQkFDZCxDQUFDLENBQUM7YUFDTjtTQUNKO0lBQ0wsQ0FBQzs7Ozs7SUFLTSxTQUFTO1FBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztrQkFDVixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzRCxJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtvQkFDbkMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDekUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0IsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDdkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDekUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0IsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDdkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDM0IsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVB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O0lBYW5FLDRDQUNpRTs7Ozs7Ozs7Ozs7OztJQWFqRSwwQ0FDK0Q7Ozs7Ozs7Ozs7SUFVL0QsMENBQzhDOzs7OztJQUU5QyxtREFBK0M7Ozs7O0lBQy9DLHdDQUFnRTs7Ozs7SUFDaEUsOENBQStDOzs7OztJQUMvQyx5Q0FBNEM7O0lBRWhDLG9DQUE2Qjs7SUFBRSx3Q0FBMEI7Ozs7O0lBQ2pFLGlEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgSXRlcmFibGVEaWZmZXIsXG4gICAgSXRlcmFibGVEaWZmZXJzLFxuICAgIE91dHB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgRG9DaGVjayxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIE9uRGVzdHJveSxcbiAgICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBJZ3hDaGlwQ29tcG9uZW50LFxuICAgIElDaGlwU2VsZWN0RXZlbnRBcmdzLFxuICAgIElDaGlwS2V5RG93bkV2ZW50QXJncyxcbiAgICBJQ2hpcEVudGVyRHJhZ0FyZWFFdmVudEFyZ3MsXG4gICAgSUJhc2VDaGlwRXZlbnRBcmdzXG59IGZyb20gJy4vY2hpcC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgICBJZ3hEcm9wRW50ZXJFdmVudEFyZ3Ncbn0gZnJvbSAnLi4vZGlyZWN0aXZlcy9kcmFnZHJvcC9kcmFnZHJvcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvU3ViamVjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2VDaGlwc0FyZWFFdmVudEFyZ3Mge1xuICAgIG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB8IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50IHwgS2V5Ym9hcmRFdmVudCB8IElneERyb3BFbnRlckV2ZW50QXJncztcbiAgICBvd25lcjogSWd4Q2hpcHNBcmVhQ29tcG9uZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDaGlwc0FyZWFSZW9yZGVyRXZlbnRBcmdzIGV4dGVuZHMgSUJhc2VDaGlwc0FyZWFFdmVudEFyZ3Mge1xuICAgIGNoaXBzQXJyYXk6IElneENoaXBDb21wb25lbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hpcHNBcmVhU2VsZWN0RXZlbnRBcmdzIGV4dGVuZHMgSUJhc2VDaGlwc0FyZWFFdmVudEFyZ3Mge1xuICAgIG5ld1NlbGVjdGlvbjogSWd4Q2hpcENvbXBvbmVudFtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1jaGlwcy1hcmVhJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWFyZWEuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJZ3hDaGlwc0FyZWFDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNsYXNzID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmNsYXNzJylcbiAgICBnZXQgaG9zdENsYXNzKCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gWydpZ3gtY2hpcC1hcmVhJ107XG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmNsYXNzKTtcblxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgd2lkdGggb2YgdGhlIGBJZ3hDaGlwc0FyZWFDb21wb25lbnRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXBzLWFyZWEgI2NoaXBzQXJlYSBbd2lkdGhdPVwiJzMwMCdcIiBbaGVpZ2h0XT1cIicxMCdcIiAob25SZW9yZGVyKT1cImNoaXBzT3JkZXJDaGFuZ2VkKCRldmVudClcIj48L2lneC1jaGlwcy1hcmVhPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBoZWlnaHQgb2YgdGhlIGBJZ3hDaGlwc0FyZWFDb21wb25lbnRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXBzLWFyZWEgI2NoaXBzQXJlYSBbd2lkdGhdPVwiJzMwMCdcIiBbaGVpZ2h0XT1cIicxMCdcIiAob25SZW9yZGVyKT1cImNoaXBzT3JkZXJDaGFuZ2VkKCRldmVudClcIj48L2lneC1jaGlwcy1hcmVhPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gYElneENoaXBDb21wb25lbnRgcyBpbiB0aGUgYElneENoaXBzQXJlYUNvbXBvbmVudGAgc2hvdWxkIGJlIHJlb3JkZXJlZC5cbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGBJZ3hDaGlwQ29tcG9uZW50YHMuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcHMtYXJlYSAjY2hpcHNBcmVhIFt3aWR0aF09XCInMzAwJ1wiIFtoZWlnaHRdPVwiJzEwJ1wiIChvblJlb3JkZXIpPVwiY2hhbmdlZE9yZGVyKCRldmVudClcIj48L2lneC1jaGlwcy1hcmVhPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgY2hhbmdlZE9yZGVyKGV2ZW50OiBJQ2hpcHNBcmVhUmVvcmRlckV2ZW50QXJncyl7XG4gICAgICogICAgICBsZXQgY2hpcHM6IElneENoaXBDb21wb25lbnRbXSA9IGV2ZW50LmNoaXBzQXJyYXk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblJlb3JkZXIgPSBuZXcgRXZlbnRFbWl0dGVyPElDaGlwc0FyZWFSZW9yZGVyRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiBhbiBgSWd4Q2hpcENvbXBvbmVudGAgaW4gdGhlIGBJZ3hDaGlwc0FyZWFDb21wb25lbnRgIGlzIHNlbGVjdGVkL2Rlc2VsZWN0ZWQuXG4gICAgICogRmlyZWQgYWZ0ZXIgdGhlIGNoaXBzIGFyZWEgaXMgaW5pdGlhbGl6ZWQgaWYgdGhlcmUgYXJlIGluaXRpYWxseSBzZWxlY3RlZCBjaGlwcyBhcyB3ZWxsLlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2Ygc2VsZWN0ZWQgYElneENoaXBDb21wb25lbnRgcyBhbmQgdGhlIGBJZ3hDaGlwQXJlYUNvbXBvbmVudGAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtY2hpcHMtYXJlYSAjY2hpcHNBcmVhIFt3aWR0aF09XCInMzAwJ1wiIFtoZWlnaHRdPVwiJzEwJ1wiIChvblNlbGVjdGlvbik9XCJzZWxlY3Rpb24oJGV2ZW50KVwiPjwvaWd4LWNoaXBzLWFyZWE+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHB1YmxpYyBzZWxlY3Rpb24oZXZlbnQ6IElDaGlwc0FyZWFTZWxlY3RFdmVudEFyZ3Mpe1xuICAgICAqICAgICAgbGV0IHNlbGVjdGVkQ2hpcHM6IElneENoaXBDb21wb25lbnRbXSA9IGV2ZW50Lm5ld1NlbGVjdGlvbjtcbiAgICAgKiB9XG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxJQ2hpcHNBcmVhU2VsZWN0RXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiBhbiBgSWd4Q2hpcENvbXBvbmVudGAgaW4gdGhlIGBJZ3hDaGlwc0FyZWFDb21wb25lbnRgIGlzIG1vdmVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNoaXBzLWFyZWEgI2NoaXBzQXJlYSBbd2lkdGhdPVwiJzMwMCdcIiBbaGVpZ2h0XT1cIicxMCdcIiAob25Nb3ZlU3RhcnQpPVwibW92ZVN0YXJ0KCRldmVudClcIj48L2lneC1jaGlwcy1hcmVhPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBtb3ZlU3RhcnQoZXZlbnQ6IElCYXNlQ2hpcHNBcmVhRXZlbnRBcmdzKXtcbiAgICAgKiAgICAgIGxldCBjaGlwQXJlYSA9IGV2ZW50Lm93bmVyO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Nb3ZlU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPElCYXNlQ2hpcHNBcmVhRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgYWZ0ZXIgYW4gYElneENoaXBDb21wb25lbnRgIGluIHRoZSBgSWd4Q2hpcHNBcmVhQ29tcG9uZW50YCBpcyBtb3ZlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jaGlwcy1hcmVhICNjaGlwc0FyZWEgW3dpZHRoXT1cIiczMDAnXCIgW2hlaWdodF09XCInMTAnXCIgKG9uTW92ZUVuZCk9XCJtb3ZlRW5kKCRldmVudClcIj48L2lneC1jaGlwcy1hcmVhPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBtb3ZlRW5kKGV2ZW50OiBJQmFzZUNoaXBzQXJlYUV2ZW50QXJncyl7XG4gICAgICogICAgICBsZXQgY2hpcEFyZWEgPSBldmVudC5vd25lcjtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uTW92ZUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUJhc2VDaGlwc0FyZWFFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBIb2xkcyB0aGUgYElneENoaXBDb21wb25lbnRgIGluIHRoZSBgSWd4Q2hpcHNBcmVhQ29tcG9uZW50YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgbGV0IGNoaXBzID0gdGhpcy5jaGlwc0FyZWEuY2hpcHNMaXN0O1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKElneENoaXBDb21wb25lbnQpXG4gICAgcHVibGljIGNoaXBzTGlzdDogUXVlcnlMaXN0PElneENoaXBDb21wb25lbnQ+O1xuXG4gICAgcHJpdmF0ZSBtb2RpZmllZENoaXBzQXJyYXk6IElneENoaXBDb21wb25lbnRbXTtcbiAgICBwcml2YXRlIF9kaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPElneENoaXBDb21wb25lbnQ+IHwgbnVsbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZENoaXBzOiBJZ3hDaGlwQ29tcG9uZW50W10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIF9pdGVyYWJsZURpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycykge1xuICAgICAgICB0aGlzLl9kaWZmZXIgPSB0aGlzLl9pdGVyYWJsZURpZmZlcnMuZmluZChbXSkuY3JlYXRlKG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGluaXRpYWxseSBzZWxlY3RlZCBjaGlwcyB0aHJvdWdoIHRoZWlyIGlucHV0cywgd2UgbmVlZCB0byBnZXQgdGhlbSwgYmVjYXVzZSB3ZSBjYW5ub3QgbGlzdGVuIHRvIHRoZWlyIGV2ZW50cyB5ZXQuXG4gICAgICAgIGlmICh0aGlzLmNoaXBzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlwcyA9IHRoaXMuY2hpcHNMaXN0LmZpbHRlcigoaXRlbTogSWd4Q2hpcENvbXBvbmVudCkgPT4gaXRlbS5zZWxlY3RlZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3Rpb24uZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG5ld1NlbGVjdGlvbjogdGhpcy5zZWxlY3RlZENoaXBzLFxuICAgICAgICAgICAgICAgICAgICBvd25lcjogdGhpc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNoaXBzTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuX2RpZmZlci5kaWZmKHRoaXMuY2hpcHNMaXN0LnRvQXJyYXkoKSk7XG4gICAgICAgICAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICAgICAgICAgIGNoYW5nZXMuZm9yRWFjaEFkZGVkSXRlbSgoYWRkZWRDaGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkQ2hpcC5pdGVtLm9uTW92ZVN0YXJ0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGlwTW92ZVN0YXJ0KGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkZWRDaGlwLml0ZW0ub25Nb3ZlRW5kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGlwTW92ZUVuZChhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkQ2hpcC5pdGVtLm9uRHJhZ0VudGVyLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGlwRHJhZ0VudGVyKGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkZWRDaGlwLml0ZW0ub25LZXlEb3duLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGlwS2V5RG93bihhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGRlZENoaXAuaXRlbS5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRlZENoaXAuaXRlbS5vblNlbGVjdGlvbi5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoaXBTZWxlY3Rpb25DaGFuZ2UoYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZpZWRDaGlwc0FycmF5ID0gdGhpcy5jaGlwc0xpc3QudG9BcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uQ2hpcEtleURvd24oZXZlbnQ6IElDaGlwS2V5RG93bkV2ZW50QXJncykge1xuICAgICAgICBsZXQgb3JkZXJDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNoaXBzQXJyYXkgPSB0aGlzLmNoaXBzTGlzdC50b0FycmF5KCk7XG4gICAgICAgIGNvbnN0IGRyYWdDaGlwSW5kZXggPSBjaGlwc0FycmF5LmZpbmRJbmRleCgoZWwpID0+IGVsID09PSBldmVudC5vd25lcik7XG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50LnNoaWZ0S2V5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQua2V5ID09PSAnTGVmdCcpIHtcbiAgICAgICAgICAgICAgICBvcmRlckNoYW5nZWQgPSB0aGlzLnBvc2l0aW9uQ2hpcEF0SW5kZXgoZHJhZ0NoaXBJbmRleCwgZHJhZ0NoaXBJbmRleCAtIDEsIGZhbHNlLCBldmVudC5vcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgICAgICAgICBpZiAob3JkZXJDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlwc0xpc3QudG9BcnJheSgpW2RyYWdDaGlwSW5kZXggLSAxXS5jaGlwQXJlYS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQub3JpZ2luYWxFdmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBldmVudC5vcmlnaW5hbEV2ZW50LmtleSA9PT0gJ1JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIG9yZGVyQ2hhbmdlZCA9IHRoaXMucG9zaXRpb25DaGlwQXRJbmRleChkcmFnQ2hpcEluZGV4LCBkcmFnQ2hpcEluZGV4ICsgMSwgdHJ1ZSwgZXZlbnQub3JpZ2luYWxFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoKGV2ZW50Lm9yaWdpbmFsRXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5vcmlnaW5hbEV2ZW50LmtleSA9PT0gJ0xlZnQnKSAmJiBkcmFnQ2hpcEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIGNoaXBzQXJyYXlbZHJhZ0NoaXBJbmRleCAtIDFdLmNoaXBBcmVhLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGV2ZW50Lm9yaWdpbmFsRXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcgfHwgZXZlbnQub3JpZ2luYWxFdmVudC5rZXkgPT09ICdSaWdodCcpICYmXG4gICAgICAgICAgICAgICAgZHJhZ0NoaXBJbmRleCA8IGNoaXBzQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGNoaXBzQXJyYXlbZHJhZ0NoaXBJbmRleCArIDFdLmNoaXBBcmVhLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25DaGlwTW92ZVN0YXJ0KGV2ZW50OiBJQmFzZUNoaXBFdmVudEFyZ3MpIHtcbiAgICAgICAgdGhpcy5vbk1vdmVTdGFydC5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBvd25lcjogdGhpc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uQ2hpcE1vdmVFbmQoZXZlbnQ6IElCYXNlQ2hpcEV2ZW50QXJncykge1xuICAgICAgICB0aGlzLm9uTW92ZUVuZC5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBvd25lcjogdGhpc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uQ2hpcERyYWdFbnRlcihldmVudDogSUNoaXBFbnRlckRyYWdBcmVhRXZlbnRBcmdzKSB7XG4gICAgICAgIGNvbnN0IGRyb3BDaGlwUmVjdCA9IGV2ZW50Lm93bmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZHJvcENoaXBJbmRleCA9IHRoaXMuY2hpcHNMaXN0LnRvQXJyYXkoKS5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gZXZlbnQub3duZXIpO1xuICAgICAgICBjb25zdCBkcmFnQ2hpcEluZGV4ID0gdGhpcy5jaGlwc0xpc3QudG9BcnJheSgpLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSBldmVudC5kcmFnQ2hpcCk7XG4gICAgICAgIGlmIChkcmFnQ2hpcEluZGV4IDwgZHJvcENoaXBJbmRleCkge1xuICAgICAgICAgICAgLy8gZnJvbSB0aGUgbGVmdCB0byByaWdodFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkNoaXBBdEluZGV4KGRyYWdDaGlwSW5kZXgsIGRyb3BDaGlwSW5kZXgsIHRydWUsIGV2ZW50Lm9yaWdpbmFsRXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZnJvbSB0aGUgcmlnaHQgdG8gbGVmdFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkNoaXBBdEluZGV4KGRyYWdDaGlwSW5kZXgsIGRyb3BDaGlwSW5kZXgsIGZhbHNlLCBldmVudC5vcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcG9zaXRpb25DaGlwQXRJbmRleChjaGlwSW5kZXgsIHRhcmdldEluZGV4LCBzaGlmdFJlc3RMZWZ0LCBvcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgIGlmIChjaGlwSW5kZXggPCAwIHx8IHRoaXMuY2hpcHNMaXN0Lmxlbmd0aCA8PSBjaGlwSW5kZXggfHxcbiAgICAgICAgICAgIHRhcmdldEluZGV4IDwgMCB8fCB0aGlzLmNoaXBzTGlzdC5sZW5ndGggPD0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoaXBzQXJyYXkgPSB0aGlzLmNoaXBzTGlzdC50b0FycmF5KCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdDogSWd4Q2hpcENvbXBvbmVudFtdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpcHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNoaWZ0UmVzdExlZnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpcEluZGV4IDw9IGkgJiYgaSA8IHRhcmdldEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaXBzQXJyYXlbaSArIDFdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHRhcmdldEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaXBzQXJyYXlbY2hpcEluZGV4XSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hpcHNBcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCBpICYmIGkgPD0gY2hpcEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaXBzQXJyYXlbaSAtIDFdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHRhcmdldEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaXBzQXJyYXlbY2hpcEluZGV4XSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hpcHNBcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kaWZpZWRDaGlwc0FycmF5ID0gcmVzdWx0O1xuXG4gICAgICAgIGNvbnN0IGV2ZW50RGF0YTogSUNoaXBzQXJlYVJlb3JkZXJFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICBjaGlwc0FycmF5OiB0aGlzLm1vZGlmaWVkQ2hpcHNBcnJheSxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBvd25lcjogdGhpc1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uUmVvcmRlci5lbWl0KGV2ZW50RGF0YSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25DaGlwU2VsZWN0aW9uQ2hhbmdlKGV2ZW50OiBJQ2hpcFNlbGVjdEV2ZW50QXJncykge1xuICAgICAgICBpZiAoZXZlbnQuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlwcy5wdXNoKGV2ZW50Lm93bmVyKTtcbiAgICAgICAgfSBlbHNlIGlmICghZXZlbnQuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlwcyA9IHRoaXMuc2VsZWN0ZWRDaGlwcy5maWx0ZXIoKGNoaXApID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpcC5pZCAhPT0gZXZlbnQub3duZXIuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbjogdGhpcy5zZWxlY3RlZENoaXBzLFxuICAgICAgICAgICAgb3duZXI6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19