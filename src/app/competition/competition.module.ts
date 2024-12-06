import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionRoutingModule } from './competition-routing.module';
import { CompetitionComponent } from './competition.component';
import { ListEventComponent } from './list-event/list-event.component';
import { ListSelectionComponent } from './list-selection/list-selection.component';
import { BetSlipComponent } from './bet-slip/bet-slip.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    CompetitionComponent,
    ListEventComponent,
    ListSelectionComponent,
    BetSlipComponent
  ],
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    TranslateModule
  ],
  exports:[TranslateModule]
})
export class CompetitionModule { }
