import React, { Component } from "react";
import HeaderMenu from "./headermenu";
import Footer from "./footer";
import RiskHeader from "./riskHeader";
import CardContainer from "./cardConatiner";

import $ from "jquery";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      serviceBaseUrl:
        "https://gtz-proj-neo-01.southindia.cloudapp.azure.com/JsonToWebAPI2/v1",
        showHomeLoader:true
    };
  }
  componentDidMount() {
    $.ajax({
      url: `${this.state.serviceBaseUrl}/Categories/RiskProfiles`,
      dataType: "json",
      success: function(data) {
        this.setState({
          categories: data
        });
        console.log(data);
      }.bind(this),
      error: function(error) {
        console.log(error);
      }
    });
    this.setState({
      showHomeLoader:false
    })
    document.documentElement.className +=
    "ontouchstart" in document.documentElement
      ? "touch-app "
      : "no-touch-app ";
      console.log('Did Mount')
  }

  render() {
    let Categories = this.state.categories;
    return (
      <div>
        <div className="fixedHeader">
          <header>
            <HeaderMenu />
          </header>
          <section className="dashboard_sec flexAsColumn">
            <div className="mainWrapperAsContainer dashboardHeader">
              Dashboard - Business Risk Review +
            </div>
          </section>
          { this.state.categories.length ? <RiskHeader Categories={[Categories]} /> : null }
          
        </div>
        <div
          className="mainWrapperAsContainer main_content_sec"
          id="mainContent"
        >
          { this.state.categories.length ? <CardContainer Categories={[Categories]} {...this.props} /> : null }
          
        </div>
        <footer>
          <Footer />
        </footer>
        <div className={"appLoaderContent fixedLoader "+(this.state.showHomeLoader?"":'hideElement')} id="pageLoader">
          <div className="appLoaderProgress">
            <div className="appLoader"></div>
          </div>
        </div>
      </div>
    );
  }
}
