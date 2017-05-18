import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {

  render() {
    return (
      <div className="header--bar">
        <span className="header--bar--text">
          {this.props.title}
        </span>
      </div>
    );
  }
}

export default Header;
