import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule,         
       MatCardModule, MatIconModule,
      MatListModule } 
          from '@angular/material';
import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProductListComponent } from './product-list/product-list.component';
@NgModule({
  declarations: [
    AppComponent
    ,ImgCardComponent, ProductListComponent
  ],
  imports: [
    BrowserModule
    , MatToolbarModule
    , MatListModule 
    , MatIconModule
    , MatCardModule, ServiceWorkerModule.register('/store/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
