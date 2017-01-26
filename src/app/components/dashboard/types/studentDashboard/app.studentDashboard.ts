import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { AuthService } from './../../../../services/auth.service';
import { DataService } from './../../../../services/data.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';


@Component({
    selector:'student-dashboard',
    templateUrl:'./app.studentDashboard.html',
    styleUrls:['./app.studentDashboard.css']
})

export class StudentDashboard implements OnInit{

    ngOnInit(){

    }
}