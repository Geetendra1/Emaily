import React, { Component } from "react";
import StripeCheckot from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
class Payments extends Component {
  render() {
    return (
      <StripeCheckot
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button
          className="btn"
          style={{ margin: "0 10px", backgroundColor: "#15DF97" }}
        >
          Add Credits
        </button>
      </StripeCheckot>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
