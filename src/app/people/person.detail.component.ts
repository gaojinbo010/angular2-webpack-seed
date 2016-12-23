import { Component, Input } from '@angular/core';
import { Person } from '../../class/person';

@Component({
    selector: 'person-detail',
    template: `
        <div *ngIf="person">
            <h3>Here Details : </h3>
            <ul style="text-align:left">
                <li>{{person.id}}</li>
                <li>{{person.nick}}</li>
                <li>{{person.name}}</li>
                <li>{{person.age | currency}}</li>
            </ul>
            <div>
                <label>Name:</label>
                <input type="text" [(ngModel)]="person.name"  placeholder="name"/>
            </div>
        </div>`,
})
export class PersonDetailComponent {

    @Input()
    person: Person;

    constructor() {

        console.log('PersonDetailComponent constructor');
    }

    ngOnInit() {

        console.log('PersonDetailComponent ngOnInit');
    }
}