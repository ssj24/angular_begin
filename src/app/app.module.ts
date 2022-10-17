import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { ServerBtnPipe } from './server/server-btn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningComponent,
    SuccessComponent,
    ServerBtnPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
