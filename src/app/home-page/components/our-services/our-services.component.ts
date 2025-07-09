import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {

  ngAfterViewInit(): void {
    const galleryItems = document.querySelectorAll<HTMLDivElement>('.images-gallery-container > div');

    galleryItems.forEach(div => {
      const span = Math.floor(Math.random() * 2) + 1;
      div.style.setProperty('--row-span', span.toString());
    });
  }

}
