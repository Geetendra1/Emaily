import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">login with google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <button
            key="2"
            style={{ margin: "0 10px", backgroundColor: "#15DF97" }}
            className="btn"
          >
            Credits: {this.props.auth.credits}
          </button>,
          <button
            key="3"
            style={{ margin: "0 10px", backgroundColor: "#15DF97" }}
            className="btn"
          >
            <a href="/api/logout">logout</a>
          </button>
        ];
    }
  }
  render() {
    return (
      <nav style={{ background: "#707B7C" }}>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
