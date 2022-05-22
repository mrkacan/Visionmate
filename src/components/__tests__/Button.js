import * as React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button/Button';

it('renders correctly', () => {
  const tree = renderer.create(<Button onPress={() => true}>Test button</Button>).toJSON();

  expect(tree).toMatchSnapshot();
});
