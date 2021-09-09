import React, { Component } from 'react';
import "../App.css";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Front extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        return (
            <div className="front_screen">
            <div className="col-lg-8 mx-auto text-center mt-5 centered">
          <h1><b>Let's generate your Resume!</b></h1>
          <p className="lead">Please provide accurate and clear description wherever necessary.</p>
          {/* <button type="button" className="btn btn-info splitButton" onClick={this.continue}><i className="fas fa-angle-left mr-1"></i>Build Your Resume</button> */}
          <Link className="btn btn-info splitButton" to={`/login`}>Build Your Resume</Link>
          <hr />
        </div>  
        {/* <div className = "split right">
            
        <div className="container text-center centered">
        <img src={resume} alt="Avatar man" />
            
        </div>

        <button type="button" className="btn btn-info splitButton" onClick={this.continue}><i className="fas fa-angle-left mr-1"></i>Build Your Resume</button>
        </div> */}
            </div>
        )
    }
}

export default Front;
