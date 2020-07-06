import { IgxDropDownItemComponent } from './../drop-down/drop-down-item.component';
import { DoCheck } from '@angular/core';
export declare class IgxSelectItemComponent extends IgxDropDownItemComponent implements DoCheck {
    /** @hidden @internal */
    readonly itemText: any;
    /**
     * Sets/Gets if the item is the currently selected one in the select
     *
     * ```typescript
     *  let mySelectedItem = this.select.selectedItem;
     *  let isMyItemSelected = mySelectedItem.selected; // true
     * ```
     */
    selected: any;
    /** @hidden @internal */
    isHeader: boolean;
    ngDoCheck(): void;
}
