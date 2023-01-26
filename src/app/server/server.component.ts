import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }

  serverName = 'CS v1.6 24/7 Poolday server';
}
