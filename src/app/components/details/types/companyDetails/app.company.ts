import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { AuthService } from './../../../../services/auth.service';
import { DataService } from './../../../../services/data.service';
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
    user:any;
    constructor(public authService:AuthService,public dataService:DataService, public router:Router){

    }
    ngOnInit(){
        this.user = this.authService.User;
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
        let _details = {};
        [].concat(this.desc,this.user).forEach(obj=>{
            Object.keys(obj).forEach(item=>{
                _details[item] = obj[item];
            })
        });
        this.dataService.fillDetails(_details)
        .then(data=>{
            this.router.navigate(['/dashboard']);
        })
        .catch(err=>console.log(err));
        this.clearModel();
        
    }
    cancel(){
        this.clearModel();
    }
}