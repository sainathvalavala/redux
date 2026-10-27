import { createRoot } from "react-dom/client";
import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";

/*
 * PROVIDER (from react-redux)
 * --------
 * <Provider store={store}> makes the Redux store available to every component
 * inside it (it uses React Context under the hood). Without it, connect() and
 * hooks like useSelector/useDispatch would have no store to read from.
 * Wrap it around the root component once.
 */
createRoot(document.getElementById("root")).render(
<Provider store={store}>
<App />
</Provider>);
