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
  clickMax = [];

  displayDetails() {
    this.showPassword
      ? (this.showPassword = false)
      : (this.showPassword = true);

    this.clickMax = [this.clickNumber++];

    /*  this.clickMax.forEach((element) => {
      console.log(element);
    }); */

    /* console.log(this.clickMax); */
  }
}
