import { data } from "./directory.data";

export const INITIAL_STATE = {
  sections: data
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
