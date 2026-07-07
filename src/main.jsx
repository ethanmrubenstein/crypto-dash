import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SpeedInsights />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
