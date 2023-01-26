import { Component } from '@angular/core';

@Component({
  selector: '.app-servers' /* '[app-servers]', */,
  /* template: `<app-server></app-server> <app-server></app-server>`, */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  testText = 'Då ska vi se om det fungerar.';
}
