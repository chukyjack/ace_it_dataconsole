import { cloneDate } from '@progress/kendo-date-math';
import { Keys } from '@progress/kendo-angular-common';
import { Subscription, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isPresent } from '../common/utils';
/**
 * @hidden
 */
export class DateRangeInput {
    constructor(activeRangeEnd, dateRangeService, input, element, renderer, zone) {
        this.activeRangeEnd = activeRangeEnd;
        this.dateRangeService = dateRangeService;
        this.input = input;
        this.element = element;
        this.renderer = renderer;
        this.zone = zone;
        this.navigateCalendarOnFocus = false;
        this.popupSubscriptions = new Subscription(() => { });
        this.subscriptions = new Subscription(() => { });
    }
    get isActiveEnd() {
        return this.dateRangeService.activeRangeEnd === this.activeRangeEnd;
    }
    get popupCalendarActivated() {
        const popup = this.dateRangeService.dateRangePopup$.value;
        return isPresent(popup) && isPresent(popup.calendar);
    }
    init() {
        if (this.input.value) {
            this.dateRangeService.setRange(this.getRange(this.input.value));
        }
        [
            this.input.onBlur.subscribe(() => this.deactivate()),
            this.input.onFocus.pipe(filter(() => !this.popupCalendarActivated)).subscribe(() => this.activate()),
            this.input.valueUpdate.subscribe(value => this.updateRange(value, 'change')),
            this.dateRangeService.activeRangeEnd$.subscribe(() => {
                if (this.navigateCalendarOnFocus) {
                    this.focusActiveDate();
                }
                this.toggleActiveClass(this.isActiveEnd);
            }),
            this.dateRangeService.dateRangePopup$.subscribe(popup => this.initPopup(popup)),
            this.dateRangeService.range$.subscribe(range => this.updateInputValue(range)),
            fromEvent(this.element.nativeElement, 'click').subscribe(() => this.activate()),
            fromEvent(this.element.nativeElement, 'keydown').subscribe((event) => this.togglePopup(event || {}))
        ].map(s => this.subscriptions.add(s));
    }
    destroy() {
        this.subscriptions.unsubscribe();
        this.unsubscribePopup();
    }
    initPopup(popup) {
        if (!popup) {
            this.unsubscribePopup();
            return;
        }
        if (!popup.anchor) {
            popup.anchor = this.element.nativeElement;
        }
        [
            popup.cancel.subscribe(() => this.isActiveEnd && this.input.focus()),
            popup.onFocus.subscribe(() => this.toggleActiveClass(this.isActiveEnd)),
            popup.onBlur.subscribe(() => this.deactivate())
        ].map(s => this.popupSubscriptions.add(s));
    }
    unsubscribePopup() {
        this.popupSubscriptions.unsubscribe();
        this.popupSubscriptions = new Subscription(() => { });
    }
    activate() {
        this.dateRangeService.setActiveRangeEnd(this.activeRangeEnd);
        this.dateRangeService.activatePopup();
    }
    deactivate() {
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                this.updateRange(this.input.value, 'blur');
                if (this.dateRangeService.hasActiveComponent()) {
                    return;
                }
                this.toggleActiveClass(false);
                this.zone.run(() => this.dateRangeService.deactivatePopup());
            });
        });
    }
    updateRange(value, correctOn) {
        const range = this.getRange(value, correctOn);
        if (range) {
            this.focusActiveDate();
            this.dateRangeService.setRange(range);
        }
    }
    togglePopup({ altKey, keyCode }) {
        if (keyCode === Keys.Escape) {
            this.dateRangeService.cancelPopup();
        }
        else if (altKey && keyCode === Keys.ArrowDown) {
            this.dateRangeService.activatePopup();
        }
    }
    focusActiveDate() {
        if (this.input.value && this.isActiveEnd) {
            this.dateRangeService.setFocusedDate(cloneDate(this.input.value));
        }
    }
    toggleActiveClass(show) {
        const action = show ? 'addClass' : 'removeClass';
        const nativeElement = this.element.nativeElement;
        if (nativeElement && nativeElement.querySelector) {
            this.renderer[action](nativeElement.querySelector('.k-dateinput-wrap'), 'k-state-focused');
        }
    }
}
