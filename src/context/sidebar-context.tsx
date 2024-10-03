import React, { createContext, useState, useContext } from 'react';

interface SidebarContextProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

// Create the SidebarContext
const SidebarContext = createContext({
  showSidebar: false,
  toggleSidebar: () => {},
}as SidebarContextProps);

// Sidebar Provider Component
export const SidebarProvider = ({ children }:any) => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ showSidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the SidebarContext
export const useSidebar = () => useContext(SidebarContext);
