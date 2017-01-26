import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { AuthService } from './../../../../services/auth.service';
import { DataService } from './../../../../services/data.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';


@Component({
    selector:'company-dashboard',
    templateUrl:'./app.companyDashboard.html',
    styleUrls:['./app.companyDashboard.css']
})

export class CompanyDashboard implements OnInit{

    ngOnInit(){

    }
}