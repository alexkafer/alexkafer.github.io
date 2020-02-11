import React from 'react';

import Layout from '../components/Layout';

import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          I am a computer scientist with 9+ years of Web Development (HTML, CSS, Javascript, PHP) both with and without frameworks such as Angular.JS, Node.JS, React.JS, Ruby on Rails.
          </p><p className="lead mb-5">
I am attending the University of Minnesota, pursuing a Bachelor of Science in Computer Science with a minor in Product Design.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Microsoft</h3>
              <div className="subheading mb-3">Program Manager Intern, Project xCloud</div>
              <p>
                Designed a full team feature spec for dynamically scaling game content with user demand by utilizing standard predictive and reactive scaling methodologies. Outlined project requirements and set priorities for various team milestones, conducted numerous design review sessions, and incorporated feedback from leadership.

                Thanks to developer support, the highest priority section was completed and pushed to production in time for the first public preview of Project xCloud, with future sections focused on full commercial rollout of the game streaming platform.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2019 - Aug 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">NASA - Johnson Space Center</h3>
              <div className="subheading mb-3">Artificial Intelligence and Machine Learning Intern</div>
              <p>
                Completed two semester long assignments in Houston, TX. First was a project titled "Artificial Intelligence and Machine Learning Applications in Requirement Tailoring", a brand new smart AI tool that needs to be designed from the ground up within the Space Exploration branch of Safety and Mission Assurance.
                <ul>
                  <li>Architected and developed a tool to tailor applicable statements from a pool of over 10,000 requirements</li>
                  <li>Modeled and trained a Natural Language Processor using Python to classify requirement documents</li>
                  <li>Designed a front-end interface in Angular 6, working within existing internal enterprise security procedures</li>
                </ul>
              </p>
                <p>
                Second, I worked in the 1958 co-working space working on various projects to encourage creativity and innovation within NASA. Through self-directed projects, I was able:
                <ul>
                    <li>Designed, programmed, and internally published an iPad kiosk application (swift) used for effortless visitor check-in, provide live wait times, and to simplify officer operations at the center’s badging office</li>
                <li>Architected and prototyped a robotic assistant using a Double Telepresence robot, iPad, and ROS</li>
                <li>Integrated numerous existing applications following an agency wide Office 365 migration</li>
                </ul></p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2018 – May 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Polaris Industries</h3>
              <div className="subheading mb-3">Ride Command Software Intern</div>
              <p>
              At the two summers I spent at Polaris, I worked as a technology intern within the Ride Command team. At its roots, Ride Command is a display for Polaris brand Snowmobiles, ATVs, RZRs, Ranger, General, Indian Motorcycle, and Slingshot vehicles. My job focused on the companion applications that functioned alongside the on-vehicle display.
              </p>
                <p>
My job spanned three separate functions. Feature development, Automated Testing, and Manual Vehicle Testing. My primary focus was the companion web portal.
During my first summer, my workflow was as follows. I implemented a feature based on UX specs within an agile development team (including peer review and pull request), followed by manual testing and finished by designing the automated test in Selenium. This process repeated throughout the summer.
</p>
                <p>
My second summer focused on the full Selenium testing suite. Through incremental improvements and developer feedback, I enhanced existing automated Selenium UI tests by increasing full suite tests by 78% and more than doubled code coverage. I also spearheaded deployment of entire DevOps testing suite to nightly tests using Jenkins and BrowserStack, and created a health dashboard intended to measure usage and crash statistics for the Polaris Ride Command system.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2017 – Aug 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Turck Inc. USA</h3>
              <div className="subheading mb-3">Test Engineer Intern</div>
              <p>
              The summer before my freshman year of college, I worked as a Test Engineering intern with Turck Inc, one of the premier industrial automation sensor companies in the world. During a short 12 week period, I developed a web platform that displayed and stored continuous data from various sensor tests, documented code and produced a in-depth user manual to ensure future usability.
              </p>
                <p>
As a side project for the Human Resources department, I developed a health care iOS app for employees to access health related resources and implemented a custom content management system based off of Firebase, with a focus on reliability and intuitive design.
</p></div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jun 2016 – Aug 2016</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Minnesota, Twin Cities</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science</div>
              <p>GPA: 3.89</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2016 - May 2020</span>
            </div>
          </div>
        </div>
      </section>

      {/* <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section> */}

      {/* <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" /> */}

      {/* <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section> */}
    </div>
  </Layout>
);

export default IndexPage;
