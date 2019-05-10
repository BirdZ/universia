import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { ListComponent } from './components/list/list.component';
import { MainLayout } from './layouts/main/main.component';
import { BodyMainComponent } from './layouts/body-main/body-main.component';

import { APIBaseService } from '@providers/api-base.service';

import {
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatListModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ItemViewComponent,
    ListComponent,
    MainLayout,
    BodyMainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    OverlayModule,
    AppRoutingModule,
    RouterModule.forChild(AppRoutes),

  ],
  providers: [
    APIBaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
