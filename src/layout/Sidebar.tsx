import { useEffect, useState } from "react";
import { Button, Col, ListGroup, Offcanvas } from "react-bootstrap";
import { GoGear } from "react-icons/go";
import { useSidebar } from "../context/sidebar-context";
import SidebarItem from "../components/SidebarItem";
import { GoCheckCircle } from "react-icons/go";
import { GoXCircle } from "react-icons/go";

const Sidebar = ({ navigation }: any) => {
  // State to manage open/closed dropdowns
  const [openDropdowns, setOpenDropdowns] = useState({});
  const { showSidebar, toggleSidebar } = useSidebar(); // Use sidebar state and toggle function
  const [items, setItems] = useState([]); // State to hold the items
  console.log("items", items);
  // Function to move items
  const moveItem = (fromIndex: number, toIndex: number) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
    trackNavigation({
      id: movedItem,
      from: fromIndex,
      to: toIndex,
    });
  };

  // Toggle dropdowns
  const handleToggleDropdown = (id: any) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Recursive function to render sidebar items
  const renderListItems = () => {
    return (
      items &&
      items.length > 0 &&
      items
        .filter((item: any) => item.visible !== false)
        .map((item: any, index: number) => (
          <SidebarItem
            key={item.id}
            item={item}
            index={index}
            moveItem={moveItem}
            openDropdowns={openDropdowns}
            handleToggleDropdown={handleToggleDropdown}
            parentId={item.id}
          />
        ))
    );
  };
  const trackNavigation = ({ id, from, to }: any) => {
    fetch(`${import.meta.env.VITE_API_URL}/track`, {
      method: "POST",
      body: JSON.stringify({ id, from, to }),
    }) // Replace with the actual endpoint URL
      .then((response) => {
        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON from the response
      })
      .then((res) => {
        console.log("Submitted successfully", res); // Handle the response data
      })
      .catch((error) => {
        console.log(error);
        `Error: ${error.message}`; // Handle errors
      });
  };
  const submitNavigation = (updatedItems: any) => {
    fetch(`${import.meta.env.VITE_API_URL}/nav`, {
      method: "POST",
      body: JSON.stringify(updatedItems),
    }) // Replace with the actual endpoint URL
      .then((response) => {
        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON from the response
      })
      .then((res) => {
        console.log("Submitted successfully", res); // Handle the response data
      })
      .catch((error) => {
        console.log(error);
        `Error: ${error.message}`; // Handle errors
      });
  };
  useEffect(() => {
    setItems(navigation);
  }, [navigation]);
  return (
    <Col md={4} className="bg-light d-none d-lg-block">
      {/* Sidebar Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 p-4">
        <h4>Menu</h4>
        <div>
          <GoXCircle
            size={30}
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => {
              setItems(navigation);
            }}
          />
          <GoCheckCircle
            size={30}
            style={{ marginLeft: "5px", color: "green", cursor: "pointer" }}
            onClick={() => {
              submitNavigation(items);
            }}
          />
        </div>
      </div>
      <hr />

      {/* Sidebar List */}
      <div className="d-none d-lg-block">
        <ListGroup variant="flush">{renderListItems()}</ListGroup>
      </div>
      {/* Sidebar Offcanvas for small screens */}
      <Offcanvas
        show={showSidebar}
        onHide={toggleSidebar}
        placement="end" // Panel slides in from the right
        className="d-lg-none" // Only show on small screens (lg or below)
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
          <div className="mx-2">
            <GoXCircle
              size={30}
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => {
                setItems(navigation);
              }}
            />
            <GoCheckCircle
              size={30}
              style={{ marginLeft: "5px", color: "green", cursor: "pointer" }}
              onClick={() => {
                submitNavigation(items);
              }}
            />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">{renderListItems()}</ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </Col>
  );
};

export default Sidebar;
