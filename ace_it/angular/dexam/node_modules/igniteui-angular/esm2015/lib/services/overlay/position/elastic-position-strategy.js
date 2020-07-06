/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseFitPositionStrategy } from './base-fit-position-strategy';
import { HorizontalAlignment, VerticalAlignment } from '../utilities';
/**
 * Positions the element as in **Connected** positioning strategy and resize the element
 * to fit in the view port in case the element is partially getting out of view
 */
export class ElasticPositionStrategy extends BaseFitPositionStrategy {
    /**
     * \@inheritdoc
     * @protected
     * @param {?} element
     * @param {?} connectedFit
     * @return {?}
     */
    fitInViewport(element, connectedFit) {
        element.classList.add('igx-overlay__content--elastic');
        /** @type {?} */
        const transformString = [];
        if (!connectedFit.fitHorizontal) {
            /** @type {?} */
            const maxReduction = Math.max(0, connectedFit.contentElementRect.width - this.settings.minSize.width);
            /** @type {?} */
            const leftExtend = Math.max(0, connectedFit.viewPortRect.left - connectedFit.left);
            /** @type {?} */
            const rightExtend = Math.max(0, connectedFit.right - connectedFit.viewPortRect.right);
            /** @type {?} */
            const reduction = Math.min(maxReduction, leftExtend + rightExtend);
            element.style.width = `${connectedFit.contentElementRect.width - reduction}px`;
            //  if direction is center and element goes off the screen in left direction we should push the
            //  element to the right. Prevents left still going out of view when normally positioned
            if (this.settings.horizontalDirection === HorizontalAlignment.Center) {
                //  the amount of translation depends on whether element goes off the screen to the left,
                //  to the right or in both directions, as well as how much it goes of the screen and finally
                //  on the minSize. The translation should be proportional between left and right extend
                //  taken from the reduction
                /** @type {?} */
                const translation = leftExtend * reduction / (leftExtend + rightExtend);
                if (translation > 0) {
                    transformString.push(`translateX(${translation}px)`);
                }
            }
        }
        if (!connectedFit.fitVertical) {
            /** @type {?} */
            const maxReduction = Math.max(0, connectedFit.contentElementRect.height - this.settings.minSize.height);
            /** @type {?} */
            const topExtend = Math.max(0, connectedFit.viewPortRect.top - connectedFit.top);
            /** @type {?} */
            const bottomExtend = Math.max(0, connectedFit.bottom - connectedFit.viewPortRect.bottom);
            /** @type {?} */
            const reduction = Math.min(maxReduction, topExtend + bottomExtend);
            element.style.height = `${connectedFit.contentElementRect.height - reduction}px`;
            //  if direction is middle and element goes off the screen in top direction we should push the
            //  element to the bottom. Prevents top still going out of view when normally positioned
            if (this.settings.verticalDirection === VerticalAlignment.Middle) {
                //  the amount of translation depends on whether element goes off the screen to the top,
                //  to the bottom or in both directions, as well as how much it goes of the screen and finally
                //  on the minSize. The translation should be proportional between top and bottom extend
                //  taken from the reduction
                /** @type {?} */
                const translation = topExtend * reduction / (topExtend + bottomExtend);
                if (translation > 0) {
                    transformString.push(`translateY(${translation}px)`);
                }
            }
        }
        element.style.transform = transformString.join(' ').trim();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhc3RpYy1wb3NpdGlvbi1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvb3ZlcmxheS9wb3NpdGlvbi9lbGFzdGljLXBvc2l0aW9uLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQWdCLE1BQU0sOEJBQThCLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFvQixNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFNeEYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLHVCQUF1Qjs7Ozs7Ozs7SUFFdEQsYUFBYSxDQUFDLE9BQW9CLEVBQUUsWUFBMEI7UUFDcEUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7Y0FDakQsZUFBZSxHQUFhLEVBQUU7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUU7O2tCQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7O2tCQUMvRixVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQzs7a0JBQzVFLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDOztrQkFDL0UsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsR0FBRyxXQUFXLENBQUM7WUFDbEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFHLFNBQVMsSUFBSSxDQUFDO1lBRS9FLCtGQUErRjtZQUMvRix3RkFBd0Y7WUFDeEYsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixLQUFLLG1CQUFtQixDQUFDLE1BQU0sRUFBRTs7Ozs7O3NCQUs1RCxXQUFXLEdBQUcsVUFBVSxHQUFHLFNBQVMsR0FBRyxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7Z0JBQ3ZFLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRTtvQkFDakIsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLFdBQVcsS0FBSyxDQUFDLENBQUM7aUJBQ3hEO2FBQ0o7U0FDSjtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFOztrQkFDckIsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztrQkFDakcsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7O2tCQUN6RSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQzs7a0JBQ2xGLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBQ2xFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxTQUFTLElBQUksQ0FBQztZQUVqRiw4RkFBOEY7WUFDOUYsd0ZBQXdGO1lBQ3hGLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsS0FBSyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7Ozs7OztzQkFLeEQsV0FBVyxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO2dCQUN0RSxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUU7b0JBQ2pCLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxXQUFXLEtBQUssQ0FBQyxDQUFDO2lCQUN4RDthQUNKO1NBQ0o7UUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9ELENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VGaXRQb3NpdGlvblN0cmF0ZWd5LCBDb25uZWN0ZWRGaXQgfSBmcm9tICcuL2Jhc2UtZml0LXBvc2l0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7IEhvcml6b250YWxBbGlnbm1lbnQsIFZlcnRpY2FsQWxpZ25tZW50LCBQb3NpdGlvblNldHRpbmdzIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuLyoqXG4gKiBQb3NpdGlvbnMgdGhlIGVsZW1lbnQgYXMgaW4gKipDb25uZWN0ZWQqKiBwb3NpdGlvbmluZyBzdHJhdGVneSBhbmQgcmVzaXplIHRoZSBlbGVtZW50XG4gKiB0byBmaXQgaW4gdGhlIHZpZXcgcG9ydCBpbiBjYXNlIHRoZSBlbGVtZW50IGlzIHBhcnRpYWxseSBnZXR0aW5nIG91dCBvZiB2aWV3XG4gKi9cbmV4cG9ydCBjbGFzcyBFbGFzdGljUG9zaXRpb25TdHJhdGVneSBleHRlbmRzIEJhc2VGaXRQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwcm90ZWN0ZWQgZml0SW5WaWV3cG9ydChlbGVtZW50OiBIVE1MRWxlbWVudCwgY29ubmVjdGVkRml0OiBDb25uZWN0ZWRGaXQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpZ3gtb3ZlcmxheV9fY29udGVudC0tZWxhc3RpYycpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1TdHJpbmc6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGlmICghY29ubmVjdGVkRml0LmZpdEhvcml6b250YWwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFJlZHVjdGlvbiA9IE1hdGgubWF4KDAsIGNvbm5lY3RlZEZpdC5jb250ZW50RWxlbWVudFJlY3Qud2lkdGggLSB0aGlzLnNldHRpbmdzLm1pblNpemUud2lkdGgpO1xuICAgICAgICAgICAgY29uc3QgbGVmdEV4dGVuZCA9IE1hdGgubWF4KDAsIGNvbm5lY3RlZEZpdC52aWV3UG9ydFJlY3QubGVmdCAtIGNvbm5lY3RlZEZpdC5sZWZ0KTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0RXh0ZW5kID0gTWF0aC5tYXgoMCwgY29ubmVjdGVkRml0LnJpZ2h0IC0gY29ubmVjdGVkRml0LnZpZXdQb3J0UmVjdC5yaWdodCk7XG4gICAgICAgICAgICBjb25zdCByZWR1Y3Rpb24gPSBNYXRoLm1pbihtYXhSZWR1Y3Rpb24sIGxlZnRFeHRlbmQgKyByaWdodEV4dGVuZCk7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gYCR7Y29ubmVjdGVkRml0LmNvbnRlbnRFbGVtZW50UmVjdC53aWR0aCAtIHJlZHVjdGlvbn1weGA7XG5cbiAgICAgICAgICAgIC8vICBpZiBkaXJlY3Rpb24gaXMgY2VudGVyIGFuZCBlbGVtZW50IGdvZXMgb2ZmIHRoZSBzY3JlZW4gaW4gbGVmdCBkaXJlY3Rpb24gd2Ugc2hvdWxkIHB1c2ggdGhlXG4gICAgICAgICAgICAvLyAgZWxlbWVudCB0byB0aGUgcmlnaHQuIFByZXZlbnRzIGxlZnQgc3RpbGwgZ29pbmcgb3V0IG9mIHZpZXcgd2hlbiBub3JtYWxseSBwb3NpdGlvbmVkXG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5ob3Jpem9udGFsRGlyZWN0aW9uID09PSBIb3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcikge1xuICAgICAgICAgICAgICAgIC8vICB0aGUgYW1vdW50IG9mIHRyYW5zbGF0aW9uIGRlcGVuZHMgb24gd2hldGhlciBlbGVtZW50IGdvZXMgb2ZmIHRoZSBzY3JlZW4gdG8gdGhlIGxlZnQsXG4gICAgICAgICAgICAgICAgLy8gIHRvIHRoZSByaWdodCBvciBpbiBib3RoIGRpcmVjdGlvbnMsIGFzIHdlbGwgYXMgaG93IG11Y2ggaXQgZ29lcyBvZiB0aGUgc2NyZWVuIGFuZCBmaW5hbGx5XG4gICAgICAgICAgICAgICAgLy8gIG9uIHRoZSBtaW5TaXplLiBUaGUgdHJhbnNsYXRpb24gc2hvdWxkIGJlIHByb3BvcnRpb25hbCBiZXR3ZWVuIGxlZnQgYW5kIHJpZ2h0IGV4dGVuZFxuICAgICAgICAgICAgICAgIC8vICB0YWtlbiBmcm9tIHRoZSByZWR1Y3Rpb25cbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IGxlZnRFeHRlbmQgKiByZWR1Y3Rpb24gLyAobGVmdEV4dGVuZCArIHJpZ2h0RXh0ZW5kKTtcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRpb24gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZy5wdXNoKGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRpb259cHgpYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb25uZWN0ZWRGaXQuZml0VmVydGljYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFJlZHVjdGlvbiA9IE1hdGgubWF4KDAsIGNvbm5lY3RlZEZpdC5jb250ZW50RWxlbWVudFJlY3QuaGVpZ2h0IC0gdGhpcy5zZXR0aW5ncy5taW5TaXplLmhlaWdodCk7XG4gICAgICAgICAgICBjb25zdCB0b3BFeHRlbmQgPSBNYXRoLm1heCgwLCBjb25uZWN0ZWRGaXQudmlld1BvcnRSZWN0LnRvcCAtIGNvbm5lY3RlZEZpdC50b3ApO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tRXh0ZW5kID0gTWF0aC5tYXgoMCwgY29ubmVjdGVkRml0LmJvdHRvbSAtIGNvbm5lY3RlZEZpdC52aWV3UG9ydFJlY3QuYm90dG9tKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjdGlvbiA9IE1hdGgubWluKG1heFJlZHVjdGlvbiwgdG9wRXh0ZW5kICsgYm90dG9tRXh0ZW5kKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7Y29ubmVjdGVkRml0LmNvbnRlbnRFbGVtZW50UmVjdC5oZWlnaHQgLSByZWR1Y3Rpb259cHhgO1xuXG4gICAgICAgICAgICAvLyAgaWYgZGlyZWN0aW9uIGlzIG1pZGRsZSBhbmQgZWxlbWVudCBnb2VzIG9mZiB0aGUgc2NyZWVuIGluIHRvcCBkaXJlY3Rpb24gd2Ugc2hvdWxkIHB1c2ggdGhlXG4gICAgICAgICAgICAvLyAgZWxlbWVudCB0byB0aGUgYm90dG9tLiBQcmV2ZW50cyB0b3Agc3RpbGwgZ29pbmcgb3V0IG9mIHZpZXcgd2hlbiBub3JtYWxseSBwb3NpdGlvbmVkXG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy52ZXJ0aWNhbERpcmVjdGlvbiA9PT0gVmVydGljYWxBbGlnbm1lbnQuTWlkZGxlKSB7XG4gICAgICAgICAgICAgICAgLy8gIHRoZSBhbW91bnQgb2YgdHJhbnNsYXRpb24gZGVwZW5kcyBvbiB3aGV0aGVyIGVsZW1lbnQgZ29lcyBvZmYgdGhlIHNjcmVlbiB0byB0aGUgdG9wLFxuICAgICAgICAgICAgICAgIC8vICB0byB0aGUgYm90dG9tIG9yIGluIGJvdGggZGlyZWN0aW9ucywgYXMgd2VsbCBhcyBob3cgbXVjaCBpdCBnb2VzIG9mIHRoZSBzY3JlZW4gYW5kIGZpbmFsbHlcbiAgICAgICAgICAgICAgICAvLyAgb24gdGhlIG1pblNpemUuIFRoZSB0cmFuc2xhdGlvbiBzaG91bGQgYmUgcHJvcG9ydGlvbmFsIGJldHdlZW4gdG9wIGFuZCBib3R0b20gZXh0ZW5kXG4gICAgICAgICAgICAgICAgLy8gIHRha2VuIGZyb20gdGhlIHJlZHVjdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdG9wRXh0ZW5kICogcmVkdWN0aW9uIC8gKHRvcEV4dGVuZCArIGJvdHRvbUV4dGVuZCk7XG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9uID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcucHVzaChgdHJhbnNsYXRlWSgke3RyYW5zbGF0aW9ufXB4KWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZy5qb2luKCcgJykudHJpbSgpO1xuICAgIH1cbn1cbiJdfQ==