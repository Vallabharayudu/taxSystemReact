import React, { Component } from "react";
import HeaderMenu from "./headermenu";
import Footer from "./footer";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: this.props.match.params.id
    };
  }
  render() {
    return (
      <div>
        <div className="fixedHeader">
          <header>
            <HeaderMenu />
          </header>
        </div>
        <div
          className="mainWrapperAsContainer main_content_sec"
          id="mainContent"
        >
          content will go here {this.state.selectedId}
          
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
