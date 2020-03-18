import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Creative Engineers';
  showSlideshow = true;

  onToggleSlideShow() {
    this.showSlideshow = !this.showSlideshow;
  }
}
