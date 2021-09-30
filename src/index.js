import { render } from "react-dom";
import Example from "./example";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useState } from "react";
import { DataSharing } from "./DataSharing";

function App() {
  const [toolBox, setToolBox] = useState([]);

  const dispatchEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_USER":
        let tBox = toolBox;
        tBox.push(payload.tool);
        setToolBox(tBox);
        return;
      case "REMOVE_USER":
        setToolBox(toolBox.filter((tool) => tool !== payload.tool));
        return;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <DataSharing.Provider value={{ toolBox, dispatchEvent }}>
          <Example />
        </DataSharing.Provider>
      </DndProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
