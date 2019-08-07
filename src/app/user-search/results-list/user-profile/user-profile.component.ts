import { Component, Input, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { DOCUMENT } from '@angular/common';
import { User } from '../../../store/store';
import { loadUserData } from '../../../store/users';

@Component({
  selector: 'gus-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() user: User;

  constructor(
    private store: Store<any>,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {
    if (!this.user.completeData) {
      this.store.dispatch(loadUserData({ username: this.user.username }));
    }
  }

  onClick() {
    this.document.location.href = this.user.url;
  }
}
