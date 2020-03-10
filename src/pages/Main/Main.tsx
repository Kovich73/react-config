import React from 'react';
import { connect } from 'react-redux';
import { fetchExample as fetchExampleAction } from '../../redux/example';
import { Container } from './Main.style';
import { IExampleRequestParams } from '../../redux/example/constants';

interface IMainProps {
  fetchExample: (params: IExampleRequestParams) => void;
}

const Main: React.FC<IMainProps> = ({ fetchExample }: IMainProps) => {
  // componentDidMount
  React.useEffect(() => {
    fetchExample({ id: 1 });
  }, []);

  return <Container>React App</Container>;
};

export default connect(null, {
  fetchExample: fetchExampleAction,
})(Main);
