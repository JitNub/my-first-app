import { Component } from '@angular/core';

@Component({
  selector: 'app-homework043',
  templateUrl: './homework043.component.html',
  styleUrls: ['./homework043.component.css'],
})
export class Homework043Component {
  showPassword = false;
  secretPassword = 'tuna';
  clickNumber = 0;
  log = [];

  displayDetails() {
    /* this.showPassword
      ? (this.showPassword = false)
      : (this.showPassword = true);

    this.clickMax = [this.clickNumber++]; */

    this.showPassword = !this.showPassword;
    this.log.push(this.log.length + 1);

    /*  this.clickMax.forEach((element) => {
      console.log(element);
    }); */

    /* console.log(this.clickMax); */
  }
}
