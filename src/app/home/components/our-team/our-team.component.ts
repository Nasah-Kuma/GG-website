import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent {

  ourTeamList = [
    {
      name: 'Michael A G Boyo',
      position: 'General Manager',
      imageUrl: 'assets/img/mboyo.png',
    },
    {
      name: 'Lewis C Ngwa',
      position: 'Administrative Manager',
      imageUrl: 'assets/img/mlewis.jpg',
    },
    {
      name: 'Tanko Edward T.',
      position: 'Technical Manager',
      imageUrl: 'assets/img/meddy.png',
    },
    {
      name: 'Nde D. Nguti, Phd',
      position: 'Fiance Manager',
      imageUrl: 'assets/img/dnguti.png',
    }
  ]
}