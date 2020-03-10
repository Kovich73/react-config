import * as type from './constants';

const exampleState: type.IExampleStateRedux = {
  error: null,
  loaders: {},
};

export const exampleReducer = (
  state = exampleState,
  action: type.ExampleActionType,
) => {
  switch (action.type) {
    case type.EXAMPLE_REQUEST: {
      return {
        ...state,
        loaders: { ...state.loaders, get: true },
        error: null,
      };
    }
    case type.EXAMPLE_FAILURE: {
      return {
        ...state,
        error: action,
        loaders: { ...state.loaders, get: false },
      };
    }
    case type.EXAMPLE_SUCCESS: {
      return {
        ...state,
        loaders: { ...state.loaders, get: false },
      };
    }
    default:
      return state;
  }
};
