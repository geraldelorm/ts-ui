import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortfoliomodalComponent } from './portfoliomodal/portfoliomodal.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupComponent } from './signup/signup.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"portfolio",component:PortfoliopageComponent},
  {path:"portmodal",component:PortfoliomodalComponent},
  {path:"transactions",component:TransactionComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
