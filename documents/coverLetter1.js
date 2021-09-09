module.exports = ({ full_name, email, address, phone, company, date, previous_company, exp_years
   }) => {
    const today = new Date();
return `
<!DOCTYPE HTML>

<html>
<head>
    <meta charset="UTF-8">
    <title>For Software Engineer</title>
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

        <p>I'm excited to be applying for the Software Engineer position at ${company}. As someone who is highly focused and attentive to detail, I thrive on building quality systems that surpass end users' expectations. I'm thrilled at the opportunity to show off my technical expertise and leadership skills as part of ${company}'s expert team.</p>

        <p>During my previous role at ${previous_company}, I was charged with developing innovative solutions across a variety of software platforms. I was instrumental in developing mobile-ready expense tracking software for our fast-growing portfolio of real estate clients. In 2016, I led the development of a proprietary document management system and was responsible for the successful migration of all client content from our legacy system to the new platform.</p>

        <p>Thank you for your time and consideration. I'm looking forward to learning more details about the Software Engineer position at River Tech. I'm excited about the opportunity to leverage my unique range of skills, and I'm eager to demonstrate my commitment to developing world-class software solutions for River Tech.</p>

        <p>Sincerely,</p>
        <p>${full_name}</p>
    </section>
</body>
</html>

    `;
};