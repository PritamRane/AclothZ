import React from "react";
import { shallow} from "enzyme";
import { Provider } from "react-redux";
import configStore from "redux-mock-store";

import Category from "./category.component";


const mockStore = configStore();

let wrapper;
const mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
const props = { match: { params: { categoryId: "test" } } };
const store = mockStore({
  shop: {
    collection: {
      test: { items: mockItems, title: "test" }
    }
  }
});

describe("Category component", () => {
  it("should render category component", () => {
    wrapper = shallow(
      <Provider store={store}>
        <Category {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

});
