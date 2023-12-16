import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{

  constructor(private posts: PostsService, private router: Router, private activatedRoute: ActivatedRoute) {}

  blog: any = null;

  ngOnInit(): void {
      this.activatedRoute.paramMap.pipe(
        switchMap((p: ParamMap) => {
          return this.posts.getPost(p.get('id')!);
        })
      ).subscribe(response => {
        this.blog = response;
        console.log(this.blog);
        
      })
  }

}

