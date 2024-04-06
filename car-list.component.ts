// src/app/car-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car-list',
  template: `
    <h2>Car Galleries</h2>
    <!-- Implement logic to fetch and display car galleries -->
  `
})
export class CarListComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch car galleries from backend using HttpClient
  }
}
