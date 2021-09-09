import React, { Component } from "react";
import "../App.css";

class Personal extends Component {
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

          <h3 className="card-title">Personal Info</h3>
          
      </div>

      <p class="heading">Add your personal information</p>
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
                  <input type="full_name" name="text" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.full_name} required />
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
                  <label>Country*</label>
                  <input type="text" name="country" className="form-control" defaultValue={values.status === 1 ? '' : values.country} onChange={handleChange} required/>
              </div>
              <div className="col-lg-6 text-left">
                  <label>State*</label>
                  <input type="text" name="state" className="form-control" defaultValue={values.status === 1 ? '' : values.state} onChange={handleChange} required/>
              </div>
          </div>
          <br />
          <br/>
          <div className="row col-lg-12 mx-auto">
              <div className="col-lg-6 text-left">
                  <label>Linkedin URL</label>
                  <input type="text" name="linkedin" className="form-control" defaultValue={values.status === 1 ? '' : values.linkedin} onChange={handleChange} />
              </div>
              <div className="col-lg-6 text-left">
                  <label>Github URL</label>
                  <input type="text" name="github" className="form-control" defaultValue={values.status === 1 ? '' : values.github} onChange={handleChange} />
              </div>
          </div>
       
          <div className="row col-lg-12 mx-auto">
              <div className="col-lg-12 text-left">
                  <label>Address*</label>
                  <input type="text" name="address" className="form-control"  defaultValue={values.status === 1 ? '' : values.address} onChange={handleChange} required/>
               
              </div>
          </div>
          
          <div className="row col-lg-12 mx-auto">
              <div className="col-lg-12 text-left">
                  <label>Skills* (Separate each skill with a space and a comma)</label>
                  <input type="text" name="skills" className="form-control"  defaultValue={values.status === 1 ? '' : values.skills} onChange={handleChange} required/>
                <br/>
               
              </div>
          </div>


          <div className="row col-lg-12 mx-auto">
              <div className="col-lg-12 text-left">
                  <label>Objective*</label>
                  <input type="text" name="objective" className="form-control"  defaultValue={values.status === 1 ? '' : values.objective} onChange={handleChange} required/>
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

export default Personal;