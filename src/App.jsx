import Form from "./components/Form";
import Resultado from "./components/Resultado";
import Header from "./components/Header";

import "./global.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <Form />
        <Resultado />
      </div>
    </div>
  );
}

export default App;
