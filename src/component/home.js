import React, { Component } from 'react';
import * as HomeActions from '../actions/home';
import * as HomeController from '../controller/home';
import { connect } from 'react-redux'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state ={ data: 'Data From Component State' };
    props.dispatch(HomeActions.setReduxState({ reduxdata: 'Data From Redux Store' }));
    HomeController.makeApiCall().then((res) => {
      props.dispatch(HomeActions.setReduxState(res));      
    });
  }


  render() {
    return (
      <div>
        <div>{this.props.app.reduxdata}</div><br />
        <div>{this.state.data}</div><br />
        <div>{this.props.app.apidata}</div>
        <input type="text" />
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
