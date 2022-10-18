import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<any>;

  constructor(private posts: PostsService, 
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

}
