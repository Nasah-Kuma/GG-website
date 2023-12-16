import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partners = [
    {
      name: 'MTN Cameroon',
      logo: '/assets/img/mtn.png',
      website: 'http://mtn.cm'
    },
    {
      name: 'Orange Cameroon',
      logo: '/assets/img/orange.jpg',
      website: 'http://orange.cm'
    },
    {
      name: 'United Bank of Africa',
      logo: '/assets/img/uba.jpg',
      website: 'http://ubacameroon.com'
    }
  ]
}
