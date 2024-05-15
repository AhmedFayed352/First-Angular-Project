import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @HostListener('window:scroll', ['$event'])
  onscroll(e:any){
    let navving = <HTMLElement>document.querySelector("nav");
    if(e.currentTarget.scrollY >= 100) {
      navving.classList.remove("py-4");
    } else {
      navving.classList.add("py-4");
    }
  }
}
