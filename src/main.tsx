import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { Header } from "components";
import { SessionContextProvider } from "contexts";

import { Router } from "./Router";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SessionContextProvider>
        <Header />
        <main id="main">
          <Router />
        </main>
      </SessionContextProvider>
    </BrowserRouter>
  </StrictMode>
);
