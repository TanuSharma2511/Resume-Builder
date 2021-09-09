import React, { Component } from 'react';
import "../App.css";
import resume from "../images/resume_pic.png";
import resume1 from "../images/coverLetter.jpg";

class Choose extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    letterStep = e => {
        e.preventDefault();
        this.props.currentStep();
    };

    render() {
        return (
            <div className="split left">
             <div className="container text-center centered">
            <img src={resume} alt="Avatar man" />
            
        </div> 
        <button type="button" className="btn btn-info resumeBtn splitButton" onClick={this.continue}><i className="fas fa-angle-left mr-1"></i>Design Your Resume</button>
        <div className = "split right">
            
        <div className="container text-center centered">
        <img src={resume1} alt="Avatar man" />
            
        </div>

        <button type="button" className="btn btn-info splitButton" onClick={this.letterStep}><i className="fas fa-angle-left mr-1"></i>Design Your Cover Letter</button>
        </div>
            </div>
        )
    }
}

export default Choose;
