/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, NgZone, HostBinding, TemplateRef } from '@angular/core';
import { IgxDropDirective } from '../../directives/dragdrop/dragdrop.directive';
import { IgxColumnMovingDragDirective } from '../grid.common';
import { SortingDirection } from '../../data-operations/sorting-expression.interface';
/**
 * @hidden
 */
export class IgxGroupByRowTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
IgxGroupByRowTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxGroupByRow]'
            },] }
];
/** @nocollapse */
IgxGroupByRowTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
if (false) {
    /** @type {?} */
    IgxGroupByRowTemplateDirective.prototype.template;
}
/**
 * @hidden
 */
export class IgxGroupAreaDropDirective extends IgxDropDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} zone
     */
    constructor(elementRef, renderer, zone) {
        super(elementRef, renderer, zone);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        this.hovered = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragEnter(event) {
        /** @type {?} */
        const drag = event.detail.owner;
        /** @type {?} */
        const column = drag.column;
        if (!this.columnBelongsToGrid(column)) {
            return;
        }
        /** @type {?} */
        const grid = (/** @type {?} */ (column.grid));
        /** @type {?} */
        const isGrouped = grid.groupingExpressions.findIndex((item) => item.fieldName === column.field) !== -1;
        if (column.groupable && !isGrouped && !column.columnGroup) {
            drag.icon.innerText = 'group_work';
            this.hovered = true;
        }
        else {
            drag.icon.innerText = 'block';
            this.hovered = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        /** @type {?} */
        const drag = event.detail.owner;
        /** @type {?} */
        const column = drag.column;
        if (!this.columnBelongsToGrid(column)) {
            return;
        }
        event.detail.owner.icon.innerText = 'block';
        this.hovered = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragDrop(event) {
        /** @type {?} */
        const drag = event.detail.owner;
        if (drag instanceof IgxColumnMovingDragDirective) {
            /** @type {?} */
            const column = drag.column;
            if (!this.columnBelongsToGrid(column)) {
                return;
            }
            /** @type {?} */
            const grid = (/** @type {?} */ (column.grid));
            /** @type {?} */
            const isGrouped = grid.groupingExpressions.findIndex((item) => item.fieldName === column.field) !== -1;
            if (column.groupable && !isGrouped && !column.columnGroup) {
                grid.groupBy({ fieldName: column.field, dir: SortingDirection.Asc, ignoreCase: column.sortingIgnoreCase,
                    strategy: column.sortStrategy, groupingComparer: column.groupingComparer });
            }
        }
    }
    /**
     * @private
     * @param {?} elem
     * @param {?} attr
     * @return {?}
     */
    closestParentByAttr(elem, attr) {
        return elem.hasAttribute(attr) ?
            elem :
            this.closestParentByAttr(elem.parentElement, attr);
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    columnBelongsToGrid(column) {
        /** @type {?} */
        const elem = this.elementRef.nativeElement;
        /** @type {?} */
        const closestGridID = this.closestParentByAttr(elem, 'igxGroupAreaDrop').getAttribute('gridId');
        if (!column) {
            return false;
        }
        else {
            /** @type {?} */
            const grid = (/** @type {?} */ (column.grid));
            if (!grid || grid.id !== closestGridID) {
                return false;
            }
            return true;
        }
    }
}
IgxGroupAreaDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxGroupAreaDrop]'
            },] }
];
/** @nocollapse */
IgxGroupAreaDropDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone }
];
IgxGroupAreaDropDirective.propDecorators = {
    hovered: [{ type: HostBinding, args: ['class.igx-drop-area--hover',] }]
};
if (false) {
    /** @type {?} */
    IgxGroupAreaDropDirective.prototype.hovered;
    /**
     * @type {?}
     * @private
     */
    IgxGroupAreaDropDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    IgxGroupAreaDropDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    IgxGroupAreaDropDirective.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9ncmlkL2dyaWQuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7O0FBUXRGLE1BQU0sT0FBTyw4QkFBOEI7Ozs7SUFFdkMsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBSSxDQUFDOzs7WUFMckQsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7YUFDOUI7Ozs7WUFaK0QsV0FBVzs7OztJQWUzRCxrREFBaUM7Ozs7O0FBVWpELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxnQkFBZ0I7Ozs7OztJQUUzRCxZQUFvQixVQUFzQixFQUFVLFFBQW1CLEVBQVUsSUFBWTtRQUN6RixLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQURsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFLdEYsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUh2QixDQUFDOzs7OztJQU1NLFdBQVcsQ0FBQyxLQUFLOztjQUNkLElBQUksR0FBaUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLOztjQUN2RCxNQUFNLEdBQXVCLElBQUksQ0FBQyxNQUFNO1FBQzlDLElBQUksQ0FB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QUU7WUFDVCxPQUFPLEtBQUssQ0FBQztTQUNoQjthQUFNOztrQkFDRyxJQUFJLEdBQUcsbUJBQWtCLE1BQU0sQ0FBQyxJQUFJLEVBQUE7WUFDMUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLGFBQWEsRUFBRTtnQkFDcEMsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7O1lBMUVKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2FBQ2pDOzs7O1lBeEJtQixVQUFVO1lBQUUsU0FBUztZQUFFLE1BQU07OztzQkErQjVDLFdBQVcsU0FBQyw0QkFBNEI7Ozs7SUFBekMsNENBQ3VCOzs7OztJQUxYLCtDQUE4Qjs7Ozs7SUFBRSw2Q0FBMkI7Ozs7O0lBQUUseUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE5nWm9uZSwgSG9zdEJpbmRpbmcsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9kcmFnZHJvcC9kcmFnZHJvcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4Q29sdW1uTW92aW5nRHJhZ0RpcmVjdGl2ZSB9IGZyb20gJy4uL2dyaWQuY29tbW9uJztcbmltcG9ydCB7IElneENvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4R3JpZENvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU29ydGluZ0RpcmVjdGlvbiB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9zb3J0aW5nLWV4cHJlc3Npb24uaW50ZXJmYWNlJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneEdyb3VwQnlSb3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcm91cEJ5Um93VGVtcGxhdGVEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4R3JvdXBBcmVhRHJvcF0nXG59KVxuZXhwb3J0IGNsYXNzIElneEdyb3VwQXJlYURyb3BEaXJlY3RpdmUgZXh0ZW5kcyBJZ3hEcm9wRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgem9uZSk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZHJvcC1hcmVhLS1ob3ZlcicpXG4gICAgcHVibGljIGhvdmVyZWQgPSBmYWxzZTtcblxuXG4gICAgcHVibGljIG9uRHJhZ0VudGVyKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRyYWc6IElneENvbHVtbk1vdmluZ0RyYWdEaXJlY3RpdmUgPSBldmVudC5kZXRhaWwub3duZXI7XG4gICAgICAgIGNvbnN0IGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50ID0gZHJhZy5jb2x1bW47XG4gICAgICAgIGlmICghdGhpcy5jb2x1bW5CZWxvbmdzVG9HcmlkKGNvbHVtbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmlkID0gPElneEdyaWRDb21wb25lbnQ+Y29sdW1uLmdyaWQ7XG4gICAgICAgIGNvbnN0IGlzR3JvdXBlZCA9IGdyaWQuZ3JvdXBpbmdFeHByZXNzaW9ucy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uZmllbGROYW1lID09PSBjb2x1bW4uZmllbGQpICE9PSAtMTtcbiAgICAgICAgaWYgKGNvbHVtbi5ncm91cGFibGUgJiYgIWlzR3JvdXBlZCAmJiAhY29sdW1uLmNvbHVtbkdyb3VwKSB7XG4gICAgICAgICAgICBkcmFnLmljb24uaW5uZXJUZXh0ID0gJ2dyb3VwX3dvcmsnO1xuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYWcuaWNvbi5pbm5lclRleHQgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EcmFnTGVhdmUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZHJhZzogSWd4Q29sdW1uTW92aW5nRHJhZ0RpcmVjdGl2ZSA9IGV2ZW50LmRldGFpbC5vd25lcjtcbiAgICAgICAgY29uc3QgY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQgPSBkcmFnLmNvbHVtbjtcbiAgICAgICAgaWYgKCF0aGlzLmNvbHVtbkJlbG9uZ3NUb0dyaWQoY29sdW1uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmRldGFpbC5vd25lci5pY29uLmlubmVyVGV4dCA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyYWdEcm9wKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRyYWc6IElneENvbHVtbk1vdmluZ0RyYWdEaXJlY3RpdmUgPSBldmVudC5kZXRhaWwub3duZXI7XG4gICAgICAgIGlmIChkcmFnIGluc3RhbmNlb2YgSWd4Q29sdW1uTW92aW5nRHJhZ0RpcmVjdGl2ZSkge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQgPSBkcmFnLmNvbHVtbjtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb2x1bW5CZWxvbmdzVG9HcmlkKGNvbHVtbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBncmlkID0gPElneEdyaWRDb21wb25lbnQ+Y29sdW1uLmdyaWQ7XG4gICAgICAgICAgICBjb25zdCBpc0dyb3VwZWQgPSBncmlkLmdyb3VwaW5nRXhwcmVzc2lvbnMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmZpZWxkTmFtZSA9PT0gY29sdW1uLmZpZWxkKSAhPT0gLTE7XG4gICAgICAgICAgICBpZiAoY29sdW1uLmdyb3VwYWJsZSAmJiAhaXNHcm91cGVkICYmICFjb2x1bW4uY29sdW1uR3JvdXApIHtcbiAgICAgICAgICAgICAgICBncmlkLmdyb3VwQnkoeyBmaWVsZE5hbWU6IGNvbHVtbi5maWVsZCwgZGlyOiBTb3J0aW5nRGlyZWN0aW9uLkFzYywgaWdub3JlQ2FzZTogY29sdW1uLnNvcnRpbmdJZ25vcmVDYXNlLFxuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneTogY29sdW1uLnNvcnRTdHJhdGVneSwgZ3JvdXBpbmdDb21wYXJlcjogY29sdW1uLmdyb3VwaW5nQ29tcGFyZXIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3Nlc3RQYXJlbnRCeUF0dHIoZWxlbSwgYXR0cikge1xuICAgICAgICByZXR1cm4gZWxlbS5oYXNBdHRyaWJ1dGUoYXR0cikgP1xuICAgICAgICAgICAgZWxlbSA6XG4gICAgICAgICAgICB0aGlzLmNsb3Nlc3RQYXJlbnRCeUF0dHIoZWxlbS5wYXJlbnRFbGVtZW50LCBhdHRyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbHVtbkJlbG9uZ3NUb0dyaWQoY29sdW1uKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgY2xvc2VzdEdyaWRJRCA9IHRoaXMuY2xvc2VzdFBhcmVudEJ5QXR0cihlbGVtLCAnaWd4R3JvdXBBcmVhRHJvcCcpLmdldEF0dHJpYnV0ZSgnZ3JpZElkJyk7XG4gICAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBncmlkID0gPElneEdyaWRDb21wb25lbnQ+Y29sdW1uLmdyaWQ7XG4gICAgICAgICAgICBpZiAoIWdyaWQgfHwgZ3JpZC5pZCAhPT0gY2xvc2VzdEdyaWRJRCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19