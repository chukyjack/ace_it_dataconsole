/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, ElementRef, HostListener, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OptionList } from './option-list';
var SelectDropdownComponent = /** @class */ (function () {
    function SelectDropdownComponent(_elementRef, _renderer, cdRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.cdRef = cdRef;
        this.customClass = '';
        this.visibleOptions = 4;
        this.selectAllLabel = 'Select all';
        this.outline = false;
        this.close = new EventEmitter();
        this.optionClicked = new EventEmitter();
        this.singleFilterClick = new EventEmitter();
        this.singleFilterInput = new EventEmitter();
        this.singleFilterKeydown = new EventEmitter();
        this.animationDone = new EventEmitter();
        this.animationStart = new EventEmitter();
        this.selectAll = new EventEmitter();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
        // Used in sliding-down animation
        this.state = 'invisible';
        this.startHeight = 0;
        this.endHeight = 45;
        this.hasOptionsItems = true;
        this.selectAllSelected = false;
        this.searchIndex = 0;
        this.previousKey = '';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onWindowKeyUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var searchKey = event.key.toString().replace('"', '');
        /** @type {?} */
        var items = Array.from(this.optionList['_options'])
            .filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return !elem.group; }))
            .filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return !elem.disabled; }))
            .map((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.wrappedOption.label || el.wrappedOption.value; }));
        this.navigateThroughArray(searchKey, items);
        this.previousKey = searchKey;
    };
    /**
     * @param {?} key
     * @param {?} itemSource
     * @return {?}
     */
    SelectDropdownComponent.prototype.navigateThroughArray = /**
     * @param {?} key
     * @param {?} itemSource
     * @return {?}
     */
    function (key, itemSource) {
        var _this = this;
        /** @type {?} */
        var items = itemSource.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.toString().toLowerCase().charAt(0).includes(key.toString().toLowerCase()); }));
        if (this.searchIndex > items.length - 1 || key !== this.previousKey) {
            this.searchIndex = 0;
        }
        this.highlightedItem = this.optionList.filtered.find((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.wrappedOption.label === items[_this.searchIndex]; }));
        this.searchIndex++;
        if (this.highlightedItem) {
            this.optionList.highlightOption(this.highlightedItem);
        }
        this.moveHighlightedIntoView();
    };
    /** Event handlers. **/
    // Angular life cycle hooks.
    /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    SelectDropdownComponent.prototype.onkeyup = /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    function () {
        this.hasOptionsItems = this.optionList.filtered.length > 0;
        this.updateSelectAllState();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onkeydown = /**
     * @return {?}
     */
    function () {
        this.setOptionHeight();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateSelectAllState();
        this.optionsReset();
        this.setDropdownHeight();
        this.setVisibleOptionsNumber();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setDropdownHeight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.optionList.options.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return (/**
         * @return {?}
         */
        function () {
            if (el.icon) {
                _this._renderer.setStyle(_this.optionsList.nativeElement, 'height', (_this.dropdownHeight + 8) + 'px');
            }
            else {
                _this._renderer.setStyle(_this.optionsList.nativeElement, 'height', _this.dropdownHeight + 'px');
            }
        }); }));
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setVisibleOptionsNumber = /**
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this.optionsList.nativeElement, 'max-height', this.dropdownMaxHeight + 'px');
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setOptionHeight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var optionsItems = Array.from(this.optionsList.nativeElement.firstElementChild.children);
        optionsItems.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            /** @type {?} */
            var isCustomElement = el.classList.contains('custom-select-content');
            if (el.firstElementChild) {
                if (_this.optionHeight && el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    _this._renderer.setStyle(el.firstElementChild, 'height', _this.optionHeight + "px");
                }
                if (el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    _this._renderer.setStyle(el.firstElementChild, 'line-height', _this.optionHeight + "px");
                }
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
        if (changes.hasOwnProperty('dropdownHeight')) {
            this.setDropdownHeight();
        }
        /** @type {?} */
        var container = this._elementRef.nativeElement.classList;
        setTimeout((/**
         * @return {?}
         */
        function () {
            container.add('fadeInSelect');
        }), 200);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Sliding-down animation
        this.endHeight = this.dropdownContent.nativeElement.clientHeight;
        this.state = (this.state === 'invisible' ? 'visible' : 'invisible');
        this.cdRef.detectChanges();
        if (this.multiple) {
            /** @type {?} */
            var disabledElements = this._elementRef.nativeElement.querySelectorAll('.disabled.optgroup');
            for (var i = 0; i < disabledElements.length; i++) {
                this._renderer.setStyle(disabledElements[i].firstElementChild.lastElementChild, 'display', 'none');
            }
        }
        this.setOptionHeight();
        this.moveHighlightedIntoView();
        if (this.filterEnabled) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.filterInput.nativeElement.focus();
            }), 0);
        }
    };
    // Filter input (single select).
    // Filter input (single select).
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterClick = 
    // Filter input (single select).
    /**
     * @return {?}
     */
    function () {
        this.singleFilterClick.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterKeydown.emit(event);
    };
    // Options list.
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsWheel = 
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleOptionsWheel(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked.emit(option);
        this.updateSelectAllState();
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    SelectDropdownComponent.prototype.optionsReset = /**
     * Initialization. *
     * @private
     * @return {?}
     */
    function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    /** View. **/
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.getOptionStyle = /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.highlighted || option.hovered) {
            /** @type {?} */
            var optionStyle = {};
            optionStyle['height.px'] = this.optionHeight;
            if (typeof this.highlightColor !== 'undefined') {
                optionStyle['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                optionStyle['color'] = this.highlightTextColor;
            }
            return optionStyle;
        }
        else {
            return {};
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSelectAllClick = /**
     * @return {?}
     */
    function () {
        this.selectAllSelected = !this.selectAllSelected;
        this.selectAll.emit(this.selectAllSelected);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.updateSelectAllState = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var areAllSelected = this.optionList.filtered
            .filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return !option.disabled; }))
            .every((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.selected ? true : false;
        }));
        areAllSelected ? this.selectAllSelected = true : this.selectAllSelected = false;
        this.cdRef.detectChanges();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.clearFilterInput = /**
     * @return {?}
     */
    function () {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onAnimationDone = /**
     * @return {?}
     */
    function () {
        this.animationDone.emit();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onAnimationStart = /**
     * @return {?}
     */
    function () {
        this.animationStart.emit();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.moveHighlightedIntoView = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var listHeight;
        /** @type {?} */
        var list = this.optionsList.nativeElement;
        listHeight = this.multiple && this.enableSelectAll ? list.offsetHeight - this.optionHeight : list.offsetHeight;
        /** @type {?} */
        var itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            var item = list.children[0].children[itemIndex];
            /** @type {?} */
            var itemHeight = item.offsetHeight;
            /** @type {?} */
            var itemTop = itemIndex * itemHeight;
            /** @type {?} */
            var itemBottom = itemTop + itemHeight;
            /** @type {?} */
            var viewTop = list.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    SelectDropdownComponent.prototype.handleOptionsWheel = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var div = this.optionsList.nativeElement;
        /** @type {?} */
        var atTop = div.scrollTop === 0;
        /** @type {?} */
        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
    SelectDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-select-dropdown',
                    template: "<div (click)=\"$event.stopPropagation()\" class=\"dropdown-content\" #dropdownContent [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\"\n[@dropdownAnimation]=\"{value: state, params: {startHeight: startHeight, endHeight: endHeight}}\" (@dropdownAnimation.done)=\"onAnimationDone()\" (@dropdownAnimation.start)=\"onAnimationStart()\">\n  <div class=\"filter md-form px-2\" *ngIf=\"filterEnabled\" [ngClass]=\"{'md-outline': outline}\">\n    <input\n    type=\"text\"\n    class=\"search form-control w-100 d-block\"\n    #filterInput\n    [attr.autocomplete]=\"filterAutocomplete ? 'on' : 'off'\"\n    [placeholder]=\"placeholder\"\n    (input)=\"onSingleFilterInput($event)\"\n    (keydown)=\"onSingleFilterKeydown($event)\">\n  </div>\n\n  <div class=\"options\" #optionsList>\n    <ul class=\"select-dropdown\" [ngClass]=\"{'multiple-select-dropdown': multiple}\"\n    (wheel)=\"onOptionsWheel($event)\">\n      <li [ngStyle]=\"{ 'height.px': optionHeight }\" *ngIf=\"multiple && enableSelectAll && this.hasOptionsItems\" (click)=\"onSelectAllClick()\">\n        <span class=\"filtrable\" *ngIf=\"multiple\">\n          <input type=\"checkbox\" [checked]=\"selectAllSelected\" class=\"form-check-input {{customClass}}\">\n          <label></label>\n          {{selectAllLabel}}\n        </span>\n      </li>\n      <li *ngFor=\"let option of optionList.filtered\"\n        [ngClass]=\"{'active': option.highlighted, 'selected': option.selected, 'disabled': option.disabled, 'optgroup': option.group, 'd-flex justify-content-between flex-row-reverse align-items-center': option.icon}\"\n        [ngStyle]=\"{'height.px': optionHeight, 'line-height.px': optionHeight, 'background-color': getOptionStyle(option)['background-color'], 'color': getOptionStyle(option)['color']}\"\n        (click)=\"onOptionClick(option)\"\n        (mouseover)=\"option.hovered = true\"\n        (mouseleave)=\"option.hovered = false\">\n        <img class=\"rounded-circle\" [src]=\"option.icon\" *ngIf=\"option.icon !== ''\">\n        <span class=\"deselect-option\" *ngIf=\"!multiple\">{{option.label}}</span>\n        <span class=\"deselect-option\" *ngIf=\"multiple\">\n          <input type=\"checkbox\" [checked]=\"option.selected\" class=\"form-check-input {{customClass}}\" [disabled]=\"option.disabled\">\n          <label></label>\n          {{option.label}}\n        </span>\n      </li>\n      <li *ngIf=\"!this.hasOptionsItems\" class=\"message disabled\" [ngStyle]=\"{'height.px': optionHeight}\">\n        <span>{{notFoundMsg}}</span>\n      </li>\n      <li #customContent class=\"custom-select-content\">\n        <ng-content></ng-content>\n      </li>\n    </ul>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [trigger('dropdownAnimation', [
                            state('invisible', style({ opacity: 0, height: '0px' })),
                            state('visible', style({ opacity: 1, height: '*' })),
                            transition('invisible => visible', animate('300ms ease')),
                            transition('visible => invisible', animate('300ms ease'))
                        ])]
                }] }
    ];
    /** @nocollapse */
    SelectDropdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    SelectDropdownComponent.propDecorators = {
        filterEnabled: [{ type: Input }],
        filterAutocomplete: [{ type: Input }],
        highlightColor: [{ type: Input }],
        highlightTextColor: [{ type: Input }],
        left: [{ type: Input }],
        multiple: [{ type: Input }],
        notFoundMsg: [{ type: Input }],
        optionList: [{ type: Input }],
        top: [{ type: Input }],
        width: [{ type: Input }],
        placeholder: [{ type: Input }],
        customClass: [{ type: Input }],
        visibleOptions: [{ type: Input }],
        dropdownHeight: [{ type: Input }],
        dropdownMaxHeight: [{ type: Input }],
        optionHeight: [{ type: Input }],
        enableSelectAll: [{ type: Input }],
        selectAllLabel: [{ type: Input }],
        outline: [{ type: Input }],
        close: [{ type: Output }],
        optionClicked: [{ type: Output }],
        singleFilterClick: [{ type: Output }],
        singleFilterInput: [{ type: Output }],
        singleFilterKeydown: [{ type: Output }],
        animationDone: [{ type: Output }],
        animationStart: [{ type: Output }],
        selectAll: [{ type: Output }],
        filterInput: [{ type: ViewChild, args: ['filterInput',] }],
        optionsList: [{ type: ViewChild, args: ['optionsList',] }],
        dropdownContent: [{ type: ViewChild, args: ['dropdownContent',] }],
        customContent: [{ type: ViewChild, args: ['customContent',] }],
        onWindowKeyUp: [{ type: HostListener, args: ['window:keyup', ['$event'],] }],
        onkeyup: [{ type: HostListener, args: ['keyup',] }],
        onkeydown: [{ type: HostListener, args: ['input',] }]
    };
    return SelectDropdownComponent;
}());
export { SelectDropdownComponent };
if (false) {
    /** @type {?} */
    SelectDropdownComponent.prototype.filterEnabled;
    /** @type {?} */
    SelectDropdownComponent.prototype.filterAutocomplete;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightTextColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.left;
    /** @type {?} */
    SelectDropdownComponent.prototype.multiple;
    /** @type {?} */
    SelectDropdownComponent.prototype.notFoundMsg;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionList;
    /** @type {?} */
    SelectDropdownComponent.prototype.top;
    /** @type {?} */
    SelectDropdownComponent.prototype.width;
    /** @type {?} */
    SelectDropdownComponent.prototype.placeholder;
    /** @type {?} */
    SelectDropdownComponent.prototype.customClass;
    /** @type {?} */
    SelectDropdownComponent.prototype.visibleOptions;
    /** @type {?} */
    SelectDropdownComponent.prototype.dropdownHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.dropdownMaxHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.enableSelectAll;
    /** @type {?} */
    SelectDropdownComponent.prototype.selectAllLabel;
    /** @type {?} */
    SelectDropdownComponent.prototype.outline;
    /** @type {?} */
    SelectDropdownComponent.prototype.close;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionClicked;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterClick;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterInput;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterKeydown;
    /** @type {?} */
    SelectDropdownComponent.prototype.animationDone;
    /** @type {?} */
    SelectDropdownComponent.prototype.animationStart;
    /** @type {?} */
    SelectDropdownComponent.prototype.selectAll;
    /** @type {?} */
    SelectDropdownComponent.prototype.filterInput;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionsList;
    /** @type {?} */
    SelectDropdownComponent.prototype.dropdownContent;
    /** @type {?} */
    SelectDropdownComponent.prototype.customContent;
    /** @type {?} */
    SelectDropdownComponent.prototype.disabledColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.disabledTextColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.state;
    /** @type {?} */
    SelectDropdownComponent.prototype.startHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.endHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.hasOptionsItems;
    /** @type {?} */
    SelectDropdownComponent.prototype.selectAllSelected;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightedItem;
    /** @type {?} */
    SelectDropdownComponent.prototype.searchIndex;
    /** @type {?} */
    SelectDropdownComponent.prototype.previousKey;
    /** @type {?} */
    SelectDropdownComponent.prototype._elementRef;
    /** @type {?} */
    SelectDropdownComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    SelectDropdownComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFL0UsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QztJQTRERSxpQ0FDUyxXQUF1QixFQUN2QixTQUFvQixFQUNuQixLQUF3QjtRQUZ6QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBdEN6QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUtuQixtQkFBYyxHQUFHLFlBQVksQ0FBQztRQUM5QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWYsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDN0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMvQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzlDLGtCQUFhLEdBQUcs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RTlCLG9EQUEwQjs7SUFRMUIsa0RBQXFCOztJQUNyQiw4Q0FBZ0I7O0lBQ2hCLDhDQUFpQjs7SUFQZiw4Q0FBOEI7O0lBQzlCLDRDQUEyQjs7Ozs7SUFDM0Isd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGV9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtPcHRpb259IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7T3B0aW9uTGlzdH0gZnJvbSAnLi9vcHRpb24tbGlzdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zZWxlY3QtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZHJvcGRvd25BbmltYXRpb24nLCBbXG4gICAgc3RhdGUoJ2ludmlzaWJsZScsIHN0eWxlKHtvcGFjaXR5OiAwLCBoZWlnaHQ6ICcwcHgnfSkpLFxuICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoe29wYWNpdHk6IDEsIGhlaWdodDogJyonfSkpLFxuICAgIHRyYW5zaXRpb24oJ2ludmlzaWJsZSA9PiB2aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKSxcbiAgICB0cmFuc2l0aW9uKCd2aXNpYmxlID0+IGludmlzaWJsZScsIGFuaW1hdGUoJzMwMG1zIGVhc2UnKSlcbiAgXSldXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGZpbHRlckVuYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZpbHRlckF1dG9jb21wbGV0ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaGlnaGxpZ2h0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxlZnQ6IG51bWJlcjtcbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5vdEZvdW5kTXNnOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wdGlvbkxpc3Q6IE9wdGlvbkxpc3Q7XG4gIEBJbnB1dCgpIHRvcDogbnVtYmVyO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoKSB2aXNpYmxlT3B0aW9ucyA9IDQ7XG4gIEBJbnB1dCgpIGRyb3Bkb3duSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRyb3Bkb3duTWF4SGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG9wdGlvbkhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBlbmFibGVTZWxlY3RBbGw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBhbGwnO1xuICBASW5wdXQoKSBvdXRsaW5lID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgb3B0aW9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8T3B0aW9uPigpO1xuICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVyS2V5ZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uRG9uZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdEFsbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcpIGZpbHRlcklucHV0OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ29wdGlvbnNMaXN0Jykgb3B0aW9uc0xpc3Q6IGFueTtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25Db250ZW50JykgZHJvcGRvd25Db250ZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjdXN0b21Db250ZW50JykgY3VzdG9tQ29udGVudDogRWxlbWVudFJlZjtcblxuICBkaXNhYmxlZENvbG9yID0gJyNmZmYnO1xuICBkaXNhYmxlZFRleHRDb2xvciA9ICc5ZTllOWUnO1xuXG4gIC8vIFVzZWQgaW4gc2xpZGluZy1kb3duIGFuaW1hdGlvblxuICBzdGF0ZSA9ICdpbnZpc2libGUnO1xuICBzdGFydEhlaWdodDogYW55ID0gMDtcbiAgZW5kSGVpZ2h0OiBhbnkgPSA0NTtcblxuICBwdWJsaWMgaGFzT3B0aW9uc0l0ZW1zID0gdHJ1ZTtcblxuICBzZWxlY3RBbGxTZWxlY3RlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIGhpZ2hsaWdodGVkSXRlbTogYW55O1xuICBzZWFyY2hJbmRleCA9IDA7XG4gIHByZXZpb3VzS2V5ID0gJyc7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleXVwJywgWyckZXZlbnQnXSkgb25XaW5kb3dLZXlVcChldmVudDogYW55KSB7XG4gICAgY29uc3Qgc2VhcmNoS2V5ID0gZXZlbnQua2V5LnRvU3RyaW5nKCkucmVwbGFjZSgnXCInLCAnJyk7XG5cbiAgICBjb25zdCBpdGVtcyA9XG4gICAgICBBcnJheS5mcm9tKHRoaXMub3B0aW9uTGlzdFsnX29wdGlvbnMnXSlcbiAgICAgICAgLmZpbHRlcigoZWxlbTogYW55KSA9PiAhZWxlbS5ncm91cClcbiAgICAgICAgLmZpbHRlcigoZWxlbTogYW55KSA9PiAhZWxlbS5kaXNhYmxlZClcbiAgICAgICAgLm1hcCgoZWw6IGFueSkgPT4gZWwud3JhcHBlZE9wdGlvbi5sYWJlbCB8fCBlbC53cmFwcGVkT3B0aW9uLnZhbHVlKTtcblxuICAgIHRoaXMubmF2aWdhdGVUaHJvdWdoQXJyYXkoc2VhcmNoS2V5LCBpdGVtcyk7XG4gICAgdGhpcy5wcmV2aW91c0tleSA9IHNlYXJjaEtleTtcbiAgfVxuXG4gIG5hdmlnYXRlVGhyb3VnaEFycmF5KGtleTogc3RyaW5nLCBpdGVtU291cmNlOiBhbnkpIHtcbiAgICBjb25zdCBpdGVtcyA9IGl0ZW1Tb3VyY2UuZmlsdGVyKChlbDogYW55KSA9PiBlbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuY2hhckF0KDApLmluY2x1ZGVzKGtleS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpKTtcbiAgICBpZiAodGhpcy5zZWFyY2hJbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwga2V5ICE9PSB0aGlzLnByZXZpb3VzS2V5KSB7XG4gICAgICB0aGlzLnNlYXJjaEluZGV4ID0gMDtcbiAgICB9XG4gICAgdGhpcy5oaWdobGlnaHRlZEl0ZW0gPSB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyZWQuZmluZCgoZWw6IGFueSkgPT4gZWwud3JhcHBlZE9wdGlvbi5sYWJlbCA9PT0gaXRlbXNbdGhpcy5zZWFyY2hJbmRleF0pO1xuXG4gICAgdGhpcy5zZWFyY2hJbmRleCsrO1xuXG4gICAgaWYgKHRoaXMuaGlnaGxpZ2h0ZWRJdGVtKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0T3B0aW9uKHRoaXMuaGlnaGxpZ2h0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gIH1cblxuICAvKiogRXZlbnQgaGFuZGxlcnMuICoqL1xuXG4gIC8vIEFuZ3VsYXIgbGlmZSBjeWNsZSBob29rcy5cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcpIG9ua2V5dXAoKSB7XG4gICAgdGhpcy5oYXNPcHRpb25zSXRlbXMgPSB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyZWQubGVuZ3RoID4gMDtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIG9ua2V5ZG93bigpIHtcbiAgICB0aGlzLnNldE9wdGlvbkhlaWdodCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RBbGxTdGF0ZSgpO1xuICAgIHRoaXMub3B0aW9uc1Jlc2V0KCk7XG4gICAgdGhpcy5zZXREcm9wZG93bkhlaWdodCgpO1xuICAgIHRoaXMuc2V0VmlzaWJsZU9wdGlvbnNOdW1iZXIoKTtcbiAgfVxuXG4gIHNldERyb3Bkb3duSGVpZ2h0KCkge1xuICAgIHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmZpbHRlcihlbCA9PiAoKSA9PiB7XG4gICAgICBpZiAoZWwuaWNvbikge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAodGhpcy5kcm9wZG93bkhlaWdodCArIDgpICsgJ3B4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmRyb3Bkb3duSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRWaXNpYmxlT3B0aW9uc051bWJlcigpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQsICdtYXgtaGVpZ2h0JywgdGhpcy5kcm9wZG93bk1heEhlaWdodCArICdweCcpO1xuICB9XG5cbiAgc2V0T3B0aW9uSGVpZ2h0KCkge1xuICAgIGNvbnN0IG9wdGlvbnNJdGVtcyA9IEFycmF5LmZyb20odGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuKTtcbiAgICBvcHRpb25zSXRlbXMuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaXNDdXN0b21FbGVtZW50ID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXN0b20tc2VsZWN0LWNvbnRlbnQnKTtcbiAgICAgIGlmIChlbC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25IZWlnaHQgJiYgZWwuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0lNRycgJiYgIWlzQ3VzdG9tRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLmZpcnN0RWxlbWVudENoaWxkLCAnaGVpZ2h0JywgYCR7dGhpcy5vcHRpb25IZWlnaHR9cHhgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0lNRycgJiYgIWlzQ3VzdG9tRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLmZpcnN0RWxlbWVudENoaWxkLCAnbGluZS1oZWlnaHQnLCBgJHt0aGlzLm9wdGlvbkhlaWdodH1weGApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ29wdGlvbkxpc3QnKSkge1xuICAgICAgdGhpcy5vcHRpb25zUmVzZXQoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZHJvcGRvd25IZWlnaHQnKSkge1xuICAgICAgdGhpcy5zZXREcm9wZG93bkhlaWdodCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250YWluZXIuYWRkKCdmYWRlSW5TZWxlY3QnKTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIFNsaWRpbmctZG93biBhbmltYXRpb25cbiAgICB0aGlzLmVuZEhlaWdodCA9IHRoaXMuZHJvcGRvd25Db250ZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMuc3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ2ludmlzaWJsZScgPyAndmlzaWJsZScgOiAnaW52aXNpYmxlJyk7XG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgY29uc3QgZGlzYWJsZWRFbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlzYWJsZWQub3B0Z3JvdXAnKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNhYmxlZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRpc2FibGVkRWxlbWVudHNbaV0uZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0T3B0aW9uSGVpZ2h0KCk7XG5cbiAgICB0aGlzLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsdGVyIGlucHV0IChzaW5nbGUgc2VsZWN0KS5cblxuICBvblNpbmdsZUZpbHRlckNsaWNrKCkge1xuICAgIHRoaXMuc2luZ2xlRmlsdGVyQ2xpY2suZW1pdChudWxsKTtcbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVySW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuc2luZ2xlRmlsdGVySW5wdXQuZW1pdChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgb25TaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlcktleWRvd24uZW1pdChldmVudCk7XG4gIH1cblxuICAvLyBPcHRpb25zIGxpc3QuXG5cbiAgb25PcHRpb25zV2hlZWwoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaGFuZGxlT3B0aW9uc1doZWVsKGV2ZW50KTtcbiAgfVxuXG4gIG9uT3B0aW9uQ2xpY2sob3B0aW9uOiBPcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbkNsaWNrZWQuZW1pdChvcHRpb24pO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgfVxuXG4gIC8qKiBJbml0aWFsaXphdGlvbi4gKiovXG5cbiAgcHJpdmF0ZSBvcHRpb25zUmVzZXQoKSB7XG4gICAgdGhpcy5vcHRpb25MaXN0LmZpbHRlcignJyk7XG4gICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodCgpO1xuICB9XG5cbiAgLyoqIFZpZXcuICoqL1xuXG4gIGdldE9wdGlvblN0eWxlKG9wdGlvbjogT3B0aW9uKTogYW55IHtcbiAgICBpZiAob3B0aW9uLmhpZ2hsaWdodGVkIHx8IG9wdGlvbi5ob3ZlcmVkKSB7XG4gICAgICBjb25zdCBvcHRpb25TdHlsZTogYW55ID0ge307XG4gICAgICBvcHRpb25TdHlsZVsnaGVpZ2h0LnB4J10gPSB0aGlzLm9wdGlvbkhlaWdodDtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5oaWdobGlnaHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uU3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSA9IHRoaXMuaGlnaGxpZ2h0Q29sb3I7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0VGV4dENvbG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25TdHlsZVsnY29sb3InXSA9IHRoaXMuaGlnaGxpZ2h0VGV4dENvbG9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvblN0eWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RBbGxDbGljaygpIHtcbiAgICB0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gIXRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQ7XG4gICAgdGhpcy5zZWxlY3RBbGwuZW1pdCh0aGlzLnNlbGVjdEFsbFNlbGVjdGVkKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdEFsbFN0YXRlKCkge1xuICAgIGNvbnN0IGFyZUFsbFNlbGVjdGVkID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkXG4gICAgICAuZmlsdGVyKChvcHRpb246IE9wdGlvbikgPT4gIW9wdGlvbi5kaXNhYmxlZClcbiAgICAgIC5ldmVyeSgob3B0aW9uOiBPcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5zZWxlY3RlZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgYXJlQWxsU2VsZWN0ZWQgPyB0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gdHJ1ZSA6IHRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNsZWFyRmlsdGVySW5wdXQoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgb25BbmltYXRpb25Eb25lKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uRG9uZS5lbWl0KCk7XG4gIH1cblxuICBvbkFuaW1hdGlvblN0YXJ0KCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhcnQuZW1pdCgpO1xuICB9XG5cbiAgbW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoKSB7XG4gICAgbGV0IGxpc3RIZWlnaHQ6IG51bWJlcjtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50O1xuICAgIGxpc3RIZWlnaHQgPSB0aGlzLm11bHRpcGxlICYmIHRoaXMuZW5hYmxlU2VsZWN0QWxsID8gbGlzdC5vZmZzZXRIZWlnaHQgLSB0aGlzLm9wdGlvbkhlaWdodCA6IGxpc3Qub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5vcHRpb25MaXN0LmdldEhpZ2hsaWdodGVkSW5kZXgoKTtcblxuICAgIGlmIChpdGVtSW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgaXRlbSA9IGxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5baXRlbUluZGV4XTtcbiAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBpdGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgY29uc3QgaXRlbVRvcCA9IGl0ZW1JbmRleCAqIGl0ZW1IZWlnaHQ7XG4gICAgICBjb25zdCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW1IZWlnaHQ7XG5cbiAgICAgIGNvbnN0IHZpZXdUb3AgPSBsaXN0LnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IHZpZXdCb3R0b20gPSB2aWV3VG9wICsgbGlzdEhlaWdodDtcblxuICAgICAgaWYgKGl0ZW1Cb3R0b20gPiB2aWV3Qm90dG9tKSB7XG4gICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbUJvdHRvbSAtIGxpc3RIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW1Ub3AgPCB2aWV3VG9wKSB7XG4gICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbVRvcDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlT3B0aW9uc1doZWVsKGU6IGFueSkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBhdFRvcCA9IGRpdi5zY3JvbGxUb3AgPT09IDA7XG4gICAgY29uc3QgYXRCb3R0b20gPSBkaXYub2Zmc2V0SGVpZ2h0ICsgZGl2LnNjcm9sbFRvcCA9PT0gZGl2LnNjcm9sbEhlaWdodDtcblxuICAgIGlmIChhdFRvcCAmJiBlLmRlbHRhWSA8IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKGF0Qm90dG9tICYmIGUuZGVsdGFZID4gMCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==