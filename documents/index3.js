module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link rel="stylesheet" href="style.css" />
    <title>CV</title>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Merriweather');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
@import url('https://fonts.googleapis.com/css?family=Roboto');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', 'Merriweather', sans-serif;
  font-size: 16px;
  color: #333;
}

.page {
  position: relative;
  width: 230mm;
  /* height: 325mm; */
  margin: 0 auto;
  padding: 5mm 8mm;
  background-color: #fafafa;
}

.heading {
  color: #005c85;
}

.summary {
  padding: 3mm 0 5mm;
  font-size: 0.85rem;
  line-height: 1.6;
  text-align: justify;
}

.main {
  display: flex;
}

.main__left {
  width: 80mm;
}

.main__left section {
  margin-bottom: 2em;
}

.main__right {
  width: calc(100% - 60mm);
  margin-left: 15mm;
}

.section {
  margin-bottom: 1.2rem;
}

.section:last-child {
  margin-bottom: 0;
}

.section__title {
  margin-bottom: 0.5em;
  padding: 0.1em 0;
  border-bottom: 0.05rem solid #d5d6d6;
  color: #005c85;
}

.section__content {
  position: relative;
  font-size: 0.85rem;
}

.section__entry {
  margin-bottom: 1em;
}

.section__entry:last-child {
  margin-bottom: 0;
}

.personal-info-title {
  color: #000;
  margin-bottom: 0.3em;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.skill-item__levels > div {
  display: inline-block;
  vertical-align: middle;
  width: 14px;
  height: 14px;
  margin: 0 0.1em;
  border: 1px solid #0075a7;
  border-radius: 50%;
}

.skill-item__levels.level1 > div:nth-child(-n + 1),
.skill-item__levels.level2 > div:nth-child(-n + 2),
.skill-item__levels.level3 > div:nth-child(-n + 3),
.skill-item__levels.level4 > div:nth-child(-n + 4),
.skill-item__levels.level5 > div:nth-child(-n + 5) {
  background-color: #0075a7;
}

.timeline {
  display: flex;
}

.timeline__date {
  flex-grow: 1;
  width: 18mm;
  line-height: 1.6;
}

.timeline__content {
  width: calc(100% - 18mm);
  padding: 0.1em 0 1.6em 1.2em;
  border-left: 1px dashed gray;
}

.timeline:last-child .timeline__content {
  padding: 0 0 0.5em 1.2em;
}

.timeline__title {
  margin-bottom: 0.3em;
}

.timeline__title > span:first-child {
  font-size: 1rem;
  font-weight: bold;
}

.timeline__title > span:nth-child(2) {
  padding-left: 0.4em;
  font-size: 0.9rem;
  color: #515151;
  font-weight: 500;
}

.timeline__list {
  margin-left: 1.2em;
  margin-bottom: 0.2em;
}

.timeline__list li {
  line-height: 1.4;
  padding: 0.05em 0;
}

.timeline__subtitle {
  font-style: italic;
  margin: 0.35em 0 0.25em 0;
}

#personal-info {
  width: 100%;
  margin: 1em 0;
}

