import React, { useState } from "react";
import Stopwatch from "./Stopwatch";

function App() {
  const [time, setTime] = useState(0);
  return (
    <div>
      <Stopwatch
        time={time}
        setTime={setTime}
        btnstyle={"bg-blue-400 text-white px-6 py-4 rounded-full"}
      />
    </div>
  );
}

export default App;
