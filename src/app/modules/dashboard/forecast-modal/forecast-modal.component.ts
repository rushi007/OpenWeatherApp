import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forecast-modal',
  templateUrl: './forecast-modal.component.html',
  styleUrls: ['./forecast-modal.component.css']
})
export class ForecastModalComponent implements OnInit {

  @Input() id;
  @Input() hourlyforecastData;
  @Input() timezone;
  @Input() timezone_offset;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    console.log(this.id);
    console.log(this.hourlyforecastData);
  }

}
