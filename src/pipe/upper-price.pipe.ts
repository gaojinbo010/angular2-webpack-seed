import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'upperPrice',
    pure:true /* 默认为纯管道 */
})
export class UpperPricePipe implements PipeTransform{

    /*  纯管道只有在检测到输入值发生了纯变更时才会执行
        纯变更是指对原始类型值的更改或对对象应用的更改
     */
    transform(value:number):string{

        return '¥'+value.toFixed(2);
    }
}