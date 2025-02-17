// node Modules
import { createRoot } from "react-dom/client";

// components
import App from "./App.tsx";

// redux
import { Provider } from "react-redux";
import store from "./store/store.tsx";

// styles
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
);
