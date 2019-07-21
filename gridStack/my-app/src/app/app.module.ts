import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridStackHeaderComponent } from './grid-stack-header/grid-stack-header.component';
import { GridStackFooterComponent } from './grid-stack-footer/grid-stack-footer.component';
import { GridStackDashboardComponent } from './grid-stack-dashboard/grid-stack-dashboard.component';
import { GridsterModule } from 'angular-gridster2';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GridStackHeaderComponent,
    GridStackFooterComponent,
    GridStackDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule,FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
