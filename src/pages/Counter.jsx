import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import * as actions from '../store/actions';


class Counter extends Component {

  render() {
    return (
      <div>
        <Header title={"Counter Example"} />

        <div>{this.props.counter}</div>

        <div>
          <button onClick={() => {
            this.props.actions.increaseCounter();
          }}>
            Increase
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  dispatch,
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
