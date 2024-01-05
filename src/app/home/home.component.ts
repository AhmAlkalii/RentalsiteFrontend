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
    // Set initial background image and adjust the interval time
    this.showroomService.startBackgroundChangeInterval((url: string) => {
      this.backgroundImageUrl = url;
    }, 5000); 
  }
  

  ngOnDestroy() {
    // Unsubscribe from the interval to avoid memory leaks
    this.showroomService.stopBackgroundChangeInterval();
  }
}
