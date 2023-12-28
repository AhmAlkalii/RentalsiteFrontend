import { Component } from '@angular/core';
import { AvailableCarsService } from '../available-cars.service';
@Component({
  selector: 'app-my-available-cars',
  templateUrl: './my-available-cars.component.html',
  styleUrls: ['./my-available-cars.component.css']
})
export class MyAvailableCarsComponent {
  availableCars : any[] = [];

  constructor(private availableCarsService: AvailableCarsService){ }

  ngOnInit(){
    this.availableCarsService.getAvailableCars().subscribe({next:cars => this.availableCars = cars});
  }
}
