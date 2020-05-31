import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'marsh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'marsh';
  shadow = 'dark';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (this.router.url === '/home') {
        this.shadow = 'dark';
      } else {
        this.shadow = 'light';
      }
    });
  }
}
