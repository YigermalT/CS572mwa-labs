import {Directive, ElementRef, HostBinding, Input, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[isVisible]'
})

export class AppIsVisibleDirective implements OnInit{
  // @HostBinding('style.visibility') display;
  @Input('isVisible') isVisibleTF;
  constructor(private element: ElementRef, private  renderer2: Renderer2) {
    console.log(this.isVisibleTF);
}
  ngOnInit(): void {
    console.log(this.isVisibleTF);
    this.element.nativeElement.style.visibility = this.isVisibleTF ? 'visible' : 'hidden';
    this.renderer2.setStyle(this.element.nativeElement, 'font-size', '68px');
  }
}

