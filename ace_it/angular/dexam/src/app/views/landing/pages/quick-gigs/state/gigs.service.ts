import { Injectable } from '@angular/core';
// import { TweetsStore } from './tweets.store';
// import { getTweets } from '../tweets.data';
import {getData, getGigs} from './gigs.data';
import { transaction } from '@datorama/akita';
import {GigsStore} from "./gigs.store";
import {Observable, Subject, timer} from "rxjs";
import {Gig, GigData} from "./gig.model";
import {HttpClient} from "@angular/common/http";
import {mapTo} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class GigsService {
    public realGigs = [];
    public page = {
        hasMore: true,
        nextPage: 1
    };
    // public hasMore = true;
    // public nextPage = 1;
    public isLoading;
    constructor(private gigsStore: GigsStore, private http: HttpClient) {
        // this.getMyData();
    }

    get(data, page: number) {
        console.log('new gigs gotten');
        console.log(data);
        this.isLoading = true;
        this.getGigs(data, { page }).subscribe(res => this.updateGigs(res));
        return this.realGigs;
    }

    @transaction()
    private updateGigs(res) {
        const nextPage = res.currentPage + 1;
        this.realGigs.push(...res.data);
        this.updatePage({ hasMore: res.hasMore, nextPage: nextPage });
        this.gigsStore.setLoading(false);
        // console.log('total gigs');
        // console.log('total gigs');
        // console.log(this.realGigs);
    }

    reset() {
        console.log(this.gigsStore);
        this.gigsStore.reset();
    }
    list(): Observable<GigData> {
        // TODO: send the message _after_ fetching the sessions
        return this.http.get<GigData>('/api/v1/gig');
    }
    acceptGig(data) {
        // TODO: send the message _after_ fetching the sessions
        return this.http.post('/api/v1/gig/accept_gig/', data);
    }
    getGigs (data, params?) {
        return timer(1000).pipe(mapTo(this.getData(data, params)));
    }
    getData(data, params = { page: 1 } ) {
        const perPage = 10;
        const offset = (params.page - 1) * perPage;
        const paginatedItems = data.slice(offset, offset + perPage);
        const hasMore = offset + perPage < data.length;
        console.log('data from data file');
        console.log(data);
        console.log('data from data file');
        console.log(paginatedItems);

        return {
            currentPage: params.page,
            hasMore,
            perPage: perPage,
            total: data.length,
            lastPage: Math.ceil(data.length / perPage),
            data: paginatedItems
        };
    }

    updatePage(page: { hasMore: boolean, nextPage: number }) {
        this.page.hasMore = page.hasMore;
        this.page.nextPage = page.nextPage;
    }
}
