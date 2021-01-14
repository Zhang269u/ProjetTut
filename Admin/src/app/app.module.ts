import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './User/new-user/new-user.component';
import { OfferComponent } from './offer/offer.component';
import { NewOfferComponent } from './Offer/new-offer/new-offer.component';
import { ThematicComponent } from './thematic/thematic.component';
import { NewThematicComponent } from './Thematic/new-thematic/new-thematic.component';
import {AuthGuard} from "./service/authentification/auth-guard.service";

const appRoutes: Routes = [
  {path : '' ,  component : UserComponent},
  {path : 'User', component : UserComponent},
  {path : 'User/new' , component : NewUserComponent},
  {path: 'login', component: LoginComponent},
  {path : 'Offer', component : OfferComponent},
  {path : 'Offer/new', component : NewOfferComponent},
  {path : 'Thematic/new', component : NewThematicComponent},
  {path : 'Thematic', component : ThematicComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    NewUserComponent,
    OfferComponent,
    NewOfferComponent,
    ThematicComponent,
    NewThematicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
