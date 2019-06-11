import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../../interfaces';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['avatar', 'first_name', 'last_name', 'email'];
  userList: any[] = [];
  pagesCount: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(
      map(data => data.users)
    )
      .subscribe((users: UserInterface[]) => {
        this.userList = users;
      });

    this.activatedRoute.data.pipe(
      map(data => data.paginationInfo)
    )
      .subscribe(paginationInfo => {
        this.pagesCount = paginationInfo.total;
      })
  }

  pageChanged(event: PageEvent): void {
    let page: number = event.pageIndex + 1;
    this.router.navigate(['./'], { queryParams: { page } });
  }

  userSelected(user: UserInterface): void {
    console.log(user);
    this.router.navigate(['./user', user.id]);
  }
}
