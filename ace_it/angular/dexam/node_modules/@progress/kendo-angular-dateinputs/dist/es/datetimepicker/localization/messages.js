import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
import { ComponentMessages } from '@progress/kendo-angular-l10n';
/**
 * @hidden
 */
var Messages = /** @class */ (function (_super) {
    tslib_1.__extends(Messages, _super);
    function Messages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Messages.propDecorators = {
        toggle: [{ type: Input }],
        dateTab: [{ type: Input }],
        dateTabLabel: [{ type: Input }],
        timeTab: [{ type: Input }],
        timeTabLabel: [{ type: Input }],
        accept: [{ type: Input }],
        acceptLabel: [{ type: Input }],
        cancel: [{ type: Input }],
        cancelLabel: [{ type: Input }],
        today: [{ type: Input }],
        now: [{ type: Input }],
        nowLabel: [{ type: Input }]
    };
    return Messages;
}(ComponentMessages));
export { Messages };
