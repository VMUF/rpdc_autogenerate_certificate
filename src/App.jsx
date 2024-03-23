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
    path: "/rpdc_autogenerate_certificate/home",
    index: "/rpdc_autogenerate_certificate/home",
    element: <Home />,
  },
  {
    element: <Main />,
    children: [
      {
        path: "/rpdc_autogenerate_certificate//temCert",
        element: (
          <Navigate replace to="/rpdc_autogenerate_certificate/temCert" />
        ),
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
