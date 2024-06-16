import { expect, describe, it, test, beforeEach } from 'vitest';
import LoginForm from '../src/pages/LoginPage/loginForm';

/**
 * @jest-environment jsdom
 */

describe('test of LoginPage', () => {

  beforeEach(async () => {
   await import('../src/pages/LoginPage/loginForm')
  })

  it('test LoginForm', () => {
    
    expect(LoginForm.length).toEqual(2);

  })

})