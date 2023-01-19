import { TestBed } from '@angular/core/testing';

import { PlayService } from './play.service';

describe('PlayService', () => {
  let service: PlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getResults empty bets should return if no bets are provided', () => {
    const result = service.getResult([[]])
    expect(result[0]).toEqual("empty");
  });

  it('getResults should return the comma separated list of bets if the number of bets is correct', () => {
    service.setNrOfBets(6);
    const result = service.getResult([[1,2,3,4,5,6]])
    expect(result[0]).toEqual("1, 2, 3, 4, 5, 6");
  });

  it('getResults should return "Error: {x} marks are missing" if the number of bets is less then the expected nr of bets', () => {
    service.setNrOfBets(6);
    const result = service.getResult([[1,2,3,4]])
    expect(result[0]).toEqual("Error: 2 marks are missing");
  });

  it('getResults should return "Error: Please remove {x} marks" if the number of bets is more then the expected nr of bets', () => {
    service.setNrOfBets(6);
    const result = service.getResult([[1,2,3,4,45,34,6,9,5,8,10,23]])
    expect(result[0]).toEqual("Error: Please remove 6 marks");
  });

  it('getResults should return the expected array of bets and errors', () => {
    service.setNrOfBets(6);
    const result = service.getResult([[10,20,30,40,50,60],[],[23,34],[22,33,45,6,7,8,9]])
    expect(result[0]).toEqual("10, 20, 30, 40, 50, 60");
    expect(result[1]).toEqual("empty");
    expect(result[2]).toEqual("Error: 4 marks are missing");
    expect(result[3]).toEqual("Error: Please remove 1 marks");
    expect(result.length).toEqual(4);
  });
});
