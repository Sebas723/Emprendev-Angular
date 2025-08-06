import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {

  galleryImages = [
    { src: 'images/gallery1.jpg', rowSpan: 2 },
    { src: 'images/gallery1.jpg', rowSpan: 1 },
    { src: 'images/gallery2.jfif', rowSpan: 1 },
    { src: 'images/gallery3.jpg', rowSpan: 2 },
    { src: 'images/gallery3.jpg', rowSpan: 1 },
    { src: 'images/gallery4.jpg', rowSpan: 1 },
    { src: 'images/gallery5.png', rowSpan: 2 },
    { src: 'images/gallery6.jfif', rowSpan: 1 },
    { src: 'images/gallery6.jfif', rowSpan: 2 },
    { src: 'images/gallery6.jfif', rowSpan: 1 },
    { src: 'images/gallery3.jpg', rowSpan: 2 },
];

  ngAfterViewInit(): void {
    const galleryItems = document.querySelectorAll<HTMLDivElement>('.images-gallery-container > div');

    galleryItems.forEach(div => {
      const span = Math.floor(Math.random() * 2) + 1;
      div.style.setProperty('--row-span', span.toString());
    });
  }

}
