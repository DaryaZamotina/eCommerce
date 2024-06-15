import { render } from '@solidjs/testing-library';
import header from '../src/pages/Home/homePage';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom'; 

/*
describe('react-native-test example', () => {
  let c: RenderAPI;

  beforeEach(() => {
    c = render(<Text testID="test">example</Text>);
  });

  afterEach(cleanup);

  test('getByText()', () => {
    c.debug();
    expect(c.getByTestId('test')).toHaveTextContent('example');
  });
});
*/

describe('homePage', () => {
    let pageContainer = render(<div class="homePromocode" id="homePromocode">Promocode:</div>);

    it('should render the homePage', () => {
        const { getByText } = render(() => pageContainer);
        expect(
            getByText('Promocode')
        ).toBeInTheDocument();
    });
});