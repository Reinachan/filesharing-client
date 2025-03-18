import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { AuthContextProvider } from "contexts";

import { Router } from "./Router";

import "styles/index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
