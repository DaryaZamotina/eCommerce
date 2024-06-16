import { expect, describe, it, test, beforeEach } from 'vitest';
import validatePostcode from '../src/Helpers/Inputs/validatePostcode';

/**
 * @jest-environment jsdom
 */

describe('test of validatePostcode', () => {

    beforeEach(async () => {
        await import('../src/Helpers/Inputs/validatePostcode')
    })
  
    it('test validatePostcode false', () => {
      expect(validatePostcode('1')).toBeFalsy();
    })

    it('test validatePostcode true', () => {
      expect(validatePostcode('12345')).toBeTruthy();
    })
  
  })