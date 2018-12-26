import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { ApiService, ENDPOINT } from '../../service/api.service';

@Injectable({
  providedIn: "root"
})
export class ProfileResolve implements Resolve<any> {
  constructor(
    private api: ApiService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.api.get(ENDPOINT.profiles).pipe(
      delay(1000),
      map(data => data.profile)
    );
  }
}
