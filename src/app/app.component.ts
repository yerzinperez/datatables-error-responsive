import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  dtOptions: DataTables.Settings = {};

  constructor() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
    };
  }
}
