import { Component } from '@angular/core';
import {AuthorizationService} from './authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rentalsite';

  get isLoggedIn(){
    return this.authorizationService.isLoggedIn;
  }

  constructor(private authorizationService : AuthorizationService) { }

  onLogout() {
    this.authorizationService.logout().subscribe(() => {
    });
  }
}
