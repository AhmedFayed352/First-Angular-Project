import { HomeComponent } from './components/home/home.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: "", component: HomeComponent,title: "home", pathMatch: "full"},
  {path: "home", component:HomeComponent,title: "home"},
  {path: "about", component: AboutComponent, title: "about"},
  {path: "portfolio", component: PortfolioComponent, title: "portfolio"},
  {path: "contact", component: ContactComponent, title: "contact"},
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
