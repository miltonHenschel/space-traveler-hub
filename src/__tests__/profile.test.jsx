import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Profile from '../components/Profile/Profile';
import store from '../redux/Store';

it('Check MyProfile renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
