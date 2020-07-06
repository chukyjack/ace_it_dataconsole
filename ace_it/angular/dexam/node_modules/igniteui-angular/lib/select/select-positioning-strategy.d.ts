import { PositionSettings, Size } from '../services/overlay/utilities';
import { ConnectedPositioningStrategy } from '../services/overlay/position/connected-positioning-strategy';
import { IPositionStrategy } from '../services/overlay/position';
import { IgxSelectComponent } from './select.component';
/** @hidden @internal */
export declare class SelectPositioningStrategy extends ConnectedPositioningStrategy implements IPositionStrategy {
    select: IgxSelectComponent;
    private _selectDefaultSettings;
    settings: PositionSettings;
    constructor(select: IgxSelectComponent, settings?: PositionSettings);
    private defaultWindowToListOffset;
    private viewPort;
    private deltaY;
    private deltaX;
    private itemTextPadding;
    private itemTextIndent;
    private listContainerBoundRect;
    private itemTextToInputTextDiff;
    private positionAndScrollBottom;
    private positionNoScroll;
    private positionAndScrollTop;
    private getItemsOutOfView;
    private listOutOfBounds;
    position(contentElement: HTMLElement, size: Size, document?: Document, initialCall?: boolean): void;
}
