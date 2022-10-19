import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() path: string = '';

  isRouteActive$: Observable<boolean>;

  constructor(private activedRoute: ActivatedRoute, private Router: Router) { }

  ngOnInit(): void {
    this.isRouteActive$ = this.Router.events.pipe(filter(event => event instanceof NavigationEnd), map((event: NavigationEnd)=> event.url === this.path));
  }

  navigate(){
    this.Router.navigate([this.path])
  }
}
