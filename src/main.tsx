import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { store } from "./store/store.ts";
import { SidebarProvider } from "./context/sidebar-context.tsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <SidebarProvider>
      <DndProvider backend={HTML5Backend}>
        <App />
        </DndProvider>
      </SidebarProvider>
    </Provider>
  </StrictMode>
);
