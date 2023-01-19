import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { PlayService } from '../services/play.service';
import { Store } from '@ngrx/store';
import { PanelBet } from '../models/panel-bet.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('result')
  private result: ElementRef = <any>{};
  nrOfPanels = 4;
  fieldCount = 49;
  betLength = 6;
  bets: Array<number>[] = [];
  results: Array<string> = [];
  showResult = false;
  panels = Array(this.nrOfPanels).fill("");

  constructor(private playService: PlayService, private store: Store<{ betState: { bets: PanelBet[] } }>) { }

  ngOnInit(): void {
    this.playService.setNrOfBets(this.betLength);
    this.store.select('betState').subscribe(
      (value) => {
        this.bets = value.bets.map(panelBet => panelBet.bet);
      });
  }

  play() {
    this.results = this.playService.getResult(this.bets);
    this.showResult = true;
    setTimeout(() => this.result.nativeElement.scrollIntoView(), 1000);
  }

}
