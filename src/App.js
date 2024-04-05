import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Settings from "./pages/Settings/settings";
import View from "./pages/view/view.js";
import ErrorPage from "./pages/Errorpage/errorPage.js";

// Router -> root is set to settings page to ensure the use enter the settings first and then go to site.
const router = createBrowserRouter([
  {
    path: "",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Settings /> },
      { path: "/view", element: <View /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
