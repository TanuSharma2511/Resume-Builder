const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const path = require('path');
const mongoose=require("mongoose");
const passport = require("passport");
const { MONGOURI } = require("./config/keys");

const pdfTemplate1= require("./documents/index1");
const pdfTemplate2 = require("./documents/index2");
const pdfTemplate3 = require("./documents/index3");

const letterTemplate1= require("./documents/coverLetter1");
const letterTemplate2= require("./documents/coverLetter2");
const letterTemplate3= require("./documents/coverLetter3");

const portfolioTemplate1= require("./documents/portfolio1");
const portfolioTemplate2= require("./documents/portfolio2");
const portfolioTemplate3= require("./documents/portfolio3");

  const app = express();
  
  // // Connect Database
  mongoose.connect(MONGOURI, { useNewUrlParser: true })
  const db = mongoose.connection;                                                                                
  db.on('error', error => console.error(error))
  db.once('open', () => console.log('Connected to Mongoose'));

  
  
//passport middleware
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

const port = process.env.PORT || 3001;

app.use('/api/users', require('./routes/user'));

//Passport Config
require("./config/passport")(passport);
  

app.post('/create-pdf', (req, res) => {
    console.log(req.body.template_no);

    if(req.body.template_no == 1){
        pdf.create(pdfTemplate1(req.body), {}).toFile('result.pdf', (err) => {
            if(err) {
                res.send(Promise.reject());
            }
    
            res.send(Promise.resolve());
        });
    }

    if(req.body.template_no == 2){
        pdf.create(pdfTemplate2(req.body), {}).toFile('result.pdf', (err) => {
            if(err) {
                res.send(Promise.reject());
            }
    
            res.send(Promise.resolve());
        });
    }

    if(req.body.template_no == 3){
        pdf.create(pdfTemplate3(req.body), {}).toFile('result.pdf', (err) => {
            if(err) {
                res.send(Promise.reject());
            }
    
            res.send(Promise.resolve());
        });
    }

    if(req.body.template_no == 4){
        pdf.create(letterTemplate1(req.body), {}).toFile('result.pdf', (err) => {
            console.log(req.body);
            if(err) {
                res.send(Promise.reject());
            }
    
            res.send(Promise.resolve());
        });
    }

    if(req.body.template_no == 5){
        pdf.create(letterTemplate2(req.body), {}).toFile('result.pdf', (err) => {
            if(err) {
                res.send(Promise.reject());
            }
    
            res.send(Promise.resolve());
        });
    }

    if(req.body.template_no == 6){
        pdf.create(letterTemplate3(req.body), {}).toFile('result.pdf', (err) => {
            if(err) {
                res.send(Promise.reject());
            }
    
            res.send(Promise.resolve());
        });
    }
    
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

  // Serve static assets in production
  if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.listen(port, () => console.log(`Listening on port ${port}`));