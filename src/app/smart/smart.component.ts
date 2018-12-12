import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {
  title:  String;
  ArryOfString: Array<string>;

  constructor() {
    this.title = 'Exercise 1';
    this.ArryOfString = ['Abebe', 'Kebede', 'Melese', 'Molla', 'Ethiopia', 'Bahir Dar', 'GC'];
  }

  ngOnInit(): void {
  }

  // onDumb() {
  //
  // }

}
