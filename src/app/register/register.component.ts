import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Person } from '../../class/person';
import PeopleService from '../../service/people/people.service';

@Component({
    selector:'register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']
})
export class RegisterComponent{
    regForm:FormGroup;
    person:Person;

    constructor(private formBuilder:FormBuilder,private personService:PeopleService){

        console.log('constructor of RegisterComponent !!!');
    }

    ngOnInit(){

        console.log('ngOnInit of RegisterComponent !!!');
        this.regForm=this.formBuilder.group({
            name:['',Validators.required],
            nick:['',Validators.required],
            age:['',Validators.required],
            state:['',Validators.required]
        });
    }

    validate():boolean{

        console.log(this.regForm.valid);

        return this.regForm.valid;
    }

    save(){
        console.log(this.regForm);
        if(this.validate()){

            console.log('OK valid is ture !!!');
            this.person=this.regForm.value;
            console.log(this.person);
            this.person.id=Math.ceil(Math.random()*1000);;
            this.personService.savePeson(this.person)//.then((e)=>{ console.log(e); })
        }else{

            console.log('no validated !! returned from [save] method !!');
        }
    }

}
