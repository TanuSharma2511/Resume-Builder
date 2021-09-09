import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Personal from './Personal';
import Project from './Project';
import ResumeTemplate from './ResumeTemplate';
import LetterTemplate from './LetterTemplate';
import LetterForm from './LetterForm';
import Experience from './Experience';
import Miscelleneous from './Miscelleneous';
import Education from './Education';
import StartPage from './StartPage';
import Choose from './Choose';
import Success from './Success';
import SuccessLetter from './SuccessLetter';
import Login from './auth/Login';

class UserForm extends Component {

    state = {

        step: 0,
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        skills: '',

        exp1_org: '',
        exp1_pos: '',
        exp1_desc: '',
        exp1_dur: '',

        exp2_org: '',
        exp2_pos: '',
        exp2_desc: '',
        exp2_dur: '',

        proj1_title: '',
        proj1_link: '',
        proj1_desc: '',

        proj2_title: '',
        proj2_link: '',
        proj2_desc: '',

        edu1_school: '',
        edu1_year: '',
        edu1_qualification: '',
        edu1_desc: '',

        edu2_school: '',
        edu2_year: '',
        edu2_qualification: '',
        edu2_desc: '',

        extra_1: '',
        extra_2: '',
        extra_3: '',
        extra_4: '',
        extra_5: '',

        status: 0,

        address:'',
        full_name:'',
        date:'',
        company:'',
        previous_company:'',
        exp_years: '',

        template_no: 0

    }

    //Clear the form
    clearForm = () => {
        const { step } = this.state;
        this.setState({
        step: 0,
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        skills: '',
        country: '',
        state: '',

        exp1_org: '',
        exp1_pos: '',
        exp1_desc: '',
        exp1_dur: '',

        exp2_org: '',
        exp2_pos: '',
        exp2_desc: '',
        exp2_dur: '',

        proj1_title: '',
        proj1_link: '',
        proj1_desc: '',

        proj2_title: '',
        proj2_link: '',
        proj2_desc: '',

        edu1_school: '',
        edu1_year: '',
        edu1_qualification: '',
        edu1_desc: '',

        edu2_school: '',
        edu2_year: '',
        edu2_qualification: '',
        edu2_desc: '',

        extra_1: '',
        extra_2: '',
        extra_3: '',
        extra_4: '',
        extra_5: '',

        status: 0,

        template_no: 0,

        objective: '',

        languages: '',
        awards: '',
        hobbies: ''

        });
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Go to letter template page
    currentStep = () => {
        const { step } = this.state;
        this.setState({
            step: 9
        });
    };

    // Go to Form Letter
    formLetter = () => {
        const { step } = this.state;
        this.setState({
            step: 10
        });
    };

    //Go back to starting Page
    firstStep = () => {
        const { step } = this.state;
        this.setState({
            step: 0
        });
    };

    //Go to choose step
    chooseLetter = () => {
        const { step } = this.state;
        this.setState({
            step: 1
        });
    };

    submitted = () => {
        const { status } = this.state;
        this.setState({
            status: status + 1
        });
    }

    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

    
    createAndDownloadPdf = () => {
        axios.post('http://localhost:3001/create-pdf', this.state)
          .then(() => axios.get('http://localhost:3001/fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf.pdf');
          })
      }

    // formSubmit = (e) => {
    //      e.preventDefault();

    //     const data = {
    //         name: this.state.name,
    //         email: this.state.email,
    //         phone: this.state.phone,
    //         linkedin: this.state.linkedin,
    //         github: this.state.github,
    //         skills: this.state.skills,

    //         exp1_org: '',
    //         exp1_pos: '',
    //         exp1_desc: '',
    //         exp1_dur: '',
    //     }

    //     axios.post('/create-pdf', data)
    //         .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
    //         .then((res) => {
    //             const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

    //             saveAs(pdfBlob, 'Resume.pdf');
    //         });

    //     e.target.reset();

    // } 

    // createAndDownloadPdf = () => {
    //   axios.post('/create-pdf', this.state)
    //        .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
    //        .then((res) => {
    //           const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
  
    //           saveAs(pdfBlob, 'Resume.pdf');
    //        })
    // } 

