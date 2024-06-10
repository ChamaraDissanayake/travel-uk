import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { scrollToElementById } from '../../shared/utils/common-functions/scroll-function';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  @ViewChild('navbarNav') navbarNav!: ElementRef;

  constructor(){}

  ngOnInit(): void {
  }

  collapseNavbar() {
    const navbarNavElement = this.navbarNav.nativeElement;
    if (navbarNavElement.classList.contains('show')) {
      // If the navbar is expanded, collapse it
      navbarNavElement.classList.remove('show');
    }
  }
}
