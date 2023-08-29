import { Component , ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const btn = this.elementRef.nativeElement.querySelector('button.sidebar-open');
    const menu = this.elementRef.nativeElement.querySelector('.menu-resposive');
    const buttonOpen = this.elementRef.nativeElement.querySelector('.btn-open');
    const buttonClose = this.elementRef.nativeElement.querySelector('.btn-close');
    const buttonMenu = this.elementRef.nativeElement.querySelector('button.search-menu');
    const formSearch = this.elementRef.nativeElement.querySelector('.search-form');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      formSearch.classList.add('hidden');
      buttonOpen.classList.toggle('hidden');
      buttonClose.classList.toggle('hidden');
    });

    buttonMenu.addEventListener('click', () => {
      formSearch.classList.toggle('hidden');
    });
  }
  
  
}
