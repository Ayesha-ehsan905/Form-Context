import "./App.css";
import Form from "./components/Form";
import { Provider } from "./context/FormContext";

function App() {
  return (
    <Provider>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
