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
export class MdbCreditCardDirective {
    constructor() {
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
    /**
     * @return {?}
     */
    get additionalCards() { return this._additionalCards; }
    /**
     * @param {?} cards
     * @return {?}
     */
    set additionalCards(cards) {
        this._additionalCards = cards;
        this.addCards(cards);
    }
    /**
     * @return {?}
     */
    get separator() { return this._separator; }
    /**
     * @param {?} separator
     * @return {?}
     */
    set separator(separator) {
        this._separator = separator;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        this.formatInput(event);
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    formatInput(event) {
        /** @type {?} */
        const input = event.target.value;
        /** @type {?} */
        const formattedInput = this.getFormattedInput(input);
        event.target.value = formattedInput;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getFormattedInput(value) {
        value = this.removeNonDigits(value);
        /** @type {?} */
        const card = this.findCardByNumber(value);
        this.updateCurrentCardNames(card.name, card.fullName);
        /** @type {?} */
        let cardNumMaxLength;
        if (this.hasStandardPattern(card)) {
            /** @type {?} */
            const matches = value.match(card.pattern);
            if (matches === null) {
                return value;
            }
            cardNumMaxLength = card.maxLength + matches.length - 1;
            this.maxLength = cardNumMaxLength.toString();
            return matches.join(this.separator);
        }
        else {
            /** @type {?} */
            const results = card.pattern.exec(value);
            if (results === null) {
                return value;
            }
            results.shift();
            cardNumMaxLength = card.maxLength + results.length - 1;
            this.maxLength = cardNumMaxLength.toString();
            return results.filter(this.isMatch).join(this.separator);
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    removeNonDigits(value) {
        return value.replace(/\D/g, '');
    }
    /**
     * @private
     * @param {?} card
     * @return {?}
     */
    hasStandardPattern(card) {
        return card.pattern.toString() === this.standardPattern.toString();
    }
    /**
     * @private
     * @param {?} match
     * @return {?}
     */
    isMatch(match) {
        return match !== undefined;
    }
    /**
     * @private
     * @param {?} name
     * @param {?} fullName
     * @return {?}
     */
    updateCurrentCardNames(name, fullName) {
        this.cardName = name;
        this.cardFullName = fullName;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    findCardByNumber(value) {
        /** @type {?} */
        const cardType = this.cards.find((/**
         * @param {?} card
         * @return {?}
         */
        (card) => {
            return card.re.test(value);
        }));
        if (!cardType) {
            return this.defaultCard;
        }
        return cardType;
    }
    /**
     * @param {?} newCards
     * @return {?}
     */
    addCards(newCards) {
        newCards.forEach((/**
         * @param {?} card
         * @return {?}
         */
        (card) => {
            this.cards.push(card);
        }));
    }
}
MdbCreditCardDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbCreditCard]',
                exportAs: 'mdbCreditCard'
            },] }
];
/** @nocollapse */
MdbCreditCardDirective.ctorParameters = () => [];
MdbCreditCardDirective.propDecorators = {
    additionalCards: [{ type: Input }],
    separator: [{ type: Input }],
    maxLength: [{ type: HostBinding, args: ['attr.maxLength',] }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNyZWRpdC1jYXJkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1mb3JtYXQvbWRiLWNyZWRpdC1jYXJkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUU1RSxnQ0FPQzs7O0lBTkMsMEJBQWE7O0lBQ2IsOEJBQWlCOztJQUNqQix3QkFBVzs7SUFDWCw2QkFBZ0I7O0lBQ2hCLCtCQUFrQjs7SUFDbEIsK0JBQWtCOztBQU9wQixNQUFNLE9BQU8sc0JBQXNCO0lBZ0ZqQztRQS9FUSxvQkFBZSxHQUFHLFlBQVksQ0FBQztRQUkvQixnQkFBVyxHQUFlO1lBQ2hDLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixFQUFFLEVBQUUsVUFBVTtZQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtZQUM3QixTQUFTLEVBQUUsRUFBRTtZQUNiLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQztRQUVNLFVBQUssR0FBaUI7WUFDNUI7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLEVBQUUsRUFBRSxZQUFZO2dCQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQzdCLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEVBQUUsRUFBRSx1REFBdUQ7Z0JBQzNELE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDN0IsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNEO2dCQUNFLElBQUks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RixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDcEMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBcEtGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTthQUMxQjs7Ozs7OEJBa0VFLEtBQUs7d0JBUUwsS0FBSzt3QkFTTCxXQUFXLFNBQUMsZ0JBQWdCO3NCQUU1QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBbkZqQyxpREFBdUM7O0lBQ3ZDLDBDQUFpQjs7SUFDakIsOENBQXFCOzs7OztJQUVyQiw2Q0FPRTs7Ozs7SUFFRix1Q0FpREU7Ozs7O0lBUUYsa0RBQXVDOzs7OztJQU92Qyw0Q0FBeUI7O0lBSXpCLDJDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDcmVkaXRDYXJkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICByZTogUmVnRXhwO1xuICBwYXR0ZXJuOiBSZWdFeHA7XG4gIG1heExlbmd0aDogbnVtYmVyO1xuICBjdnZMZW5ndGg6IG51bWJlcjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYkNyZWRpdENhcmRdJyxcbiAgZXhwb3J0QXM6ICdtZGJDcmVkaXRDYXJkJ1xufSlcbmV4cG9ydCBjbGFzcyBNZGJDcmVkaXRDYXJkRGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBzdGFuZGFyZFBhdHRlcm4gPSAvKFxcZHsxLDR9KS9nO1xuICBjYXJkTmFtZTogc3RyaW5nO1xuICBjYXJkRnVsbE5hbWU6IHN0cmluZztcblxuICBwcml2YXRlIGRlZmF1bHRDYXJkOiBDcmVkaXRDYXJkID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIGZ1bGxOYW1lOiAnJyxcbiAgICByZTogL1xcZHswLDE2fS8sXG4gICAgcGF0dGVybjogdGhpcy5zdGFuZGFyZFBhdHRlcm4sXG4gICAgbWF4TGVuZ3RoOiAxOSxcbiAgICBjdnZMZW5ndGg6IDNcbiAgfTtcblxuICBwcml2YXRlIGNhcmRzOiBDcmVkaXRDYXJkW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ3Zpc2EnLFxuICAgICAgZnVsbE5hbWU6ICdWaXNhJyxcbiAgICAgIHJlOiAvXjRcXGR7MCwxNX0vLFxuICAgICAgcGF0dGVybjogdGhpcy5zdGFuZGFyZFBhdHRlcm4sXG4gICAgICBtYXhMZW5ndGg6IDE2LFxuICAgICAgY3Z2TGVuZ3RoOiAzXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnbWFzdGVyY2FyZCcsXG4gICAgICBmdWxsTmFtZTogJ01hc3RlcmNhcmQnLFxuICAgICAgcmU6IC9eKDVbMS01XVxcZHswLDJ9fDIyWzItOV1cXGR7MCwxfXwyWzMtN11cXGR7MCwyfSlcXGR7MCwxMn0vLFxuICAgICAgcGF0dGVybjogdGhpcy5zdGFuZGFyZFBhdHRlcm4sXG4gICAgICBtYXhMZW5ndGg6IDE2LFxuICAgICAgY3Z2TGVuZ3RoOiAzXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnYW1leCcsXG4gICAgICBmdWxsTmFtZTogJ0FtZXJpY2FuIEV4cHJlc3MnLFxuICAgICAgcmU6IC9eM1s0N11cXGR7MCwxM30vLFxuICAgICAgcGF0dGVybjogLyhcXGR7MSw0fSkoXFxkezEsNn0pPyhcXGR7MSw1fSk/LyxcbiAgICAgIG1heExlbmd0aDogMTUsXG4gICAgICBjdnZMZW5ndGg6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdqY2InLFxuICAgICAgZnVsbE5hbWU6ICdKQ0InLFxuICAgICAgcmU6IC9eKD86MzVcXGR7MCwyfSlcXGR7MCwxMn0vLFxuICAgICAgcGF0dGVybjogdGhpcy5zdGFuZGFyZFBhdHRlcm4sXG4gICAgICBtYXhMZW5ndGg6IDE5LFxuICAgICAgY3Z2TGVuZ3RoOiAzXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGlzY292ZXInLFxuICAgICAgZnVsbE5hbWU6ICdEaXNjb3ZlcicsXG4gICAgICByZTogL14oPzo2MDExfDY1XFxkezAsMn18NjRbNC05XVxcZD8pXFxkezAsMTJ9LyxcbiAgICAgIHBhdHRlcm46IHRoaXMuc3RhbmRhcmRQYXR0ZXJuLFxuICAgICAgbWF4TGVuZ3RoOiAxOSxcbiAgICAgIGN2dkxlbmd0aDogM1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2RpbmVycy1jbHViJyxcbiAgICAgIGZ1bGxOYW1lOiAnRGluZXJzIENsdWInLFxuICAgICAgcmU6IC9eMyg/OjAoWzAtNV18OSl8WzY4OV1cXGQ/KVxcZHswLDExfS8sXG4gICAgICBwYXR0ZXJuOiAvKFxcZHsxLDR9KShcXGR7MSw1fSk/KFxcZHsxLDR9KT8vLFxuICAgICAgbWF4TGVuZ3RoOiAxOSxcbiAgICAgIGN2dkxlbmd0aDogM1xuICAgIH1cbiAgXTtcblxuICBASW5wdXQoKVxuICBnZXQgYWRkaXRpb25hbENhcmRzKCkgeyByZXR1cm4gdGhpcy5fYWRkaXRpb25hbENhcmRzOyB9XG4gIHNldCBhZGRpdGlvbmFsQ2FyZHMoY2FyZHM6IENyZWRpdENhcmRbXSkge1xuICAgIHRoaXMuX2FkZGl0aW9uYWxDYXJkcyA9IGNhcmRzO1xuICAgIHRoaXMuYWRkQ2FyZHMoY2FyZHMpO1xuICB9XG4gIHByaXZhdGUgX2FkZGl0aW9uYWxDYXJkczogQ3JlZGl0Q2FyZFtdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzZXBhcmF0b3IoKSB7IHJldHVybiB0aGlzLl9zZXBhcmF0b3I7IH1cbiAgc2V0IHNlcGFyYXRvcihzZXBhcmF0b3I6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcGFyYXRvciA9IHNlcGFyYXRvcjtcbiAgfVxuICBwcml2YXRlIF9zZXBhcmF0b3IgPSAnICc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5tYXhMZW5ndGgnKSBtYXhMZW5ndGg6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIG9uSW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZm9ybWF0SW5wdXQoZXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRJbnB1dChldmVudDogYW55KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgZm9ybWF0dGVkSW5wdXQgPSB0aGlzLmdldEZvcm1hdHRlZElucHV0KGlucHV0KTtcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9ybWF0dGVkSW5wdXQodmFsdWU6IHN0cmluZykge1xuICAgIHZhbHVlID0gdGhpcy5yZW1vdmVOb25EaWdpdHModmFsdWUpO1xuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmZpbmRDYXJkQnlOdW1iZXIodmFsdWUpO1xuXG4gICAgdGhpcy51cGRhdGVDdXJyZW50Q2FyZE5hbWVzKGNhcmQubmFtZSwgY2FyZC5mdWxsTmFtZSk7XG5cbiAgICBsZXQgY2FyZE51bU1heExlbmd0aDogbnVtYmVyO1xuXG4gICAgaWYgKHRoaXMuaGFzU3RhbmRhcmRQYXR0ZXJuKGNhcmQpKSB7XG4gICAgICBjb25zdCBtYXRjaGVzOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHZhbHVlLm1hdGNoKGNhcmQucGF0dGVybik7XG5cbiAgICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgY2FyZE51bU1heExlbmd0aCA9IGNhcmQubWF4TGVuZ3RoICsgbWF0Y2hlcy5sZW5ndGggLSAxO1xuICAgICAgdGhpcy5tYXhMZW5ndGggPSBjYXJkTnVtTWF4TGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gbWF0Y2hlcy5qb2luKHRoaXMuc2VwYXJhdG9yKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHRzOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gY2FyZC5wYXR0ZXJuLmV4ZWModmFsdWUpO1xuXG4gICAgICBpZiAocmVzdWx0cyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXN1bHRzLnNoaWZ0KCk7XG4gICAgICBjYXJkTnVtTWF4TGVuZ3RoID0gY2FyZC5tYXhMZW5ndGggKyByZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgICB0aGlzLm1heExlbmd0aCA9IGNhcmROdW1NYXhMZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiByZXN1bHRzLmZpbHRlcih0aGlzLmlzTWF0Y2gpLmpvaW4odGhpcy5zZXBhcmF0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTm9uRGlnaXRzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzU3RhbmRhcmRQYXR0ZXJuKGNhcmQ6IENyZWRpdENhcmQpIHtcbiAgICByZXR1cm4gY2FyZC5wYXR0ZXJuLnRvU3RyaW5nKCkgPT09IHRoaXMuc3RhbmRhcmRQYXR0ZXJuLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIGlzTWF0Y2gobWF0Y2g6IHN0cmluZykge1xuICAgIHJldHVybiBtYXRjaCAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDdXJyZW50Q2FyZE5hbWVzKG5hbWU6IHN0cmluZywgZnVsbE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuY2FyZE5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY2FyZEZ1bGxOYW1lID0gZnVsbE5hbWU7XG4gIH1cblxuICBwcml2YXRlIGZpbmRDYXJkQnlOdW1iZXIodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNhcmRUeXBlID0gdGhpcy5jYXJkcy5maW5kKCAoY2FyZCkgPT4ge1xuICAgICAgcmV0dXJuIGNhcmQucmUudGVzdCh2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWNhcmRUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q2FyZDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FyZFR5cGU7XG4gIH1cblxuICBwdWJsaWMgYWRkQ2FyZHMobmV3Q2FyZHM6IENyZWRpdENhcmRbXSkge1xuICAgIG5ld0NhcmRzLmZvckVhY2goIChjYXJkKSA9PiB7XG4gICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==