import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element, children }) => (
          <Route key={path} path={path} element={element}>
            {children &&
              children.map((child, index) =>
                child.index ? (
                  <Route key={index} index element={child.element} />
                ) : (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={child.element}
                  />
                )
              )}
          </Route>
        ))}
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} style={{ top: "15px" }} />
    </BrowserRouter>
  );
}

export default App;
