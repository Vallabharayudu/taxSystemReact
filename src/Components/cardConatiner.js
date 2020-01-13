import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default class CardContainer extends Component {
  

  computeRiskCss(item) {
    let itemName;
    if (item) {
      itemName = item.RiskCategoryName;
    }

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
    }
  }

  applyChart(stats) {
    //Common chart options for risk cards
    var chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
        margin: 0,
        defaultSeriesType: "areaspline",
        backgroundColor: "#F2F5F8",
        spacingLeft: 0
      },
      title: {
        text: ""
      },

      accessibility: {
        point: {
          valueSuffix: "%"
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: false,
          cursor: "pointer",
          dataLabels: {
            enabled: false
          },
          showInLegend: false
        }
      },
      series: [
        {
          name: "",
          //colorByPoint: true,
          data: [
            {
              name: "Passed",
              y: stats.PassedCount,
              //sliced: false,
              //selected: false,
              color: "#008000"
            },
            {
              name: "Failed",
              y: stats.FailedCount,
              color: "#FF0000"
            },
            {
              name: "Unanswered",
              y: stats.Unanswered,
              color: "#638089"
            }
          ]
        }
      ]
    };
    return chartOptions;
  }

  assessmentInfo(data) {
    if (data.PassedCount + data.FailedCount === 0) {
      return "This assessment hasn't been started yet.";
    } else return data.Percentage + "% completed";
  }
  assessmentStatus(data) {
    if (data.PassedCount + data.FailedCount === 0) {
      return "Start Assessment";
    } else if (data.Unanswered > 0) {
      return "Continue Assessment";
    } else if (data.Unanswered === 0) {
      return "Review Assessment";
    }

    return "";
  }

  startAssessment(data){
		this.props.history.push('/dashBoard/'+data.CategoryId)
		//return <Redirect to='/emp-deatil/this.state.listOfEmplyess[index].id' />
	}

  render() {
    
    const eachCard = this.props.Categories[0].map((item, index) => (
      <div className="col-md-4 col-sm-12 cardColumn" key={index}>
        <div className="risk_card">
          <button
            type="button"
            className={"actionButton " + this.computeRiskCss(item)}
          >
            {item.RiskCategoryName}
          </button>
          <h4 className="risk_card_title">{item.CategoryName}</h4>
          <div className="risk_card_pie_sec row">
            <div className="col-md-6 col-6 fullWidthAndHeight">
              <div
                id={"CardChartContainer" + (index + 1)}
                className="fullWidthAndHeight charts"
              >
                <HighchartsReact
                  highcharts={Highcharts}
                  options={this.applyChart(item)}
                />
              </div>
            </div>
            <div className="col-md-6 col-6">
              <table className="legendsTable">
                <tbody>
                  <tr>
                    <td>
                      <strong>{item.PassedCount}</strong>
                    </td>
                    <td>
                      <span className="legendCircle legendPassed">&nbsp;</span>
                    </td>
                    <td>judged as Passed</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>{item.FailedCount}</strong>
                    </td>
                    <td>
                      <span className="legendCircle legendfailed">&nbsp;</span>
                    </td>
                    <td>judged as Failed</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>{item.Unanswered}</strong>
                    </td>
                    <td>
                      <span className="legendCircle">&nbsp;</span>
                    </td>
                    <td>not judged yet</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="clearfix"></div>
          </div>
          <div
            className="risk_card_overlay overlaySec"
            id={"sysAnddelivaryCardLayer" + index}
          >
            <div>
              <h4 className="risk_card_title">{item.CategoryName}</h4>
            </div>
            <div style={{ margin: "30px 0 15px" }}>
              {this.assessmentInfo(item)}
            </div>
            <button className="actionButton" disabled={!item.IsActive}  onClick={this.startAssessment.bind(this,item)}>
              {this.assessmentStatus(item)}
            </button>
          </div>
        </div>
        <div className="risk_card_mobile_overlay overlaySec">
          <div
            className="inlineMiddile"
            style={{ width: "calc(100% - 205px)" }}
          >
            {this.assessmentInfo(item)}
          </div>
          <button className="actionButton inlineMiddile" disabled={!item.IsActive}>
            {this.assessmentStatus(item)}
          </button>
        </div>
      </div>
    ));
    return (
      <React.Fragment>
        <div className="row cardsRow">{eachCard}</div>
      </React.Fragment>
    );
  }
}

