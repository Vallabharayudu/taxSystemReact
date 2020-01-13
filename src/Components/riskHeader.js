import React, { Component } from "react";

export default class RiskHeader extends Component {
  constructor(props){
    super(props);
    this.stats={
      empty:'Epmty variable'
    }
    
  }

  renderSwitch(item){
      console.log('class compute',item)
        let itemName = item?item.RiskCategoryName:'';
    switch (itemName) {
        case "Moderate Risk":
          return "moderateRisk noBorder";
        case "Low Risk":
          return "lowRisk noBorder";
        case "Moderate-High Risk":
          return "highModerateRisk noBorder";
        case "High Risk":
          return "highRisk noBorder";
        default:
          return "";
      };
  };

  render() {
    console.log('Risk Header',this.props.Categories[0])
        return (
      <React.Fragment>
        <div className={"riskTypeBar noRisk "+(this.renderSwitch(this.props.Categories[0][0]))}>
          <span>{this.props.Categories[0][0].RiskCategoryName}</span>
        </div>
      </React.Fragment>
    );
  }
}
