import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Person } from '../../class/person';

@Injectable()
export class HttpService {

    private rootPath: string = 'http';

    constructor(private http: Http) {
        
    }

    getWithObservable(api: string) {

        return this.http.get(this.rootPath+api)
                        .map((resp: Response) => resp.json().data);
    }

    getWidthPromise(api:string){

        return this.http.get(this.rootPath+api)
                        .toPromise()
                        .then((resp)=>resp.json().data as Person[])
                        .catch((error)=>console.log('Error : ',error));
    }

    post(api: string, body: Object) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let obj = JSON.stringify(body);

        return this.http.post(this.rootPath + api, obj, headers)
                        // .map((resp: Response) => resp.json());
                        .toPromise()
                        .then(res => res.json().data)
                        // .catch(()=>{ console.log('HttpService post Error ~!!!');});
    }

}