import { expect, describe, it, beforeEach } from 'vitest';
import { getSlider } from '../src/pages/ProductDetails/slider';
import { sliderMaker } from '../src/pages/ProductDetails/sliderInterface';
import { getBigSlider } from '../src/pages/ProductDetails/sliderForBigImg';
import { createProductCard } from '../src/pages/ProductDetails/productCardDetails';

/**
 * @jest-environment jsdom
 */

describe('test of slider', () => {

  beforeEach(async () => {
   await import('../src/pages/ProductDetails/slider');
   await import('../src/pages/ProductDetails/sliderInterface');
   await import('../src/pages/ProductDetails/sliderForBigImg');
   await import ('../src/pages/ProductDetails/productCardDetails');
  })

  it('test Slider 1', () => {
    expect(typeof getSlider).toBe("function");
  })

  it('test Slider 2', () => {
    expect(typeof sliderMaker).toBe("function");
  })

  it('test Slider 3', () => {
    expect(typeof getBigSlider).toBe("function");
  })

  it('test Slider 4', () => {
    expect(document.getElementById('carousel')).toBe;
  })
})