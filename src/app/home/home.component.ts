// home.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeshowroomService } from '../homeshowroom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Initial background image URL
  backgroundImageUrl = "/assets/images/bg1.jpg";

  constructor(private showroomService: HomeshowroomService) {}

  ngOnInit() {
    // Start the background image change interval
    this.showroomService.startBackgroundChangeInterval((url: string) => {
      this.backgroundImageUrl = url;
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the interval to avoid memory leaks
    this.showroomService.stopBackgroundChangeInterval();
  }
}
