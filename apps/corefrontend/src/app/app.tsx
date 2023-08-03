// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./app.module.scss";
import ChatWidget from "./chatwidget";

import NxWelcome from "./nx-welcome";

import { Route, Routes, Link } from "react-router-dom";

export function App() {
  return (
    <>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Chatwidget</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<ChatWidget></ChatWidget>} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
