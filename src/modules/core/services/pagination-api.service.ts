import { Injectable }               from '@angular/core';
import { HttpClient }               from '@angular/common/http';
import { Observable }               from 'rxjs';
import { UsersPaginationInterface } from '../../../interfaces';
import { map }                      from 'rxjs/operators';

@Injectable()
export class PaginationApiService {

  constructor(private http: HttpClient) {
  }

  fetchPaginationInfo(): Observable<UsersPaginationInterface> {
    return this.http.get('https://reqres.in/api/users?page=1')
      .pipe(map( (response) => response as UsersPaginationInterface ));
  }
}
