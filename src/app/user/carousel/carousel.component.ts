import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let heightSC = $(window).height();
    // $('.carousel-item').css({ 'height': heightSC + 'px' });
    $(window).scroll(function () {
      let wScroll = $(this).scrollTop();
      $('#carouselExampleIndicators').css('opacity', 1 - wScroll / 500)
    })
  }
}
