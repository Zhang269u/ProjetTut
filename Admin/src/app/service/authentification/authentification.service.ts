import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private readonly mockedUser = new SignInData('alexy@gmail.com', 'test123');
  isAuthentificated = false;

  constructor(private router: Router) { }
  
  authentification(signInData : SignInData): boolean{
if(this.checkCredentials(signInData)){
  this.isAuthentificated = true;
  this.router.navigate(['home']);
  return true;
}
this.isAuthentificated = false;
return false;

 }
private checkCredentials(signInData: SignInData): boolean{
return this.checkEmail(signInData.getEmail()) && this.checkPsw(signInData.getPsw());
}
private checkEmail(email:string): boolean{
  return email === this.mockedUser.getEmail();
}
private checkPsw(psw:string): boolean{
return psw === this.mockedUser.getPsw();
}

logout(){
this.isAuthentificated = false;
this.router.navigate(['login']);

}
}
