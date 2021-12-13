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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserLoginServiceService } from './service/user-login-service.service';
import { CreatePortfolioService } from './service/create-portfolio.service';
import { AddTransactionService } from './service/add-transaction.service';
import { JWTInterceptor } from './interceptor/jwt-interceptor';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';

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
    HomeComponent,
    TransactionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [UserRegistrationService,UserLoginServiceService,CreatePortfolioService,AddTransactionService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: JWTInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
