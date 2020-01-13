import React, { Component } from "react";

export default class HeaderMenu extends Component {
    constructor(props){
		super(props);
		this.state={
			//listOfContacts:[],
			//enablemodal:false,
			//selectedDeatils:[],
            CourseName:'ABC Company',
            isRightSliderVisible:false
        }
        
        this.toggleSideMenu = this.toggleSideMenu.bind(this);
    }
    
    toggleSideMenu(){
        this.setState((state)=>({
            isRightSliderVisible:!state.isRightSliderVisible
        }));
    }
  
  render() {
    return (
        <header className="container-fluid main_header">
            <div className="pull-left">
                <img src={require("../images/logo.png")} alt="TaxSystems" className="logoImg" />
            </div>

            <div className="pull-right">
                <div className="inlineMiddile right10"><a href="javscript:void(0)" title="Login">Login</a></div>
                <div className="inlineMiddile loggedCompName">ABC Comapany</div>
                <div className="menu_list_sec inlineMiddile" id="menuBar" onClick={this.toggleSideMenu}>
                    <span className="menu_line"></span>
                </div>
                <div className={"fixedUserDetailSec "+(this.state.isRightSliderVisible?'showSlider':'')}>
                    <div className="slideHeader">
                        <div className="inlineMiddile loggedCompName">{this.state.CourseName}</div>
                        <div className="inlineMiddile cur_pointer" id="closeSlideIcon"  onClick={this.toggleSideMenu}>
                            <img src={require("../images/close-button-small.png")} alt="Close-button" title="Close" />
                        </div>
                    </div>
                    <div className="slideDetails flexCenterItems">
                        <div className="userName">Hi, John Doe</div>
                    </div>
                    <div className="slideMenuSec">
                        <ul className="eachSlideMenu">
                            <li>
                                <img src={require("../images/helpIcon.png")} alt="" className="sideMenuImg"/>
                                <div className="sideMenuText">
                                    Help
                                    <div>
                                        <ul className="sideSubMenu">
                                            <li>Technical Support</li>
                                            <li>End User Licence Agreement</li>
                                        </ul>
                                    </div>
                                </div>
                                <span className="clearfix"></span>
                            </li>
                        </ul>
                    </div>
                    <div className="slideLogoutSec">
                        <button className="btn btn-defualt logOutBtn">
                            <span className="inlineMiddile lockSpan"><img src={require("../images/locked-padlock.png")} alt=""/></span>
                            <span className="inlineMiddile btnSeperator">&nbsp;</span>
                            <span className="inlineMiddile logOutSpan">Logout</span>
                        </button>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
        </header>
    );
  }
}
