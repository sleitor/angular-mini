import {Component, Input} from '@angular/core';

@Component ({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.scss'],
})

export class UserComponent {
  @Input() user;
  click = false;

  Onclick() {
    this.click = true;
  }
}