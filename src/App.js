import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/Components/Header.js";
import { Provider } from "react-redux";
import { store } from "./Redux";
import "../src/index.css";
import "../src/Components/Shop/Button.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
      </div>
    </Provider>
  );
}

export default App;
