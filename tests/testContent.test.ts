import { expect, describe, it, test, beforeEach } from 'vitest';

/**
 * @jest-environment jsdom
 */

describe('test of footer and header', () => {

  beforeEach(async () => {
    await import('../src/index')
 
  })

  it('test footer', () => {
    expect(document.getElementById('logoutButton').textContent).toEqual('RS School JS-FE-2023Q4');
  })

  it('test header 1', () => {
    expect(document.getElementById('headerLogo').textContent).toEqual('JOY.M');
  })


  it('test header 2', () => {
    expect(document.getElementById('headerWrapper').childNodes.length).toEqual(4);
  })

  it('test header 3', () => {
    expect(document.getElementById('navbar').childNodes.length).toEqual(6);
  })

})