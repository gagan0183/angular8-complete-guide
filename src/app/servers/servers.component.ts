import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers: boolean = false;
  serverCreationStatus = 'No Server was created';
  serverName: any = '';
  userName: any = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 1000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Server Name is ${this.serverName}`;
  }

  onUpdateServerName(e: any) {
    console.log(e);
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  resetUserName() {
    this.userName = '';
  }

  ngOnInit() {}
}
