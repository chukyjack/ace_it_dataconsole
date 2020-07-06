/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
* Created by sebastianfuss on 29.08.16.
*/
import { EventEmitter } from '@angular/core';
import { PageScrollConfig } from './mdb-page-scroll.config';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
/**
 * An Interface specifying the possible options to be passed into the newInstance() factory method
 * @record
 */
export function PageScrollOptions() { }
if (false) {
    /**
     * The document object of the current app
     * @type {?}
     */
    PageScrollOptions.prototype.document;
    /**
     * A specification of the DOM element to scroll to. Either a string referring to an
     * object id (`#target`) or a HTMLElement that is attached to the document's DOM tree.
     * @type {?}
     */
    PageScrollOptions.prototype.scrollTarget;
    /**
     * Array of HTMLElements or the body object that should be manipulated while performing
     * the scroll animation.
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.scrollingViews;
    /**
     * Namespace of the scroll animation
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.namespace;
    /**
     * Whether that scroll animation scrolls in vertical direction (true) or
     * horizontal (false, default value)
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.verticalScrolling;
    /**
     * Whether the an advanced offset calculation for inline scrollings should be applied
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.advancedInlineOffsetCalculation;
    /**
     * Offset of target elements location and scroll location
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollOffset;
    /**
     * Whether the scroll animation should be interruptible
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollInterruptible;
    /**
     * The easing logic to be used
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollEasingLogic;
    /**
     * Duration in milliseconds the scroll animation should last
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollDuration;
    /**
     * Maximum speed to be used for the scroll animation. Only taken
     * into account of no pageScrollDuration is provided
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollSpeed;
    /**
     * A listener to be called whenever the scroll animation stops
     * @type {?|undefined}
     */
    PageScrollOptions.prototype.pageScrollFinishListener;
}
/**
 * Represents a scrolling action
 */
