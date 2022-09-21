import "./App.css";
import Form from "./components/Form";
import FormList from "./components/FormList";
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
