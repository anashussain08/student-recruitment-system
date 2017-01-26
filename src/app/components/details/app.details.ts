import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs/Observable';
//import {CompanyDetails}  from './studentsDetails/app.student';
import {CompanyDetails}  from './types/companyDetails/app.company';
import {StudentDetails}  from './types/studentsDetails/app.student';
import * as firebase from 'firebase';

@Component({
    selector:'fillDetails',
    templateUrl:'./app.details.html',
    styleUrls:['./app.details.css']
   // directives:[CompanyDetails,StudentDetails]
})

export class fillDetails implements OnInit{
    desc:any;
    user:any;
    constructor(public authService:AuthService){

    }
    ngOnInit(){
        this.user = this.authService.User;
        console.log(`${this.user.type} from details`)
    }
   

}