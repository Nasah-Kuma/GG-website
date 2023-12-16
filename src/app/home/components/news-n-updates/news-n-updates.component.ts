import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-news-n-updates',
  templateUrl: './news-n-updates.component.html',
  styleUrls: ['./news-n-updates.component.scss']
})
export class NewsNUpdatesComponent implements OnInit {

  items: any[] = []

  constructor(private posts: PostsService) {}

  ngOnInit() {
    this.posts.getPosts().subscribe(response => this.items = response)
  }
}
