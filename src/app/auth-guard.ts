/*
 * Mobiera SAS
 * Autor: Ivan Ricardo Peña Sierra
 * Created Date :  03/08/2017
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CanActivate} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate() {

        if (localStorage.getItem('user')) {
            return true;
        } else {
            this.router.navigate(['admin']);
            return false;

        }
    }



}
