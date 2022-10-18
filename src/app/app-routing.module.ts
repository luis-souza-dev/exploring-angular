import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './layout/main-view/main-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
        {
            path: 'posts',
            loadChildren: () =>
                import('./pages/posts/posts.module').then((m) => m.PostsModule),
        },
        {
            path: 'users',
            loadChildren: () =>
                import('./pages/users/users.module').then((m) => m.UsersModule),
        },
    ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
