import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import useTypingGame from './hooks/useTypingGame';
import { countTextWords } from './hooks/useTypingGame';

// Test component UI components
describe('<App /> with no props', () => {
  const container = shallow(<App />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have an texarea', () => {
    expect(container.find('textarea').length).toEqual(1);
  });

  it('should have proper props for textarea', () => {
    expect(container.find('textarea').props()).toEqual({
      className: 'main-container-body-textarea',
      onChange: expect.any(Function),
      disabled: true,
      value: '',
    });
  });

  it('should have a button', () => {
    expect(container.find('button').length).toEqual(1);
  });

  it('should have proper props for button field', () => {
    expect(container.find('button').props()).toEqual({
      className: 'main-container-body-button sheen',
      onClick: expect.any(Function),
      disabled: false,
      children: 'Start',
    });
  });

  it('should have a main-container-click', () => {
    expect(container.find('#main-container-click').length).toEqual(1);
  });

  it('should have proper props for button field', () => {
    expect(container.find('#main-container-click').props()).toEqual({
      id: 'main-container-click',
      onClick: expect.any(Function),
      children: expect.anything(),
    });
  });
});

// Test write textarea
describe('<App /> textarea writing after click counts', () => {
  it('should set the textarea value on change event', () => {
    const container = shallow(<App />);

    container.find('textarea').simulate('change', {
      target: {
        value: 'Lorem Ipsum',
      },
    });
    expect(container.find('textarea').prop('value')).toEqual('Lorem Ipsum');
  });

  it('should set Word count to 2', () => {
    const container = mount(<App />);

    container.find('button').simulate('click');

    container.find('textarea').simulate('change', {
      target: {
        value: 'Lorem Ipsum',
      },
    });

    setTimeout(() => {
      expect(container.find('#main-container-click').text()).toEqual(
        'Word Count: 2'
      );
    }, 5000);
  });
});

// Unit test util function
describe('countTextWords tests', function () {
  test('empty string should count 0', () => {
    expect(countTextWords('')).toEqual(0);
  });

  test('"Lorem ipsum" sentence should count 2', () => {
    expect(countTextWords('Lorem ipsun')).toEqual(2);
  });
  test('" Lorem  ipsum " sentence with two or more spaces should count 2', () => {
    expect(countTextWords(' Lorem  ipsun ')).toEqual(2);
  });
});
