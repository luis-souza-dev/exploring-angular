import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './services/posts.service';
import { CardModule } from 'src/app/layout/card/card.module';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ButtonModule } from 'src/app/layout/button/button.module'
import { PostTagsDirective } from 'src/app/shared/directives/post-tag.directive';
import { CardDirective } from 'src/app/shared/directives/card.directive';

@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostFormComponent,
    PostDetailsComponent,
    PostTagsDirective,
    CardDirective
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
  ],
  exports: [
    PostFormComponent
  ],
  providers:[
    PostsService,
  ]
})
export class PostsModule { }
