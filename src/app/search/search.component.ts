import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchItem: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (param['searchItem']) this.searchItem = param['searchItem'];
    });
  }
  search(): void {
    if (this.searchItem)
      this.router.navigateByUrl('/search/' + this.searchItem);
  }
}
