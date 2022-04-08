import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './header.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

describe('Header component', () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: '123'
      },
      signOutStart: mockSignOutStart
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });


  describe('if hidden is true', () => {
    it('should not render CartDropdown', () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });

  describe('if currentUser is null in', () => {
    it('should render CartDropdown', () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});
