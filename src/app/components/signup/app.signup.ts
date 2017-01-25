import { Component, OnInit } from '@angular/core';
import { ValidUser } from './user';
import { Router } from '@angular/router';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
    selector:'signup',
    templateUrl:'./app.signup.html',
    styleUrls:['./app.signup.css']
})

export class SignUp implements OnInit{
    types:any = ['Student','Company'];
    model:ValidUser;
    userStream$;
    constructor(public af: AngularFire, public router:Router){
        
    }
    ngOnInit(){
        this.clearModel();
    }
    clearModel(){
        this.model = {
            email:'',
            username:'',
            password:'',
            type:''
        }
    }
    onSignUp(){
        this.createUserAf()
        .then(data=>{
            console.log(`user created! ${data}`);
            //this.af.auth.login();
        })
        .catch(err=>console.log(err));
        this.clearModel();
    }
    createUserAf(){
        return new Promise((resolve,reject)=>{
            this.af.auth.createUser(this.model)
            .then(data=>{
                console.log('in sample func')
                resolve(data)})
            .catch(err=>reject(err))
        });
        //this.userStream$.fromPromise(promise);
        
    }
}