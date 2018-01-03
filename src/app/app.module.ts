import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HttpModule} from '@angular/http';
import {UserDirective} from './user.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
