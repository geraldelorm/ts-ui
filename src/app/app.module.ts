import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { PortfoliomodalComponent } from './portfoliomodal/portfoliomodal.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { HeaderComponent } from './header/header.component';
import { UserRegistrationService } from './service/user-registration.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    PortfoliopageComponent,
    PortfoliomodalComponent,
    AddProductModalComponent,
    HeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
