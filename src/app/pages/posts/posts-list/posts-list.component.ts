import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { ButtonTypes } from 'src/app/shared/enums';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts$: Observable<any>;

  stringTeste = 'teste';

  buttonTypes = ButtonTypes

  constructor(private posts: PostsService, 
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.posts$ = this.posts.getPosts();
  }

  navigation(postId){
    this.router.navigate([`posts/${postId}`])
  }

  openForm(){
    this.router.navigate([`posts/add`])
  }
}
