import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '221b6626ac653568c167a026aba6c3d5'
  url = "https://api.openweathermap.org/data/2.5/weather?q=";

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string) {
    return this.http.get(this.url + city + '&appid=' + this.apiKey)
  }


}
