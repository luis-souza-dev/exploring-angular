import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postId: string;
  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private postsService: PostsService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(({postId, teste}) => this.postId = postId)

    this.postsService.getPost(this.postId).subscribe(data => console.log(data));
  }

  goBack(){
    this.router.navigate(['posts'])
  }

}
