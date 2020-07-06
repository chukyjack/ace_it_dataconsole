import { ElementRef } from '@angular/core';
import { ISelectedOption } from '../interfaces/selected-option.interface';
export declare class MdbOptionComponent {
    el: ElementRef;
    value: string;
    clicked: boolean;
    selectedItem: ISelectedOption;
    constructor(el: ElementRef);
    handleMouseDown(event: any): void;
}
