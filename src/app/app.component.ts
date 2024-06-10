import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavbarComponent
  ]
})
export class AppComponent {
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('content') content!: ElementRef;

  constructor() {}

}
