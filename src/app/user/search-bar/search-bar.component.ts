import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public status: boolean = false;
  constructor() { }
  ngOnInit() {
  }
  moDivSearch() {
    if (this.status === false) {
      this.status = true;
    } else {
      this.status = false;
    }
  }
}
