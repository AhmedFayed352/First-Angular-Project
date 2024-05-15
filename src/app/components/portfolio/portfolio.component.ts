import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  clickedElement: any;
  container: any;
  imgSrc:any;
  photos: string[] = [
    "assets/images/port1.png",
    "assets/images/port2.png",
    "assets/images/port3.png",
    "assets/images/port1.png",
    "assets/images/port2.png",
    "assets/images/port3.png"
  ];
  showImages(e:any) {
    this.container = <HTMLElement> document.querySelector(".model");
    this.clickedElement = e.target.closest(".for-icon");
    if(this.clickedElement != null) {
      this.container.classList.replace("d-none", "d-flex");
      this.imgSrc = this.clickedElement.firstElementChild.getAttribute("src");
    }
  }
  hidePhoto(e:any) {
    if(e.target == e.currentTarget) {
      this.container.classList.replace("d-flex", "d-none");
    }
  }
}
