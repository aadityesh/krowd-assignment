import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemList from "./Components/ItemList";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itemlist" element={<ItemList />} />
      </Routes>
    </Router>
  );
}

export default App;
