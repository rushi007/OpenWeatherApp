import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import data from './data/data.json';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCities() {
    return data.cities;
  }

  getWeatherData(): Observable<any> {
    const httpCalls = data.cities.map(city => {return [{name: city.name, forecast: this.http.get(data.baseURI+"/onecall?lat="+city.coord.lat+"&lon="+city.coord.lon+"&exclude=minutely,daily,alerts&appid="+data.apiKey)}]});
    return forkJoin(httpCalls);
  }
}
