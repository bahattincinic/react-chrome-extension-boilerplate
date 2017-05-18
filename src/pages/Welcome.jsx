import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePageTo } from 'universal-redux-router';
import Header from '../components/Header';
import * as actions from '../store/actions';


class Welcome extends Component {

  render() {
    return (
      <div>
        <Header title={"Welcome Page"} />
          <div>
            Welcome To Sample App.
          </div>

          <div>
            <button onClick={() => {
              this.props.dispatch(changePageTo('/counter'));
            }}>
              Go to the example page
            </button>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  dispatch,
});


export default connect(
  mapDispatchToProps,
)(Welcome);
