import { expect, describe, it, test, beforeEach } from 'vitest';
import validateEmail from '../src/Helpers/Inputs/validateEmail';

/**
 * @jest-environment jsdom
 */

describe('test of validateEmail', () => {

    beforeEach(async () => {
        await import('../src/Helpers/Inputs/validateEmail')
    })
  
    it('test validateEmail false', () => {
      expect(validateEmail('1')).toBeFalsy();
    })

    it('test validateEmail true', () => {
      expect(validateEmail('mail@mail.ru')).toBeTruthy();
    })
  
  })