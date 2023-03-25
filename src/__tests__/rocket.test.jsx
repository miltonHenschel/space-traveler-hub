import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/Rocket/rockets';
import store from '../redux/Store';

it('Test RocketContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
