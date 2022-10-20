import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  maestros: string[];
  public ruta = '';


  constructor(private authService: AuthService,  private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    var isAuthenticated = this.authService.getAuthStatus();



    window.scroll(0, 0);

    if (!isAuthenticated) {
      this.router.navigate(['/'])
      return !isAuthenticated;
    }

    //console.log(this.getResolvedUrl(route))
    return isAuthenticated;
  }

  private existsPermission(permission: any, route: ActivatedRouteSnapshot): boolean {
    if (route.routeConfig.path.toLocaleUpperCase() === permission.toUpperCase()) {
      return true;
    }
    return false;
  }

  private getResolvedUrl(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot
      .map(v => v.url.map(segment => segment.toString()).join('/'))
      .join('/');
  }

  private getConfiguredUrl(route: ActivatedRouteSnapshot): string {
    return '/' + route.pathFromRoot
      .filter(v => v.routeConfig)
      .map(v => v.routeConfig!.path)
      .join('/');
  }

}
