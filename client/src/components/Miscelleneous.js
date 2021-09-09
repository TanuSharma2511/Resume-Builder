import React, { Component } from "react";
import "../App.css";

export default class Miscelleneous extends Component {
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
      <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title"><p className="head">Miscellaneous</p></h3>
                    <hr />
                </div>
                <br/>
                <br/>

                <p class="heading">Add some additional information</p>
                <br/>

                <div className="miscelleneous_sector">
                <form onSubmit={this.continue}>
                    <div className="row col-lg-12 mx-auto">

                        <div className="col-lg-6 md-form text-left">
                        <label htmlFor="extra_1">Languages Known* (separated by comma)</label>
                            <input type="text" name="languages" className="form-control" defaultValue={values.status === 1 ? '' : values.languages} onChange={handleChange} required />
                            
                        </div>
                        <div className="col-lg-6 md-form text-left">
                        <label htmlFor="extra_2">Hobbies* (separated by comma)</label>
                            <input type="text" name="hobbies" className="form-control" defaultValue={values.status === 1 ? '' : values.hobbies} onChange={handleChange} required />
                            
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    {/* <div className="row col-lg-12 mx-auto">

                        <div className="col-lg-6 md-form text-left">
                        <label htmlFor="extra_3">Activity/Achievement</label>
                            <input type="text" name="extra_3" id="extra_3" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_3} onChange={handleChange} required />
                            
                        </div>
                        <div className="col-lg-6 md-form text-left">
                        <label htmlFor="extra_4">Activity/Achievement</label>
                            <input type="text" name="extra_4" id="extra_4" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_4} onChange={handleChange} required />
                           
                        </div>
                    </div> */}

                    <div className="row col-lg-12 mx-auto">
                        <div className="col-lg-12 md-form text-left">
                        <label htmlFor="extra_5">Awards/Achievement* (Separated By Comma)</label>
                            <input type="text" name="awards" id="extra_5" className="form-control" defaultValue={values.status === 1 ? '' : values.awards} onChange={handleChange} required/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-info miscelleneousBtn" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-info miscelleneousBtn">Next<i className="fas fa-download ml-1"></i></button>
                    </div>
                    <br />
                </form>
                </div>
            </div>
    );
  }
}