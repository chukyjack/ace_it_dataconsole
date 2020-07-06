"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
exports.requiresZoneOnBlur = function (ngControl) { return ngControl &&
    (!ngControl.touched || (ngControl.control && ngControl.control.updateOn === 'blur')); };
/**
 * @hidden
 */
exports.preventDefault = function (args) { return args.preventDefault(); };
/**
 * @hidden
 */
exports.currentFocusTarget = function (blurArgs) { return blurArgs.relatedTarget || document.activeElement; };
/**
 * @hidden
 */
exports.isPresent = function (value) { return value !== undefined && value !== null; };
