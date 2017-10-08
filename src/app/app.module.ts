import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdInputModule, MdTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { RoutesConfiguration } from './config/routes-config';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutesConfiguration,
    MdInputModule,
    BrowserAnimationsModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
