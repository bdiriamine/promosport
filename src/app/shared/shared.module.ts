import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TermsandconditionsComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  exports:[
    NavbarComponent,FooterComponent,TermsandconditionsComponent
  ]
})
export class SharedModule { }
