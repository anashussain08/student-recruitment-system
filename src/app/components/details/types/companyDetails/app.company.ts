import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { AuthService } from './../../../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

interface companyDetails{
    since?:any,
    totalEmplyees?:number,
    industry:string,
    manefesto:string
}
@Component({
    selector:'company-details',
    templateUrl:'./app.company.html',
    styleUrls:['./app.company.css']
})

export class CompanyDetails implements OnInit{
    desc:companyDetails;
    constructor(public authService:AuthService){

    }
    ngOnInit(){
        this.clearModel();
    }
    clearModel(){
            this.desc = {
            since:null,
            totalEmplyees:null,
            industry:'',
            manefesto:''
        }
    }
    saveDetails(){
        this.clearModel();
        
    }
    cancel(){
        this.clearModel();
    }
}