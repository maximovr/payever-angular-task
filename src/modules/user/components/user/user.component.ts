import { Component }      from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface }  from '../../../../interfaces';
import { ApiService }     from '../../../core/services';
import { Observable }     from 'rxjs';

@Component({
  selector   : 'app-user',
  templateUrl: './user.component.html',
  styleUrls  : ['./user.component.css']
})
export class UserComponent {

  public user: Observable<UserInterface> =
           this.apiService.fetchUserById(this.activatedRoute.snapshot.params['id']);

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {
  }
}
