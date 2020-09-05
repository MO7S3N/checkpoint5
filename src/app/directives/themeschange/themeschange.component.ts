import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themeschange',
  templateUrl: './themeschange.component.html',
  styleUrls: ['./themeschange.component.css']
})
export class ThemeschangeComponent implements OnInit {
  theme = '';
  constructor() { }

  ngOnInit(): void {
  }

  changetheme(theme:string)
  {
      if(theme=='theme1')
      {
          this.theme=theme;
      }
      else(theme=='theme2')
      {
        this.theme=theme;
      }
  }
}
