import React, { Component } from 'react';
import * as HomeActions from '../actions/home';
import { connect } from 'react-redux'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state ={ data: 'Data From Component State' };
    props.dispatch(HomeActions.setReduxState({ data: 'Data From Redux Store' }));
  }


  render() {
    return (
      <div>
        {this.props.app.data}<br />
        {this.state.data}<br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state
  }
}

export default connect(mapStateToProps)(Home);
