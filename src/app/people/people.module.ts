import { NgModule, Directive } from '@angular/core';
import { routing } from './people.routing';
import { PeopleComponent } from './people.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonDetailComponent } from './person.detail.component';
import PeopleService from '../../service/people/people.service';
import { HighLightDirective } from '../../directive/hightlight.directive';
import { UpperPricePipe } from '../../pipe/upper-price.pipe';

/* 带有@NgModule装饰函数的类称为模块 */
@NgModule({
    imports: [
        FormsModule, /* 使用双向绑定时需要引入FormsModule */
        CommonModule,/* 需要在AppModule中引入BrowserModule  在子组件中引入CommonModule */
        routing
    ],
    declarations: [
        /* 用到的组件 */
        PeopleComponent,
        PersonDetailComponent,

        /* 高亮显示指令 */
        HighLightDirective,

        /* 自定义管道 */
        UpperPricePipe
    ],
    providers:[PeopleService]
})
export class PeopleModule { }