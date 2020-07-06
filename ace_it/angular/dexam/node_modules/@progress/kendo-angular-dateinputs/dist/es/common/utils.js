/**
 * @hidden
 */
export var requiresZoneOnBlur = function (ngControl) { return ngControl &&
    (!ngControl.touched || (ngControl.control && ngControl.control.updateOn === 'blur')); };
/**
 * @hidden
 */
export var preventDefault = function (args) { return args.preventDefault(); };
/**
 * @hidden
 */
export var currentFocusTarget = function (blurArgs) { return blurArgs.relatedTarget || document.activeElement; };
/**
 * @hidden
 */
export var isPresent = function (value) { return value !== undefined && value !== null; };
