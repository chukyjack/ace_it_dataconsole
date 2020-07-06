import { Injectable } from '@angular/core';
import { isDocumentAvailable } from '@progress/kendo-angular-common';
import { domContainerFactory as containerFactory } from '../../util';
const div = containerFactory('div');
const ul = containerFactory('ul');
const li = containerFactory('li');
const listItem = () => li('<span>02</span>', 'k-item');
const ɵ0 = listItem;
const list = () => ul([listItem()], 'k-reset');
const ɵ1 = list;
const scrollable = () => (div([list()], 'k-time-container k-content k-scrollable'));
const ɵ2 = scrollable;
const timeListWrapper = () => {
    if (!isDocumentAvailable()) {
        return null;
    }
    return div([div([scrollable()], 'k-time-list')], 'k-time-list-wrapper', { left: '-10000px', position: 'absolute' });
};
const ɵ3 = timeListWrapper;
const TIMELIST_WRAPPER = timeListWrapper();
/**
 * @hidden
 */
export class DOMService {
    ensureHeights() {
        if (this.timeListHeight !== undefined) {
            return;
        }
        this.calculateHeights();
    }
    calculateHeights(container) {
        if (!isDocumentAvailable()) {
            return;
        }
        const listContainer = container && container.querySelector('.k-time-list-container');
        const hostContainer = listContainer || document.body;
        const wrapper = hostContainer.appendChild(TIMELIST_WRAPPER);
        this.timeListHeight = wrapper.querySelector('.k-scrollable').offsetHeight;
        this.itemHeight = wrapper.querySelector('li').offsetHeight;
        hostContainer.removeChild(wrapper);
    }
    isActive(element) {
        if (!isDocumentAvailable() || !element) {
            return false;
        }
        return (element.nativeElement || element) === document.activeElement;
    }
}
DOMService.decorators = [
    { type: Injectable },
];
export { ɵ0, ɵ1, ɵ2, ɵ3 };
