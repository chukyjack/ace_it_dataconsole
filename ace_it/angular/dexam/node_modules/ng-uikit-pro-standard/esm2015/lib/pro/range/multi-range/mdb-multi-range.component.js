/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
/** @type {?} */
export const RANGE_VALUE_ACCESOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MdbMultiRangeInputComponent)),
    multi: true
};
export class MdbMultiRangeInputComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.value = { first: 0, second: 0 };
        this.min = 0;
        this.max = 100;
        this.rangeValueChange = new EventEmitter();
        this.firstVisibility = false;
        this.secondVisibility = false;
        this.cloudRange = 0;
        // Control Value Accessor Methods
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => {
        });
        this.onTouched = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.range = this.value;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.steps = this.max - this.min;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    firstRangeInput(event) {
        this.rangeValueChange.emit(this.range);
        if (typeof this.range === 'object' && this.range.first == 0) {
            return this.range;
        }
        this.focusRangeInput('first');
        this.moveValueCloud(event, 'first');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    secondRangeInput(event) {
        this.rangeValueChange.emit(this.range);
        if (typeof this.range === 'object' && this.range.second == 0) {
            return this.range;
        }
        this.focusRangeInput('second');
        this.moveValueCloud(event, 'second');
    }
    /**
     * @private
     * @param {?} event
     * @param {?} element
     * @return {?}
     */
    moveValueCloud(event, element) {
        /** @type {?} */
        const newValue = event.target.value;
        /** @type {?} */
        const newRelativeGain = newValue - this.min;
        /** @type {?} */
        const inputWidth = element === 'first' ? this.firstInput.nativeElement.offsetWidth : this.secondInput.nativeElement.offsetWidth;
        /** @type {?} */
        let thumbOffset = 0;
        /** @type {?} */
        const offsetAmmount = 15;
        /** @type {?} */
        const distanceFromMiddle = newRelativeGain - (this.steps / 2);
        this.stepLength = inputWidth / this.steps;
        thumbOffset = (distanceFromMiddle / this.steps) * offsetAmmount;
        this.cloudRange = (this.stepLength * newRelativeGain) - thumbOffset;
        this.renderer.setStyle(element === 'first' ?
            this.firstRangeCloud.nativeElement :
            this.secondRangeCloud.nativeElement, 'left', this.cloudRange + 'px');
    }
    /**
     * @param {?} element
     * @return {?}
     */
    focusRangeInput(element) {
        if (this.checkIfSafari()) {
            element === 'first' ? this.firstInput.nativeElement.focus() : this.secondInput.nativeElement.focus();
        }
        element === 'first' ? this.firstVisibility = true : this.secondVisibility = true;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    blurRangeInput(element) {
        if (this.checkIfSafari()) {
            element === 'first' ? this.firstInput.nativeElement.blur() : this.secondInput.nativeElement.blur();
        }
        element === 'first' ? this.firstVisibility = false : this.secondVisibility = false;
    }
    /**
     * @return {?}
     */
    checkIfSafari() {
        /** @type {?} */
        const isSafari = navigator.userAgent.indexOf('Safari') > -1;
        /** @type {?} */
        const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
        /** @type {?} */
        const isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
        /** @type {?} */
        const isOpera = navigator.userAgent.indexOf('Opera') > -1;
        if (isSafari && !isChrome && !isFirefox && !isOpera) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.range = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
MdbMultiRangeInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-multi-range-input',
                template: "<div class=\"multi-range-field my-5 pb-5\">\n  <div class=\"range-field\" #rangeField>\n    <div class=\"track\">\n      <div #firstRangeCloud class=\"range-cloud\" title=\"range\"\n           [ngClass]=\"{'visible': this.firstVisibility, 'hidden': !this.firstVisibility}\">\n        <span class=\"text-transform\">{{range.first}}</span>\n      </div>\n    </div>\n    <input #firstInput\n           [value]=\"value.first\"\n           [attr.value]=\"value.first\"\n           [name]=\"name\"\n           [id]=\"id\"\n           [min]=\"min\"\n           [max]=\"max\"\n           [step]=\"step\"\n           [disabled]=\"disabled\"\n           type=\"range\"\n           class=\"mdbMultiRange original active\"\n           (input)=\"firstRangeInput($event)\"\n           [(ngModel)]=\"range.first\"\n           (focus)=\"this.firstVisibility = true\"\n           (blur)=\"this.firstVisibility = false; blurRangeInput('first')\"\n           (touchend)=\"blurRangeInput('first')\"\n           (click)=\"focusRangeInput('first')\">\n\n\n    <div class=\"track\">\n      <div #secondRangeCloud class=\"range-cloud\" title=\"range\"\n           [ngClass]=\"{'visible': this.secondVisibility, 'hidden': !this.secondVisibility}\">\n        <span class=\"text-transform\">{{range.second}}</span>\n      </div>\n    </div>\n    <input #secondInput\n           [value]=\"value.second\"\n           [attr.value]=\"value.second\"\n           [name]=\"name\"\n           [id]=\"id\"\n           [min]=\"min\"\n           [max]=\"max\"\n           [step]=\"step\"\n           [disabled]=\"disabled\"\n           type=\"range\"\n           class=\"mdbMultiRange original ghost active\"\n           (input)=\"secondRangeInput($event)\"\n           [(ngModel)]=\"range.second\"\n           (focus)=\"this.secondVisibility = true\"\n           (blur)=\"this.secondVisibility = false; blurRangeInput('second')\"\n           (touchend)=\"blurRangeInput('second')\"\n           (click)=\"focusRangeInput('second')\">\n  </div>\n</div>\n",
                providers: [RANGE_VALUE_ACCESOR]
            }] }
];
/** @nocollapse */
MdbMultiRangeInputComponent.ctorParameters = () => [
    { type: Renderer2 }
];
MdbMultiRangeInputComponent.propDecorators = {
    id: [{ type: Input }],
    required: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    rangeValueChange: [{ type: Output }],
    firstInput: [{ type: ViewChild, args: ['firstInput',] }],
    secondInput: [{ type: ViewChild, args: ['secondInput',] }],
    firstRangeCloud: [{ type: ViewChild, args: ['firstRangeCloud',] }],
    secondRangeCloud: [{ type: ViewChild, args: ['secondRangeCloud',] }],
    rangeField: [{ type: ViewChild, args: ['rangeField',] }]
};
if (false) {
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.id;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.required;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.name;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.value;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.disabled;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.min;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.max;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.step;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.rangeValueChange;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.firstInput;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.secondInput;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.firstRangeCloud;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.secondRangeCloud;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.rangeField;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.range;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.steps;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.stepLength;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.firstVisibility;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.secondVisibility;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.cloudRange;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.onChange;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    MdbMultiRangeInputComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLW11bHRpLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vcmFuZ2UvbXVsdGktcmFuZ2UvbWRiLW11bHRpLXJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztBQUV2RSxNQUFNLE9BQU8sbUJBQW1CLEdBQVE7SUFDdEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsMkJBQTJCLEVBQUM7SUFDMUQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQVFELE1BQU0sT0FBTywyQkFBMkI7Ozs7SUEwQnRDLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUF0QjlCLFVBQUssR0FBd0QsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQTtRQUVsRixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUdULHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFxQyxDQUFDO1FBWW5GLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQUcsQ0FBQyxDQUFDOztRQW1GZixhQUFROzs7O1FBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUN0QixDQUFDLEVBQUM7UUFDRixjQUFTOzs7UUFBRyxHQUFHLEVBQUU7UUFDakIsQ0FBQyxFQUFDO0lBbkZGLENBQUM7Ozs7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aW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5leHBvcnQgY29uc3QgUkFOR0VfVkFMVUVfQUNDRVNPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWRiTXVsdGlSYW5nZUlucHV0Q29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1tdWx0aS1yYW5nZS1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnbWRiLW11bHRpLXJhbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbUkFOR0VfVkFMVUVfQUNDRVNPUl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNZGJNdWx0aVJhbmdlSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiB7IGZpcnN0OiBudW1iZXIgfCBzdHJpbmcsIHNlY29uZDogbnVtYmVyIHwgc3RyaW5nIH0gPSB7Zmlyc3Q6IDAsIHNlY29uZDogMH1cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbiA9IDA7XG4gIEBJbnB1dCgpIG1heCA9IDEwMDtcbiAgQElucHV0KCkgc3RlcDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSByYW5nZVZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGZpcnN0OiBudW1iZXIsIHNlY29uZDogbnVtYmVyIH0+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZmlyc3RJbnB1dCcpIGZpcnN0SW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NlY29uZElucHV0Jykgc2Vjb25kSW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2ZpcnN0UmFuZ2VDbG91ZCcpIGZpcnN0UmFuZ2VDbG91ZDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2Vjb25kUmFuZ2VDbG91ZCcpIHNlY29uZFJhbmdlQ2xvdWQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3JhbmdlRmllbGQnKSByYW5nZUZpZWxkOiBFbGVtZW50UmVmO1xuXG4gIHJhbmdlOiBhbnk7XG5cbiAgc3RlcHM6IG51bWJlcjtcbiAgc3RlcExlbmd0aDogbnVtYmVyO1xuICBmaXJzdFZpc2liaWxpdHkgPSBmYWxzZTtcbiAgc2Vjb25kVmlzaWJpbGl0eSA9IGZhbHNlO1xuICBjbG91ZFJhbmdlID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmFuZ2UgPSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc3RlcHMgPSB0aGlzLm1heCAtIHRoaXMubWluO1xuICB9XG5cbiAgZmlyc3RSYW5nZUlucHV0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnJhbmdlVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnJhbmdlKTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5yYW5nZSA9PT0gJ29iamVjdCcgJiYgdGhpcy5yYW5nZS5maXJzdCA9PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5nZTtcbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzUmFuZ2VJbnB1dCgnZmlyc3QnKTtcbiAgICB0aGlzLm1vdmVWYWx1ZUNsb3VkKGV2ZW50LCAnZmlyc3QnKTtcbiAgfVxuXG4gIHNlY29uZFJhbmdlSW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMucmFuZ2VWYWx1ZUNoYW5nZS5lbWl0KHRoaXMucmFuZ2UpO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnJhbmdlID09PSAnb2JqZWN0JyAmJiB0aGlzLnJhbmdlLnNlY29uZCA9PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5nZTtcbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzUmFuZ2VJbnB1dCgnc2Vjb25kJyk7XG4gICAgdGhpcy5tb3ZlVmFsdWVDbG91ZChldmVudCwgJ3NlY29uZCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlVmFsdWVDbG91ZChldmVudDogYW55LCBlbGVtZW50OiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuZXdSZWxhdGl2ZUdhaW4gPSBuZXdWYWx1ZSAtIHRoaXMubWluO1xuICAgIGNvbnN0IGlucHV0V2lkdGggPSBlbGVtZW50ID09PSAnZmlyc3QnID8gdGhpcy5maXJzdElucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggOiB0aGlzLnNlY29uZElucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICBsZXQgdGh1bWJPZmZzZXQgPSAwO1xuICAgIGNvbnN0IG9mZnNldEFtbW91bnQgPSAxNTtcbiAgICBjb25zdCBkaXN0YW5jZUZyb21NaWRkbGUgPSBuZXdSZWxhdGl2ZUdhaW4gLSAodGhpcy5zdGVwcyAvIDIpO1xuXG4gICAgdGhpcy5zdGVwTGVuZ3RoID0gaW5wdXRXaWR0aCAvIHRoaXMuc3RlcHM7XG5cbiAgICB0aHVtYk9mZnNldCA9IChkaXN0YW5jZUZyb21NaWRkbGUgLyB0aGlzLnN0ZXBzKSAqIG9mZnNldEFtbW91bnQ7XG4gICAgdGhpcy5jbG91ZFJhbmdlID0gKHRoaXMuc3RlcExlbmd0aCAqIG5ld1JlbGF0aXZlR2FpbikgLSB0aHVtYk9mZnNldDtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCA9PT0gJ2ZpcnN0JyA/XG4gICAgICB0aGlzLmZpcnN0UmFuZ2VDbG91ZC5uYXRpdmVFbGVtZW50IDpcbiAgICAgIHRoaXMuc2Vjb25kUmFuZ2VDbG91ZC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2xlZnQnLCB0aGlzLmNsb3VkUmFuZ2UgKyAncHgnKTtcbiAgfVxuXG4gIGZvY3VzUmFuZ2VJbnB1dChlbGVtZW50OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jaGVja0lmU2FmYXJpKCkpIHtcbiAgICAgIGVsZW1lbnQgPT09ICdmaXJzdCcgPyB0aGlzLmZpcnN0SW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpIDogdGhpcy5zZWNvbmRJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICAgIGVsZW1lbnQgPT09ICdmaXJzdCcgPyB0aGlzLmZpcnN0VmlzaWJpbGl0eSA9IHRydWUgOiB0aGlzLnNlY29uZFZpc2liaWxpdHkgPSB0cnVlO1xuICB9XG5cbiAgYmx1clJhbmdlSW5wdXQoZWxlbWVudDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tJZlNhZmFyaSgpKSB7XG4gICAgICBlbGVtZW50ID09PSAnZmlyc3QnID8gdGhpcy5maXJzdElucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpIDogdGhpcy5zZWNvbmRJbnB1dC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gICAgZWxlbWVudCA9PT0gJ2ZpcnN0JyA/IHRoaXMuZmlyc3RWaXNpYmlsaXR5ID0gZmFsc2UgOiB0aGlzLnNlY29uZFZpc2liaWxpdHkgPSBmYWxzZTtcbiAgfVxuXG4gIGNoZWNrSWZTYWZhcmkoKSB7XG4gICAgY29uc3QgaXNTYWZhcmkgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpID4gLTE7XG4gICAgY29uc3QgaXNDaHJvbWUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZScpID4gLTE7XG4gICAgY29uc3QgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMTtcbiAgICBjb25zdCBpc09wZXJhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdPcGVyYScpID4gLTE7XG5cbiAgICBpZiAoaXNTYWZhcmkgJiYgIWlzQ2hyb21lICYmICFpc0ZpcmVmb3ggJiYgIWlzT3BlcmEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gQ29udHJvbCBWYWx1ZSBBY2Nlc3NvciBNZXRob2RzXG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge1xuICB9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7XG4gIH07XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucmFuZ2UgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIl19