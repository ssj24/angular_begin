import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  isStart: boolean;
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber: number = 0;
  constructor() {
    this.isStart = false;
   }

  ngOnInit(): void {
  }

  btnClicked() {
    this.isStart = !this.isStart;
    if (this.isStart) {
      this.interval = setInterval(() => {
        this.intervalFired.emit(this.lastNumber + 1);
        this.lastNumber++;
      }, 1000);
    } else {
      clearInterval(this.interval);
    }
  }

}
