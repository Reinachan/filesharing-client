import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { SessionContextProvider } from "contexts";

import { Router } from "./Router";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SessionContextProvider>
        <Router />
      </SessionContextProvider>
    </BrowserRouter>
  </StrictMode>
);
