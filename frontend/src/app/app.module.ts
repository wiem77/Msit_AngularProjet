import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiserverService } from './apiserver.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
