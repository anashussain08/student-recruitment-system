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
    jobs:any;
    companies:any;
    user:any;
    constructor(public authService:AuthService, public dataService:DataService){

    }
    ngOnInit(){
        this.getJobs();
        this.getCompanies();
    }
    getJobs(){
        this.dataService.getJobs()
        .then(data=>{
            this.jobs = data;
        })
        .catch(err=>err)
    }
    getCompanies(){
        this.dataService.getUsers()
        .then(data=>{
            this.getCompanyDetails(data);
        })
        .catch(err=>err)
    }
    getCompanyDetails(users){
         this.dataService.getCompanyDetails()
        .then(data=>{
            let da = this.filterUsers(users);
            this.companies= this.mergeStudentData(da,data);
        })
        .catch(err=>err);
    }
    filterUsers(users){
        return users.filter(item=>item.type == 'Company');
    }
    mergeStudentData(company,data){
        data.forEach((item,i)=>{
            item['email'] = company[i].email
        })
        return data;
    }
    apply(job){
        this.dataService.updateJobs(job,this.user.$key)
        .then(data=>{
            console.log('applied successfully!');
        })
        .catch(e=>e)
    }
}