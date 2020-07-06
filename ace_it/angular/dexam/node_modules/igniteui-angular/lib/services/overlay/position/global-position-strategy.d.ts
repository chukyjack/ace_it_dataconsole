import { IPositionStrategy } from './IPositionStrategy';
import { PositionSettings, Size } from './../utilities';
/**
 * Positions the element based on the directions passed in trough PositionSettings.
 * These are Top/Middle/Bottom for verticalDirection and Left/Center/Right for horizontalDirection
 */
export declare class GlobalPositionStrategy implements IPositionStrategy {
    private _defaultSettings;
    /** @inheritdoc */
    settings: PositionSettings;
    constructor(settings?: PositionSettings);
    position(contentElement: HTMLElement, size?: Size, document?: Document, initialCall?: boolean): void;
    /** @inheritdoc */
    clone(): IPositionStrategy;
}
