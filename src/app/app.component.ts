import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'grid-play';
  myArr = [];

  ngOnInit() {

    for (let i = 0; i < 25; i++) {
      this.myArr.push(`BOX ${i}`);
    }
    
  }
}
