import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2'; 
import { MaterialModule } from '@angular/material';

import { AppRouter} from './app-route-module';
import { AppComponent } from './app.component';
import { SignUp } from './components/signup/app.signup';
import { Login } from './components/login/app.login';

  // Initialize Firebase
  export const  firebaseConfig = {
    apiKey: "AIzaSyBjQof35bMx0Puhybe-Hz76vvRE-xfpUWU",
    authDomain: "student-recruitment-system.firebaseapp.com",
    databaseURL: "https://student-recruitment-system.firebaseio.com",
    storageBucket: "student-recruitment-system.appspot.com",
    messagingSenderId: "93736633058"
  };


@NgModule({
  declarations: [
    AppComponent,
    SignUp,
    Login
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
