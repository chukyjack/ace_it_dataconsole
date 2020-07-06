import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
// import { TweetsStore, TweetsState } from './tweets.store';
// import { Tweet } from './tweet.model';
import {Gig} from "./gig.model";
import {GigsState, GigsStore} from "./gigs.store";

@Injectable({
    providedIn: 'root'
})
export class GigsQuery extends QueryEntity<GigsState, Gig> {

    constructor(protected store: GigsStore) {
        super(store);
    }

    getHasMore() {
        return this.getValue().hasMore;
    }

    getPage() {
        return this.getValue().page;
    }
    // setPage() {
    //     return this.getValue().page;
    // }

}
