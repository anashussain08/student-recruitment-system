import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ValidUser } from './../components/signup/user';
import { user } from './../components/login/model';
import * as firebase from 'firebase';
import { AppState } from './../model/app.state';

@Injectable()

export class DataService{
    
    
    constructor(public af: AngularFire, public router:Router, public store:Store<AppState>){

    }
    fillDetails(details:any){
        return new Promise((resolve,reject)=>{
            if(details.type == 'Student'){
                 this.fillUserDetails(details)
                 .then(data=>{resolve(data)})
                 .catch(err=>{reject(err)});
            }else{
                this.fillCompanyDetails(details)
                .then(data=>{resolve(data)})
                .catch(err=>{reject(err)});
            }
        })
        
    }
    fillUserDetails(details:any){
        return new Promise((resolve,reject)=>{
                let _details = {
                age: details.age,
                collegeName: details.collegeName,
                lastDegree: details.lastDegree,
                marksObtain:details.marksObtain,
                updatedAt: firebase.database.ServerValue.TIMESTAMP
             };
            let userNode = this.af.database.object('/details/'+details.$key);
            userNode.set(_details)
            .then(
                data=>{
                    resolve({});
            })
            .catch(err=>reject(err));
         })
    }
     fillCompanyDetails(details:any){
        return new Promise((resolve,reject)=>{
                let _details = {
                since: details.since,
                totalEmployees: details.totalEmployees,
                industry: details.industry,
                manefesto:details.manefesto,
                createdAt: firebase.database.ServerValue.TIMESTAMP
             };
            let userNode = this.af.database.object('/details/'+details.$key);
            userNode.set(_details)
            .then(
                data=>{
                    resolve({});
            })
            .catch(err=>reject(err));
         })
    }
}