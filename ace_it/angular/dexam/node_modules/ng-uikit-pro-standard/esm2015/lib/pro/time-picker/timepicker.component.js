/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, ElementRef, Renderer2, forwardRef, Inject, PLATFORM_ID, HostListener, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
/** @type {?} */
export const TIME_PIRCKER_VALUE_ACCESSOT = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => ClockPickerComponent)),
    multi: true
};
export class ClockPickerComponent {
    /**
     * @param {?} elem
     * @param {?} renderer
     * @param {?} platformId
     */
    constructor(elem, renderer, platformId) {
        this.elem = elem;
        this.renderer = renderer;
        this.twelvehour = false;
        this.darktheme = false;
        this.placeholder = '';
        this.label = '';
        this.duration = 300;
        this.showClock = false;
        this.disabled = false;
        this.outlineInput = false;
        this.timeChanged = new EventEmitter();
        this.isMobile = null;
        this.touchDevice = ('ontouchstart' in ((/** @type {?} */ (document.documentElement))));
        this.showHours = false;
        this.elements = document.getElementsByClassName('clockpicker');
        this.dialRadius = 135;
        this.outerRadius = 110;
        this.innerRadius = 80;
        this.tickRadius = 20;
        this.diameter = this.dialRadius * 2;
        this.isBrowser = false;
        this.hoursTicks = [];
        this.minutesTicks = [];
        this.selectedHours = { 'h': '12', 'm': '00', 'ampm': 'AM' };
        this.endHours = '';
        this.touchSupported = 'ontouchstart' in window;
        this.mousedownEvent = 'mousedown' + (this.touchSupported ? ' touchstart' : '');
        this.mousemoveEvent = 'mousemove' + (this.touchSupported ? ' touchmove' : '');
        this.mouseupEvent = 'mouseup' + (this.touchSupported ? ' touchend' : '');
        this.onChangeCb = (/**
         * @return {?}
         */
        () => { });
        this.onTouchedCb = (/**
         * @return {?}
         */
        () => { });
        this.isBrowser = isPlatformBrowser(platformId);
        renderer.listen(this.elem.nativeElement, 'click', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this.showClock &&
                event.target &&
                this.elem.nativeElement !== event.target &&
                !this.elem.nativeElement.contains(event.target)) {
                this.showClock = false;
            }
            if (event.target.classList.contains('picker__holder')) {
                this.showClock = false;
            }
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ontouchmove(event) {
        // Rotating Time Picker on mobile
        if (event.target.parentElement.classList.contains('clockpicker-dial')) {
            ((/** @type {?} */ (this.elem.nativeElement.querySelectorAll('.clockpicker-tick')))).forEach((/**
             * @param {?} element
             * @return {?}
             */
            (element) => {
                this.renderer.setStyle(element, 'background-color', 'rgba(0, 150, 136, 0');
            }));
            this.mousedown(event);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.generateTick();
        if (this.isBrowser) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderer.listen(this.elem.nativeElement.querySelector('.clockpicker-plate'), 'mousedown', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.mousedown(event, false);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.isBrowser) {
            // Fix for visible date / time picker input when picker plate is visible.
            try {
                /** @type {?} */
                const openedPicker = document.querySelector('.picker--opened');
                /** @type {?} */
                const allPickers = document.querySelectorAll('.picker');
                allPickers.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                (element) => {
                    this.renderer.setStyle(element, 'z-index', '0');
                }));
                this.renderer.setStyle(openedPicker, 'z-index', '1000');
            }
            catch (error) { }
        }
    }
    /**
     * @return {?}
     */
    checkDraw() {
        /** @type {?} */
        let value;
        /** @type {?} */
        const isHours = this.showHours;
        if (isHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        /** @type {?} */
        const unit = Math.PI / (isHours ? 6 : 30);
        /** @type {?} */
        const radian = value * unit;
        /** @type {?} */
        const radius = isHours && value > 0 && value < 13 ? this.innerRadius : this.outerRadius;
        /** @type {?} */
        const xd = Math.sin(radian) * radius;
        /** @type {?} */
        const yd = -Math.cos(radian) * radius;
        this.setHand(xd, yd, false);
    }
    /**
     * @param {?} e
     * @param {?=} space
     * @return {?}
     */
    mousedown(e, space) {
        /** @type {?} */
        const offset = this.plate.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const isTouch = /^touch/.test(e.type);
        /** @type {?} */
        const x0 = offset.left + this.dialRadius;
        /** @type {?} */
        const y0 = offset.top + this.dialRadius;
        /** @type {?} */
        const dx = (isTouch ? e.touches[0] : e).clientX - x0;
        /** @type {?} */
        const dy = (isTouch ? e.touches[0] : e).clientY - y0;
        /** @type {?} */
        const z = Math.sqrt(dx * dx + dy * dy);
        /** @type {?} */
        let moved = false;
        if (space && (z < this.outerRadius - this.tickRadius || z > this.outerRadius + this.tickRadius)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (this.showHours) {
            this.setHand(dx, dy, true);
        }
        else {
            this.setHand(dx, dy, false);
        }
        /** @type {?} */
        const mousemoveEventMethod = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            event.preventDefault();
            event.stopPropagation();
            /** @type {?} */
            const x = event.clientX - x0;
            /** @type {?} */
            const y = event.clientY - y0;
            if (!moved && x === dx && y === dy) {
                return;
            }
            moved = true;
            this.setHand(x, y, false);
        });
        /** @type {?} */
        const mouseupEventMethod = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            document.removeEventListener(this.mousemoveEvent, mousemoveEventMethod);
            e.preventDefault();
            /** @type {?} */
            const x = event.clientX - x0;
            /** @type {?} */
            const y = event.clientX - y0;
            if ((space || moved) && x === dx && y === dy) {
                this.setHand(x, y, false);
            }
            this.showMinutesClock();
            document.removeEventListener(this.mouseupEvent, mouseupEventMethod);
        });
        document.addEventListener(this.mousemoveEvent, mousemoveEventMethod);
        document.addEventListener('mouseup', mouseupEventMethod);
    }
    /**
     * @return {?}
     */
    hideKeyboard() {
        // this set timeout needed for case when hideKeyborad
        // is called inside of 'onfocus' event handler
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                // creating temp field
                // const field = document.createElement('input');
                /** @type {?} */
                const field = this.renderer.createElement('input');
                this.renderer.appendChild(this.elem.nativeElement, field);
                /** @type {?} */
                const inputReference = this.elem.nativeElement.lastElementChild;
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setStyle(inputReference, 'opacity', '0');
                this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                // // hiding temp field from peoples eyes
                // // -webkit-user-modify is nessesary for Android 4.x
                // adding onfocus event handler for out temp field
                field.onfocus = (/**
                 * @return {?}
                 */
                () => {
                    // this timeout of 200ms is nessasary for Android 2.3.x
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.renderer.setStyle(field, 'display', 'none');
                        setTimeout((/**
                         * @return {?}
                         */
                        () => {
                            this.renderer.removeChild(this.elem.nativeElement, field);
                            document.body.focus();
                        }), 0);
                    }), 0);
                });
                // focusing it
                field.focus();
            }), 0);
        }
        catch (error) {
        }
    }
    /**
     * @return {?}
     */
    openBtnClicked() {
        this.showClock = true;
        this.showHours = true;
        this.checkDraw();
        if (this.isMobile) {
            this.hideKeyboard();
        }
    }
    /**
     * @return {?}
     */
    closeBtnClicked() {
        /** @type {?} */
        const h = this.selectedHours.h;
        /** @type {?} */
        const m = this.selectedHours.m;
        /** @type {?} */
        const ampm = this.selectedHours.ampm;
        if (this.twelvehour) {
            this.endHours = h + ':' + m + ampm;
        }
        else {
            this.endHours = h + ':' + m;
        }
        this.onChangeCb(this.endHours);
        this.onTouchedCb();
        this.timeChanged.emit(this.endHours);
        this.showClock = false;
    }
    /**
     * @return {?}
     */
    clearTimeInput() {
        this.selectedHours = { 'h': '12', 'm': '00', 'ampm': 'AM' };
        this.endHours = '';
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    setHour(hour) {
        this.selectedHours.h = hour;
    }
    /**
     * @param {?} min
     * @return {?}
     */
    setMinute(min) {
        // event.stopPropagation();
        this.selectedHours.m = min;
    }
    /**
     * @param {?} ampm
     * @return {?}
     */
    setAmPm(ampm) {
        // event.stopPropagation();
        this.selectedHours.ampm = ampm;
    }
    /**
     * @return {?}
     */
    showHoursClock() {
        this.showHours = true;
        this.checkDraw();
    }
    /**
     * @return {?}
     */
    showMinutesClock() {
        this.showHours = false;
        this.checkDraw();
    }
    /**
     * @return {?}
     */
    generateTick() {
        if (this.twelvehour) {
            for (let i = 1; i < 13; i++) {
                /** @type {?} */
                const radian = i / 6 * Math.PI;
                /** @type {?} */
                const radius = this.outerRadius;
                /** @type {?} */
                const tick = {
                    'hour': i,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        else {
            for (let i = 0; i < 24; i++) {
                /** @type {?} */
                const radian = i / 6 * Math.PI;
                /** @type {?} */
                const inner = i > 0 && i < 13;
                /** @type {?} */
                const radius = inner ? this.innerRadius : this.outerRadius;
                /** @type {?} */
                let h;
                if (i === 0) {
                    h = '0' + i.toString();
                }
                else {
                    h = i;
                }
                /** @type {?} */
                const tick = {
                    'hour': h,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        for (let i = 0; i < 60; i += 5) {
            /** @type {?} */
            const radian = i / 30 * Math.PI;
            /** @type {?} */
            let min = i.toString();
            if (i < 10) {
                min = '0' + i.toString();
            }
            /** @type {?} */
            const tick = {
                'min': min,
                'left': this.dialRadius + Math.sin(radian) * this.outerRadius - this.tickRadius,
                'top': this.dialRadius - Math.cos(radian) * this.outerRadius - this.tickRadius,
            };
            this.minutesTicks.push(tick);
        }
    }
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} roundBy5
     * @return {?}
     */
    setHand(x, y, roundBy5) {
        /** @type {?} */
        let radian = Math.atan2(x, -y);
        /** @type {?} */
        const isHours = this.showHours;
        /** @type {?} */
        const unit = Math.PI / (isHours || roundBy5 ? 6 : 30);
        /** @type {?} */
        const z = Math.sqrt(x * x + y * y);
        /** @type {?} */
        const inner = isHours && z < (this.outerRadius + this.innerRadius) / 2;
        /** @type {?} */
        let radius = inner ? this.innerRadius : this.outerRadius;
        /** @type {?} */
        let value;
        if (this.showHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        if (this.twelvehour) {
            radius = this.outerRadius;
        }
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        value = Math.round(radian / unit);
        radian = value * unit;
        if (this.twelvehour) {
            if (isHours) {
                if (value === 0) {
                    value = 12;
                }
            }
            else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        else {
            if (isHours) {
                value = !inner ? value + 12 : value;
                value = value === 24 ? 0 : value;
                value = (inner && value === 0) ? 12 : value;
                value = (!inner && value === 12) ? 0 : value;
            }
            else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        if (isHours) {
            this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg');
        }
        else {
            if (value % 5 === 0) {
                this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg');
            }
            else {
                this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg active');
            }
        }
        /** @type {?} */
        const cx1 = Math.sin(radian) * (radius - this.tickRadius);
        /** @type {?} */
        const cy1 = -Math.cos(radian) * (radius - this.tickRadius);
        /** @type {?} */
        const cx2 = Math.sin(radian) * radius;
        /** @type {?} */
        const cy2 = -Math.cos(radian) * radius;
        this.hand.nativeElement.setAttribute('x2', cx1);
        this.hand.nativeElement.setAttribute('y2', cy1);
        this.bg.nativeElement.setAttribute('cx', cx2);
        this.bg.nativeElement.setAttribute('cy', cy2);
        this.fg.nativeElement.setAttribute('cx', cx2);
        this.fg.nativeElement.setAttribute('cy', cy2);
        if (this.showHours) {
            if (value < 10) {
                this.setHour('0' + value.toString());
            }
            else {
                this.setHour(value.toString());
            }
        }
        else {
            if (value < 10) {
                this.setMinute('0' + value.toString());
            }
            else {
                this.setMinute(value.toString());
            }
        }
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    offset(obj) {
        /** @type {?} */
        let left = 0;
        /** @type {?} */
        let top = 0;
        if (obj.offsetParent) {
            do {
                left += obj.offsetLeft;
                top += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        return { left, top };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.endHours = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCb = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCb = fn;
    }
}
ClockPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-time-picker',
                template: "<div class=\"tp\">\n  <div class=\"md-form\" [ngClass]=\"{'md-outline': outlineInput}\">\n    <input [disabled]=\"disabled\" [tabindex]=\"tabIndex\" [placeholder]=\"placeholder\" [value]=\"endHours\" type=\"text\" class=\"form-control timepicker\" (click)=\"openBtnClicked()\" [(ngModel)]=\"endHours\">\n    <label class=\"active\">{{ label }}</label>\n\n  </div>\n  <div class=\"clockpicker picker\" [hidden]=\"!showClock\" [ngClass]=\"{'picker--opened': showClock, 'darktheme': darktheme}\">\n    <div class=\"picker__holder\">\n      <div class=\"picker__frame\">\n        <div class=\"picker__wrap\">\n          <div class=\"picker__box\">\n            <div class=\"picker__date-display\">\n              <div class=\"clockpicker-display\">\n                <div class=\"clockpicker-display-column\">\n                  <span class=\"clockpicker-span-hours text-primary\" [ngClass]=\"{'text-primary': showHours}\" (click)=\"showHoursClock()\">\n                    {{ selectedHours.h }}</span>:<span class=\"clockpicker-span-minutes\" [ngClass]=\"{'text-primary': !showHours}\"\n                      (click)=\"showMinutesClock()\">{{selectedHours.m }}</span>\n                </div>\n                <div class=\"clockpicker-display-column clockpicker-display-am-pm\" *ngIf=\"twelvehour\">\n                  <div class=\"clockpicker-span-am-pm\">{{ selectedHours.ampm }}</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"picker__calendar-container\">\n              <div class=\"clockpicker-plate\" #plate>\n                  <div class=\"clockpicker-canvas\">\n                  <svg class=\"clockpicker-svg\" width=\"270\" height=\"270\" #svg>\n                      <g transform=\"translate(135,135)\" #g>\n                      <line x1=\"0\" y1=\"0\" x2=\"77.94228634059948\" y2=\"-45.00000000000001\" #hand></line>\n                      <circle class=\"clockpicker-canvas-fg\" r=\"5\" cx=\"95.26279441628824\" cy=\"-55.000000000000014\" #fg></circle>\n                      <circle class=\"clockpicker-canvas-bg\" r=\"20\" cx=\"95.26279441628824\" cy=\"-55.000000000000014\" #bg></circle>\n                      <circle class=\"clockpicker-canvas-bearing\" cx=\"0\" cy=\"0\" r=\"2\" #bearing></circle>\n                      </g>\n                  </svg>\n                  </div>\n                  <div class=\"clockpicker-dial clockpicker-hours\" #hoursPlate [ngClass]=\"{'clockpicker-dial-out': !showHours}\" [ngStyle]=\"{'visibility': !showHours ? 'hidden' : 'visible'}\">\n                  <div *ngFor=\"let tick of hoursTicks\" class=\"clockpicker-tick\" style=\"font-size: 140%;\" [ngStyle]=\"{'left': tick.left+'px', 'top': tick.top+'px'}\"\n                      id=\"{{ tick.hour }}\">\n                      {{ tick.hour }}\n                  </div>\n                  </div>\n                  <div class=\"clockpicker-dial clockpicker-minutes\" #minutesPlate [ngClass]=\"{'clockpicker-dial-out': showHours}\" [ngStyle]=\"{'visibility': showHours ? 'hidden' : 'visible'}\">\n                  <div *ngFor=\"let tick of minutesTicks\" class=\"clockpicker-tick\" style=\"font-size: 120%;\" [ngStyle]=\"{'left': tick.left+'px', 'top': tick.top+'px'}\">\n                      {{ tick.min }}\n                  </div>\n                  </div>\n              </div>\n              <div class=\"clockpicker-am-pm-block\" *ngIf=\"twelvehour\">\n                <button type=\"button\" class=\"btn-floating btn-flat clockpicker-button am-button\" [ngClass]=\"{'active': selectedHours.ampm=='AM'}\"\n                  (click)=\"setAmPm('AM')\">\n                  AM\n                </button>\n                <button type=\"button\" class=\"btn-floating btn-flat clockpicker-button pm-button\" [ngClass]=\"{'active': selectedHours.ampm=='PM'}\"\n                  (click)=\"setAmPm('PM')\">\n                  PM\n                </button>\n              </div>\n            </div>\n            <div class=\"picker__footer\">\n              <button type=\"button\" *ngIf=\"buttonLabel\" class=\"btn-flat clockpicker-button\" (click)=\"closeBtnClicked()\">\n                {{buttonLabel}}\n              </button>\n              <button type=\"button\" *ngIf=\"!buttonLabel\" class=\"btn-flat clockpicker-button\" (click)=\"closeBtnClicked()\">\n                Done\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                providers: [TIME_PIRCKER_VALUE_ACCESSOT]
            }] }
];
/** @nocollapse */
ClockPickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ClockPickerComponent.propDecorators = {
    hoursPlate: [{ type: ViewChild, args: ['hoursPlate',] }],
    minutesPlate: [{ type: ViewChild, args: ['minutesPlate',] }],
    plate: [{ type: ViewChild, args: ['plate',] }],
    svg: [{ type: ViewChild, args: ['svg',] }],
    g: [{ type: ViewChild, args: ['g',] }],
    hand: [{ type: ViewChild, args: ['hand',] }],
    fg: [{ type: ViewChild, args: ['fg',] }],
    bg: [{ type: ViewChild, args: ['bg',] }],
    bearing: [{ type: ViewChild, args: ['bearing',] }],
    twelvehour: [{ type: Input, args: ['twelvehour',] }],
    darktheme: [{ type: Input, args: ['darktheme',] }],
    placeholder: [{ type: Input, args: ['placeholder',] }],
    label: [{ type: Input, args: ['label',] }],
    duration: [{ type: Input, args: ['duration',] }],
    showClock: [{ type: Input, args: ['showClock',] }],
    buttonLabel: [{ type: Input }],
    disabled: [{ type: Input }],
    tabIndex: [{ type: Input }],
    outlineInput: [{ type: Input }],
    timeChanged: [{ type: Output }],
    ontouchmove: [{ type: HostListener, args: ['touchmove', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    ClockPickerComponent.prototype.hoursPlate;
    /** @type {?} */
    ClockPickerComponent.prototype.minutesPlate;
    /** @type {?} */
    ClockPickerComponent.prototype.plate;
    /** @type {?} */
    ClockPickerComponent.prototype.svg;
    /** @type {?} */
    ClockPickerComponent.prototype.g;
    /** @type {?} */
    ClockPickerComponent.prototype.hand;
    /** @type {?} */
    ClockPickerComponent.prototype.fg;
    /** @type {?} */
    ClockPickerComponent.prototype.bg;
    /** @type {?} */
    ClockPickerComponent.prototype.bearing;
    /** @type {?} */
    ClockPickerComponent.prototype.twelvehour;
    /** @type {?} */
    ClockPickerComponent.prototype.darktheme;
    /** @type {?} */
    ClockPickerComponent.prototype.placeholder;
    /** @type {?} */
    ClockPickerComponent.prototype.label;
    /** @type {?} */
    ClockPickerComponent.prototype.duration;
    /** @type {?} */
    ClockPickerComponent.prototype.showClock;
    /** @type {?} */
    ClockPickerComponent.prototype.buttonLabel;
    /** @type {?} */
    ClockPickerComponent.prototype.disabled;
    /** @type {?} */
    ClockPickerComponent.prototype.tabIndex;
    /** @type {?} */
    ClockPickerComponent.prototype.outlineInput;
    /** @type {?} */
    ClockPickerComponent.prototype.timeChanged;
    /** @type {?} */
    ClockPickerComponent.prototype.isMobile;
    /** @type {?} */
    ClockPickerComponent.prototype.touchDevice;
    /** @type {?} */
    ClockPickerComponent.prototype.showHours;
    /** @type {?} */
    ClockPickerComponent.prototype.elements;
    /** @type {?} */
    ClockPickerComponent.prototype.elementNumber;
    /** @type {?} */
    ClockPickerComponent.prototype.dialRadius;
    /** @type {?} */
    ClockPickerComponent.prototype.outerRadius;
    /** @type {?} */
    ClockPickerComponent.prototype.innerRadius;
    /** @type {?} */
    ClockPickerComponent.prototype.tickRadius;
    /** @type {?} */
    ClockPickerComponent.prototype.diameter;
    /** @type {?} */
    ClockPickerComponent.prototype.isBrowser;
    /** @type {?} */
    ClockPickerComponent.prototype.hoursTicks;
    /** @type {?} */
    ClockPickerComponent.prototype.minutesTicks;
    /** @type {?} */
    ClockPickerComponent.prototype.selectedHours;
    /** @type {?} */
    ClockPickerComponent.prototype.endHours;
    /** @type {?} */
    ClockPickerComponent.prototype.touchSupported;
    /** @type {?} */
    ClockPickerComponent.prototype.mousedownEvent;
    /** @type {?} */
    ClockPickerComponent.prototype.mousemoveEvent;
    /** @type {?} */
    ClockPickerComponent.prototype.mouseupEvent;
    /** @type {?} */
    ClockPickerComponent.prototype.onChangeCb;
    /** @type {?} */
    ClockPickerComponent.prototype.onTouchedCb;
    /** @type {?} */
    ClockPickerComponent.prototype.elem;
    /** @type {?} */
    ClockPickerComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3RpbWUtcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFHVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFFWCxZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRXBELE1BQU0sT0FBTywyQkFBMkIsR0FBUTtJQUM1QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNkO0FBU0QsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBa0Q3QixZQUFtQixJQUFnQixFQUFTLFFBQW1CLEVBQXVCLFVBQWtCO1FBQXJGLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBdENuQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDaEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDL0IsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNSLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXBDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFcEIsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV6RSxhQUFRLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsQ0FBQyxjQUFjLElBQUksQ0FBQyxtQkFBQSxRQUFRLENBQUMsZUFBZSxFQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFWCxhQUFRLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBR2pFLGVBQVUsR0FBRyxHQUFHLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDL0IsY0FBUyxHQUFRLEtBQUssQ0FBQztRQUV2QixlQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzVELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFHZCxtQkFBYyxHQUFRLGNBQWMsSUFBSSxNQUFNLENBQUM7UUFDL0MsbUJBQWMsR0FBUSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLG1CQUFjLEdBQVEsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5RSxpQkFBWSxHQUFRLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUE0WHpFLGVBQVU7OztRQUFxQixHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUM7UUFDekMsZ0JBQVc7OztRQUFlLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQztRQTFYaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU87Ozs7UUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBRTdELElBQUksSUFBSSxDQUFDLFNBQVM7Z0JBQ2QsS0FBSyxDQUFDLE1BQU07Z0JBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxDQUFDLE1BQU07Z0JBQ3hDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFDakQ7Z0JBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDMUI7WUFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUMxQjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFHc0MsV0FBVyxDQUFDLEtBQVU7UUFDekQsaUNBQWlDO1FBQ2pDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQ25FLENBQUMsbUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsRUFBTyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7Z0JBQzVGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1lBQy9FLENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUEyQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekU7SUFDTCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLFdBQVc7Ozs7UUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQzFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIseUVBQXlFO1lBQ3pFLElBQUk7O3NCQUNNLFlBQVksR0FBUSxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDOztzQkFDN0QsVUFBVSxHQUFRLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7Z0JBQzVELFVBQVUsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BELENBQUMsRUFBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDM0Q7WUFBQyxPQUFPLEtBQUssRUFBRSxHQUFHO1NBQ3RCO0lBQ0wsQ0FBQzs7OztJQUVELFNBQVM7O1lBQ0QsS0FBSzs7Y0FDSCxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFDOUIsSUFBSSxPQUFPLEVBQUU7WUFDVCxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDSCxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdDOztjQUdLLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7Y0FDckMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJOztjQUNyQixNQUFNLEdBQUcsT0FBTyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7O2NBQ2pGLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU07O2NBQzlCLEVBQUUsR0FBRyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTTtRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFaEMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLENBQU0sRUFBRSxLQUFXOztjQUNuQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O2NBQzNELE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7O2NBQy9CLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVOztjQUNsQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVTs7Y0FDakMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRTs7Y0FDOUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRTs7Y0FDOUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDOztZQUNoQyxLQUFLLEdBQUcsS0FBSztRQUVqQixJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzdGLE9BQU87U0FDVjtRQUNELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFHcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQy9COztjQUVLLG9CQUFvQjs7OztRQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFFeEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7a0JBQ2xCLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUU7O2tCQUN4QixDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNoQyxPQUFPO2FBQ1Y7WUFDRCxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBRWIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQTs7Y0FFSyxrQkFBa0I7Ozs7UUFBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3RDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDOztrQkFDYixDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFOztrQkFDeEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUE7UUFDRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBQ0QsWUFBWTtRQUNSLHFEQUFxRDtRQUNyRCw4Q0FBOEM7UUFDOUMsSUFBSTtZQUNBLFVBQVU7OztZQUFDLEdBQUcsRUFBRTs7OztzQkFHTixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQzs7c0JBQ3BELGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0I7Z0JBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO2dCQUMzRix5Q0FBeUM7Z0JBQ3pDLHNEQUFzRDtnQkFDdEQsa0RBQWtEO2dCQUNsRCxLQUFLLENBQUMsT0FBTzs7O2dCQUFHLEdBQUcsRUFBRTtvQkFDakIsdURBQXVEO29CQUN2RCxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFO3dCQUVaLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ2pELFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUU7NEJBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7NEJBQzFELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzFCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztvQkFFVixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsQ0FBQyxDQUFBLENBQUM7Z0JBQ0YsY0FBYztnQkFDZCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFbEIsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7UUFBQyxPQUFPLEtBQUssRUFBRTtTQUVmO0lBQ0wsQ0FBQzs7OztJQUVELGNBQWM7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO0lBRUwsQ0FBQzs7OztJQUVELGVBQWU7O2NBQ0wsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Y0FDeEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Y0FDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTtRQUVwQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDdEM7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBVztRQUNqQiwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDaEIsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFHRCxZQUFZO1FBQ1IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O3NCQUNuQixNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTs7c0JBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVzs7c0JBRXpCLElBQUksR0FBRztvQkFDVCxNQUFNLEVBQUUsQ0FBQztvQkFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVTtvQkFDckUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVU7aUJBQ3ZFO2dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7YUFBTTtZQUNILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O3NCQUNuQixNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTs7c0JBQ3hCLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFOztzQkFDdkIsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7O29CQUN0RCxDQUFDO2dCQUVMLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDVCxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDMUI7cUJBQU07b0JBQ0gsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDVDs7c0JBRUssSUFBSSxHQUFHO29CQUNULE1BQU0sRUFBRSxDQUFDO29CQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVO29CQUNyRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVTtpQkFDdkU7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUI7U0FDSjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7a0JBQ3RCLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFOztnQkFDM0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNSLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzVCOztrQkFDSyxJQUFJLEdBQUc7Z0JBQ1QsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVO2dCQUMvRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVU7YUFDakY7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUVMLENBQUM7Ozs7Ozs7SUFFRCxPQUFPLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBRSxRQUFhOztZQUM3QixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUM7O2NBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUzs7Y0FDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7Y0FDL0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztjQUM1QixLQUFLLEdBQUcsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7O1lBQ2xFLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXOztZQUNwRCxLQUFLO1FBR1QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDN0I7UUFFRCxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDWixNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2pDO1FBRUQsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLE9BQU8sRUFBRTtnQkFDVCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7b0JBQ2IsS0FBSyxHQUFHLEVBQUUsQ0FBQztpQkFDZDthQUNKO2lCQUFNO2dCQUNILElBQUksUUFBUSxFQUFFO29CQUNWLEtBQUssSUFBSSxDQUFDLENBQUM7aUJBQ2Q7Z0JBQ0QsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO29CQUNkLEtBQUssR0FBRyxDQUFDLENBQUM7aUJBQ2I7YUFDSjtTQUNKO2FBQU07WUFDSCxJQUFJLE9BQU8sRUFBRTtnQkFDVCxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDcEMsS0FBSyxHQUFHLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDNUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUNoRDtpQkFBTTtnQkFDSCxJQUFJLFFBQVEsRUFBRTtvQkFDVixLQUFLLElBQUksQ0FBQyxDQUFDO2lCQUNkO2dCQUNELElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtvQkFDZCxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUNiO2FBQ0o7U0FDSjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDSCxJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLENBQUM7YUFDeEU7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO2FBQy9FO1NBQ0o7O2NBRUssR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Y0FDckQsR0FBRyxHQUFHLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDOztjQUNyRCxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNOztjQUMvQixHQUFHLEdBQUcsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU07UUFFckMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFOUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtnQkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUN4QztpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7YUFBTTtZQUNILElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtnQkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUMxQztpQkFBTTtnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0o7SUFDTCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFROztZQUNQLElBQUksR0FBRyxDQUFDOztZQUNSLEdBQUcsR0FBRyxDQUFDO1FBRVgsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFO1lBQ2xCLEdBQUc7Z0JBQ0MsSUFBSSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO2FBQ3hCLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUU7U0FDcEM7UUFDRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBT0QsVUFBVSxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUEvYkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHkzSUFBMEM7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQzNDOzs7O1lBekJHLFVBQVU7WUFDVixTQUFTO3lDQTRFeUQsTUFBTSxTQUFDLFdBQVc7Ozt5QkFqRG5GLFNBQVMsU0FBQyxZQUFZOzJCQUN0QixTQUFTLFNBQUMsY0FBYztvQkFFeEIsU0FBUyxTQUFDLE9BQU87a0JBQ2pCLFNBQVMsU0FBQyxLQUFLO2dCQUNmLFNBQVMsU0FBQyxHQUFHO21CQUNiLFNBQVMsU0FBQyxNQUFNO2lCQUNoQixTQUFTLFNBQUMsSUFBSTtpQkFDZCxTQUFTLFNBQUMsSUFBSTtzQkFDZCxTQUFTLFNBQUMsU0FBUzt5QkFFbkIsS0FBSyxTQUFDLFlBQVk7d0JBQ2xCLEtBQUssU0FBQyxXQUFXOzBCQUNqQixLQUFLLFNBQUMsYUFBYTtvQkFDbkIsS0FBSyxTQUFDLE9BQU87dUJBQ2IsS0FBSyxTQUFDLFVBQVU7d0JBQ2hCLEtBQUssU0FBQyxXQUFXOzBCQUNqQixLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUVMLE1BQU07MEJBNkNOLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFuRXJDLDBDQUF1RDs7SUFDdkQsNENBQTJEOztJQUUzRCxxQ0FBNkM7O0lBQzdDLG1DQUF5Qzs7SUFDekMsaUNBQXFDOztJQUNyQyxvQ0FBMkM7O0lBQzNDLGtDQUF1Qzs7SUFDdkMsa0NBQXVDOztJQUN2Qyx1Q0FBaUQ7O0lBRWpELDBDQUErQzs7SUFDL0MseUNBQTZDOztJQUM3QywyQ0FBc0Q7O0lBQ3RELHFDQUFrQzs7SUFDbEMsd0NBQXlDOztJQUN6Qyx5Q0FBNkM7O0lBQzdDLDJDQUFvQzs7SUFDcEMsd0NBQTBCOztJQUMxQix3Q0FBdUI7O0lBQ3ZCLDRDQUE4Qjs7SUFFOUIsMkNBQXlFOztJQUV6RSx3Q0FBcUI7O0lBQ3JCLDJDQUFvRTs7SUFDcEUseUNBQWtCOztJQUVsQix3Q0FBaUU7O0lBQ2pFLDZDQUEwQjs7SUFFMUIsMENBQWlCOztJQUNqQiwyQ0FBa0I7O0lBQ2xCLDJDQUFpQjs7SUFDakIsMENBQWdCOztJQUNoQix3Q0FBK0I7O0lBQy9CLHlDQUF1Qjs7SUFFdkIsMENBQXFCOztJQUNyQiw0Q0FBdUI7O0lBQ3ZCLDZDQUE0RDs7SUFDNUQsd0NBQWM7O0lBR2QsOENBQStDOztJQUMvQyw4Q0FBK0U7O0lBQy9FLDhDQUE4RTs7SUFDOUUsNENBQXlFOztJQTRYekUsMENBQXlDOztJQUN6QywyQ0FBb0M7O0lBM1h4QixvQ0FBdUI7O0lBQUUsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIElucHV0LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIFJlbmRlcmVyMixcclxuICAgIE9uSW5pdCxcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgSW5qZWN0LFxyXG4gICAgUExBVEZPUk1fSUQsXHJcbiAgICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gICAgSG9zdExpc3RlbmVyLFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5leHBvcnQgY29uc3QgVElNRV9QSVJDS0VSX1ZBTFVFX0FDQ0VTU09UOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENsb2NrUGlja2VyQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21kYi10aW1lLXBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGltZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtUSU1FX1BJUkNLRVJfVkFMVUVfQUNDRVNTT1RdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICAgIEBWaWV3Q2hpbGQoJ2hvdXJzUGxhdGUnKSBwdWJsaWMgaG91cnNQbGF0ZTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ21pbnV0ZXNQbGF0ZScpIHB1YmxpYyBtaW51dGVzUGxhdGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgncGxhdGUnKSBwdWJsaWMgcGxhdGU6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdzdmcnKSBwdWJsaWMgc3ZnOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnZycpIHB1YmxpYyBnOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnaGFuZCcpIHB1YmxpYyBoYW5kOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnZmcnKSBwdWJsaWMgZmc6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdiZycpIHB1YmxpYyBiZzogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ2JlYXJpbmcnKSBwdWJsaWMgYmVhcmluZzogRWxlbWVudFJlZjtcclxuXHJcbiAgICBASW5wdXQoJ3R3ZWx2ZWhvdXInKSBwdWJsaWMgdHdlbHZlaG91ciA9IGZhbHNlO1xyXG4gICAgQElucHV0KCdkYXJrdGhlbWUnKSBwdWJsaWMgZGFya3RoZW1lID0gZmFsc2U7XHJcbiAgICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcHVibGljIHBsYWNlaG9sZGVyOiBTdHJpbmcgPSAnJztcclxuICAgIEBJbnB1dCgnbGFiZWwnKSBwdWJsaWMgbGFiZWwgPSAnJztcclxuICAgIEBJbnB1dCgnZHVyYXRpb24nKSBwdWJsaWMgZHVyYXRpb24gPSAzMDA7XHJcbiAgICBASW5wdXQoJ3Nob3dDbG9jaycpIHB1YmxpYyBzaG93Q2xvY2sgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBidXR0b25MYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHRhYkluZGV4OiBhbnk7XHJcbiAgICBASW5wdXQoKSBvdXRsaW5lSW5wdXQgPSBmYWxzZTtcclxuXHJcbiAgICBAT3V0cHV0KCkgdGltZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgaXNNb2JpbGU6IGFueSA9IG51bGw7XHJcbiAgICB0b3VjaERldmljZSA9ICgnb250b3VjaHN0YXJ0JyBpbiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIGFueSkpO1xyXG4gICAgc2hvd0hvdXJzID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvY2twaWNrZXInKTtcclxuICAgIHB1YmxpYyBlbGVtZW50TnVtYmVyOiBhbnk7XHJcblxyXG4gICAgZGlhbFJhZGl1cyA9IDEzNTtcclxuICAgIG91dGVyUmFkaXVzID0gMTEwO1xyXG4gICAgaW5uZXJSYWRpdXMgPSA4MDtcclxuICAgIHRpY2tSYWRpdXMgPSAyMDtcclxuICAgIGRpYW1ldGVyID0gdGhpcy5kaWFsUmFkaXVzICogMjtcclxuICAgIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XHJcblxyXG4gICAgaG91cnNUaWNrczogYW55ID0gW107XHJcbiAgICBtaW51dGVzVGlja3M6IGFueSA9IFtdO1xyXG4gICAgc2VsZWN0ZWRIb3VyczogYW55ID0geyAnaCc6ICcxMicsICdtJzogJzAwJywgJ2FtcG0nOiAnQU0nIH07XHJcbiAgICBlbmRIb3VycyA9ICcnO1xyXG5cclxuXHJcbiAgICB0b3VjaFN1cHBvcnRlZDogYW55ID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xyXG4gICAgbW91c2Vkb3duRXZlbnQ6IGFueSA9ICdtb3VzZWRvd24nICsgKHRoaXMudG91Y2hTdXBwb3J0ZWQgPyAnIHRvdWNoc3RhcnQnIDogJycpO1xyXG4gICAgbW91c2Vtb3ZlRXZlbnQ6IGFueSA9ICdtb3VzZW1vdmUnICsgKHRoaXMudG91Y2hTdXBwb3J0ZWQgPyAnIHRvdWNobW92ZScgOiAnJyk7XHJcbiAgICBtb3VzZXVwRXZlbnQ6IGFueSA9ICdtb3VzZXVwJyArICh0aGlzLnRvdWNoU3VwcG9ydGVkID8gJyB0b3VjaGVuZCcgOiAnJyk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW06IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xyXG4gICAgICAgIHJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDbG9jayAmJlxyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Nsb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BpY2tlcl9faG9sZGVyJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Nsb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSkgb250b3VjaG1vdmUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIC8vIFJvdGF0aW5nIFRpbWUgUGlja2VyIG9uIG1vYmlsZVxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb2NrcGlja2VyLWRpYWwnKSkge1xyXG4gICAgICAgICAgICAodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb2NrcGlja2VyLXRpY2snKSBhcyBhbnkpLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDAsIDE1MCwgMTM2LCAwJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlZG93bihldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVUaWNrKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9ja3BpY2tlci1wbGF0ZScpLCAnbW91c2Vkb3duJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZWRvd24oZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgIC8vIEZpeCBmb3IgdmlzaWJsZSBkYXRlIC8gdGltZSBwaWNrZXIgaW5wdXQgd2hlbiBwaWNrZXIgcGxhdGUgaXMgdmlzaWJsZS5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5lZFBpY2tlcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpY2tlci0tb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxQaWNrZXJzOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGlja2VyJyk7XHJcbiAgICAgICAgICAgICAgICBhbGxQaWNrZXJzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwgJ3otaW5kZXgnLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG9wZW5lZFBpY2tlciwgJ3otaW5kZXgnLCAnMTAwMCcpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRHJhdygpIHtcclxuICAgICAgICBsZXQgdmFsdWU7XHJcbiAgICAgICAgY29uc3QgaXNIb3VycyA9IHRoaXMuc2hvd0hvdXJzO1xyXG4gICAgICAgIGlmIChpc0hvdXJzKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodGhpcy5zZWxlY3RlZEhvdXJzLmgsIDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodGhpcy5zZWxlY3RlZEhvdXJzLm0sIDApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHVuaXQgPSBNYXRoLlBJIC8gKGlzSG91cnMgPyA2IDogMzApLFxyXG4gICAgICAgICAgICByYWRpYW4gPSB2YWx1ZSAqIHVuaXQsXHJcbiAgICAgICAgICAgIHJhZGl1cyA9IGlzSG91cnMgJiYgdmFsdWUgPiAwICYmIHZhbHVlIDwgMTMgPyB0aGlzLmlubmVyUmFkaXVzIDogdGhpcy5vdXRlclJhZGl1cyxcclxuICAgICAgICAgICAgeGQgPSBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzLFxyXG4gICAgICAgICAgICB5ZCA9IC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cztcclxuICAgICAgICB0aGlzLnNldEhhbmQoeGQsIHlkLCBmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlZG93bihlOiBhbnksIHNwYWNlPzogYW55KSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5wbGF0ZS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICBpc1RvdWNoID0gL150b3VjaC8udGVzdChlLnR5cGUpLFxyXG4gICAgICAgICAgICB4MCA9IG9mZnNldC5sZWZ0ICsgdGhpcy5kaWFsUmFkaXVzLFxyXG4gICAgICAgICAgICB5MCA9IG9mZnNldC50b3AgKyB0aGlzLmRpYWxSYWRpdXMsXHJcbiAgICAgICAgICAgIGR4ID0gKGlzVG91Y2ggPyBlLnRvdWNoZXNbMF0gOiBlKS5jbGllbnRYIC0geDAsXHJcbiAgICAgICAgICAgIGR5ID0gKGlzVG91Y2ggPyBlLnRvdWNoZXNbMF0gOiBlKS5jbGllbnRZIC0geTAsXHJcbiAgICAgICAgICAgIHogPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgICAgIGxldCBtb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoc3BhY2UgJiYgKHogPCB0aGlzLm91dGVyUmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzIHx8IHogPiB0aGlzLm91dGVyUmFkaXVzICsgdGhpcy50aWNrUmFkaXVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0hvdXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SGFuZChkeCwgZHksIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SGFuZChkeCwgZHksIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1vdXNlbW92ZUV2ZW50TWV0aG9kID0gKGV2ZW50OiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHgwLFxyXG4gICAgICAgICAgICAgICAgeSA9IGV2ZW50LmNsaWVudFkgLSB5MDtcclxuICAgICAgICAgICAgaWYgKCFtb3ZlZCAmJiB4ID09PSBkeCAmJiB5ID09PSBkeSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SGFuZCh4LCB5LCBmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbW91c2V1cEV2ZW50TWV0aG9kID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdXNlbW92ZUV2ZW50LCBtb3VzZW1vdmVFdmVudE1ldGhvZCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSB4MCxcclxuICAgICAgICAgICAgICAgIHkgPSBldmVudC5jbGllbnRYIC0geTA7XHJcbiAgICAgICAgICAgIGlmICgoc3BhY2UgfHwgbW92ZWQpICYmIHggPT09IGR4ICYmIHkgPT09IGR5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhhbmQoeCwgeSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01pbnV0ZXNDbG9jaygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW91c2V1cEV2ZW50LCBtb3VzZXVwRXZlbnRNZXRob2QpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdXNlbW92ZUV2ZW50LCBtb3VzZW1vdmVFdmVudE1ldGhvZCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNldXBFdmVudE1ldGhvZCk7XHJcbiAgICB9XHJcbiAgICBoaWRlS2V5Ym9hcmQoKSB7XHJcbiAgICAgICAgLy8gdGhpcyBzZXQgdGltZW91dCBuZWVkZWQgZm9yIGNhc2Ugd2hlbiBoaWRlS2V5Ym9yYWRcclxuICAgICAgICAvLyBpcyBjYWxsZWQgaW5zaWRlIG9mICdvbmZvY3VzJyBldmVudCBoYW5kbGVyXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGluZyB0ZW1wIGZpZWxkXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsIGZpZWxkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UmVmZXJlbmNlID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0UmVmZXJlbmNlLCAndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbnB1dFJlZmVyZW5jZSwgJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbnB1dFJlZmVyZW5jZSwgJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbnB1dFJlZmVyZW5jZSwgJy13ZWJraXQtdXNlci1tb2RpZnknLCAncmVhZC13cml0ZS1wbGFpbnRleHQtb25seScpO1xyXG4gICAgICAgICAgICAgICAgLy8gLy8gaGlkaW5nIHRlbXAgZmllbGQgZnJvbSBwZW9wbGVzIGV5ZXNcclxuICAgICAgICAgICAgICAgIC8vIC8vIC13ZWJraXQtdXNlci1tb2RpZnkgaXMgbmVzc2VzYXJ5IGZvciBBbmRyb2lkIDQueFxyXG4gICAgICAgICAgICAgICAgLy8gYWRkaW5nIG9uZm9jdXMgZXZlbnQgaGFuZGxlciBmb3Igb3V0IHRlbXAgZmllbGRcclxuICAgICAgICAgICAgICAgIGZpZWxkLm9uZm9jdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB0aW1lb3V0IG9mIDIwMG1zIGlzIG5lc3Nhc2FyeSBmb3IgQW5kcm9pZCAyLjMueFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShmaWVsZCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsIGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vIGZvY3VzaW5nIGl0XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5CdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hvd0Nsb2NrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNob3dIb3VycyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVja0RyYXcoKTtcclxuICAgICAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVLZXlib2FyZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VCdG5DbGlja2VkKCkge1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLnNlbGVjdGVkSG91cnMuaDtcclxuICAgICAgICBjb25zdCBtID0gdGhpcy5zZWxlY3RlZEhvdXJzLm07XHJcbiAgICAgICAgY29uc3QgYW1wbSA9IHRoaXMuc2VsZWN0ZWRIb3Vycy5hbXBtO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50d2VsdmVob3VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kSG91cnMgPSBoICsgJzonICsgbSArIGFtcG07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRIb3VycyA9IGggKyAnOicgKyBtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IodGhpcy5lbmRIb3Vycyk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgICAgIHRoaXMudGltZUNoYW5nZWQuZW1pdCh0aGlzLmVuZEhvdXJzKTtcclxuICAgICAgICB0aGlzLnNob3dDbG9jayA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVGltZUlucHV0KCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIb3VycyA9IHsgJ2gnOiAnMTInLCAnbSc6ICcwMCcsICdhbXBtJzogJ0FNJyB9O1xyXG4gICAgICAgIHRoaXMuZW5kSG91cnMgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBzZXRIb3VyKGhvdXI6IFN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIb3Vycy5oID0gaG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNaW51dGUobWluOiBTdHJpbmcpIHtcclxuICAgICAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSG91cnMubSA9IG1pbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbVBtKGFtcG06IFN0cmluZykge1xyXG4gICAgICAgIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIb3Vycy5hbXBtID0gYW1wbTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93SG91cnNDbG9jaygpIHtcclxuICAgICAgICB0aGlzLnNob3dIb3VycyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVja0RyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TWludXRlc0Nsb2NrKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0hvdXJzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaGVja0RyYXcoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2VuZXJhdGVUaWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYWRpYW4gPSBpIC8gNiAqIE1hdGguUEk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYWRpdXMgPSB0aGlzLm91dGVyUmFkaXVzO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpY2sgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2hvdXInOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogdGhpcy5kaWFsUmFkaXVzICsgTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cyAtIHRoaXMudGlja1JhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICAndG9wJzogdGhpcy5kaWFsUmFkaXVzIC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cyAtIHRoaXMudGlja1JhZGl1cyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXJzVGlja3MucHVzaCh0aWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFkaWFuID0gaSAvIDYgKiBNYXRoLlBJO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5uZXIgPSBpID4gMCAmJiBpIDwgMTM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYWRpdXMgPSBpbm5lciA/IHRoaXMuaW5uZXJSYWRpdXMgOiB0aGlzLm91dGVyUmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBoID0gJzAnICsgaS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdob3VyJzogaCxcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IHRoaXMuZGlhbFJhZGl1cyArIE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IHRoaXMuZGlhbFJhZGl1cyAtIE1hdGguY29zKHJhZGlhbikgKiByYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3Vyc1RpY2tzLnB1c2godGljayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkgKz0gNSkge1xyXG4gICAgICAgICAgICBjb25zdCByYWRpYW4gPSBpIC8gMzAgKiBNYXRoLlBJO1xyXG4gICAgICAgICAgICBsZXQgbWluID0gaS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAoaSA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBtaW4gPSAnMCcgKyBpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGljayA9IHtcclxuICAgICAgICAgICAgICAgICdtaW4nOiBtaW4sXHJcbiAgICAgICAgICAgICAgICAnbGVmdCc6IHRoaXMuZGlhbFJhZGl1cyArIE1hdGguc2luKHJhZGlhbikgKiB0aGlzLm91dGVyUmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgJ3RvcCc6IHRoaXMuZGlhbFJhZGl1cyAtIE1hdGguY29zKHJhZGlhbikgKiB0aGlzLm91dGVyUmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLm1pbnV0ZXNUaWNrcy5wdXNoKHRpY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0SGFuZCh4OiBhbnksIHk6IGFueSwgcm91bmRCeTU6IGFueSkge1xyXG4gICAgICAgIGxldCByYWRpYW4gPSBNYXRoLmF0YW4yKHgsIC0geSk7XHJcbiAgICAgICAgY29uc3QgaXNIb3VycyA9IHRoaXMuc2hvd0hvdXJzO1xyXG4gICAgICAgIGNvbnN0IHVuaXQgPSBNYXRoLlBJIC8gKGlzSG91cnMgfHwgcm91bmRCeTUgPyA2IDogMzApO1xyXG4gICAgICAgIGNvbnN0IHogPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XHJcbiAgICAgICAgY29uc3QgaW5uZXIgPSBpc0hvdXJzICYmIHogPCAodGhpcy5vdXRlclJhZGl1cyArIHRoaXMuaW5uZXJSYWRpdXMpIC8gMjtcclxuICAgICAgICBsZXQgcmFkaXVzID0gaW5uZXIgPyB0aGlzLmlubmVyUmFkaXVzIDogdGhpcy5vdXRlclJhZGl1cztcclxuICAgICAgICBsZXQgdmFsdWU7XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93SG91cnMpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh0aGlzLnNlbGVjdGVkSG91cnMuaCwgMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh0aGlzLnNlbGVjdGVkSG91cnMubSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50d2VsdmVob3VyKSB7XHJcbiAgICAgICAgICAgIHJhZGl1cyA9IHRoaXMub3V0ZXJSYWRpdXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmFkaWFuIDwgMCkge1xyXG4gICAgICAgICAgICByYWRpYW4gPSBNYXRoLlBJICogMiArIHJhZGlhbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZChyYWRpYW4gLyB1bml0KTtcclxuICAgICAgICByYWRpYW4gPSB2YWx1ZSAqIHVuaXQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcclxuICAgICAgICAgICAgaWYgKGlzSG91cnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gMTI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm91bmRCeTUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAqPSA1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSA2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpc0hvdXJzKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICFpbm5lciA/IHZhbHVlICsgMTIgOiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT09IDI0ID8gMCA6IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAoaW5uZXIgJiYgdmFsdWUgPT09IDApID8gMTIgOiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gKCFpbm5lciAmJiB2YWx1ZSA9PT0gMTIpID8gMCA6IHZhbHVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdW5kQnk1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKj0gNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gNjApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0hvdXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmcubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nsb2NrcGlja2VyLWNhbnZhcy1mZycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAlIDUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmcubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nsb2NrcGlja2VyLWNhbnZhcy1mZycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2xvY2twaWNrZXItY2FudmFzLWZnIGFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjeDEgPSBNYXRoLnNpbihyYWRpYW4pICogKHJhZGl1cyAtIHRoaXMudGlja1JhZGl1cyksXHJcbiAgICAgICAgICAgIGN5MSA9IC0gTWF0aC5jb3MocmFkaWFuKSAqIChyYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMpLFxyXG4gICAgICAgICAgICBjeDIgPSBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzLFxyXG4gICAgICAgICAgICBjeTIgPSAtIE1hdGguY29zKHJhZGlhbikgKiByYWRpdXM7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgneDInLCBjeDEpO1xyXG4gICAgICAgIHRoaXMuaGFuZC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgneTInLCBjeTEpO1xyXG4gICAgICAgIHRoaXMuYmcubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N4JywgY3gyKTtcclxuICAgICAgICB0aGlzLmJnLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeScsIGN5Mik7XHJcbiAgICAgICAgdGhpcy5mZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3gnLCBjeDIpO1xyXG4gICAgICAgIHRoaXMuZmcubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N5JywgY3kyKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0hvdXJzKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhvdXIoJzAnICsgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhvdXIodmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNaW51dGUoJzAnICsgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1pbnV0ZSh2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvZmZzZXQob2JqOiBhbnkpIHtcclxuICAgICAgICBsZXQgbGVmdCA9IDAsXHJcbiAgICAgICAgICAgIHRvcCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChvYmoub2Zmc2V0UGFyZW50KSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgKz0gb2JqLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgICAgICB0b3AgKz0gb2JqLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgfSB3aGlsZSAob2JqID0gb2JqLm9mZnNldFBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IGxlZnQsIHRvcCB9O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgb25DaGFuZ2VDYjogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuICAgIG9uVG91Y2hlZENiOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG5cclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5kSG91cnMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYiA9IGZuO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==