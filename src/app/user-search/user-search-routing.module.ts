import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent } from './user-search.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ResultsListComponent } from './results-list/results-list.component';


const routes: Routes = [{
  path: '',
  component: UserSearchComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    component: SearchInputComponent
  }, {
    path: 'search',
    component: ResultsListComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSearchRoutingModule { }
