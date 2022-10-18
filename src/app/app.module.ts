import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsModule } from './pages/posts/posts.module';
import { UsersModule } from './pages/users/users.module';
import { ButtonComponent } from './layout/button/button.component';
import { CardComponent } from './layout/card/card.component';
import { MainViewComponent } from './layout/main-view/main-view.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    UsersModule
  ],
  providers: [],
  exports: [
    MainViewComponent,
  ]
})
export class AppModule { }
