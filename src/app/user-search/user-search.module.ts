import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSearchRoutingModule } from './user-search-routing.module';
import { UserSearchComponent } from './user-search.component';
import { HeaderComponent } from './header/header.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { UserProfileComponent } from './results-list/user-profile/user-profile.component';
import { PagesComponent } from './results-list/pages/pages.component';
import { LoaderComponent } from './results-list/loader/loader.component';


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
    UserSearchRoutingModule
  ]
})
export class UserSearchModule { }
