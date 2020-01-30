import { expect } from 'chai';
import { match } from '../../src/instantiation-graph/e-matching';
import { combinations } from '../../src/instantiation-graph/operations';

describe('Combinations', () => {
    it('list all possible three-digit binary numbers', () => {
      let combs = Array.from(combinations([[0, 1], [0, 1], [0, 1]]));
        
      expect(combs).to.have.lengthOf(8);
    });
});