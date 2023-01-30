import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { AlertsComponent } from './alerts/alerts.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DatabindingHomeworkComponent } from './databinding-homework/databinding-homework.component';
import { Homework043Component } from './homework043/homework043.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    AlertsComponent,
    SuccessAlertComponent,
    DatabindingHomeworkComponent,
    Homework043Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
