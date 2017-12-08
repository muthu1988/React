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
        {this.props.app.reduxdata}<br />
        {this.state.data}<br />
        {this.props.app.apidata}
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
