import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "./service/authentification/authentification.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Admin';
  isAuth = false;
  isDisplay = false;
  // tslint:disable-next-line:typedef

  constructor(private authentificationService: AuthentificationService,
              private router: Router) {
    this.isAuth = this.authentificationService.isAuthentificated;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.isAuth = this.authentificationService.isAuthentificated;
  }

  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }
}

