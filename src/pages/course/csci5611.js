import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
    
import Sidebar from '../../components/Sidebar';
import YouTube from 'react-youtube';

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';

export const query = graphql`
  query {
    contentfulCourses(id: {eq: "5e543b3b-a195-5695-9a77-d6bf3deb4bef"}) {
      classTitle
      classDescription {
        json
      }
      classDate
      projects {
        projectTitle
        projectDescription {
          json
        }
        youtubeID
        projectUrl
      }
    }
  }
`;

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file } = node.data.target.fields;
      console.log("Node info", node.data.target.fields)
      if (file["en-US"].contentType === "image/png") {
        return <img alt="" src={file["en-US"].url} />
      } else {
        return <video src={file["en-US"].url} controls>
          Your browser does not support the video tag.
        </video>
        
      }
      
    }
  }
};

const Course = ({ data }) => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            <span className="text-primary">{data.contentfulCourses.classTitle}</span>
          </h1>
          <div className="subheading mb-5">
            {data.contentfulCourses.classDate}
          </div>
          <p className="lead mb-5">
            {documentToReactComponents(data.contentfulCourses.classDescription.json)}
          </p>
          <p className="lead mb-5">
            {data.contentfulCourses.projects.map((project, index) => {
              return (<a href={"#" + project.id}>{project.projectTitle}</a>)
            })}
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>

          {data.contentfulCourses.projects.map((project, index) => {
            console.log(project.projectDescription.json);
            return (
              <div key={project.id} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">

                <div id={project.id} key={project.id} className="resume-content">
                  <h3 className="mb-1">{project.projectTitle}</h3>
                  {documentToReactComponents(project.projectDescription.json, options)}
                  {project.youtubeID ? <YouTube videoId={project.youtubeID} /> : <p></p>}
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary"><a href={project.projectUrl}>Github</a></span>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  </Layout>
);

export default Course;
