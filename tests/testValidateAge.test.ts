import { expect, describe, it, test, beforeEach } from 'vitest';
import validateAge from '../src/Helpers/Inputs/validateAge';

/**
 * @jest-environment jsdom
 */

describe('test of ValidateAge', () => {

    beforeEach(async () => {
        await import('../src/Helpers/Inputs/validateAge')
    })
  
    it('test ValidateAge false', () => {
      expect(validateAge('13')).toBeFalsy();
    })

    it('test ValidateAge true', () => {
      expect(validateAge('1')).toBeTruthy();
    })
  
  })