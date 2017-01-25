import { Component, OnInit } from '@angular/core';
import { ValidUser } from './user';

@Component({
    selector:'signup',
    templateUrl:'./app.signup.html',
    styleUrls:['./app.signup.css']
})

export class SignUp implements OnInit{
    types:any = ['Student','Company'];
    model:ValidUser;
    
    constructor(){
        
    }
    ngOnInit(){
        this.model = {
            email:'',
            username:'',
            password:'',
            type:''
        }
    }
    onSignUp(){
        console.log(`${this.model.password} ${this.model.type}`);
        this.model = {
            email:'',
            username:'',
            password:'',
            type:''
        }
    }
}