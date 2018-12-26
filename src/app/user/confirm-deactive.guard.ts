import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileComponent } from './profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDeactiveGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canDeactivate(target: ProfileComponent) {
    // if (target.hasChanges()) {
      // return window.confirm('Do you really want to cancel?');
    window.confirm('Do you really want to cancel?');
    // }
    return true;
  }
}
