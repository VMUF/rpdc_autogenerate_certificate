import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import GlobalStyle from "./style/GlobalStyle";
import Home from "./pages/Home";
import Main from "./pages/Main";
import TempCert from "./pages/TempCert";
import UploadCert from "./pages/UploadCert";

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/rpdc_autogenerate_certificate/",
        element: <Navigate replace to="/temCert" />,
      },
      {
        path: "/rpdc_autogenerate_certificate/temCert",
        element: <TempCert />,
      },
      {
        path: "/rpdc_autogenerate_certificate/uploadowncert",
        element: <UploadCert />,
      },
    ],
  },
  { path: "home", element: <Home /> },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
