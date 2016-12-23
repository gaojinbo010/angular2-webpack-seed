import { Component, Input,HostBinding, trigger, state, style, transition, animate } from '@angular/core';
import { Person } from '../../class/person';
// import { PersonDetailComponent } from './person-detail.component';
import PeopleService from '../../service/people/people.service';


@Component({
    selector: 'poeple',
    // template:`<style></style> <h1>people</h1>`,// OK 模板内联样式
    // template:require('./people.component.html'),// OK
    templateUrl: './people.component.html',
    // styles:['h1{color:#000;}'] // OK 元数据中的样式
    // styles:[require('./people.component.scss')] // OK
    styleUrls: ['./people.component.css'],//元数据中的样式表URL
    animations: [
        trigger('personState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            // transition('inactive => active', animate('100ms ease-in')),
            // transition('active => inactive', animate('1000ms ease-out'))
            transition('inactive<=>active',animate('500ms ease-in')),/* 点击切换状态动画 */
            transition('void=>inactive',[style({ transform:'translateX(-100%) scale(1)' }),animate('300ms ease-in')])
        ]),
        trigger('routeAnimation',[
            state('*',style({ opacity:1,transform:'translate(0)' })),
            transition(':enter',[style({opacity:0,transform:'translateX(-100%)'}),animate('0.2s ease-in')]),
            transition(':leave',[animate('0.5s ease-out',style({opacity:0,transform:'translateX(100%)'}))])
        ])
    ]
})
export class PeopleComponent {

    @Input()
    public persons: Array<Person> = [];
    public currentPerson: Person;

    constructor(private peopleService: PeopleService) {

        console.log('PeopleComponent Loaded !!!');
        this.peopleService.getPeople().subscribe(data => this.persons = data)
    }

    @HostBinding('@routeAnimation')
    get routeAnimation(){

        return true;
    }

    @HostBinding('style.display')
    get display(){

        return 'block';
    }

    @HostBinding('style.position')
    get position(){

        return 'absolute';
    }

    remove(id: number) {

        console.log('remove:', id);
        this.persons = this.persons.filter((item) => item['id'] != id);
    }

    info(id: number) {

        console.log('info:', id);
        this.peopleService.infoDetail(id).then(person => {

            console.log('person with promise', person);
            this.currentPerson = person;
        });
    }

    toggleState(p:Person){
        this.persons.map(person=>{
           if(person==p) 
                p.state=p.state=="active"?"inactive":"active";
            else
                person.state="inactive";
        });
        
    }

}