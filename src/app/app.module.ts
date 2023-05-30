import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; //Protocolo http para que los servicios se comuniquen con la api

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ElementService } from '../_services/elements.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxImageZoomModule, IonicModule.forRoot(), HttpClientModule, AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ElementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
