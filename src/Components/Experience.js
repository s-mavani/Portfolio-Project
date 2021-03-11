import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>May 2020 - December 2020</h3>
            <h4><strong>Marshall School of Business, University of Southern California - Full Stack Developer (Los Angeles)</strong></h4>
            <p>Worked as a full-stack developer in a team of 4 at Marshall School of Business to create a web application for researchers with published papers. Worked on automating the gathering of data by writing python scripts to eliminate the manual work they have been doing until now. Created an admin interface using Angular, MongoDB, Express, and Node.js to manage the application. Worked on Mapping the authors to their publications automatically as the new papers are added to eliminate the manual hours put into this every month. Followed agile methodology with weekly sprints by concurrently developing and testing the features followed by sprint retrospective to efficiently build the product.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>September 2019 - December 2019</h3>
            <h4><strong>Witsmo - Software Engineer Intern (Los Angeles)</strong></h4>
            <p>Member of the Mobile Development Team working on React Native and Nodejs. Played crucial roles in designing the backend interface along with requirements gathering of the system. Gathered requirements, defined scope, and scheduled negotiation meetings with the client to define deliverables. Conceptualized multiple wireframes using Balsamiq to help the client focus on functionality early during the design process and reduce technical debt. Managed project and tracked bugs using JIRA to help prioritize upcoming tasks. Enforced agile methodology with 2-week sprints and pair programming.</p>
          </div>
        </div>
        {/* - */}

        {/* - */}
 
        {/* - */}

        {/* - */}

      </div>
    </div>
  )
}

export default Experience;
