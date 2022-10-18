import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { filter, map, take } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(){
    return this.httpClient.get('https://dummyjson.com/posts')
    .pipe(map((data:any) => (data.posts as []).slice(0, 10)));
  }

  getPost(id: string){
    return this.httpClient.get(`https://dummyjson.com/posts/${id}`)
  }
}
