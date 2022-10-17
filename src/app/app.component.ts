import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starter-app';
  username = 'tebah';
  show = false;
  btnLogs = [];
  resetInput() {
    this.username = '';
  }
  detailBtnClicked() {
    this.show = !this.show;
    this.btnLogs.push(`${this.show} - ${new Date(Date.now())}`);
  }
  getBorder(i) {
    if (i<5) return '1px solid red';
    else return '3px double grey';
  }
}
