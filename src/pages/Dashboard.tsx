import React, { useEffect, useState } from "react";
import NavLayout from "../layout/Navbar";
import { Row } from "react-bootstrap";
import Sidebar from "../layout/Sidebar";
import Content from "../layout/Content";

const Dashboard = () => {
  const [navigation, setNavigation] = useState([]);

  useEffect(() => {
    // Fetching the data from the API endpoint
    fetch(`${import.meta.env.VITE_API_URL}/nav`) // Replace with the actual endpoint URL
      .then((response) => response.json())
      .then((data) => {
        setNavigation(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <NavLayout />
      <Row>
        <Sidebar navigation={navigation} />
        <Content />
      </Row>
    </>
  );
};

export default Dashboard;
