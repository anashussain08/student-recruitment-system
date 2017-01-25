import { Component } from '@angular/core';

@Component({
    selector:'login',
    templateUrl:'./app.login.html',
    styleUrls:['./app.login.css']
})

export class Login{
    types:any = ['Student','Company','Admin'];

}