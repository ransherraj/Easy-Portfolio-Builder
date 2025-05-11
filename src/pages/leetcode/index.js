import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import {codingProfiles} from "../../content_option"; // Adjust the path if needed

export const CodingProfile = () => {
  const [leetcodeProfile, setLeetcodeProfile] = useState(null);
  const [codeforcesProfile, setCodeforcesProfile] = useState(null);

  const { leetcodeUsername, codeforcesHandle } = codingProfiles;

  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`);
        const data = await response.json();
        setLeetcodeProfile({ ...data, username: leetcodeUsername });
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };

    const fetchCodeforcesData = async () => {
      try {
        const response = await fetch(`https://codeforces.com/api/user.info?handles=${codeforcesHandle}`);
        const json = await response.json();
        if (json.status === "OK") {
          setCodeforcesProfile(json.result[0]);
        }
      } catch (error) {
        console.error("Error fetching Codeforces data:", error);
      }
    };

    fetchLeetcodeData();
    fetchCodeforcesData();
  }, [leetcodeUsername, codeforcesHandle]);

  if (!leetcodeProfile || !codeforcesProfile) {
    return <div className="loading-bar">Loading Coding Profiles...</div>;
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Coding Profiles | Ransher Raj Verma</title>
          <meta name="description" content="Competitive Programming Profiles" />
        </Helmet>

        <Row className="mb-3">
          <Col>
            <h1 className="display-4 mb-2">Coding Profiles Overview</h1>
            <hr className="t_border my-2 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="mb-4 align-items-start">
          {/* LeetCode */}
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h2 className="color_sec mb-3">LeetCode</h2>
            <ul>
              <li><strong>Username:</strong> {leetcodeProfile.username}</li>
              <li><strong>Ranking:</strong> {leetcodeProfile.ranking || "N/A"}</li>
              <li><strong>Total Solved:</strong> {leetcodeProfile.totalSolved}</li>
              <li><strong>Easy Solved:</strong> {leetcodeProfile.easySolved}</li>
              <li><strong>Medium Solved:</strong> {leetcodeProfile.mediumSolved}</li>
              <li><strong>Hard Solved:</strong> {leetcodeProfile.hardSolved}</li>
              <li><a href={`https://leetcode.com/${leetcodeProfile.username}`} target="_blank" rel="noreferrer">View LeetCode Profile</a></li>
            </ul>
          </Col>

          {/* Codeforces */}
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h2 className="color_sec mb-3">Codeforces</h2>
            <ul>
              <li><strong>Handle:</strong> {codeforcesProfile.handle}</li>
              <li><strong>Rating:</strong> {codeforcesProfile.rating}</li>
              <li><strong>Max Rating:</strong> {codeforcesProfile.maxRating}</li>
              <li><strong>Rank:</strong> {codeforcesProfile.rank}</li>
              <li><strong>Max Rank:</strong> {codeforcesProfile.maxRank}</li>
              <li><strong>Friends Count:</strong> {codeforcesProfile.friendOfCount}</li>
              <li><a href={`https://codeforces.com/profile/${codeforcesProfile.handle}`} target="_blank" rel="noreferrer">View Codeforces Profile</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default CodingProfile;
