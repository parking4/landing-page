import React, { Component } from "react";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };

  render() {
    return (
      <div className="App">
        <pre>{JSON.stringify(this.props)}</pre>
        <button onClick={this.simpleAction}>Test redux action</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
