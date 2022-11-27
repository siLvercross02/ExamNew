import "antd/dist/reset.css";
import "../styles/globals.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import store from "../config/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </Provider>
  );
}

export default MyApp;
