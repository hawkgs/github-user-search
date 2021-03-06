import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { UserSearchRoutingModule } from './user-search-routing.module';
import { UserSearchComponent } from './user-search.component';
import { HeaderComponent } from './header/header.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { UserProfileComponent } from './results-list/user-profile/user-profile.component';
import { PagesComponent } from './results-list/pages/pages.component';
import { LoaderComponent } from './results-list/loader/loader.component';
import { UsersApiRequests } from '../api/users.api-requests';
import { UsersEffects } from '../store/users';
import { PagesEffects } from '../store/pages';


@NgModule({
  declarations: [
    UserSearchComponent,
    HeaderComponent,
    SearchInputComponent,
    ResultsListComponent,
    UserProfileComponent,
    PagesComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserSearchRoutingModule,
    EffectsModule.forFeature([
      UsersEffects,
      PagesEffects
    ])
  ],
  providers: [UsersApiRequests]
})
export class UserSearchModule { }
