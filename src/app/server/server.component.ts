import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'Offline';

  /**
   *
   */
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  serverName = 'CS v1.6 24/7 Poolday server';

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
