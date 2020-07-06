import { IgxDropDownBase } from '../drop-down';
import { OverlaySettings } from '../services';
/** @hidden @internal */
export interface IgxSelectBase extends IgxDropDownBase {
    open(overlaySettings?: OverlaySettings): any;
    close(): any;
    toggle(overlaySettings?: OverlaySettings): any;
}
