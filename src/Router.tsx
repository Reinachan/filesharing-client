import { Route, Routes } from "react-router";

import { SignIn } from "pages";

import App from "./App";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="download" />
      <Route path="upload" />
      <Route path="files" />
      <Route path="users" />
      <Route path="profile" />
      <Route path="signin" element={<SignIn />} />
    </Routes>
  );
}
