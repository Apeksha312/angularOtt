import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { OttPipePipe } from './ott-pipe.pipe';
import { GalleryComponent } from './gallery/gallery.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ShopparentComponent } from './shopparent/shopparent.component';
import { ShopcartListComponent } from './shopcart-list/shopcart-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    OttPipePipe,
    GalleryComponent,
    CartListComponent,
    ShopparentComponent,
    ShopcartListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
