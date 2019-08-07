import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/users';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Channel } from './channels/channel';
import { HttpChannel } from './channels/http-channel';
import { AppConfigToken, Config } from './config/config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ users: usersReducer }),
    HttpClientModule
  ],
  providers: [
    HttpClient,
    { provide: Channel, useClass: HttpChannel },
    { provide: AppConfigToken, useValue: Config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
