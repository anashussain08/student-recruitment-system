import { Component,OnInit } from '@angular/core';
import { user } from './model';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
    selector:'login',
    templateUrl:'./app.login.html',
    styleUrls:['./app.login.css']
})

export class Login implements OnInit{
    types:any = ['Student','Company','Admin'];
    model:user;

    constructor(){

    }
    ngOnInit(){
        this.model = {
            email:'',
            password:'',
            type:''
        }
    }
    cancel(){
        this.model = {
            email:'',
            password:'',
            type:''
        }
    }
    onLogin(){
        console.log(`${this.model.password} ${this.model.email} ${this.model.type}`);
        this.model = {
            email:'',
            password:'',
            type:''
        }
    }
}