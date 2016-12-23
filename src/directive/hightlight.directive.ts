import { Directive, ElementRef, Renderer,HostListener,Input } from '@angular/core';

@Directive({ 
    selector: '[highlight]' 
})
export class HighLightDirective{

    private _defaultColor='#cac39e';

    constructor(private renderer:Renderer,private el:ElementRef){

        console.log('hightlight Directive : ',el.nativeElement.tagName);
    }

    @Input()/* 一个setter函数 代替了默认颜色值 */
    set defaultColor(color:string){

        this._defaultColor=color || this._defaultColor;
    }

    @Input('highlight')/* 将highlight指令名作为highlightColor属性名的别名传入参数 */
    highlightColor:string;

    @HostListener('mouseenter') onMouseEnter(){

        this.setHightLightColor(this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave(){

        this.setHightLightColor(this._defaultColor);
    }

    private setHightLightColor(color:string){
        
        this.renderer.setElementStyle(this.el.nativeElement,'backgroundColor',color);
    }
}
