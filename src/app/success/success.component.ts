import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-success',
  template: `
    <button class="successButton">Success</button>
  `,
  styles:[`
    .successButton { 
      width: 120px;
      background-color: #c2f3c7;
    }
 `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
