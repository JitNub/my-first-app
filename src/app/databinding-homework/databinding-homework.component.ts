import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-homework',
  templateUrl: './databinding-homework.component.html',
  styleUrls: ['./databinding-homework.component.css'],
})
export class DatabindingHomeworkComponent {
  username = '';
  allowClick = false;

  onUsernameInput() {}
}
