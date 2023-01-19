import { Action } from "@ngrx/store";
import { PanelBet } from "../models/panel-bet.model";

export const UPDATE_BETS = 'UPDATE_BETS';

export class UpdateBetsAction implements Action {
    readonly type = UPDATE_BETS;

    constructor(public payload: PanelBet) { }
}

export type BetActions = UpdateBetsAction;


