import "./App.css";
import Form from "./components/Form";
import FormList from "./components/FormList";
import { Provider } from "./context/FormContext";

function App() {
  return (
    <Provider>
      <div className="App">
        <Form />
        <FormList />
      </div>
    </Provider>
  );
}

export default App;
