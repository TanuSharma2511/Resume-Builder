import React, { Component } from 'react';
import "../App.css";

class LetterForm extends Component {
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
          <div className="card animated fadeInLeft centered">
          <div className="card-body">
    
              <h3 className="card-title">Cover Letter Info</h3>
              
          </div>
    
          <p class="heading">Add your letter information</p>
          <div className="personal_section">
          <form onSubmit={this.continue}>
              <div className="col-lg-6 text-left">
                      <label>Email Address*</label>
                      <input type="email" name="email" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.email} required />
                  </div>
                  <br/>
                  <div className="row col-lg-12 mx-auto">
                  <div className="col-lg-6 text-left">
                      <label>Full Name*</label>
                      <input type="text" name="full_name" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.full_name} required />
                  </div>
                  <div className="col-lg-6 text-left">
                      <label>Mobile*</label>
                      <input type="text" name="phone" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.phone} required />
                  </div>
              </div>
              <br />
              <br/>
              <div className="row col-lg-12 mx-auto">
                  <div className="col-lg-6 text-left">
                      <label>Date* (DD-MM-YYYY)</label>
                      <input type="text" name="date" className="form-control" defaultValue={values.status === 1 ? '' : values.date} onChange={handleChange} required/>
                  </div>
                  <div className="col-lg-6 text-left">
                      <label>Company Name*</label>
                      <input type="text" name="company" className="form-control" defaultValue={values.status === 1 ? '' : values.company} onChange={handleChange} required/>
                  </div>
              </div>
              <br />
              <br/>

              <div className="row col-lg-12 mx-auto">
                  <div className="col-lg-6 text-left">
                      <label>Previous Company</label>
                      <input type="text" name="previous_company" className="form-control" defaultValue={values.status === 1 ? '' : values.previous_company} onChange={handleChange} />
                  </div>
                  <div className="col-lg-6 text-left">
                      <label>Experience(in years)</label>
                      <input type="text" name="exp_years" className="form-control" defaultValue={values.status === 1 ? '' : values.exp_years} onChange={handleChange} />
                  </div>
              </div>
              <br/>
              <br/>
         
           
              
              <div className="row col-lg-12 mx-auto">
                  <div className="col-lg-12 text-left">
                      <label>Address*</label>
                      <input type="text" name="address" className="form-control"  defaultValue={values.status === 1 ? '' : values.address} onChange={handleChange} required/>
                    <br/>
                    <br/>
                  </div>
              </div>
    
             
              <div className="container text-center">
                  <button type="button" className="btn btn-info expBtn" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                  <button type="submit" className="btn btn-info expBtn">Next<i className="fas fa-angle-right ml-1"></i></button>
              </div>
              
              <br/>
          </form>
          </div>
      </div>
        );
    }
}

export default LetterForm;
