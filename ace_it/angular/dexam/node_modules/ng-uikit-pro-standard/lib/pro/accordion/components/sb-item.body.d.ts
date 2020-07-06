import { ElementRef, AfterContentInit, QueryList, EventEmitter } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
export interface IAccordionAnimationState {
    state: string;
    accordionEl: ElementRef;
}
export declare class SBItemBodyComponent implements AfterContentInit {
    private el;
    customClass: string;
    animationStateChange: EventEmitter<IAccordionAnimationState>;
    routerLinks: QueryList<RouterLinkWithHref>;
    height: string;
    expandAnimationState: string;
    id: string;
    ariaLabelledBy: string;
    bodyEl: ElementRef;
    constructor(el: ElementRef);
    toggle(collapsed: boolean): void;
    animationCallback(): void;
    openSidenavOnActiveLink(): void;
    ngAfterContentInit(): void;
}
