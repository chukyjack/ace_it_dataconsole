// import faker from 'faker';
import {Observable, timer} from 'rxjs';
import { mapTo } from 'rxjs/operators';
import {GigData} from "./gig.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import axios from "axios";

export const gGigs = function() {
    let dat;
    axios.get('/api/v1/gig')
        .then((response) => {
            dat = response.data;
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    return dat;
};
const count = 30;
const data = gGigs();

// getData() {
//     axios.get('/api/v1/gig')
//         .then((response) => response.data)
//         .then(gigData => {
//             console.log('gigData');
//             data = gigData;
//             console.log(data);
//         } )
//         .catch((error) => {
//             console.log(error);
//         });
// }


// export class GigsGetDaTa {
//
// }


// for (let i = 0; i < count; i++) {
//     data.push({
//         id: i,
//         username: 'faker.name.findName()',
//         text: 'faker.lorem.sentence()'
//     });
// }

export function getData(params = { page: 1 } ) {
    const perPage = 10;
    const offset = (params.page - 1) * perPage;
    const paginatedItems = data.slice(offset, offset + perPage);
    const hasMore = offset + perPage !== data.length;
    console.log('data from data file');
    console.log(data);
    console.log('data from data file');

    return {
        currentPage: params.page,
        hasMore,
        perPage: perPage,
        total: data.length,
        lastPage: Math.ceil(data.length / perPage),
        data: paginatedItems
    };
}

export const getGigs = function(params?) {
    return timer(1000).pipe(mapTo(getData(params)));
};


// export
//