export class PageScrollInstance {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {\@link PageScrollInstance#simpleInstance}
     *      {\@link PageScrollInstance#newInstance}
     * @param {?} namespace
     * @param {?} document
     */
    constructor(namespace, document) {
        /**
         * These properties will be set during instance construction and default to their defaults from PageScrollConfig
         */
        /* A namespace to "group" scroll animations together and stopping some does not stop others */
        this._namespace = PageScrollConfig._defaultNamespace;
        /* Whether we scroll vertically (true) or horizontally (false) */
        this._verticalScrolling = PageScrollConfig.defaultIsVerticalScrolling;
        /* Offset in px that the animation should stop above that target element */
        this._offset = PageScrollConfig.defaultScrollOffset;
        /* Duration in milliseconds the scroll animation should last */
        this._duration = PageScrollConfig.defaultDuration;
        /* Easing function to manipulate the scrollTop/scrollLeft value over time */
        this._easingLogic = PageScrollConfig.defaultEasingLogic;
        /* Boolean whether the scroll animation should stop on user interruption or not */
        this._interruptible = PageScrollConfig.defaultInterruptible;
        /* Whether the advanded offset calculation for inline scrolling should be used */
        this._advancedInlineOffsetCalculation = PageScrollConfig.defaultAdvancedInlineOffsetCalculation;
        /* Event emitter to notify the world about the scrolling */
        this._pageScrollFinish = new EventEmitter();
        /**
         * These properties will be set/manipulated if the scroll animation starts
         */
        /* The initial value of the scrollTop or scrollLeft position when the animation starts */
        this._startScrollPosition = 0;
        /* Whether an interrupt listener is attached to the body or not */
        this._interruptListenersAttached = false;
        /* References to the timer instance that is used to perform the scroll animation to be
           able to clear it on animation end*/
        this._timer = null;
        this._namespace = namespace;
        this.document = document;
    }
    /*
       * Factory methods for instance creation
       */
    /**
     * @param {?} document
     * @param {?} scrollTarget
     * @param {?=} namespace
     * @return {?}
     */
    static simpleInstance(document, scrollTarget, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            namespace
        });
    }
    //   public static newInstance(options: PageScrollOptions) {
    /**
     * @param {?} options
     * @return {?}
     */
    static newInstance(options) {
        if (Util.isUndefinedOrNull(options.namespace) || options.namespace.length <= 0) {
            options.namespace = PageScrollConfig._defaultNamespace;
        }
        // const pageScrollInstance: PageScrollInstance = new PageScrollInstance(options.namespace, document);
        /** @type {?} */
        const pageScrollInstance = new PageScrollInstance(options.namespace, document);
        if (Util.isUndefinedOrNull(options.scrollingViews) || options.scrollingViews.length === 0) {
            pageScrollInstance._isInlineScrolling = false;
            pageScrollInstance._scrollingViews = [document.documentElement, document.body, document.body.parentNode];
        }
        else {
            pageScrollInstance._isInlineScrolling = true;
            pageScrollInstance._scrollingViews = options.scrollingViews;
        }
        pageScrollInstance._scrollTarget = options.scrollTarget;
        if (!Util.isUndefinedOrNull(options.verticalScrolling)) {
            pageScrollInstance._verticalScrolling = options.verticalScrolling;
        }
        if (!Util.isUndefinedOrNull(options.pageScrollOffset)) {
            pageScrollInstance._offset = options.pageScrollOffset;
        }
        if (!Util.isUndefinedOrNull(options.pageScrollEasingLogic)) {
            pageScrollInstance._easingLogic = options.pageScrollEasingLogic;
        }
        if (Util.isUndefinedOrNull(options.pageScrollDuration) && !Util.isUndefinedOrNull(options.pageScrollSpeed)) {
            // No duration specified in the options, only in this case we use the speed option when present
            pageScrollInstance._speed = options.pageScrollSpeed;
            pageScrollInstance._duration = undefined;
        }
        else if (!Util.isUndefinedOrNull(options.pageScrollDuration)) {
            pageScrollInstance._duration = options.pageScrollDuration;
        }
        if (!Util.isUndefinedOrNull(options.pageScrollFinishListener)) {
            pageScrollInstance._pageScrollFinish = options.pageScrollFinishListener;
        }
        pageScrollInstance._interruptible = options.pageScrollInterruptible ||
            (Util.isUndefinedOrNull(options.pageScrollInterruptible) && PageScrollConfig.defaultInterruptible);
        pageScrollInstance._advancedInlineOffsetCalculation = options.advancedInlineOffsetCalculation ||
            (Util.isUndefinedOrNull(options.advancedInlineOffsetCalculation) &&
                PageScrollConfig.defaultAdvancedInlineOffsetCalculation);
        return pageScrollInstance;
    }
    /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} verticalScrolling
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     *
     * @return {?}
     */
    static simpleDirectionInstance(document, scrollTarget, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            namespace,
            verticalScrolling,
        });
    }
    /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} scrollingView The element that should be scrolled
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     * @return {?}
     */
    static simpleInlineInstance(document, scrollTarget, scrollingView, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews: [scrollingView],
            verticalScrolling: true,
            namespace
        });
    }
    /**
     *
     * @deprecated Use {\@link newInstance(options: PageScrollOptions)}
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} scrollingView The element that should be scrolled
     * @param {?} verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     * @return {?}
     */
    static simpleInlineDirectionInstance(document, scrollTarget, scrollingView, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews: [scrollingView],
            namespace,
            verticalScrolling,
        });
    }
    /**
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?=} scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param {?=} namespace Optional namespace to group scroll animations logically
     * @param {?=} verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param {?=} pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param {?=} pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param {?=} pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param {?=} pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param {?=} pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finishe
     *
     * @return {?}
     */
    static advancedInstance(document, scrollTarget, scrollingViews, namespace, verticalScrolling, pageScrollOffset, pageScrollInterruptible, pageScrollEasingLogic, pageScrollDuration, pageScrollFinishListener) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews,
            namespace,
            verticalScrolling,
            pageScrollOffset,
            pageScrollInterruptible,
            pageScrollEasingLogic,
            pageScrollDuration,
            pageScrollFinishListener
        });
    }
    /**
     * @param {?} scrollingView
     * @return {?}
     */
    getScrollPropertyValue(scrollingView) {
        if (!this.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    }
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    extractScrollTargetPosition() {
        // let scrollTargetElement: HTMLElement;
        /** @type {?} */
        let scrollTargetElement;
        if (typeof this._scrollTarget === 'string') {
            scrollTargetElement = this.document.getElementById(((/** @type {?} */ (this._scrollTarget))).substr(1));
        }
        else {
            scrollTargetElement = (/** @type {?} */ (this._scrollTarget));
        }
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            // Scroll target not found
            return { top: NaN, left: NaN };
        }
        if (this._isInlineScrolling) {
            /** @type {?} */
            const position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
            if (this._advancedInlineOffsetCalculation && this.scrollingViews.length === 1) {
                /** @type {?} */
                const accumulatedParentsPos = { top: 0, left: 0 };
                // not named window to make sure we're not getting the global window variable by accident
                /** @type {?} */
                const theWindow = scrollTargetElement.ownerDocument.defaultView;
                /** @type {?} */
                let parentFound = false;
                // Start parent is the immediate parent
                // let parent = scrollTargetElement.parentElement;
                /** @type {?} */
                let parent = scrollTargetElement.parentElement;
                // Iterate upwards all parents
                while (!parentFound && !Util.isUndefinedOrNull(parent)) {
                    if (theWindow.getComputedStyle(parent).getPropertyValue('position') === 'relative') {
                        accumulatedParentsPos.top += parent.offsetTop;
                        accumulatedParentsPos.left += parent.offsetLeft;
                    }
                    // Next iteration
                    parent = parent.parentElement;
                    parentFound = parent === this.scrollingViews[0];
                }
                if (parentFound) {
                    // Only use the results if we found the parent, otherwise we accumulated too much anyway
                    position.top += accumulatedParentsPos.top;
                    position.left += accumulatedParentsPos.left;
                }
                else {
                    if (PageScrollConfig._logLevel >= 2) {
                        console.warn('Unable to find nested scrolling targets parent!');
                    }
                }
            }
            return position;
        }
        return Util.extractElementPosition(this.document, scrollTargetElement);
    }
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @return {?}
     */
    getCurrentOffset() {
        return this._offset;
    }
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    setScrollPosition(position) {
        if (PageScrollConfig._logLevel >= 5) {
            console.warn('Scroll Position: ' + position);
        }
        // Set the new scrollTop/scrollLeft to all scrollingViews elements
        return this.scrollingViews.reduce((/**
         * @param {?} oneAlreadyWorked
         * @param {?} scrollingView
         * @return {?}
         */
        (oneAlreadyWorked, scrollingView) => {
            /** @type {?} */
            const startScrollPropertyValue = this.getScrollPropertyValue(scrollingView);
            if (scrollingView && !Util.isUndefinedOrNull(startScrollPropertyValue)) {
                /** @type {?} */
                const scrollDistance = Math.abs(startScrollPropertyValue - position);
                // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"
                /** @type {?} */
                const isSmallMovement = scrollDistance < PageScrollConfig._minScrollDistance;
                if (!this.verticalScrolling) {
                    scrollingView.scrollLeft = position;
                }
                else {
                    scrollingView.scrollTop = position;
                }
                // Return true of setting the new scrollTop/scrollLeft value worked
                // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
                // desired scrollTop/scrollLeft than before (it might not be exactly the value we
                // set due to dpi or rounding irregularities)
                if (isSmallMovement || scrollDistance > Math.abs(this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }), false);
    }
    /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    fireEvent(value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    }
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param {?} interruptReporter
     * @return {?}
     */
    attachInterruptListeners(interruptReporter) {
        if (this._interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this._interruptListener = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            interruptReporter.report(event, this);
        });
        PageScrollConfig._interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.document.body.addEventListener(event, this._interruptListener)));
        this._interruptListenersAttached = true;
    }
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    detachInterruptListeners() {
        PageScrollConfig._interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.document.body.removeEventListener(event, this._interruptListener)));
        this._interruptListenersAttached = false;
    }
    /**
     * @return {?}
     */
    get namespace() {
        return this._namespace;
    }
    /**
     * @return {?}
     */
    get scrollTarget() {
        return this._scrollTarget;
    }
    /**
     * @return {?}
     */
    get verticalScrolling() {
        return this._verticalScrolling;
    }
    /**
     * @return {?}
     */
    get scrollingViews() {
        return this._scrollingViews;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set startScrollPosition(value) {
        this._startScrollPosition = value;
    }
    /**
     * @return {?}
     */
    get startScrollPosition() {
        return this._startScrollPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set targetScrollPosition(value) {
        this._targetScrollPosition = value;
    }
    /**
     * @return {?}
     */
    get targetScrollPosition() {
        return this._targetScrollPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set distanceToScroll(value) {
        this._distanceToScroll = value;
    }
    /**
     * @return {?}
     */
    get distanceToScroll() {
        return this._distanceToScroll;
    }
    /**
     * @return {?}
     */
    get executionDuration() {
        return this._executionDuration;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set executionDuration(value) {
        this._executionDuration = value;
    }
    /**
     * @return {?}
     */
    get duration() {
        return this._duration;
    }
    /**
     * @return {?}
     */
    get speed() {
        return this._speed;
    }
    /**
     * @return {?}
     */
    get easingLogic() {
        return this._easingLogic;
    }
    /**
     * @return {?}
     */
    get interruptible() {
        return this._interruptible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set startTime(value) {
        this._startTime = value;
    }
    /**
     * @return {?}
     */
    get startTime() {
        return this._startTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set endTime(value) {
        this._endTime = value;
    }
    /**
     * @return {?}
     */
    get endTime() {
        return this._endTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set timer(value) {
        this._timer = value;
    }
    /**
     * @return {?}
     */
    get timer() {
        return this._timer;
    }
    /**
     * @return {?}
     */
    get interruptListenersAttached() {
        return this._interruptListenersAttached;
    }
}
if (false) {
    /**
     * These properties will be set during instance construction and default to their defaults from PageScrollConfig
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._namespace;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype.document;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._scrollingViews;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._isInlineScrolling;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._scrollTarget;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._verticalScrolling;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._offset;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._duration;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._speed;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._easingLogic;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._interruptible;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._interruptListener;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._advancedInlineOffsetCalculation;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._pageScrollFinish;
    /**
     * These properties will be set/manipulated if the scroll animation starts
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._startScrollPosition;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._targetScrollPosition;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._distanceToScroll;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._startTime;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._endTime;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._executionDuration;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._interruptListenersAttached;
    /**
     * @type {?}
     * @private
     */
    PageScrollInstance.prototype._timer;
}
/**
 * An Interface a listener should implement to be notified about possible interrupt events
 * that happened due to user interaction while a scroll animation takes place.
 *
 * The PageScrollService provides an implementation to a PageScrollInstance to be notified
 * about scroll animation interrupts and stop related animations.
 * @record
 */
export function InterruptReporter() { }
if (false) {
    /** @type {?} */
    InterruptReporter.prototype.report;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zbW9vdGhzY3JvbGwvbWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxnQkFBZ0IsRUFBdUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RyxPQUFPLEVBQUMscUJBQXFCLElBQUksSUFBSSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBTTdFLHVDQWdFQzs7Ozs7O0lBNURDLHFDQUFtQjs7Ozs7O0lBTW5CLHlDQUErQjs7Ozs7O0lBTS9CLDJDQUFzQzs7Ozs7SUFLdEMsc0NBQW1COzs7Ozs7SUFNbkIsOENBQTRCOzs7OztJQUs1Qiw0REFBMEM7Ozs7O0lBSzFDLDZDQUEwQjs7Ozs7SUFLMUIsb0RBQWtDOzs7OztJQUtsQyxrREFBb0M7Ozs7O0lBS3BDLCtDQUE0Qjs7Ozs7O0lBTTVCLDRDQUF5Qjs7Ozs7SUFLekIscURBQWlEOzs7OztBQU9uRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7SUFzUDdCLFlBQVksU0FBaUIsRUFBRSxRQUFrQjs7Ozs7UUEvT3pDLGVBQVUsR0FBVyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQzs7UUFVeEQsdUJBQWtCLEdBQUcsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7O1FBRWpFLFlBQU8sR0FBVyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQzs7UUFFdkQsY0FBUyxHQUFXLGdCQUFnQixDQUFDLGVBQWUsQ0FBQzs7UUFJckQsaUJBQVksR0FBZ0IsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7O1FBRWhFLG1CQUFjLEdBQVksZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7O1FBS2hFLHFDQUFnQyxHQUFZLGdCQUFnQixDQUFD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Ozs7OztJQUd4QyxnREFBeUU7Ozs7O0lBRXpFLHFDQUErRDs7Ozs7SUFFL0QsdUNBQTZEOzs7OztJQUU3RCxvQ0FBdUI7Ozs7O0lBRXZCLDBDQUF3RTs7Ozs7SUFFeEUsNENBQXdFOzs7OztJQUd4RSxnREFBK0Q7Ozs7O0lBRS9ELDhEQUE0Rzs7Ozs7SUFFNUcsK0NBQStFOzs7Ozs7SUFNL0Usa0RBQWlDOzs7OztJQUVqQyxtREFBc0M7Ozs7O0lBRXRDLCtDQUFrQzs7Ozs7SUFFbEMsd0NBQTJCOzs7OztJQUUzQixzQ0FBeUI7Ozs7O0lBRXpCLGdEQUFtQzs7Ozs7SUFFbkMseURBQTRDOzs7OztJQUk1QyxvQ0FBMkI7Ozs7Ozs7Ozs7QUF5YzdCLHVDQUVDOzs7SUFEQyxtQ0FBc0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQ3JlYXRlZCBieSBzZWJhc3RpYW5mdXNzIG9uIDI5LjA4LjE2LlxuKi9cblxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Vhc2luZ0xvZ2ljLCBQYWdlU2Nyb2xsQ29uZmlnLCBQYWdlU2Nyb2xsVGFyZ2V0LCBQYWdlU2Nyb2xsaW5nVmlld3N9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLmNvbmZpZyc7XG5pbXBvcnQge1BhZ2VTY3JvbGxVdGlsU2VydmljZSBhcyBVdGlsfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC11dGlsLnNlcnZpY2UnO1xuXG4vKipcbiogQW4gSW50ZXJmYWNlIHNwZWNpZnlpbmcgdGhlIHBvc3NpYmxlIG9wdGlvbnMgdG8gYmUgcGFzc2VkIGludG8gdGhlIG5ld0luc3RhbmNlKCkgZmFjdG9yeSBtZXRob2RcbiovXG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVNjcm9sbE9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGRvY3VtZW50IG9iamVjdCBvZiB0aGUgY3VycmVudCBhcHBcbiAgICovXG4gIGRvY3VtZW50OiBEb2N1bWVudDtcblxuICAvKipcbiAgICogQSBzcGVjaWZpY2F0aW9uIG9mIHRoZSBET00gZWxlbWVudCB0byBzY3JvbGwgdG8uIEVpdGhlciBhIHN0cmluZyByZWZlcnJpbmcgdG8gYW5cbiAgICogb2JqZWN0IGlkIChgI3RhcmdldGApIG9yIGEgSFRNTEVsZW1lbnQgdGhhdCBpcyBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQncyBET00gdHJlZS5cbiAgICovXG4gIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldDtcblxuICAvKipcbiAgICogQXJyYXkgb2YgSFRNTEVsZW1lbnRzIG9yIHRoZSBib2R5IG9iamVjdCB0aGF0IHNob3VsZCBiZSBtYW5pcHVsYXRlZCB3aGlsZSBwZXJmb3JtaW5nXG4gICAqIHRoZSBzY3JvbGwgYW5pbWF0aW9uLlxuICAgKi9cbiAgc2Nyb2xsaW5nVmlld3M/OiBQYWdlU2Nyb2xsaW5nVmlld3NbXTtcblxuICAvKipcbiAgICogTmFtZXNwYWNlIG9mIHRoZSBzY3JvbGwgYW5pbWF0aW9uXG4gICAqL1xuICBuYW1lc3BhY2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhhdCBzY3JvbGwgYW5pbWF0aW9uIHNjcm9sbHMgaW4gdmVydGljYWwgZGlyZWN0aW9uICh0cnVlKSBvclxuICAgKiBob3Jpem9udGFsIChmYWxzZSwgZGVmYXVsdCB2YWx1ZSlcbiAgICovXG4gIHZlcnRpY2FsU2Nyb2xsaW5nPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYW4gYWR2YW5jZWQgb2Zmc2V0IGNhbGN1bGF0aW9uIGZvciBpbmxpbmUgc2Nyb2xsaW5ncyBzaG91bGQgYmUgYXBwbGllZFxuICAgKi9cbiAgYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE9mZnNldCBvZiB0YXJnZXQgZWxlbWVudHMgbG9jYXRpb24gYW5kIHNjcm9sbCBsb2NhdGlvblxuICAgKi9cbiAgcGFnZVNjcm9sbE9mZnNldD86IG51bWJlcjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgYmUgaW50ZXJydXB0aWJsZVxuICAgKi9cbiAgcGFnZVNjcm9sbEludGVycnVwdGlibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgZWFzaW5nIGxvZ2ljIHRvIGJlIHVzZWRcbiAgICovXG4gIHBhZ2VTY3JvbGxFYXNpbmdMb2dpYz86IEVhc2luZ0xvZ2ljO1xuXG4gIC8qKlxuICAgKiBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIGxhc3RcbiAgICovXG4gIHBhZ2VTY3JvbGxEdXJhdGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4aW11bSBzcGVlZCB0byBiZSB1c2VkIGZvciB0aGUgc2Nyb2xsIGFuaW1hdGlvbi4gT25seSB0YWtlblxuICAgKiBpbnRvIGFjY291bnQgb2Ygbm8gcGFnZVNjcm9sbER1cmF0aW9uIGlzIHByb3ZpZGVkXG4gICAqL1xuICBwYWdlU2Nyb2xsU3BlZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHN0b3BzXG4gICAqL1xuICBwYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXI/OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG59XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEgc2Nyb2xsaW5nIGFjdGlvblxuKi9cblxuZXhwb3J0IGNsYXNzIFBhZ2VTY3JvbGxJbnN0YW5jZSB7XG5cbiAgLyoqXG4gICAqIFRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBzZXQgZHVyaW5nIGluc3RhbmNlIGNvbnN0cnVjdGlvbiBhbmQgZGVmYXVsdCB0byB0aGVpciBkZWZhdWx0cyBmcm9tIFBhZ2VTY3JvbGxDb25maWdcbiAgICovXG5cbiAgLyogQSBuYW1lc3BhY2UgdG8gXCJncm91cFwiIHNjcm9sbCBhbmltYXRpb25zIHRvZ2V0aGVyIGFuZCBzdG9wcGluZyBzb21lIGRvZXMgbm90IHN0b3Agb3RoZXJzICovXG4gIHByaXZhdGUgX25hbWVzcGFjZTogc3RyaW5nID0gUGFnZVNjcm9sbENvbmZpZy5fZGVmYXVsdE5hbWVzcGFjZTtcbiAgLyogVGhlIGRvY3VtZW50IGFsbCB0aGUgc2Nyb2xsaW5nIHRha2VzIHBsYWNlIGFuZCBzY3JvbGwgdGFyZ2V0cyBhcmUgbG9jYXRlZCBpbiAqL1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgLyogVGhlIERPTSBlbGVtZW50cyBvciBzaW1pbGFyIG5vZGVzIHdob3NlIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHByb3BlcnR5IHdpbGwgYmUgbWFuaXB1bGF0ZWQgZHVyaW5nIHNjcm9sbGluZyAqL1xuICBwcml2YXRlIF9zY3JvbGxpbmdWaWV3czogUGFnZVNjcm9sbGluZ1ZpZXdzW107XG4gIHByaXZhdGUgX2lzSW5saW5lU2Nyb2xsaW5nOiBib29sZWFuO1xuICAvKiBUaGUgdGFyZ2V0IGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQgaW50byB0aGUgdmlld3BvcnQgKi9cbiAgcHJpdmF0ZSBfc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0O1xuXG4gIC8qIFdoZXRoZXIgd2Ugc2Nyb2xsIHZlcnRpY2FsbHkgKHRydWUpIG9yIGhvcml6b250YWxseSAoZmFsc2UpICovXG4gIHByaXZhdGUgX3ZlcnRpY2FsU2Nyb2xsaW5nID0gUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0SXNWZXJ0aWNhbFNjcm9sbGluZztcbiAgLyogT2Zmc2V0IGluIHB4IHRoYXQgdGhlIGFuaW1hdGlvbiBzaG91bGQgc3RvcCBhYm92ZSB0aGF0IHRhcmdldCBlbGVtZW50ICovXG4gIHByaXZhdGUgX29mZnNldDogbnVtYmVyID0gUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0U2Nyb2xsT2Zmc2V0O1xuICAvKiBEdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIGxhc3QgKi9cbiAgcHJpdmF0ZSBfZHVyYXRpb246IG51bWJlciA9IFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdER1cmF0aW9uO1xuICAvKiBTcGVlZCBpbiBcInBpeGVscy9zZWNvbmRcIiB0byBiZSB1c2VkIHdoZW4gc2Nyb2xsaW5nIHRvIHRoZSB0YXJnZXQgZWxlbWVudCAqL1xuICBwcml2YXRlIF9zcGVlZDogbnVtYmVyO1xuICAvKiBFYXNpbmcgZnVuY3Rpb24gdG8gbWFuaXB1bGF0ZSB0aGUgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgb3ZlciB0aW1lICovXG4gIHByaXZhdGUgX2Vhc2luZ0xvZ2ljOiBFYXNpbmdMb2dpYyA9IFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEVhc2luZ0xvZ2ljO1xuICAvKiBCb29sZWFuIHdoZXRoZXIgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIHN0b3Agb24gdXNlciBpbnRlcnJ1cHRpb24gb3Igbm90ICovXG4gIHByaXZhdGUgX2ludGVycnVwdGlibGU6IGJvb2xlYW4gPSBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRJbnRlcnJ1cHRpYmxlO1xuICAvKiBUaGUgbGlzdGVuZXIgdGhhdCB0aGlzIHNjcm9sbCBpbnN0YW5jZSBhdHRhY2hlcyB0byB0aGUgYm9keSB0byBsaXN0ZW4gZm9yIGludGVycnVwdCBldmVudHNcbiAgIFdlJ3JlIGtlZXBpbmcgYSByZWZlcmVuY2UgdG8gaXQgc28gd2UgY2FuIHByb3Blcmx5IHJlbW92ZSBpdCB3aGVuIHRoZSBhbmltYXRpb24gZmluaXNoZXMgKi9cbiAgcHJpdmF0ZSBfaW50ZXJydXB0TGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3Q7XG4gIC8qIFdoZXRoZXIgdGhlIGFkdmFuZGVkIG9mZnNldCBjYWxjdWxhdGlvbiBmb3IgaW5saW5lIHNjcm9sbGluZyBzaG91bGQgYmUgdXNlZCAqL1xuICBwcml2YXRlIF9hZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uOiBib29sZWFuID0gUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0QWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbjtcbiAgLyogRXZlbnQgZW1pdHRlciB0byBub3RpZnkgdGhlIHdvcmxkIGFib3V0IHRoZSBzY3JvbGxpbmcgKi9cbiAgcHJpdmF0ZSBfcGFnZVNjcm9sbEZpbmlzaDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBUaGVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgc2V0L21hbmlwdWxhdGVkIGlmIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHN0YXJ0c1xuICAgKi9cbiAgLyogVGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IHBvc2l0aW9uIHdoZW4gdGhlIGFuaW1hdGlvbiBzdGFydHMgKi9cbiAgcHJpdmF0ZSBfc3RhcnRTY3JvbGxQb3NpdGlvbiA9IDA7XG4gIC8qIFRoZSB0YXJnZXQgdmFsdWUgb2YgdGhlIHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IHBvc2l0aW9uIGZvciB0aGUgYW5pbWF0aW9uIChha2EgXCJ0aGUgZmluYWwgZGVzdGluYXRpb25cIikgKi9cbiAgcHJpdmF0ZSBfdGFyZ2V0U2Nyb2xsUG9zaXRpb246IG51bWJlcjtcbiAgLyogRGlmZmVyZW5jZSBiZXR3ZWVuIHN0YXJ0U2Nyb2xsUG9zaXRpb24gYW5kIHRhcmdldFNjcm9sbFBvc2l0aW9uLiBQcmUtY2FsY3VsYXRlZCB0byBtaW5pbWl6ZSBjb21wdXRhdGlvbnMgZHVyaW5nIGFuaW1hdGlvbiAqL1xuICBwcml2YXRlIF9kaXN0YW5jZVRvU2Nyb2xsOiBudW1iZXI7XG4gIC8qIFRoZSB0aW1lc3RhbXAgd2hlbiB0aGUgYW5pbWF0aW9uIHN0YXJ0cy9nb3Qgc3RhcnRlZCAqL1xuICBwcml2YXRlIF9zdGFydFRpbWU6IG51bWJlcjtcbiAgLyogVGhlIGVzdGltYXRlIGVuZCB0aW1lIG9mIHRoZSBhbmltYXRpb24sIGNhbGN1bGF0ZWQgYnkgc3RhcnRUaW1lICsgZHVyYXRpb24gKi9cbiAgcHJpdmF0ZSBfZW5kVGltZTogbnVtYmVyO1xuICAvKiBUaGUgZHVyYXRpb24gYSBzdGFydGVkIGFuaW1hdGlvbiB0YWtlcy4gVGhpcyBtYXkgbWF0Y2ggdGhlIF9kdXJhdGlvbiBvciBiZSBhZGp1c3RlZCBkdWUgdG8gdGhlIF9zcGVlZCBvcHRpb24gKi9cbiAgcHJpdmF0ZSBfZXhlY3V0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgLyogV2hldGhlciBhbiBpbnRlcnJ1cHQgbGlzdGVuZXIgaXMgYXR0YWNoZWQgdG8gdGhlIGJvZHkgb3Igbm90ICovXG4gIHByaXZhdGUgX2ludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkID0gZmFsc2U7XG5cbiAgLyogUmVmZXJlbmNlcyB0byB0aGUgdGltZXIgaW5zdGFuY2UgdGhhdCBpcyB1c2VkIHRvIHBlcmZvcm0gdGhlIHNjcm9sbCBhbmltYXRpb24gdG8gYmVcbiAgIGFibGUgdG8gY2xlYXIgaXQgb24gYW5pbWF0aW9uIGVuZCovXG4gIHByaXZhdGUgX3RpbWVyOiBhbnkgPSBudWxsO1xuXG4gIC8qXG4gICAqIEZhY3RvcnkgbWV0aG9kcyBmb3IgaW5zdGFuY2UgY3JlYXRpb25cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2ltcGxlSW5zdGFuY2UoZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U/OiBzdHJpbmcpOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgc2Nyb2xsVGFyZ2V0LFxuICAgICAgICBuYW1lc3BhY2VcbiAgICB9KTtcbiAgfVxuXG4vLyAgIHB1YmxpYyBzdGF0aWMgbmV3SW5zdGFuY2Uob3B0aW9uczogUGFnZVNjcm9sbE9wdGlvbnMpIHtcbiAgICBwdWJsaWMgc3RhdGljIG5ld0luc3RhbmNlKG9wdGlvbnM6IFBhZ2VTY3JvbGxPcHRpb25zIHwgYW55KSB7XG5cbiAgICBpZiAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLm5hbWVzcGFjZSkgfHwgb3B0aW9ucy5uYW1lc3BhY2UubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgb3B0aW9ucy5uYW1lc3BhY2UgPSBQYWdlU2Nyb2xsQ29uZmlnLl9kZWZhdWx0TmFtZXNwYWNlO1xuICAgIH1cbiAgICAvLyBjb25zdCBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSA9IG5ldyBQYWdlU2Nyb2xsSW5zdGFuY2Uob3B0aW9ucy5uYW1lc3BhY2UsIGRvY3VtZW50KTtcbiAgICBjb25zdCBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSB8IGFueSA9IG5ldyBQYWdlU2Nyb2xsSW5zdGFuY2Uob3B0aW9ucy5uYW1lc3BhY2UsIGRvY3VtZW50KTtcblxuICAgIGlmIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMuc2Nyb2xsaW5nVmlld3MpIHx8IG9wdGlvbnMuc2Nyb2xsaW5nVmlld3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5faXNJbmxpbmVTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9zY3JvbGxpbmdWaWV3cyA9IFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHksIGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9pc0lubGluZVNjcm9sbGluZyA9IHRydWU7XG4gICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fc2Nyb2xsaW5nVmlld3MgPSBvcHRpb25zLnNjcm9sbGluZ1ZpZXdzO1xuICAgIH1cblxuICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fc2Nyb2xsVGFyZ2V0ID0gb3B0aW9ucy5zY3JvbGxUYXJnZXQ7XG5cbiAgICBpZiAoIVV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy52ZXJ0aWNhbFNjcm9sbGluZykpIHtcbiAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl92ZXJ0aWNhbFNjcm9sbGluZyA9IG9wdGlvbnMudmVydGljYWxTY3JvbGxpbmc7XG4gICAgfVxuXG4gICAgaWYgKCFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbE9mZnNldCkpIHtcbiAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9vZmZzZXQgPSBvcHRpb25zLnBhZ2VTY3JvbGxPZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKCFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbEVhc2luZ0xvZ2ljKSkge1xuICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX2Vhc2luZ0xvZ2ljID0gb3B0aW9ucy5wYWdlU2Nyb2xsRWFzaW5nTG9naWM7XG4gICAgfVxuXG4gICAgaWYgKFV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5wYWdlU2Nyb2xsRHVyYXRpb24pICYmICFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbFNwZWVkKSkge1xuICAgICAgICAvLyBObyBkdXJhdGlvbiBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMsIG9ubHkgaW4gdGhpcyBjYXNlIHdlIHVzZSB0aGUgc3BlZWQgb3B0aW9uIHdoZW4gcHJlc2VudFxuICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX3NwZWVkID0gb3B0aW9ucy5wYWdlU2Nyb2xsU3BlZWQ7XG4gICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fZHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxEdXJhdGlvbikpIHtcbiAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9kdXJhdGlvbiA9IG9wdGlvbnMucGFnZVNjcm9sbER1cmF0aW9uO1xuICAgIH1cblxuICAgIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lcikpIHtcbiAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9wYWdlU2Nyb2xsRmluaXNoID0gb3B0aW9ucy5wYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXI7XG4gICAgfVxuXG4gICAgcGFnZVNjcm9sbEluc3RhbmNlLl9pbnRlcnJ1cHRpYmxlID0gb3B0aW9ucy5wYWdlU2Nyb2xsSW50ZXJydXB0aWJsZSB8fFxuICAgICAgICAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlKSAmJiBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRJbnRlcnJ1cHRpYmxlKTtcblxuICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbiA9IG9wdGlvbnMuYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbiB8fFxuICAgICAgICAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLmFkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24pICYmXG4gICAgICAgIFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEFkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24pO1xuXG4gICAgcmV0dXJuIHBhZ2VTY3JvbGxJbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQYWdlU2Nyb2xsSW5zdGFuY2UgcmVwcmVzZW50aW5nIGEgc2Nyb2xsIGFuaW1hdGlvbiBvbiB0aGUgZG9jdW1lbnRzIGJvZHkuXG4gICAqXG4gICAqIEBwYXJhbSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgdGhhdCBjb250YWlucyB0aGUgYm9keSB0byBiZSBzY3JvbGxlZCBhbmQgdGhlIHNjcm9sbFRhcmdldCBlbGVtZW50c1xuICAgKiBAcGFyYW0gc2Nyb2xsVGFyZ2V0IFdoZXJlIHRvIHNjcm9sbCB0by4gQ2FuIGJlIGEgSFRNTEVsZW1lbnQgcmVmZXJlbmNlIG9yIGEgc3RyaW5nIGxpa2UgJyNlbGVtZW50SWQnXG4gICAqIEBwYXJhbSB2ZXJ0aWNhbFNjcm9sbGluZ1xuICAgKiBAcGFyYW0gbmFtZXNwYWNlIE9wdGlvbmFsIG5hbWVzcGFjZSB0byBncm91cCBzY3JvbGwgYW5pbWF0aW9ucyBsb2dpY2FsbHlcbiAgICpcbiAgICoqL1xuICBwdWJsaWMgc3RhdGljIHNpbXBsZURpcmVjdGlvbkluc3RhbmNlKGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUYXJnZXQ6IFBhZ2VTY3JvbGxUYXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxTY3JvbGxpbmc6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlPzogc3RyaW5nKTogUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgICByZXR1cm4gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcbiAgICAgICAgZG9jdW1lbnQsXG4gICAgICAgIHNjcm9sbFRhcmdldCxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICB2ZXJ0aWNhbFNjcm9sbGluZyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQYWdlU2Nyb2xsSW5zdGFuY2UgcmVwcmVzZW50aW5nIGEgc2Nyb2xsIGFuaW1hdGlvbiB0byB0aGUgdGFyZ2V0IGVsZW1lbnQgd2hlcmUgdGhlIHNjcm9sbGluZ1ZpZXdcbiAgICogZWxlbWVudHMgZ2V0IHNjcm9sbGVkIChsaWtlIGEgZGl2IGNvbnRhaW5lciB3aXRoIGZpeGVkIGhlaWdodCwgcmVzdWx0aW5nIGluIHNjcm9sbGJhcnMgaW4gaXQpLlxuICAgKlxuICAgKiBNYWtlIHN1cmUgdGhhdCB0aGUgc2Nyb2xsVGFyZ2V0IGlzIGxvY2F0ZWQgaW5zaWRlIHRoZSBzY3JvbGxpbmdWaWV3IGluIHRoZSBET00gaGllcmFyY2h5LCBvdGhlcndpc2UgdGhlXG4gICAqIHNjcm9sbGluZ1ZpZXcgd2lsbCBiZSBzY3JvbGxlZCB0byBhbiBhcHBhcmVudGx5IGFyYml0cmFyeSBwb3NpdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGRvY3VtZW50IFRoZSBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBib2R5IHRvIGJlIHNjcm9sbGVkIGFuZCB0aGUgc2Nyb2xsVGFyZ2V0IGVsZW1lbnRzXG4gICAqIEBwYXJhbSBzY3JvbGxUYXJnZXQgV2hlcmUgdG8gc2Nyb2xsIHRvLiBDYW4gYmUgYSBIVE1MRWxlbWVudCByZWZlcmVuY2Ugb3IgYSBzdHJpbmcgbGlrZSAnI2VsZW1lbnRJZCdcbiAgICogQHBhcmFtIHNjcm9sbGluZ1ZpZXcgVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWRcbiAgICogQHBhcmFtIG5hbWVzcGFjZSBPcHRpb25hbCBuYW1lc3BhY2UgdG8gZ3JvdXAgc2Nyb2xsIGFuaW1hdGlvbnMgbG9naWNhbGx5XG4gICAqXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNpbXBsZUlubGluZUluc3RhbmNlKGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUYXJnZXQ6IFBhZ2VTY3JvbGxUYXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nVmlldzogUGFnZVNjcm9sbGluZ1ZpZXdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZT86IHN0cmluZyk6IFBhZ2VTY3JvbGxJbnN0YW5jZSB7XG4gICAgcmV0dXJuIFBhZ2VTY3JvbGxJbnN0YW5jZS5uZXdJbnN0YW5jZSh7XG4gICAgICAgIGRvY3VtZW50LFxuICAgICAgICBzY3JvbGxUYXJnZXQsXG4gICAgICAgIHNjcm9sbGluZ1ZpZXdzOiBbc2Nyb2xsaW5nVmlld10sXG4gICAgICAgIHZlcnRpY2FsU2Nyb2xsaW5nOiB0cnVlLFxuICAgICAgICBuYW1lc3BhY2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IHRoYXQgY29udGFpbnMgdGhlIGJvZHkgdG8gYmUgc2Nyb2xsZWQgYW5kIHRoZSBzY3JvbGxUYXJnZXQgZWxlbWVudHNcbiAgICogQHBhcmFtIHNjcm9sbFRhcmdldCBXaGVyZSB0byBzY3JvbGwgdG8uIENhbiBiZSBhIEhUTUxFbGVtZW50IHJlZmVyZW5jZSBvciBhIHN0cmluZyBsaWtlICcjZWxlbWVudElkJ1xuICAgKiBAcGFyYW0gc2Nyb2xsaW5nVmlldyBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZFxuICAgKiBAcGFyYW0gdmVydGljYWxTY3JvbGxpbmcgd2hldGhlciB0aGUgc2Nyb2xsaW5nIHNob3VsZCBiZSBwZXJmb3JtZWQgaW4gdmVydGljYWwgZGlyZWN0aW9uICh0cnVlLCBkZWZhdWx0KSBvciBob3Jpem9udGFsIChmYWxzZSlcbiAgICogQHBhcmFtIG5hbWVzcGFjZSBPcHRpb25hbCBuYW1lc3BhY2UgdG8gZ3JvdXAgc2Nyb2xsIGFuaW1hdGlvbnMgbG9naWNhbGx5XG4gICAqXG4gICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgbmV3SW5zdGFuY2Uob3B0aW9uczogUGFnZVNjcm9sbE9wdGlvbnMpfVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzaW1wbGVJbmxpbmVEaXJlY3Rpb25JbnN0YW5jZShkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZ1ZpZXc6IFBhZ2VTY3JvbGxpbmdWaWV3cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbGluZzogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U/OiBzdHJpbmcpOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgc2Nyb2xsVGFyZ2V0LFxuICAgICAgICBzY3JvbGxpbmdWaWV3czogW3Njcm9sbGluZ1ZpZXddLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIHZlcnRpY2FsU2Nyb2xsaW5nLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgdGhhdCBjb250YWlucyB0aGUgYm9keSB0byBiZSBzY3JvbGxlZCBhbmQgdGhlIHNjcm9sbFRhcmdldCBlbGVtZW50c1xuICAgKiBAcGFyYW0gc2Nyb2xsVGFyZ2V0IFdoZXJlIHRvIHNjcm9sbCB0by4gQ2FuIGJlIGEgSFRNTEVsZW1lbnQgcmVmZXJlbmNlIG9yIGEgc3RyaW5nIGxpa2UgJyNlbGVtZW50SWQnXG4gICAqIEBwYXJhbSBzY3JvbGxpbmdWaWV3cyBUaGUgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWQuIE51bGwgdG8gdXNlIHRoZSBkZWZhdWx0IGVsZW1lbnRzIG9mIGRvY3VtZW50IGFuZCBib2R5LlxuICAgKiBAcGFyYW0gbmFtZXNwYWNlIE9wdGlvbmFsIG5hbWVzcGFjZSB0byBncm91cCBzY3JvbGwgYW5pbWF0aW9ucyBsb2dpY2FsbHlcbiAgICogQHBhcmFtIHZlcnRpY2FsU2Nyb2xsaW5nIHdoZXRoZXIgdGhlIHNjcm9sbGluZyBzaG91bGQgYmUgcGVyZm9ybWVkIGluIHZlcnRpY2FsIGRpcmVjdGlvbiAodHJ1ZSwgZGVmYXVsdCkgb3IgaG9yaXpvbnRhbCAoZmFsc2UpXG4gICAqIEBwYXJhbSBwYWdlU2Nyb2xsT2Zmc2V0IFRoZSBvZmZzZXQgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHRvcCBvZiB0aGUgdGFyZ2V0IGVsZW1lbnQgb3JcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwvdW5kZWZpbmVkIHRvIHVzZSBhcHBsaWNhdGlvbiBkZWZhdWx0XG4gICAqIEBwYXJhbSBwYWdlU2Nyb2xsSW50ZXJydXB0aWJsZSBXaGV0aGVyIHRoaXMgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgYmUgaW50ZXJydXB0aWJsZS5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWxsL3VuZGVmaW5lZCBmb3IgYXBwbGljYXRpb24gZGVmYXVsdFxuICAgKiBAcGFyYW0gcGFnZVNjcm9sbEVhc2luZ0xvZ2ljIEVhc2luZyBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciBtYW5pcHVsYXRpbmcgdGhlIHNjcm9sbCBwb3NpdGlvblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlciB0aW1lLiBOdWxsL3VuZGVmaW5lZCBmb3IgYXBwbGljYXRpb24gZGVmYXVsdFxuICAgKiBAcGFyYW0gcGFnZVNjcm9sbER1cmF0aW9uIFRoZSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdGhlIGFuaW1hdGlvbiBzaG91bGQgbGFzdC5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVsbC91bmRlZmluZWQgZm9yIGFwcGxpY2F0aW9uIGRlZmF1bHRcbiAgICogQHBhcmFtIHBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lciBMaXN0ZW5lciB0byBiZSBjYWxsZWQgdG8gbm90aWZ5IG90aGVyIHBhcnRzIG9mIHRoZSBhcHBsaWNhdGlvblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IHRoZSBzY3JvbGwgYW5pbWF0aW9uIGhhcyBmaW5pc2hlXG4gICAqXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFkdmFuY2VkSW5zdGFuY2UoZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nVmlld3M/OiBQYWdlU2Nyb2xsaW5nVmlld3NbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZT86IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsU2Nyb2xsaW5nPzogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTY3JvbGxPZmZzZXQ/OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2Nyb2xsSW50ZXJydXB0aWJsZT86IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2Nyb2xsRWFzaW5nTG9naWM/OiBFYXNpbmdMb2dpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTY3JvbGxEdXJhdGlvbj86IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lcj86IEV2ZW50RW1pdHRlcjxib29sZWFuPik6IFBhZ2VTY3JvbGxJbnN0YW5jZSB7XG4gICAgcmV0dXJuIFBhZ2VTY3JvbGxJbnN0YW5jZS5uZXdJbnN0YW5jZSh7XG4gICAgICAgIGRvY3VtZW50LFxuICAgICAgICBzY3JvbGxUYXJnZXQsXG4gICAgICAgIHNjcm9sbGluZ1ZpZXdzLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIHZlcnRpY2FsU2Nyb2xsaW5nLFxuICAgICAgICBwYWdlU2Nyb2xsT2Zmc2V0LFxuICAgICAgICBwYWdlU2Nyb2xsSW50ZXJydXB0aWJsZSxcbiAgICAgICAgcGFnZVNjcm9sbEVhc2luZ0xvZ2ljLFxuICAgICAgICBwYWdlU2Nyb2xsRHVyYXRpb24sXG4gICAgICAgIHBhZ2VTY3JvbGxGaW5pc2hMaXN0ZW5lclxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgY29uc3RydWN0b3IsIHJlcXVpcmVzIHRoZSBwcm9wZXJ0aWVzIGFzc3VtZWQgdG8gYmUgdGhlIGJhcmUgbWluaW11bS5cbiAgICogVXNlIHRoZSBmYWN0b3J5IG1ldGhvZHMgdG8gY3JlYXRlIGluc3RhbmNlczpcbiAgICogICAgICB7QGxpbmsgUGFnZVNjcm9sbEluc3RhbmNlI3NpbXBsZUluc3RhbmNlfVxuICAgKiAgICAgIHtAbGluayBQYWdlU2Nyb2xsSW5zdGFuY2UjbmV3SW5zdGFuY2V9XG4gICAqIEBwYXJhbSBuYW1lc3BhY2VcbiAgICogQHBhcmFtIGRvY3VtZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihuYW1lc3BhY2U6IHN0cmluZywgZG9jdW1lbnQ6IERvY3VtZW50KSB7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2Nyb2xsUHJvcGVydHlWYWx1ZShzY3JvbGxpbmdWaWV3OiBhbnkpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy52ZXJ0aWNhbFNjcm9sbGluZykge1xuICAgICAgICByZXR1cm4gc2Nyb2xsaW5nVmlldy5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgICByZXR1cm4gc2Nyb2xsaW5nVmlldy5zY3JvbGxUb3A7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdCB0aGUgZXhhY3QgbG9jYXRpb24gb2YgdGhlIHNjcm9sbFRhcmdldCBlbGVtZW50LlxuICAgKlxuICAgKiBFeHRyYWN0IHRoZSBzY3JvbGxUYXJnZXQgSFRNTEVsZW1lbnQgZnJvbSB0aGUgZ2l2ZW4gUGFnZVNjcm9sbFRhcmdldCBvYmplY3QuIFRoZSBsYXR0ZXIgb25lIG1heSBiZVxuICAgKiBhIHN0cmluZyBsaWtlIFwiI2hlYWRpbmcyXCIsIHRoZW4gdGhpcyBtZXRob2QgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBET00gZWxlbWVudCBmb3IgdGhhdCBpZC5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBleHRyYWN0U2Nyb2xsVGFyZ2V0UG9zaXRpb24oKToge3RvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXJ9IHtcbiAgICAvLyBsZXQgc2Nyb2xsVGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgbGV0IHNjcm9sbFRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgYW55O1xuICAgIGlmICh0eXBlb2YgdGhpcy5fc2Nyb2xsVGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBzY3JvbGxUYXJnZXRFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgoPHN0cmluZz50aGlzLl9zY3JvbGxUYXJnZXQpLnN1YnN0cigxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsVGFyZ2V0RWxlbWVudCA9IDxIVE1MRWxlbWVudD50aGlzLl9zY3JvbGxUYXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFRhcmdldEVsZW1lbnQgPT09IG51bGwgfHwgc2Nyb2xsVGFyZ2V0RWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIFNjcm9sbCB0YXJnZXQgbm90IGZvdW5kXG4gICAgICAgIHJldHVybiB7dG9wOiBOYU4sIGxlZnQ6IE5hTn07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzSW5saW5lU2Nyb2xsaW5nKSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge3RvcDogc2Nyb2xsVGFyZ2V0RWxlbWVudC5vZmZzZXRUb3AsIGxlZnQ6IHNjcm9sbFRhcmdldEVsZW1lbnQub2Zmc2V0TGVmdH07XG4gICAgICAgIGlmICh0aGlzLl9hZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uICYmIHRoaXMuc2Nyb2xsaW5nVmlld3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBhY2N1bXVsYXRlZFBhcmVudHNQb3MgPSB7dG9wOiAwLCBsZWZ0OiAwfTtcbiAgICAgICAgICAgIC8vIG5vdCBuYW1lZCB3aW5kb3cgdG8gbWFrZSBzdXJlIHdlJ3JlIG5vdCBnZXR0aW5nIHRoZSBnbG9iYWwgd2luZG93IHZhcmlhYmxlIGJ5IGFjY2lkZW50XG4gICAgICAgICAgICBjb25zdCB0aGVXaW5kb3cgPSBzY3JvbGxUYXJnZXRFbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICBsZXQgcGFyZW50Rm91bmQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gU3RhcnQgcGFyZW50IGlzIHRoZSBpbW1lZGlhdGUgcGFyZW50XG4gICAgICAgICAgICAvLyBsZXQgcGFyZW50ID0gc2Nyb2xsVGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgbGV0IHBhcmVudDogYW55ID0gc2Nyb2xsVGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHVwd2FyZHMgYWxsIHBhcmVudHNcbiAgICAgICAgICAgIHdoaWxlICghcGFyZW50Rm91bmQgJiYgIVV0aWwuaXNVbmRlZmluZWRPck51bGwocGFyZW50KSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGVXaW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJykgPT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjdW11bGF0ZWRQYXJlbnRzUG9zLnRvcCArPSBwYXJlbnQub2Zmc2V0VG9wO1xuICAgICAgICAgICAgICAgICAgICBhY2N1bXVsYXRlZFBhcmVudHNQb3MubGVmdCArPSBwYXJlbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTmV4dCBpdGVyYXRpb25cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBwYXJlbnRGb3VuZCA9IHBhcmVudCA9PT0gdGhpcy5zY3JvbGxpbmdWaWV3c1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJlbnRGb3VuZCkge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgdXNlIHRoZSByZXN1bHRzIGlmIHdlIGZvdW5kIHRoZSBwYXJlbnQsIG90aGVyd2lzZSB3ZSBhY2N1bXVsYXRlZCB0b28gbXVjaCBhbnl3YXlcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi50b3AgKz0gYWNjdW11bGF0ZWRQYXJlbnRzUG9zLnRvcDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IGFjY3VtdWxhdGVkUGFyZW50c1Bvcy5sZWZ0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoUGFnZVNjcm9sbENvbmZpZy5fbG9nTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byBmaW5kIG5lc3RlZCBzY3JvbGxpbmcgdGFyZ2V0cyBwYXJlbnQhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gVXRpbC5leHRyYWN0RWxlbWVudFBvc2l0aW9uKHRoaXMuZG9jdW1lbnQsIHNjcm9sbFRhcmdldEVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdG9wIG9mZnNldCBvZiB0aGUgc2Nyb2xsIGFuaW1hdGlvbi5cbiAgICogVGhpcyBhdXRvbWF0aWNhbGx5IHRha2VzIHRoZSBvZmZzZXQgbG9jYXRpb24gb2YgdGhlIHNjcm9sbGluZyBjb250YWluZXIvc2Nyb2xsaW5nIHZpZXdcbiAgICogaW50byBhY2NvdW50IChmb3IgbmVzdGVkL2lubGluZSBzY3JvbGxpbmcpLlxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldEN1cnJlbnRPZmZzZXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFwic2Nyb2xsVG9wXCIgb3IgXCJzY3JvbGxMZWZ0XCIgcHJvcGVydHkgZm9yIGFsbCBzY3JvbGxpbmdWaWV3cyB0byB0aGUgcHJvdmlkZWQgdmFsdWVcbiAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAqIEByZXR1cm4gdHJ1ZSBpZiBhdCBsZWFzdCBmb3Igb25lIFNjcm9sbFRvcFNvdXJjZSB0aGUgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgY291bGQgYmUgc2V0IGFuZCBpdCBrZXB0IHRoZSBuZXcgdmFsdWUuXG4gICAqICAgICAgICAgIGZhbHNlIGlmIGl0IGZhaWxlZCBmb3IgYWxsIFNjcm9sbGluZ1ZpZXdzLCBtZWFuaW5nIHRoYXQgd2Ugc2hvdWxkIHN0b3AgdGhlIGFuaW1hdGlvblxuICAgKiAgICAgICAgICAocHJvYmFibHkgYmVjYXVzZSB3ZSdyZSBhdCB0aGUgZW5kIG9mIHRoZSBzY3JvbGxpbmcgcmVnaW9uKVxuICAgKi9cbiAgcHVibGljIHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoUGFnZVNjcm9sbENvbmZpZy5fbG9nTGV2ZWwgPj0gNSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1Njcm9sbCBQb3NpdGlvbjogJyArIHBvc2l0aW9uKTtcbiAgICB9XG4gICAgLy8gU2V0IHRoZSBuZXcgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdG8gYWxsIHNjcm9sbGluZ1ZpZXdzIGVsZW1lbnRzXG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsaW5nVmlld3MucmVkdWNlKChvbmVBbHJlYWR5V29ya2VkOiBhbnksIHNjcm9sbGluZ1ZpZXc6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBzdGFydFNjcm9sbFByb3BlcnR5VmFsdWUgPSB0aGlzLmdldFNjcm9sbFByb3BlcnR5VmFsdWUoc2Nyb2xsaW5nVmlldyk7XG4gICAgICAgIGlmIChzY3JvbGxpbmdWaWV3ICYmICFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKHN0YXJ0U2Nyb2xsUHJvcGVydHlWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbERpc3RhbmNlID0gTWF0aC5hYnMoc3RhcnRTY3JvbGxQcm9wZXJ0eVZhbHVlIC0gcG9zaXRpb24pO1xuXG4gICAgICAgICAgICAvLyBUaGUgbW92ZW1lbnQgd2UgbmVlZCB0byBwZXJmb3JtIGlzIGxlc3MgdGhhbiAycHhcbiAgICAgICAgICAgIC8vIFRoaXMgd2UgY29uc2lkZXIgYSBzbWFsbCBtb3ZlbWVudCB3aGljaCBzb21lIGJyb3dzZXIgbWF5IG5vdCBwZXJmb3JtIHdoZW5cbiAgICAgICAgICAgIC8vIGNoYW5naW5nIHRoZSBzY3JvbGxUb3Avc2Nyb2xsTGVmdCBwcm9wZXJ0eVxuICAgICAgICAgICAgLy8gVGh1cyBpbiB0aGlzIGNhc2VzIHdlIGRvIG5vdCBzdG9wIHRoZSBzY3JvbGwgYW5pbWF0aW9uLCBhbHRob3VnaCBzZXR0aW5nIHRoZVxuICAgICAgICAgICAgLy8gc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgXCJmYWlsc1wiXG4gICAgICAgICAgICBjb25zdCBpc1NtYWxsTW92ZW1lbnQgPSBzY3JvbGxEaXN0YW5jZSA8IFBhZ2VTY3JvbGxDb25maWcuX21pblNjcm9sbERpc3RhbmNlO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMudmVydGljYWxTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdWaWV3LnNjcm9sbExlZnQgPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nVmlldy5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmV0dXJuIHRydWUgb2Ygc2V0dGluZyB0aGUgbmV3IHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHZhbHVlIHdvcmtlZFxuICAgICAgICAgICAgLy8gV2UgY29uc2lkZXIgdGhhdCBpdCB3b3JrZWQgaWYgdGhlIG5ldyBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB2YWx1ZSBpcyBjbG9zZXIgdG8gdGhlXG4gICAgICAgICAgICAvLyBkZXNpcmVkIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHRoYW4gYmVmb3JlIChpdCBtaWdodCBub3QgYmUgZXhhY3RseSB0aGUgdmFsdWUgd2VcbiAgICAgICAgICAgIC8vIHNldCBkdWUgdG8gZHBpIG9yIHJvdW5kaW5nIGlycmVndWxhcml0aWVzKVxuICAgICAgICAgICAgaWYgKGlzU21hbGxNb3ZlbWVudCB8fCBzY3JvbGxEaXN0YW5jZSA+IE1hdGguYWJzKHRoaXMuZ2V0U2Nyb2xsUHJvcGVydHlWYWx1ZShzY3JvbGxpbmdWaWV3KSAtIHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvbmVBbHJlYWR5V29ya2VkO1xuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGZpcmluZyBhIGFuaW1hdGlvbiBmaW5pc2ggZXZlbnRcbiAgICogQHBhcmFtIHZhbHVlIFdoZXRoZXIgdGhlIGFuaW1hdGlvbiBmaW5pc2hlZCBhdCB0aGUgdGFyZ2V0ICh0cnVlKSBvciBnb3QgaW50ZXJydXB0ZWQgKGZhbHNlKVxuICAgKi9cbiAgcHVibGljIGZpcmVFdmVudCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wYWdlU2Nyb2xsRmluaXNoKSB7XG4gICAgICB0aGlzLl9wYWdlU2Nyb2xsRmluaXNoLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggdGhlIGludGVycnVwdCBsaXN0ZW5lcnMgdG8gdGhlIFBhZ2VTY3JvbGxJbnN0YW5jZSBib2R5LiBUaGUgZ2l2ZW4gaW50ZXJydXB0UmVwb3J0ZXJcbiAgICogd2lsbCBiZSBjYWxsZWQgaWYgYW55IG9mIHRoZSBhdHRhY2hlZCBldmVudHMgaXMgZmlyZWQuXG4gICAqXG4gICAqIFBvc3NpYmx5IGF0dGFjaGVkIGludGVycnVwdExpc3RlbmVycyBhcmUgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gdGhlIGJvZHkgYmVmb3JlIHRoZSBuZXcgb25lIHdpbGwgYmUgYXR0YWNoZWQuXG4gICAqXG4gICAqIEBwYXJhbSBpbnRlcnJ1cHRSZXBvcnRlclxuICAgKi9cbiAgcHVibGljIGF0dGFjaEludGVycnVwdExpc3RlbmVycyhpbnRlcnJ1cHRSZXBvcnRlcjogSW50ZXJydXB0UmVwb3J0ZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQpIHtcbiAgICAgICAgLy8gRGV0YWNoIHBvc3NpYmx5IGV4aXN0aW5nIGxpc3RlbmVycyBmaXJzdFxuICAgICAgICB0aGlzLmRldGFjaEludGVycnVwdExpc3RlbmVycygpO1xuICAgIH1cbiAgICB0aGlzLl9pbnRlcnJ1cHRMaXN0ZW5lciA9IChldmVudDogRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgICBpbnRlcnJ1cHRSZXBvcnRlci5yZXBvcnQoZXZlbnQsIHRoaXMpO1xuICAgIH07XG4gICAgUGFnZVNjcm9sbENvbmZpZy5faW50ZXJydXB0RXZlbnRzLmZvckVhY2goXG4gICAgICAgIChldmVudDogc3RyaW5nKSA9PiB0aGlzLmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdGhpcy5faW50ZXJydXB0TGlzdGVuZXIpXG4gICAgKTtcbiAgICB0aGlzLl9pbnRlcnJ1cHRMaXN0ZW5lcnNBdHRhY2hlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBib2R5IGFuZCBzdG9wIGxpc3RlbmluZyBmb3IgZXZlbnRzIHRoYXQgbWlnaHQgYmUgdHJlYXRlZCBhcyBcImFuaW1hdGlvblxuICAgKiBpbnRlcnJ1cHRcIiBldmVudHMuXG4gICAqL1xuICBwdWJsaWMgZGV0YWNoSW50ZXJydXB0TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIFBhZ2VTY3JvbGxDb25maWcuX2ludGVycnVwdEV2ZW50cy5mb3JFYWNoKFxuICAgICAgICAoZXZlbnQ6IHN0cmluZykgPT4gdGhpcy5kb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMuX2ludGVycnVwdExpc3RlbmVyKVxuICAgICk7XG4gICAgdGhpcy5faW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZXNwYWNlKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICB9XG5cbiAgZ2V0IHNjcm9sbFRhcmdldCgpOiBQYWdlU2Nyb2xsVGFyZ2V0IHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxUYXJnZXQ7XG4gIH1cblxuICBnZXQgdmVydGljYWxTY3JvbGxpbmcoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fdmVydGljYWxTY3JvbGxpbmc7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNjcm9sbGluZ1ZpZXdzKCk6IGFueVtdIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxpbmdWaWV3cztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgc3RhcnRTY3JvbGxQb3NpdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICB0aGlzLl9zdGFydFNjcm9sbFBvc2l0aW9uID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YXJ0U2Nyb2xsUG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFNjcm9sbFBvc2l0aW9uO1xuICB9XG5cbiAgcHVibGljIHNldCB0YXJnZXRTY3JvbGxQb3NpdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICB0aGlzLl90YXJnZXRTY3JvbGxQb3NpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCB0YXJnZXRTY3JvbGxQb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldFNjcm9sbFBvc2l0aW9uO1xuICB9XG5cbiAgcHVibGljIHNldCBkaXN0YW5jZVRvU2Nyb2xsKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuX2Rpc3RhbmNlVG9TY3JvbGwgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGlzdGFuY2VUb1Njcm9sbCgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpc3RhbmNlVG9TY3JvbGw7XG4gIH1cblxuICBnZXQgZXhlY3V0aW9uRHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25EdXJhdGlvbjtcbiAgfVxuXG4gIHNldCBleGVjdXRpb25EdXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICB0aGlzLl9leGVjdXRpb25EdXJhdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBkdXJhdGlvbigpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuX2R1cmF0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBzcGVlZCgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuX3NwZWVkO1xuICB9XG5cbiAgcHVibGljIGdldCBlYXNpbmdMb2dpYygpOiBFYXNpbmdMb2dpYyB7XG4gICAgICByZXR1cm4gdGhpcy5fZWFzaW5nTG9naWM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVycnVwdGlibGUoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5faW50ZXJydXB0aWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgc3RhcnRUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGFydFRpbWUoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWU7XG4gIH1cblxuICBwdWJsaWMgc2V0IGVuZFRpbWUodmFsdWU6IG51bWJlcikge1xuICAgICAgdGhpcy5fZW5kVGltZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBlbmRUaW1lKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5fZW5kVGltZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdGltZXIodmFsdWU6IGFueSkge1xuICAgICAgdGhpcy5fdGltZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGltZXIoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLl90aW1lcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5faW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQ7XG4gIH1cbn1cblxuLyoqXG4qIEFuIEludGVyZmFjZSBhIGxpc3RlbmVyIHNob3VsZCBpbXBsZW1lbnQgdG8gYmUgbm90aWZpZWQgYWJvdXQgcG9zc2libGUgaW50ZXJydXB0IGV2ZW50c1xuKiB0aGF0IGhhcHBlbmVkIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uIHdoaWxlIGEgc2Nyb2xsIGFuaW1hdGlvbiB0YWtlcyBwbGFjZS5cbipcbiogVGhlIFBhZ2VTY3JvbGxTZXJ2aWNlIHByb3ZpZGVzIGFuIGltcGxlbWVudGF0aW9uIHRvIGEgUGFnZVNjcm9sbEluc3RhbmNlIHRvIGJlIG5vdGlmaWVkXG4qIGFib3V0IHNjcm9sbCBhbmltYXRpb24gaW50ZXJydXB0cyBhbmQgc3RvcCByZWxhdGVkIGFuaW1hdGlvbnMuXG4qL1xuXG5leHBvcnQgaW50ZXJmYWNlIEludGVycnVwdFJlcG9ydGVyIHtcbiAgcmVwb3J0OiAoZXZlbnQ6IEV2ZW50LCBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSkgPT4gYW55O1xufVxuIl19