#personal-info .section__content {
  display: flex;
  justify-content: space-between;
}
    </style>
  </head>
  <body>
    <div class="page">
      <header>
        <h1 class="heading">Shohrukh Davlatov</h1>
        <h3 class="heading">Software Engineer</h3>

        <p class="summary">
          I have 5+ years of experience in Software Development. I am passionate
          about writing clean & high-quality code and creating Enterprise,
          Single Page, Business Intelligence Web Apps using JavaScript,
          TypeScript, Angular and React. Also interested in Programming Contest
          Challenges, mainly use C++, Java, Python for solving algorithmic
          problems. From time to time, I write articles on different topics:
          Applied Mathematics, Computer Security and Data Analysis.
        </p>
      </header>

      <main class="main">
        <section class="section" id="personal-info">
          <h3 class="section__title">Personal Info</h3>

          <div class="section__content">
            <div class="section__entry">
              <h4 class="personal-info-title">Address</h4>
              <div class="personal-info-text">
                Minsk, Belarus
              </div>
            </div>

            <div class="section__entry">
              <h4 class="personal-info-title">Phone</h4>
              <div class="personal-info-text">
                [+1234567890]
              </div>
            </div>

            <div class="section__entry">
              <h4 class="personal-info-title">E-mail</h4>
              <div class="personal-info-text">
                [email@email.com]
              </div>
            </div>

            <div class="section__entry">
              <h4 class="personal-info-title">LinkedIn</h4>
              <div class="personal-info-text">
                /in/shohrukh
              </div>
            </div>

            <div class="section__entry">
              <h4 class="personal-info-title">GitHub</h4>
              <div class="personal-info-text">
                /shohrukh92
              </div>
            </div>

            <div class="section__entry">
              <h4 class="personal-info-title">Skype</h4>
              <div class="personal-info-text">
                shohrukh.davlatov
              </div>
            </div>
          </div>
        </section>
      </main>

      <main class="main">
        <aside class="main__left">
          <section class="section">
            <h3 class="section__title">Skills</h3>

            <div class="section__content">
              <div class="section__entry">
                <div class="skill-item">
                  HTML
                  <div class="skill-item__levels level4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div class="section__entry">
                <div class="skill-item">
                  CSS, SASS
                  <div class="skill-item__levels level4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div class="section__entry">
                <div class="skill-item">
                  JS, ES6+, TypeScript
                  <div class="skill-item__levels level5">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div class="section__entry">
                <div class="skill-item">
                  Angular2+
                  <div class="skill-item__levels level5">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div class="section__entry">
                <div class="skill-item">
                  AngularJS
                  <div class="skill-item__levels level4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div class="section__entry">
                <div class="skill-item">
                  Redux, NgRx
                  <div class="skill-item__levels level4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="section__entry">
                <div class="skill-item">
                  React
                  <div class="skill-item__levels level3">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="section__entry">
                <div class="skill-item">
                  Bootstrap, Material
                  <div class="skill-item__levels level3">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="section__entry">
                <div class="skill-item">
                  Node.js
                  <div class="skill-item__levels level2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div class="section__entry">
                <div class="skill-item">
                  Git
                  <div class="skill-item__levels level4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div class="section__entry">
                <div class="skill-item">
                  SQL
                  <div class="skill-item__levels level3">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div class="section__entry">
                <div class="skill-item">
                  C++, Java, Python
                  <div class="skill-item__levels level2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section">
            <h3 class="section__title">Languages</h3>

            <div class="section__content">
              <p class="section__entry"><strong>Persian</strong> (native)</p>
              <p class="section__entry">
                <strong>English</strong> (upper - intermediate)
              </p>
              <p class="section__entry"><strong>Russian</strong> (fluent)</p>
            </div>
          </section>

          <section class="section" id="edu-section">
            <h3 class="section__title">Education</h3>

            <div class="section__content">
              <div class="timeline">
                <div class="timeline__date">
                  <strong>09.2016 - </strong>
                </div>

                <div class="timeline__content">
                  <div class="timeline__title">
                    <span
                      >Belarusian State University of Informatics and
                      Radioelectronics, PhD Degree</span
                    >
                  </div>

                  <h4 class="timeline__subtitle">Specialty</h4>
                  <p>Information Security.</p>
                </div>
              </div>

              <div class="timeline">
                <div class="timeline__date">
                  <strong>09.2014 - 06.2016</strong>
                </div>

                <div class="timeline__content">
                  <div class="timeline__title">
                    <span>Tajik Technical University, Master's degree</span>
                  </div>

                  <h4 class="timeline__subtitle">Specialty</h4>
                  <p>Automated Systems of Information Processing.</p>

                  <h4 class="timeline__subtitle">Achievements</h4>
                  <ul class="timeline__list">
                    <li>Graduated with Honors;</li>
                  </ul>
                </div>
              </div>

              <div class="timeline">
                <div class="timeline__date">
                  <strong>09.2010 - 06.2014</strong>
                </div>

                <div class="timeline__content">
                  <div class="timeline__title">
                    <span
                      >Lomonosov Moscow State University, Bachelor's
                      degree</span
                    >
                  </div>

                  <h4 class="timeline__subtitle">Specialty</h4>
                  <p>Applied Mathematics and Computer Science.</p>

                  <h4 class="timeline__subtitle">Achievements</h4>
                  <ul class="timeline__list">
                    <li>Graduated with Honors and Gold Medal;</li>
                    <li>
                      Prizewinner of several International Olympiads in
                      Mathematics, Physics and Informatics;
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </aside>

        <div class="main__right">
          <section class="section">
            <h3 class="section__title">Experience</h3>

            <div class="section__content">
              <div class="timeline">
                <div class="timeline__date">
                  <strong>07.2019 - present</strong>
                </div>

                <div class="timeline__content">
                  <div class="timeline__title">
                    <span>SENIOR FRONTEND DEVELOPER,</span>
                    <span>INSPECTORIO, MINSK</span>
                  </div>

                  <ul class="timeline__list">
                    <li>
                      Creating complex and dynamic forms using Angular and React
                      frameworks;
                    </li>
                    <li>
                      Creating custom UI library for components and directives;
                    </li>
                    <li>
                      Building large scale Frontend Application Architecture;
                    </li>
                    <li>Writing unit tests using Jasmine and Jest;</li>
                  </ul>

                  <h4 class="timeline__subtitle">Tech Stack</h4>
                  <p>
                    <em
                      >Angular2+, React, Redux, JavaScript, TypeScript, HTML,
                      CSS, SASS.</em
                    >
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="timeline__date">
                  <strong>07.2018 – 07.2019</strong>
                </div>

                <div class="timeline__content">
                  <div class="timeline__title">
                    <span>SENIOR FRONTEND DEVELOPER,</span>
                    <span>ANDERSENLAB, MINSK</span>
                  </div>

                  <ul class="timeline__list">
                    <li>
                      Creating custom/reusable components using Angular, React
                      and Redux;
                    </li>
                    <li>
                      Writing unit-, end2end- and visual-tests using Jasmine,
                      Protractor and Spectre tools.
                    </li>
                    <li>
                      Cross browser development of Enterprise Single Page
                      Applications (IE, Edge, FF, Chrome, Safari);
                    </li>
                    <li>
                      Creating adaptive and flexible layouts for mobile devices
                      (mobile-first approach);
                    </li>
                    <li>
                      Migration of large-scale web app from Angular1 to
                      Angular2+;
                    </li>
                    <li>
                      Frontend technical interviewer for job candidates and
                      mentorship;
                    </li>
                  </ul>

                  <h4 class="timeline__subtitle">Tech Stack</h4>
                  <p>
                    <em
                      >Angular1, Angular2+, React, Redux, JavaScript,
                      TypeScript, HTML, CSS, SASS, Angular Material,
                      Bootstrap.</em
                    >
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="timeline__date">
                  <strong>04.2017 – 06-2018</strong>
                </div>

                <div class="timeline__content">
                  <div class="timeline__title">
                    <span>FRONTEND ENGINEER,</span>
                    <span>SOFTTECO LLC, MINSK</span>
                  </div>

                  <ul class="timeline__list">
                    <li>
                      Successfully lead Frontend team; Scrum Story/Tasks
                      decomposition and estimation for sprints;
                    </li>
                    <li>
                      Creating custom/reusable components with complex
                      diagrams/charts using Angular2+ and GoJS library;
                    </li>
                    <li>
                      Cross browser development of Enterprise Single Page
                      Applications (IE, Edge, FF, Chrome, Safari);
                    </li>
                    <li>
                      Writing Unit Tests and Integration tests using Karma &
                      Jasmine;
                    </li>
                    <li>Frontend technical interviewer for job candidates;</li>
                  </ul>

                  <h4 class="timeline__subtitle">Tech Stack</h4>
                  <p>
                    <em
                      >Angular1, Angular2+, JavaScript, TypeScript, HTML, CSS,
                      SASS, Bootstrap, GoJS, Webpack.</em
                    >
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="timeline__date">
                  <strong>11.2015 – 04.2017</strong>
                </div>

                <div class="timeline__content">
                  <div class="timeline__title">
                    <span>SENIOR SOFTWARE ENGINEER,</span>
                    <span>CONFIDA, USA (REMOTE)</span>
                  </div>

                  <ul class="timeline__list">
                    <li>
                      Development and maintenance of enterprise-wide Business
                      Intelligence application;
                    </li>
                    <li>
                      Optimizing web-applications for desktop & mobile browsers;
                    </li>
                    <li>
                      Creating custom components/widgets/services using Angular
                      framework; Implementing different charts and diagrams
                      using D3js library;
                    </li>
                    <li>Migration from Angular1 to Angular2+;</li>
                  </ul>

                  <h4 class="timeline__subtitle">Tech Stack</h4>
                  <p>
                    <em
                      >Angular1, Angular2+, React, JavaScript, TypeScript, HTML,
                      CSS, SASS, Bootstrap, D3js charts, OpenStreetMap, Leaflet,
                      Webpack.</em
                    >
                  </p>
                </div>
              </div>

              <div class="timeline">
                <div class="timeline__date">
                  <strong>01.2014 – 10.2015</strong>
                </div>

                <div class="timeline__content">
                  <div class="timeline__title">
                    <span>FULL STACK DEVELOPER,</span>
                    <span>ADAD LLC, DUSHANBE</span>
                  </div>

                  <ul class="timeline__list">
                    <li>
                      Creating united educational & intellectual web-platform
                      for students and teachers;
                    </li>
                    <li>
                      Implementing modules: E-University, E-Library, E-Market,
                      E-Business and Social Network;
                    </li>
                  </ul>

                  <h4 class="timeline__subtitle">Tech Stack</h4>
                  <p>
                    <em
                      >JavaScript, HTML, CSS, Bootstrap, jQuery, PHP
                      (CodeIgniter, Laravel), MySQL.</em
                    >
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </body>
</html>

    `;
};




