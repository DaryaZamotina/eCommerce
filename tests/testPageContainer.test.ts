import { expect, describe, it, test, beforeEach } from 'vitest';

/**
 * @jest-environment jsdom
 */

describe('test of pageContainer', () => {

   beforeEach(async () => {
       await import('../src/index')
        
    })
  
    it('test pageContainer', () => {
      expect(document.getElementById('pageContainer')).exist;
    })
  
  })