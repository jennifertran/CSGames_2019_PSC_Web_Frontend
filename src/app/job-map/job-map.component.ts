import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-map',
  templateUrl: './job-map.component.html',
  styleUrls: ['./job-map.component.css'],
  styles: ['agm-map { height: 300px; /* height is required */ }'],
  template: `
    <agm-map [latitude]='latitude' [longitude]='longitude' 
      [mapTypeId]='mapType'>
    </agm-map>
  `,
  providers: [HttpClient]
})
export class JobMapComponent implements OnInit {
  latitude = 45.5017;
  longitude = -73.56;
  zoom: 8;
  mapType = 'terrain';
  title = 'Job Map';
  jobs;
  constructor(private http: HttpClient) { 
    this.http.get('http://8cf744a8.ngrok.io/jobs.json')
      .subscribe(res => this.jobs = res);
    console.log(this.jobs);
  }

  ngOnInit() {
  }

}
