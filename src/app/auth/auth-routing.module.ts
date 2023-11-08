import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRootComponent } from './auth-root/auth-root.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: AuthRootComponent, 
    children:[
      {path:'login', component: LoginComponent},
      {path:'sign-up', component: SignupComponent},
      {path:'reset-password', component: ResetComponent},
      {path:'', pathMatch:'full', redirectTo:'login'}  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
