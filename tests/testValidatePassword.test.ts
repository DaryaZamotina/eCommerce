import { expect, describe, it, test, beforeEach } from 'vitest';
import validatePassword from '../src/Helpers/Inputs/validatePassword';

/**
 * @jest-environment jsdom
 */

describe('test of validatePassword', () => {

    beforeEach(async () => {
        await import('../src/Helpers/Inputs/validatePassword')
    })
  
    it('test validatePassword false', () => {
      expect(validatePassword('aas')).toBeFalsy();
    })

    it('test validatePassword true', () => {
      expect(validatePassword('Aa123456')).toBeTruthy();
    })
  
  })