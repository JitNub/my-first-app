import { Component } from '@angular/core';

@Component({
  selector: '.app-servers' /* '[app-servers]', */,
  /* template: `<app-server></app-server> <app-server></app-server>`, */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  testText = 'Då ska vi se om det fungerar.';

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
