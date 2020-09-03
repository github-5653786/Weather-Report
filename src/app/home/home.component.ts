import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  City = "Bengaluru";
  ShowInfo: boolean;

  WeatherData;
  constructor(private service: WeatherService) {
    this.ShowInfo = true;
  }

  ngOnInit() {
    this.service.getWeatherByCity(this.City).subscribe(data => {
      let response = JSON.parse(JSON.stringify(data));
      this.WeatherData = response;
    });
  }

  SendVal(val) {
    this.service.getWeatherByCity(val.cityName).subscribe(data => {
      let response = JSON.parse(JSON.stringify(data));
      this.WeatherData = response;
      this.ShowInfo = true;
    },
      error => {
        if (error.status == 404) {
          this.ShowInfo = false;
        }
      });
  }

}
