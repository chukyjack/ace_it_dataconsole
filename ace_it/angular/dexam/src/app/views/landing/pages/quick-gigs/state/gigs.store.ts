import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import {Gig} from "./gig.model";

export interface GigsState extends EntityState<Gig> {
    hasMore: boolean;
    page: number;
}

const initialState: GigsState = {
    hasMore: true,
    page: 1
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'gigs', resettable: true })
export class GigsStore extends EntityStore<GigsState, Gig> {

    constructor() {
        super(initialState);
    }

    updatePage(page: { hasMore: boolean, page: number }) {
        this.update(page);
    }

}
