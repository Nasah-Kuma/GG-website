import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showDropdown: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  toggleNavBar() {
    let element = document.querySelector('.page-header') as HTMLElement;
    window.pageYOffset > 50?element.classList.add('bg-current'):element.classList.remove('bg-current');
  }

}
