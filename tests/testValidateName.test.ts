import { expect, describe, it, test, beforeEach } from 'vitest';
import validateName from '../src/Helpers/Inputs/validateName';

/**
 * @jest-environment jsdom
 */

describe('test of validateName', () => {

    beforeEach(async () => {
        await import('../src/Helpers/Inputs/validateEmail')
    })
  
    it('test validateName false', () => {
      expect(validateName('1$"')).toBeFalsy();
    })

    it('test validateName true', () => {
      expect(validateName('Dasha')).toBeTruthy();
    })
  
  })