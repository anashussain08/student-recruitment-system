import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { AuthService } from './../../../../services/auth.service';
import { DataService } from './../../../../services/data.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';


@Component({
    selector:'company-dashboard',
    templateUrl:'./app.companyDashboard.html',
    styleUrls:['./app.companyDashboard.css']
})

export class CompanyDashboard implements OnInit{
    desc:any;
    user:any;
    success:boolean = false;
    spinner:boolean = false;
    students:any;
    studentDetails:any;
    jobs:any;
    constructor(public authService:AuthService, public dataService:DataService){

    }
    ngOnInit(){
        this.user = this.authService.User;
        this.clearModel();
        this.getStudents();
        this.getJobs();
    }
    clearModel(){
         this.desc = {
            experience:null,
            salary:null,
            description:'',
        }
    }
    postJob(){
        this.spinner = !0;
        let _details = {};
        [].concat(this.desc,this.user).forEach(obj=>{
            Object.keys(obj).forEach(item=>{
                _details[item] = obj[item];
            })
        });
        this.dataService.postJob(_details)
        .then(data=>{
            this.spinner = false;
            this.clearModel();
            this.success = !0;
            setTimeout(()=>{this.success = false},9000);
        })
        .catch(e=>{
            this.spinner = false;
            this.clearModel();
            this.success = false;
            console.log(e);
        })
    }
    getStudents(){
        this.dataService.getUsers()
        .then(data=>{
            this.getStudentDetails(data);
        })
        .catch(err=>err)
    }
    getStudentDetails(users){
        this.dataService.getStudentDetails()
        .then(data=>{
            let da = this.filterUsers(users);
            this.students= this.mergeStudentData(da,data);
        })
        .catch(err=>err);
    }
    getJobs(){
        this.dataService.getJobs()
        .then(data=>{
            this.jobs = this.filterJobs(data);
        })
        .catch(err=>err)
    }
    filterJobs(jobs){
        return jobs.filter(item=>item.$key == this.user.$key)
    }
    filterUsers(users){
        return users.filter(item=>item.type == 'Student');
    }
    mergeStudentData(student,data){
        data.forEach((item,i)=>{
            item['email'] = student[i].email
        })
        return data;
    }
    cancel(){
        this.clearModel();
    }
}