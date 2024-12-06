import { Component, OnInit } from '@angular/core';
import { Game } from '../models/Game';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-selection',
  templateUrl: './list-selection.component.html',
  styleUrls: ['./list-selection.component.scss']
})
export class ListSelectionComponent implements OnInit {
  bet!: number;
  selections !: Game[]
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.bet$.subscribe(res => {
      this.bet = res;
    })

    this.data.selection.subscribe((res: Game) => {
      this.selections.push(res);
    })
  }

  resetBet() {
    this.bet = 0
  }

  removeBet(item: Game) {

  }

}
