import React, { Component } from 'react';
import "../App.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logoutUser} from "../actions/authAction";
import resume from "../images/resume_pic.png";

class StartPage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

   

    render() {
        return (
            <div className="split left">
                <div className="log_button"><button onClick={()=> this.props.logoutUser()}>Logout</button></div>
            <div className="col-lg-8 mx-auto text-center mt-5 centered">
          <h1><b>Let's generate your Resume!</b></h1>
          <p className="lead">Please provide accurate and clear description wherever necessary.</p>
          
          <hr />
        </div>  
        <div className = "split right">
        
        <div className="container text-center centered">
        <img src={resume} alt="Avatar man" />
            
        </div>

        <button type="button" className="btn btn-info splitButton" onClick={this.continue}><i className="fas fa-angle-left mr-1"></i>Build Your Resume</button>
        </div>
            </div>
        )
    }
}

StartPage.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    errors:state.errors
  })
  
  export default connect(mapStateToProps,{logoutUser})(StartPage);
