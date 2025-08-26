import { Component } from '@angular/core';

//components
import { NewUsersGraphComponent } from '../../components/admin-graphs/new-users-graph/new-users-graph.component';
import { UsersGraphComponent } from '../../components/admin-graphs/users-graph/users-graph.component';
import { TopMipymeGraphComponent } from "../../components/admin-graphs/top-mipyme-graph/top-mipyme-graph.component";
import { OfferGraphComponent } from "../../components/admin-graphs/offer-graph/offer-graph.component";

@Component({
  selector: 'app-graph-container',
  imports: [
    NewUsersGraphComponent,
    UsersGraphComponent,
    TopMipymeGraphComponent,
    OfferGraphComponent
  ],
  templateUrl: './graph-container.component.html',
  styleUrl: './graph-container.component.css'
})
export class GraphContainerComponent {

}
