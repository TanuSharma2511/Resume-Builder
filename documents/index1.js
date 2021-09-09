module.exports = ({ full_name, email, phone, objective, address, linkedin, github, skills, exp1_org, exp1_pos, exp1_desc, exp1_dur, exp2_org, exp2_pos, exp2_desc, exp2_dur,
	proj1_title, proj1_link, proj1_desc,
	proj2_title, proj2_link, proj2_desc,
	edu1_school, edu1_year, edu1_qualification,
	edu1_desc, edu2_school, edu2_year, edu2_qualification, edu2_desc,
	languages, hobbies, awards
   }) => {
    const today = new Date();
return `
    
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<title>Resume | First Last</title>
	<meta name="robots" content="noindex, nofollow" />
	<style type="text/css" media="all">
		html{
			background-color:#EEE;
			padding:0 1em;
			}
		body {
			background-color:#FFF;
			font-family:"Trebuchet MS", Helvetica, Arial;
			padding:1em;
			border:solid #AAA;
			border-width:1px 3px 3px 1px;
			margin:1em auto;
			max-width: 50em;
			}
		#address{
			height:5em;
			width:47em;
			margin:1em 0 1em 0;
			}
		#address div{
			width:13em;
			float:left;
			padding:0 .5em 0 1.5em;
			border-left:1px solid #CCC;
			}
		#address div#first{
			border-left:none;
			}
		#address h3{
			border-bottom: none;
			margin-top: 0;
			}	
		.date {
			float:right;
			font-size:.8em;
			margin-top:.4em;
			text-align:right;
			}
		abbr, acronym{
			border-bottom:1px dotted #333;
			cursor:help;
			}	
		address{
			font-style:italic;
			color:#333;
			font-size:.9em;
			}
			
		
		h1{
			font-size:1.5em;
			font-family: Helvetica, Verdana, Arial, sans-serif;
			}
		h2 {
			clear:both;
			font-size: 1.4em;
			font-weight:bold;
			margin-top:2em;
			font-variant: small-caps;
			padding-left:.25em;
			background-color:#EEE;
			border-bottom: 1px solid #999;
			letter-spacing: .06em;
			}
		h3 {margin: 1em 0 0 0;}
	</style>
	<style type="text/css" media="print">
		body {
			background-color:#FFF;
			border-width:0 0 0 0;
			margin:0;
			width:100%
			}
	</style>
</head>
<body>
	<h1>${full_name}</h1>
	<div id="address">
		<div id="first">
			<h3>${full_name}</h3>
			Mobile No: ${phone}<br />
			<a href="mailto:${email}">${email}</a><br />
		</div>
		<div>
			<h3>Address</h3>
			${address}
		</div>
		<div>
			<h3>Links</h3>
			${linkedin}<br>
			${github}<br>
		</div>
	</div>
	
	<h2>Objective</h2>
	<ul>
		${objective}
	</ul>
	
	
	<h2>Work Experience</h2>
	<span class="date">Duration: ${exp1_dur}</span>
	<h3>${exp1_org}</h3>
	<address>${exp1_pos}</address>
	<ul>
		${exp1_desc}
	</ul>

	<span class="date">Dur: ${exp1_dur}</span>
	<h3>${exp2_org}</h3>
	<address>${exp2_pos}</address>
	<ul>
		${exp2_desc}
	</ul>
	

	<h2>Skills</h2>
	<ul>
		${skills}
	</ul>

	<h2>Education</h2>
	<ul>
		<li>${edu1_school} - ${edu1_qualification} - ${edu1_year}</li> <br/>
		${edu2_school} - ${edu2_qualification} - ${edu2_year}
	</ul>
	
	
	<h2>Interest / Volunteer</h2>
	<span class="date"></span>
	<b>Languages Known : </b> ${languages} <br/>
	<b>Hobbies : </b> ${hobbies} <br/>
	<b>Awards/Achievements : </b> ${awards} <br/>

	
	<h2>Project Work</h2>
	<h3>${proj1_title}</h3>
	<address>${proj1_link}</address>
	<ul>
		${proj1_desc}
	</ul>

	<h3>${proj2_title}</h3>
	<address>${proj2_link}</address>
	<ul>
		${proj2_desc}
	</ul>
	
	
	
</body>
</html>
    `;
};