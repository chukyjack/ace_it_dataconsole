/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, isDevMode } from '@angular/core';
import { PageScrollConfig } from './mdb-page-scroll.config';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
var PageScrollService = /** @class */ (function () {
    function PageScrollService() {
        var _this = this;
        this.runningInstances = [];
        this.onInterrupted = {
            report: (/**
             * @param {?} event
             * @param {?} pageScrollInstance
             * @return {?}
             */
            function (event, pageScrollInstance) {
                if (!pageScrollInstance.interruptible) {
                    // Non-interruptible anyway, so do not stop anything
                    return;
                }
                /** @type {?} */
                var shouldStop = true;
                if (event.type === 'keyup') {
                    // Only stop if specific keys have been pressed, for all others don't stop anything
                    if (PageScrollConfig._interruptKeys.indexOf(((/** @type {?} */ (event))).keyCode) === -1) {
                        // The pressed key is not in the list of interrupting keys
                        shouldStop = false;
                    }
                }
                else if (event.type === 'mousedown') {
                    // For mousedown events we only stop the scroll animation of the mouse has
                    // been clicked inside the scrolling container
                    if (!pageScrollInstance.scrollingViews.some((/**
                     * @param {?} scrollingView
                     * @return {?}
                     */
                    function (scrollingView) { return scrollingView.contains(event.target); }))) {
                        // Mouse clicked an element which is not inside any of the the scrolling containers
                        shouldStop = false;
                    }
                }
                if (shouldStop) {
                    _this.stopAll(pageScrollInstance.namespace);
                }
            })
        };
        if (PageScrollService.instanceCounter > 0 && isDevMode()) {
            console.warn('An instance of PageScrollService already exists, usually ' +
                'including one provider should be enough, so double check.');
        }
        PageScrollService.instanceCounter++;
    }
    /**
     * @private
     * @param {?} interrupted
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.stopInternal = /**
     * @private
     * @param {?} interrupted
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (interrupted, pageScrollInstance) {
        /** @type {?} */
        var index = this.runningInstances.indexOf(pageScrollInstance);
        if (index >= 0) {
            this.runningInstances.splice(index, 1);
        }
        if (pageScrollInstance.interruptListenersAttached) {
            pageScrollInstance.detachInterruptListeners();
        }
        if (pageScrollInstance.timer) {
            // Clear/Stop the timer
            clearInterval(pageScrollInstance.timer);
            // Clear the reference to this timer
            pageScrollInstance.timer = undefined;
            pageScrollInstance.fireEvent(!interrupted);
            return true;
        }
        return false;
    };
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param pageScrollInstance
     */
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.start = /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (pageScrollInstance) {
        var _this = this;
        // Stop all possibly running scroll animations in the same namespace
        this.stopAll(pageScrollInstance.namespace);
        if (pageScrollInstance.scrollingViews === null || pageScrollInstance.scrollingViews.length === 0) {
            // No scrollingViews specified, thus we can't animate anything
            if (isDevMode()) {
                console.warn('No scrollingViews specified, this ng2-page-scroll does not know which DOM elements to scroll');
            }
            return;
        }
        /** @type {?} */
        var startScrollPositionFound = false;
        // Reset start scroll position to 0. If any of the scrollingViews has a different one, it will be extracted next
        pageScrollInstance.startScrollPosition = 0;
        // Get the start scroll position from the scrollingViews (e.g. if the user already scrolled down the content)
        pageScrollInstance.scrollingViews.forEach((/**
         * @param {?} scrollingView
         * @return {?}
         */
        function (scrollingView) {
            if (Util.isUndefinedOrNull(scrollingView)) {
                return;
            }
            // Get the scrollTop or scrollLeft value of the first scrollingView that returns a value for its "scrollTop"
            // or "scrollLeft" property that is not undefined and unequal to 0
            /** @type {?} */
            var scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);
            if (!startScrollPositionFound && scrollPosition) {
                // We found a scrollingView that does not have scrollTop or scrollLeft 0
                // Return the scroll position value, as this will be our startScrollPosition
                pageScrollInstance.startScrollPosition = scrollPosition;
                startScrollPositionFound = true;
            }
        }));
        /** @type {?} */
        var pageScrollOffset = pageScrollInstance.getCurrentOffset();
        // Calculate the target position that the scroll animation should go to
        /** @type {?} */
        var scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
        pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.verticalScrolling ? scrollTargetPosition.top : scrollTargetPosition.left) - pageScrollOffset);
        // Calculate the distance we need to go in total
        pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;
        if (isNaN(pageScrollInstance.distanceToScroll)) {
            // We weren't able to find the target position, maybe the element does not exist?
            if (isDevMode()) {
                // console.log('Scrolling not possible, as we can\'t find the specified target');
            }
            pageScrollInstance.fireEvent(false);
            return;
        }
        // We're at the final destination already
        // OR we need to scroll down but are already at the end
        // OR we need to scroll up but are at the top already
        /** @type {?} */
        var allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < PageScrollConfig._minScrollDistance;
        // Check how long we need to scroll if a speed option is given
        // Default executionDuration is the specified duration
        pageScrollInstance.executionDuration = pageScrollInstance.duration;
        // Maybe we need to pay attention to the speed option?
        if (!Util.isUndefinedOrNull(pageScrollInstance.speed) && Util.isUndefinedOrNull(pageScrollInstance.duration)) {
            // Speed option is set and no duration => calculate duration based on speed and scroll distance
            pageScrollInstance.executionDuration = pageScrollInstance.distanceToScroll / pageScrollInstance.speed * 1000;
        }
        // We should go there directly, as our "animation" would have one big step
        // only anyway and this way we save the interval stuff
        /** @type {?} */
        var tooShortInterval = pageScrollInstance.executionDuration <= PageScrollConfig._interval;
        if (allReadyAtDestination || tooShortInterval) {
            if (isDevMode()) {
                if (allReadyAtDestination) {
                    // console.log('Scrolling not possible, as we can\'t get any closer to the destination');
                }
                else {
                    // console.log('Scroll duration shorter that interval length, jumping to target');
                }
            }
            pageScrollInstance.setScrollPosition(pageScrollInstance.targetScrollPosition);
            pageScrollInstance.fireEvent(true);
            return;
        }
        // Register the interrupt listeners if we want an interruptible scroll animation
        if (pageScrollInstance.interruptible ||
            (Util.isUndefinedOrNull(pageScrollInstance.interruptible) && PageScrollConfig.defaultInterruptible)) {
            pageScrollInstance.attachInterruptListeners(this.onInterrupted);
        }
        // Let's get started, get the start time...
        pageScrollInstance.startTime = new Date().getTime();
        // .. and calculate the end time (when we need to finish at last)
        pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.executionDuration;
        pageScrollInstance.timer = setInterval((/**
         * @param {?} _pageScrollInstance
         * @return {?}
         */
        function (_pageScrollInstance) {
            // Take the current time
            /** @type {?} */
            var currentTime = new Date().getTime();
            // Determine the new scroll position
            /** @type {?} */
            var newScrollPosition;
            /** @type {?} */
            var stopNow = false;
            if (_pageScrollInstance.endTime <= currentTime) {
                // We're over the time already, so go the targetScrollPosition (aka destination)
                newScrollPosition = _pageScrollInstance.targetScrollPosition;
                stopNow = true;
            }
            else {
                // Calculate the scroll position based on the current time using the easing function
                newScrollPosition = Math.round(_pageScrollInstance.easingLogic.ease(currentTime - _pageScrollInstance.startTime, _pageScrollInstance.startScrollPosition, _pageScrollInstance.distanceToScroll, _pageScrollInstance.executionDuration));
            }
            // Set the new scrollPosition to all scrollingViews elements
            if (!_pageScrollInstance.setScrollPosition(newScrollPosition)) {
                // Setting the new scrollTop/scrollLeft value failed for all ScrollingViews
                // early stop the scroll animation to save resources
                stopNow = true;
            }
            // At the end do the internal stop maintenance and fire the pageScrollFinish event
            // (otherwise the event might arrive at "too early")
            if (stopNow) {
                _this.stopInternal(false, _pageScrollInstance);
            }
        }), PageScrollConfig._interval, pageScrollInstance);
        // Register the instance as running one
        this.runningInstances.push(pageScrollInstance);
    };
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param namespace
     */
    //   public stopAll(namespace?: string): boolean {
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param {?=} namespace
     * @return {?}
     */
    //   public stopAll(namespace?: string): boolean {
    PageScrollService.prototype.stopAll = /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param {?=} namespace
     * @return {?}
     */
    //   public stopAll(namespace?: string): boolean {
    function (namespace) {
        if (this.runningInstances.length > 0) {
            /** @type {?} */
            var stoppedSome = false;
            for (var i = 0; i < this.runningInstances.length; ++i) {
                /** @type {?} */
                var pageScrollInstance = this.runningInstances[i];
                if (Util.isUndefinedOrNull(namespace) || namespace.length === 0 ||
                    pageScrollInstance.namespace === namespace) {
                    stoppedSome = true;
                    this.stopInternal(true, pageScrollInstance);
                    // Decrease the counter, as we removed an item from the array we iterate over
                    i--;
                }
            }
            return stoppedSome;
        }
        return false;
    };
    /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.stop = /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    function (pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    };
    PageScrollService.instanceCounter = 0;
    PageScrollService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PageScrollService.ctorParameters = function () { return []; };
    return PageScrollService;
}());
export { PageScrollService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageScrollService.instanceCounter;
    /**
     * @type {?}
     * @private
     */
    PageScrollService.prototype.runningInstances;
    /**
     * @type {?}
     * @private
     */
    PageScrollService.prototype.onInterrupted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Ntb290aHNjcm9sbC9tZGItcGFnZS1zY3JvbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxFQUFDLHFCQUFxQixJQUFJLElBQUksRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRTdFO0lBcU9FO1FBQUEsaUJBTUM7UUF0T08scUJBQWdCLEdBQXlCLEVBQUUsQ0FBQztRQUU1QyxrQkFBYSxHQUFzQjtZQUN6QyxNQUFNOzs7OztZQUFFLFVBQUMsS0FBWSxFQUFFLGtCQUFzQztnQkFDM0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRTtvQkFDbkMsb0RBQW9EO29CQUNwRCxPQUFPO2lCQUNWOztvQkFFRyxVQUFVLEdBQUcsSUFBSTtnQkFFckIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDeEIsbUZBQW1GO29CQUNuRixJQUFJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBZSxLQUFLLEVBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO3dCQUNoRiwwREFBMEQ7d0JBQzFELFVBQVUsR0FBRyxLQUFLLENBQUM7cUJBQ3RCO2lCQUNKO3FCQUFNLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7b0JBQ25DLDBFQUEwRTtvQkFDMUUsOENBQThDO29CQUM5QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUk7Ozs7b0JBQUMsVUFBQSxhQUFhLElBQUksT0FBQSxhQUFhLENB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QUcsSUFBSSxDQUFDO29CQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUM1Qyw2RUFBNkU7b0JBQzdFLENBQUMsRUFBRSxDQUFDO2lCQUNQO2FBQ0o7WUFDRCxPQUFPLFdBQVcsQ0FBQztTQUN0QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFTSxnQ0FBSTs7OztJQUFYLFVBQVksa0JBQXNDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBaE9jLGlDQUFlLEdBQUcsQ0FBQyxDQUFDOztnQkFIcEMsVUFBVTs7OztJQTRPWCx3QkFBQztDQUFBLEFBNU9ELElBNE9DO1NBM09ZLGlCQUFpQjs7Ozs7O0lBRTVCLGtDQUFtQzs7Ozs7SUFFbkMsNkNBQW9EOzs7OztJQUVwRCwwQ0E0QkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIGlzRGV2TW9kZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7UGFnZVNjcm9sbENvbmZpZ30gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwuY29uZmlnJztcbmltcG9ydCB7UGFnZVNjcm9sbEluc3RhbmNlLCBJbnRlcnJ1cHRSZXBvcnRlcn0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwuaW5zdGFuY2UnO1xuaW1wb3J0IHtQYWdlU2Nyb2xsVXRpbFNlcnZpY2UgYXMgVXRpbH0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwtdXRpbC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VTY3JvbGxTZXJ2aWNlIHtcblxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZUNvdW50ZXIgPSAwO1xuXG4gIHByaXZhdGUgcnVubmluZ0luc3RhbmNlczogUGFnZVNjcm9sbEluc3RhbmNlW10gPSBbXTtcblxuICBwcml2YXRlIG9uSW50ZXJydXB0ZWQ6IEludGVycnVwdFJlcG9ydGVyID0ge1xuICAgIHJlcG9ydDogKGV2ZW50OiBFdmVudCwgcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UpOiB2b2lkID0+IHtcbiAgICAgIGlmICghcGFnZVNjcm9sbEluc3RhbmNlLmludGVycnVwdGlibGUpIHtcbiAgICAgICAgICAvLyBOb24taW50ZXJydXB0aWJsZSBhbnl3YXksIHNvIGRvIG5vdCBzdG9wIGFueXRoaW5nXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2hvdWxkU3RvcCA9IHRydWU7XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAna2V5dXAnKSB7XG4gICAgICAgICAgLy8gT25seSBzdG9wIGlmIHNwZWNpZmljIGtleXMgaGF2ZSBiZWVuIHByZXNzZWQsIGZvciBhbGwgb3RoZXJzIGRvbid0IHN0b3AgYW55dGhpbmdcbiAgICAgICAgICBpZiAoUGFnZVNjcm9sbENvbmZpZy5faW50ZXJydXB0S2V5cy5pbmRleE9mKCg8S2V5Ym9hcmRFdmVudD5ldmVudCkua2V5Q29kZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIC8vIFRoZSBwcmVzc2VkIGtleSBpcyBub3QgaW4gdGhlIGxpc3Qgb2YgaW50ZXJydXB0aW5nIGtleXNcbiAgICAgICAgICAgICAgc2hvdWxkU3RvcCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgICAvLyBGb3IgbW91c2Vkb3duIGV2ZW50cyB3ZSBvbmx5IHN0b3AgdGhlIHNjcm9sbCBhbmltYXRpb24gb2YgdGhlIG1vdXNlIGhhc1xuICAgICAgICAgIC8vIGJlZW4gY2xpY2tlZCBpbnNpZGUgdGhlIHNjcm9sbGluZyBjb250YWluZXJcbiAgICAgICAgICBpZiAoIXBhZ2VTY3JvbGxJbnN0YW5jZS5zY3JvbGxpbmdWaWV3cy5zb21lKHNjcm9sbGluZ1ZpZXcgPT4gc2Nyb2xsaW5nVmlldy5jb250YWlucyhldmVudC50YXJnZXQpKSkge1xuICAgICAgICAgICAgICAvLyBNb3VzZSBjbGlja2VkIGFuIGVsZW1lbnQgd2hpY2ggaXMgbm90IGluc2lkZSBhbnkgb2YgdGhlIHRoZSBzY3JvbGxpbmcgY29udGFpbmVyc1xuICAgICAgICAgICAgICBzaG91bGRTdG9wID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdWxkU3RvcCkge1xuICAgICAgICAgIHRoaXMuc3RvcEFsbChwYWdlU2Nyb2xsSW5zdGFuY2UubmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBzdG9wSW50ZXJuYWwoaW50ZXJydXB0ZWQ6IGJvb2xlYW4sIHBhZ2VTY3JvbGxJbnN0YW5jZTogUGFnZVNjcm9sbEluc3RhbmNlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMucnVubmluZ0luc3RhbmNlcy5pbmRleE9mKHBhZ2VTY3JvbGxJbnN0YW5jZSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2VTY3JvbGxJbnN0YW5jZS5pbnRlcnJ1cHRMaXN0ZW5lcnNBdHRhY2hlZCkge1xuICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuZGV0YWNoSW50ZXJydXB0TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2VTY3JvbGxJbnN0YW5jZS50aW1lcikge1xuICAgICAgICAvLyBDbGVhci9TdG9wIHRoZSB0aW1lclxuICAgICAgICBjbGVhckludGVydmFsKHBhZ2VTY3JvbGxJbnN0YW5jZS50aW1lcik7XG4gICAgICAgIC8vIENsZWFyIHRoZSByZWZlcmVuY2UgdG8gdGhpcyB0aW1lclxuICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UudGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5maXJlRXZlbnQoIWludGVycnVwdGVkKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBhIHNjcm9sbCBhbmltYXRpb24uIEFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBhbmltYXRpb24gYXJlIHN0b3JlZCBpbiB0aGUgZ2l2ZW4ge0BsaW5rIFBhZ2VTY3JvbGxJbnN0YW5jZX0gb2JqZWN0LlxuICAgKlxuICAgKiBUaGlzIGlzIHRoZSBjb3JlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHdob2xlIGxpYnJhcnkuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlU2Nyb2xsSW5zdGFuY2VcbiAgICovXG4gIHB1YmxpYyBzdGFydChwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSk6IHZvaWQge1xuICAgICAgLy8gU3RvcCBhbGwgcG9zc2libHkgcnVubmluZyBzY3JvbGwgYW5pbWF0aW9ucyBpbiB0aGUgc2FtZSBuYW1lc3BhY2VcbiAgICAgIHRoaXMuc3RvcEFsbChwYWdlU2Nyb2xsSW5zdGFuY2UubmFtZXNwYWNlKTtcblxuICAgICAgaWYgKHBhZ2VTY3JvbGxJbnN0YW5jZS5zY3JvbGxpbmdWaWV3cyA9PT0gbnVsbCB8fCBwYWdlU2Nyb2xsSW5zdGFuY2Uuc2Nyb2xsaW5nVmlld3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gTm8gc2Nyb2xsaW5nVmlld3Mgc3BlY2lmaWVkLCB0aHVzIHdlIGNhbid0IGFuaW1hdGUgYW55dGhpbmdcbiAgICAgICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdObyBzY3JvbGxpbmdWaWV3cyBzcGVjaWZpZWQsIHRoaXMgbmcyLXBhZ2Utc2Nyb2xsIGRvZXMgbm90IGtub3cgd2hpY2ggRE9NIGVsZW1lbnRzIHRvIHNjcm9sbCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBzdGFydFNjcm9sbFBvc2l0aW9uRm91bmQgPSBmYWxzZTtcbiAgICAgIC8vIFJlc2V0IHN0YXJ0IHNjcm9sbCBwb3NpdGlvbiB0byAwLiBJZiBhbnkgb2YgdGhlIHNjcm9sbGluZ1ZpZXdzIGhhcyBhIGRpZmZlcmVudCBvbmUsIGl0IHdpbGwgYmUgZXh0cmFjdGVkIG5leHRcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5zdGFydFNjcm9sbFBvc2l0aW9uID0gMDtcblxuICAgICAgLy8gR2V0IHRoZSBzdGFydCBzY3JvbGwgcG9zaXRpb24gZnJvbSB0aGUgc2Nyb2xsaW5nVmlld3MgKGUuZy4gaWYgdGhlIHVzZXIgYWxyZWFkeSBzY3JvbGxlZCBkb3duIHRoZSBjb250ZW50KVxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLnNjcm9sbGluZ1ZpZXdzLmZvckVhY2goKHNjcm9sbGluZ1ZpZXc6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKHNjcm9sbGluZ1ZpZXcpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gR2V0IHRoZSBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCB2YWx1ZSBvZiB0aGUgZmlyc3Qgc2Nyb2xsaW5nVmlldyB0aGF0IHJldHVybnMgYSB2YWx1ZSBmb3IgaXRzIFwic2Nyb2xsVG9wXCJcbiAgICAgICAgICAvLyBvciBcInNjcm9sbExlZnRcIiBwcm9wZXJ0eSB0aGF0IGlzIG5vdCB1bmRlZmluZWQgYW5kIHVuZXF1YWwgdG8gMFxuXG4gICAgICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSBwYWdlU2Nyb2xsSW5zdGFuY2UuZ2V0U2Nyb2xsUHJvcGVydHlWYWx1ZShzY3JvbGxpbmdWaWV3KTtcbiAgICAgICAgICBpZiAoIXN0YXJ0U2Nyb2xsUG9zaXRpb25Gb3VuZCAmJiBzY3JvbGxQb3NpdGlvbikge1xuICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBhIHNjcm9sbGluZ1ZpZXcgdGhhdCBkb2VzIG5vdCBoYXZlIHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IDBcblxuICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHNjcm9sbCBwb3NpdGlvbiB2YWx1ZSwgYXMgdGhpcyB3aWxsIGJlIG91ciBzdGFydFNjcm9sbFBvc2l0aW9uXG4gICAgICAgICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5zdGFydFNjcm9sbFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb247XG4gICAgICAgICAgICAgIHN0YXJ0U2Nyb2xsUG9zaXRpb25Gb3VuZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBhZ2VTY3JvbGxPZmZzZXQgPSBwYWdlU2Nyb2xsSW5zdGFuY2UuZ2V0Q3VycmVudE9mZnNldCgpO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHRhcmdldCBwb3NpdGlvbiB0aGF0IHRoZSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCBnbyB0b1xuXG4gICAgICBjb25zdCBzY3JvbGxUYXJnZXRQb3NpdGlvbiA9IHBhZ2VTY3JvbGxJbnN0YW5jZS5leHRyYWN0U2Nyb2xsVGFyZ2V0UG9zaXRpb24oKTtcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS50YXJnZXRTY3JvbGxQb3NpdGlvbiA9IE1hdGgucm91bmQoXG4gICAgICAgICAgKHBhZ2VTY3JvbGxJbnN0YW5jZS52ZXJ0aWNhbFNjcm9sbGluZyA/IHNjcm9sbFRhcmdldFBvc2l0aW9uLnRvcCA6IHNjcm9sbFRhcmdldFBvc2l0aW9uLmxlZnQpIC0gcGFnZVNjcm9sbE9mZnNldCk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2Ugd2UgbmVlZCB0byBnbyBpbiB0b3RhbFxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLmRpc3RhbmNlVG9TY3JvbGwgPSBwYWdlU2Nyb2xsSW5zdGFuY2UudGFyZ2V0U2Nyb2xsUG9zaXRpb24gLSBwYWdlU2Nyb2xsSW5zdGFuY2Uuc3RhcnRTY3JvbGxQb3NpdGlvbjtcblxuICAgICAgaWYgKGlzTmFOKHBhZ2VTY3JvbGxJbnN0YW5jZS5kaXN0YW5jZVRvU2Nyb2xsKSkge1xuICAgICAgICAgIC8vIFdlIHdlcmVuJ3QgYWJsZSB0byBmaW5kIHRoZSB0YXJnZXQgcG9zaXRpb24sIG1heWJlIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0P1xuXG4gICAgICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTY3JvbGxpbmcgbm90IHBvc3NpYmxlLCBhcyB3ZSBjYW5cXCd0IGZpbmQgdGhlIHNwZWNpZmllZCB0YXJnZXQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLmZpcmVFdmVudChmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSdyZSBhdCB0aGUgZmluYWwgZGVzdGluYXRpb24gYWxyZWFkeVxuICAgICAgLy8gT1Igd2UgbmVlZCB0byBzY3JvbGwgZG93biBidXQgYXJlIGFscmVhZHkgYXQgdGhlIGVuZFxuICAgICAgLy8gT1Igd2UgbmVlZCB0byBzY3JvbGwgdXAgYnV0IGFyZSBhdCB0aGUgdG9wIGFscmVhZHlcbiAgICAgIGNvbnN0IGFsbFJlYWR5QXREZXN0aW5hdGlvbiA9IE1hdGguYWJzKHBhZ2VTY3JvbGxJbnN0YW5jZS5kaXN0YW5jZVRvU2Nyb2xsKSA8IFBhZ2VTY3JvbGxDb25maWcuX21pblNjcm9sbERpc3RhbmNlO1xuXG4gICAgICAvLyBDaGVjayBob3cgbG9uZyB3ZSBuZWVkIHRvIHNjcm9sbCBpZiBhIHNwZWVkIG9wdGlvbiBpcyBnaXZlblxuICAgICAgLy8gRGVmYXVsdCBleGVjdXRpb25EdXJhdGlvbiBpcyB0aGUgc3BlY2lmaWVkIGR1cmF0aW9uXG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuZXhlY3V0aW9uRHVyYXRpb24gPSBwYWdlU2Nyb2xsSW5zdGFuY2UuZHVyYXRpb247XG4gICAgICAvLyBNYXliZSB3ZSBuZWVkIHRvIHBheSBhdHRlbnRpb24gdG8gdGhlIHNwZWVkIG9wdGlvbj9cbiAgICAgIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChwYWdlU2Nyb2xsSW5zdGFuY2Uuc3BlZWQpICYmIFV0aWwuaXNVbmRlZmluZWRPck51bGwocGFnZVNjcm9sbEluc3RhbmNlLmR1cmF0aW9uKSkge1xuICAgICAgICAgIC8vIFNwZWVkIG9wdGlvbiBpcyBzZXQgYW5kIG5vIGR1cmF0aW9uID0+IGNhbGN1bGF0ZSBkdXJhdGlvbiBiYXNlZCBvbiBzcGVlZCBhbmQgc2Nyb2xsIGRpc3RhbmNlXG4gICAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLmV4ZWN1dGlvbkR1cmF0aW9uID0gcGFnZVNjcm9sbEluc3RhbmNlLmRpc3RhbmNlVG9TY3JvbGwgLyBwYWdlU2Nyb2xsSW5zdGFuY2Uuc3BlZWQgKiAxMDAwO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBzaG91bGQgZ28gdGhlcmUgZGlyZWN0bHksIGFzIG91ciBcImFuaW1hdGlvblwiIHdvdWxkIGhhdmUgb25lIGJpZyBzdGVwXG4gICAgICAvLyBvbmx5IGFueXdheSBhbmQgdGhpcyB3YXkgd2Ugc2F2ZSB0aGUgaW50ZXJ2YWwgc3R1ZmZcbiAgICAgIGNvbnN0IHRvb1Nob3J0SW50ZXJ2YWwgPSBwYWdlU2Nyb2xsSW5zdGFuY2UuZXhlY3V0aW9uRHVyYXRpb24gPD0gUGFnZVNjcm9sbENvbmZpZy5faW50ZXJ2YWw7XG5cbiAgICAgIGlmIChhbGxSZWFkeUF0RGVzdGluYXRpb24gfHwgdG9vU2hvcnRJbnRlcnZhbCkge1xuICAgICAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICAgICAgICBpZiAoYWxsUmVhZHlBdERlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU2Nyb2xsaW5nIG5vdCBwb3NzaWJsZSwgYXMgd2UgY2FuXFwndCBnZXQgYW55IGNsb3NlciB0byB0aGUgZGVzdGluYXRpb24nKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTY3JvbGwgZHVyYXRpb24gc2hvcnRlciB0aGF0IGludGVydmFsIGxlbmd0aCwganVtcGluZyB0byB0YXJnZXQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2Uuc2V0U2Nyb2xsUG9zaXRpb24ocGFnZVNjcm9sbEluc3RhbmNlLnRhcmdldFNjcm9sbFBvc2l0aW9uKTtcbiAgICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuZmlyZUV2ZW50KHRydWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGludGVycnVwdCBsaXN0ZW5lcnMgaWYgd2Ugd2FudCBhbiBpbnRlcnJ1cHRpYmxlIHNjcm9sbCBhbmltYXRpb25cbiAgICAgIGlmIChwYWdlU2Nyb2xsSW5zdGFuY2UuaW50ZXJydXB0aWJsZSB8fFxuICAgICAgICAgIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKHBhZ2VTY3JvbGxJbnN0YW5jZS5pbnRlcnJ1cHRpYmxlKSAmJiBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRJbnRlcnJ1cHRpYmxlKSkge1xuICAgICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5hdHRhY2hJbnRlcnJ1cHRMaXN0ZW5lcnModGhpcy5vbkludGVycnVwdGVkKTtcbiAgICAgIH1cblxuICAgICAgLy8gTGV0J3MgZ2V0IHN0YXJ0ZWQsIGdldCB0aGUgc3RhcnQgdGltZS4uLlxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgLy8gLi4gYW5kIGNhbGN1bGF0ZSB0aGUgZW5kIHRpbWUgKHdoZW4gd2UgbmVlZCB0byBmaW5pc2ggYXQgbGFzdClcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5lbmRUaW1lID0gcGFnZVNjcm9sbEluc3RhbmNlLnN0YXJ0VGltZSArIHBhZ2VTY3JvbGxJbnN0YW5jZS5leGVjdXRpb25EdXJhdGlvbjtcblxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLnRpbWVyID0gc2V0SW50ZXJ2YWwoKF9wYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgIC8vIFRha2UgdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lOiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICAgIC8vIERldGVybWluZSB0aGUgbmV3IHNjcm9sbCBwb3NpdGlvblxuICAgICAgICAgIGxldCBuZXdTY3JvbGxQb3NpdGlvbjogbnVtYmVyO1xuICAgICAgICAgIGxldCBzdG9wTm93ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKF9wYWdlU2Nyb2xsSW5zdGFuY2UuZW5kVGltZSA8PSBjdXJyZW50VGltZSkge1xuICAgICAgICAgICAgICAvLyBXZSdyZSBvdmVyIHRoZSB0aW1lIGFscmVhZHksIHNvIGdvIHRoZSB0YXJnZXRTY3JvbGxQb3NpdGlvbiAoYWthIGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgICBuZXdTY3JvbGxQb3NpdGlvbiA9IF9wYWdlU2Nyb2xsSW5zdGFuY2UudGFyZ2V0U2Nyb2xsUG9zaXRpb247XG4gICAgICAgICAgICAgIHN0b3BOb3cgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc2Nyb2xsIHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBjdXJyZW50IHRpbWUgdXNpbmcgdGhlIGVhc2luZyBmdW5jdGlvblxuICAgICAgICAgICAgICBuZXdTY3JvbGxQb3NpdGlvbiA9IE1hdGgucm91bmQoX3BhZ2VTY3JvbGxJbnN0YW5jZS5lYXNpbmdMb2dpYy5lYXNlKFxuICAgICAgICAgICAgICAgICAgY3VycmVudFRpbWUgLSBfcGFnZVNjcm9sbEluc3RhbmNlLnN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICAgIF9wYWdlU2Nyb2xsSW5zdGFuY2Uuc3RhcnRTY3JvbGxQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgIF9wYWdlU2Nyb2xsSW5zdGFuY2UuZGlzdGFuY2VUb1Njcm9sbCxcbiAgICAgICAgICAgICAgICAgIF9wYWdlU2Nyb2xsSW5zdGFuY2UuZXhlY3V0aW9uRHVyYXRpb24pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU2V0IHRoZSBuZXcgc2Nyb2xsUG9zaXRpb24gdG8gYWxsIHNjcm9sbGluZ1ZpZXdzIGVsZW1lbnRzXG4gICAgICAgICAgaWYgKCFfcGFnZVNjcm9sbEluc3RhbmNlLnNldFNjcm9sbFBvc2l0aW9uKG5ld1Njcm9sbFBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAvLyBTZXR0aW5nIHRoZSBuZXcgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgZmFpbGVkIGZvciBhbGwgU2Nyb2xsaW5nVmlld3NcbiAgICAgICAgICAgICAgLy8gZWFybHkgc3RvcCB0aGUgc2Nyb2xsIGFuaW1hdGlvbiB0byBzYXZlIHJlc291cmNlc1xuICAgICAgICAgICAgICBzdG9wTm93ID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBdCB0aGUgZW5kIGRvIHRoZSBpbnRlcm5hbCBzdG9wIG1haW50ZW5hbmNlIGFuZCBmaXJlIHRoZSBwYWdlU2Nyb2xsRmluaXNoIGV2ZW50XG4gICAgICAgICAgLy8gKG90aGVyd2lzZSB0aGUgZXZlbnQgbWlnaHQgYXJyaXZlIGF0IFwidG9vIGVhcmx5XCIpXG4gICAgICAgICAgaWYgKHN0b3BOb3cpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9wSW50ZXJuYWwoZmFsc2UsIF9wYWdlU2Nyb2xsSW5zdGFuY2UpO1xuICAgICAgICAgIH1cblxuICAgICAgfSwgUGFnZVNjcm9sbENvbmZpZy5faW50ZXJ2YWwsIHBhZ2VTY3JvbGxJbnN0YW5jZSk7XG5cbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBpbnN0YW5jZSBhcyBydW5uaW5nIG9uZVxuICAgICAgdGhpcy5ydW5uaW5nSW5zdGFuY2VzLnB1c2gocGFnZVNjcm9sbEluc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGFsbCBydW5uaW5nIHNjcm9sbCBhbmltYXRpb25zLiBPcHRpb25hbGx5IGxpbWl0IHRvIHN0b3Agb25seSB0aGUgb25lcyBvZiBzcGVjaWZpYyBuYW1lc3BhY2UuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lc3BhY2VcbiAgICovXG4vLyAgIHB1YmxpYyBzdG9wQWxsKG5hbWVzcGFjZT86IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHB1YmxpYyBzdG9wQWxsKG5hbWVzcGFjZT86IHN0cmluZyB8IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnJ1bm5pbmdJbnN0YW5jZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgc3RvcHBlZFNvbWUgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucnVubmluZ0luc3RhbmNlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgcGFnZVNjcm9sbEluc3RhbmNlID0gdGhpcy5ydW5uaW5nSW5zdGFuY2VzW2ldO1xuICAgICAgICAgICAgaWYgKFV0aWwuaXNVbmRlZmluZWRPck51bGwobmFtZXNwYWNlKSB8fCBuYW1lc3BhY2UubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLm5hbWVzcGFjZSA9PT0gbmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgc3RvcHBlZFNvbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEludGVybmFsKHRydWUsIHBhZ2VTY3JvbGxJbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgLy8gRGVjcmVhc2UgdGhlIGNvdW50ZXIsIGFzIHdlIHJlbW92ZWQgYW4gaXRlbSBmcm9tIHRoZSBhcnJheSB3ZSBpdGVyYXRlIG92ZXJcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BwZWRTb21lO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgc3RvcChwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcEludGVybmFsKHRydWUsIHBhZ2VTY3JvbGxJbnN0YW5jZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIGlmIChQYWdlU2Nyb2xsU2VydmljZS5pbnN0YW5jZUNvdW50ZXIgPiAwICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdBbiBpbnN0YW5jZSBvZiBQYWdlU2Nyb2xsU2VydmljZSBhbHJlYWR5IGV4aXN0cywgdXN1YWxseSAnICtcbiAgICAgICAgICAgICAgJ2luY2x1ZGluZyBvbmUgcHJvdmlkZXIgc2hvdWxkIGJlIGVub3VnaCwgc28gZG91YmxlIGNoZWNrLicpO1xuICAgICAgfVxuICAgICAgUGFnZVNjcm9sbFNlcnZpY2UuaW5zdGFuY2VDb3VudGVyKys7XG4gIH1cbn1cbiJdfQ==