import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() out='yellow';
  @Input() in='red';
  @HostBinding('style.background') bg=this.out;
  constructor() { }
  @HostListener('mouseenter') enter()
  {
     this.bg=this.in;
  }

  @HostListener('mouseleave') leave()
  {
     this.bg=this.out;
  }

}
