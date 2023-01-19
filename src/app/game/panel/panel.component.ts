
import { Component, Input, OnInit } from '@angular/core';
import { Field } from 'src/app/models/field.model';
import { PanelBet } from 'src/app/models/panel-bet.model';
import { PanelService } from 'src/app/services/panel.service';
import { Store } from '@ngrx/store';
import { UpdateBetsAction } from 'src/app/store/play.actions';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() panelNumber = 0;
  @Input() fieldCount = 0;
  @Input() betLength = 0;
  fields: Field[] = [];
  panelBet: PanelBet = { id: 1, bet: [] };

  constructor(private panelService: PanelService, private store: Store<{ betState: { bets: PanelBet[] } }>) { }

  ngOnInit(): void {
    this.fields = [...Array(this.fieldCount).keys()].map(x => new Field(x + 1, false));
    this.panelBet = { id: this.panelNumber, bet: [] };
  }

  onItemClick(i: number) {
    const found = this.fields.find(field => field.value === i + 1);
    if (found) {
      found.selected ? found.selected = false : found.selected = true;
    }
    this.setPanelBet();
  }

  getRandomBet() {
    this.deleteSelections();
    const randomBet = this.panelService.getRandomBet(this.betLength, this.fieldCount);
    this.fields = this.panelService.updateFields([...randomBet], [...this.fields]);
    this.setPanelBet();
  }

  deleteSelections() {
    this.fields.map(field => field.selected = false);
    this.setPanelBet();
  }

  setPanelBet() {
    this.panelBet = this.panelService.setPanelBet({ ...this.panelBet }, [...this.fields]);
    this.store.dispatch(new UpdateBetsAction(this.panelBet));
  }
}
