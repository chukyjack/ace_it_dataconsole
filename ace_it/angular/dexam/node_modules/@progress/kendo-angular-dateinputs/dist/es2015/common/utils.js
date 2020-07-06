/**
 * @hidden
 */
export const requiresZoneOnBlur = (ngControl) => ngControl &&
    (!ngControl.touched || (ngControl.control && ngControl.control.updateOn === 'blur'));
/**
 * @hidden
 */
export const preventDefault = (args) => args.preventDefault();
/**
 * @hidden
 */
export const currentFocusTarget = (blurArgs) => blurArgs.relatedTarget || document.activeElement;
/**
 * @hidden
 */
export const isPresent = (value) => value !== undefined && value !== null;
