import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';

// Modules are used to bundle things together into a "package"
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent, // Must declare it as Angular doesnt search for files
    ServersComponent
  ],
  imports: [ // Used to add modules into this module
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
