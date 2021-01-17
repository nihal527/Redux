import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseConter } from "../redux/actions/counterActions";

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseConter());
          }}
        >
          1 Arttır
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseConter, dispatch) };
}
export default connect(mapDispatchToProps)(IncreaseCounter);
