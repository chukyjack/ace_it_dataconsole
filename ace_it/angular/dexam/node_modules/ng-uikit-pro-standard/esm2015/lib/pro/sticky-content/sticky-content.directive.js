/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
import { Directive, ElementRef, Input } from '@angular/core';
import { computedStyle } from './computed.style';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
export class MdbStickyDirective {
    /**
     * @param {?} el
     * @param {?} platformId
     */
    constructor(el, platformId) {
        // css selector to be sticky after
        this.isBrowser = false;
        this.stickyOffsetTop = 0;
        this.scrollHandler = (/**
         * @return {?}
         */
        () => {
            // let elRect: ClientRect = this.el.getBoundingClientRect();
            /** @type {?} */
            const parentRect = this.el.parentElement.getBoundingClientRect();
            /** @type {?} */
            const bodyRect = document.body.getBoundingClientRect();
            /** @type {?} */
            let dynProps;
            if (this.original.float === 'right') {
                /** @type {?} */
                const right = bodyRect.right - parentRect.right + this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (this.original.float === 'left') {
                /** @type {?} */
                const left = parentRect.left - bodyRect.left + this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                // console.log('parentRect..............', parentRect.width);
                dynProps = { width: parentRect.width + 'px' };
            }
            // console.log('dynProps', dynProps);
            if (this.original.marginTop + this.original.marginBottom +
                this.original.boundingClientRect.height + this.stickyOffsetTop >= parentRect.bottom) {
                // console.log('case 1 (absolute)', parentRect.bottom, this.original.marginBottom);
                /**
                 * stikcy element reached to the bottom of the container
                 * @type {?}
                 */
                const floatAdjustment = this.original.float === 'right' ? { right: 0 } :
                    this.original.float === 'left' ? { left: 0 } : {};
                Object.assign(this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + this.original.marginTop + this.stickyOffsetTop > this.original.offsetTop) {
                /**
                 * stikcy element is in the middle of container
                 */
                // console.log('case 2 (fixed)', parentRect.top * -1, this.original.marginTop, this.original.offsetTop);
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (this.original.float !== 'left' && this.original.float !== 'right' && !this.fillerEl) {
                    this.fillerEl = document.createElement('div');
                    this.fillerEl.style.height = this.el.offsetHeight + 'px';
                    this.parentEl.insertBefore(this.fillerEl, this.el);
                }
                Object.assign(this.el.style, {
                    position: 'fixed',
                    // fixed is a lot smoother than absolute
                    float: 'none',
                    top: this.stickyOffsetTop + 'px',
                    bottom: 'inherit'
                }, dynProps);
            }
            else {
                /**
                 * stikcy element is in the original position
                 */
                // console.log('case 3 (original)');
                if (this.fillerEl) {
                    this.parentEl.removeChild(this.fillerEl); // IE11 does not work with el.remove()
                    this.fillerEl = undefined;
                }
                Object.assign(this.el.style, {
                    position: this.original.position,
                    float: this.original.float,
                    top: this.original.top,
                    bottom: this.original.bottom,
                    width: this.original.width,
                    left: this.original.left
                }, dynProps);
            }
        });
        this.el = this.el = el.nativeElement;
        this.parentEl = this.el.parentElement;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            /** @type {?} */
            const cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        if (this.stickyAfterAlias) {
            /** @type {?} */
            const cetStickyAfterEl = document.querySelector(this.stickyAfterAlias);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        /** @type {?} */
        const allowedPositions = ['absolute', 'fixed', 'relative'];
        /** @type {?} */
        const parentElPosition = computedStyle(this.parentEl, 'position');
        if (allowedPositions.indexOf(parentElPosition) === -1) { // inherit, initial, unset
            this.parentEl.style.position = 'relative';
        }
        this.diff = {
            top: this.el.offsetTop - this.parentEl.offsetTop,
            left: this.el.offsetLeft - this.parentEl.offsetLeft
        };
        if (this.isBrowser) {
            /** @type {?} */
            const elRect = this.el.getBoundingClientRect();
            this.el.getBoundingClientRect();
            this.original = {
                boundingClientRect: elRect,
                position: computedStyle(this.el, 'position'),
                float: computedStyle(this.el, 'float'),
                top: computedStyle(this.el, 'top'),
                bottom: computedStyle(this.el, 'bottom'),
                width: computedStyle(this.el, 'width'),
                // left: computedStyle(this.el, 'left'),
                left: '',
                offsetTop: this.el.offsetTop,
                offsetLeft: this.el.offsetLeft,
                marginTop: parseInt(computedStyle(this.el, 'marginTop'), 10),
                marginBottom: parseInt(computedStyle(this.el, 'marginBottom'), 10),
                marginLeft: parseInt(computedStyle(this.el, 'marginLeft'), 10),
                marginRight: parseInt(computedStyle(this.el, 'marginLeft'), 10)
            };
        }
        this.attach();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.detach();
    }
    /**
     * @return {?}
     */
    attach() {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    }
    /**
     * @return {?}
     */
    detach() {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    }
}
MdbStickyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbSticky]'
            },] }
];
/** @nocollapse */
MdbStickyDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdbStickyDirective.propDecorators = {
    stickyAfter: [{ type: Input }],
    stickyAfterAlias: [{ type: Input, args: ['sticky-after',] }]
};
if (false) {
    /** @type {?} */
    MdbStickyDirective.prototype.stickyAfter;
    /** @type {?} */
    MdbStickyDirective.prototype.stickyAfterAlias;
    /** @type {?} */
    MdbStickyDirective.prototype.isBrowser;
    /** @type {?} */
    MdbStickyDirective.prototype.el;
    /** @type {?} */
    MdbStickyDirective.prototype.parentEl;
    /** @type {?} */
    MdbStickyDirective.prototype.fillerEl;
    /** @type {?} */
    MdbStickyDirective.prototype.stickyOffsetTop;
    /** @type {?} */
    MdbStickyDirective.prototype.diff;
    /** @type {?} */
    MdbStickyDirective.prototype.original;
    /** @type {?} */
    MdbStickyDirective.prototype.scrollHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zdGlja3ktY29udGVudC9zdGlja3ktY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTWxELE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBZ0I3QixZQUFZLEVBQWMsRUFBdUIsVUFBa0I7O1FBYm5FLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFRbEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUErRXBCLGtCQUFhOzs7UUFBRyxHQUFHLEVBQUU7OztrQkFFYixVQUFVLEdBQWUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O2tCQUN0RSxRQUFRLEdBQWUsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQzlELFFBQVE7WUFFWixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTs7c0JBQzdCLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXO2dCQUMzRSxRQUFRLEdBQUcsRUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBQyxDQUFDO2FBQ2xDO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUss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TSxTQUFDLFdBQVc7OzswQkFmOUMsS0FBSzsrQkFDTCxLQUFLLFNBQUMsY0FBYzs7OztJQURyQix5Q0FBNkI7O0lBQzdCLDhDQUFnRDs7SUFDaEQsdUNBQWtCOztJQUdsQixnQ0FBc0I7O0lBRXRCLHNDQUE0Qjs7SUFFNUIsc0NBQTRCOztJQUM1Qiw2Q0FBb0I7O0lBRXBCLGtDQUFVOztJQUNWLHNDQUFjOztJQTRFZCwyQ0FzRUUiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tcHV0ZWRTdHlsZX0gZnJvbSAnLi9jb21wdXRlZC5zdHlsZSc7XG5cbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1BMQVRGT1JNX0lELCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU3RpY2t5XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZGJTdGlja3lEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBzdGlja3lBZnRlcjogc3RyaW5nOyAgLy8gY3NzIHNlbGVjdG9yIHRvIGJlIHN0aWNreSBhZnRlclxuICBASW5wdXQoJ3N0aWNreS1hZnRlcicpIHN0aWNreUFmdGVyQWxpYXM6IHN0cmluZzsgIC8vIGNzcyBzZWxlY3RvciB0byBiZSBzdGlja3kgYWZ0ZXJcbiAgaXNCcm93c2VyID0gZmFsc2U7XG5cbiAgLy8gICBlbDogSFRNTEVsZW1lbnQ7XG4gIGVsOiBIVE1MRWxlbWVudCB8IGFueTtcbiAgLy8gICBwYXJlbnRFbDogSFRNTEVsZW1lbnQ7XG4gIHBhcmVudEVsOiBIVE1MRWxlbWVudCB8IGFueTtcbiAgLy8gZmlsbGVyRWw6IEhUTUxFbGVtZW50O1xuICBmaWxsZXJFbDogSFRNTEVsZW1lbnQgfCBhbnk7XG4gIHN0aWNreU9mZnNldFRvcCA9IDA7XG5cbiAgZGlmZjogYW55O1xuICBvcmlnaW5hbDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5wYXJlbnRFbCA9IHRoaXMuZWwucGFyZW50RWxlbWVudDtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZWwuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuXG4gICAgaWYgKHRoaXMuc3RpY2t5QWZ0ZXIpIHtcbiAgICAgIGNvbnN0IGNldFN0aWNreUFmdGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc3RpY2t5QWZ0ZXIpO1xuICAgICAgaWYgKGNldFN0aWNreUFmdGVyRWwpIHtcbiAgICAgICAgdGhpcy5zdGlja3lPZmZzZXRUb3AgPSBjZXRTdGlja3lBZnRlckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGlja3lBZnRlckFsaWFzKSB7XG4gICAgICBjb25zdCBjZXRTdGlja3lBZnRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnN0aWNreUFmdGVyQWxpYXMpO1xuICAgICAgaWYgKGNldFN0aWNreUFmdGVyRWwpIHtcbiAgICAgICAgdGhpcy5zdGlja3lPZmZzZXRUb3AgPSBjZXRTdGlja3lBZnRlckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIHBhcmVudCByZWxhdGl2ZWx5IHBvc2l0aW9uZWRcbiAgICBjb25zdCBhbGxvd2VkUG9zaXRpb25zID0gWydhYnNvbHV0ZScsICdmaXhlZCcsICdyZWxhdGl2ZSddO1xuICAgIGNvbnN0IHBhcmVudEVsUG9zaXRpb24gPSBjb21wdXRlZFN0eWxlKHRoaXMucGFyZW50RWwsICdwb3NpdGlvbicpO1xuICAgIGlmIChhbGxvd2VkUG9zaXRpb25zLmluZGV4T2YocGFyZW50RWxQb3NpdGlvbikgPT09IC0xKSB7IC8vIGluaGVyaXQsIGluaXRpYWwsIHVuc2V0XG4gICAgICB0aGlzLnBhcmVudEVsLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG5cbiAgICB0aGlzLmRpZmYgPSB7XG4gICAgICB0b3A6IHRoaXMuZWwub2Zmc2V0VG9wIC0gdGhpcy5wYXJlbnRFbC5vZmZzZXRUb3AsXG4gICAgICBsZWZ0OiB0aGlzLmVsLm9mZnNldExlZnQgLSB0aGlzLnBhcmVudEVsLm9mZnNldExlZnRcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbFJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMub3JpZ2luYWwgPSB7XG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdDogZWxSZWN0LFxuICAgICAgICBwb3NpdGlvbjogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAncG9zaXRpb24nKSxcbiAgICAgICAgZmxvYXQ6IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ2Zsb2F0JyksXG4gICAgICAgIHRvcDogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAndG9wJyksXG4gICAgICAgIGJvdHRvbTogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnYm90dG9tJyksXG4gICAgICAgIHdpZHRoOiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICd3aWR0aCcpLFxuICAgICAgICAvLyBsZWZ0OiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdsZWZ0JyksXG4gICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICBvZmZzZXRUb3A6IHRoaXMuZWwub2Zmc2V0VG9wLFxuICAgICAgICBvZmZzZXRMZWZ0OiB0aGlzLmVsLm9mZnNldExlZnQsXG4gICAgICAgIG1hcmdpblRvcDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luVG9wJyksIDEwKSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiBwYXJzZUludChjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdtYXJnaW5Cb3R0b20nKSwgMTApLFxuICAgICAgICBtYXJnaW5MZWZ0OiBwYXJzZUludChjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdtYXJnaW5MZWZ0JyksIDEwKSxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpbkxlZnQnKSwgMTApXG4gICAgICB9O1xuICAgIH1cblxuXG4gICAgdGhpcy5hdHRhY2goKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gIH1cblxuICBhdHRhY2goKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBkZXRhY2goKTogdm9pZCB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIC8vIGxldCBlbFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHBhcmVudFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm9keVJlY3Q6IENsaWVudFJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBkeW5Qcm9wcztcblxuICAgIGlmICh0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAncmlnaHQnKSB7XG4gICAgICBjb25zdCByaWdodCA9IGJvZHlSZWN0LnJpZ2h0IC0gcGFyZW50UmVjdC5yaWdodCArIHRoaXMub3JpZ2luYWwubWFyZ2luUmlnaHQ7XG4gICAgICBkeW5Qcm9wcyA9IHtyaWdodDogcmlnaHQgKyAncHgnfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZ2luYWwuZmxvYXQgPT09ICdsZWZ0Jykge1xuICAgICAgY29uc3QgbGVmdCA9IHBhcmVudFJlY3QubGVmdCAtIGJvZHlSZWN0LmxlZnQgKyB0aGlzLm9yaWdpbmFsLm1hcmdpbkxlZnQ7XG4gICAgICBkeW5Qcm9wcyA9IHtsZWZ0OiBsZWZ0ICsgJ3B4J307XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdwYXJlbnRSZWN0Li4uLi4uLi4uLi4uLi4nLCBwYXJlbnRSZWN0LndpZHRoKTtcbiAgICAgIGR5blByb3BzID0ge3dpZHRoOiBwYXJlbnRSZWN0LndpZHRoICsgJ3B4J307XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdkeW5Qcm9wcycsIGR5blByb3BzKTtcblxuICAgIGlmICh0aGlzLm9yaWdpbmFsLm1hcmdpblRvcCArIHRoaXMub3JpZ2luYWwubWFyZ2luQm90dG9tICtcbiAgICAgIHRoaXMub3JpZ2luYWwuYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCArIHRoaXMuc3RpY2t5T2Zmc2V0VG9wID49IHBhcmVudFJlY3QuYm90dG9tKSB7XG4gICAgICAvKipcbiAgICAgICAqIHN0aWtjeSBlbGVtZW50IHJlYWNoZWQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyXG4gICAgICAgKi9cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nhc2UgMSAoYWJzb2x1dGUpJywgcGFyZW50UmVjdC5ib3R0b20sIHRoaXMub3JpZ2luYWwubWFyZ2luQm90dG9tKTtcbiAgICAgIGNvbnN0IGZsb2F0QWRqdXN0bWVudCA9XG4gICAgICAgICAgdGhpcy5vcmlnaW5hbC5mbG9hdCA9PT0gJ3JpZ2h0JyA/IHtyaWdodDogMH0gOlxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbC5mbG9hdCA9PT0gJ2xlZnQnID8ge2xlZnQ6IDB9IDoge307XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZWwuc3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGZsb2F0OiAnbm9uZScsXG4gICAgICAgIHRvcDogJ2luaGVyaXQnLFxuICAgICAgICBib3R0b206IDBcbiAgICAgIH0sIGR5blByb3BzLCBmbG9hdEFkanVzdG1lbnQpO1xuICAgIH0gZWxzZSBpZiAocGFyZW50UmVjdC50b3AgKiAtMSArIHRoaXMub3JpZ2luYWwubWFyZ2luVG9wICsgdGhpcy5zdGlja3lPZmZzZXRUb3AgPiB0aGlzLm9yaWdpbmFsLm9mZnNldFRvcCkge1xuICAgICAgLyoqXG4gICAgICAgKiBzdGlrY3kgZWxlbWVudCBpcyBpbiB0aGUgbWlkZGxlIG9mIGNvbnRhaW5lclxuICAgICAgICovXG4gICAgICAvLyBjb25zb2xlLmxvZygnY2FzZSAyIChmaXhlZCknLCBwYXJlbnRSZWN0LnRvcCAqIC0xLCB0aGlzLm9yaWdpbmFsLm1hcmdpblRvcCwgdGhpcy5vcmlnaW5hbC5vZmZzZXRUb3ApO1xuXG4gICAgICAvLyBpZiBub3QgZmxvYXRpbmcsIGFkZCBhbiBlbXB0eSBmaWxsZXIgZWxlbWVudCwgc2luY2UgdGhlIG9yaWdpbmFsIGVsZW1lbnRzIGJlY2FtZXMgJ2ZpeGVkJ1xuICAgICAgaWYgKHRoaXMub3JpZ2luYWwuZmxvYXQgIT09ICdsZWZ0JyAmJiB0aGlzLm9yaWdpbmFsLmZsb2F0ICE9PSAncmlnaHQnICYmICF0aGlzLmZpbGxlckVsKSB7XG4gICAgICAgIHRoaXMuZmlsbGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5maWxsZXJFbC5zdHlsZS5oZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgIHRoaXMucGFyZW50RWwuaW5zZXJ0QmVmb3JlKHRoaXMuZmlsbGVyRWwsIHRoaXMuZWwpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZWwuc3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsIC8vIGZpeGVkIGlzIGEgbG90IHNtb290aGVyIHRoYW4gYWJzb2x1dGVcbiAgICAgICAgZmxvYXQ6ICdub25lJyxcbiAgICAgICAgdG9wOiB0aGlzLnN0aWNreU9mZnNldFRvcCArICdweCcsXG4gICAgICAgIGJvdHRvbTogJ2luaGVyaXQnXG4gICAgICB9LCBkeW5Qcm9wcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKlxuICAgICAgICogc3Rpa2N5IGVsZW1lbnQgaXMgaW4gdGhlIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICAgKi9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXNlIDMgKG9yaWdpbmFsKScpO1xuICAgICAgaWYgKHRoaXMuZmlsbGVyRWwpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5yZW1vdmVDaGlsZCh0aGlzLmZpbGxlckVsKTsgLy8gSUUxMSBkb2VzIG5vdCB3b3JrIHdpdGggZWwucmVtb3ZlKClcbiAgICAgICAgdGhpcy5maWxsZXJFbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5lbC5zdHlsZSwge1xuICAgICAgICBwb3NpdGlvbjogdGhpcy5vcmlnaW5hbC5wb3NpdGlvbixcbiAgICAgICAgZmxvYXQ6IHRoaXMub3JpZ2luYWwuZmxvYXQsXG4gICAgICAgIHRvcDogdGhpcy5vcmlnaW5hbC50b3AsXG4gICAgICAgIGJvdHRvbTogdGhpcy5vcmlnaW5hbC5ib3R0b20sXG4gICAgICAgIHdpZHRoOiB0aGlzLm9yaWdpbmFsLndpZHRoLFxuICAgICAgICBsZWZ0OiB0aGlzLm9yaWdpbmFsLmxlZnRcbiAgICAgIH0sIGR5blByb3BzKTtcbiAgICB9XG4gIH07XG59XG4iXX0=