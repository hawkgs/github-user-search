import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../store/store';
import { loadUserData } from '../../../store/users';

@Component({
  selector: 'gus-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() user: User;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    if (!this.user.completeData) {
      this.store.dispatch(loadUserData({ username: this.user.username }));
    }
  }

  onClick() {
    console.log('goto', this.user.url);
  }
}
