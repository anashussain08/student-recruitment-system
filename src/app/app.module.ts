import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2'; 
import { MaterialModule } from '@angular/material';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";

import { reducer } from './store/app.store';
import { AppRouter} from './app-route-module';
import { AppComponent } from './app.component';
import { SignUp } from './components/signup/app.signup';
import { Login } from './components/login/app.login';
import { Dashboard } from './components/dashboard/app.dashboard';
import { fillDetails } from './components/details/app.details';
import { CompanyDetails } from './components/details/types/companyDetails/app.company';
import { StudentDetails } from './components/details/types/studentsDetails/app.student';

import { AuthService } from './services/auth.service';

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
    Login,
    Dashboard,
    fillDetails,
    CompanyDetails,
    StudentDetails
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducer)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
