import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";

const JobCard = () => {
  return (
    <Card style={{ width: "100%" }} className="my-3 card">
      <Card.Header
        className="d-flex align-items-center"
        style={{ backgroundColor: "none" }}
      >
        {/* Company Logo */}
        <img
          src="https://via.placeholder.com/50" // Placeholder for company logo
          alt="Company Logo"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <div>
          <h5>Frontend Developer</h5>
          <small className="secondary-text fw-bold">Company Name</small>
        </div>
      </Card.Header>
      <Card.Body>
        <div className="mb-2">
          <small className="text-muted">Location: Cairo, Egypt</small> |{" "}
          <small className="text-muted">Posted: 2024-10-01</small>
        </div>
        <div className="mb-2">
          <small>Experience: 3+ Years</small> | <small>Full-Time</small> |{" "}
          <small>Remote</small>
        </div>
        <div className="mt-2">
          {/* Job Tags */}
          <Badge bg="primary" className="me-1">
            Programming
          </Badge>
          <Badge bg="secondary" className="me-1">
            React.js
          </Badge>
          <Badge bg="info" className="me-1">
            Design
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
