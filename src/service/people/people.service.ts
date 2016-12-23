import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { Person } from '../../class/person';

@Injectable()
export default class PeopleService {

    constructor(private http: HttpService) {

    }

    //1.获取数据集合Observable写法
    getPeople(): Observable<Person[]> {

        return this.http.getWithObservable('/people')
                        .catch((error: any) => {

                            return Observable.throw(error.message || error);
                        });
    }

    //2.获取数据集合Promie写法
    searchPeople():Promise<Person[]>{

        return this.http.getWidthPromise('/people');
    }

    //3.由获取Promise结果取得指定ID数据
    infoDetail(id:number):Promise<Person>{

        return this.searchPeople().then(people=>people.find(p=>p.id==id));
    }



}