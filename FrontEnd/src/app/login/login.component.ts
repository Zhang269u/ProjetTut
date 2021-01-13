import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
import { AuthentificationService } from '../service/authentification/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
  }
  
  onSubmit(signInForm: NgForm) {
    console.log(signInForm.value);
    const signInData = new SignInData(signInForm.value.email, signInForm.value.psw);
    this.authentificationService.authentification(signInData);
  }
}
