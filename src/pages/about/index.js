import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
  resumeData,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-3">
          <Col>
            <h1 className="display-4 mb-2">About me</h1>
            <hr className="t_border my-2 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            {/* <h3 className="color_sec mb-2">{dataabout.title}</h3> */}
            <p>{dataabout.aboutme}</p>
          </Col>
        </Row>


        <Row className="mb-4">
  <Col>
    <h1 className="color_sec mb-2">Education</h1>
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {resumeData.education.map((edu, index) => (
            <tr key={index}>
              <td>{edu.degree}</td>
              <td>{edu.institution}</td>
              <td>{edu.year}</td>
              <td>{edu.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Col>
</Row>


        <Row className="mb-4">
          <Col>
            <h1 className="color_sec mb-2">Work Timeline</h1>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Organization</th>
                    <th>Duration</th>
                    <th>Achievement</th>
                  </tr>
                </thead>
                <tbody>
                  {worktimeline.map((data, i) => (
                    <tr key={i}>
                      <td>{data.jobtitle}</td>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                      <td>{data.achievement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h1 className="color_sec mb-2">Skills</h1>
            <Row>
              {skills.map((data, i) => (
                <Col md={6} className="mb-3" key={i}>
                  <h6 className="progress-title mb-1">{data.name}</h6>
                  <div
                    className="progress"
                    style={{ height: "20px", backgroundColor: "#e0e0e0" }}
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                        backgroundColor: "var(--bs-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      role="progressbar"
                      aria-valuenow={data.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span
                        className="progress-title"
                        style={{ fontSize: "0.8rem", color: "#fff" }}
                      >
                        {data.value}%
                      </span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h1 className="color_sec mb-2">Services</h1>
            <Row>
              {services.map((data, i) => (
                <Col md={6} key={i} className="mb-2">
                  <div className="service_">
                    <h5 className="service__title">{data.title}</h5>
                    <p className="service_desc">{data.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="mt-4 mb-4">
              <a
                href={resumeData.resumeLink ? resumeData.resumeLink : "#"} // Replace with your actual resume link
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="button_h" className="ac_btn btn">
                  My Resume
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
