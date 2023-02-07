import { Component } from '@angular/core';

@Component({
  selector: 'app-hw43',
  templateUrl: './hw43.component.html',
  styleUrls: ['./hw43.component.css'],
})
export class Hw43Component {
  showPassword = false;
  logToogle = [];

  toogleDetails() {
    this.showPassword = !this.showPassword;

    this.logToogle.push(this.logToogle.length + 1);
  }
}
