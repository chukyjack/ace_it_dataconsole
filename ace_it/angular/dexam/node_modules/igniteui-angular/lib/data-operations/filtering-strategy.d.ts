import { IFilteringExpression } from './filtering-expression.interface';
import { IFilteringExpressionsTree } from './filtering-expressions-tree';
export interface IFilteringStrategy {
    filter(data: any[], expressionsTree: IFilteringExpressionsTree): any[];
}
export declare abstract class BaseFilteringStrategy implements IFilteringStrategy {
    abstract filter(data: any[], expressionsTree: IFilteringExpressionsTree): any[];
    protected abstract getFieldValue(rec: object, fieldName: string): any;
    findMatchByExpression(rec: object, expr: IFilteringExpression): boolean;
    matchRecord(rec: object, expressions: IFilteringExpressionsTree | IFilteringExpression): boolean;
}
export declare class FilteringStrategy extends BaseFilteringStrategy {
    filter<T>(data: T[], expressionsTree: IFilteringExpressionsTree): T[];
    protected getFieldValue(rec: object, fieldName: string): any;
}
