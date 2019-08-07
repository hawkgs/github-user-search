import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gus-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  searchString: string;

  constructor(private router: Router) { }

  onSearch() {
    const queryParams = this.searchString
      .split(' ')
      .map((param: string) => {
        const paramArr = param.trim().split(':');
        if (paramArr.length === 1) {
          return { param: 'username', value: paramArr[0] };
        }
        return { param: paramArr[0], value: paramArr[1] };
      })
      .reduce((obj: any, { param, value }: any) => {
        obj[param] = value;
        return obj;
      }, {});

    queryParams.page = 1;

    this.router.navigate(['/search'], { queryParams });
  }
}
