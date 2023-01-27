import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<p>This is the Success Alert component</p>`,
  styleUrls: ['./success-alert.component.css'],
})
export class SuccessAlertComponent {
  textTest = 'Success Alert!';
}
