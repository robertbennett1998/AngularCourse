import { Component, OnInit } from '@angular/core';

// ` JavaScript template expressions

@Component({
  selector: 'app-servers', // can be loaded other ways, selector not necassary. Selector works like a css one
  // selector: '[app-servers]', // can be loaded other ways, selector not necassary. Selector works like a css one
  // selector: '.app-servers', // can be loaded other ways, selector not necassary. Selector works like a css one
  // id doesnt work as selector. psudo selectors (i.e. hover) doesnt work
  // could actually use an attribute selector i.e. '[app-servers]'
  // template or templateUrl must be present
  templateUrl: './servers.component.html',
  // template: `<h2>Servers</h2>
  //            <app-server></app-server> 
  //            <app-server></app-server>`,
  // styleUrls: ['./servers.component.scss'] // can reference multiple style sheets or can use...
  styles: [ 'h1 { color: red; }',
            'h2 { color: green; }',
           ]
})
export class ServersComponent implements OnInit {
  allowNewServer : boolean = false;
  serverCreationStatus : string = "No server was created.";
  serverName : string = "";
  serverCreated : boolean = false;

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server," + this.serverName + ", created.";
  }

  onUserInput(event : InputEvent) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  toggleAllowNewServer() {
    this.allowNewServer = !this.allowNewServer;
  }

  constructor() { 
    setTimeout(this.toggleAllowNewServer.bind(this), 2000);
  }

  ngOnInit(): void {
  }
}

// Directives are instructions for the DOM
// Components are a type of directive. The selector is replaced with the component template.
// Directive selectors are the same as component ones
// Use the directive decorator
// *ngIf - * denotes structural directive - it changes structure of the DOM
// #name - local reference - gives element a namge
// ng-template can be used to mark a section of a template
// *ngIf="condition; else ng-template"
// ngStyle is a non structural directive as it only changes the element it is applied to and not the strcuture of the Dom
// can get index in *ngFor="let item of item; let i = index". Index is reserved variable