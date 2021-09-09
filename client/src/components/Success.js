import React, { Component } from 'react';
import resume from "../images/resume_pic5.jpg";

class Success extends Component {
    
    first = e => {
        e.preventDefault();
        this.props.firstStep();
    };

    clearForm = e => {
      e.preventDefault();
      this.props.clearForm();
  };

    finalPdf = e => {
        e.preventDefault();
        this.props.createAndDownloadPdf();
    };
  
    render() {

    
    return (
      <div className="card animated bounceIn centered">
          <form>
         
          
        <div className="text-center suceed centered">
           <div className="container text-center">
            <button type="button" className="btn btn-info finalBtn" onClick={this.clearForm}><i className="fas fa-angle-left mr-1"></i>Build New Resume</button>
                        
            </div>
            <i className="fas fa-check-circle fa-7x text-success"></i>
            <h2>Your Resume is ready. Try download it now!</h2>
            <br/>
            <br/>
            <img src={resume} alt="" />
            <br/>
            <br/>
            <div className="container text-center">
              <button type="button" className="btn btn-info finalBtn" onClick={this.finalPdf}><i className="fas fa-angle-left mr-1"></i>Download your Resume</button>            
            </div>
        </div>  
        <br/>

        
                   
        </form>
      </div>
    )
  }
}

export default Success;
