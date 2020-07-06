import { ElementRef, Renderer2, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
export declare class SidenavComponent implements AfterViewInit, OnDestroy, OnInit {
    el: ElementRef;
    renderer: Renderer2;
    windwosWidth: number;
    shown: boolean;
    slimSidenav: boolean;
    isBrowser: any;
    private _sidenavTransform;
    class: string;
    fixed: boolean;
    sidenavBreakpoint: any;
    side: string;
    private _side;
    sideNav: ElementRef;
    overlay: any;
    constructor(platformId: string, el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    windwosResize(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    toggleSlim(): void;
    showOverlay(): void;
    hideOverlay(): void;
    setShown(value: boolean): void;
    ngOnDestroy(): void;
}
