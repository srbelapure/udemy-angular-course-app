import { Directive, HostBinding, HostListener,ElementRef } from '@angular/core';
//This Directive is used to open/close dropdown list
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  /**
  //This host listner opens/closes dropdown only when user clicks on the particular button
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
  //constructor() { }
 */

  /**
   * dropdown can also be closed by a click anywhere outside 
   * (which also means that a click on one dropdown closes any other one.)
   */

   @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}

}
