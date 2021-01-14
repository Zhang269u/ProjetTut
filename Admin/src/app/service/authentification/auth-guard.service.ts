import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Inject, Injectable} from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {Observable} from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthentificationService,
              private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isAuthentificated){
        return true;
      }
      else {
        this.router.navigate(['/login']);
      }
  }
}
