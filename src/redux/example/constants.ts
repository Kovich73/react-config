export const EXAMPLE_REQUEST = 'EXAMPLE_REQUEST';
export const EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS';
export const EXAMPLE_FAILURE = 'EXAMPLE_FAILURE';

export interface IExampleStateRedux {
  error: any;
  loaders: { [key: string]: boolean };
}

export interface IExampleRequestParams {
  id: number;
}

export interface IFetchExampleRequest {
  type: typeof EXAMPLE_REQUEST;
  params: IExampleRequestParams;
}

export interface IFetchExampleSuccess {
  type: typeof EXAMPLE_SUCCESS;
}

export interface IFetchExampleFailure {
  type: typeof EXAMPLE_FAILURE;
  error: any;
}

export type ExampleActionType =
  | IFetchExampleRequest
  | IFetchExampleSuccess
  | IFetchExampleFailure;
