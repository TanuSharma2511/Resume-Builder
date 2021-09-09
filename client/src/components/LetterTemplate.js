import React, { Component } from 'react';
import "../App.css";

class LetterTemplate extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };
    formLetter = e => {
        e.preventDefault();
        this.props.formLetter();
      };
    chooseLetter = e => {
        e.preventDefault();
        this.props.chooseLetter();
    };  

    render() {
        const { values, handleChange } = this.props;
        return (
            // <div class ="botWrapper">
        <div className="card animated fadeInLeft centered">
        <div className="card-body">
         <h3 className="card-title">Letter Template Selection</h3>
        </div>
        <h1>Select your favourite letter template</h1>
        <p class="heading">We have 3 types of cover letter samples</p>
         <br/>
         <br/>
            <form onSubmit={this.formLetter}>
            <div class="container">
                <div>
              <label class="option_item">
                <input type="radio" class="checkbox" name="template_no" value="4" onChange={handleChange}/>
                <div class="option_inner facebook">
                  <div class="tickmark"></div>
                  <div class="icon"><i class="fa fa-android" aria-hidden="true"></i></div>
                  <div class="name"><b>SOFTWARE ENGINEER </b></div>
                </div>
              </label>
            </div>
            <div>
              <label class="option_item">
                <input type="radio" class="checkbox" name="template_no" value="5" onChange={handleChange}/>
                <div class="option_inner twitter">
                  <div class="tickmark"></div>
                  <div class="icon"><i class="fa fa-android" aria-hidden="true"></i></div>
                  <div class="name"><b>SALES MANAGER</b></div>
                </div>
              </label>
            </div>
            <div>
              <label class="option_item">
                <input type="radio" class="checkbox" name="template_no" value="6" onChange={handleChange}/>
                <div class="option_inner instagram">
                  <div class="tickmark"></div>
                  <div class="icon"><i class="fa fa-android" aria-hidden="true"></i></div>
                  <div class="name"><b>DATA ANALYST POSITION</b></div>
                </div>
              </label>
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
              <button type="button" className="btn btn-info expBtn" onClick={this.chooseLetter}><i className="fas fa-angle-left mr-1"></i>Back</button>
              <button type="submit" className="btn btn-info expBtn">Next<i className="fas fa-angle-right ml-1"></i></button>
          </div>

        </form>       
        </div>
        )
    }
}

export default LetterTemplate;
