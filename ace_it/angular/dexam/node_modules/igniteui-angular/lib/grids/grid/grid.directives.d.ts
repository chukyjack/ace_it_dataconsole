import { ElementRef, Renderer2, NgZone, TemplateRef } from '@angular/core';
import { IgxDropDirective } from '../../directives/dragdrop/dragdrop.directive';
/**
 * @hidden
 */
export declare class IgxGroupByRowTemplateDirective {
    template: TemplateRef<any>;
    constructor(template: TemplateRef<any>);
}
/**
 * @hidden
 */
export declare class IgxGroupAreaDropDirective extends IgxDropDirective {
    private elementRef;
    private renderer;
    private zone;
    constructor(elementRef: ElementRef, renderer: Renderer2, zone: NgZone);
    hovered: boolean;
    onDragEnter(event: any): void;
    onDragLeave(event: any): void;
    onDragDrop(event: any): void;
    private closestParentByAttr;
    private columnBelongsToGrid;
}
