import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostFormComponent } from "./post-form/post-form.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostDetailsComponent } from "./post-details/post-details.component";

const routes: Routes = [
    {
        path: '',
        component: PostsComponent,
        children: [
            {
                path:'add',
                component: PostFormComponent,
                pathMatch: 'full'
            },
            {
                path:':postId',
                component: PostDetailsComponent,
            },
            {
                path:'',
                component: PostsListComponent
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule { }