import { Component, Input } from '@angular/core';
import { UserInterface }            from '../../../../interfaces';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent {

  @Input() user: UserInterface;

}
