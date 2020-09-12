import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  names =[
    'aymen',
    'mohsen',
    'mouna',
    'GMC',
    'new element'
  ];

  colors=[
    'red',
    'blue',
    'aquamarine'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
