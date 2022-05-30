import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.models';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private weatherService: WeatherService) { }


  cityName: string = "Vadodara";
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWatherData(this.cityName);
    this.cityName = '';
  }
  onSubmit() {
    this.getWatherData(this.cityName);
    this.cityName = '';

  }

  private getWatherData(cityName: string) {
    this.weatherService.getWetherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);

        }
      });
  }
}