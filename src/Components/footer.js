import React, {Component} from 'react';
export default class Footer extends Component{

    render(){
        return(
            <div className="mainWrapperAsContainer">
			<div className="row">
				<div className="col-md-6 col-lg-6 col-sm-6">&copy; {new Date().getFullYear()} - Tax Computer Systems Limited</div>
				<div className="col-md-6 col-lg-6 col-sm-6 alignRightInBigScreen">Licensed to SAKUMA</div>
			</div>
		</div>
        )
    }
}