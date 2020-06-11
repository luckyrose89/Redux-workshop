import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import './styles.scss';

const initialState = {
  count: 0,
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const incrementValue = () => ({
  type: INCREMENT,
});

const decrementValue = () => ({
  type: DECREMENT,
});

const resetValue = () => ({
  type: RESET,
});

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      count: state.count - 1,
    };
  }
  if (action.type === RESET) {
    return {
      count: 0,
    };
  }
  return state;
};

const store = createStore(reducer);

class Counter extends Component {
  render() {
    const { count, incrementValue, decrementValue, resetValue } = this.props;
    console.log({ count, incrementValue });

    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={incrementValue}>Increment</button>
          <button onClick={decrementValue}>Decrement</button>
          <button onClick={resetValue}>Reset</button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      incrementValue,
      decrementValue,
      resetValue,
    },
    dispatch,
  );
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root'),
);
