import "./styling/App.scss";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import EmailList from "./components/EmailList";

function App() {
  return (
    <div className="App wrapper">
      <Header />
      <Welcome />
      <EmailList />
    </div>
  );
}

export default App;
