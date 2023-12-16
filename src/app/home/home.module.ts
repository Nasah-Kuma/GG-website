import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './components/home-page/home-page.component';
import {RouterModule, Routes} from "@angular/router";
import {CarouselComponent} from './components/carousel/carousel.component';
import { ProductsComponent } from './components/products/products.component';
import {SharedModule} from "../shared/shared.module";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { NewsNUpdatesComponent } from './components/news-n-updates/news-n-updates.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
]

@NgModule({
  declarations: [
    HomePageComponent,
    CarouselComponent,
    ProductsComponent,
    AboutUsComponent,
    OurTeamComponent,
    NewsNUpdatesComponent,
    NewsItemComponent,
    PartnersComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
