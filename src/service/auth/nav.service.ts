import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import UserAuthService from './user.service';

@Injectable()
export default class NavigateAuthService implements CanActivate {

    constructor(private uaService: UserAuthService, private router: Router) {

    }


    checkLogin(): boolean {

        return this.uaService.isLoggidIn;
    }

    canActivate():boolean {

        console.log('canActive called');
        return this.checkLogin();
    }
}