    render() {
        const { step } = this.state;
        const { name, email, phone, linkedin, github, skills, exp1_org, exp1_pos, exp1_desc, exp1_dur,
            exp2_org, exp2_pos, exp2_desc, exp2_dur, status, proj1_title, proj1_link, proj1_desc,
            proj2_title, proj2_link, proj2_desc, edu1_school, edu1_year, edu1_qualification,
            edu1_desc, edu2_school, edu2_year, edu2_qualification, edu2_desc, extra_1, extra_2,
            extra_3, extra_4, extra_5 } = this.state;
        const values = {
            name, email, phone, linkedin, github, skills, exp1_org, exp1_pos, exp1_desc, exp1_dur,
            exp2_org, exp2_pos, exp2_desc, exp2_dur, edu1_school, edu1_year, edu1_qualification,
            edu1_desc, edu2_school, edu2_year, edu2_qualification, edu2_desc, status, proj1_title,
            proj1_link, proj1_desc,
            proj2_title, proj2_link, proj2_desc,
            extra_1, extra_2,
            extra_3, extra_4, extra_5
        };

        switch (step) {

            case 0:
                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center">

                            <StartPage
                                 nextStep={this.nextStep}
                                 submitted={this.submitted} />
                            
                        </div>
                        <br />
                    </div>
                );

                case 1:
                    return (
                        <div className="App pt-5 mt-5">
                            <div className="container col-lg-8 mx-auto text-center">
    
                                <Choose
                                     nextStep={this.nextStep}
                                     submitted={this.submitted} 
                                    currentStep={this.currentStep} />
                            </div>
                            <br />
                        </div>
                    );

                case 2:
                    return (
                        <div className="App_personal">
                            <div className="container text-center">
    
                                <ResumeTemplate
                                    values={this.state}
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    submitted={this.submitted} 
                                    prevStep={this.prevStep}                       
                                />
                            </div>
                            <br />
                        </div>
                    );

            case 3:
                return (
                    <div className="App_personal">
                        <div className="container text-center">

                            <Personal
                                values={this.state}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                submitted={this.submitted}   
                                prevStep={this.prevStep}                     
                            />
                        </div>
                        <br />
                    </div>
                );

            case 4:

                return (
                    <div className="App">
                        <div className="containern text-center">

                            <Education
                                values={this.state}
                                prevStep={this.prevStep}
                                submitted={this.submitted}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 5:

                return (
                    <div className="App">
                        <div className="containern text-center">

                            <Experience
                                values={this.state}
                                prevStep={this.prevStep}
                                submitted={this.submitted}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

                case 6:

                    return (
                        <div className="App">
                            <div className="containern text-center">
    
                                <Project
                                    values={this.state}
                                    prevStep={this.prevStep}
                                    submitted={this.submitted}
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                />
                            </div>
                            <br />
                        </div>
                    );

            case 7:

                return (
                    <div className="App">
                        <div className="containern text-center">

                            <Miscelleneous
                                values={this.state}
                                prevStep={this.prevStep}
                                submitted={this.submitted}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );



            case 8:

                return (
                    <div className="App">
                        <div className="container text-center">

                            <Success
                            firstStep={this.firstStep}
                            submitted={this.submitted}
                            formSubmit={this.formSubmit}
                            createAndDownloadPdf = {this.createAndDownloadPdf}
                            clearForm = {this.clearForm} />
                        </div>
                        <br />
                    </div>
                );

                case 9:

                return (
                    <div className="App">
                        <div className="container text-center">

                        <LetterTemplate
                            values={this.state}
                            handleChange={this.handleChange}
                            submitted={this.submitted} 
                            prevStep={this.prevStep}     
                            formLetter = {this.formLetter}      
                            chooseLetter = {this.chooseLetter}            
                        />

                        </div>
                        <br />
                    </div>
                );

                case 10:

                return (
                    <div className="App">
                        <div className="container text-center">

                            <LetterForm
                            values={this.state}
                            handleChange={this.handleChange}
                            firstStep={this.firstStep}
                            prevStep={this.prevStep}
                            submitted={this.submitted}
                            nextStep={this.nextStep}
                            formSubmit={this.formSubmit}
                            createAndDownloadPdf = {this.createAndDownloadPdf} />
                        </div>
                        <br />
                    </div>
                );

                case 11:

                return (
                    <div className="App">
                        <div className="container text-center">

                            <SuccessLetter
                            values={this.state}
                            handleChange={this.handleChange}
                            firstStep={this.firstStep}
                            prevStep={this.prevStep}
                            submitted={this.submitted}
                            nextStep={this.nextStep}
                            formSubmit={this.formSubmit}
                            firstStep={this.firstStep}
                            createAndDownloadPdf = {this.createAndDownloadPdf}
                            clearForm = {this.clearForm} />
                        </div>
                        <br />
                    </div>
                );


        }
    }
}

export default UserForm;
