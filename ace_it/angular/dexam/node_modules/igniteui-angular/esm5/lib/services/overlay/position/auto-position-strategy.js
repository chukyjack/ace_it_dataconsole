/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { VerticalAlignment, HorizontalAlignment } from './../utilities';
import { BaseFitPositionStrategy } from './base-fit-position-strategy';
/**
 * Positions the element as in **Connected** positioning strategy and re-positions the element in
 * the view port (calculating a different start point) in case the element is partially getting out of view
 */
var /**
 * Positions the element as in **Connected** positioning strategy and re-positions the element in
 * the view port (calculating a different start point) in case the element is partially getting out of view
 */
AutoPositionStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(AutoPositionStrategy, _super);
    function AutoPositionStrategy() {
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
    AutoPositionStrategy.prototype.fitInViewport = /**
     * \@inheritdoc
     * @protected
     * @param {?} element
     * @param {?} connectedFit
     * @return {?}
     */
    function (element, connectedFit) {
        /** @type {?} */
        var transformString = [];
        if (!connectedFit.fitHorizontal) {
            if (this.canFlipHorizontal(connectedFit)) {
                this.flipHorizontal();
            }
            else {
                /** @type {?} */
                var horizontalPush = this.horizontalPush(connectedFit);
                transformString.push("translateX(" + horizontalPush + "px)");
            }
        }
        if (!connectedFit.fitVertical) {
            if (this.canFlipVertical(connectedFit)) {
                this.flipVertical();
            }
            else {
                /** @type {?} */
                var verticalPush = this.verticalPush(connectedFit);
                transformString.push("translateY(" + verticalPush + "px)");
            }
        }
        element.style.transform = transformString.join(' ').trim();
    };
    /**
     * Checks if element can be flipped without get off the viewport
     * @param connectedFit connectedFit object containing all necessary parameters
     * @returns true if element can be flipped and stain in viewport
     */
    /**
     * Checks if element can be flipped without get off the viewport
     * @private
     * @param {?} connectedFit connectedFit object containing all necessary parameters
     * @return {?} true if element can be flipped and stain in viewport
     */
    AutoPositionStrategy.prototype.canFlipHorizontal = /**
     * Checks if element can be flipped without get off the viewport
     * @private
     * @param {?} connectedFit connectedFit object containing all necessary parameters
     * @return {?} true if element can be flipped and stain in viewport
     */
    function (connectedFit) {
        //  HorizontalAlignment can be Left = -1; Center = -0.5 or Right = 0.
        //  To virtually flip direction and start point (both are HorizontalAlignment) we can do this:
        //  flippedAlignment = (-1) * (HorizontalAlignment + 1)
        //  this way:
        //  (-1) * (Left + 1) = 0 = Right
        //  (-1) * (Center + 1) = -0.5 = Center
        //  (-1) * (Right + 1) = -1 = Left
        /** @type {?} */
        var flippedStartPoint = (-1) * (this.settings.horizontalStartPoint + 1);
        /** @type {?} */
        var flippedDirection = (-1) * (this.settings.horizontalDirection + 1);
        /** @type {?} */
        var leftBorder = this.calculateLeft(connectedFit.targetRect, connectedFit.contentElementRect, flippedStartPoint, flippedDirection);
        /** @type {?} */
        var rightBorder = leftBorder + connectedFit.contentElementRect.width;
        return connectedFit.viewPortRect.left < leftBorder && rightBorder < connectedFit.viewPortRect.right;
    };
    /**
     * Checks if element can be flipped without get off the viewport
     * @param connectedFit connectedFit object containing all necessary parameters
     * @returns true if element can be flipped and stain in viewport
     */
    /**
     * Checks if element can be flipped without get off the viewport
     * @private
     * @param {?} connectedFit connectedFit object containing all necessary parameters
     * @return {?} true if element can be flipped and stain in viewport
     */
    AutoPositionStrategy.prototype.canFlipVertical = /**
     * Checks if element can be flipped without get off the viewport
     * @private
     * @param {?} connectedFit connectedFit object containing all necessary parameters
     * @return {?} true if element can be flipped and stain in viewport
     */
    function (connectedFit) {
        /** @type {?} */
        var flippedStartPoint = (-1) * (this.settings.verticalStartPoint + 1);
        /** @type {?} */
        var flippedDirection = (-1) * (this.settings.verticalDirection + 1);
        /** @type {?} */
        var topBorder = this.calculateTop(connectedFit.targetRect, connectedFit.contentElementRect, flippedStartPoint, flippedDirection);
        /** @type {?} */
        var bottomBorder = topBorder + connectedFit.contentElementRect.height;
        return connectedFit.viewPortRect.top < topBorder && bottomBorder < connectedFit.viewPortRect.bottom;
    };
    /**
     * Flips direction and start point of the position settings
     */
    /**
     * Flips direction and start point of the position settings
     * @private
     * @return {?}
     */
    AutoPositionStrategy.prototype.flipHorizontal = /**
     * Flips direction and start point of the position settings
     * @private
     * @return {?}
     */
    function () {
        switch (this.settings.horizontalDirection) {
            case HorizontalAlignment.Left:
                this.settings.horizontalDirection = HorizontalAlignment.Right;
                break;
            case HorizontalAlignment.Right:
                this.settings.horizontalDirection = HorizontalAlignment.Left;
                break;
        }
        switch (this.settings.horizontalStartPoint) {
            case HorizontalAlignment.Left:
                this.settings.horizontalStartPoint = HorizontalAlignment.Right;
                break;
            case HorizontalAlignment.Right:
                this.settings.horizontalStartPoint = HorizontalAlignment.Left;
                break;
        }
    };
    /**
     * Flips direction and start point of the position settings
     */
    /**
     * Flips direction and start point of the position settings
     * @private
     * @return {?}
     */
    AutoPositionStrategy.prototype.flipVertical = /**
     * Flips direction and start point of the position settings
     * @private
     * @return {?}
     */
    function () {
        switch (this.settings.verticalDirection) {
            case VerticalAlignment.Top:
                this.settings.verticalDirection = VerticalAlignment.Bottom;
                break;
            case VerticalAlignment.Bottom:
                this.settings.verticalDirection = VerticalAlignment.Top;
                break;
        }
        switch (this.settings.verticalStartPoint) {
            case VerticalAlignment.Top:
                this.settings.verticalStartPoint = VerticalAlignment.Bottom;
                break;
            case VerticalAlignment.Bottom:
                this.settings.verticalStartPoint = VerticalAlignment.Top;
                break;
        }
    };
    /**
     * Calculates necessary horizontal push according to provided connectedFit
     * @param connectedFit connectedFit object containing all necessary parameters
     * @returns amount of necessary translation which will push the element into viewport
     */
    /**
     * Calculates necessary horizontal push according to provided connectedFit
     * @private
     * @param {?} connectedFit connectedFit object containing all necessary parameters
     * @return {?} amount of necessary translation which will push the element into viewport
     */
    AutoPositionStrategy.prototype.horizontalPush = /**
     * Calculates necessary horizontal push according to provided connectedFit
     * @private
     * @param {?} connectedFit connectedFit object containing all necessary parameters
     * @return {?} amount of necessary translation which will push the element into viewport
     */
    function (connectedFit) {
        /** @type {?} */
        var leftExtend = connectedFit.left;
        /** @type {?} */
        var rightExtend = connectedFit.right - connectedFit.viewPortRect.right;
        //  if leftExtend < 0 overlay goes beyond left end of the screen. We should push it back with exactly
        //  as much as it is beyond the screen.
        //  if rightExtend > 0 overlay goes beyond right end of the screen. We should push it back with the
        //  extend but with amount not bigger than what left between left border of screen and left border of
        //  overlay, e.g. leftExtend
        if (leftExtend < 0) {
            return Math.abs(leftExtend);
        }
        else if (rightExtend > 0) {
            return -Math.min(rightExtend, leftExtend);
        }
        else {
            return 0;
        }
    };
    /**
     * Calculates necessary vertical push according to provided connectedFit
     * @param connectedFit connectedFit object containing all necessary parameters
     * @returns amount of necessary translation which will push the element into viewport
     */
    /**
     * Calculates necessary vertical push according to provided connectedFit
     * @private
     * @param {?} connectedFit connectedFit object containing all necessary parameters
     * @return {?} amount of necessary translation which will push the element into viewport
     */
    AutoPositionStrategy.prototype.verticalPush = /**
     * Calculates necessary vertical push according to provided connectedFit
     * @private
     * @param {?} connectedFit connectedFit object containing all necessary parameters
     * @return {?} amount of necessary translation which will push the element into viewport
     */
    function (connectedFit) {
        /** @type {?} */
        var topExtend = connectedFit.top;
        /** @type {?} */
        var bottomExtend = connectedFit.bottom - connectedFit.viewPortRect.bottom;
        if (topExtend < 0) {
            return Math.abs(topExtend);
        }
        else if (bottomExtend > 0) {
            return -Math.min(bottomExtend, topExtend);
        }
        else {
            return 0;
        }
    };
    return AutoPositionStrategy;
}(BaseFitPositionStrategy));
/**
 * Positions the element as in **Connected** positioning strategy and re-positions the element in
 * the view port (calculating a different start point) in case the element is partially getting out of view
 */
export { AutoPositionStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1wb3NpdGlvbi1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvb3ZlcmxheS9wb3NpdGlvbi9hdXRvLXBvc2l0aW9uLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFvQixNQUFNLGdCQUFnQixDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBZ0IsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFNckY7Ozs7O0lBQTBDLGdEQUF1QjtJQUFqRTs7SUFpSkEsQ0FBQztJQS9JRyxrQkFBa0I7Ozs7Ozs7O0lBQ1IsNENBQWE7Ozs7Ozs7SUFBdkIsVUFBd0IsT0FBb0IsRUFBRSxZQUEwQjs7WUFDOUQsZUFBZSxHQUFhLEVBQUU7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN6QjtpQkFBTTs7b0JBQ0csY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO2dCQUN4RCxlQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFjLGNBQWMsUUFBSyxDQUFDLENBQUM7YUFDM0Q7U0FDSjtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCO2lCQUFNOztvQkFDRyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7Z0JBQ3BELGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWMsWUFBWSxRQUFLLENBQUMsQ0FBQzthQUN6RDtTQUNKO1FBRUQs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QUFZLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU07UUFDM0UsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlCO2FBQU0sSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0gsT0FBTyxDQUFDLENBQUM7U0FDWjtJQUNMLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFqSkQsQ0FBMEMsdUJBQXVCLEdBaUpoRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZlcnRpY2FsQWxpZ25tZW50LCBIb3Jpem9udGFsQWxpZ25tZW50LCBQb3NpdGlvblNldHRpbmdzIH0gZnJvbSAnLi8uLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgQmFzZUZpdFBvc2l0aW9uU3RyYXRlZ3ksIENvbm5lY3RlZEZpdCB9IGZyb20gJy4vYmFzZS1maXQtcG9zaXRpb24tc3RyYXRlZ3knO1xuXG4vKipcbiAqIFBvc2l0aW9ucyB0aGUgZWxlbWVudCBhcyBpbiAqKkNvbm5lY3RlZCoqIHBvc2l0aW9uaW5nIHN0cmF0ZWd5IGFuZCByZS1wb3NpdGlvbnMgdGhlIGVsZW1lbnQgaW5cbiAqIHRoZSB2aWV3IHBvcnQgKGNhbGN1bGF0aW5nIGEgZGlmZmVyZW50IHN0YXJ0IHBvaW50KSBpbiBjYXNlIHRoZSBlbGVtZW50IGlzIHBhcnRpYWxseSBnZXR0aW5nIG91dCBvZiB2aWV3XG4gKi9cbmV4cG9ydCBjbGFzcyBBdXRvUG9zaXRpb25TdHJhdGVneSBleHRlbmRzIEJhc2VGaXRQb3NpdGlvblN0cmF0ZWd5IHtcblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHByb3RlY3RlZCBmaXRJblZpZXdwb3J0KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjb25uZWN0ZWRGaXQ6IENvbm5lY3RlZEZpdCkge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1TdHJpbmc6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGlmICghY29ubmVjdGVkRml0LmZpdEhvcml6b250YWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkZsaXBIb3Jpem9udGFsKGNvbm5lY3RlZEZpdCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZsaXBIb3Jpem9udGFsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvcml6b250YWxQdXNoID0gdGhpcy5ob3Jpem9udGFsUHVzaChjb25uZWN0ZWRGaXQpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZy5wdXNoKGB0cmFuc2xhdGVYKCR7aG9yaXpvbnRhbFB1c2h9cHgpYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbm5lY3RlZEZpdC5maXRWZXJ0aWNhbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FuRmxpcFZlcnRpY2FsKGNvbm5lY3RlZEZpdCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZsaXBWZXJ0aWNhbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbFB1c2ggPSB0aGlzLnZlcnRpY2FsUHVzaChjb25uZWN0ZWRGaXQpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZy5wdXNoKGB0cmFuc2xhdGVZKCR7dmVydGljYWxQdXNofXB4KWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmcuam9pbignICcpLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgZWxlbWVudCBjYW4gYmUgZmxpcHBlZCB3aXRob3V0IGdldCBvZmYgdGhlIHZpZXdwb3J0XG4gICAgICogQHBhcmFtIGNvbm5lY3RlZEZpdCBjb25uZWN0ZWRGaXQgb2JqZWN0IGNvbnRhaW5pbmcgYWxsIG5lY2Vzc2FyeSBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBlbGVtZW50IGNhbiBiZSBmbGlwcGVkIGFuZCBzdGFpbiBpbiB2aWV3cG9ydFxuICAgICAqL1xuICAgIHByaXZhdGUgY2FuRmxpcEhvcml6b250YWwoY29ubmVjdGVkRml0OiBDb25uZWN0ZWRGaXQpOiBib29sZWFuIHtcbiAgICAgICAgLy8gIEhvcml6b250YWxBbGlnbm1lbnQgY2FuIGJlIExlZnQgPSAtMTsgQ2VudGVyID0gLTAuNSBvciBSaWdodCA9IDAuXG4gICAgICAgIC8vICBUbyB2aXJ0dWFsbHkgZmxpcCBkaXJlY3Rpb24gYW5kIHN0YXJ0IHBvaW50IChib3RoIGFyZSBIb3Jpem9udGFsQWxpZ25tZW50KSB3ZSBjYW4gZG8gdGhpczpcbiAgICAgICAgLy8gIGZsaXBwZWRBbGlnbm1lbnQgPSAoLTEpICogKEhvcml6b250YWxBbGlnbm1lbnQgKyAxKVxuICAgICAgICAvLyAgdGhpcyB3YXk6XG4gICAgICAgIC8vICAoLTEpICogKExlZnQgKyAxKSA9IDAgPSBSaWdodFxuICAgICAgICAvLyAgKC0xKSAqIChDZW50ZXIgKyAxKSA9IC0wLjUgPSBDZW50ZXJcbiAgICAgICAgLy8gICgtMSkgKiAoUmlnaHQgKyAxKSA9IC0xID0gTGVmdFxuICAgICAgICBjb25zdCBmbGlwcGVkU3RhcnRQb2ludCA9ICgtMSkgKiAodGhpcy5zZXR0aW5ncy5ob3Jpem9udGFsU3RhcnRQb2ludCArIDEpO1xuICAgICAgICBjb25zdCBmbGlwcGVkRGlyZWN0aW9uID0gKC0xKSAqICh0aGlzLnNldHRpbmdzLmhvcml6b250YWxEaXJlY3Rpb24gKyAxKTtcblxuICAgICAgICBjb25zdCBsZWZ0Qm9yZGVyID0gdGhpcy5jYWxjdWxhdGVMZWZ0KFxuICAgICAgICAgICAgY29ubmVjdGVkRml0LnRhcmdldFJlY3QsIGNvbm5lY3RlZEZpdC5jb250ZW50RWxlbWVudFJlY3QsIGZsaXBwZWRTdGFydFBvaW50LCBmbGlwcGVkRGlyZWN0aW9uKTtcbiAgICAgICAgY29uc3QgcmlnaHRCb3JkZXIgPSBsZWZ0Qm9yZGVyICsgY29ubmVjdGVkRml0LmNvbnRlbnRFbGVtZW50UmVjdC53aWR0aDtcbiAgICAgICAgcmV0dXJuIGNvbm5lY3RlZEZpdC52aWV3UG9ydFJlY3QubGVmdCA8IGxlZnRCb3JkZXIgJiYgcmlnaHRCb3JkZXIgPCBjb25uZWN0ZWRGaXQudmlld1BvcnRSZWN0LnJpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBlbGVtZW50IGNhbiBiZSBmbGlwcGVkIHdpdGhvdXQgZ2V0IG9mZiB0aGUgdmlld3BvcnRcbiAgICAgKiBAcGFyYW0gY29ubmVjdGVkRml0IGNvbm5lY3RlZEZpdCBvYmplY3QgY29udGFpbmluZyBhbGwgbmVjZXNzYXJ5IHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIGVsZW1lbnQgY2FuIGJlIGZsaXBwZWQgYW5kIHN0YWluIGluIHZpZXdwb3J0XG4gICAgICovXG4gICAgcHJpdmF0ZSBjYW5GbGlwVmVydGljYWwoY29ubmVjdGVkRml0OiBDb25uZWN0ZWRGaXQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZmxpcHBlZFN0YXJ0UG9pbnQgPSAoLTEpICogKHRoaXMuc2V0dGluZ3MudmVydGljYWxTdGFydFBvaW50ICsgMSk7XG4gICAgICAgIGNvbnN0IGZsaXBwZWREaXJlY3Rpb24gPSAoLTEpICogKHRoaXMuc2V0dGluZ3MudmVydGljYWxEaXJlY3Rpb24gKyAxKTtcblxuICAgICAgICBjb25zdCB0b3BCb3JkZXIgPSB0aGlzLmNhbGN1bGF0ZVRvcChcbiAgICAgICAgICAgIGNvbm5lY3RlZEZpdC50YXJnZXRSZWN0LCBjb25uZWN0ZWRGaXQuY29udGVudEVsZW1lbnRSZWN0LCBmbGlwcGVkU3RhcnRQb2ludCwgZmxpcHBlZERpcmVjdGlvbik7XG4gICAgICAgIGNvbnN0IGJvdHRvbUJvcmRlciA9IHRvcEJvcmRlciArIGNvbm5lY3RlZEZpdC5jb250ZW50RWxlbWVudFJlY3QuaGVpZ2h0O1xuICAgICAgICByZXR1cm4gY29ubmVjdGVkRml0LnZpZXdQb3J0UmVjdC50b3AgPCB0b3BCb3JkZXIgJiYgYm90dG9tQm9yZGVyIDwgY29ubmVjdGVkRml0LnZpZXdQb3J0UmVjdC5ib3R0b207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmxpcHMgZGlyZWN0aW9uIGFuZCBzdGFydCBwb2ludCBvZiB0aGUgcG9zaXRpb24gc2V0dGluZ3NcbiAgICAgKi9cbiAgICBwcml2YXRlIGZsaXBIb3Jpem9udGFsKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2V0dGluZ3MuaG9yaXpvbnRhbERpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBIb3Jpem9udGFsQWxpZ25tZW50LkxlZnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5ob3Jpem9udGFsRGlyZWN0aW9uID0gSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmhvcml6b250YWxEaXJlY3Rpb24gPSBIb3Jpem9udGFsQWxpZ25tZW50LkxlZnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLnNldHRpbmdzLmhvcml6b250YWxTdGFydFBvaW50KSB7XG4gICAgICAgICAgICBjYXNlIEhvcml6b250YWxBbGlnbm1lbnQuTGVmdDpcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmhvcml6b250YWxTdGFydFBvaW50ID0gSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmhvcml6b250YWxTdGFydFBvaW50ID0gSG9yaXpvbnRhbEFsaWdubWVudC5MZWZ0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmxpcHMgZGlyZWN0aW9uIGFuZCBzdGFydCBwb2ludCBvZiB0aGUgcG9zaXRpb24gc2V0dGluZ3NcbiAgICAgKi9cbiAgICBwcml2YXRlIGZsaXBWZXJ0aWNhbCgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnNldHRpbmdzLnZlcnRpY2FsRGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFZlcnRpY2FsQWxpZ25tZW50LlRvcDpcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnZlcnRpY2FsRGlyZWN0aW9uID0gVmVydGljYWxBbGlnbm1lbnQuQm90dG9tO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC5Cb3R0b206XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbERpcmVjdGlvbiA9IFZlcnRpY2FsQWxpZ25tZW50LlRvcDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2V0dGluZ3MudmVydGljYWxTdGFydFBvaW50KSB7XG4gICAgICAgICAgICBjYXNlIFZlcnRpY2FsQWxpZ25tZW50LlRvcDpcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnZlcnRpY2FsU3RhcnRQb2ludCA9IFZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVmVydGljYWxBbGlnbm1lbnQuQm90dG9tOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MudmVydGljYWxTdGFydFBvaW50ID0gVmVydGljYWxBbGlnbm1lbnQuVG9wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBuZWNlc3NhcnkgaG9yaXpvbnRhbCBwdXNoIGFjY29yZGluZyB0byBwcm92aWRlZCBjb25uZWN0ZWRGaXRcbiAgICAgKiBAcGFyYW0gY29ubmVjdGVkRml0IGNvbm5lY3RlZEZpdCBvYmplY3QgY29udGFpbmluZyBhbGwgbmVjZXNzYXJ5IHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyBhbW91bnQgb2YgbmVjZXNzYXJ5IHRyYW5zbGF0aW9uIHdoaWNoIHdpbGwgcHVzaCB0aGUgZWxlbWVudCBpbnRvIHZpZXdwb3J0XG4gICAgICovXG4gICAgcHJpdmF0ZSBob3Jpem9udGFsUHVzaChjb25uZWN0ZWRGaXQ6IENvbm5lY3RlZEZpdCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGxlZnRFeHRlbmQgPSBjb25uZWN0ZWRGaXQubGVmdDtcbiAgICAgICAgY29uc3QgcmlnaHRFeHRlbmQgPSBjb25uZWN0ZWRGaXQucmlnaHQgLSBjb25uZWN0ZWRGaXQudmlld1BvcnRSZWN0LnJpZ2h0O1xuICAgICAgICAvLyAgaWYgbGVmdEV4dGVuZCA8IDAgb3ZlcmxheSBnb2VzIGJleW9uZCBsZWZ0IGVuZCBvZiB0aGUgc2NyZWVuLiBXZSBzaG91bGQgcHVzaCBpdCBiYWNrIHdpdGggZXhhY3RseVxuICAgICAgICAvLyAgYXMgbXVjaCBhcyBpdCBpcyBiZXlvbmQgdGhlIHNjcmVlbi5cbiAgICAgICAgLy8gIGlmIHJpZ2h0RXh0ZW5kID4gMCBvdmVybGF5IGdvZXMgYmV5b25kIHJpZ2h0IGVuZCBvZiB0aGUgc2NyZWVuLiBXZSBzaG91bGQgcHVzaCBpdCBiYWNrIHdpdGggdGhlXG4gICAgICAgIC8vICBleHRlbmQgYnV0IHdpdGggYW1vdW50IG5vdCBiaWdnZXIgdGhhbiB3aGF0IGxlZnQgYmV0d2VlbiBsZWZ0IGJvcmRlciBvZiBzY3JlZW4gYW5kIGxlZnQgYm9yZGVyIG9mXG4gICAgICAgIC8vICBvdmVybGF5LCBlLmcuIGxlZnRFeHRlbmRcbiAgICAgICAgaWYgKGxlZnRFeHRlbmQgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hYnMobGVmdEV4dGVuZCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmlnaHRFeHRlbmQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLSBNYXRoLm1pbihyaWdodEV4dGVuZCwgbGVmdEV4dGVuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgbmVjZXNzYXJ5IHZlcnRpY2FsIHB1c2ggYWNjb3JkaW5nIHRvIHByb3ZpZGVkIGNvbm5lY3RlZEZpdFxuICAgICAqIEBwYXJhbSBjb25uZWN0ZWRGaXQgY29ubmVjdGVkRml0IG9iamVjdCBjb250YWluaW5nIGFsbCBuZWNlc3NhcnkgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIGFtb3VudCBvZiBuZWNlc3NhcnkgdHJhbnNsYXRpb24gd2hpY2ggd2lsbCBwdXNoIHRoZSBlbGVtZW50IGludG8gdmlld3BvcnRcbiAgICAgKi9cbiAgICBwcml2YXRlIHZlcnRpY2FsUHVzaChjb25uZWN0ZWRGaXQ6IENvbm5lY3RlZEZpdCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHRvcEV4dGVuZCA9IGNvbm5lY3RlZEZpdC50b3A7XG4gICAgICAgIGNvbnN0IGJvdHRvbUV4dGVuZCA9IGNvbm5lY3RlZEZpdC5ib3R0b20gLSBjb25uZWN0ZWRGaXQudmlld1BvcnRSZWN0LmJvdHRvbTtcbiAgICAgICAgaWYgKHRvcEV4dGVuZCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyh0b3BFeHRlbmQpO1xuICAgICAgICB9IGVsc2UgaWYgKGJvdHRvbUV4dGVuZCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAtIE1hdGgubWluKGJvdHRvbUV4dGVuZCwgdG9wRXh0ZW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19