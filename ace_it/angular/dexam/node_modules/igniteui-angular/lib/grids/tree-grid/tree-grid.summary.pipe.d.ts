import { PipeTransform } from '@angular/core';
import { GridBaseAPIService } from '../api.service';
import { IgxGridBaseComponent, GridSummaryPosition, GridSummaryCalculationMode, IGridDataBindable } from '../grid-base.component';
import { ITreeGridRecord } from './tree-grid.interfaces';
/** @hidden */
export declare class IgxTreeGridSummaryPipe implements PipeTransform {
    private gridAPI;
    constructor(gridAPI: GridBaseAPIService<IgxGridBaseComponent & IGridDataBindable>);
    transform(flatData: ITreeGridRecord[], hasSummary: boolean, summaryCalculationMode: GridSummaryCalculationMode, summaryPosition: GridSummaryPosition, id: string, pipeTrigger: number, summaryPipeTrigger: number): any[];
    private addSummaryRows;
    private removeDeletedRecord;
}
