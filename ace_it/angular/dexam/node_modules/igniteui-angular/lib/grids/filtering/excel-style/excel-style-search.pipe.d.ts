import { PipeTransform } from '@angular/core';
import { FilterListItem } from './grid.excel-style-filtering.component';
/**
 * @hidden
 */
export declare class IgxExcelStyleSearchFilterPipe implements PipeTransform {
    transform(items: FilterListItem[], searchText: string): any[];
}
