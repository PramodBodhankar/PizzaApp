import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaMenuComponent } from './pizza-menu/pizza-menu.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { PizzaServiceService } from './pizz-service.service';
import { HttpClientModule }    from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PizzaMenuComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [PizzaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
