import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { MotivaService } from './services/motiva.service';
import { MotivacionalComponent } from './motivacional/motivacional.component';

@NgModule({
  declarations: [
    AppComponent,
    MotivacionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MotivaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
