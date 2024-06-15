import { expect, describe, it, test, beforeEach } from 'vitest';
import HomePage from '../src/pages/Home/homePage';

/**
 * @jest-environment jsdom
 */

describe('test of HomerPage', () => {

  beforeEach(async () => {
    await import('../src/index')
 
  })

  it('test HomePage 1', () => {
    expect(document.getElementById('logoutButton').textContent).toEqual('RS School JS-FE-2023Q4');
  })

})