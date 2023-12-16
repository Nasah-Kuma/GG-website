import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { CoreModule } from '../core.module';
import { TextInputComponent } from './components/text-input/text-input.component';
import { BookDemoFormComponent } from './components/book-demo-form/book-demo-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { BookDemoFormDetailsComponent } from './components/book-demo-form-details/book-demo-form-details.component';
import { RouterModule } from '@angular/router';


const components = [
  TextInputComponent,
  BookDemoFormComponent,
  NavBarComponent,
  FooterComponent,
  BookDemoFormDetailsComponent,
];

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    components,
    CoreModule
  ],
})
export class SharedModule { }
