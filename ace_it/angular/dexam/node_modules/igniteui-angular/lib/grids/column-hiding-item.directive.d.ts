import { ColumnChooserItemBase } from './column-chooser-item-base';
export interface IColumnVisibilityChangedEventArgs {
    column: any;
    newValue: boolean;
}
/** @hidden */
export declare class IgxColumnHidingItemDirective extends ColumnChooserItemBase {
    constructor();
    readonly disabled: any;
}
