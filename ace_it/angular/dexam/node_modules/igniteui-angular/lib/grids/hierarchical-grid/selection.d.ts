import { IgxSelectionAPIService } from '../../core/selection';
/** @hidden */
export declare class IgxHierarchicalSelectionAPIService extends IgxSelectionAPIService {
    protected hSelection: Map<string, Map<string, any>>;
    add_sub_item(rootID: string, parentID: string, cell: any): void;
    get_sub_item(rootID: string): any;
    clear_sub_item(rootID: string): Map<string, Map<string, any>>;
}
