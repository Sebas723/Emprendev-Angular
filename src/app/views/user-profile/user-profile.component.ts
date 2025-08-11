import { Component } from '@angular/core';

//componentes
import { NavigationSidebarComponent } from '../../shared/components/navigation-sidebar/navigation-sidebar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserUpdateFormComponent } from './components/user-update-form/user-update-form.component';

@Component({
  selector: 'app-user-profile',
  imports: [
    NavigationSidebarComponent,
    UserInfoComponent,
    UserUpdateFormComponent
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
