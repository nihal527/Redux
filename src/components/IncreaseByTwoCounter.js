import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseByToCounter } from "../redux/actions/counterActions";
class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseByToCounter());
          }}
        >
          2 Arttır
        </button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByToCounter, dispatch) };
}
export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
