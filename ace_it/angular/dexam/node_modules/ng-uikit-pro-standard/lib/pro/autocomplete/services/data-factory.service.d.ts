import { HttpClient } from '@angular/common/http';
import { LocalData } from './local-data.service';
import { RemoteData } from './remote-data.service';
export declare function localDataFactory(): () => LocalData;
export declare function remoteDataFactory(http: HttpClient): () => RemoteData;
export declare let LocalDataFactoryProvider: {
    provide: typeof LocalData;
    useFactory: typeof localDataFactory;
};
export declare let RemoteDataFactoryProvider: {
    provide: typeof RemoteData;
    useFactory: typeof remoteDataFactory;
    deps: (typeof HttpClient)[];
};
