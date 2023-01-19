import { Field } from './field.model';

describe('Field', () => {
  it('should create an instance', () => {
    expect(new Field(1,false)).toBeTruthy();
  });
});
