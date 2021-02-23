import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MockupComponent } from './components/mockup/mockup.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { TravelComponent } from './components/travel/travel.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    MockupComponent,
    PaymentComponent,
    PersonalInfoComponent,
    TravelComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
