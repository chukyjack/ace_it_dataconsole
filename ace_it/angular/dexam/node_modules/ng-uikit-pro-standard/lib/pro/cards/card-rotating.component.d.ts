import { EventEmitter } from '@angular/core';
export declare class CardRotatingComponent {
    rotate: boolean;
    ANIMATION_TRANSITION_TIME: number;
    animationStart: EventEmitter<any>;
    animationEnd: EventEmitter<any>;
    toggle(): void;
}
