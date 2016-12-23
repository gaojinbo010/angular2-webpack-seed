import { Component, OnInit } from '@angular/core';

console.log('.............load......login..component');

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {
     
     constructor(){

         console.log('LoginComponent Loaded !!!');
     }

     ngOnInit(){

     }
}