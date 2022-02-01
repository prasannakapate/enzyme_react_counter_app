import Enzyme, { shallow } from 'enzyme';

import App from './App';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {});

test('renders counter display', () => {});

test('counter displays start at 0', () => {});

test('clicking button increments counter', () => {});
