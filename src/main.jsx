import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routers/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toasters from "./Components/Share/Toasters";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toasters />
    </QueryClientProvider>
  </StrictMode>
);
