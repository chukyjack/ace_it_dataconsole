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
export class CompleterListItemComponent {
    constructor() {
        this.parts = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        /** @type {?} */
        const matchStr = this.text.toLowerCase();
        /** @type {?} */
        let matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        /** @type {?} */
        let startIndex = 0;
        while (matchPos >= 0) {
            /** @type {?} */
            const matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                /** @type {?} */
                const matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG9jb21wbGV0ZS9jb21wb25lbnRzL2NvbXBsZXRlci1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV2RCwrQkFHQzs7O0lBRkMsNEJBQWlCOztJQUNqQix5QkFBYTs7QUFPZixNQUFNLE9BQU8sMEJBQTBCO0lBSnZDO1FBVVMsVUFBSyxHQUFnQixFQUFFLENBQUM7SUEwQmpDLENBQUM7Ozs7SUF6QlEsUUFBUTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckQsT0FBTztTQUNSOztjQUNLLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTs7WUFDcEMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7WUFDekQsVUFBVSxHQUFHLENBQUM7UUFDbEIsT0FBTyxRQUFRLElBQUksQ0FBQyxFQUFFOztrQkFDZCxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUM3RSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDcEQsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2FBQ3JDO2lCQUFNLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTs7c0JBQ2pCLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO2dCQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDcEQsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7YUFDeEQ7WUFDRCxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0Y7SUFDSCxDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLGdUQUFpRDthQUNsRDs7O21CQUVFLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO21CQUNMLEtBQUs7Ozs7SUFITiwwQ0FBNkI7O0lBQzdCLCtDQUFrQzs7SUFDbEMsZ0RBQW1DOztJQUNuQywwQ0FBNkI7O0lBRTdCLDJDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBNYXRjaFBhcnQge1xuICBpc01hdGNoOiBib29sZWFuO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1jb21wbGV0ZXItbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICdjb21wbGV0ZXItbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDb21wbGV0ZXJMaXN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBzZWFyY2hTdHI6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIG1hdGNoQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIHR5cGU6IHN0cmluZztcblxuICBwdWJsaWMgcGFydHM6IE1hdGNoUGFydFtdID0gW107XG4gIHB1YmxpYyBuZ09uSW5pdCgpOiBhbnkge1xuICAgIGlmICghdGhpcy5zZWFyY2hTdHIpIHtcbiAgICAgIHRoaXMucGFydHMucHVzaCh7IGlzTWF0Y2g6IGZhbHNlLCB0ZXh0OiB0aGlzLnRleHQgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoU3RyID0gdGhpcy50ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IG1hdGNoUG9zID0gbWF0Y2hTdHIuaW5kZXhPZih0aGlzLnNlYXJjaFN0ci50b0xvd2VyQ2FzZSgpKTtcbiAgICBsZXQgc3RhcnRJbmRleCA9IDA7XG4gICAgd2hpbGUgKG1hdGNoUG9zID49IDApIHtcbiAgICAgIGNvbnN0IG1hdGNoVGV4dCA9IHRoaXMudGV4dC5zbGljZShtYXRjaFBvcywgbWF0Y2hQb3MgKyB0aGlzLnNlYXJjaFN0ci5sZW5ndGgpO1xuICAgICAgaWYgKG1hdGNoUG9zID09PSAwKSB7XG4gICAgICAgIHRoaXMucGFydHMucHVzaCh7IGlzTWF0Y2g6IHRydWUsIHRleHQ6IG1hdGNoVGV4dCB9KTtcbiAgICAgICAgc3RhcnRJbmRleCArPSB0aGlzLnNlYXJjaFN0ci5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoUG9zID4gMCkge1xuICAgICAgICBjb25zdCBtYXRjaFBhcnQgPSB0aGlzLnRleHQuc2xpY2Uoc3RhcnRJbmRleCwgbWF0Y2hQb3MpO1xuICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyBpc01hdGNoOiBmYWxzZSwgdGV4dDogbWF0Y2hQYXJ0IH0pO1xuICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyBpc01hdGNoOiB0cnVlLCB0ZXh0OiBtYXRjaFRleHQgfSk7XG4gICAgICAgIHN0YXJ0SW5kZXggKz0gdGhpcy5zZWFyY2hTdHIubGVuZ3RoICsgbWF0Y2hQYXJ0Lmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIG1hdGNoUG9zID0gbWF0Y2hTdHIuaW5kZXhPZih0aGlzLnNlYXJjaFN0ci50b0xvd2VyQ2FzZSgpLCBzdGFydEluZGV4KTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0SW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgaXNNYXRjaDogZmFsc2UsIHRleHQ6IHRoaXMudGV4dC5zbGljZShzdGFydEluZGV4LCB0aGlzLnRleHQubGVuZ3RoKSB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==