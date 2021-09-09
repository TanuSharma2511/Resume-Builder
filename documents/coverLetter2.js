module.exports = ({ full_name, email, address, phone, company, date, previous_company, exp_years }) => {
    const today = new Date();
return `
<!DOCTYPE HTML>

<html>
<head>
    <meta charset="UTF-8">
    <title>For Sales Manager</title>
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

        <p>I'm delighted to apply for the Sales Manager position at ${company}, and I'm looking forward to interviewing for this job opening. Working with others for a common goal in a team environment is a highly rewarding career. I have always had a passion for working in the retail industry, and I believe that I would be an excellent fit for this job.</p>

        <p>Working in the sales industry requires a lot of hard work, patience, and the ability to connect with potential clients. I believe that my prior work experience at ${previous_company} has adequately prepared me for the Sales Manager position at ${company}, and I would be a valuable asset to the company. I also believe that practices like always being professional and treating each individual with the utmost respect are essential for experiencing long-term success in the sales field.</p>

        <p>Thank you for taking the time to review my resume and cover letter. I'm looking forward to learning more about ${company}, and I hope to meet with you very soon. I believe that my education level, work history, and unique skill set make me a valuable candidate for the Sales Manager position at ${company}, and I hope to advance to the next stage of the hiring process.</p>

        <p>Sincerely,</p>
        <p>${full_name}</p>
    </section>
</body>
</html>

    `;
};