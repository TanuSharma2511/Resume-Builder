import React, { Component } from 'react';
import resumeTemp1 from "../images/resume1.PNG";
import resumeTemp2 from "../images/template2.PNG";
import resumeTemp3 from "../images/template5.PNG";
import "../App.css";

class ResumeTemplate extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };

    render() {
      const { values, handleChange } = this.props;
        return (
            // <div class ="botWrapper">
        <div className="card animated fadeInLeft centered">
        <div className="card-body">
         <h3 className="card-title">Resume Template Selection</h3>
        </div>

        <p class="heading">Choose your favourite resume template</p>
         <br/>
         <br/>
            <form onSubmit={this.continue}>
            <div class="container">
                <div>
              <label class="option_item">
                <input type="radio" class="checkbox" name="template_no" value="1" onChange={handleChange}/>
                <div class="option_inner facebook">
                  <div class="tickmark"></div>
                  <div class="name"><img class="templatee" src={resumeTemp1}/></div>
                </div>
              </label>
            </div>
            <div>
              <label class="option_item">
                <input type="radio" class="checkbox" name="template_no" value="2" onChange={handleChange}/>
                <div class="option_inner twitter">
                  <div class="tickmark"></div>
                  <div class="name"><img class="templatee" src={resumeTemp2}/></div>
                </div>
              </label>
            </div>
            <div>
              {/* <label class="option_item">
                <input type="radio" class="checkbox" name="template_no" value="3" onChange={handleChange}/>
                <div class="option_inner instagram">
                  <div class="tickmark"></div>
                  <div class="name"><img class="templatee" src={resumeTemp3}/></div>
                </div>
              </label> */}
              </div>
            {/* <div>
              <label class="option_item">
                <input type="radio" class="checkbox" name="template_no" value="4" onChange={handleChange}/>
                <div class="option_inner linkedin">
                  <div class="tickmark"></div>
                  <div class="icon"><i class="fa fa-android" aria-hidden="true"></i></div>
                  <div class="name">BOT - 4</div>
                </div>
              </label>
            </div>  */}
        </div>

        <div className="container text-center">
              <button type="button" className="btn btn-info expBtn" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
              <button type="submit" className="btn btn-info expBtn">Next<i className="fas fa-angle-right ml-1"></i></button>
          </div>

        </form>       
        </div>
        )
    }
}

export default ResumeTemplate;
