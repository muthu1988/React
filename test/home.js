import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Enzyme from 'enzyme';
import Home from '../src/component/home';
configure({ adapter: new Adapter() });

const store = { 
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ })
}
const options = {
  context: { store }, 
}

describe('<Home />', () => {
  it('renders input components', () => {
    const HomeWrapper = shallow(<Home />, options).dive();
    expect(HomeWrapper.find('input')).to.have.length(1);
  });
});