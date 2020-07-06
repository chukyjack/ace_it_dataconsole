import { ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
export declare class VirtualHelperComponent implements OnDestroy {
    elementRef: ElementRef;
    cdr: ChangeDetectorRef;
    scrollTop: any;
    _vcr: any;
    itemsLength: number;
    height: any;
    cssClasses: string;
    destroyed: any;
    private _height;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
}
