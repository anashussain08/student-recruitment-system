import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { AuthService } from './../../../../services/auth.service';
import { DataService } from './../../../../services/data.service';
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
    user:any;
    constructor(public authService:AuthService,public dataService:DataService, public router:Router){

    }
    ngOnInit(){
        this.user = this.authService.User;
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
        let _details = {};
        [].concat(this.desc,this.user).forEach(obj=>{
            Object.keys(obj).forEach(item=>{
                _details[item] = obj[item];
            })
        })
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