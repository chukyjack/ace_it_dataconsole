import { AfterContentInit, AfterViewInit } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { MdbAccordionService } from '../mdb-accordion.service';
export declare class SBItemComponent implements AfterViewInit, AfterContentInit {
    private accordionService;
    collapsed: boolean;
    customClass: string;
    idModifier: number;
    body: SBItemBodyComponent;
    constructor(accordionService: MdbAccordionService);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    toggle(collapsed: boolean): void;
    applyToggle(collapsed: boolean): void;
}
