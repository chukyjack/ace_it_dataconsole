import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HTTPListener, HTTPStatus} from "./interceptor.service";

const RxJS_Services = [HTTPListener, HTTPStatus];

//I keep the new line
@NgModule({
    declarations: [AppComponent, FilterPipe],
    imports: [
        BrowserModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,

        AppRoutingModule,

        DateInputsModule,
        MatProgressSpinnerModule
    ],
    providers: [
        ...RxJS_Services,
        {
        provide: HTTP_INTERCEPTORS,
        useClass: HTTPListener,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
