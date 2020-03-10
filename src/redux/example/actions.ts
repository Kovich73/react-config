import * as type from './constants';

export const fetchExample = (
  params: type.IExampleRequestParams,
): type.ExampleActionType => ({
  type: type.EXAMPLE_REQUEST,
  params,
});

export const fetchExampleSuccess = (): type.ExampleActionType => ({
  type: type.EXAMPLE_SUCCESS,
});

export const fetchExampleError = (error: any): type.ExampleActionType => ({
  type: type.EXAMPLE_FAILURE,
  error,
});
