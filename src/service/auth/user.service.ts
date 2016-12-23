import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export default class UserAuthService {

    isLoggidIn: boolean = false;

    login(): Observable<boolean> {

        return Observable.of(true).delay(1000).do(v => this.isLoggidIn = true);
    }

    logout(): void {

        this.isLoggidIn = false;
    }
}