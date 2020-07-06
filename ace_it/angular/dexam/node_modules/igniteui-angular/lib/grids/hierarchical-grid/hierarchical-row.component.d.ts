import { ElementRef, ChangeDetectorRef, QueryList } from '@angular/core';
import { IgxHierarchicalGridComponent } from './hierarchical-grid.component';
import { IgxRowComponent } from '../row.component';
import { IgxHierarchicalSelectionAPIService } from './selection';
import { GridBaseAPIService } from '.././api.service';
import { IgxHierarchicalGridCellComponent } from './hierarchical-cell.component';
import { IgxGridCRUDService, IgxGridSelectionService } from '../../core/grid-selection';
export declare class IgxHierarchicalRowComponent extends IgxRowComponent<IgxHierarchicalGridComponent> {
    gridAPI: GridBaseAPIService<IgxHierarchicalGridComponent>;
    crudService: IgxGridCRUDService;
    selectionService: IgxGridSelectionService;
    private hselection;
    element: ElementRef;
    cdr: ChangeDetectorRef;
    /**
     * The rendered cells in the row component.
     *
     * ```typescript
     * // get the cells of the third selected row
     * let selectedRowCells = this.grid.selectedRows[2].cells;
     * ```
     */
    cells: QueryList<IgxHierarchicalGridCellComponent>;
    expander: ElementRef;
    /**
     * @hidden
     */
    tabindex: number;
    /**
 * Returns whether the row is expanded.
 * ```typescript
 * const RowExpanded = this.grid1.rowList.first.expanded;
 * ```
 */
    readonly expanded: boolean;
    readonly hasChildren: boolean;
    /**
     * @hidden
     */
    readonly highlighted: boolean;
    /**
     * Toggles the hierarchical row.
     * ```typescript
     * this.grid1.rowList.first.toggle()
     * ```
     */
    toggle(): void;
    constructor(gridAPI: GridBaseAPIService<IgxHierarchicalGridComponent>, crudService: IgxGridCRUDService, selectionService: IgxGridSelectionService, hselection: IgxHierarchicalSelectionAPIService, element: ElementRef, cdr: ChangeDetectorRef);
}
