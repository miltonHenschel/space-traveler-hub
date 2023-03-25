import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MissionsPage from '../components/missions/MissionsPage';
import store from '../redux/Store';

it('Test Missions renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MissionsPage />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
