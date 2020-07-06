/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseFitPositionStrategy } from './base-fit-position-strategy';
import { HorizontalAlignment, VerticalAlignment } from '../utilities';
/**
 * Positions the element as in **Connected** positioning strategy and resize the element
 * to fit in the view port in case the element is partially getting out of view
 */
var /**
 * Positions the element as in **Connected** positioning strategy and resize the element
 * to fit in the view port in case the element is partially getting out of view
 */
ElasticPositionStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(ElasticPositionStrategy, _super);
    function ElasticPositionStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** @inheritdoc */
    /**
     * \@inheritdoc
     * @protected
     * @param {?} element
     * @param {?} connectedFit
     * @return {?}
     */
    ElasticPositionStrategy.prototype.fitInViewport = /**
     * \@inheritdoc
     * @protected
     * @param {?} element
     * @param {?} connectedFit
     * @return {?}
     */
    function (element, connectedFit) {
        element.classList.add('igx-overlay__content--elastic');
        /** @type {?} */
        var transformString = [];
        if (!connectedFit.fitHorizontal) {
            /** @type {?} */
            var maxReduction = Math.max(0, connectedFit.contentElementRect.width - this.settings.minSize.width);
            /** @type {?} */
            var leftExtend = Math.max(0, connectedFit.viewPortRect.left - connectedFit.left);
            /** @type {?} */
            var rightExtend = Math.max(0, connectedFit.right - connectedFit.viewPortRect.right);
            /** @type {?} */
            var reduction = Math.min(maxReduction, leftExtend + rightExtend);
            element.style.width = connectedFit.contentElementRect.width - reduction + "px";
            //  if direction is center and element goes off the screen in left direction we should push the
            //  element to the right. Prevents left still going out of view when normally positioned
            if (this.settings.horizontalDirection === HorizontalAlignment.Center) {
                //  the amount of translation depends on whether element goes off the screen to the left,
                //  to the right or in both directions, as well as how much it goes of the screen and finally
                //  on the minSize. The translation should be proportional between left and right extend
                //  taken from the reduction
                /** @type {?} */
                var translation = leftExtend * reduction / (leftExtend + rightExtend);
                if (translation > 0) {
                    transformString.push("translateX(" + translation + "px)");
                }
            }
        }
        if (!connectedFit.fitVertical) {
            /** @type {?} */
            var maxReduction = Math.max(0, connectedFit.contentElementRect.height - this.settings.minSize.height);
            /** @type {?} */
            var topExtend = Math.max(0, connectedFit.viewPortRect.top - connectedFit.top);
            /** @type {?} */
            var bottomExtend = Math.max(0, connectedFit.bottom - connectedFit.viewPortRect.bottom);
            /** @type {?} */
            var reduction = Math.min(maxReduction, topExtend + bottomExtend);
            element.style.height = connectedFit.contentElementRect.height - reduction + "px";
            //  if direction is middle and element goes off the screen in top direction we should push the
            //  element to the bottom. Prevents top still going out of view when normally positioned
            if (this.settings.verticalDirection === VerticalAlignment.Middle) {
                //  the amount of translation depends on whether element goes off the screen to the top,
                //  to the bottom or in both directions, as well as how much it goes of the screen and finally
                //  on the minSize. The translation should be proportional between top and bottom extend
                //  taken from the reduction
                /** @type {?} */
                var translation = topExtend * reduction / (topExtend + bottomExtend);
                if (translation > 0) {
                    transformString.push("translateY(" + translation + "px)");
                }
            }
        }
        element.style.transform = transformString.join(' ').trim();
    };
    return ElasticPositionStrategy;
}(BaseFitPositionStrategy));
/**
 * Positions the element as in **Connected** positioning strategy and resize the element
 * to fit in the view port in case the element is partially getting out of view
 */
export { ElasticPositionStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhc3RpYy1wb3NpdGlvbi1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvb3ZlcmxheS9wb3NpdGlvbi9lbGFzdGljLXBvc2l0aW9uLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFnQixNQUFNLDhCQUE4QixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBb0IsTUFBTSxjQUFjLENBQUM7Ozs7O0FBTXhGOzs7OztJQUE2QyxtREFBdUI7SUFBcEU7O0lBZ0RBLENBQUM7SUEvQ0csa0JBQWtCOzs7Ozs7OztJQUNSLCtDQUFhOzs7Ozs7O0lBQXZCLFVBQXdCLE9BQW9CLEVBQUUsWUFBMEI7UUFDcEUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7WUFDakQsZUFBZSxHQUFhLEVBQUU7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUU7O2dCQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7O2dCQUMvRixVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQzs7Z0JBQzVFLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDOztnQkFDL0UsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsR0FBRyxXQUFXLENBQUM7WUFDbEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQU0sWUFBWSxDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxTQUFTLE9BQUksQ0FBQztZQUUvRSwrRkFBK0Y7WUFDL0Ysd0ZBQXdGO1lBQ3hGLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsS0FBSyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7Ozs7OztvQkFLNUQsV0FBVyxHQUFHLFVBQVUsR0FBRyxTQUFTLEdBQUcsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO2dCQUN2RSxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUU7b0JBQ2pCLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWMsV0FBVyxRQUFLLENBQUMsQ0FBQztpQkFDeEQ7YUFDSjtTQUNKO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7O2dCQUNyQixZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7O2dCQUNqRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ3pFLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDOztnQkFDbEYsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsR0FBRyxZQUFZLENBQUM7WUFDbEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sWUFBWSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxTQUFTLE9BQUksQ0FBQztZQUVqRiw4RkFBOEY7WUFDOUYsd0ZBQXdGO1lBQ3hGLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsS0FBSyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7Ozs7OztvQkFLeEQsV0FBVyxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO2dCQUN0RSxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUU7b0JBQ2pCLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWMsV0FBVyxRQUFLLENBQUMsQ0FBQztpQkFDeEQ7YUFDSjtTQUNKO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQUFDLEFBaERELENBQTZDLHVCQUF1QixHQWdEbkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRml0UG9zaXRpb25TdHJhdGVneSwgQ29ubmVjdGVkRml0IH0gZnJvbSAnLi9iYXNlLWZpdC1wb3NpdGlvbi1zdHJhdGVneSc7XG5pbXBvcnQgeyBIb3Jpem9udGFsQWxpZ25tZW50LCBWZXJ0aWNhbEFsaWdubWVudCwgUG9zaXRpb25TZXR0aW5ncyB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbi8qKlxuICogUG9zaXRpb25zIHRoZSBlbGVtZW50IGFzIGluICoqQ29ubmVjdGVkKiogcG9zaXRpb25pbmcgc3RyYXRlZ3kgYW5kIHJlc2l6ZSB0aGUgZWxlbWVudFxuICogdG8gZml0IGluIHRoZSB2aWV3IHBvcnQgaW4gY2FzZSB0aGUgZWxlbWVudCBpcyBwYXJ0aWFsbHkgZ2V0dGluZyBvdXQgb2Ygdmlld1xuICovXG5leHBvcnQgY2xhc3MgRWxhc3RpY1Bvc2l0aW9uU3RyYXRlZ3kgZXh0ZW5kcyBCYXNlRml0UG9zaXRpb25TdHJhdGVneSB7XG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHJvdGVjdGVkIGZpdEluVmlld3BvcnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNvbm5lY3RlZEZpdDogQ29ubmVjdGVkRml0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWd4LW92ZXJsYXlfX2NvbnRlbnQtLWVsYXN0aWMnKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtU3RyaW5nOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZEZpdC5maXRIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICBjb25zdCBtYXhSZWR1Y3Rpb24gPSBNYXRoLm1heCgwLCBjb25uZWN0ZWRGaXQuY29udGVudEVsZW1lbnRSZWN0LndpZHRoIC0gdGhpcy5zZXR0aW5ncy5taW5TaXplLndpZHRoKTtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRFeHRlbmQgPSBNYXRoLm1heCgwLCBjb25uZWN0ZWRGaXQudmlld1BvcnRSZWN0LmxlZnQgLSBjb25uZWN0ZWRGaXQubGVmdCk7XG4gICAgICAgICAgICBjb25zdCByaWdodEV4dGVuZCA9IE1hdGgubWF4KDAsIGNvbm5lY3RlZEZpdC5yaWdodCAtIGNvbm5lY3RlZEZpdC52aWV3UG9ydFJlY3QucmlnaHQpO1xuICAgICAgICAgICAgY29uc3QgcmVkdWN0aW9uID0gTWF0aC5taW4obWF4UmVkdWN0aW9uLCBsZWZ0RXh0ZW5kICsgcmlnaHRFeHRlbmQpO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke2Nvbm5lY3RlZEZpdC5jb250ZW50RWxlbWVudFJlY3Qud2lkdGggLSByZWR1Y3Rpb259cHhgO1xuXG4gICAgICAgICAgICAvLyAgaWYgZGlyZWN0aW9uIGlzIGNlbnRlciBhbmQgZWxlbWVudCBnb2VzIG9mZiB0aGUgc2NyZWVuIGluIGxlZnQgZGlyZWN0aW9uIHdlIHNob3VsZCBwdXNoIHRoZVxuICAgICAgICAgICAgLy8gIGVsZW1lbnQgdG8gdGhlIHJpZ2h0LiBQcmV2ZW50cyBsZWZ0IHN0aWxsIGdvaW5nIG91dCBvZiB2aWV3IHdoZW4gbm9ybWFsbHkgcG9zaXRpb25lZFxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuaG9yaXpvbnRhbERpcmVjdGlvbiA9PT0gSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyAgdGhlIGFtb3VudCBvZiB0cmFuc2xhdGlvbiBkZXBlbmRzIG9uIHdoZXRoZXIgZWxlbWVudCBnb2VzIG9mZiB0aGUgc2NyZWVuIHRvIHRoZSBsZWZ0LFxuICAgICAgICAgICAgICAgIC8vICB0byB0aGUgcmlnaHQgb3IgaW4gYm90aCBkaXJlY3Rpb25zLCBhcyB3ZWxsIGFzIGhvdyBtdWNoIGl0IGdvZXMgb2YgdGhlIHNjcmVlbiBhbmQgZmluYWxseVxuICAgICAgICAgICAgICAgIC8vICBvbiB0aGUgbWluU2l6ZS4gVGhlIHRyYW5zbGF0aW9uIHNob3VsZCBiZSBwcm9wb3J0aW9uYWwgYmV0d2VlbiBsZWZ0IGFuZCByaWdodCBleHRlbmRcbiAgICAgICAgICAgICAgICAvLyAgdGFrZW4gZnJvbSB0aGUgcmVkdWN0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBsZWZ0RXh0ZW5kICogcmVkdWN0aW9uIC8gKGxlZnRFeHRlbmQgKyByaWdodEV4dGVuZCk7XG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9uID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcucHVzaChgdHJhbnNsYXRlWCgke3RyYW5zbGF0aW9ufXB4KWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29ubmVjdGVkRml0LmZpdFZlcnRpY2FsKSB7XG4gICAgICAgICAgICBjb25zdCBtYXhSZWR1Y3Rpb24gPSBNYXRoLm1heCgwLCBjb25uZWN0ZWRGaXQuY29udGVudEVsZW1lbnRSZWN0LmhlaWdodCAtIHRoaXMuc2V0dGluZ3MubWluU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc3QgdG9wRXh0ZW5kID0gTWF0aC5tYXgoMCwgY29ubmVjdGVkRml0LnZpZXdQb3J0UmVjdC50b3AgLSBjb25uZWN0ZWRGaXQudG9wKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbUV4dGVuZCA9IE1hdGgubWF4KDAsIGNvbm5lY3RlZEZpdC5ib3R0b20gLSBjb25uZWN0ZWRGaXQudmlld1BvcnRSZWN0LmJvdHRvbSk7XG4gICAgICAgICAgICBjb25zdCByZWR1Y3Rpb24gPSBNYXRoLm1pbihtYXhSZWR1Y3Rpb24sIHRvcEV4dGVuZCArIGJvdHRvbUV4dGVuZCk7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2Nvbm5lY3RlZEZpdC5jb250ZW50RWxlbWVudFJlY3QuaGVpZ2h0IC0gcmVkdWN0aW9ufXB4YDtcblxuICAgICAgICAgICAgLy8gIGlmIGRpcmVjdGlvbiBpcyBtaWRkbGUgYW5kIGVsZW1lbnQgZ29lcyBvZmYgdGhlIHNjcmVlbiBpbiB0b3AgZGlyZWN0aW9uIHdlIHNob3VsZCBwdXNoIHRoZVxuICAgICAgICAgICAgLy8gIGVsZW1lbnQgdG8gdGhlIGJvdHRvbS4gUHJldmVudHMgdG9wIHN0aWxsIGdvaW5nIG91dCBvZiB2aWV3IHdoZW4gbm9ybWFsbHkgcG9zaXRpb25lZFxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudmVydGljYWxEaXJlY3Rpb24gPT09IFZlcnRpY2FsQWxpZ25tZW50Lk1pZGRsZSkge1xuICAgICAgICAgICAgICAgIC8vICB0aGUgYW1vdW50IG9mIHRyYW5zbGF0aW9uIGRlcGVuZHMgb24gd2hldGhlciBlbGVtZW50IGdvZXMgb2ZmIHRoZSBzY3JlZW4gdG8gdGhlIHRvcCxcbiAgICAgICAgICAgICAgICAvLyAgdG8gdGhlIGJvdHRvbSBvciBpbiBib3RoIGRpcmVjdGlvbnMsIGFzIHdlbGwgYXMgaG93IG11Y2ggaXQgZ29lcyBvZiB0aGUgc2NyZWVuIGFuZCBmaW5hbGx5XG4gICAgICAgICAgICAgICAgLy8gIG9uIHRoZSBtaW5TaXplLiBUaGUgdHJhbnNsYXRpb24gc2hvdWxkIGJlIHByb3BvcnRpb25hbCBiZXR3ZWVuIHRvcCBhbmQgYm90dG9tIGV4dGVuZFxuICAgICAgICAgICAgICAgIC8vICB0YWtlbiBmcm9tIHRoZSByZWR1Y3Rpb25cbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRvcEV4dGVuZCAqIHJlZHVjdGlvbiAvICh0b3BFeHRlbmQgKyBib3R0b21FeHRlbmQpO1xuICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nLnB1c2goYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGlvbn1weClgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmcuam9pbignICcpLnRyaW0oKTtcbiAgICB9XG59XG4iXX0=