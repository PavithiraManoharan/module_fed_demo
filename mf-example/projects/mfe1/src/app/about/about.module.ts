import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ABOUT_ROUTES } from './about.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ABOUT_ROUTES)
  ]
})
export class AboutModule { }
