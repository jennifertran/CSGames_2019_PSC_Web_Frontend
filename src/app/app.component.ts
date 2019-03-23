// src/app/app.component.ts
 
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient]
})
export class AppComponent {
  title = 'Job Finder';
  employees;
 
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/employees.json')
      .subscribe(res => this.employees = res);
  }
}