import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { githubConfig } from "../../content_option";


export const Github = () => {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubConfig.username}`);
        const data = await response.json();

        const repoRes = await fetch(`https://api.github.com/users/${githubConfig.username}/repos?sort=updated&per_page=5`);
        const repos = await repoRes.json();

        setGithubData({ ...data, repos });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGithubData();
  }, []);

  if (!githubData) {
    return <div className="loading-bar"></div>;
  }

  if (githubData && githubData.message === "Not Found") {
    return (
      <div style={{ padding: "2rem", color: "red" }}>
        <h2>User not found on GitHub</h2>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>GitHub | Ransher Raj Verma</title>
          <meta name="description" content="GitHub Activity and Stats" />
        </Helmet>

        <Row className="mb-3">
          <Col>
            <h1 className="display-4 mb-2">GitHub Overview</h1>
            <hr className="t_border my-2 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h1 className="color_sec mb-2">Profile Info</h1>
            <ul>
              <li><strong>Name:</strong> {githubData.name}</li>
              <li><strong>Username:</strong> {githubData.login}</li>
              <li><strong>Bio:</strong> {githubData.bio}</li>
              <li><strong>Location:</strong> {githubData.location}</li>
              <li><strong>Public Repos:</strong> {githubData.public_repos}</li>
              <li><strong>Followers:</strong> {githubData.followers}</li>
              <li><strong>Following:</strong> {githubData.following}</li>
              <li><a href={githubData.html_url} target="_blank" rel="noreferrer">View GitHub Profile</a></li>
            </ul>
          </Col>

          <Col md={6} className="d-flex align-items-center">
            <div className="text-start">
              <img src={githubData.avatar_url} alt="Avatar" className="img-fluid rounded mb-3" style={{ maxHeight: "250px" }} />
              <ul>
                <li><strong>Company:</strong> {githubData.company || "N/A"}</li>
                <li><strong>Blog:</strong> {githubData.blog ? <a href={githubData.blog} target="_blank" rel="noreferrer">{githubData.blog}</a> : "N/A"}</li>
                <li><strong>Email:</strong> {githubData.email || "Not public"}</li>
                <li><strong>Twitter:</strong> {githubData.twitter_username ? <a href={`https://twitter.com/${githubData.twitter_username}`} target="_blank" rel="noreferrer">@{githubData.twitter_username}</a> : "N/A"}</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h1 className="color_sec mb-2">Recent Repositories</h1>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Language</th>
                    <th>Updated At</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {githubData.repos.map((repo, index) => (
                    <tr key={index}>
                      <td>{repo.name}</td>
                      <td>{repo.description || "N/A"}</td>
                      <td>{repo.language || "N/A"}</td>
                      <td>{new Date(repo.updated_at).toLocaleDateString()}</td>
                      <td><a href={repo.html_url} target="_blank" rel="noreferrer">Repo Link</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h1 className="color_sec mb-2">GitHub Stats</h1>
            <Row>
              <Col md={6} className="mb-3">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${githubConfig.username}&show_icons=true&theme=default`}
                  alt="GitHub stats"
                  className="img-fluid"
                />
              </Col>
              <Col md={6} className="mb-3">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubConfig.username}&layout=compact&theme=default`}
                  alt="Top languages"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
