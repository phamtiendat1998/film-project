import { Component, OnInit, Input } from '@angular/core';
import { Phim } from '../../Model/Phim';

@Component({
  selector: 'app-item-phim-search',
  templateUrl: './item-phim-search.component.html',
  styleUrls: ['./item-phim-search.component.css']
})
export class ItemPhimSearchComponent implements OnInit {
  @Input() film: Phim;
  constructor() { }

  ngOnInit() {

  }
}
