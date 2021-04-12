import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForecastModalComponent } from '../../forecast-modal/forecast-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit{

  @Input() city: Object;
  @Input() weatherData: Observable<any>;
  
  hourlyForecast: any = [];
  currentWeather: any = [];
  coord: Object = {};
  timezone: string;
  timezone_offset: number;
  
  constructor(
      private modalService: NgbModal
  ) {}
  
  ngOnInit(): void {
    this.city['forecast'].subscribe( d => {
      this.hourlyForecast = d.hourly;
      this.currentWeather = d.current;
      this.timezone = d.timezone;
      this.timezone_offset = d.timezone_offset;
      Object.defineProperties(this.coord, {
        lat: {
          value: d.lat
        },
        lon: {
          value: d.lon
        }
      });
    });
  }

  openForecastModal() {
    const modalRef = this.modalService.open(ForecastModalComponent, { scrollable: true, size: 'xl' });
    modalRef.componentInstance.id = this.city["name"];
    modalRef.componentInstance.hourlyforecastData = this.hourlyForecast;
    modalRef.componentInstance.timezone = this.timezone;
    modalRef.componentInstance.timezone_offset = this.timezone_offset;
    modalRef.result.then(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

}
