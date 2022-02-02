export const initialState = {
  term: null,
};

export const actionType = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

export const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case actionType.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};
