import { Component } from '@angular/core';
import {BookDemoService} from "../../../shared/services/book-demo.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: any[] = [
    {
      name: 'GoStudent',
      website: 'https://go-student.net',
      description: 'Go-student is the leading school management application, trusted by millions of users and faithfully recommended by our clients like the university of Buea.',
      logo: '/assets/img/gostudent.jpg',
      categories: [
        'education', 'school management'
      ]
    },
    {
      name: 'GoWaka',
      website: 'https://mygowaka.com',
      description: 'A bus reservation platform, giving users the possibility to book for journeys from anywhwere with the agency of their choice. Go-waka also helps agencies manage their activities.',
      logo: '/assets/img/gowaka.png',
      categories: [
        'transport'
      ]
    },
    {
      name: 'GoJobs',
      website: 'https://mygojobs.com',
      description: 'Platform for jobseekers and employees. Thousands of jobs available each week, including remote jobs.',
      logo: '/assets/img/gojobs.jpeg',
      categories: [
        'job search', 'resume builder'
      ]
    },
    {
      name: 'GoSuccess',
      website: 'https://mygosuccess.com',
      description: 'Learning platform for students preparing for national exams. We have a bank of questions and answers, and we help students have the best learning experience.',
      logo: '/assets/img/gosuccess.png',
      categories: [
        'question bank', 'education'
      ]
    },
    {
      name: 'GoSupportMe',
      website: 'https://mygosupport.com',
      description: 'The leading fund-raising platform in Africa. Permits users to raise funds for any event.',
      logo: '/assets/img/gosupportme.svg',
      categories: [
        'crowdfunding', 'fundraising'
      ]
    }
  ]

  constructor(private _demo: BookDemoService) {
  }

  book(): void {
    this._demo.toggleVisibility(true);
  }
}
