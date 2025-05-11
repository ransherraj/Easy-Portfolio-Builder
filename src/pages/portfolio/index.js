import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg={8}>
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* All Projects */}
        {dataportfolio.map((data, i) => (
          <Row key={i} className="mb-5 align-items-center">
            {/* Project Image Left */}
            <Col md={6} className="mb-3 mb-md-0">
              <div className="po_item">
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={data.img}
                    alt="project"
                    className="img-fluid rounded shadow-sm"
                    style={{ background: "none", boxShadow: "none" }} // Remove background and shadow
                  />
                </a>
              </div>
            </Col>

            {/* Project Details Right */}
            <Col md={6}>
              <div className="content">
                <h2 className="project-description mb-2">{data.description}</h2>
                <p className="project-details mb-3">{data.details}</p>
                <a
                  href={data.link ? data.link : "#"} // Replace with your actual resume link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div id="button_h" className="ac_btn btn">
                    View Project
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </a>

                <a
                  href={data.demo ? data.demo : "#"} // Replace with your actual resume link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div id="button_p" className="ac_btn btn ">
                      Demo
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                </a>

                
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </HelmetProvider>
  );
};
