import { expect, describe, it, test, beforeEach } from 'vitest';
import validateStreet from '../src/Helpers/Inputs/validateStreet';

/**
 * @jest-environment jsdom
 */

describe('test of validateStreet', () => {

    beforeEach(async () => {
        await import('../src/Helpers/Inputs/validateStreet')
    })
  
    it('test validateStreet false', () => {
      expect(validateStreet('')).toBeFalsy();
    })

    it('test validatePassword true', () => {
      expect(validateStreet('A')).toBeTruthy();
    })
  
  })