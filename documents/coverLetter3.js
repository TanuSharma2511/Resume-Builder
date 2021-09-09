module.exports = ({ full_name, email, address, phone, company, date, previous_company, exp_years }) => {
    const today = new Date();
return `
<!DOCTYPE HTML>

<html>
<head>
    <meta charset="UTF-8">
    <title>For Data Analyst</title>
    <link href="resume.css" rel="stylesheet" type="text/css">
    <style>
        
    </style>
</head>

<body>
    <header id="info">
        <h1>${full_name}</h1>
        <span>${address}</span>
    </header>
    <section>
        <p>Mobile No: ${phone}</p>
   </section>
   
        <section>
         <p>${email}</p>
    </section>
   
    <div class="pagebreak"></div>
   
    <section id="online">
        <p>${date}</p>
        
    </section>
    <div class="pagebreak"></div>
    <section class="coverletter" id="coverletter">
        <p>Dear Hiring Manager,</p>

        <p>I'm excited to be applying for the Data Analyst position at ${company}. As someone with a lifetime love of relational mathematics and pattern recognition, I thrive on digging into complex data sets and producing insightful, data-driven strategic recommendations. I'm eager to turn my talent for analyzing big data into actionable growth strategies for ${company}.</p>

        <p>With more than ${exp_years} years of experience as a professional Data Analyst, I am fluent in a wide variety of software and data management systems ranging from traditional options like Excel and MySQL to newer SaaS systems. I have a working knowledge of core programming skills, which has allowed me to develop over 100 custom reporting solutions within each of these data systems and deliver unique, innovative reports to executive leadership.</p>

        <p>Thank you for your time and consideration. I'm looking forward to learning more details about the Data Analyst position and about ${company}. I'm thrilled at the opportunity to use my expertise and experience to identify key data patterns and develop predictive models to help ${company} achieve its strategic and operational goals.</p>

        <p>Sincerely,</p>
        <p>${full_name}</p>
    </section>
</body>
</html>

    `;
};