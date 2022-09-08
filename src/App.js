import "./App.css";
import Search from "./components/search/search";
function App() {
  return (
    <div className="container">
      <Search onSearchChange={handleOnChangeSearch} />
    </div>
  );
}

export default App;
