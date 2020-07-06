/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input, HostBinding } from '@angular/core';
/**
 * @record
 */
export function CreditCard() { }
if (false) {
    /** @type {?} */
    CreditCard.prototype.name;
    /** @type {?} */
    CreditCard.prototype.fullName;
    /** @type {?} */
    CreditCard.prototype.re;
    /** @type {?} */
    CreditCard.prototype.pattern;
    /** @type {?} */
    CreditCard.prototype.maxLength;
    /** @type {?} */
    CreditCard.prototype.cvvLength;
}
var MdbCreditCardDirective = /** @class */ (function () {
    function MdbCreditCardDirective() {
        this.standardPattern = /(\d{1,4})/g;
        this.defaultCard = {
            name: '',
            fullName: '',
            re: /\d{0,16}/,
            pattern: this.standardPattern,
            maxLength: 19,
            cvvLength: 3
        };
        this.cards = [
            {
                name: 'visa',
                fullName: 'Visa',
                re: /^4\d{0,15}/,
                pattern: this.standardPattern,
                maxLength: 16,
                cvvLength: 3
            },
            {
                name: 'mastercard',
                fullName: 'Mastercard',
                re: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
                pattern: this.standardPattern,
                maxLength: 16,
                cvvLength: 3
            },
            {
                name: 'amex',
                fullName: 'American Express',
                re: /^3[47]\d{0,13}/,
                pattern: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
                maxLength: 15,
                cvvLength: 4
            },
            {
                name: 'jcb',
                fullName: 'JCB',
                re: /^(?:35\d{0,2})\d{0,12}/,
                pattern: this.standardPattern,
                maxLength: 19,
                cvvLength: 3
            },
            {
                name: 'discover',
                fullName: 'Discover',
                re: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
                pattern: this.standardPattern,
                maxLength: 19,
                cvvLength: 3
            },
            {
                name: 'diners-club',
                fullName: 'Diners Club',
                re: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
                pattern: /(\d{1,4})(\d{1,5})?(\d{1,4})?/,
                maxLength: 19,
                cvvLength: 3
            }
        ];
        this._separator = ' ';
    }
    Object.defineProperty(MdbCreditCardDirective.prototype, "additionalCards", {
        get: /**
         * @return {?}
         */
        function () { return this._additionalCards; },
        set: /**
         * @param {?} cards
         * @return {?}
         */
        function (cards) {
            this._additionalCards = cards;
            this.addCards(cards);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCreditCardDirective.prototype, "separator", {
        get: /**
         * @return {?}
         */
        function () { return this._separator; },
        set: /**
         * @param {?} separator
         * @return {?}
         */
        function (separator) {
            this._separator = separator;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    MdbCreditCardDirective.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.formatInput(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    MdbCreditCardDirective.prototype.formatInput = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var input = event.target.value;
        /** @type {?} */
        var formattedInput = this.getFormattedInput(input);
        event.target.value = formattedInput;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MdbCreditCardDirective.prototype.getFormattedInput = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = this.removeNonDigits(value);
        /** @type {?} */
        var card = this.findCardByNumber(value);
        this.updateCurrentCardNames(card.name, card.fullName);
        /** @type {?} */
        var cardNumMaxLength;
        if (this.hasStandardPattern(card)) {
            /** @type {?} */
            var matches = value.match(card.pattern);
            if (matches === null) {
                return value;
            }
            cardNumMaxLength = card.maxLength + matches.length - 1;
            this.maxLength = cardNumMaxLength.toString();
            return matches.join(this.separator);
        }
        else {
            /** @type {?} */
            var results = card.pattern.exec(value);
            if (results === null) {
                return value;
            }
            results.shift();
            cardNumMaxLength = card.maxLength + results.length - 1;
            this.maxLength = cardNumMaxLength.toString();
            return results.filter(this.isMatch).join(this.separator);
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MdbCreditCardDirective.prototype.removeNonDigits = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(/\D/g, '');
    };
    /**
     * @private
     * @param {?} card
     * @return {?}
     */
    MdbCreditCardDirective.prototype.hasStandardPattern = /**
     * @private
     * @param {?} card
     * @return {?}
     */
    function (card) {
        return card.pattern.toString() === this.standardPattern.toString();
    };
    /**
     * @private
     * @param {?} match
     * @return {?}
     */
    MdbCreditCardDirective.prototype.isMatch = /**
     * @private
     * @param {?} match
     * @return {?}
     */
    function (match) {
        return match !== undefined;
    };
    /**
     * @private
     * @param {?} name
     * @param {?} fullName
     * @return {?}
     */
    MdbCreditCardDirective.prototype.updateCurrentCardNames = /**
     * @private
     * @param {?} name
     * @param {?} fullName
     * @return {?}
     */
    function (name, fullName) {
        this.cardName = name;
        this.cardFullName = fullName;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MdbCreditCardDirective.prototype.findCardByNumber = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var cardType = this.cards.find((/**
         * @param {?} card
         * @return {?}
         */
        function (card) {
            return card.re.test(value);
        }));
        if (!cardType) {
            return this.defaultCard;
        }
        return cardType;
    };
    /**
     * @param {?} newCards
     * @return {?}
     */
    MdbCreditCardDirective.prototype.addCards = /**
     * @param {?} newCards
     * @return {?}
     */
    function (newCards) {
        var _this = this;
        newCards.forEach((/**
         * @param {?} card
         * @return {?}
         */
        function (card) {
            _this.cards.push(card);
        }));
    };
    MdbCreditCardDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbCreditCard]',
                    exportAs: 'mdbCreditCard'
                },] }
    ];
    /** @nocollapse */
    MdbCreditCardDirective.ctorParameters = function () { return []; };
    MdbCreditCardDirective.propDecorators = {
        additionalCards: [{ type: Input }],
        separator: [{ type: Input }],
        maxLength: [{ type: HostBinding, args: ['attr.maxLength',] }],
        onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return MdbCreditCardDirective;
}());
export { MdbCreditCardDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MdbCreditCardDirective.prototype.standardPattern;
    /** @type {?} */
    MdbCreditCardDirective.prototype.cardName;
    /** @type {?} */
    MdbCreditCardDirective.prototype.cardFullName;
    /**
     * @type {?}
     * @private
     */
    MdbCreditCardDirective.prototype.defaultCard;
    /**
     * @type {?}
     * @private
     */
    MdbCreditCardDirective.prototype.cards;
    /**
     * @type {?}
     * @private
     */
    MdbCreditCardDirective.prototype._additionalCards;
    /**
     * @type {?}
     * @private
     */
    MdbCreditCardDirective.prototype._separator;
    /** @type {?} */
    MdbCreditCardDirective.prototype.maxLength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNyZWRpdC1jYXJkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1mb3JtYXQvbWRiLWNyZWRpdC1jYXJkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUU1RSxnQ0FPQzs7O0lBTkMsMEJBQWE7O0lBQ2IsOEJBQWlCOztJQUNqQix3QkFBVzs7SUFDWCw2QkFBZ0I7O0lBQ2hCLCtCQUFrQjs7SUFDbEIsK0JBQWtCOztBQUdwQjtJQW9GRTtRQS9FUSxvQkFBZSxHQUFHLFlBQVksQ0FBQztRQUkvQixnQkFBVyxHQUFlO1lBQ2hDLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixFQUFFLEVBQUUsVUFBVTtZQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtZQUM3QixTQUFTLEVBQUUsRUFBRTtZQUNiLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQztRQUVNLFVBQUssR0FBaUI7WUFDNUI7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLEVBQUUsRUFBRSxZQUFZO2dCQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQzdCLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEVBQUUsRUFBRSx1REFBdUQ7Z0JBQzNELE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDN0IsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFFB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STtZQUNyQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBQztRQUVGLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVNLHlDQUFROzs7O0lBQWYsVUFBZ0IsUUFBc0I7UUFBdEMsaUJBSUM7UUFIQyxRQUFRLENBQUMsT0FBTzs7OztRQUFFLFVBQUMsSUFBSTtZQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXBLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7OztrQ0FrRUUsS0FBSzs0QkFRTCxLQUFLOzRCQVNMLFdBQVcsU0FBQyxnQkFBZ0I7MEJBRTVCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBNkVuQyw2QkFBQztDQUFBLEFBcktELElBcUtDO1NBaktZLHNCQUFzQjs7Ozs7O0lBQ2pDLGlEQUF1Qzs7SUFDdkMsMENBQWlCOztJQUNqQiw4Q0FBcUI7Ozs7O0lBRXJCLDZDQU9FOzs7OztJQUVGLHVDQWlERTs7Ozs7SUFRRixrREFBdUM7Ozs7O0lBT3ZDLDRDQUF5Qjs7SUFJekIsMkNBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENyZWRpdENhcmQge1xuICBuYW1lOiBzdHJpbmc7XG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG4gIHJlOiBSZWdFeHA7XG4gIHBhdHRlcm46IFJlZ0V4cDtcbiAgbWF4TGVuZ3RoOiBudW1iZXI7XG4gIGN2dkxlbmd0aDogbnVtYmVyO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiQ3JlZGl0Q2FyZF0nLFxuICBleHBvcnRBczogJ21kYkNyZWRpdENhcmQnXG59KVxuZXhwb3J0IGNsYXNzIE1kYkNyZWRpdENhcmREaXJlY3RpdmUge1xuICBwcml2YXRlIHN0YW5kYXJkUGF0dGVybiA9IC8oXFxkezEsNH0pL2c7XG4gIGNhcmROYW1lOiBzdHJpbmc7XG4gIGNhcmRGdWxsTmFtZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgZGVmYXVsdENhcmQ6IENyZWRpdENhcmQgPSB7XG4gICAgbmFtZTogJycsXG4gICAgZnVsbE5hbWU6ICcnLFxuICAgIHJlOiAvXFxkezAsMTZ9LyxcbiAgICBwYXR0ZXJuOiB0aGlzLnN0YW5kYXJkUGF0dGVybixcbiAgICBtYXhMZW5ndGg6IDE5LFxuICAgIGN2dkxlbmd0aDogM1xuICB9O1xuXG4gIHByaXZhdGUgY2FyZHM6IENyZWRpdENhcmRbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAndmlzYScsXG4gICAgICBmdWxsTmFtZTogJ1Zpc2EnLFxuICAgICAgcmU6IC9eNFxcZHswLDE1fS8sXG4gICAgICBwYXR0ZXJuOiB0aGlzLnN0YW5kYXJkUGF0dGVybixcbiAgICAgIG1heExlbmd0aDogMTYsXG4gICAgICBjdnZMZW5ndGg6IDNcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdtYXN0ZXJjYXJkJyxcbiAgICAgIGZ1bGxOYW1lOiAnTWFzdGVyY2FyZCcsXG4gICAgICByZTogL14oNVsxLTVdXFxkezAsMn18MjJbMi05XVxcZHswLDF9fDJbMy03XVxcZHswLDJ9KVxcZHswLDEyfS8sXG4gICAgICBwYXR0ZXJuOiB0aGlzLnN0YW5kYXJkUGF0dGVybixcbiAgICAgIG1heExlbmd0aDogMTYsXG4gICAgICBjdnZMZW5ndGg6IDNcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdhbWV4JyxcbiAgICAgIGZ1bGxOYW1lOiAnQW1lcmljYW4gRXhwcmVzcycsXG4gICAgICByZTogL14zWzQ3XVxcZHswLDEzfS8sXG4gICAgICBwYXR0ZXJuOiAvKFxcZHsxLDR9KShcXGR7MSw2fSk/KFxcZHsxLDV9KT8vLFxuICAgICAgbWF4TGVuZ3RoOiAxNSxcbiAgICAgIGN2dkxlbmd0aDogNFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2pjYicsXG4gICAgICBmdWxsTmFtZTogJ0pDQicsXG4gICAgICByZTogL14oPzozNVxcZHswLDJ9KVxcZHswLDEyfS8sXG4gICAgICBwYXR0ZXJuOiB0aGlzLnN0YW5kYXJkUGF0dGVybixcbiAgICAgIG1heExlbmd0aDogMTksXG4gICAgICBjdnZMZW5ndGg6IDNcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdkaXNjb3ZlcicsXG4gICAgICBmdWxsTmFtZTogJ0Rpc2NvdmVyJyxcbiAgICAgIHJlOiAvXig/OjYwMTF8NjVcXGR7MCwyfXw2NFs0LTldXFxkPylcXGR7MCwxMn0vLFxuICAgICAgcGF0dGVybjogdGhpcy5zdGFuZGFyZFBhdHRlcm4sXG4gICAgICBtYXhMZW5ndGg6IDE5LFxuICAgICAgY3Z2TGVuZ3RoOiAzXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGluZXJzLWNsdWInLFxuICAgICAgZnVsbE5hbWU6ICdEaW5lcnMgQ2x1YicsXG4gICAgICByZTogL14zKD86MChbMC01XXw5KXxbNjg5XVxcZD8pXFxkezAsMTF9LyxcbiAgICAgIHBhdHRlcm46IC8oXFxkezEsNH0pKFxcZHsxLDV9KT8oXFxkezEsNH0pPy8sXG4gICAgICBtYXhMZW5ndGg6IDE5LFxuICAgICAgY3Z2TGVuZ3RoOiAzXG4gICAgfVxuICBdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBhZGRpdGlvbmFsQ2FyZHMoKSB7IHJldHVybiB0aGlzLl9hZGRpdGlvbmFsQ2FyZHM7IH1cbiAgc2V0IGFkZGl0aW9uYWxDYXJkcyhjYXJkczogQ3JlZGl0Q2FyZFtdKSB7XG4gICAgdGhpcy5fYWRkaXRpb25hbENhcmRzID0gY2FyZHM7XG4gICAgdGhpcy5hZGRDYXJkcyhjYXJkcyk7XG4gIH1cbiAgcHJpdmF0ZSBfYWRkaXRpb25hbENhcmRzOiBDcmVkaXRDYXJkW107XG5cbiAgQElucHV0KClcbiAgZ2V0IHNlcGFyYXRvcigpIHsgcmV0dXJuIHRoaXMuX3NlcGFyYXRvcjsgfVxuICBzZXQgc2VwYXJhdG9yKHNlcGFyYXRvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VwYXJhdG9yID0gc2VwYXJhdG9yO1xuICB9XG4gIHByaXZhdGUgX3NlcGFyYXRvciA9ICcgJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1heExlbmd0aCcpIG1heExlbmd0aDogc3RyaW5nO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgb25JbnB1dChldmVudDogYW55KSB7XG4gICAgdGhpcy5mb3JtYXRJbnB1dChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdElucHV0KGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBmb3JtYXR0ZWRJbnB1dCA9IHRoaXMuZ2V0Rm9ybWF0dGVkSW5wdXQoaW5wdXQpO1xuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGZvcm1hdHRlZElucHV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb3JtYXR0ZWRJbnB1dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdmFsdWUgPSB0aGlzLnJlbW92ZU5vbkRpZ2l0cyh2YWx1ZSk7XG4gICAgY29uc3QgY2FyZCA9IHRoaXMuZmluZENhcmRCeU51bWJlcih2YWx1ZSk7XG5cbiAgICB0aGlzLnVwZGF0ZUN1cnJlbnRDYXJkTmFtZXMoY2FyZC5uYW1lLCBjYXJkLmZ1bGxOYW1lKTtcblxuICAgIGxldCBjYXJkTnVtTWF4TGVuZ3RoOiBudW1iZXI7XG5cbiAgICBpZiAodGhpcy5oYXNTdGFuZGFyZFBhdHRlcm4oY2FyZCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXM6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gdmFsdWUubWF0Y2goY2FyZC5wYXR0ZXJuKTtcblxuICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBjYXJkTnVtTWF4TGVuZ3RoID0gY2FyZC5tYXhMZW5ndGggKyBtYXRjaGVzLmxlbmd0aCAtIDE7XG4gICAgICB0aGlzLm1heExlbmd0aCA9IGNhcmROdW1NYXhMZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiBtYXRjaGVzLmpvaW4odGhpcy5zZXBhcmF0b3IpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3VsdHM6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBjYXJkLnBhdHRlcm4uZXhlYyh2YWx1ZSk7XG5cbiAgICAgIGlmIChyZXN1bHRzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMuc2hpZnQoKTtcbiAgICAgIGNhcmROdW1NYXhMZW5ndGggPSBjYXJkLm1heExlbmd0aCArIHJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICAgIHRoaXMubWF4TGVuZ3RoID0gY2FyZE51bU1heExlbmd0aC50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIHJlc3VsdHMuZmlsdGVyKHRoaXMuaXNNYXRjaCkuam9pbih0aGlzLnNlcGFyYXRvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVOb25EaWdpdHModmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNTdGFuZGFyZFBhdHRlcm4oY2FyZDogQ3JlZGl0Q2FyZCkge1xuICAgIHJldHVybiBjYXJkLnBhdHRlcm4udG9TdHJpbmcoKSA9PT0gdGhpcy5zdGFuZGFyZFBhdHRlcm4udG9TdHJpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNNYXRjaChtYXRjaDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG1hdGNoICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUN1cnJlbnRDYXJkTmFtZXMobmFtZTogc3RyaW5nLCBmdWxsTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jYXJkTmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jYXJkRnVsbE5hbWUgPSBmdWxsTmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZENhcmRCeU51bWJlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FyZFR5cGUgPSB0aGlzLmNhcmRzLmZpbmQoIChjYXJkKSA9PiB7XG4gICAgICByZXR1cm4gY2FyZC5yZS50ZXN0KHZhbHVlKTtcbiAgICB9KTtcblxuICAgIGlmICghY2FyZFR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRDYXJkO1xuICAgIH1cblxuICAgIHJldHVybiBjYXJkVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDYXJkcyhuZXdDYXJkczogQ3JlZGl0Q2FyZFtdKSB7XG4gICAgbmV3Q2FyZHMuZm9yRWFjaCggKGNhcmQpID0+IHtcbiAgICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcbiAgICB9KTtcbiAgfVxufVxuIl19