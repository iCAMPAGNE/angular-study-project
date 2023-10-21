import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
  currentPage: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentPage = this.router.url.split('/')[1];
  }

}
