import React from 'react';
import { shallow } from 'enzyme';
import { CustomeButtonContainer } from "./custom-button.style";

it('should render CustomButton component', () => {
  expect(shallow(<CustomeButtonContainer />)).toMatchSnapshot();
});
