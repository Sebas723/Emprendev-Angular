import { Component } from '@angular/core';

//Interfaces
import { HomeInfoCard } from '../../../../interfaces/HomeInfoCards';

@Component({
  selector: 'app-about-us-section',
  imports: [],
  templateUrl: './about-us-section.component.html',
  styleUrl: './about-us-section.component.css'
})
export class AboutUsSectionComponent {
  aboutUsCards: HomeInfoCard[] = [
    { id: 1, image: 'pi pi-code', title: '¿Que es Emprendev?', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident porro blanditiis! Dicta ex fugit porro, aliquid reiciendis modi non deleniti, quisquam, dolorumaut amet veritatis odio quas!   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident porro blanditiis! Dicta ex fugit porro, aliquid reiciendis modi non deleniti, quisquam, dolorumaut amet veritatis odio quas!'},
    { id: 2, image: 'pi pi-code', title: '¿Por que se creo Emprendev?', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident porro blanditiis! Dicta ex fugit porro, aliquid reiciendis modi non deleniti, quisquam, dolorumaut amet veritatis odio quas!   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident porro blanditiis! Dicta ex fugit porro, aliquid reiciendis modi non deleniti, quisquam, dolorumaut amet veritatis odio quas!'}
  ]

  ourUsersCards: HomeInfoCard[] = [
    { id: 1, image: 'pi pi-building', title: 'Mipymes', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident porro blanditiis! Dicta ex fugit porro, aliquid reiciendis modi non deleniti, quisquam, dolorumaut amet veritatis odio quas!   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident porro blanditiis! Dicta ex fugit porro, aliquid reiciendis modi non deleniti, quisquam, dolorumaut amet veritatis odio quas!'},
    { id: 2, image: 'pi pi-code', title: 'Desarrolladores', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident porro blanditiis! Dicta ex fugit porro, aliquid reiciendis modi non deleniti, quisquam, dolorumaut amet veritatis odio quas!   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident porro blanditiis! Dicta ex fugit porro, aliquid reiciendis modi non deleniti, quisquam, dolorumaut amet veritatis odio quas!'}
  ]

  ourDiferencesCards: HomeInfoCard[] = [
    { id: 1, image: 'pi pi-building', title: 'Presencia de Mipymes', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident porro blanditiis! Dicta ex fugit porro, aliquid reiciendis modi non deleniti, quisquam, dolorumaut amet veritatis odio quas!'},
    { id: 2, image: 'pi pi-code', title: 'Desarrolladores', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident porro blanditiis! Dicta ex fugit porro, aliquid reiciendis modi non deleniti, quisquam, dolorumaut amet veritatis odio quas!'},
    { id: 3, image: 'pi pi-code', title: 'Desarrolladores', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident porro blanditiis! Dicta ex fugit porro, aliquid reiciendis modi non deleniti, quisquam, dolorumaut amet veritatis odio quas!'}
  ]

  ourProcessCards: HomeInfoCard[] = [
    { id: 1, image: 'pi pi-code', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident' },
    { id: 2, image: 'pi pi-code', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident' },
    { id: 3, image: 'pi pi-code', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident' },
    { id: 4, image: 'pi pi-code', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quas repellat provident' },
  ]
}
