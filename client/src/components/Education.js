import React, { Component } from "react";
import "../App.css";

export default class Education extends Component {
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
      <div className="card animated">
                <div className="card-body">

                    <h3 className="card-title">Education Info</h3>
                   
                </div>
          
                <p class="heading">Add your Education information</p>
                <div className="education_section">
                <form onSubmit={this.continue}>

                    <div className="row col-lg-12 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>College/University*</label>
                            <input type="text" name="edu1_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_school} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Passing Year*</label>
                            <input type="text" name="edu1_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_year} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Degree*</label>
                            <input type="text" name="edu1_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_qualification} onChange={handleChange} required/>
                        </div>

                    </div>
                    {/* <div className="row col-lg-12 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="edu1_desc" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_desc} onChange={handleChange} required />
                        </div>
                    </div>
 */}
                     <div className="row col-lg-12 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>School Name</label>
                            <input type="text" name="edu2_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_school} onChange={handleChange} />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Passing Year</label>
                            <input type="text" name="edu2_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_year} onChange={handleChange} />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Class</label>
                            <input type="text" name="edu2_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_qualification} onChange={handleChange} />
                        </div>

                    </div>

                    


                    <div className="row col-lg-12 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i></b></h3>
                            <hr/>
                        </div>
                
                    </div>
                    {/* <div className="row col-lg-12 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description</label>
                            <input type="text" name="edu2_desc" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_desc} onChange={handleChange} />
                            <br/>
                        <br/>
                        </div>
                       
                    </div> */}
                    {/* <br />
                    <br/> */}
                    <div className="container text-center">
                        <button type="button" className="btn btn-info eduBtn" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-info eduBtn">Next<i className="fas fa-angle-right ml-1"></i></button>
                    </div>
                    <br />

                </form>
                </div>

            </div>
    );
  }
}