import React, { Component } from 'react';
import "../App.css";
import resume from "../images/coverLetter.jpg";

class SuccessLetter extends Component {
    first = e => {
        e.preventDefault();
        this.props.firstStep();
    };

    finalPdf = e => {
        e.preventDefault();
        this.props.createAndDownloadPdf();
    };

    clearForm = e => {
        e.preventDefault();
        this.props.clearForm();
    }
  
    render() {

    
    return (
      <div className="card animated bounceIn centered">
          <form>
         
          
        <div className="text-center suceed centered">
           <div className="container text-center">
            <button type="button" className="btn btn-info finalBtn" onClick={this.clearForm}><i className="fas fa-angle-left mr-1"></i>Build New Cover Letter</button>
                        
            </div>
            <i className="fas fa-check-circle fa-7x text-success"></i>
            <h2>Your Cover Letter is ready. Try download it now!</h2>
            <br/>
            <br/>
            <img src={resume} alt="Avatar man" />
            <br/>
            <br/>
            <div className="container text-center">
              <button type="button" className="btn btn-info finalBtn" onClick={this.finalPdf}><i className="fas fa-angle-left mr-1"></i>Download your Cover Letter</button>            
            </div>
        </div>  
        <br/>

        
                   
        </form>
      </div>
    )
  }
}

export default SuccessLetter;
