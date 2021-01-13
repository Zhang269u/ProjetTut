import { Component } from '@angular/core';
import { AuthentificationService } from './service/authentification/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myimage:string = "assets/img/wall.jpg";
  constructor(public authentificationService: AuthentificationService){

  }
  signin(){
    var config ={
        
    }
  };

  
  logout(){
    this.authentificationService.logout();
  }

}
