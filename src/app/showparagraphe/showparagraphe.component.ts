import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showparagraphe',
  templateUrl: './showparagraphe.component.html',
  styleUrls: ['./showparagraphe.component.css']
})
export class ShowparagrapheComponent implements OnInit {
  ishow=true;
  constructor() { }

  ngOnInit(): void {
  }
showhide()
{
  this.ishow=!this.ishow;
}
}
