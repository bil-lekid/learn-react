import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Protected from "./components/AuthLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
