/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function MatchPart() { }
if (false) {
    /** @type {?} */
    MatchPart.prototype.isMatch;
    /** @type {?} */
    MatchPart.prototype.text;
}
var CompleterListItemComponent = /** @class */ (function () {
    function CompleterListItemComponent() {
        this.parts = [];
    }
    /**
     * @return {?}
     */
    CompleterListItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        /** @type {?} */
        var matchStr = this.text.toLowerCase();
        /** @type {?} */
        var matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        /** @type {?} */
        var startIndex = 0;
        while (matchPos >= 0) {
            /** @type {?} */
            var matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                /** @type {?} */
                var matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    };
    CompleterListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-completer-list-item',
                    template: "<span class=\"completer-list-item-holder\" [ngClass]=\"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" >\n  <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]=\"part.isMatch ? matchClass : null\">{{part.text}}</span>\n</span>\n"
                }] }
    ];
    CompleterListItemComponent.propDecorators = {
        text: [{ type: Input }],
        searchStr: [{ type: Input }],
        matchClass: [{ type: Input }],
        type: [{ type: Input }]
    };
    return CompleterListItemComponent;
}());
export { CompleterListItemComponent };
if (false) {
    /** @type {?} */
    CompleterListItemComponent.prototype.text;
    /** @type {?} */
    CompleterListItemComponent.prototype.searchStr;
    /** @type {?} */
    CompleterListItemComponent.prototype.matchClass;
    /** @type {?} */
    CompleterListItemComponent.prototype.type;
    /** @type {?} */
    CompleterListItemComponent.prototype.parts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG9jb21wbGV0ZS9jb21wb25lbnRzL2NvbXBsZXRlci1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV2RCwrQkFHQzs7O0lBRkMsNEJBQWlCOztJQUNqQix5QkFBYTs7QUFHZjtJQUFBO1FBVVMsVUFBSyxHQUFnQixFQUFFLENBQUM7SUEwQmpDLENBQUM7Ozs7SUF6QlEsNkNBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNyRCxPQUFPO1NBQ1I7O1lBQ0ssUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFOztZQUNwQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDOztZQUN6RCxVQUFVLEdBQUcsQ0FBQztRQUNsQixPQUFPLFFBQVEsSUFBSSxDQUFDLEVBQUU7O2dCQUNkLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQzdFLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7YUFDckM7aUJBQU0sSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFOztvQkFDakIsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUN4RDtZQUNELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzRjtJQUNILENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsZ1RBQWlEO2lCQUNsRDs7O3VCQUVFLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7O0lBNEJSLGlDQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FoQ1ksMEJBQTBCOzs7SUFDckMsMENBQTZCOztJQUM3QiwrQ0FBa0M7O0lBQ2xDLGdEQUFtQzs7SUFDbkMsMENBQTZCOztJQUU3QiwyQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF0Y2hQYXJ0IHtcbiAgaXNNYXRjaDogYm9vbGVhbjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItY29tcGxldGVyLWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnY29tcGxldGVyLWxpc3QtaXRlbS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcGxldGVyTGlzdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgc2VhcmNoU3RyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBtYXRjaENsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG5cbiAgcHVibGljIHBhcnRzOiBNYXRjaFBhcnRbXSA9IFtdO1xuICBwdWJsaWMgbmdPbkluaXQoKTogYW55IHtcbiAgICBpZiAoIXRoaXMuc2VhcmNoU3RyKSB7XG4gICAgICB0aGlzLnBhcnRzLnB1c2goeyBpc01hdGNoOiBmYWxzZSwgdGV4dDogdGhpcy50ZXh0IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaFN0ciA9IHRoaXMudGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBtYXRjaFBvcyA9IG1hdGNoU3RyLmluZGV4T2YodGhpcy5zZWFyY2hTdHIudG9Mb3dlckNhc2UoKSk7XG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwO1xuICAgIHdoaWxlIChtYXRjaFBvcyA+PSAwKSB7XG4gICAgICBjb25zdCBtYXRjaFRleHQgPSB0aGlzLnRleHQuc2xpY2UobWF0Y2hQb3MsIG1hdGNoUG9zICsgdGhpcy5zZWFyY2hTdHIubGVuZ3RoKTtcbiAgICAgIGlmIChtYXRjaFBvcyA9PT0gMCkge1xuICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyBpc01hdGNoOiB0cnVlLCB0ZXh0OiBtYXRjaFRleHQgfSk7XG4gICAgICAgIHN0YXJ0SW5kZXggKz0gdGhpcy5zZWFyY2hTdHIubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaFBvcyA+IDApIHtcbiAgICAgICAgY29uc3QgbWF0Y2hQYXJ0ID0gdGhpcy50ZXh0LnNsaWNlKHN0YXJ0SW5kZXgsIG1hdGNoUG9zKTtcbiAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgaXNNYXRjaDogZmFsc2UsIHRleHQ6IG1hdGNoUGFydCB9KTtcbiAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgaXNNYXRjaDogdHJ1ZSwgdGV4dDogbWF0Y2hUZXh0IH0pO1xuICAgICAgICBzdGFydEluZGV4ICs9IHRoaXMuc2VhcmNoU3RyLmxlbmd0aCArIG1hdGNoUGFydC5sZW5ndGg7XG4gICAgICB9XG4gICAgICBtYXRjaFBvcyA9IG1hdGNoU3RyLmluZGV4T2YodGhpcy5zZWFyY2hTdHIudG9Mb3dlckNhc2UoKSwgc3RhcnRJbmRleCk7XG4gICAgfVxuICAgIGlmIChzdGFydEluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgIHRoaXMucGFydHMucHVzaCh7IGlzTWF0Y2g6IGZhbHNlLCB0ZXh0OiB0aGlzLnRleHQuc2xpY2Uoc3RhcnRJbmRleCwgdGhpcy50ZXh0Lmxlbmd0aCkgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=