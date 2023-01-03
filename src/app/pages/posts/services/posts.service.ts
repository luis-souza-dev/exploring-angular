import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { filter, map, Observable, take } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Post[]>{
    return this.httpClient.get('https://dummyjson.com/posts')
    .pipe(map((data:any) => (data.posts as Post[]).slice(0, 10)));
  }

  getPost(id: string): Observable<Post>{
    return this.httpClient.get<Post>(`https://dummyjson.com/posts/${id}`)
  }
}
