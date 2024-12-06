import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './authentification/signin/signin.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { TermsandconditionsComponent } from './shared/termsandconditions/termsandconditions.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./competition/competition.module').then(m => m.CompetitionModule)
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {path: "terms-conditions", component: TermsandconditionsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
