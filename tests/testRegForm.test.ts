import { expect, describe, it, test, beforeEach } from 'vitest';
import RegistrationForm from '../src/pages/Registration/registrationForm';

/**
 * @jest-environment jsdom
 */

describe('test of RegistrationForm', () => {

  beforeEach(async () => {
   await import('../src/pages/Registration/registrationForm')
  })

  it('test RegistrationForm', () => {
    expect(RegistrationForm).toBe;
  })

  it('test RegistrationForm', () => {
    expect(typeof RegistrationForm).toEqual("function");
  })
})