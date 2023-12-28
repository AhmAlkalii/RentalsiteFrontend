// homeshowroom.service.ts
import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeshowroomService {
  private backgroundChangeInterval!: Subscription;
  private currentIndex = 0;
  private imageUrls = [
    "/assets/images/bg1.jpg",
    "https://png.pngtree.com/background/20230412/original/pngtree-car-showroom-lighting-effect-advertising-background-picture-image_2401286.jpg",
    "https://www.topgear.com/sites/default/files/images/news-article/2020/11/86d1c7742a1e093a83487debca97eecd/20c0535_179.jpg",
    "https://img.freepik.com/premium-photo/self-driving-car-navigating-through-city-technology-iot-smart-city-generative-ai_518816-5091.jpg",
    "https://img.freepik.com/premium-photo/autonomous-car-driving-road-self-driving-car-with-sensor-scan-automotive-technology_90099-10132.jpg",
    "https://wallpapercave.com/wp/wp7359234.jpg",
    "https://images3.alphacoders.com/212/212867.jpg",
    "https://astonmartinworks.com/wp-content/uploads/2019/02/modern-car-servicing2.jpg",
    "https://www.hdcarwallpapers.com/walls/2017_aston_martin_vanquish_s-HD.jpg",
    "https://blog-images.carshop.co.uk/2019/06/Penske-Wynn-Ferrari-Maserati--5-.jpg",
    "https://img.redbull.com/images/c_crop,w_6000,h_3000,x_0,y_386,f_auto,q_auto/c_scale,w_1200/redbullcom/2022/2/9/pdjsfsha7fpscr0dhpt4/new-car-new-name"
  ];

  startBackgroundChangeInterval(callback: (url: string) => void, intervalTime: number = 5000) {
    this.backgroundChangeInterval = interval(intervalTime).subscribe(() => {
      this.changeBackgroundImage(callback);
    });
  }

  stopBackgroundChangeInterval() {
    if (this.backgroundChangeInterval) {
      this.backgroundChangeInterval.unsubscribe();
    }
  }

  private changeBackgroundImage(callback: (url: string) => void) {
    const nextIndex = (this.currentIndex + 1) % this.imageUrls.length;
    this.currentIndex = nextIndex;
    const nextImageUrl = this.imageUrls[nextIndex];
    callback(nextImageUrl);
  }
}

