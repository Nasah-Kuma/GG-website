import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts = [
    {
      "id": "94c323c6-3386-4388-8682-3df83530b6a7",
      "title": "Go-Groups Ltd Holds Second Open Day event",
      "author": "Tadbet Averra Fai Tina",
      "category": "Open day",
      "date": "June 24, 2021",
      "cover": "/assets/img/gg-open-day.jpg",
      "summary": "Under the theme “Building Scalable IT Solutions for an Emerging Cameroon”",
      "sections": [
        {
          "content": "On Sunday the 20th of June 2021, a mass of students from diverse universities in the city of Buea, IT enthusiasts and the general public, gathered to interact with Go-Groups Ltd interns and employees at Etta Palace Hotel at what was one of the biggest Open Day Tech event to happen in the Buea Silicon Mountain community in over a year."
        },
        {
          "content": null,
          "image": {
            "caption": null,
            "title": "GG Open Day 2021",
            "url": null
          }
        },
        {
          "content": "Each year, the Go-Groups Ltd Open Day is held in an open venue with emphasis on enlightening attendees on our company culture, technologies, recruitment and apprenticeships. As a SaaS company, our open day is curated for our community, meaning we shape the content around the people in the room. Our ethos is that everybody present should have a clear oversight about everything we do."
        },
        {
          "content": null,
          "image": {
            "caption": "Assistant technical manager, Arrey Obiasong, talking to attendees about Go-Groups company",
            "title": "GG Open Day 2021",
            "url": null
          }
        },
        {
          "content": "Under the theme “Building Scalable IT Solutions for an Emerging Cameroon”, this second edition of the Go-Groups (fondly called GG) Open day offered guests opportunities to discuss with our speakers the best practice in IT, purpose-driven Go-Groups strategies to accelerate the positive impact of technology in Cameroon and also forging connections to guide aspiring software developers into impactful careers. Equally, attendees were able to ask a vast range of questions to enhance their knowledge of the company and help them with future applications like that of the summer school."
        },
        {
          "content": null,
          "image": {
            "caption": "Intern",
            "title": "GG Open Day 2021",
            "url": "/assets/img/intern.jpg"
          }
        },
        {
          "content": "Atem Oma, participant at the Open Day found the event particularly fascinating. “I have been hearing a lot about Go-Groups but didn’t have the chance to discuss on a one-on-one basis with their developers until today. I use the Go-Student app to pay all my fees in the university of Buea, register for my courses and many others from anywhere i find myself. So it was really great to see the technical people behind the Go-Student service”"
        },
        {
          "content": "In addition to the Open Day which is intended to forge relations between the Tech company and its public, Go-Groups Ltd also organizes a three months free summer school in software development to support students at all stages of their coding journey."
        },
        {
          "content": "In addition to the Open Day which is intended to forge relations between the Tech company and its public, Go-Groups Ltd also organizes a three months free summer school in software development to support students at all stages of their coding journey."
        },
        {
          "content": "Founded by Mr Michael Boyo and co-founded by Mr Lewis Che, Mr Edward Tanko and Dr Nguti, Go-Groups Ltd has over the years trained a multitude of software engineers in Frontend, Backend and DevOps thanks to the summer school."
        },
        {
          "content": null,
          "image": {
            "caption": "Go-Groups Ltd staff and interns",
            "title": "GG Open Day 2021",
            "url": null
          }
        },
        {
          "content": "“We are building for the long term” says Dr Nguti, Go-Groups Ltd co-founder.  “Most of our trainees stay in contact with us and some can become consultants for GG. That way we can satisfy our customers quickly because we can draw from a large pool of skilled developers who may not be working directly in GG” he further explained."
        },
        {
          "content": "It is important to note that the GG Summer School is part of GG corporate social responsibility. This free training program is our unique way of giving back to the community, showing how grateful we are to them for embracing the company’s services especially Go-Student. “Our mission with the summer school is to nurture a developer ecosystem expertise that society can draw from and will contribute to the growth of innovation and tech start up in Cameroon."
        },
        {
          "content": "The technology stack for this training is totally open source technology. They are community tools and not GG tools per se.” emphasized Dr Nguti."
        },
        {
          "content": "Thanks to all participants, this year’s open day was one to remember. The company’s staff found pleasure in putting hands on deck to make the event a successful one. As we wait for the next edition promising to be even greater, Be On The Go!"
        }
      ]
    },
    {
      "id": "94c323c6-3386-4388-8662-3df83530b6a7",
      "title": "Presentation of Go-Student to University of Bamenda",
      "author": "Lewis",
      "category": "News",
      "cover": "/assets/img/univbamenda.jpg",
      "date": "June 19, 2017",
      "sections": [
        {
          "content": null,
          "title": null,
          "image": {
            "caption": null,
            "title": "Presenting the functionalities of Go-Student to University of Bamenda officials!",
            "url": "/assets/img/univbamenda.jpg"
          }
        }
      ]
    },
    {
      "id": "94c323c6-3386-4388-8682-3df83530b6a4",
      "title": "PHEIs Training Session in Bamenda",
      "author": "Lewis",
      "category": "News",
      "date": "June 19, 2017",
      "cover": "/assets/img/pheis.jpg",
      "sections": [
        {
          "content": null,
          "title": null,
          "image": {
            "caption": null,
            "title": "Training Private Higher Educational Institutions (PHEIs) in Bamenda. NPB, BUST and St. Louis answered present!",
            "url": "/assets/img/pheis.jpg"
          }
        }
      ]
    }
  ]

  constructor() { }

  getPosts(): Observable<any[]> {
    return of(this.posts);
  }

  getPost(id: string): Observable<any> {
    return of(this.posts.find(post => post.id === id)|| this.posts[0])
  }
}
