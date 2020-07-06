import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpclient: HttpClient) { }

  postGig(data) {
    const endpoint = 'api/v1/gig/';
    return this.httpclient.post(endpoint, data);
    // .map(() => true)
    // .catch((e) => console.log(e));
  }

  postFile(fileToUpload: File) {
    const endpoint = 'api/v1/gig_file/';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.httpclient.post(endpoint, formData);
        // .map(() => true)
        // .catch((e) => console.log(e));
  }
}
