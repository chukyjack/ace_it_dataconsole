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
var /**
 * Represents a scrolling action
 */
PageScrollInstance = /** @class */ (function () {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {@link PageScrollInstance#simpleInstance}
     *      {@link PageScrollInstance#newInstance}
     * @param namespace
     * @param document
     */
    function PageScrollInstance(namespace, document) {
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
    /*
       * Factory methods for instance creation
       */
    /**
     * @param {?} document
     * @param {?} scrollTarget
     * @param {?=} namespace
     * @return {?}
     */
    PageScrollInstance.simpleInstance = /*
       * Factory methods for instance creation
       */
    /**
     * @param {?} document
     * @param {?} scrollTarget
     * @param {?=} namespace
     * @return {?}
     */
    function (document, scrollTarget, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            namespace: namespace
        });
    };
    //   public static newInstance(options: PageScrollOptions) {
    //   public static newInstance(options: PageScrollOptions) {
    /**
     * @param {?} options
     * @return {?}
     */
    PageScrollInstance.newInstance = 
    //   public static newInstance(options: PageScrollOptions) {
    /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (Util.isUndefinedOrNull(options.namespace) || options.namespace.length <= 0) {
            options.namespace = PageScrollConfig._defaultNamespace;
        }
        // const pageScrollInstance: PageScrollInstance = new PageScrollInstance(options.namespace, document);
        /** @type {?} */
        var pageScrollInstance = new PageScrollInstance(options.namespace, document);
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
    };
    /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param verticalScrolling
     * @param namespace Optional namespace to group scroll animations logically
     *
     **/
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
    PageScrollInstance.simpleDirectionInstance = /**
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
    function (document, scrollTarget, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            namespace: namespace,
            verticalScrolling: verticalScrolling,
        });
    };
    /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingView The element that should be scrolled
     * @param namespace Optional namespace to group scroll animations logically
     *
     */
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
    PageScrollInstance.simpleInlineInstance = /**
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
    function (document, scrollTarget, scrollingView, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: [scrollingView],
            verticalScrolling: true,
            namespace: namespace
        });
    };
    /**
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingView The element that should be scrolled
     * @param verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param namespace Optional namespace to group scroll animations logically
     *
     * @deprecated Use {@link newInstance(options: PageScrollOptions)}
     */
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
    PageScrollInstance.simpleInlineDirectionInstance = /**
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
    function (document, scrollTarget, scrollingView, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: [scrollingView],
            namespace: namespace,
            verticalScrolling: verticalScrolling,
        });
    };
    /**
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param namespace Optional namespace to group scroll animations logically
     * @param verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finishe
     *
     */
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
    PageScrollInstance.advancedInstance = /**
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
    function (document, scrollTarget, scrollingViews, namespace, verticalScrolling, pageScrollOffset, pageScrollInterruptible, pageScrollEasingLogic, pageScrollDuration, pageScrollFinishListener) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: scrollingViews,
            namespace: namespace,
            verticalScrolling: verticalScrolling,
            pageScrollOffset: pageScrollOffset,
            pageScrollInterruptible: pageScrollInterruptible,
            pageScrollEasingLogic: pageScrollEasingLogic,
            pageScrollDuration: pageScrollDuration,
            pageScrollFinishListener: pageScrollFinishListener
        });
    };
    /**
     * @param {?} scrollingView
     * @return {?}
     */
    PageScrollInstance.prototype.getScrollPropertyValue = /**
     * @param {?} scrollingView
     * @return {?}
     */
    function (scrollingView) {
        if (!this.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    };
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     */
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    PageScrollInstance.prototype.extractScrollTargetPosition = /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    function () {
        // let scrollTargetElement: HTMLElement;
        /** @type {?} */
        var scrollTargetElement;
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
            var position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
            if (this._advancedInlineOffsetCalculation && this.scrollingViews.length === 1) {
                /** @type {?} */
                var accumulatedParentsPos = { top: 0, left: 0 };
                // not named window to make sure we're not getting the global window variable by accident
                /** @type {?} */
                var theWindow = scrollTargetElement.ownerDocument.defaultView;
                /** @type {?} */
                var parentFound = false;
                // Start parent is the immediate parent
                // let parent = scrollTargetElement.parentElement;
                /** @type {?} */
                var parent_1 = scrollTargetElement.parentElement;
                // Iterate upwards all parents
                while (!parentFound && !Util.isUndefinedOrNull(parent_1)) {
                    if (theWindow.getComputedStyle(parent_1).getPropertyValue('position') === 'relative') {
                        accumulatedParentsPos.top += parent_1.offsetTop;
                        accumulatedParentsPos.left += parent_1.offsetLeft;
                    }
                    // Next iteration
                    parent_1 = parent_1.parentElement;
                    parentFound = parent_1 === this.scrollingViews[0];
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
    };
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     */
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @return {?}
     */
    PageScrollInstance.prototype.getCurrentOffset = /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @return {?}
     */
    function () {
        return this._offset;
    };
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param position
     * @return true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    PageScrollInstance.prototype.setScrollPosition = /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    function (position) {
        var _this = this;
        if (PageScrollConfig._logLevel >= 5) {
            console.warn('Scroll Position: ' + position);
        }
        // Set the new scrollTop/scrollLeft to all scrollingViews elements
        return this.scrollingViews.reduce((/**
         * @param {?} oneAlreadyWorked
         * @param {?} scrollingView
         * @return {?}
         */
        function (oneAlreadyWorked, scrollingView) {
            /** @type {?} */
            var startScrollPropertyValue = _this.getScrollPropertyValue(scrollingView);
            if (scrollingView && !Util.isUndefinedOrNull(startScrollPropertyValue)) {
                /** @type {?} */
                var scrollDistance = Math.abs(startScrollPropertyValue - position);
                // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"
                /** @type {?} */
                var isSmallMovement = scrollDistance < PageScrollConfig._minScrollDistance;
                if (!_this.verticalScrolling) {
                    scrollingView.scrollLeft = position;
                }
                else {
                    scrollingView.scrollTop = position;
                }
                // Return true of setting the new scrollTop/scrollLeft value worked
                // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
                // desired scrollTop/scrollLeft than before (it might not be exactly the value we
                // set due to dpi or rounding irregularities)
                if (isSmallMovement || scrollDistance > Math.abs(_this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }), false);
    };
    /**
     * Trigger firing a animation finish event
     * @param value Whether the animation finished at the target (true) or got interrupted (false)
     */
    /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    PageScrollInstance.prototype.fireEvent = /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    function (value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    };
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param interruptReporter
     */
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param {?} interruptReporter
     * @return {?}
     */
    PageScrollInstance.prototype.attachInterruptListeners = /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param {?} interruptReporter
     * @return {?}
     */
    function (interruptReporter) {
        var _this = this;
        if (this._interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this._interruptListener = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            interruptReporter.report(event, _this);
        });
        PageScrollConfig._interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.document.body.addEventListener(event, _this._interruptListener); }));
        this._interruptListenersAttached = true;
    };
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     */
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    PageScrollInstance.prototype.detachInterruptListeners = /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    function () {
        var _this = this;
        PageScrollConfig._interruptEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.document.body.removeEventListener(event, _this._interruptListener); }));
        this._interruptListenersAttached = false;
    };
    Object.defineProperty(PageScrollInstance.prototype, "namespace", {
        get: /**
         * @return {?}
         */
        function () {
            return this._namespace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollTarget", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollTarget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "verticalScrolling", {
        get: /**
         * @return {?}
         */
        function () {
            return this._verticalScrolling;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollingViews", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollingViews;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startScrollPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._startScrollPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startScrollPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "targetScrollPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._targetScrollPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._targetScrollPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "distanceToScroll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._distanceToScroll;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._distanceToScroll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "executionDuration", {
        get: /**
         * @return {?}
         */
        function () {
            return this._executionDuration;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._executionDuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "duration", {
        get: /**
         * @return {?}
         */
        function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "speed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "easingLogic", {
        get: /**
         * @return {?}
         */
        function () {
            return this._easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._interruptible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._startTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "endTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._endTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "timer", {
        get: /**
         * @return {?}
         */
        function () {
            return this._timer;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._timer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptListenersAttached", {
        get: /**
         * @return {?}
         */
        function () {
            return this._interruptListenersAttached;
        },
        enumerable: true,
        configurable: true
    });
    return PageScrollInstance;
}());
/**
 * Represents a scrolling action
 */
export { PageScrollInstance };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zbW9vdGhzY3JvbGwvbWRiLXBhZ2Utc2Nyb2xsLmluc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxnQkFBZ0IsRUFBdUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RyxPQUFPLEVBQUMscUJBQXFCLElBQUksSUFBSSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBTTdFLHVDQWdFQzs7Ozs7O0lBNURDLHFDQUFtQjs7Ozs7O0lBTW5CLHlDQUErQjs7Ozs7O0lBTS9CLDJDQUFzQzs7Ozs7SUFLdEMsc0NBQW1COzs7Ozs7SUFNbkIsOENBQTRCOzs7OztJQUs1Qiw0REFBMEM7Ozs7O0lBSzFDLDZDQUEwQjs7Ozs7SUFLMUIsb0RBQWtDOzs7OztJQUtsQyxrREFBb0M7Ozs7O0lBS3BDLCtDQUE0Qjs7Ozs7O0lBTTVCLDRDQUF5Qjs7Ozs7SUFLekIscURBQWlEOzs7OztBQU9uRDs7OztJQThPRTs7Ozs7OztPQU9HO0lBQ0gsNEJBQVksU0FBaUIsRUFBRSxRQUFrQjs7Ozs7UUEvT3pDLGVBQVUsR0FBVyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQzs7UUFVeEQsdUJBQWtCLEdBQUcsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7O1FBRWpFLFlBQU8sR0FBVyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQzs7UUFFdkQsY0FBUyxHQUFXLGdCQUFnQixDQUFDLGVBQWUsQ0FBQzs7UUFJckQsaUJBQVksR0FBZ0IsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7O1FBRWhFLG1CQUFjLEdBQVksZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7O1FBS2hFLHFDQUFnQyxHQUFZLGdCQUFnQixDQUFDLHNDQUFz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OztJQUV6QixnREFBbUM7Ozs7O0lBRW5DLHlEQUE0Qzs7Ozs7SUFJNUMsb0NBQTJCOzs7Ozs7Ozs7O0FBeWM3Qix1Q0FFQzs7O0lBREMsbUNBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4qIENyZWF0ZWQgYnkgc2ViYXN0aWFuZnVzcyBvbiAyOS4wOC4xNi5cbiovXG5cbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtFYXNpbmdMb2dpYywgUGFnZVNjcm9sbENvbmZpZywgUGFnZVNjcm9sbFRhcmdldCwgUGFnZVNjcm9sbGluZ1ZpZXdzfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5jb25maWcnO1xuaW1wb3J0IHtQYWdlU2Nyb2xsVXRpbFNlcnZpY2UgYXMgVXRpbH0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwtdXRpbC5zZXJ2aWNlJztcblxuLyoqXG4qIEFuIEludGVyZmFjZSBzcGVjaWZ5aW5nIHRoZSBwb3NzaWJsZSBvcHRpb25zIHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBuZXdJbnN0YW5jZSgpIGZhY3RvcnkgbWV0aG9kXG4qL1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VTY3JvbGxPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBkb2N1bWVudCBvYmplY3Qgb2YgdGhlIGN1cnJlbnQgYXBwXG4gICAqL1xuICBkb2N1bWVudDogRG9jdW1lbnQ7XG5cbiAgLyoqXG4gICAqIEEgc3BlY2lmaWNhdGlvbiBvZiB0aGUgRE9NIGVsZW1lbnQgdG8gc2Nyb2xsIHRvLiBFaXRoZXIgYSBzdHJpbmcgcmVmZXJyaW5nIHRvIGFuXG4gICAqIG9iamVjdCBpZCAoYCN0YXJnZXRgKSBvciBhIEhUTUxFbGVtZW50IHRoYXQgaXMgYXR0YWNoZWQgdG8gdGhlIGRvY3VtZW50J3MgRE9NIHRyZWUuXG4gICAqL1xuICBzY3JvbGxUYXJnZXQ6IFBhZ2VTY3JvbGxUYXJnZXQ7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIEhUTUxFbGVtZW50cyBvciB0aGUgYm9keSBvYmplY3QgdGhhdCBzaG91bGQgYmUgbWFuaXB1bGF0ZWQgd2hpbGUgcGVyZm9ybWluZ1xuICAgKiB0aGUgc2Nyb2xsIGFuaW1hdGlvbi5cbiAgICovXG4gIHNjcm9sbGluZ1ZpZXdzPzogUGFnZVNjcm9sbGluZ1ZpZXdzW107XG5cbiAgLyoqXG4gICAqIE5hbWVzcGFjZSBvZiB0aGUgc2Nyb2xsIGFuaW1hdGlvblxuICAgKi9cbiAgbmFtZXNwYWNlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoYXQgc2Nyb2xsIGFuaW1hdGlvbiBzY3JvbGxzIGluIHZlcnRpY2FsIGRpcmVjdGlvbiAodHJ1ZSkgb3JcbiAgICogaG9yaXpvbnRhbCAoZmFsc2UsIGRlZmF1bHQgdmFsdWUpXG4gICAqL1xuICB2ZXJ0aWNhbFNjcm9sbGluZz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGFuIGFkdmFuY2VkIG9mZnNldCBjYWxjdWxhdGlvbiBmb3IgaW5saW5lIHNjcm9sbGluZ3Mgc2hvdWxkIGJlIGFwcGxpZWRcbiAgICovXG4gIGFkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPZmZzZXQgb2YgdGFyZ2V0IGVsZW1lbnRzIGxvY2F0aW9uIGFuZCBzY3JvbGwgbG9jYXRpb25cbiAgICovXG4gIHBhZ2VTY3JvbGxPZmZzZXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIGJlIGludGVycnVwdGlibGVcbiAgICovXG4gIHBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGVhc2luZyBsb2dpYyB0byBiZSB1c2VkXG4gICAqL1xuICBwYWdlU2Nyb2xsRWFzaW5nTG9naWM/OiBFYXNpbmdMb2dpYztcblxuICAvKipcbiAgICogRHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCBsYXN0XG4gICAqL1xuICBwYWdlU2Nyb2xsRHVyYXRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gc3BlZWQgdG8gYmUgdXNlZCBmb3IgdGhlIHNjcm9sbCBhbmltYXRpb24uIE9ubHkgdGFrZW5cbiAgICogaW50byBhY2NvdW50IG9mIG5vIHBhZ2VTY3JvbGxEdXJhdGlvbiBpcyBwcm92aWRlZFxuICAgKi9cbiAgcGFnZVNjcm9sbFNwZWVkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuZXZlciB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzdG9wc1xuICAgKi9cbiAgcGFnZVNjcm9sbEZpbmlzaExpc3RlbmVyPzogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xufVxuXG4vKipcbiogUmVwcmVzZW50cyBhIHNjcm9sbGluZyBhY3Rpb25cbiovXG5cbmV4cG9ydCBjbGFzcyBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuXG4gIC8qKlxuICAgKiBUaGVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgc2V0IGR1cmluZyBpbnN0YW5jZSBjb25zdHJ1Y3Rpb24gYW5kIGRlZmF1bHQgdG8gdGhlaXIgZGVmYXVsdHMgZnJvbSBQYWdlU2Nyb2xsQ29uZmlnXG4gICAqL1xuXG4gIC8qIEEgbmFtZXNwYWNlIHRvIFwiZ3JvdXBcIiBzY3JvbGwgYW5pbWF0aW9ucyB0b2dldGhlciBhbmQgc3RvcHBpbmcgc29tZSBkb2VzIG5vdCBzdG9wIG90aGVycyAqL1xuICBwcml2YXRlIF9uYW1lc3BhY2U6IHN0cmluZyA9IFBhZ2VTY3JvbGxDb25maWcuX2RlZmF1bHROYW1lc3BhY2U7XG4gIC8qIFRoZSBkb2N1bWVudCBhbGwgdGhlIHNjcm9sbGluZyB0YWtlcyBwbGFjZSBhbmQgc2Nyb2xsIHRhcmdldHMgYXJlIGxvY2F0ZWQgaW4gKi9cbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XG4gIC8qIFRoZSBET00gZWxlbWVudHMgb3Igc2ltaWxhciBub2RlcyB3aG9zZSBzY3JvbGxUb3Avc2Nyb2xsTGVmdCBwcm9wZXJ0eSB3aWxsIGJlIG1hbmlwdWxhdGVkIGR1cmluZyBzY3JvbGxpbmcgKi9cbiAgcHJpdmF0ZSBfc2Nyb2xsaW5nVmlld3M6IFBhZ2VTY3JvbGxpbmdWaWV3c1tdO1xuICBwcml2YXRlIF9pc0lubGluZVNjcm9sbGluZzogYm9vbGVhbjtcbiAgLyogVGhlIHRhcmdldCBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkIGludG8gdGhlIHZpZXdwb3J0ICovXG4gIHByaXZhdGUgX3Njcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldDtcblxuICAvKiBXaGV0aGVyIHdlIHNjcm9sbCB2ZXJ0aWNhbGx5ICh0cnVlKSBvciBob3Jpem9udGFsbHkgKGZhbHNlKSAqL1xuICBwcml2YXRlIF92ZXJ0aWNhbFNjcm9sbGluZyA9IFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdElzVmVydGljYWxTY3JvbGxpbmc7XG4gIC8qIE9mZnNldCBpbiBweCB0aGF0IHRoZSBhbmltYXRpb24gc2hvdWxkIHN0b3AgYWJvdmUgdGhhdCB0YXJnZXQgZWxlbWVudCAqL1xuICBwcml2YXRlIF9vZmZzZXQ6IG51bWJlciA9IFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdFNjcm9sbE9mZnNldDtcbiAgLyogRHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCBsYXN0ICovXG4gIHByaXZhdGUgX2R1cmF0aW9uOiBudW1iZXIgPSBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHREdXJhdGlvbjtcbiAgLyogU3BlZWQgaW4gXCJwaXhlbHMvc2Vjb25kXCIgdG8gYmUgdXNlZCB3aGVuIHNjcm9sbGluZyB0byB0aGUgdGFyZ2V0IGVsZW1lbnQgKi9cbiAgcHJpdmF0ZSBfc3BlZWQ6IG51bWJlcjtcbiAgLyogRWFzaW5nIGZ1bmN0aW9uIHRvIG1hbmlwdWxhdGUgdGhlIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHZhbHVlIG92ZXIgdGltZSAqL1xuICBwcml2YXRlIF9lYXNpbmdMb2dpYzogRWFzaW5nTG9naWMgPSBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRFYXNpbmdMb2dpYztcbiAgLyogQm9vbGVhbiB3aGV0aGVyIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCBzdG9wIG9uIHVzZXIgaW50ZXJydXB0aW9uIG9yIG5vdCAqL1xuICBwcml2YXRlIF9pbnRlcnJ1cHRpYmxlOiBib29sZWFuID0gUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0SW50ZXJydXB0aWJsZTtcbiAgLyogVGhlIGxpc3RlbmVyIHRoYXQgdGhpcyBzY3JvbGwgaW5zdGFuY2UgYXR0YWNoZXMgdG8gdGhlIGJvZHkgdG8gbGlzdGVuIGZvciBpbnRlcnJ1cHQgZXZlbnRzXG4gICBXZSdyZSBrZWVwaW5nIGEgcmVmZXJlbmNlIHRvIGl0IHNvIHdlIGNhbiBwcm9wZXJseSByZW1vdmUgaXQgd2hlbiB0aGUgYW5pbWF0aW9uIGZpbmlzaGVzICovXG4gIHByaXZhdGUgX2ludGVycnVwdExpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0O1xuICAvKiBXaGV0aGVyIHRoZSBhZHZhbmRlZCBvZmZzZXQgY2FsY3VsYXRpb24gZm9yIGlubGluZSBzY3JvbGxpbmcgc2hvdWxkIGJlIHVzZWQgKi9cbiAgcHJpdmF0ZSBfYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbjogYm9vbGVhbiA9IFBhZ2VTY3JvbGxDb25maWcuZGVmYXVsdEFkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb247XG4gIC8qIEV2ZW50IGVtaXR0ZXIgdG8gbm90aWZ5IHRoZSB3b3JsZCBhYm91dCB0aGUgc2Nyb2xsaW5nICovXG4gIHByaXZhdGUgX3BhZ2VTY3JvbGxGaW5pc2g6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogVGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIHNldC9tYW5pcHVsYXRlZCBpZiB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzdGFydHNcbiAgICovXG4gIC8qIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCBwb3NpdGlvbiB3aGVuIHRoZSBhbmltYXRpb24gc3RhcnRzICovXG4gIHByaXZhdGUgX3N0YXJ0U2Nyb2xsUG9zaXRpb24gPSAwO1xuICAvKiBUaGUgdGFyZ2V0IHZhbHVlIG9mIHRoZSBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCBwb3NpdGlvbiBmb3IgdGhlIGFuaW1hdGlvbiAoYWthIFwidGhlIGZpbmFsIGRlc3RpbmF0aW9uXCIpICovXG4gIHByaXZhdGUgX3RhcmdldFNjcm9sbFBvc2l0aW9uOiBudW1iZXI7XG4gIC8qIERpZmZlcmVuY2UgYmV0d2VlbiBzdGFydFNjcm9sbFBvc2l0aW9uIGFuZCB0YXJnZXRTY3JvbGxQb3NpdGlvbi4gUHJlLWNhbGN1bGF0ZWQgdG8gbWluaW1pemUgY29tcHV0YXRpb25zIGR1cmluZyBhbmltYXRpb24gKi9cbiAgcHJpdmF0ZSBfZGlzdGFuY2VUb1Njcm9sbDogbnVtYmVyO1xuICAvKiBUaGUgdGltZXN0YW1wIHdoZW4gdGhlIGFuaW1hdGlvbiBzdGFydHMvZ290IHN0YXJ0ZWQgKi9cbiAgcHJpdmF0ZSBfc3RhcnRUaW1lOiBudW1iZXI7XG4gIC8qIFRoZSBlc3RpbWF0ZSBlbmQgdGltZSBvZiB0aGUgYW5pbWF0aW9uLCBjYWxjdWxhdGVkIGJ5IHN0YXJ0VGltZSArIGR1cmF0aW9uICovXG4gIHByaXZhdGUgX2VuZFRpbWU6IG51bWJlcjtcbiAgLyogVGhlIGR1cmF0aW9uIGEgc3RhcnRlZCBhbmltYXRpb24gdGFrZXMuIFRoaXMgbWF5IG1hdGNoIHRoZSBfZHVyYXRpb24gb3IgYmUgYWRqdXN0ZWQgZHVlIHRvIHRoZSBfc3BlZWQgb3B0aW9uICovXG4gIHByaXZhdGUgX2V4ZWN1dGlvbkR1cmF0aW9uOiBudW1iZXI7XG4gIC8qIFdoZXRoZXIgYW4gaW50ZXJydXB0IGxpc3RlbmVyIGlzIGF0dGFjaGVkIHRvIHRoZSBib2R5IG9yIG5vdCAqL1xuICBwcml2YXRlIF9pbnRlcnJ1cHRMaXN0ZW5lcnNBdHRhY2hlZCA9IGZhbHNlO1xuXG4gIC8qIFJlZmVyZW5jZXMgdG8gdGhlIHRpbWVyIGluc3RhbmNlIHRoYXQgaXMgdXNlZCB0byBwZXJmb3JtIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHRvIGJlXG4gICBhYmxlIHRvIGNsZWFyIGl0IG9uIGFuaW1hdGlvbiBlbmQqL1xuICBwcml2YXRlIF90aW1lcjogYW55ID0gbnVsbDtcblxuICAvKlxuICAgKiBGYWN0b3J5IG1ldGhvZHMgZm9yIGluc3RhbmNlIGNyZWF0aW9uXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNpbXBsZUluc3RhbmNlKGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUYXJnZXQ6IFBhZ2VTY3JvbGxUYXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlPzogc3RyaW5nKTogUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgICByZXR1cm4gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcbiAgICAgICAgZG9jdW1lbnQsXG4gICAgICAgIHNjcm9sbFRhcmdldCxcbiAgICAgICAgbmFtZXNwYWNlXG4gICAgfSk7XG4gIH1cblxuLy8gICBwdWJsaWMgc3RhdGljIG5ld0luc3RhbmNlKG9wdGlvbnM6IFBhZ2VTY3JvbGxPcHRpb25zKSB7XG4gICAgcHVibGljIHN0YXRpYyBuZXdJbnN0YW5jZShvcHRpb25zOiBQYWdlU2Nyb2xsT3B0aW9ucyB8IGFueSkge1xuXG4gICAgaWYgKFV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5uYW1lc3BhY2UpIHx8IG9wdGlvbnMubmFtZXNwYWNlLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIG9wdGlvbnMubmFtZXNwYWNlID0gUGFnZVNjcm9sbENvbmZpZy5fZGVmYXVsdE5hbWVzcGFjZTtcbiAgICB9XG4gICAgLy8gY29uc3QgcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UgPSBuZXcgUGFnZVNjcm9sbEluc3RhbmNlKG9wdGlvbnMubmFtZXNwYWNlLCBkb2N1bWVudCk7XG4gICAgY29uc3QgcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UgfCBhbnkgPSBuZXcgUGFnZVNjcm9sbEluc3RhbmNlKG9wdGlvbnMubmFtZXNwYWNlLCBkb2N1bWVudCk7XG5cbiAgICBpZiAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnNjcm9sbGluZ1ZpZXdzKSB8fCBvcHRpb25zLnNjcm9sbGluZ1ZpZXdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX2lzSW5saW5lU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fc2Nyb2xsaW5nVmlld3MgPSBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5LCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5faXNJbmxpbmVTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX3Njcm9sbGluZ1ZpZXdzID0gb3B0aW9ucy5zY3JvbGxpbmdWaWV3cztcbiAgICB9XG5cbiAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX3Njcm9sbFRhcmdldCA9IG9wdGlvbnMuc2Nyb2xsVGFyZ2V0O1xuXG4gICAgaWYgKCFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMudmVydGljYWxTY3JvbGxpbmcpKSB7XG4gICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fdmVydGljYWxTY3JvbGxpbmcgPSBvcHRpb25zLnZlcnRpY2FsU2Nyb2xsaW5nO1xuICAgIH1cblxuICAgIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxPZmZzZXQpKSB7XG4gICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fb2Zmc2V0ID0gb3B0aW9ucy5wYWdlU2Nyb2xsT2Zmc2V0O1xuICAgIH1cblxuICAgIGlmICghVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxFYXNpbmdMb2dpYykpIHtcbiAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9lYXNpbmdMb2dpYyA9IG9wdGlvbnMucGFnZVNjcm9sbEVhc2luZ0xvZ2ljO1xuICAgIH1cblxuICAgIGlmIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKG9wdGlvbnMucGFnZVNjcm9sbER1cmF0aW9uKSAmJiAhVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChvcHRpb25zLnBhZ2VTY3JvbGxTcGVlZCkpIHtcbiAgICAgICAgLy8gTm8gZHVyYXRpb24gc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zLCBvbmx5IGluIHRoaXMgY2FzZSB3ZSB1c2UgdGhlIHNwZWVkIG9wdGlvbiB3aGVuIHByZXNlbnRcbiAgICAgICAgcGFnZVNjcm9sbEluc3RhbmNlLl9zcGVlZCA9IG9wdGlvbnMucGFnZVNjcm9sbFNwZWVkO1xuICAgICAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX2R1cmF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAoIVV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5wYWdlU2Nyb2xsRHVyYXRpb24pKSB7XG4gICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fZHVyYXRpb24gPSBvcHRpb25zLnBhZ2VTY3JvbGxEdXJhdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoIVV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5wYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXIpKSB7XG4gICAgICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5fcGFnZVNjcm9sbEZpbmlzaCA9IG9wdGlvbnMucGFnZVNjcm9sbEZpbmlzaExpc3RlbmVyO1xuICAgIH1cblxuICAgIHBhZ2VTY3JvbGxJbnN0YW5jZS5faW50ZXJydXB0aWJsZSA9IG9wdGlvbnMucGFnZVNjcm9sbEludGVycnVwdGlibGUgfHxcbiAgICAgICAgKFV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5wYWdlU2Nyb2xsSW50ZXJydXB0aWJsZSkgJiYgUGFnZVNjcm9sbENvbmZpZy5kZWZhdWx0SW50ZXJydXB0aWJsZSk7XG5cbiAgICBwYWdlU2Nyb2xsSW5zdGFuY2UuX2FkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24gPSBvcHRpb25zLmFkdmFuY2VkSW5saW5lT2Zmc2V0Q2FsY3VsYXRpb24gfHxcbiAgICAgICAgKFV0aWwuaXNVbmRlZmluZWRPck51bGwob3B0aW9ucy5hZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uKSAmJlxuICAgICAgICBQYWdlU2Nyb2xsQ29uZmlnLmRlZmF1bHRBZHZhbmNlZElubGluZU9mZnNldENhbGN1bGF0aW9uKTtcblxuICAgIHJldHVybiBwYWdlU2Nyb2xsSW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUGFnZVNjcm9sbEluc3RhbmNlIHJlcHJlc2VudGluZyBhIHNjcm9sbCBhbmltYXRpb24gb24gdGhlIGRvY3VtZW50cyBib2R5LlxuICAgKlxuICAgKiBAcGFyYW0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IHRoYXQgY29udGFpbnMgdGhlIGJvZHkgdG8gYmUgc2Nyb2xsZWQgYW5kIHRoZSBzY3JvbGxUYXJnZXQgZWxlbWVudHNcbiAgICogQHBhcmFtIHNjcm9sbFRhcmdldCBXaGVyZSB0byBzY3JvbGwgdG8uIENhbiBiZSBhIEhUTUxFbGVtZW50IHJlZmVyZW5jZSBvciBhIHN0cmluZyBsaWtlICcjZWxlbWVudElkJ1xuICAgKiBAcGFyYW0gdmVydGljYWxTY3JvbGxpbmdcbiAgICogQHBhcmFtIG5hbWVzcGFjZSBPcHRpb25hbCBuYW1lc3BhY2UgdG8gZ3JvdXAgc2Nyb2xsIGFuaW1hdGlvbnMgbG9naWNhbGx5XG4gICAqXG4gICAqKi9cbiAgcHVibGljIHN0YXRpYyBzaW1wbGVEaXJlY3Rpb25JbnN0YW5jZShkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsU2Nyb2xsaW5nOiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZT86IHN0cmluZyk6IFBhZ2VTY3JvbGxJbnN0YW5jZSB7XG4gICAgcmV0dXJuIFBhZ2VTY3JvbGxJbnN0YW5jZS5uZXdJbnN0YW5jZSh7XG4gICAgICAgIGRvY3VtZW50LFxuICAgICAgICBzY3JvbGxUYXJnZXQsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgdmVydGljYWxTY3JvbGxpbmcsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUGFnZVNjcm9sbEluc3RhbmNlIHJlcHJlc2VudGluZyBhIHNjcm9sbCBhbmltYXRpb24gdG8gdGhlIHRhcmdldCBlbGVtZW50IHdoZXJlIHRoZSBzY3JvbGxpbmdWaWV3XG4gICAqIGVsZW1lbnRzIGdldCBzY3JvbGxlZCAobGlrZSBhIGRpdiBjb250YWluZXIgd2l0aCBmaXhlZCBoZWlnaHQsIHJlc3VsdGluZyBpbiBzY3JvbGxiYXJzIGluIGl0KS5cbiAgICpcbiAgICogTWFrZSBzdXJlIHRoYXQgdGhlIHNjcm9sbFRhcmdldCBpcyBsb2NhdGVkIGluc2lkZSB0aGUgc2Nyb2xsaW5nVmlldyBpbiB0aGUgRE9NIGhpZXJhcmNoeSwgb3RoZXJ3aXNlIHRoZVxuICAgKiBzY3JvbGxpbmdWaWV3IHdpbGwgYmUgc2Nyb2xsZWQgdG8gYW4gYXBwYXJlbnRseSBhcmJpdHJhcnkgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgdGhhdCBjb250YWlucyB0aGUgYm9keSB0byBiZSBzY3JvbGxlZCBhbmQgdGhlIHNjcm9sbFRhcmdldCBlbGVtZW50c1xuICAgKiBAcGFyYW0gc2Nyb2xsVGFyZ2V0IFdoZXJlIHRvIHNjcm9sbCB0by4gQ2FuIGJlIGEgSFRNTEVsZW1lbnQgcmVmZXJlbmNlIG9yIGEgc3RyaW5nIGxpa2UgJyNlbGVtZW50SWQnXG4gICAqIEBwYXJhbSBzY3JvbGxpbmdWaWV3IFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgT3B0aW9uYWwgbmFtZXNwYWNlIHRvIGdyb3VwIHNjcm9sbCBhbmltYXRpb25zIGxvZ2ljYWxseVxuICAgKlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzaW1wbGVJbmxpbmVJbnN0YW5jZShkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVGFyZ2V0OiBQYWdlU2Nyb2xsVGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZ1ZpZXc6IFBhZ2VTY3JvbGxpbmdWaWV3cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U/OiBzdHJpbmcpOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgc2Nyb2xsVGFyZ2V0LFxuICAgICAgICBzY3JvbGxpbmdWaWV3czogW3Njcm9sbGluZ1ZpZXddLFxuICAgICAgICB2ZXJ0aWNhbFNjcm9sbGluZzogdHJ1ZSxcbiAgICAgICAgbmFtZXNwYWNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRvY3VtZW50IFRoZSBkb2N1bWVudCB0aGF0IGNvbnRhaW5zIHRoZSBib2R5IHRvIGJlIHNjcm9sbGVkIGFuZCB0aGUgc2Nyb2xsVGFyZ2V0IGVsZW1lbnRzXG4gICAqIEBwYXJhbSBzY3JvbGxUYXJnZXQgV2hlcmUgdG8gc2Nyb2xsIHRvLiBDYW4gYmUgYSBIVE1MRWxlbWVudCByZWZlcmVuY2Ugb3IgYSBzdHJpbmcgbGlrZSAnI2VsZW1lbnRJZCdcbiAgICogQHBhcmFtIHNjcm9sbGluZ1ZpZXcgVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgc2Nyb2xsZWRcbiAgICogQHBhcmFtIHZlcnRpY2FsU2Nyb2xsaW5nIHdoZXRoZXIgdGhlIHNjcm9sbGluZyBzaG91bGQgYmUgcGVyZm9ybWVkIGluIHZlcnRpY2FsIGRpcmVjdGlvbiAodHJ1ZSwgZGVmYXVsdCkgb3IgaG9yaXpvbnRhbCAoZmFsc2UpXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgT3B0aW9uYWwgbmFtZXNwYWNlIHRvIGdyb3VwIHNjcm9sbCBhbmltYXRpb25zIGxvZ2ljYWxseVxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIG5ld0luc3RhbmNlKG9wdGlvbnM6IFBhZ2VTY3JvbGxPcHRpb25zKX1cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2ltcGxlSW5saW5lRGlyZWN0aW9uSW5zdGFuY2UoZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmdWaWV3OiBQYWdlU2Nyb2xsaW5nVmlld3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxTY3JvbGxpbmc6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlPzogc3RyaW5nKTogUGFnZVNjcm9sbEluc3RhbmNlIHtcbiAgICByZXR1cm4gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcbiAgICAgICAgZG9jdW1lbnQsXG4gICAgICAgIHNjcm9sbFRhcmdldCxcbiAgICAgICAgc2Nyb2xsaW5nVmlld3M6IFtzY3JvbGxpbmdWaWV3XSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICB2ZXJ0aWNhbFNjcm9sbGluZyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IHRoYXQgY29udGFpbnMgdGhlIGJvZHkgdG8gYmUgc2Nyb2xsZWQgYW5kIHRoZSBzY3JvbGxUYXJnZXQgZWxlbWVudHNcbiAgICogQHBhcmFtIHNjcm9sbFRhcmdldCBXaGVyZSB0byBzY3JvbGwgdG8uIENhbiBiZSBhIEhUTUxFbGVtZW50IHJlZmVyZW5jZSBvciBhIHN0cmluZyBsaWtlICcjZWxlbWVudElkJ1xuICAgKiBAcGFyYW0gc2Nyb2xsaW5nVmlld3MgVGhlIGVsZW1lbnRzIHRoYXQgc2hvdWxkIGJlIHNjcm9sbGVkLiBOdWxsIHRvIHVzZSB0aGUgZGVmYXVsdCBlbGVtZW50cyBvZiBkb2N1bWVudCBhbmQgYm9keS5cbiAgICogQHBhcmFtIG5hbWVzcGFjZSBPcHRpb25hbCBuYW1lc3BhY2UgdG8gZ3JvdXAgc2Nyb2xsIGFuaW1hdGlvbnMgbG9naWNhbGx5XG4gICAqIEBwYXJhbSB2ZXJ0aWNhbFNjcm9sbGluZyB3aGV0aGVyIHRoZSBzY3JvbGxpbmcgc2hvdWxkIGJlIHBlcmZvcm1lZCBpbiB2ZXJ0aWNhbCBkaXJlY3Rpb24gKHRydWUsIGRlZmF1bHQpIG9yIGhvcml6b250YWwgKGZhbHNlKVxuICAgKiBAcGFyYW0gcGFnZVNjcm9sbE9mZnNldCBUaGUgb2Zmc2V0IHRvIGJlIGF0dGFjaGVkIHRvIHRoZSB0b3Agb2YgdGhlIHRhcmdldCBlbGVtZW50IG9yXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsL3VuZGVmaW5lZCB0byB1c2UgYXBwbGljYXRpb24gZGVmYXVsdFxuICAgKiBAcGFyYW0gcGFnZVNjcm9sbEludGVycnVwdGlibGUgV2hldGhlciB0aGlzIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIGJlIGludGVycnVwdGlibGUuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVsbC91bmRlZmluZWQgZm9yIGFwcGxpY2F0aW9uIGRlZmF1bHRcbiAgICogQHBhcmFtIHBhZ2VTY3JvbGxFYXNpbmdMb2dpYyBFYXNpbmcgZnVuY3Rpb24gdG8gYmUgdXNlZCBmb3IgbWFuaXB1bGF0aW5nIHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXIgdGltZS4gTnVsbC91bmRlZmluZWQgZm9yIGFwcGxpY2F0aW9uIGRlZmF1bHRcbiAgICogQHBhcmFtIHBhZ2VTY3JvbGxEdXJhdGlvbiBUaGUgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIHRoZSBhbmltYXRpb24gc2hvdWxkIGxhc3QuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bGwvdW5kZWZpbmVkIGZvciBhcHBsaWNhdGlvbiBkZWZhdWx0XG4gICAqIEBwYXJhbSBwYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXIgTGlzdGVuZXIgdG8gYmUgY2FsbGVkIHRvIG5vdGlmeSBvdGhlciBwYXJ0cyBvZiB0aGUgYXBwbGljYXRpb25cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBoYXMgZmluaXNoZVxuICAgKlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhZHZhbmNlZEluc3RhbmNlKGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRhcmdldDogUGFnZVNjcm9sbFRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZ1ZpZXdzPzogUGFnZVNjcm9sbGluZ1ZpZXdzW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U/OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbGluZz86IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2Nyb2xsT2Zmc2V0PzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNjcm9sbEludGVycnVwdGlibGU/OiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNjcm9sbEVhc2luZ0xvZ2ljPzogRWFzaW5nTG9naWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2Nyb2xsRHVyYXRpb24/OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXI/OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4pOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgc2Nyb2xsVGFyZ2V0LFxuICAgICAgICBzY3JvbGxpbmdWaWV3cyxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICB2ZXJ0aWNhbFNjcm9sbGluZyxcbiAgICAgICAgcGFnZVNjcm9sbE9mZnNldCxcbiAgICAgICAgcGFnZVNjcm9sbEludGVycnVwdGlibGUsXG4gICAgICAgIHBhZ2VTY3JvbGxFYXNpbmdMb2dpYyxcbiAgICAgICAgcGFnZVNjcm9sbER1cmF0aW9uLFxuICAgICAgICBwYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXJcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcml2YXRlIGNvbnN0cnVjdG9yLCByZXF1aXJlcyB0aGUgcHJvcGVydGllcyBhc3N1bWVkIHRvIGJlIHRoZSBiYXJlIG1pbmltdW0uXG4gICAqIFVzZSB0aGUgZmFjdG9yeSBtZXRob2RzIHRvIGNyZWF0ZSBpbnN0YW5jZXM6XG4gICAqICAgICAge0BsaW5rIFBhZ2VTY3JvbGxJbnN0YW5jZSNzaW1wbGVJbnN0YW5jZX1cbiAgICogICAgICB7QGxpbmsgUGFnZVNjcm9sbEluc3RhbmNlI25ld0luc3RhbmNlfVxuICAgKiBAcGFyYW0gbmFtZXNwYWNlXG4gICAqIEBwYXJhbSBkb2N1bWVudFxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZXNwYWNlOiBzdHJpbmcsIGRvY3VtZW50OiBEb2N1bWVudCkge1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgcHVibGljIGdldFNjcm9sbFByb3BlcnR5VmFsdWUoc2Nyb2xsaW5nVmlldzogYW55KTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMudmVydGljYWxTY3JvbGxpbmcpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbGluZ1ZpZXcuc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgcmV0dXJuIHNjcm9sbGluZ1ZpZXcuc2Nyb2xsVG9wO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgdGhlIGV4YWN0IGxvY2F0aW9uIG9mIHRoZSBzY3JvbGxUYXJnZXQgZWxlbWVudC5cbiAgICpcbiAgICogRXh0cmFjdCB0aGUgc2Nyb2xsVGFyZ2V0IEhUTUxFbGVtZW50IGZyb20gdGhlIGdpdmVuIFBhZ2VTY3JvbGxUYXJnZXQgb2JqZWN0LiBUaGUgbGF0dGVyIG9uZSBtYXkgYmVcbiAgICogYSBzdHJpbmcgbGlrZSBcIiNoZWFkaW5nMlwiLCB0aGVuIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgRE9NIGVsZW1lbnQgZm9yIHRoYXQgaWQuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZXh0cmFjdFNjcm9sbFRhcmdldFBvc2l0aW9uKCk6IHt0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyfSB7XG4gICAgLy8gbGV0IHNjcm9sbFRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGxldCBzY3JvbGxUYXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IGFueTtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3Njcm9sbFRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2Nyb2xsVGFyZ2V0RWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoKDxzdHJpbmc+dGhpcy5fc2Nyb2xsVGFyZ2V0KS5zdWJzdHIoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbFRhcmdldEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5fc2Nyb2xsVGFyZ2V0O1xuICAgIH1cblxuICAgIGlmIChzY3JvbGxUYXJnZXRFbGVtZW50ID09PSBudWxsIHx8IHNjcm9sbFRhcmdldEVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBTY3JvbGwgdGFyZ2V0IG5vdCBmb3VuZFxuICAgICAgICByZXR1cm4ge3RvcDogTmFOLCBsZWZ0OiBOYU59O1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0lubGluZVNjcm9sbGluZykge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHt0b3A6IHNjcm9sbFRhcmdldEVsZW1lbnQub2Zmc2V0VG9wLCBsZWZ0OiBzY3JvbGxUYXJnZXRFbGVtZW50Lm9mZnNldExlZnR9O1xuICAgICAgICBpZiAodGhpcy5fYWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbiAmJiB0aGlzLnNjcm9sbGluZ1ZpZXdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgYWNjdW11bGF0ZWRQYXJlbnRzUG9zID0ge3RvcDogMCwgbGVmdDogMH07XG4gICAgICAgICAgICAvLyBub3QgbmFtZWQgd2luZG93IHRvIG1ha2Ugc3VyZSB3ZSdyZSBub3QgZ2V0dGluZyB0aGUgZ2xvYmFsIHdpbmRvdyB2YXJpYWJsZSBieSBhY2NpZGVudFxuICAgICAgICAgICAgY29uc3QgdGhlV2luZG93ID0gc2Nyb2xsVGFyZ2V0RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgbGV0IHBhcmVudEZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIFN0YXJ0IHBhcmVudCBpcyB0aGUgaW1tZWRpYXRlIHBhcmVudFxuICAgICAgICAgICAgLy8gbGV0IHBhcmVudCA9IHNjcm9sbFRhcmdldEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCBwYXJlbnQ6IGFueSA9IHNjcm9sbFRhcmdldEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB1cHdhcmRzIGFsbCBwYXJlbnRzXG4gICAgICAgICAgICB3aGlsZSAoIXBhcmVudEZvdW5kICYmICFVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKHBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhlV2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpID09PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY3VtdWxhdGVkUGFyZW50c1Bvcy50b3AgKz0gcGFyZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICAgICAgYWNjdW11bGF0ZWRQYXJlbnRzUG9zLmxlZnQgKz0gcGFyZW50Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcGFyZW50Rm91bmQgPSBwYXJlbnQgPT09IHRoaXMuc2Nyb2xsaW5nVmlld3NbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyZW50Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHVzZSB0aGUgcmVzdWx0cyBpZiB3ZSBmb3VuZCB0aGUgcGFyZW50LCBvdGhlcndpc2Ugd2UgYWNjdW11bGF0ZWQgdG9vIG11Y2ggYW55d2F5XG4gICAgICAgICAgICAgICAgcG9zaXRpb24udG9wICs9IGFjY3VtdWxhdGVkUGFyZW50c1Bvcy50b3A7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24ubGVmdCArPSBhY2N1bXVsYXRlZFBhcmVudHNQb3MubGVmdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKFBhZ2VTY3JvbGxDb25maWcuX2xvZ0xldmVsID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gZmluZCBuZXN0ZWQgc2Nyb2xsaW5nIHRhcmdldHMgcGFyZW50IScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWwuZXh0cmFjdEVsZW1lbnRQb3NpdGlvbih0aGlzLmRvY3VtZW50LCBzY3JvbGxUYXJnZXRFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRvcCBvZmZzZXQgb2YgdGhlIHNjcm9sbCBhbmltYXRpb24uXG4gICAqIFRoaXMgYXV0b21hdGljYWxseSB0YWtlcyB0aGUgb2Zmc2V0IGxvY2F0aW9uIG9mIHRoZSBzY3JvbGxpbmcgY29udGFpbmVyL3Njcm9sbGluZyB2aWV3XG4gICAqIGludG8gYWNjb3VudCAoZm9yIG5lc3RlZC9pbmxpbmUgc2Nyb2xsaW5nKS5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXRDdXJyZW50T2Zmc2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBcInNjcm9sbFRvcFwiIG9yIFwic2Nyb2xsTGVmdFwiIHByb3BlcnR5IGZvciBhbGwgc2Nyb2xsaW5nVmlld3MgdG8gdGhlIHByb3ZpZGVkIHZhbHVlXG4gICAqIEBwYXJhbSBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHRydWUgaWYgYXQgbGVhc3QgZm9yIG9uZSBTY3JvbGxUb3BTb3VyY2UgdGhlIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHZhbHVlIGNvdWxkIGJlIHNldCBhbmQgaXQga2VwdCB0aGUgbmV3IHZhbHVlLlxuICAgKiAgICAgICAgICBmYWxzZSBpZiBpdCBmYWlsZWQgZm9yIGFsbCBTY3JvbGxpbmdWaWV3cywgbWVhbmluZyB0aGF0IHdlIHNob3VsZCBzdG9wIHRoZSBhbmltYXRpb25cbiAgICogICAgICAgICAgKHByb2JhYmx5IGJlY2F1c2Ugd2UncmUgYXQgdGhlIGVuZCBvZiB0aGUgc2Nyb2xsaW5nIHJlZ2lvbilcbiAgICovXG4gIHB1YmxpYyBzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKFBhZ2VTY3JvbGxDb25maWcuX2xvZ0xldmVsID49IDUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTY3JvbGwgUG9zaXRpb246ICcgKyBwb3NpdGlvbik7XG4gICAgfVxuICAgIC8vIFNldCB0aGUgbmV3IHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHRvIGFsbCBzY3JvbGxpbmdWaWV3cyBlbGVtZW50c1xuICAgIHJldHVybiB0aGlzLnNjcm9sbGluZ1ZpZXdzLnJlZHVjZSgob25lQWxyZWFkeVdvcmtlZDogYW55LCBzY3JvbGxpbmdWaWV3OiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnRTY3JvbGxQcm9wZXJ0eVZhbHVlID0gdGhpcy5nZXRTY3JvbGxQcm9wZXJ0eVZhbHVlKHNjcm9sbGluZ1ZpZXcpO1xuICAgICAgICBpZiAoc2Nyb2xsaW5nVmlldyAmJiAhVXRpbC5pc1VuZGVmaW5lZE9yTnVsbChzdGFydFNjcm9sbFByb3BlcnR5VmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxEaXN0YW5jZSA9IE1hdGguYWJzKHN0YXJ0U2Nyb2xsUHJvcGVydHlWYWx1ZSAtIHBvc2l0aW9uKTtcblxuICAgICAgICAgICAgLy8gVGhlIG1vdmVtZW50IHdlIG5lZWQgdG8gcGVyZm9ybSBpcyBsZXNzIHRoYW4gMnB4XG4gICAgICAgICAgICAvLyBUaGlzIHdlIGNvbnNpZGVyIGEgc21hbGwgbW92ZW1lbnQgd2hpY2ggc29tZSBicm93c2VyIG1heSBub3QgcGVyZm9ybSB3aGVuXG4gICAgICAgICAgICAvLyBjaGFuZ2luZyB0aGUgc2Nyb2xsVG9wL3Njcm9sbExlZnQgcHJvcGVydHlcbiAgICAgICAgICAgIC8vIFRodXMgaW4gdGhpcyBjYXNlcyB3ZSBkbyBub3Qgc3RvcCB0aGUgc2Nyb2xsIGFuaW1hdGlvbiwgYWx0aG91Z2ggc2V0dGluZyB0aGVcbiAgICAgICAgICAgIC8vIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IHZhbHVlIFwiZmFpbHNcIlxuICAgICAgICAgICAgY29uc3QgaXNTbWFsbE1vdmVtZW50ID0gc2Nyb2xsRGlzdGFuY2UgPCBQYWdlU2Nyb2xsQ29uZmlnLl9taW5TY3JvbGxEaXN0YW5jZTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnZlcnRpY2FsU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nVmlldy5zY3JvbGxMZWZ0ID0gcG9zaXRpb247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjcm9sbGluZ1ZpZXcuc2Nyb2xsVG9wID0gcG9zaXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJldHVybiB0cnVlIG9mIHNldHRpbmcgdGhlIG5ldyBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB2YWx1ZSB3b3JrZWRcbiAgICAgICAgICAgIC8vIFdlIGNvbnNpZGVyIHRoYXQgaXQgd29ya2VkIGlmIHRoZSBuZXcgc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWUgaXMgY2xvc2VyIHRvIHRoZVxuICAgICAgICAgICAgLy8gZGVzaXJlZCBzY3JvbGxUb3Avc2Nyb2xsTGVmdCB0aGFuIGJlZm9yZSAoaXQgbWlnaHQgbm90IGJlIGV4YWN0bHkgdGhlIHZhbHVlIHdlXG4gICAgICAgICAgICAvLyBzZXQgZHVlIHRvIGRwaSBvciByb3VuZGluZyBpcnJlZ3VsYXJpdGllcylcbiAgICAgICAgICAgIGlmIChpc1NtYWxsTW92ZW1lbnQgfHwgc2Nyb2xsRGlzdGFuY2UgPiBNYXRoLmFicyh0aGlzLmdldFNjcm9sbFByb3BlcnR5VmFsdWUoc2Nyb2xsaW5nVmlldykgLSBwb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb25lQWxyZWFkeVdvcmtlZDtcbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBmaXJpbmcgYSBhbmltYXRpb24gZmluaXNoIGV2ZW50XG4gICAqIEBwYXJhbSB2YWx1ZSBXaGV0aGVyIHRoZSBhbmltYXRpb24gZmluaXNoZWQgYXQgdGhlIHRhcmdldCAodHJ1ZSkgb3IgZ290IGludGVycnVwdGVkIChmYWxzZSlcbiAgICovXG4gIHB1YmxpYyBmaXJlRXZlbnQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcGFnZVNjcm9sbEZpbmlzaCkge1xuICAgICAgdGhpcy5fcGFnZVNjcm9sbEZpbmlzaC5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIHRoZSBpbnRlcnJ1cHQgbGlzdGVuZXJzIHRvIHRoZSBQYWdlU2Nyb2xsSW5zdGFuY2UgYm9keS4gVGhlIGdpdmVuIGludGVycnVwdFJlcG9ydGVyXG4gICAqIHdpbGwgYmUgY2FsbGVkIGlmIGFueSBvZiB0aGUgYXR0YWNoZWQgZXZlbnRzIGlzIGZpcmVkLlxuICAgKlxuICAgKiBQb3NzaWJseSBhdHRhY2hlZCBpbnRlcnJ1cHRMaXN0ZW5lcnMgYXJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIHRoZSBib2R5IGJlZm9yZSB0aGUgbmV3IG9uZSB3aWxsIGJlIGF0dGFjaGVkLlxuICAgKlxuICAgKiBAcGFyYW0gaW50ZXJydXB0UmVwb3J0ZXJcbiAgICovXG4gIHB1YmxpYyBhdHRhY2hJbnRlcnJ1cHRMaXN0ZW5lcnMoaW50ZXJydXB0UmVwb3J0ZXI6IEludGVycnVwdFJlcG9ydGVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2ludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkKSB7XG4gICAgICAgIC8vIERldGFjaCBwb3NzaWJseSBleGlzdGluZyBsaXN0ZW5lcnMgZmlyc3RcbiAgICAgICAgdGhpcy5kZXRhY2hJbnRlcnJ1cHRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgdGhpcy5faW50ZXJydXB0TGlzdGVuZXIgPSAoZXZlbnQ6IEV2ZW50KTogYW55ID0+IHtcbiAgICAgICAgaW50ZXJydXB0UmVwb3J0ZXIucmVwb3J0KGV2ZW50LCB0aGlzKTtcbiAgICB9O1xuICAgIFBhZ2VTY3JvbGxDb25maWcuX2ludGVycnVwdEV2ZW50cy5mb3JFYWNoKFxuICAgICAgICAoZXZlbnQ6IHN0cmluZykgPT4gdGhpcy5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMuX2ludGVycnVwdExpc3RlbmVyKVxuICAgICk7XG4gICAgdGhpcy5faW50ZXJydXB0TGlzdGVuZXJzQXR0YWNoZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgYm9keSBhbmQgc3RvcCBsaXN0ZW5pbmcgZm9yIGV2ZW50cyB0aGF0IG1pZ2h0IGJlIHRyZWF0ZWQgYXMgXCJhbmltYXRpb25cbiAgICogaW50ZXJydXB0XCIgZXZlbnRzLlxuICAgKi9cbiAgcHVibGljIGRldGFjaEludGVycnVwdExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBQYWdlU2Nyb2xsQ29uZmlnLl9pbnRlcnJ1cHRFdmVudHMuZm9yRWFjaChcbiAgICAgICAgKGV2ZW50OiBzdHJpbmcpID0+IHRoaXMuZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLl9pbnRlcnJ1cHRMaXN0ZW5lcilcbiAgICApO1xuICAgIHRoaXMuX2ludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX25hbWVzcGFjZTtcbiAgfVxuXG4gIGdldCBzY3JvbGxUYXJnZXQoKTogUGFnZVNjcm9sbFRhcmdldCB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsVGFyZ2V0O1xuICB9XG5cbiAgZ2V0IHZlcnRpY2FsU2Nyb2xsaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsU2Nyb2xsaW5nO1xuICB9XG5cbiAgcHVibGljIGdldCBzY3JvbGxpbmdWaWV3cygpOiBhbnlbXSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsaW5nVmlld3M7XG4gIH1cblxuICBwdWJsaWMgc2V0IHN0YXJ0U2Nyb2xsUG9zaXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgdGhpcy5fc3RhcnRTY3JvbGxQb3NpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGFydFNjcm9sbFBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhcnRTY3JvbGxQb3NpdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdGFyZ2V0U2Nyb2xsUG9zaXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgdGhpcy5fdGFyZ2V0U2Nyb2xsUG9zaXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGFyZ2V0U2Nyb2xsUG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLl90YXJnZXRTY3JvbGxQb3NpdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgZGlzdGFuY2VUb1Njcm9sbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICB0aGlzLl9kaXN0YW5jZVRvU2Nyb2xsID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRpc3RhbmNlVG9TY3JvbGwoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXN0YW5jZVRvU2Nyb2xsO1xuICB9XG5cbiAgZ2V0IGV4ZWN1dGlvbkR1cmF0aW9uKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5fZXhlY3V0aW9uRHVyYXRpb247XG4gIH1cblxuICBzZXQgZXhlY3V0aW9uRHVyYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgdGhpcy5fZXhlY3V0aW9uRHVyYXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLl9kdXJhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3BlZWQoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZWFzaW5nTG9naWMoKTogRWFzaW5nTG9naWMge1xuICAgICAgcmV0dXJuIHRoaXMuX2Vhc2luZ0xvZ2ljO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcnJ1cHRpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludGVycnVwdGlibGU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHN0YXJ0VGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICB0aGlzLl9zdGFydFRpbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RhcnRUaW1lKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lO1xuICB9XG5cbiAgcHVibGljIHNldCBlbmRUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuX2VuZFRpbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW5kVGltZSgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuX2VuZFRpbWU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHRpbWVyKHZhbHVlOiBhbnkpIHtcbiAgICAgIHRoaXMuX3RpbWVyID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRpbWVyKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGltZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludGVycnVwdExpc3RlbmVyc0F0dGFjaGVkO1xuICB9XG59XG5cbi8qKlxuKiBBbiBJbnRlcmZhY2UgYSBsaXN0ZW5lciBzaG91bGQgaW1wbGVtZW50IHRvIGJlIG5vdGlmaWVkIGFib3V0IHBvc3NpYmxlIGludGVycnVwdCBldmVudHNcbiogdGhhdCBoYXBwZW5lZCBkdWUgdG8gdXNlciBpbnRlcmFjdGlvbiB3aGlsZSBhIHNjcm9sbCBhbmltYXRpb24gdGFrZXMgcGxhY2UuXG4qXG4qIFRoZSBQYWdlU2Nyb2xsU2VydmljZSBwcm92aWRlcyBhbiBpbXBsZW1lbnRhdGlvbiB0byBhIFBhZ2VTY3JvbGxJbnN0YW5jZSB0byBiZSBub3RpZmllZFxuKiBhYm91dCBzY3JvbGwgYW5pbWF0aW9uIGludGVycnVwdHMgYW5kIHN0b3AgcmVsYXRlZCBhbmltYXRpb25zLlxuKi9cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcnJ1cHRSZXBvcnRlciB7XG4gIHJlcG9ydDogKGV2ZW50OiBFdmVudCwgcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UpID0+IGFueTtcbn1cbiJdfQ==