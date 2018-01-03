import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class UserDirective {

@HostBinding('class.hovered') isHowered = false;

@HostListener('mouseenter') onMouseEnter() {
  this.isHowered = true;
}

@HostListener('mouseleave') onMouseLeave() {
  this.isHowered = false;
}

}
