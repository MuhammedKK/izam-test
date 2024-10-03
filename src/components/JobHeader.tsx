import React from "react";
import SwitchButton from "./buttons/SwitchButton";
import { Button } from "react-bootstrap";
import { useSidebar } from "../context/sidebar-context";
import { BiMenu } from "react-icons/bi";

const JobHeader = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <div className="d-flex p-4 primary-bg">
        <div className="d-flex flex-column me-auto">
          <h4>UI Designer In Egypt</h4>
          <p>70 Job Position</p>
        </div>
        <div className="d-flex gap-1">
          <span className="p-1">Set Alert</span>
          <SwitchButton />
        </div>
        <Button
          className="d-lg-none mx-2" // Only show on small screens (lg or below)
          onClick={toggleSidebar}
          style={{
            backgroundColor: "transparent",
            border: "1px solid #EEE",
            width: "40px",
            height: "40px",
          }}
        >
          <BiMenu size={15} /> {/* Menu icon */}
        </Button>
      </div>
    </>
  );
};

export default JobHeader;
