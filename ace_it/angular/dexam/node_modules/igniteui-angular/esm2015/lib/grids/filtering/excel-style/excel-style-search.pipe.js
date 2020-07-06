/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/**
 * @hidden
 */
export class IgxExcelStyleSearchFilterPipe {
    /**
     * @param {?} items
     * @param {?} searchText
     * @return {?}
     */
    transform(items, searchText) {
        if (!items || !items.length) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        /** @type {?} */
        const result = items.filter((it, i) => (i === 0 && it.isSpecial) ||
            (it.value || it.value === 0) &&
                it.value.toString().toLowerCase().indexOf(searchText) > -1);
        return result.length > 1 ? result : [];
    }
}
IgxExcelStyleSearchFilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'excelStyleSearchFilter'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3R5bGUtc2VhcmNoLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2ZpbHRlcmluZy9leGNlbC1zdHlsZS9leGNlbC1zdHlsZS1zZWFyY2gucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7QUFTcEQsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7O0lBQ3RDLFNBQVMsQ0FBQyxLQUF1QixFQUFFLFVBQWtCO1FBQ2pELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDOztjQUNoQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQzVELENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFL0QsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7O1lBbkJKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsd0JBQXdCO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyTGlzdEl0ZW0gfSBmcm9tICcuL2dyaWQuZXhjZWwtc3R5bGUtZmlsdGVyaW5nLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGlwZSh7XG4gICAgbmFtZTogJ2V4Y2VsU3R5bGVTZWFyY2hGaWx0ZXInXG59KVxuZXhwb3J0IGNsYXNzIElneEV4Y2VsU3R5bGVTZWFyY2hGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKGl0ZW1zOiBGaWx0ZXJMaXN0SXRlbVtdLCBzZWFyY2hUZXh0OiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgICAgIGlmICghaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWFyY2hUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICBzZWFyY2hUZXh0ID0gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBpdGVtcy5maWx0ZXIoKGl0LCBpKSA9PiAoaSA9PT0gMCAmJiBpdC5pc1NwZWNpYWwpIHx8XG4gICAgICAgICAgICAoaXQudmFsdWUgfHwgaXQudmFsdWUgPT09IDApICYmXG4gICAgICAgICAgICBpdC52YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0KSA+IC0xKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA+IDEgPyByZXN1bHQgOiBbXTtcbiAgICB9XG59XG4iXX0=