import { Component, OnInit } from '@angular/core';

import { IImage } from '../../models/iimage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageUrls: (string | IImage)[] = [
    { url: 'assets/images/slideshow/slide-1.jpg', caption: 'lorem pixel 1' },
    { url: 'assets/images/slideshow/slide-2.jpg', caption: 'lorem pixel 2' },
    { url: 'assets/images/slideshow/slide-3.jpg', caption: 'lorem pixel 3' },
    { url: 'assets/images/slideshow/slide-4.jpg', caption: 'lorem pixel 4' },
    { url: 'assets/images/slideshow/slide-5.jpg', caption: 'lorem pixel 5' }
    // { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg', caption: 'The first slide', href: '#config' },
    // { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg', clickAction: () => alert('custom click function') },
    // { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg', caption: 'Apple TV', href: 'https://www.apple.com/' },
    // 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg',
    // { url: 'assets/kitties.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];

  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
