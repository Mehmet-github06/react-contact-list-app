import Contacts from "./components/Contacts";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTitle(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {title && (
        <h1 className="title">Save your friends in the contact list 🖋</h1>
      )}

      <Contacts />
    </div>
  );
}

export default App;
