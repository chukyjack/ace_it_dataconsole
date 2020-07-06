/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, isDevMode } from '@angular/core';
import { PageScrollConfig } from './mdb-page-scroll.config';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
export class PageScrollService {
    constructor() {
        this.runningInstances = [];
        this.onInterrupted = {
            report: (/**
             * @param {?} event
             * @param {?} pageScrollInstance
             * @return {?}
             */
            (event, pageScrollInstance) => {
                if (!pageScrollInstance.interruptible) {
                    // Non-interruptible anyway, so do not stop anything
                    return;
                }
                /** @type {?} */
                let shouldStop = true;
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
                    scrollingView => scrollingView.contains(event.target)))) {
                        // Mouse clicked an element which is not inside any of the the scrolling containers
                        shouldStop = false;
                    }
                }
                if (shouldStop) {
                    this.stopAll(pageScrollInstance.namespace);
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
    stopInternal(interrupted, pageScrollInstance) {
        /** @type {?} */
        const index = this.runningInstances.indexOf(pageScrollInstance);
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
    }
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param {?} pageScrollInstance
     * @return {?}
     */
    start(pageScrollInstance) {
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
        let startScrollPositionFound = false;
        // Reset start scroll position to 0. If any of the scrollingViews has a different one, it will be extracted next
        pageScrollInstance.startScrollPosition = 0;
        // Get the start scroll position from the scrollingViews (e.g. if the user already scrolled down the content)
        pageScrollInstance.scrollingViews.forEach((/**
         * @param {?} scrollingView
         * @return {?}
         */
        (scrollingView) => {
            if (Util.isUndefinedOrNull(scrollingView)) {
                return;
            }
            // Get the scrollTop or scrollLeft value of the first scrollingView that returns a value for its "scrollTop"
            // or "scrollLeft" property that is not undefined and unequal to 0
            /** @type {?} */
            const scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);
            if (!startScrollPositionFound && scrollPosition) {
                // We found a scrollingView that does not have scrollTop or scrollLeft 0
                // Return the scroll position value, as this will be our startScrollPosition
                pageScrollInstance.startScrollPosition = scrollPosition;
                startScrollPositionFound = true;
            }
        }));
        /** @type {?} */
        const pageScrollOffset = pageScrollInstance.getCurrentOffset();
        // Calculate the target position that the scroll animation should go to
        /** @type {?} */
        const scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
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
        const allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < PageScrollConfig._minScrollDistance;
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
        const tooShortInterval = pageScrollInstance.executionDuration <= PageScrollConfig._interval;
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
        (_pageScrollInstance) => {
            // Take the current time
            /** @type {?} */
            const currentTime = new Date().getTime();
            // Determine the new scroll position
            /** @type {?} */
            let newScrollPosition;
            /** @type {?} */
            let stopNow = false;
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
                this.stopInternal(false, _pageScrollInstance);
            }
        }), PageScrollConfig._interval, pageScrollInstance);
        // Register the instance as running one
        this.runningInstances.push(pageScrollInstance);
    }
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param {?=} namespace
     * @return {?}
     */
    //   public stopAll(namespace?: string): boolean {
    stopAll(namespace) {
        if (this.runningInstances.length > 0) {
            /** @type {?} */
            let stoppedSome = false;
            for (let i = 0; i < this.runningInstances.length; ++i) {
                /** @type {?} */
                const pageScrollInstance = this.runningInstances[i];
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
    }
    /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    stop(pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    }
}
PageScrollService.instanceCounter = 0;
PageScrollService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageScrollService.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Ntb290aHNjcm9sbC9tZGItcGFnZS1zY3JvbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxFQUFDLHFCQUFxQixJQUFJLElBQUksRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRzdFLE1BQU0sT0FBTyxpQkFBaUI7SUFvTzVCO1FBaE9RLHFCQUFnQixHQUF5QixFQUFFLENBQUM7UUFFNUMsa0JBQWEsR0FBc0I7WUFDekMsTUFBTTs7Ozs7WUFBRSxDQUFDLEtBQVksRUFBRSxrQkFBc0MsRUFBUSxFQUFFO2dCQUNyRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFO29CQUNuQyxvREFBb0Q7b0JBQ3BELE9BQU87aUJBQ1Y7O29CQUVHLFVBQVUsR0FBRyxJQUFJO2dCQUVyQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO29CQUN4QixtRkFBbUY7b0JBQ25GLElBQUksZ0JBQWdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFlLEtBQUssRUFBQSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQ2hGLDBEQUEwRDt3QkFDMUQsVUFBVSxHQUFHLEtBQUssQ0FBQztxQkFDdEI7aUJBQ0o7cUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtvQkFDbkMsMEVBQTBFO29CQUMxRSw4Q0FBOEM7b0JBQzlDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSTs7OztvQkFBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEVBQUU7d0JBQ2hHLG1GQUFtRjt3QkFDbkYsVUFBVSxHQUFHLEtBQUssQ0FBQztxQkFDdEI7aUJBQ0o7Z0JBRUQsSUFBSSxVQUFVLEVBQUU7b0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDOUM7WUFDSCxDQUFDLENBQUE7U0FDRixDQUFDO1FBbU1FLElBQUksaUJBQWlCLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUN0RCxPQUFPLENBQUMsSUFBSSxDQUFDLDJEQUEyRDtnQkFDcEUsMkRBQTJELENBQUMsQ0FBQztTQUNwRTtRQUNELGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7SUF0TU8sWUFBWSxDQUFDLFdBQW9CLEVBQUUsa0JBQXNDOztjQUN6RSxLQUFLLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUN2RSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMxQztRQUVELElBQUksa0JBQWtCLENBQUMsMEJBQTBCLEVBQUU7WUFDL0Msa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztTQUNqRDtRQUVELElBQUksa0JBQWtCLENBQUMsS0FBSyxFQUFFO1lBQzFCLHVCQUF1QjtZQUN2QixhQUFhLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsb0NBQW9DO1lBQ3BDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDckMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0MsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7Ozs7O0lBU00sS0FBSyxDQUFDLGtCQUFzQztRQUMvQyxvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUzQyxJQUFJLGtCQUFrQixDQUFDLGNBQWMsS0FBSyxJQUFJLElBQUksa0JBQWtCLENBQUMsY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUYsOERBQThEO1lBQzlELElBQUksU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyw4RkFBOEYsQ0FBQyxDQUFDO2FBQ2hIO1lBQ0QsT0FBTztTQUNWOztZQUVHLHdCQUF3QixHQUFHLEtBQUs7UUFDcEMsZ0hBQWdIO1FBQ2hILGtCQUFrQixDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztRQUUzQyw2R0FBNkc7UUFDN0csa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLGFBQWtCLEVBQUUsRUFBRTtZQUM3RCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDdkMsT0FBTzthQUNWOzs7O2tCQUlLLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7WUFDL0UsSUFBSSxDQUFDLHdCQUF3QixJQUFJLGNBQWMsRUFBRTtnQkFDN0Msd0VBQXdFO2dCQUV4RSw0RUFBNEU7Z0JBQzVFLGtCQUFrQixDQUFDLG1CQUFtQixHQUFHLGNBQWMsQ0FBQztnQkFDeEQsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO2FBQ25DO1FBQ0wsQ0FBQyxFQUFDLENBQUM7O2NBRUcsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUU7OztjQUl4RCxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQywyQkFBMkIsRUFBRTtRQUM3RSxrQkFBa0IsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUNoRCxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFnQixDQUFDLENBQUM7UUFFdEgsZ0RBQWdEO1FBQ2hELGtCQUFrQixDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDLG9CQUFvQixHQUFHLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDO1FBRXZILElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDNUMsaUZBQWlGO1lBRWpGLElBQUksU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsaUZBQWlGO2FBQ3BGO1lBQ0Qsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLE9BQU87U0FDVjs7Ozs7Y0FLSyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsZ0JBQWdCLENBQUMsa0JBQWtCO1FBRWpILDhEQUE4RDtRQUM5RCxzREFBc0Q7UUFDdEQsa0JBQWtCLENBQUMsaUJBQWlCLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1FBQ25FLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMxRywrRkFBK0Y7WUFDL0Ysa0JBQWtCLENBQUMsaUJBQWlCLEdBQUcsa0JBQWtCLENBQUMsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNoSDs7OztjQUlLLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDLGlCQUFpQixJQUFJLGdCQUFnQixDQUFDLFNBQVM7UUFFM0YsSUFBSSxxQkFBcUIsSUFBSSxnQkFBZ0IsRUFBRTtZQUMzQyxJQUFJLFNBQVMsRUFBRSxFQUFFO2dCQUNiLElBQUkscUJBQXFCLEVBQUU7b0JBQ3ZCLHlGQUF5RjtpQkFDNUY7cUJBQU07b0JBQ0gsa0ZBQWtGO2lCQUNyRjthQUNKO1lBQ0Qsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUM5RSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsT0FBTztTQUNWO1FBRUQsZ0ZBQWdGO1FBQ2hGLElBQUksa0JBQWtCLENBQUMsYUFBYTtZQUNoQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQ3JHLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNuRTtRQUVELDJDQUEyQztRQUMzQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwRCxpRUFBaUU7UUFDakUsa0JBQWtCLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQztRQUVqRyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsV0FBVzs7OztRQUFDLENBQUMsbUJBQXVDLEVBQUUsRUFBRTs7O2tCQUV6RSxXQUFXLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7OztnQkFHNUMsaUJBQXlCOztnQkFDekIsT0FBTyxHQUFHLEtBQUs7WUFDbkIsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLElBQUksV0FBVyxFQUFFO2dCQUM1QyxnRkFBZ0Y7Z0JBQ2hGLGlCQUFpQixHQUFHLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDO2dCQUM3RCxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNILG9GQUFvRjtnQkFDcEYsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUMvRCxXQUFXLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxFQUMzQyxtQkFBbUIsQ0FBQyxtQkFBbUIsRUFDdkMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQ3BDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQzthQUMvQztZQUNELDREQUE0RDtZQUM1RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsRUFBRTtnQkFDM0QsMkVBQTJFO2dCQUMzRSxvREFBb0Q7Z0JBQ3BELE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDbEI7WUFFRCxrRkFBa0Y7WUFDbEYsb0RBQW9EO1lBQ3BELElBQUksT0FBTyxFQUFFO2dCQUNULElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7YUFDakQ7UUFFTCxDQUFDLEdBQUUsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7OztJQVFRLE9BQU8sQ0FBQyxTQUF3QjtRQUN2QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFDOUIsV0FBVyxHQUFHLEtBQUs7WUFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7O3NCQUM3QyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUM7b0JBQzNELGtCQUFrQixDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7b0JBQzVDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQzVDLDZFQUE2RTtvQkFDN0UsQ0FBQyxFQUFFLENBQUM7aUJBQ1A7YUFDSjtZQUNELE9BQU8sV0FBVyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVNLElBQUksQ0FBQyxrQkFBc0M7UUFDOUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O0FBaE9jLGlDQUFlLEdBQUcsQ0FBQyxDQUFDOztZQUhwQyxVQUFVOzs7Ozs7Ozs7SUFHVCxrQ0FBbUM7Ozs7O0lBRW5DLDZDQUFvRDs7Ozs7SUFFcEQsMENBNEJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBpc0Rldk1vZGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1BhZ2VTY3JvbGxDb25maWd9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLmNvbmZpZyc7XG5pbXBvcnQge1BhZ2VTY3JvbGxJbnN0YW5jZSwgSW50ZXJydXB0UmVwb3J0ZXJ9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlJztcbmltcG9ydCB7UGFnZVNjcm9sbFV0aWxTZXJ2aWNlIGFzIFV0aWx9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLXV0aWwuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlU2Nyb2xsU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2VDb3VudGVyID0gMDtcblxuICBwcml2YXRlIHJ1bm5pbmdJbnN0YW5jZXM6IFBhZ2VTY3JvbGxJbnN0YW5jZVtdID0gW107XG5cbiAgcHJpdmF0ZSBvbkludGVycnVwdGVkOiBJbnRlcnJ1cHRSZXBvcnRlciA9IHtcbiAgICByZXBvcnQ6IChldmVudDogRXZlbnQsIHBhZ2VTY3JvbGxJbnN0YW5jZTogUGFnZVNjcm9sbEluc3RhbmNlKTogdm9pZCA9PiB7XG4gICAgICBpZiAoIXBhZ2VTY3JvbGxJbnN0YW5jZS5pbnRlcnJ1cHRpYmxlKSB7XG4gICAgICAgICAgLy8gTm9uLWludGVycnVwdGlibGUgYW55d2F5LCBzbyBkbyBub3Qgc3RvcCBhbnl0aGluZ1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHNob3VsZFN0b3AgPSB0cnVlO1xuXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJykge1xuICAgICAgICAgIC8vIE9ubHkgc3RvcCBpZiBzcGVjaWZpYyBrZXlzIGhhdmUgYmVlbiBwcmVzc2VkLCBmb3IgYWxsIG90aGVycyBkb24ndCBzdG9wIGFueXRoaW5nXG4gICAgICAgICAgaWYgKFBhZ2VTY3JvbGxDb25maWcuX2ludGVycnVwdEtleXMuaW5kZXhPZigoPEtleWJvYXJkRXZlbnQ+ZXZlbnQpLmtleUNvZGUpID09PSAtMSkge1xuICAgICAgICAgICAgICAvLyBUaGUgcHJlc3NlZCBrZXkgaXMgbm90IGluIHRoZSBsaXN0IG9mIGludGVycnVwdGluZyBrZXlzXG4gICAgICAgICAgICAgIHNob3VsZFN0b3AgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nKSB7XG4gICAgICAgICAgLy8gRm9yIG1vdXNlZG93biBldmVudHMgd2Ugb25seSBzdG9wIHRoZSBzY3JvbGwgYW5pbWF0aW9uIG9mIHRoZSBtb3VzZSBoYXNcbiAgICAgICAgICAvLyBiZWVuIGNsaWNrZWQgaW5zaWRlIHRoZSBzY3JvbGxpbmcgY29udGFpbmVyXG4gICAgICAgICAgaWYgKCFwYWdlU2Nyb2xsSW5zdGFuY2Uuc2Nyb2xsaW5nVmlld3Muc29tZShzY3JvbGxpbmdWaWV3ID0+IHNjcm9sbGluZ1ZpZXcuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkpIHtcbiAgICAgICAgICAgICAgLy8gTW91c2UgY2xpY2tlZCBhbiBlbGVtZW50IHdoaWNoIGlzIG5vdCBpbnNpZGUgYW55IG9mIHRoZSB0aGUgc2Nyb2xsaW5nIGNvbnRhaW5lcnNcbiAgICAgICAgICAgICAgc2hvdWxkU3RvcCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZFN0b3ApIHtcbiAgICAgICAgICB0aGlzLnN0b3BBbGwocGFnZVNjcm9sbEluc3RhbmNlLm5hbWVzcGFjZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgc3RvcEludGVybmFsKGludGVycnVwdGVkOiBib29sZWFuLCBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLnJ1bm5pbmdJbnN0YW5jZXMuaW5kZXhPZihwYWdlU2Nyb2xsSW5zdGFuY2UpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMucnVubmluZ0luc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGlmIChwYWdlU2Nyb2xsSW5zdGFuY2UuaW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQpIHtcbiAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLmRldGFjaEludGVycnVwdExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGlmIChwYWdlU2Nyb2xsSW5zdGFuY2UudGltZXIpIHtcbiAgICAgICAgLy8gQ2xlYXIvU3RvcCB0aGUgdGltZXJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChwYWdlU2Nyb2xsSW5zdGFuY2UudGltZXIpO1xuICAgICAgICAvLyBDbGVhciB0aGUgcmVmZXJlbmNlIHRvIHRoaXMgdGltZXJcbiAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLnRpbWVyID0gdW5kZWZpbmVkO1xuICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuZmlyZUV2ZW50KCFpbnRlcnJ1cHRlZCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgYSBzY3JvbGwgYW5pbWF0aW9uLiBBbGwgcHJvcGVydGllcyBvZiB0aGUgYW5pbWF0aW9uIGFyZSBzdG9yZWQgaW4gdGhlIGdpdmVuIHtAbGluayBQYWdlU2Nyb2xsSW5zdGFuY2V9IG9iamVjdC5cbiAgICpcbiAgICogVGhpcyBpcyB0aGUgY29yZSBmdW5jdGlvbmFsaXR5IG9mIHRoZSB3aG9sZSBsaWJyYXJ5LlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZVNjcm9sbEluc3RhbmNlXG4gICAqL1xuICBwdWJsaWMgc3RhcnQocGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgIC8vIFN0b3AgYWxsIHBvc3NpYmx5IHJ1bm5pbmcgc2Nyb2xsIGFuaW1hdGlvbnMgaW4gdGhlIHNhbWUgbmFtZXNwYWNlXG4gICAgICB0aGlzLnN0b3BBbGwocGFnZVNjcm9sbEluc3RhbmNlLm5hbWVzcGFjZSk7XG5cbiAgICAgIGlmIChwYWdlU2Nyb2xsSW5zdGFuY2Uuc2Nyb2xsaW5nVmlld3MgPT09IG51bGwgfHwgcGFnZVNjcm9sbEluc3RhbmNlLnNjcm9sbGluZ1ZpZXdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIC8vIE5vIHNjcm9sbGluZ1ZpZXdzIHNwZWNpZmllZCwgdGh1cyB3ZSBjYW4ndCBhbmltYXRlIGFueXRoaW5nXG4gICAgICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gc2Nyb2xsaW5nVmlld3Mgc3BlY2lmaWVkLCB0aGlzIG5nMi1wYWdlLXNjcm9sbCBkb2VzIG5vdCBrbm93IHdoaWNoIERPTSBlbGVtZW50cyB0byBzY3JvbGwnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgc3RhcnRTY3JvbGxQb3NpdGlvbkZvdW5kID0gZmFsc2U7XG4gICAgICAvLyBSZXNldCBzdGFydCBzY3JvbGwgcG9zaXRpb24gdG8gMC4gSWYgYW55IG9mIHRoZSBzY3JvbGxpbmdWaWV3cyBoYXMgYSBkaWZmZXJlbnQgb25lLCBpdCB3aWxsIGJlIGV4dHJhY3RlZCBuZXh0XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2Uuc3RhcnRTY3JvbGxQb3NpdGlvbiA9IDA7XG5cbiAgICAgIC8vIEdldCB0aGUgc3RhcnQgc2Nyb2xsIHBvc2l0aW9uIGZyb20gdGhlIHNjcm9sbGluZ1ZpZXdzIChlLmcuIGlmIHRoZSB1c2VyIGFscmVhZHkgc2Nyb2xsZWQgZG93biB0aGUgY29udGVudClcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5zY3JvbGxpbmdWaWV3cy5mb3JFYWNoKChzY3JvbGxpbmdWaWV3OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChzY3JvbGxpbmdWaWV3KSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEdldCB0aGUgc2Nyb2xsVG9wIG9yIHNjcm9sbExlZnQgdmFsdWUgb2YgdGhlIGZpcnN0IHNjcm9sbGluZ1ZpZXcgdGhhdCByZXR1cm5zIGEgdmFsdWUgZm9yIGl0cyBcInNjcm9sbFRvcFwiXG4gICAgICAgICAgLy8gb3IgXCJzY3JvbGxMZWZ0XCIgcHJvcGVydHkgdGhhdCBpcyBub3QgdW5kZWZpbmVkIGFuZCB1bmVxdWFsIHRvIDBcblxuICAgICAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gcGFnZVNjcm9sbEluc3RhbmNlLmdldFNjcm9sbFByb3BlcnR5VmFsdWUoc2Nyb2xsaW5nVmlldyk7XG4gICAgICAgICAgaWYgKCFzdGFydFNjcm9sbFBvc2l0aW9uRm91bmQgJiYgc2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgLy8gV2UgZm91bmQgYSBzY3JvbGxpbmdWaWV3IHRoYXQgZG9lcyBub3QgaGF2ZSBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCAwXG5cbiAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBzY3JvbGwgcG9zaXRpb24gdmFsdWUsIGFzIHRoaXMgd2lsbCBiZSBvdXIgc3RhcnRTY3JvbGxQb3NpdGlvblxuICAgICAgICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2Uuc3RhcnRTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uO1xuICAgICAgICAgICAgICBzdGFydFNjcm9sbFBvc2l0aW9uRm91bmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwYWdlU2Nyb2xsT2Zmc2V0ID0gcGFnZVNjcm9sbEluc3RhbmNlLmdldEN1cnJlbnRPZmZzZXQoKTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSB0YXJnZXQgcG9zaXRpb24gdGhhdCB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgZ28gdG9cblxuICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0UG9zaXRpb24gPSBwYWdlU2Nyb2xsSW5zdGFuY2UuZXh0cmFjdFNjcm9sbFRhcmdldFBvc2l0aW9uKCk7XG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UudGFyZ2V0U2Nyb2xsUG9zaXRpb24gPSBNYXRoLnJvdW5kKFxuICAgICAgICAgIChwYWdlU2Nyb2xsSW5zdGFuY2UudmVydGljYWxTY3JvbGxpbmcgPyBzY3JvbGxUYXJnZXRQb3NpdGlvbi50b3AgOiBzY3JvbGxUYXJnZXRQb3NpdGlvbi5sZWZ0KSAtIHBhZ2VTY3JvbGxPZmZzZXQpO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIHdlIG5lZWQgdG8gZ28gaW4gdG90YWxcbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5kaXN0YW5jZVRvU2Nyb2xsID0gcGFnZVNjcm9sbEluc3RhbmNlLnRhcmdldFNjcm9sbFBvc2l0aW9uIC0gcGFnZVNjcm9sbEluc3RhbmNlLnN0YXJ0U2Nyb2xsUG9zaXRpb247XG5cbiAgICAgIGlmIChpc05hTihwYWdlU2Nyb2xsSW5zdGFuY2UuZGlzdGFuY2VUb1Njcm9sbCkpIHtcbiAgICAgICAgICAvLyBXZSB3ZXJlbid0IGFibGUgdG8gZmluZCB0aGUgdGFyZ2V0IHBvc2l0aW9uLCBtYXliZSB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdD9cblxuICAgICAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU2Nyb2xsaW5nIG5vdCBwb3NzaWJsZSwgYXMgd2UgY2FuXFwndCBmaW5kIHRoZSBzcGVjaWZpZWQgdGFyZ2V0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5maXJlRXZlbnQoZmFsc2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gV2UncmUgYXQgdGhlIGZpbmFsIGRlc3RpbmF0aW9uIGFscmVhZHlcbiAgICAgIC8vIE9SIHdlIG5lZWQgdG8gc2Nyb2xsIGRvd24gYnV0IGFyZSBhbHJlYWR5IGF0IHRoZSBlbmRcbiAgICAgIC8vIE9SIHdlIG5lZWQgdG8gc2Nyb2xsIHVwIGJ1dCBhcmUgYXQgdGhlIHRvcCBhbHJlYWR5XG4gICAgICBjb25zdCBhbGxSZWFkeUF0RGVzdGluYXRpb24gPSBNYXRoLmFicyhwYWdlU2Nyb2xsSW5zdGFuY2UuZGlzdGFuY2VUb1Njcm9sbCkgPCBQYWdlU2Nyb2xsQ29uZmlnLl9taW5TY3JvbGxEaXN0YW5jZTtcblxuICAgICAgLy8gQ2hlY2sgaG93IGxvbmcgd2UgbmVlZCB0byBzY3JvbGwgaWYgYSBzcGVlZCBvcHRpb24gaXMgZ2l2ZW5cbiAgICAgIC8vIERlZmF1bHQgZXhlY3V0aW9uRHVyYXRpb24gaXMgdGhlIHNwZWNpZmllZCBkdXJhdGlvblxuICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLmV4ZWN1dGlvbkR1cmF0aW9uID0gcGFnZVNjcm9sbEluc3RhbmNlLmR1cmF0aW9uO1xuICAgICAgLy8gTWF5YmUgd2UgbmVlZCB0byBwYXkgYXR0ZW50aW9uIHRvIHRoZSBzcGVlZCBvcHRpb24/XG4gICAgICBpZiAoIVV0aWwuaXNVbmRlZmluZWRPck51bGwocGFnZVNjcm9sbEluc3RhbmNlLnNwZWVkKSAmJiBVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKHBhZ2VTY3JvbGxJbnN0YW5jZS5kdXJhdGlvbikpIHtcbiAgICAgICAgICAvLyBTcGVlZCBvcHRpb24gaXMgc2V0IGFuZCBubyBkdXJhdGlvbiA9PiBjYWxjdWxhdGUgZHVyYXRpb24gYmFzZWQgb24gc3BlZWQgYW5kIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5leGVjdXRpb25EdXJhdGlvbiA9IHBhZ2VTY3JvbGxJbnN0YW5jZS5kaXN0YW5jZVRvU2Nyb2xsIC8gcGFnZVNjcm9sbEluc3RhbmNlLnNwZWVkICogMTAwMDtcbiAgICAgIH1cblxuICAgICAgLy8gV2Ugc2hvdWxkIGdvIHRoZXJlIGRpcmVjdGx5LCBhcyBvdXIgXCJhbmltYXRpb25cIiB3b3VsZCBoYXZlIG9uZSBiaWcgc3RlcFxuICAgICAgLy8gb25seSBhbnl3YXkgYW5kIHRoaXMgd2F5IHdlIHNhdmUgdGhlIGludGVydmFsIHN0dWZmXG4gICAgICBjb25zdCB0b29TaG9ydEludGVydmFsID0gcGFnZVNjcm9sbEluc3RhbmNlLmV4ZWN1dGlvbkR1cmF0aW9uIDw9IFBhZ2VTY3JvbGxDb25maWcuX2ludGVydmFsO1xuXG4gICAgICBpZiAoYWxsUmVhZHlBdERlc3RpbmF0aW9uIHx8IHRvb1Nob3J0SW50ZXJ2YWwpIHtcbiAgICAgICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgICAgICAgaWYgKGFsbFJlYWR5QXREZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1Njcm9sbGluZyBub3QgcG9zc2libGUsIGFzIHdlIGNhblxcJ3QgZ2V0IGFueSBjbG9zZXIgdG8gdGhlIGRlc3RpbmF0aW9uJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU2Nyb2xsIGR1cmF0aW9uIHNob3J0ZXIgdGhhdCBpbnRlcnZhbCBsZW5ndGgsIGp1bXBpbmcgdG8gdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLnNldFNjcm9sbFBvc2l0aW9uKHBhZ2VTY3JvbGxJbnN0YW5jZS50YXJnZXRTY3JvbGxQb3NpdGlvbik7XG4gICAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLmZpcmVFdmVudCh0cnVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBpbnRlcnJ1cHQgbGlzdGVuZXJzIGlmIHdlIHdhbnQgYW4gaW50ZXJydXB0aWJsZSBzY3JvbGwgYW5pbWF0aW9uXG4gICAgICBpZiAocGFnZVNjcm9sbEluc3RhbmNlLmludGVycnVwdGlibGUgfHxcbiAgICAgICAgICAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChwYWdlU2Nyb2xsSW5zdGFuY2UuaW50ZXJydXB0aWJsZSkgJiYgUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0SW50ZXJydXB0aWJsZSkpIHtcbiAgICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuYXR0YWNoSW50ZXJydXB0TGlzdGVuZXJzKHRoaXMub25JbnRlcnJ1cHRlZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIExldCdzIGdldCBzdGFydGVkLCBnZXQgdGhlIHN0YXJ0IHRpbWUuLi5cbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIC8vIC4uIGFuZCBjYWxjdWxhdGUgdGhlIGVuZCB0aW1lICh3aGVuIHdlIG5lZWQgdG8gZmluaXNoIGF0IGxhc3QpXG4gICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuZW5kVGltZSA9IHBhZ2VTY3JvbGxJbnN0YW5jZS5zdGFydFRpbWUgKyBwYWdlU2Nyb2xsSW5zdGFuY2UuZXhlY3V0aW9uRHVyYXRpb247XG5cbiAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS50aW1lciA9IHNldEludGVydmFsKChfcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAvLyBUYWtlIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICBjb25zdCBjdXJyZW50VGltZTogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIG5ldyBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgICBsZXQgbmV3U2Nyb2xsUG9zaXRpb246IG51bWJlcjtcbiAgICAgICAgICBsZXQgc3RvcE5vdyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChfcGFnZVNjcm9sbEluc3RhbmNlLmVuZFRpbWUgPD0gY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgLy8gV2UncmUgb3ZlciB0aGUgdGltZSBhbHJlYWR5LCBzbyBnbyB0aGUgdGFyZ2V0U2Nyb2xsUG9zaXRpb24gKGFrYSBkZXN0aW5hdGlvbilcbiAgICAgICAgICAgICAgbmV3U2Nyb2xsUG9zaXRpb24gPSBfcGFnZVNjcm9sbEluc3RhbmNlLnRhcmdldFNjcm9sbFBvc2l0aW9uO1xuICAgICAgICAgICAgICBzdG9wTm93ID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHNjcm9sbCBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgY3VycmVudCB0aW1lIHVzaW5nIHRoZSBlYXNpbmcgZnVuY3Rpb25cbiAgICAgICAgICAgICAgbmV3U2Nyb2xsUG9zaXRpb24gPSBNYXRoLnJvdW5kKF9wYWdlU2Nyb2xsSW5zdGFuY2UuZWFzaW5nTG9naWMuZWFzZShcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lIC0gX3BhZ2VTY3JvbGxJbnN0YW5jZS5zdGFydFRpbWUsXG4gICAgICAgICAgICAgICAgICBfcGFnZVNjcm9sbEluc3RhbmNlLnN0YXJ0U2Nyb2xsUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICBfcGFnZVNjcm9sbEluc3RhbmNlLmRpc3RhbmNlVG9TY3JvbGwsXG4gICAgICAgICAgICAgICAgICBfcGFnZVNjcm9sbEluc3RhbmNlLmV4ZWN1dGlvbkR1cmF0aW9uKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNldCB0aGUgbmV3IHNjcm9sbFBvc2l0aW9uIHRvIGFsbCBzY3JvbGxpbmdWaWV3cyBlbGVtZW50c1xuICAgICAgICAgIGlmICghX3BhZ2VTY3JvbGxJbnN0YW5jZS5zZXRTY3JvbGxQb3NpdGlvbihuZXdTY3JvbGxQb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgLy8gU2V0dGluZyB0aGUgbmV3IHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHZhbHVlIGZhaWxlZCBmb3IgYWxsIFNjcm9sbGluZ1ZpZXdzXG4gICAgICAgICAgICAgIC8vIGVhcmx5IHN0b3AgdGhlIHNjcm9sbCBhbmltYXRpb24gdG8gc2F2ZSByZXNvdXJjZXNcbiAgICAgICAgICAgICAgc3RvcE5vdyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQXQgdGhlIGVuZCBkbyB0aGUgaW50ZXJuYWwgc3RvcCBtYWludGVuYW5jZSBhbmQgZmlyZSB0aGUgcGFnZVNjcm9sbEZpbmlzaCBldmVudFxuICAgICAgICAgIC8vIChvdGhlcndpc2UgdGhlIGV2ZW50IG1pZ2h0IGFycml2ZSBhdCBcInRvbyBlYXJseVwiKVxuICAgICAgICAgIGlmIChzdG9wTm93KSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcEludGVybmFsKGZhbHNlLCBfcGFnZVNjcm9sbEluc3RhbmNlKTtcbiAgICAgICAgICB9XG5cbiAgICAgIH0sIFBhZ2VTY3JvbGxDb25maWcuX2ludGVydmFsLCBwYWdlU2Nyb2xsSW5zdGFuY2UpO1xuXG4gICAgICAvLyBSZWdpc3RlciB0aGUgaW5zdGFuY2UgYXMgcnVubmluZyBvbmVcbiAgICAgIHRoaXMucnVubmluZ0luc3RhbmNlcy5wdXNoKHBhZ2VTY3JvbGxJbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBhbGwgcnVubmluZyBzY3JvbGwgYW5pbWF0aW9ucy4gT3B0aW9uYWxseSBsaW1pdCB0byBzdG9wIG9ubHkgdGhlIG9uZXMgb2Ygc3BlY2lmaWMgbmFtZXNwYWNlLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZXNwYWNlXG4gICAqL1xuLy8gICBwdWJsaWMgc3RvcEFsbChuYW1lc3BhY2U/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBwdWJsaWMgc3RvcEFsbChuYW1lc3BhY2U/OiBzdHJpbmcgfCBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nSW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHN0b3BwZWRTb21lID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJ1bm5pbmdJbnN0YW5jZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VTY3JvbGxJbnN0YW5jZSA9IHRoaXMucnVubmluZ0luc3RhbmNlc1tpXTtcbiAgICAgICAgICAgIGlmIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG5hbWVzcGFjZSkgfHwgbmFtZXNwYWNlLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5uYW1lc3BhY2UgPT09IG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgIHN0b3BwZWRTb21lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BJbnRlcm5hbCh0cnVlLCBwYWdlU2Nyb2xsSW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIC8vIERlY3JlYXNlIHRoZSBjb3VudGVyLCBhcyB3ZSByZW1vdmVkIGFuIGl0ZW0gZnJvbSB0aGUgYXJyYXkgd2UgaXRlcmF0ZSBvdmVyXG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wcGVkU29tZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHN0b3AocGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3BJbnRlcm5hbCh0cnVlLCBwYWdlU2Nyb2xsSW5zdGFuY2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICBpZiAoUGFnZVNjcm9sbFNlcnZpY2UuaW5zdGFuY2VDb3VudGVyID4gMCAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignQW4gaW5zdGFuY2Ugb2YgUGFnZVNjcm9sbFNlcnZpY2UgYWxyZWFkeSBleGlzdHMsIHVzdWFsbHkgJyArXG4gICAgICAgICAgICAgICdpbmNsdWRpbmcgb25lIHByb3ZpZGVyIHNob3VsZCBiZSBlbm91Z2gsIHNvIGRvdWJsZSBjaGVjay4nKTtcbiAgICAgIH1cbiAgICAgIFBhZ2VTY3JvbGxTZXJ2aWNlLmluc3RhbmNlQ291bnRlcisrO1xuICB9XG59XG4iXX0=