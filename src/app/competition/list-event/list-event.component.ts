import { Component, OnInit } from '@angular/core';
import { Game } from '../models/Game';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent implements OnInit {
  time: Date = new Date();
  game : Game = { firstTeam: "team1", secondTeam: "team2", bet: "x" }
  
  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
  }

  placeBet(val: number) {
    this.dataServ.selection.next(this.game);
    this.dataServ.updateBet(val);
  }

}
