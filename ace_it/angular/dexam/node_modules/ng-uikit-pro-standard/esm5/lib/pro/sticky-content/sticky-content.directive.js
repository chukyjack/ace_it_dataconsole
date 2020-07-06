/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
import { Directive, ElementRef, Input } from '@angular/core';
import { computedStyle } from './computed.style';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
var MdbStickyDirective = /** @class */ (function () {
    function MdbStickyDirective(el, platformId) {
        var _this = this;
        // css selector to be sticky after
        this.isBrowser = false;
        this.stickyOffsetTop = 0;
        this.scrollHandler = (/**
         * @return {?}
         */
        function () {
            // let elRect: ClientRect = this.el.getBoundingClientRect();
            /** @type {?} */
            var parentRect = _this.el.parentElement.getBoundingClientRect();
            /** @type {?} */
            var bodyRect = document.body.getBoundingClientRect();
            /** @type {?} */
            var dynProps;
            if (_this.original.float === 'right') {
                /** @type {?} */
                var right = bodyRect.right - parentRect.right + _this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (_this.original.float === 'left') {
                /** @type {?} */
                var left = parentRect.left - bodyRect.left + _this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                // console.log('parentRect..............', parentRect.width);
                dynProps = { width: parentRect.width + 'px' };
            }
            // console.log('dynProps', dynProps);
            if (_this.original.marginTop + _this.original.marginBottom +
                _this.original.boundingClientRect.height + _this.stickyOffsetTop >= parentRect.bottom) {
                // console.log('case 1 (absolute)', parentRect.bottom, this.original.marginBottom);
                /**
                 * stikcy element reached to the bottom of the container
                 * @type {?}
                 */
                var floatAdjustment = _this.original.float === 'right' ? { right: 0 } :
                    _this.original.float === 'left' ? { left: 0 } : {};
                Object.assign(_this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + _this.original.marginTop + _this.stickyOffsetTop > _this.original.offsetTop) {
                /**
                 * stikcy element is in the middle of container
                 */
                // console.log('case 2 (fixed)', parentRect.top * -1, this.original.marginTop, this.original.offsetTop);
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (_this.original.float !== 'left' && _this.original.float !== 'right' && !_this.fillerEl) {
                    _this.fillerEl = document.createElement('div');
                    _this.fillerEl.style.height = _this.el.offsetHeight + 'px';
                    _this.parentEl.insertBefore(_this.fillerEl, _this.el);
                }
                Object.assign(_this.el.style, {
                    position: 'fixed',
                    // fixed is a lot smoother than absolute
                    float: 'none',
                    top: _this.stickyOffsetTop + 'px',
                    bottom: 'inherit'
                }, dynProps);
            }
            else {
                /**
                 * stikcy element is in the original position
                 */
                // console.log('case 3 (original)');
                if (_this.fillerEl) {
                    _this.parentEl.removeChild(_this.fillerEl); // IE11 does not work with el.remove()
                    _this.fillerEl = undefined;
                }
                Object.assign(_this.el.style, {
                    position: _this.original.position,
                    float: _this.original.float,
                    top: _this.original.top,
                    bottom: _this.original.bottom,
                    width: _this.original.width,
                    left: _this.original.left
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
    MdbStickyDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            /** @type {?} */
            var cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        if (this.stickyAfterAlias) {
            /** @type {?} */
            var cetStickyAfterEl = document.querySelector(this.stickyAfterAlias);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        /** @type {?} */
        var allowedPositions = ['absolute', 'fixed', 'relative'];
        /** @type {?} */
        var parentElPosition = computedStyle(this.parentEl, 'position');
        if (allowedPositions.indexOf(parentElPosition) === -1) { // inherit, initial, unset
            this.parentEl.style.position = 'relative';
        }
        this.diff = {
            top: this.el.offsetTop - this.parentEl.offsetTop,
            left: this.el.offsetLeft - this.parentEl.offsetLeft
        };
        if (this.isBrowser) {
            /** @type {?} */
            var elRect = this.el.getBoundingClientRect();
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
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.detach();
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.attach = /**
     * @return {?}
     */
    function () {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.detach = /**
     * @return {?}
     */
    function () {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    };
    MdbStickyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbSticky]'
                },] }
    ];
    /** @nocollapse */
    MdbStickyDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbStickyDirective.propDecorators = {
        stickyAfter: [{ type: Input }],
        stickyAfterAlias: [{ type: Input, args: ['sticky-after',] }]
    };
    return MdbStickyDirective;
}());
export { MdbStickyDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zdGlja3ktY29udGVudC9zdGlja3ktY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWxEO0lBb0JFLDRCQUFZLEVBQWMsRUFBdUIsVUFBa0I7UUFBbkUsaUJBSUM7O1FBakJELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFRbEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUErRXBCLGtCQUFhOzs7UUFBRzs7O2dCQUVSLFVBQVUsR0FBZSxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQ3RFLFFBQVEsR0FBZSxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFOztnQkFDOUQsUUFBUTtZQUVaLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFOztvQkFDN0IsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7Z0JBQzNFLFFBQVEsR0FBRyxFQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFDLENBQUM7YUFDbEM7aUJBQU0sSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUU7O29CQUNuQyxJ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VUFBVTs2Q0EwQkUsTUFBTSxTQUFDLFdBQVc7Ozs4QkFmOUMsS0FBSzttQ0FDTCxLQUFLLFNBQUMsY0FBYzs7SUErSnZCLHlCQUFDO0NBQUEsQUFyS0QsSUFxS0M7U0FqS1ksa0JBQWtCOzs7SUFDN0IseUNBQTZCOztJQUM3Qiw4Q0FBZ0Q7O0lBQ2hELHVDQUFrQjs7SUFHbEIsZ0NBQXNCOztJQUV0QixzQ0FBNEI7O0lBRTVCLHNDQUE0Qjs7SUFDNUIsNkNBQW9COztJQUVwQixrQ0FBVTs7SUFDVixzQ0FBYzs7SUE0RWQsMkNBc0VFIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbXB1dGVkU3R5bGV9IGZyb20gJy4vY29tcHV0ZWQuc3R5bGUnO1xuXG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtQTEFURk9STV9JRCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlN0aWNreV0nXG59KVxuXG5leHBvcnQgY2xhc3MgTWRiU3RpY2t5RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgc3RpY2t5QWZ0ZXI6IHN0cmluZzsgIC8vIGNzcyBzZWxlY3RvciB0byBiZSBzdGlja3kgYWZ0ZXJcbiAgQElucHV0KCdzdGlja3ktYWZ0ZXInKSBzdGlja3lBZnRlckFsaWFzOiBzdHJpbmc7ICAvLyBjc3Mgc2VsZWN0b3IgdG8gYmUgc3RpY2t5IGFmdGVyXG4gIGlzQnJvd3NlciA9IGZhbHNlO1xuXG4gIC8vICAgZWw6IEhUTUxFbGVtZW50O1xuICBlbDogSFRNTEVsZW1lbnQgfCBhbnk7XG4gIC8vICAgcGFyZW50RWw6IEhUTUxFbGVtZW50O1xuICBwYXJlbnRFbDogSFRNTEVsZW1lbnQgfCBhbnk7XG4gIC8vIGZpbGxlckVsOiBIVE1MRWxlbWVudDtcbiAgZmlsbGVyRWw6IEhUTUxFbGVtZW50IHwgYW55O1xuICBzdGlja3lPZmZzZXRUb3AgPSAwO1xuXG4gIGRpZmY6IGFueTtcbiAgb3JpZ2luYWw6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucGFyZW50RWwgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQ7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVsLnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICAgIGlmICh0aGlzLnN0aWNreUFmdGVyKSB7XG4gICAgICBjb25zdCBjZXRTdGlja3lBZnRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnN0aWNreUFmdGVyKTtcbiAgICAgIGlmIChjZXRTdGlja3lBZnRlckVsKSB7XG4gICAgICAgIHRoaXMuc3RpY2t5T2Zmc2V0VG9wID0gY2V0U3RpY2t5QWZ0ZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RpY2t5QWZ0ZXJBbGlhcykge1xuICAgICAgY29uc3QgY2V0U3RpY2t5QWZ0ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zdGlja3lBZnRlckFsaWFzKTtcbiAgICAgIGlmIChjZXRTdGlja3lBZnRlckVsKSB7XG4gICAgICAgIHRoaXMuc3RpY2t5T2Zmc2V0VG9wID0gY2V0U3RpY2t5QWZ0ZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBwYXJlbnQgcmVsYXRpdmVseSBwb3NpdGlvbmVkXG4gICAgY29uc3QgYWxsb3dlZFBvc2l0aW9ucyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnLCAncmVsYXRpdmUnXTtcbiAgICBjb25zdCBwYXJlbnRFbFBvc2l0aW9uID0gY29tcHV0ZWRTdHlsZSh0aGlzLnBhcmVudEVsLCAncG9zaXRpb24nKTtcbiAgICBpZiAoYWxsb3dlZFBvc2l0aW9ucy5pbmRleE9mKHBhcmVudEVsUG9zaXRpb24pID09PSAtMSkgeyAvLyBpbmhlcml0LCBpbml0aWFsLCB1bnNldFxuICAgICAgdGhpcy5wYXJlbnRFbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfVxuXG4gICAgdGhpcy5kaWZmID0ge1xuICAgICAgdG9wOiB0aGlzLmVsLm9mZnNldFRvcCAtIHRoaXMucGFyZW50RWwub2Zmc2V0VG9wLFxuICAgICAgbGVmdDogdGhpcy5lbC5vZmZzZXRMZWZ0IC0gdGhpcy5wYXJlbnRFbC5vZmZzZXRMZWZ0XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWxSZWN0ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLm9yaWdpbmFsID0ge1xuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3Q6IGVsUmVjdCxcbiAgICAgICAgcG9zaXRpb246IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ3Bvc2l0aW9uJyksXG4gICAgICAgIGZsb2F0OiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdmbG9hdCcpLFxuICAgICAgICB0b3A6IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ3RvcCcpLFxuICAgICAgICBib3R0b206IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ2JvdHRvbScpLFxuICAgICAgICB3aWR0aDogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnd2lkdGgnKSxcbiAgICAgICAgLy8gbGVmdDogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbGVmdCcpLFxuICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgb2Zmc2V0VG9wOiB0aGlzLmVsLm9mZnNldFRvcCxcbiAgICAgICAgb2Zmc2V0TGVmdDogdGhpcy5lbC5vZmZzZXRMZWZ0LFxuICAgICAgICBtYXJnaW5Ub3A6IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpblRvcCcpLCAxMCksXG4gICAgICAgIG1hcmdpbkJvdHRvbTogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luQm90dG9tJyksIDEwKSxcbiAgICAgICAgbWFyZ2luTGVmdDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luTGVmdCcpLCAxMCksXG4gICAgICAgIG1hcmdpblJpZ2h0OiBwYXJzZUludChjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdtYXJnaW5MZWZ0JyksIDEwKVxuICAgICAgfTtcbiAgICB9XG5cblxuICAgIHRoaXMuYXR0YWNoKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRldGFjaCgpO1xuICB9XG5cbiAgYXR0YWNoKCk6IHZvaWQge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICB9XG5cbiAgZGV0YWNoKCk6IHZvaWQge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICB9XG5cbiAgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcbiAgICAvLyBsZXQgZWxSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBwYXJlbnRSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5lbC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGJvZHlSZWN0OiBDbGllbnRSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgZHluUHJvcHM7XG5cbiAgICBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgY29uc3QgcmlnaHQgPSBib2R5UmVjdC5yaWdodCAtIHBhcmVudFJlY3QucmlnaHQgKyB0aGlzLm9yaWdpbmFsLm1hcmdpblJpZ2h0O1xuICAgICAgZHluUHJvcHMgPSB7cmlnaHQ6IHJpZ2h0ICsgJ3B4J307XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAnbGVmdCcpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSBwYXJlbnRSZWN0LmxlZnQgLSBib2R5UmVjdC5sZWZ0ICsgdGhpcy5vcmlnaW5hbC5tYXJnaW5MZWZ0O1xuICAgICAgZHluUHJvcHMgPSB7bGVmdDogbGVmdCArICdweCd9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygncGFyZW50UmVjdC4uLi4uLi4uLi4uLi4uJywgcGFyZW50UmVjdC53aWR0aCk7XG4gICAgICBkeW5Qcm9wcyA9IHt3aWR0aDogcGFyZW50UmVjdC53aWR0aCArICdweCd9O1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnZHluUHJvcHMnLCBkeW5Qcm9wcyk7XG5cbiAgICBpZiAodGhpcy5vcmlnaW5hbC5tYXJnaW5Ub3AgKyB0aGlzLm9yaWdpbmFsLm1hcmdpbkJvdHRvbSArXG4gICAgICB0aGlzLm9yaWdpbmFsLmJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgKyB0aGlzLnN0aWNreU9mZnNldFRvcCA+PSBwYXJlbnRSZWN0LmJvdHRvbSkge1xuICAgICAgLyoqXG4gICAgICAgKiBzdGlrY3kgZWxlbWVudCByZWFjaGVkIHRvIHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lclxuICAgICAgICovXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXNlIDEgKGFic29sdXRlKScsIHBhcmVudFJlY3QuYm90dG9tLCB0aGlzLm9yaWdpbmFsLm1hcmdpbkJvdHRvbSk7XG4gICAgICBjb25zdCBmbG9hdEFkanVzdG1lbnQgPVxuICAgICAgICAgIHRoaXMub3JpZ2luYWwuZmxvYXQgPT09ICdyaWdodCcgPyB7cmlnaHQ6IDB9IDpcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWwuZmxvYXQgPT09ICdsZWZ0JyA/IHtsZWZ0OiAwfSA6IHt9O1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmVsLnN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBmbG9hdDogJ25vbmUnLFxuICAgICAgICB0b3A6ICdpbmhlcml0JyxcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9LCBkeW5Qcm9wcywgZmxvYXRBZGp1c3RtZW50KTtcbiAgICB9IGVsc2UgaWYgKHBhcmVudFJlY3QudG9wICogLTEgKyB0aGlzLm9yaWdpbmFsLm1hcmdpblRvcCArIHRoaXMuc3RpY2t5T2Zmc2V0VG9wID4gdGhpcy5vcmlnaW5hbC5vZmZzZXRUb3ApIHtcbiAgICAgIC8qKlxuICAgICAgICogc3Rpa2N5IGVsZW1lbnQgaXMgaW4gdGhlIG1pZGRsZSBvZiBjb250YWluZXJcbiAgICAgICAqL1xuICAgICAgLy8gY29uc29sZS5sb2coJ2Nhc2UgMiAoZml4ZWQpJywgcGFyZW50UmVjdC50b3AgKiAtMSwgdGhpcy5vcmlnaW5hbC5tYXJnaW5Ub3AsIHRoaXMub3JpZ2luYWwub2Zmc2V0VG9wKTtcblxuICAgICAgLy8gaWYgbm90IGZsb2F0aW5nLCBhZGQgYW4gZW1wdHkgZmlsbGVyIGVsZW1lbnQsIHNpbmNlIHRoZSBvcmlnaW5hbCBlbGVtZW50cyBiZWNhbWVzICdmaXhlZCdcbiAgICAgIGlmICh0aGlzLm9yaWdpbmFsLmZsb2F0ICE9PSAnbGVmdCcgJiYgdGhpcy5vcmlnaW5hbC5mbG9hdCAhPT0gJ3JpZ2h0JyAmJiAhdGhpcy5maWxsZXJFbCkge1xuICAgICAgICB0aGlzLmZpbGxlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZmlsbGVyRWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICB0aGlzLnBhcmVudEVsLmluc2VydEJlZm9yZSh0aGlzLmZpbGxlckVsLCB0aGlzLmVsKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmVsLnN0eWxlLCB7XG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLCAvLyBmaXhlZCBpcyBhIGxvdCBzbW9vdGhlciB0aGFuIGFic29sdXRlXG4gICAgICAgIGZsb2F0OiAnbm9uZScsXG4gICAgICAgIHRvcDogdGhpcy5zdGlja3lPZmZzZXRUb3AgKyAncHgnLFxuICAgICAgICBib3R0b206ICdpbmhlcml0J1xuICAgICAgfSwgZHluUHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIHN0aWtjeSBlbGVtZW50IGlzIGluIHRoZSBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgICovXG4gICAgICAvLyBjb25zb2xlLmxvZygnY2FzZSAzIChvcmlnaW5hbCknKTtcbiAgICAgIGlmICh0aGlzLmZpbGxlckVsKSB7XG4gICAgICAgIHRoaXMucGFyZW50RWwucmVtb3ZlQ2hpbGQodGhpcy5maWxsZXJFbCk7IC8vIElFMTEgZG9lcyBub3Qgd29yayB3aXRoIGVsLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuZmlsbGVyRWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZWwuc3R5bGUsIHtcbiAgICAgICAgcG9zaXRpb246IHRoaXMub3JpZ2luYWwucG9zaXRpb24sXG4gICAgICAgIGZsb2F0OiB0aGlzLm9yaWdpbmFsLmZsb2F0LFxuICAgICAgICB0b3A6IHRoaXMub3JpZ2luYWwudG9wLFxuICAgICAgICBib3R0b206IHRoaXMub3JpZ2luYWwuYm90dG9tLFxuICAgICAgICB3aWR0aDogdGhpcy5vcmlnaW5hbC53aWR0aCxcbiAgICAgICAgbGVmdDogdGhpcy5vcmlnaW5hbC5sZWZ0XG4gICAgICB9LCBkeW5Qcm9wcyk7XG4gICAgfVxuICB9O1xufVxuIl19