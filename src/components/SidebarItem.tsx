import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ListGroup, Collapse } from "react-bootstrap";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

// Item type for DnD
const ITEM_TYPE = "SIDEBAR_ITEM";

const SidebarItem = ({
  item,
  index,
  moveItem,
  openDropdowns,
  handleToggleDropdown,
}: any) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(draggedItem: any) {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index; // Update the index for the dragged item
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref)); // Combine drag and drop refs

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }} key={item.id}>
      <ListGroup.Item
        action
        onClick={() => handleToggleDropdown(item.id)}
        aria-controls={`collapse-${item.id}`}
        aria-expanded={openDropdowns[item.id] || false}
        className="d-flex justify-content-between align-items-center mb-1"
      >
        <div className="d-flex w-100 justify-content-between align-items-center">
          <span>{item.title}</span>
          {item.children?.length > 0 &&
            (openDropdowns[item.id] ? <BiChevronUp /> : <BiChevronDown />)}
        </div>
      </ListGroup.Item>
      {item.children && item.children?.length > 0 && (
        <Collapse in={openDropdowns[item.id]}>
          <div id={`collapse-${item.id}`} className="ml-3">
            <ListGroup>
              {item.children
                .filter((child: any) => child.visible !== false)
                .map((child: any, childIndex: number) => (
                  <SidebarItem
                    key={child.id}
                    item={child}
                    index={childIndex} // This might need to be adjusted based on the parent index
                    openDropdowns={openDropdowns}
                    handleToggleDropdown={handleToggleDropdown}
                  />
                ))}
            </ListGroup>
          </div>
        </Collapse>
      )}
    </div>
  );
};

export default SidebarItem;
