import React from "react";
import { Col } from "react-bootstrap";
import JobCard from "../components/JobCard";
import JobHeader from "../components/JobHeader";

const Content = () => {
  return (
    <Col md={8} className="p-3">
      <JobHeader />
      <JobCard />
      <JobCard />
      <JobCard />
    </Col>
  );
};

export default Content;
