import "./App.css";

import { LeftSide } from "./components/left-side-landing-page";
import { RightSide } from "./components/right-side-landing-page";
import { useState } from "react";

function App() {
  const [selectedCalculation, setSelectedCalculation] = useState<string>("");

  const handleSelectCalculation = (calc: string) => {
    setSelectedCalculation(calc);
  };

  return (
    <>
      <div className="flex">
        <LeftSide onSelectCalculation={handleSelectCalculation} />
        <RightSide selectedCalculation={selectedCalculation} />
      </div>
    </>
  );
}

export default App;
