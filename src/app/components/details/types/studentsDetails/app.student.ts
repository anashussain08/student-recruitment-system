import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { AuthService } from './../../../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

interface studentDetails{
    age?:number,
    collegeName:string,
    lastDegree:string,
    marksObtain?:number
}
@Component({
    selector:'student-details',
    templateUrl:'./app.student.html',
    styleUrls:['./app.student.css']
})
 
export class StudentDetails implements OnInit{
    desc:studentDetails;
    ngOnInit(){
        this.clearModel();
    }
     clearModel(){
        this.desc = {
            age:null,
            collegeName:'',
            lastDegree:'',
            marksObtain:null
        }
    }
    saveDetails(){
        this.clearModel();
    }
    cancel(){
        this.clearModel();
    }
}