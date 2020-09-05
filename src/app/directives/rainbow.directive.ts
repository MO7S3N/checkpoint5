import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @HostBinding('style.color') color;
  @HostBinding('style.bordercolor') bc;
  generaterandomcolor():string
  {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  constructor() { }
  @HostListener('keyup') changecolor()
  {

    this.bc=this.generaterandomcolor();
    this.color=this.generaterandomcolor();

  }
}
